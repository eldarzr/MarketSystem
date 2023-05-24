package AcceptanceTests;

import BusinessLayer.Bids.Bid;
import BusinessLayer.Shops.PurchasePolicies.PurchasePolicy;

import java.time.LocalDate;
import java.util.Collection;
import java.util.Map;

public class MarketSystemProxyBridge implements MarketSystemBridge {
    MarketSystemRealBridge realBridge;

    private void nullCheck() {
        if(realBridge==null)throw new UnsupportedOperationException();
    }

    @Override
    public void init(String configPath) throws Exception {
        nullCheck();
        realBridge.init(configPath);
    }

    @Override
    public String startSession() {
        nullCheck();
        return realBridge.startSession();
    }

    @Override
    public void closeSession(String userName) {
        nullCheck();
        realBridge.closeSession(userName);
    }

    @Override
    public void register(String userName, String email, String password) throws Exception {
        nullCheck();
        realBridge.register(userName, email, password);
    }

    @Override
    public void unregister(String userName) {
        nullCheck();
        realBridge.unregister(userName);
    }

    @Override
    public void login(String userName, String password) {
        nullCheck();
        realBridge.login(userName, password);
    }

    @Override
    public void addAdmin(String userName) {
        nullCheck();
        realBridge.addAdmin(userName);
    }

    @Override
    public void logout(String userName) {
        nullCheck();
        realBridge.logout(userName);
    }

    @Override
    public Collection<PurchaseBridge> getUserPurchaseHistory(String userName) {
        nullCheck();
        return realBridge.getUserPurchaseHistory(userName);
    }

    @Override
    public void createShop(String userName, String shopName) throws Exception {
        nullCheck();
        realBridge.createShop(userName, shopName);
    }

    @Override
    public void openShop(String userName, String shopName) {
        nullCheck();
        realBridge.openShop(userName, shopName);
    }

    @Override
    public void closeShop(String userName, String shopName) throws Exception {
        nullCheck();
        realBridge.closeShop(userName, shopName);
    }

    @Override
    public void addNewProduct(String userName, String shopName, String productName, String category, String desc, double price) throws Exception {
        nullCheck();
        realBridge.addNewProduct(userName, shopName, productName, category, desc, price);
    }

    @Override
    public void removeProduct(String userName, String shopName, String productName) throws Exception {
        nullCheck();
        realBridge.removeProduct(userName, shopName, productName);
    }

//    @Override
//    public void updateProductName(String userName, String shopName, String productOldName, String productNewName) throws Exception {
//        nullCheck();
//        realBridge.updateProductName(userName, shopName, productOldName, productNewName);
//    }

    @Override
    public void updateProductDesc(String userName, String shopName, String productName, String productNewDesc) throws Exception {
        nullCheck();
        realBridge.updateProductDesc(userName, shopName, productName, productNewDesc);
    }

    @Override
    public void updateProductPrice(String userName, String shopName, String productName, double price) throws Exception {
        nullCheck();
        realBridge.updateProductPrice(userName, shopName, productName, price);
    }

    @Override
    public void updateProductQuantity(String userName, String shopName, String productName, int quantity) throws Exception {
        nullCheck();
        realBridge.updateProductQuantity(userName, shopName, productName, quantity);
    }

    @Override
    public void addProductItems(String userName, String shopName, String productName, int quantity) throws Exception {
        nullCheck();
        realBridge.addProductItems(userName, shopName, productName, quantity);
    }

    @Override
    public ShopBridge getShop(String userName, String shopName) throws Exception {
        nullCheck();
        return realBridge.getShop(userName, shopName);
    }

    @Override
    public ProductBridge getProduct(String userName, String shopName, String productName) throws Exception {
        nullCheck();
        return realBridge.getProduct(userName, shopName, productName);
    }

    @Override
    public Collection<ProductBridge> basicSearch(String userName, String productName) throws Exception {
        return null;
    }

    @Override
    public Collection<ProductBridge> extendedSearch(String userName, String productName, double minPrice, double maxPrice, String category) throws Exception {
        return null;
    }



    @Override
    public void appointShopOwner(String appointedBy, String appointee, String shopName) throws Exception {
        nullCheck();
        realBridge.appointShopOwner(appointedBy, appointee, shopName);
    }

    @Override
    public void appointShopManager(String appointedBy, String appointee, String shopName) throws Exception {
        nullCheck();
        realBridge.appointShopManager(appointedBy, appointee, shopName);
    }

    @Override
    public void removeShopManager(String managerName, String userToRemove, String shopName) throws Exception {
        nullCheck();
        realBridge.removeShopManager(managerName, userToRemove, shopName);
    }

    @Override
    public void changeManagerPermissions(String actor, String actOn, String shopName, int permission) throws Exception {

    }


    @Override
    public Collection<PurchaseBridge> getShopPurchaseHistory(String userName, String shopName) throws Exception {
        nullCheck();
        return realBridge.getShopPurchaseHistory(userName, shopName);
    }

    @Override
    public void removeShop(String adminName, String userName, String shopName) {
        nullCheck();
        realBridge.removeShop(adminName, userName, shopName);
    }

    @Override
    public void blockUser(String adminName, String UserName) {
        nullCheck();
        realBridge.blockUser(adminName, UserName);
    }

    @Override
    public Collection<PurchaseBridge> getShopPurchaseHistoryByAdmin(String adminName, String shopName) throws Exception {
        nullCheck();
        return realBridge.getShopPurchaseHistoryByAdmin(adminName, shopName);
    }

