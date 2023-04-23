package ServiceLayer.DataObjects;

import BusinessLayer.Purchases.ShopBag;
import BusinessLayer.Purchases.ShopBagItem;
import BusinessLayer.Shops.Product;

import java.util.List;
import java.util.concurrent.ConcurrentHashMap;
import java.util.stream.Collectors;

public class ShopBagDataObj {

    ConcurrentHashMap<String, ShopBagItemDataObj> productsAndQuantities;

    public ShopBagDataObj(ConcurrentHashMap<String, ShopBagItemDataObj> productsAndQuantities) {
        this.productsAndQuantities = productsAndQuantities;
    }

    public ShopBagDataObj(ShopBag shopBag) {
        productsAndQuantities = new ConcurrentHashMap<>();
        ConcurrentHashMap<String, ShopBagItem> productsMap = shopBag.getProductsAndQuantities();
        for (String key : productsMap.keySet())
            productsAndQuantities.put(key, new ShopBagItemDataObj(productsMap.get(key)));
    }

    public ConcurrentHashMap<String, ShopBagItemDataObj> getProductsAndQuantities() {
        return productsAndQuantities;
    }

    public void setProductsAndQuantities(ConcurrentHashMap<String, ShopBagItemDataObj> productsAndQuantities) {
        this.productsAndQuantities = productsAndQuantities;
    }
}
