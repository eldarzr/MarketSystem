package BusinessLayer;

import BusinessLayer.Purchases.Cart;
import BusinessLayer.Purchases.PurchaseIntr;
import BusinessLayer.Purchases.ShopBag;
import BusinessLayer.Shops.ProductIntr;
import BusinessLayer.Shops.ShopIntr;
import BusinessLayer.Users.UserIntr;
import java.util.*;


public interface MarketIntr {

    //open and initialize the market system
    void init();


    //guest functions
    //return string that identifies him
    String startSession();

    void closeSession(String userName);

    void register(String userName, String email, String password) throws Exception;

    void login(String userName, String password);


    //member function

    void logout(String userName);

    Collection<PurchaseIntr> getUserPurchaseHistory(String userName);


    //shop functions
    void createShop(String userName, String shopName) throws Exception;

    void openShop(String userName, String shopName);

    void closeShop(String userName, String shopName);

    public void addNewProduct(String userName, String shopName, String productName, String category, String desc,
                              double price) throws Exception;

    void removeProduct(String userName, String shopName, String productName) throws Exception;

    void updateProductName(String userName, String shopName, String productOldName, String productNewName) throws Exception;

    void updateProductDesc(String userName, String shopName, String productName, String productNewDesc) throws Exception;

    void updateProductPrice(String userName, String shopName, String productName, double price) throws Exception;

    void updateProductQuantity(String userName, String shopName, String productName, int quantity);

    void addProductItems(String userName, String shopName, String productName, int quantity);

    ShopIntr getShop(String userName, String shopName) throws Exception;

    ProductIntr getProduct(String userName, String shopName, String productName) throws Exception;

    Collection<ProductIntr> basicSearch(String userName, String productName) throws Exception;

    Collection<ProductIntr> extendedSearch(String userName, String productName, double minPrice, double maxPrice,
                                           String category) throws Exception;

    //4.4
    void appointShopOwner(String appointedBy, String appointee, String shopName) throws Exception;

    //4.6
    void appointShopManager(String appointedBy, String appointee, String shopName) throws Exception;

    void removeShopManager(String managerName, String userToRemove, String shopName);

    //4.7

    void changeManagerPermissions(String actor, String actOn, String shopName, int permission) throws Exception;

    //4.11
    Collection<UserIntr> getShopManagersAndPermissions(String userName, String shopName);

    //4.13
    Collection<PurchaseIntr> getShopPurchaseHistory(String userName, String shopName);

    //admin functions

    void removeShop(String adminName, String userName, String shopName);

    void blockUser(String adminName, String UserName);

    //6.1
    Collection<PurchaseIntr> getShopPurchaseHistoryByAdmin(String adminName, String shopName);

    //6.2
    Collection<PurchaseIntr> getUserPurchaseHistoryByAdmin(String adminName, String memberName);


    //cart function

    Cart getCart(String userName);

    ShopBag getShopBag(String userName, String ShopName);

    void addProductsToCart(String userName, String shopName, String productName, int quantity);

    void updateProductsFromCart(String userName, String shopName, String productName, int newQuantity);

    //connect to payment adapter and delivery adapter
    void purchaseCart(String userName);



}
