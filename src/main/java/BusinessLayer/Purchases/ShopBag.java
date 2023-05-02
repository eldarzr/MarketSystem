package BusinessLayer.Purchases;

import BusinessLayer.Shops.Product;


import java.text.DecimalFormat;
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

    public ShopBag(ConcurrentHashMap<String, ShopBagItem> productsAndQuantities){
        this.productsAndQuantities = productsAndQuantities;
    }

    public void addProduct(Product product, int quantity) {
        ShopBagItem shopBagItem = new ShopBagItem(product,quantity);
        if(productsAndQuantities.containsKey(product.getName())){
            ShopBagItem ExistingShopBagItem = productsAndQuantities.get(product);
            ExistingShopBagItem.setQuantity(ExistingShopBagItem.getQuantity()+quantity);
        }
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
        return new ShopBag(productsAndQuantitiesClone);
    }
}
