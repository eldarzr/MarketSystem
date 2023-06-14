package BusinessLayer.Purchases;

import BusinessLayer.PersistenceManager;
import BusinessLayer.ShopBagId;
import BusinessLayer.Shops.Product;

import javax.persistence.*;
import java.io.Serializable;
import java.util.*;
import java.util.concurrent.ConcurrentHashMap;
import java.util.logging.Logger;

@Entity
@Table(name = "carts")
public class Cart implements Serializable {

    @Transient
    private static final Logger logger = Logger.getLogger("Market");

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "userName")
    private String userName;

    @OneToMany(cascade = CascadeType.ALL)
    @MapKeyColumn(name = "shopName") // specify the index column
    @JoinColumn(name = "cart_id") // specify the join column in ShopBag table
    private Map<String, ShopBag> cart = new ConcurrentHashMap<>();

    public Cart() {
    }

    public Cart(String userName){
        this.userName = userName;
    }

    public ShopBag getShoppingBag(String shopName) {
      ShopBag sb = cart.get(shopName);
      if(sb == null){
          logger.warning(String.format("unable to find %s in shopping cart",shopName));
          throw new IllegalArgumentException(String.format("unable to find %s in shopping cart",shopName));
      }
      return sb;
    }

    public void addProduct(String shopName, Product product, int quantity) throws Exception {
        boolean alreadyExists = cart.containsKey(shopName);
        if(!alreadyExists)
            cart.put(shopName,new ShopBag(shopName, userName));
        ShopBag shopBag = getShoppingBag(shopName);
        if(!alreadyExists)
            PersistenceManager.getInstance().persistObj(shopBag);
        shopBag.addProduct(product,quantity);
    }

    public void updateProductQuantity(String shopName, String productName, int newQuantity) throws Exception {
        ShopBag shopBag = getShoppingBag(shopName);
        shopBag.updateProductQuantity(productName,newQuantity);
        if(shopBag.isEmpty())
            cart.remove(shopName);
    }

    public List<String> getShopsNames(){
        return new ArrayList<>(cart.keySet());
    }

    public void removeProduct(String shopName, String productName) throws Exception {
        ShopBag shopBag = getShoppingBag(shopName);
        shopBag.removeProduct(productName);
    }

    public void removeProductIfExists(String shopName, String productName) throws Exception {
        ShopBag shopBag = cart.get(shopName);
        if(shopBag == null){
            return;
        }
        shopBag.removeProductIfExists(productName);
    }

    public Map<String, ShopBag> getShopsAndProducts() {
        return cart;
    }

    public List<Product> getAllProducts() {
        List<Product> products = new LinkedList<>();
        for(ShopBag shopBag : cart.values()){
            products.addAll(shopBag.getProducts());
        }
        return products;
    }

    public void clear() {
        for (String shopBagName : cart.keySet()){
            ShopBag shopBag = getShoppingBag(shopBagName);
            PersistenceManager.getInstance().removeFromDB(shopBag);
        }
        cart.clear();
    }
}