package AcceptanceTests;

import BusinessLayer.Market;
import BusinessLayer.MarketIntr;
import BusinessLayer.Users.UserIntr;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

public class MarketSystemRealBridge implements MarketSystemBridge {

    MarketIntr market;

    public MarketSystemRealBridge() {
        market = new Market();
    }

    public void init() {
        market.init();
    }

    public String startSession() {
        return market.startSession();
    }

    public void closeSession(String userName) {
        market.closeSession(userName);
    }

    public void register(String userName, String email, String password) throws Exception {
        market.register(userName, email, password);
    }

    @Override
    public void unregister(String userName) {
        throw new UnsupportedOperationException();
    }

    public void login(String userName, String password) {
        market.login(userName, password);
    }

    @Override
    public void addAdmin(String userName) {
        throw new UnsupportedOperationException();
    }

    public void logout(String userName) {
        market.logout(userName);
    }

    public Collection<PurchaseBridge> getUserPurchaseHistory(String userName) {
//        return market.getUserPurchaseHistory(userName);
        return null;
    }

    public void createShop(String userName, String shopName) throws Exception {
        market.createShop(userName, shopName);
    }

    public void openShop(String userName, String shopName) {
    }

    public void closeShop(String userName, String shopName) throws Exception {
        market.closeShop(userName, shopName);
    }

    public void addNewProduct(String userName, String shopName, String productName, String category, String desc, double price) throws Exception {
        market.addNewProduct(userName, shopName, productName, category, desc, price);
    }

    @Override
    public void removeProduct(String userName, String shopName, String productName) throws Exception {
        market.removeProduct(userName, shopName, productName);
    }

    public void updateProductName(String userName, String shopName, String productOldName, String productNewName) throws Exception {
        market.updateProductName(userName, shopName, productOldName, productNewName);
    }

    public void updateProductDesc(String userName, String shopName, String productName, String productNewDesc) throws Exception {
        market.updateProductDesc(userName, shopName, productName, productNewDesc);
    }

    public void updateProductPrice(String userName, String shopName, String productName, double price) throws Exception {
        market.updateProductPrice(userName, shopName, productName, price);
    }

    public void updateProductQuantity(String userName, String shopName, String productName, int quantity) throws Exception {
        market.updateProductQuantity(userName, shopName, productName, quantity);
    }

    public void addProductItems(String userName, String shopName, String productName, int quantity) throws Exception {
        market.addProductItems(userName, shopName, productName, quantity);
    }

    public ShopBridge getShop(String userName, String shopName) throws Exception {
//        return market.searchShop(userName, shopName);
        return null;
    }

    public ProductBridge getProduct(String userName, String shopName, String productName) throws Exception {
//        return market.getProduct(userName, shopName, productName);
        return null;
    }

    @Override
    public Collection<ProductBridge> basicSearch(String userName, String productName) throws Exception {
//        return market.basicSearch(userName, productName);
        return null;
    }

    @Override
    public Collection<ProductBridge> extendedSearch(String userName, String productName, double minPrice, double maxPrice, String category) throws Exception {
//        return market.extendedSearch(userName, productName, minPrice, maxPrice, category);
        return null;
    }

    public void appointShopOwner(String appointedBy, String appointee, String shopName) throws Exception {
        market.appointShopOwner(appointedBy, appointee, shopName);
    }

    public void appointShopManager(String appointedBy, String appointee, String shopName) throws Exception {
        market.appointShopManager(appointedBy, appointee, shopName);
    }

    public void removeShopManager(String managerName, String userToRemove, String shopName) {
        market.removeShopManager(managerName, userToRemove, shopName);
    }

    @Override
    public void changeManagerPermissions(String actor, String actOn, String shopName, int permission) throws Exception {
        List<Integer> permissions = new ArrayList<>();
        permissions.add(permission);
        market.changeManagerPermissions(actor, actOn, shopName, permissions);
    }

    public Collection<UserIntr> getShopManagersAndPermissions(String userName, String shopName) throws Exception {
//        return market.getShopManagersAndPermissions(userName, shopName);
        return null;
    }

    public Collection<PurchaseBridge> getShopPurchaseHistory(String userName, String shopName) {
//        return market.getShopPurchaseHistory(userName, shopName);
        return null;
    }

    public void removeShop(String adminName, String userName, String shopName) {
        market.removeShop(adminName, userName, shopName);
    }

    public void blockUser(String adminName, String userName) {
        market.blockUser(adminName, userName);
    }

    public Collection<PurchaseBridge> getShopPurchaseHistoryByAdmin(String adminName, String shopName) {
        //return market.getShopPurchaseHistoryByAdmin(adminName, shopName);
        return null;
    }

    public Collection<PurchaseBridge> getUserPurchaseHistoryByAdmin(String adminName, String memberName) {
        //return market.getUserPurchaseHistoryByAdmin(adminName, memberName);
        return null;
    }

    public ShoppingCartBridge getCart(String userName) {
//        return market.getCart(userName);
        return null;
    }
    @Override
    public ShopBagBridge getShopBag(String userName, String shopName) {
//        return market.getShopBag(userName, shopName);
        return null;
    }

    public void addProductsToCart(String userName, String shopName, String productName, int quantity) {
        market.addProductsToCart(userName, shopName, productName, quantity);
    }

    public void updateProductsFromCart(String userName, String shopName, String productName, int newQuantity) {
        market.updateProductsFromCart(userName, shopName, productName, newQuantity);
    }

    public void purchaseCart(String userName) {
        market.purchaseCart(userName);
    }

    public boolean isAdmin(String userName) {
        return false;
    }

    public boolean shopExists(String shopName) {
        return false;
    }

    public boolean isShopOpen(String shopName) {
        return false;
    }

    public boolean productExistsInShop(String shopName, String productName) {
        return false;
    }

    public boolean productExistsInCart(String userName, String productName) {
        return false;
    }

    public boolean hasPermission(String userName, String shopName, String permission) {
        return false;
    }

    public int getProductQuantityInShop(String shopName, String productName) {
        return 0;
    }

    public String getProductDescription(String shopName, String productName) {
        return null;
    }

    public double getProductPrice(String shopName, String productName) {
        return 0;
    }

    public String getShopFounder(String shopName) {
        return null;
    }

    public Collection<String> getShopOwners(String shopName) {
        return null;
    }

    public Collection<String> getShopManagers(String shopName) {
        return null;
    }

    public int getQuantityOfProductPurchasedInShop(String shopName, String productName) {
        return 0;
    }

    public int getQuantityOfProductPurchasedInShopByUser(String userName, String shopName, String productName) {
        return 0;
    }

    @Override
    public void clearData() {
        market.resetAll();
    }

    @Override
    public void addPaymentProvider(PaymentServiceProviderBridge paymentSystem) {

    }

    @Override
    public boolean isGuest(String userName) {
        return false;
    }

    @Override
    public String[] getShopList() {
        return new String[0];
    }

    @Override
    public String[] getProductList(String shopName) {
        return new String[0];
    }

    @Override
    public void updateProductQuantityInCart(String UserName, String shopName, String productName, int newQuantity) {

    }

    @Override
    public void removeProductsFromCart(String UserName, String shopName, String productName) {

    }

    @Override
    public void addNewProduct(String testUser, String shopName, String productName, String desc, double price, int quantity) {

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
}