    @Override
    public Collection<PurchaseBridge> getUserPurchaseHistoryByAdmin(String adminName, String memberName) throws Exception {
        nullCheck();
        return realBridge.getUserPurchaseHistoryByAdmin(adminName, memberName);
    }

    @Override
    public ShoppingCartBridge getCart(String userName) {
        nullCheck();
        return realBridge.getCart(userName);
    }

    @Override
    public ShopBagBridge getShopBag(String userName, String ShopName) {
        nullCheck();
        return realBridge.getShopBag(userName, ShopName);
    }

    @Override
    public void addProductsToCart(String userName, String shopName, String productName, int quantity) throws Exception {
        nullCheck();
        realBridge.addProductsToCart(userName, shopName, productName, quantity);
    }

    @Override
    public void updateProductsFromCart(String userName, String shopName, String productName, int newQuantity) throws Exception {
        nullCheck();
        realBridge.updateProductsFromCart(userName, shopName, productName, newQuantity);
    }

    @Override
    public void purchaseCart(String userName) throws Exception {
        nullCheck();
        realBridge.purchaseCart(userName);
    }


    @Override
    public int getProductQuantityInShop(String shopName, String productName) throws Exception {
        nullCheck();
        return realBridge.getProductQuantityInShop(shopName, productName);
    }

    @Override
    public String getProductDescription(String shopName, String productName) throws Exception {
        nullCheck();
        return realBridge.getProductDescription(shopName, productName);
    }

    @Override
    public double getProductPrice(String shopName, String productName) throws Exception {
        nullCheck();
        return realBridge.getProductPrice(shopName, productName);
    }

    @Override
    public String getShopFounder(String shopName) throws Exception {
        nullCheck();
        return realBridge.getShopFounder(shopName);
    }

    @Override
    public Collection<String> getShopOwners(String shopName) throws Exception {
        nullCheck();
        return realBridge.getShopOwners(shopName);
    }

    @Override
    public Collection<String> getShopManagers(String shopName) throws Exception {
        nullCheck();
        return realBridge.getShopManagers(shopName);
    }

    @Override
    public void clearData() {

    }

    @Override
    public void addPaymentProvider(PaymentServiceProviderBridge paymentSystem) {

    }

    @Override
    public void updateProductQuantityInCart(String UserName, String shopName, String productName, int newQuantity) {

    }

    @Override
    public void removeProductsFromCart(String UserName, String shopName, String productName) {

    }

    @Override
    public void addNewProduct(String testUser, String shopName, String productName, String desc,String category, double price, int quantity) {

    }

    @Override
    public void purchaseCart(String userName, String cardNumber, String cardName, String cardDate, String cardVerificationCode) {

    }

    @Override
    public void purchaseCart(String userName, String cardNumber, String cardName, String cardDate, String cardVerificationCode, String discountCode) {

    }

    @Override
    public void setDiscountPolicy(SystemDiscountPolicyBridge systemDiscountPolicyBridge) {

    }

    @Override
    public boolean isShopOwner(String ownerUserName, String shopName) {
        return false;
    }

    @Override
    public boolean isShopManager(String ownerUserName, String shopName) {
        return false;
    }

    @Override
    public Collection<Integer> getManagerPermissionsInShop(String shopManager, String shopName) {
        return null;
    }

    @Override
    public void removeShopOwner(String ShopOwner, String shopOwner, String shopName) {

    }

    @Override
    public void createBidOffer(String userName, String productName, String shopName, double bidPrice) throws Exception {

    }

    @Override
    public Collection<Bid> getPendingBids(String userName, String shopName) throws Exception {
        return null;
    }

    @Override
    public Collection<Bid> getApprovedBids(String userName, String shopName) throws Exception {
        return null;
    }

    @Override
    public Collection<Bid> getRejectedBids(String userName, String shopName) throws Exception {
        return null;
    }

    @Override
    public Map<Integer, PurchasePolicy> getAllPurchasePolicies(String userName, String shopName) throws Exception {
        return null;
    }

    @Override
    public void setActivePurchasePolicy(String userName, String shopName, int policyId) throws Exception {

    }

    @Override
    public Integer getActivePurchasePolicyId(String userName, String shopName) throws Exception {
        return null;
    }

    @Override
    public void addAgePurchasePolicy(String userName, String shopName, boolean isProduct, String toConstraint, boolean positive, int startAge, int endAge) throws Exception {

    }

    @Override
    public void addQuantityPurchasePolicy(String userName, String shopName, boolean isProduct, String toConstraint, boolean positive, int minQuantity, int maxQuantity) throws Exception {

    }

    @Override
    public void removeDiscount(String shopName, String userName, int discountId) throws Exception {

    }

    @Override
    public void addDatePurchasePolicy(String userName, String shopName, boolean isProduct, String toConstraint, boolean positive, LocalDate startDate, LocalDate endDate) throws Exception {

    }

    @Override
    public void addTimePurchasePolicy(String userName, String shopName, boolean isProduct, String toConstraint, boolean positive, int startHour, int endHour) throws Exception {

    }

    @Override
    public void addOrPurchasePolicy(String userName, String shopName, int pid1, int pid2) throws Exception {

    }

    @Override
    public void addAndPurchasePolicy(String userName, String shopName, int pid1, int pid2) throws Exception {

    }

    @Override
    public void loadState(String stateFilePath) throws Exception {
        nullCheck();
        realBridge.loadState(stateFilePath);
    }

    @Override
    public void approveBid(String userName, String shopName, int bidId) throws Exception {

    }

    @Override
    public void rejectBid(String userName, String shopName, int bidId) throws Exception {

    }

    @Override
    public void addIfPurchasePolicy(String userName, String shopName, int pid1, int pid2) throws Exception {

    }
}
