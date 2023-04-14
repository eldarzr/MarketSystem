package AcceptanceTests;

import java.util.Collection;

public interface MarketSystemBridge {
    //Gabi added:
    void addAdmin(String userName);

    void unregister(String userName);

    //open and initialize the market system
    void init() throws Exception;


    //guest functions
    //return string that identifies him
    String startSession();

    void closeSession(String userName);

    void register(String userName, String email, String password) throws Exception;

    void login(String userName, String password);


    //member function

    void logout(String userName);

    Collection<PurchaseBridge> getUserPurchaseHistory(String userName);


    //shop functions
    void createShop(String userName, String shopName) throws Exception;

    void openShop(String userName, String shopName);

    void closeShop(String userName, String shopName) throws Exception;

    void addNewProduct(String userName, String shopName, String productName, String category, String desc, double price) throws Exception;

    void removeProduct(String userName, String shopName, String productName) throws Exception;

    void updateProductName(String userName, String shopName, String productOldName, String productNewName) throws Exception;

    void updateProductDesc(String userName, String shopName, String productName, String productNewDesc) throws Exception;

    void updateProductPrice(String userName, String shopName, String productName, double price) throws Exception;

    void updateProductQuantity(String userName, String shopName, String productName, int quantity) throws Exception;

    void addProductItems(String userName, String shopName, String productName, int quantity) throws Exception;

    ShopBridge getShop(String userName, String shopName) throws Exception;

    ProductBridge getProduct(String userName, String shopName, String productName) throws Exception;

    Collection<ProductBridge> basicSearch(String userName, String productName) throws Exception;

    Collection<ProductBridge> extendedSearch(String userName, String productName, double minPrice, double maxPrice,
                                           String category) throws Exception;

    //4.4
    void appointShopOwner(String appointedBy, String appointee, String shopName) throws Exception;

    //4.6
    void appointShopManager(String appointedBy, String appointee, String shopName) throws Exception;

    void removeShopManager(String managerName, String userToRemove, String shopName);

    //4.7

    void changeManagerPermissions(String actor, String actOn, String shopName, int permission) throws Exception;


    //4.13
    Collection<PurchaseBridge> getShopPurchaseHistory(String userName, String shopName);

    //admin functions

    void removeShop(String adminName, String userName, String shopName);

    void blockUser(String adminName, String UserName);

    //6.1
    Collection<PurchaseBridge> getShopPurchaseHistoryByAdmin(String adminName, String shopName);

    //6.2
    Collection<PurchaseBridge> getUserPurchaseHistoryByAdmin(String adminName, String memberName);


    //cart function

    ShoppingCartBridge getCart(String userName);

    ShopBagBridge getShopBag(String userName, String ShopName);

    void addProductsToCart(String userName, String shopName, String productName, int quantity);

    void updateProductsFromCart(String userName, String shopName, String productName, int newQuantity);

    //connect to payment adapter and delivery adapter
    void purchaseCart(String userName);

    int getProductQuantityInShop(String shopName, String productName) throws Exception;

    String getProductDescription(String shopName, String productName) throws Exception;

    double getProductPrice(String shopName, String productName) throws Exception;

    String getShopFounder(String shopName) throws Exception;

    Collection<String> getShopOwners(String shopName) throws Exception;



    Collection<String> getShopManagers(String shopName) throws Exception;


    void clearData();

    void addPaymentProvider(PaymentServiceProviderBridge paymentSystem);

    void updateProductQuantityInCart(String UserName, String shopName, String productName, int newQuantity);

    void removeProductsFromCart(String UserName, String shopName, String productName);

    void addNewProduct(String testUser, String shopName, String productName,String category, String desc, double price, int quantity) throws Exception;

    void purchaseCart(String userName, String cardNumber, String cardName, String cardDate, String cardVerificationCode);

    void purchaseCart(String userName, String cardNumber, String cardName, String cardDate, String cardVerificationCode, String discountCode);

    void setDiscountPolicy(SystemDiscountPolicyBridge systemDiscountPolicyBridge);

    boolean isShopOwner(String ownerUserName, String shopName) throws Exception;

    boolean isShopManager(String ownerUserName, String shopName) throws Exception;

    Collection<Integer> getManagerPermissionsInShop(String shopManager, String shopName) throws Exception;

    void removeShopOwner(String ShopOwner, String shopOwner, String shopName);
}
