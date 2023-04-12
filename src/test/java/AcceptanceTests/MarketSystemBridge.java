package AcceptanceTests;

import BusinessLayer.Users.UserIntr;

import java.util.Collection;

public interface MarketSystemBridge {
    //Gabi added:
    void addAdmin(String userName);

    void unregister(String userName);

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

    Collection<PurchaseBridge> getUserPurchaseHistory(String userName);


    //shop functions
    void createShop(String userName, String shopName) throws Exception;

    void openShop(String userName, String shopName);

    void closeShop(String userName, String shopName);

    void addNewProduct(String userName, String shopName, String productName, String desc, double price);

    void removeProduct(String userName, String shopName, String productName);

    void updateProductName(String userName, String shopName, String productOldName, String productNewName);

    void updateProductDesc(String userName, String shopName, String productName, String productNewDesc);

    void updateProductPrice(String userName, String shopName, String productName, double price);

    void updateProductQuantity(String userName, String shopName, String productName, int quantity);

    void addProductItems(String userName, String shopName, String productName, int quantity);

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

    //4.11
    Collection<UserIntr> getShopManagersAndPermissions(String userName, String shopName);

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

    // Queries for tests
    boolean isRegistered(String userName);

    boolean isLogged(String userName);

    boolean isBlocked(String userName);

    boolean isAdmin(String userName);

    boolean shopExists(String shopName);

    boolean isShopOpen(String shopName);

    boolean productExistsInShop(String shopName, String productName);

    boolean productExistsInCart(String userName, String productName);

    boolean hasPermission(String userName, String shopName, String permission);

    int getProductQuantityInShop(String shopName, String productName);

    String getProductDescription(String shopName, String productName);

    double getProductPrice(String shopName, String productName);

    String getShopFounder(String shopName);

    Collection<String> getShopOwners(String shopName);

    Collection<String> getShopManagers(String shopName);

    int getQuantityOfProductPurchasedInShop(String shopName, String productName);

    int getQuantityOfProductPurchasedInShopByUser(String userName, String shopName, String productName);

    void clearData();

    void addPaymentProvider(PaymentServiceProviderBridge paymentSystem);

    boolean isGuest(String userName);

    String[] getShopList();

    String[] getProductList(String shopName);

    void updateProductQuantityInCart(String UserName, String shopName, String productName, int newQuantity);

    void removeProductsFromCart(String UserName, String shopName, String productName);

    void addNewProduct(String testUser, String shopName, String productName, String desc, double price, int quantity);

    void purchaseCart(String userName, String cardNumber, String cardName, String cardDate, String cardVerificationCode);

    void purchaseCart(String userName, String cardNumber, String cardName, String cardDate, String cardVerificationCode, String discountCode);

    void setDiscountPolicy(SystemDiscountPolicyBridge systemDiscountPolicyBridge);
}
