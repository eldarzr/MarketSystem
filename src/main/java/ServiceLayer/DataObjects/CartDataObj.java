package ServiceLayer.DataObjects;

import BusinessLayer.Purchases.Cart;
import BusinessLayer.Purchases.ShopBag;
import BusinessLayer.Purchases.ShopBagItem;

import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

public class CartDataObj {

    ConcurrentHashMap<String, ShopBagDataObj> cart;

    public CartDataObj(ConcurrentHashMap<String, ShopBagDataObj> cart) {
        this.cart = cart;
    }

    public CartDataObj(Cart otherCart) {
        cart = new ConcurrentHashMap<>();
        Map<String, ShopBag> shopBagMap = otherCart.getShopsAndProducts();
        for (String key : shopBagMap.keySet())
            this.cart.put(key, new ShopBagDataObj(shopBagMap.get(key)));
    }

    public ConcurrentHashMap<String, ShopBagDataObj> getCart() {
        return cart;
    }

    public void setCart(ConcurrentHashMap<String, ShopBagDataObj> cart) {
        this.cart = cart;
    }

    public boolean isEmpty() {
        return cart.isEmpty();
    }
}