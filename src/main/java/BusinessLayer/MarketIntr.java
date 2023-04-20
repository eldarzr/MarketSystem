package BusinessLayer;

import BusinessLayer.ExternalSystemsAdapters.PaymentDetails;
import BusinessLayer.ExternalSystemsAdapters.SupplyDetails;
import BusinessLayer.Purchases.*;
import BusinessLayer.Shops.ProductIntr;
import BusinessLayer.Shops.Shop;
import BusinessLayer.Users.User;

import java.util.*;


public interface MarketIntr {

    //open and initialize the market system
    void init() throws Exception;

    public void resetAll();

    //guest functions
    //return string that identifies him
    String startSession();

    void closeSession(String userName);

    User register(String userName, String email, String password) throws Exception;

    void login(String guestName, String userName, String password);


    //member function

    String logout(String userName);

    Collection<UserInvoice> getUserPurchaseHistory(String userName);


    //shop functions
    void createShop(String userName, String shopName) throws Exception;

    void openShop(String userName, String shopName);

    void closeShop(String userName, String shopName) throws Exception;

    public void addNewProduct(String userName, String shopName, String productName, String category, String desc,
                              double price) throws Exception;

    void removeProduct(String userName, String shopName, String productName) throws Exception;

    void updateProductName(String userName, String shopName, String productOldName, String productNewName) throws Exception;

    void updateProductDesc(String userName, String shopName, String productName, String productNewDesc) throws Exception;

    void updateProductPrice(String userName, String shopName, String productName, double price) throws Exception;

    void updateProductQuantity(String userName, String shopName, String productName, int quantity) throws Exception;

    void addProductItems(String userName, String shopName, String productName, int quantity) throws Exception;

	Shop searchShop(String userName, String shopName) throws Exception;

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

    MemberRoleInShop changeManagerPermissions(String actor, String actOn, String shopName, List<Integer> permission) throws Exception;

    void addManagerPermissions(String actor, String actOn, String shopName, int permission) throws Exception;

    //4.11
    Collection<MemberRoleInShop> getShopManagersAndPermissions(String userName, String shopName) throws Exception;

    //4.13
    Collection<ShopInvoice> getShopPurchaseHistory(String userName, String shopName) throws Exception;

    //admin functions

    void addAdmin(String adminName) throws Exception;

    void removeShop(String adminName, String userName, String shopName);

    void blockUser(String adminName, String UserName);

    //6.1
    Collection<ShopInvoice> getShopPurchaseHistoryByAdmin(String adminName, String shopName) throws Exception;

    //6.2
    Collection<UserInvoice> getUserPurchaseHistoryByAdmin(String adminName, String memberName) throws Exception;


    //cart function

    Cart getCart(String userName);

    ShopBag getShopBag(String userName, String ShopName);

    void addProductsToCart(String userName, String shopName, String productName, int quantity) throws Exception;

    //todo remove product from cart
    void removeProductFromCart(String userName, String shopName, String productName) throws Exception;

    void updateCartProductQuantity(String userName, String shopName, String productName, int newQuantity) throws Exception;

    //connect to payment adapter and delivery adapter
    void purchaseCart(String userName, PaymentDetails paymentDetails, SupplyDetails supplyDetails) throws Exception;

    String unregister(String userName);
}
