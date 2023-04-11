package BusinessLayer.Shops;

import java.util.concurrent.ConcurrentHashMap;

public class ShopHandler {
    ConcurrentHashMap<String,Shop> shops;


    private static class  ShopHolder {
        private static ShopHandler  instance = new ShopHandler() ;
    }
    private ShopHandler()  {
       this.shops = new ConcurrentHashMap<>();
    }


    public void shopExists(String shopName) throws Exception {
        if(shops.containsKey(shopName))
            throw new Exception("there is already shop with that name");
    }

    public void addShop(String shopName, Shop shop) throws Exception {
        shopExists(shopName);
        shops.put(shopName, shop);
    }

    public void closeShop(String userName, String shopName) throws Exception {
        Shop reqShop = getShop(shopName);
        reqShop.closeShop(userName);
    }

    public Shop getShop(String shopName) throws Exception {
        if(!shops.containsKey(shopName))
            throw new Exception("there is no such shop named :" +shopName);
        return shops.get(shopName);
    }

    public  ConcurrentHashMap<String, Shop> getShops() {
        return this.shops;
    }
    public static ShopHandler  getInstance() {
        return ShopHolder. instance;
    }

    public void reset() {
        shops.clear();
    }
}
