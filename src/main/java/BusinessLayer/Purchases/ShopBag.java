package BusinessLayer.Purchases;

import BusinessLayer.Shops.Product;


import java.util.Collection;
import java.util.List;
import java.util.concurrent.ConcurrentHashMap;
import java.util.stream.Collectors;

public class ShopBag {

    public ConcurrentHashMap<String, ShopBagItem> getProductsAndQuantities() {
        return productsAndQuantities;
    }

    ConcurrentHashMap<String, ShopBagItem> productsAndQuantities;

    public ShopBag() {
        this.productsAndQuantities = new ConcurrentHashMap<>();
    }

    public void addProduct(Product product, int quantity) {
        ShopBagItem shopBagItem = new ShopBagItem(product,quantity);
        productsAndQuantities.put(product.getName(),shopBagItem);
    }

    public void updateProductQuantity(String productName, int newQuantity) {
        ShopBagItem shopBagItem = productsAndQuantities.get(productName);
        if(shopBagItem == null){
            throw new IllegalArgumentException(String.format("could not find %s in this shop bag",productName));
        }
        shopBagItem.setQuantity(newQuantity);
    }

    public void removeProduct(String productName) throws Exception {
        if(!getProductsAndQuantities().containsKey(productName))
            throw new Exception("could not find product "+ productName);
        getProductsAndQuantities().remove(productName);
    }

    public List<Product> getProducts() {
        return getProductsAndQuantities().values().stream().map(ShopBagItem::getProduct).collect(Collectors.toList());
    }
}
