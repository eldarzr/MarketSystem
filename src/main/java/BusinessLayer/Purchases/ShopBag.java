package BusinessLayer.Purchases;

import BusinessLayer.PersistenceManager;
import BusinessLayer.ShopBagId;
import BusinessLayer.ShopBagItemId;
import BusinessLayer.Shops.Product;


import javax.persistence.*;
import java.io.Serializable;
import java.text.DecimalFormat;
import java.util.Collection;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;
import java.util.stream.Collectors;

@Entity
@Table(name = "shop_bags")
//@IdClass(ShopBagId.class)
public class ShopBag implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

//    @Id
    @Column(name = "shopName")
    private String shopName;

//    @Id
    @Column(name = "userName")
    private String userName;


    @OneToMany(cascade = CascadeType.ALL)
    @MapKeyColumn(name = "productName") // specify the index column
    @JoinColumn(name = "shop_bag_id") // specify the join column in ShopBag table
    private Map<String, ShopBagItem> productsAndQuantities = new ConcurrentHashMap<>();

    public ShopBag() {
    }

    public ShopBag(String shopName, String userName) {
        this.productsAndQuantities = new ConcurrentHashMap<>();
        this.shopName = shopName;
        this.userName = userName;
    }

    public ShopBag(Map<String, ShopBagItem> productsAndQuantities, String shopName, String userName){
        this.productsAndQuantities = productsAndQuantities;
        this.shopName = shopName;
        this.userName = userName;
    }

    public Map<String, ShopBagItem> getProductsAndQuantities() {
        return productsAndQuantities;
    }

    public void addProduct(Product product, int quantity) {
        ShopBagItem shopBagItem = new ShopBagItem(product,quantity, userName);
        if(productsAndQuantities.containsKey(product.getName())){
            ShopBagItem ExistingShopBagItem = productsAndQuantities.get(product.getName());
            ExistingShopBagItem.setQuantity(ExistingShopBagItem.getQuantity()+quantity);
            PersistenceManager.getInstance().updateObj(ExistingShopBagItem);
        }
        else {
            PersistenceManager.getInstance().persistObj(shopBagItem);
            productsAndQuantities.put(product.getName(), shopBagItem);
        }
    }

    public void updateProductQuantity(String productName, int newQuantity) {
        ShopBagItem shopBagItem = productsAndQuantities.get(productName);
        if(shopBagItem == null){
            throw new IllegalArgumentException(String.format("could not find %s in this shop bag",productName));
        }
        if(newQuantity == 0){
            productsAndQuantities.remove(productName);
        }
        shopBagItem.setQuantity(newQuantity);
    }

    public void removeProduct(String productName) throws Exception {
        if(!getProductsAndQuantities().containsKey(productName))
            throw new Exception("could not find product "+ productName);
        getProductsAndQuantities().remove(productName);
    }

    public void removeProductIfExists(String productName) throws Exception {
        if (!getProductsAndQuantities().containsKey(productName))
            return;
        ShopBagItem shopBagItem = getProductsAndQuantities().remove(productName);
        PersistenceManager.getInstance().removeFromDB(shopBagItem);

    }

    public List<Product> getProducts() {
        return getProductsAndQuantities().values().stream().map(ShopBagItem::getProduct).collect(Collectors.toList());
    }

    public double calculatePrice() {
        double price = 0.0;
        for(ShopBagItem sbi : productsAndQuantities.values()){
            double sbiPrice = sbi.getProduct().getPrice()*sbi.getQuantity();
            price = price + sbiPrice;
        }
        return price;
    }

    public ShopBag deepClone() {
        ConcurrentHashMap<String, ShopBagItem> productsAndQuantitiesClone = new ConcurrentHashMap<>();
        for(String productName : productsAndQuantities.keySet()){
            productsAndQuantitiesClone.put(productName,productsAndQuantities.get(productName).deepClone());
        }
        String shopNameClone = shopName;
        String userNameClone = userName;
        return new ShopBag(productsAndQuantitiesClone, shopNameClone, userNameClone);
    }

    public boolean isEmpty(){
        return productsAndQuantities.isEmpty();
    }

    public Long getId() {
        return id;
    }

    public String getShopName() {
        return shopName;
    }

    public String getUserName() {
        return userName;
    }
}
