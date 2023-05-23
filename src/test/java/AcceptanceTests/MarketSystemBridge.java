package AcceptanceTests;

import BusinessLayer.Bids.Bid;
import BusinessLayer.Shops.PurchasePolicies.PurchasePolicy;

import java.time.LocalDate;
import java.util.Collection;
import java.util.Map;

public interface MarketSystemBridge {
    //Gabi added:
    void addAdmin(String userName);

    void unregister(String userName);

    //open and initialize the market system
    void init(String configPath) throws Exception;


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

//    void updateProductName(String userName, String shopName, String productOldName, String productNewName) throws Exception;

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

    void removeShopManager(String managerName, String userToRemove, String shopName) throws Exception;

    //4.7

    void changeManagerPermissions(String actor, String actOn, String shopName, int permission) throws Exception;


    //4.13
    Collection<PurchaseBridge> getShopPurchaseHistory(String userName, String shopName) throws Exception;

    //admin functions

    void removeShop(String adminName, String userName, String shopName);

    void blockUser(String adminName, String UserName);

    //6.1
    Collection<PurchaseBridge> getShopPurchaseHistoryByAdmin(String adminName, String shopName) throws Exception;

    //6.2
    Collection<PurchaseBridge> getUserPurchaseHistoryByAdmin(String adminName, String memberName) throws Exception;


    //cart function

    ShoppingCartBridge getCart(String userName);

    ShopBagBridge getShopBag(String userName, String ShopName);

    void addProductsToCart(String userName, String shopName, String productName, int quantity) throws Exception;

    void updateProductsFromCart(String userName, String shopName, String productName, int newQuantity) throws Exception;

    //connect to payment adapter and delivery adapter
    void purchaseCart(String userName) throws Exception;

    int getProductQuantityInShop(String shopName, String productName) throws Exception;

    String getProductDescription(String shopName, String productName) throws Exception;

    double getProductPrice(String shopName, String productName) throws Exception;

    String getShopFounder(String shopName) throws Exception;

    Collection<String> getShopOwners(String shopName) throws Exception;



    Collection<String> getShopManagers(String shopName) throws Exception;


    void clearData();

    void addPaymentProvider(PaymentServiceProviderBridge paymentSystem);

    void updateProductQuantityInCart(String UserName, String shopName, String productName, int newQuantity) throws Exception;

    void removeProductsFromCart(String UserName, String shopName, String productName) throws Exception;

    void addNewProduct(String testUser, String shopName, String productName,String category, String desc, double price, int quantity) throws Exception;

    void purchaseCart(String userName, String cardNumber, String cardName, String cardDate, String cardVerificationCode) throws Exception;

    void purchaseCart(String userName, String cardNumber, String cardName, String cardDate, String cardVerificationCode, String discountCode) throws Exception;

    void setDiscountPolicy(SystemDiscountPolicyBridge systemDiscountPolicyBridge);

    boolean isShopOwner(String ownerUserName, String shopName) throws Exception;

    boolean isShopManager(String ownerUserName, String shopName) throws Exception;

    Collection<Integer> getManagerPermissionsInShop(String shopManager, String shopName) throws Exception;

    void removeShopOwner(String ShopOwner, String shopOwner, String shopName);

    //Bid functions
    public void createBidOffer (String userName, String productName, String shopName, double bidPrice) throws Exception ;
    public Collection<Bid> getPendingBids(String userName, String shopName) throws Exception ;
    public Collection<Bid> getApprovedBids(String userName,String shopName) throws Exception ;
    public Collection<Bid> getRejectedBids(String userName,String shopName) throws Exception;
    public void approveBid(String userName, int bidId) throws Exception;
    public void rejectBid(String userName, int bidId) throws Exception;
    //Purchase policy functions
    public Map<Integer, PurchasePolicy> getAllPurchasePolicies(String userName, String shopName) throws Exception ;
    public void setActivePurchasePolicy(String userName, String shopName, int policyId) throws Exception ;
    public Integer getActivePurchasePolicyId(String userName, String shopName) throws Exception;
    public void addAgePurchasePolicy(String userName, String shopName,boolean isProduct, String toConstraint,boolean positive,int startAge, int endAge)throws Exception;
    public void addQuantityPurchasePolicy(String userName, String shopName,boolean isProduct, String toConstraint,boolean positive,int minQuantity, int maxQuantity)throws Exception;
    public void removeDiscount(String shopName, String userName, int discountId) throws Exception;
    public void addDatePurchasePolicy(String userName, String shopName, boolean isProduct, String toConstraint, boolean positive, LocalDate startDate, LocalDate endDate)throws Exception;
    public void addTimePurchasePolicy(String userName, String shopName,boolean isProduct, String toConstraint,boolean positive,int startHour, int endHour)throws Exception;
    public void addOrPurchasePolicy(String userName, String shopName,int pid1, int pid2)throws Exception;
    public void addAndPurchasePolicy(String userName, String shopName,int pid1, int pid2)throws Exception;
    public void addIfPurchasePolicy(String userName, String shopName,int pid1, int pid2)throws Exception;
}
