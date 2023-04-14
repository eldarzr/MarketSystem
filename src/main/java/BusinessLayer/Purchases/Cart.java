package BusinessLayer.Purchases;

import BusinessLayer.Shops.Product;

import java.util.ArrayList;
import java.util.LinkedList;
import java.util.List;
import java.util.concurrent.ConcurrentHashMap;
import java.util.logging.Logger;
import java.util.stream.Collectors;

public class Cart {

    private static final Logger logger = Logger.getLogger("Market");

    ConcurrentHashMap<String,ShopBag> cart = new ConcurrentHashMap<>();

    public ShopBag getShoppingBag(String shopName) {
      ShopBag sb = cart.get(shopName);
      if(sb == null){
          logger.warning(String.format("unable to find %s in shopping cart",shopName));
          throw new IllegalArgumentException(String.format("unable to find %s in shopping cart",shopName));
      }
      return sb;
    }

    public void addProduct(String shopName, Product product, int quantity) throws Exception {
        if(!cart.containsKey(shopName))
            cart.put(shopName,new ShopBag());
        ShopBag shopBag = getShopBag(shopName);
        shopBag.addProduct(product,quantity);
    }

    private ShopBag getShopBag(String shopName) throws Exception {
        ShopBag shopBag = cart.get(shopName);
        if(shopBag == null)
            throw new Exception(String.format("there is no shopping bag for this shop. shop name: %s",shopName));
        return shopBag;
    }

    public void updateProductQuantity(String shopName, String productName, int newQuantity) throws Exception {
        ShopBag shopBag = getShopBag(shopName);
        shopBag.updateProductQuantity(productName,newQuantity);
    }

    public List<String> getShopsNames(){
        return new ArrayList<>(cart.keySet());
    }

    public void removeProduct(String shopName, String productName) throws Exception {
        ShopBag shopBag = getShopBag(shopName);
        shopBag.removeProduct(productName);
    }

    public ConcurrentHashMap<String, ShopBag> getShopsAndProducts() {
        return cart;
    }

    public List<Product> getAllProducts() {
        List<Product> products = new LinkedList<>();
        for(ShopBag shopBag : cart.values()){
            products.addAll(shopBag.getProducts());
        }
        return products;
    }
}