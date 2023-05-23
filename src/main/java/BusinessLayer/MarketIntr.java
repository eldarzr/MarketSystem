package BusinessLayer;

import BusinessLayer.Bids.Bid;
import BusinessLayer.ExternalSystemsAdapters.PaymentDetails;
import BusinessLayer.ExternalSystemsAdapters.SupplyDetails;
import BusinessLayer.Purchases.*;
import BusinessLayer.Shops.ProductIntr;
import BusinessLayer.Shops.PurchasePolicies.ComplexPolicyType;
import BusinessLayer.Shops.PurchasePolicies.PurchasePolicy;
import BusinessLayer.Shops.Shop;
import BusinessLayer.Users.User;

import java.time.LocalDate;
import java.util.*;


public interface MarketIntr {

    //open and initialize the market system
    void init(String configPath) throws Exception;

    public void resetAll();

    //guest functions
    //return string that identifies him
    String startSession();

    void closeSession(String userName);

    User register(String userName, String email, String password) throws Exception;

    User login(String guestName, String userName, String password);


    //member function

    String logout(String userName);

    Collection<UserInvoice> getUserPurchaseHistory(String userName);


    //shop functions
    Shop createShop(String userName, String shopName) throws Exception;

    void openShop(String userName, String shopName) throws Exception;

    void closeShop(String userName, String shopName) throws Exception;

    public void addNewProduct(String userName, String shopName, String productName, String category, String desc,
                              double price) throws Exception;

    void removeProduct(String userName, String shopName, String productName) throws Exception;

//    void updateProductName(String userName, String shopName, String productOldName, String productNewName) throws Exception;

    void updateProductDesc(String userName, String shopName, String productName, String productNewDesc) throws Exception;

    void updateProductPrice(String userName, String shopName, String productName, double price) throws Exception;

    void updateProductQuantity(String userName, String shopName, String productName, int quantity) throws Exception;

    void updateProductCategory(String userName, String shopName, String productName, String category) throws Exception;

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

    void removeShopManager(String managerName, String userToRemove, String shopName) throws Exception;

    //4.7

    //next version
    void removeShopOwner(String managerName, String userToRemove, String shopName) throws Exception;

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
    //Bid functions
    public void createBidOffer (String userName, String productName, String shopName, double bidPrice) throws Exception ;
    public Collection<Bid> getPendingBids(String userName, String shopName) throws Exception ;
    public Collection<Bid> getApprovedBids(String userName,String shopName) throws Exception;
    public Collection<Bid> getRejectedBids(String userName,String shopName) throws Exception ;
    public void approveBid(String userName, int bidId) throws Exception;
    public void rejectBid(String userName, int bidId) throws Exception ;

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
