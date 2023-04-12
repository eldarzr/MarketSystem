package AcceptanceTests;

import BusinessLayer.MarketIntr;
import BusinessLayer.Purchases.Cart;
import BusinessLayer.Purchases.PurchaseIntr;
import BusinessLayer.Purchases.ShopBag;
import BusinessLayer.Shops.ProductIntr;
import BusinessLayer.Shops.ShopIntr;
import BusinessLayer.Users.UserIntr;

import java.util.Collection;

public class MarketSystemProxyBridge implements MarketSystemBridge {
    MarketSystemRealBridge realBridge;

    private void nullCheck() {
        if(realBridge==null)throw new UnsupportedOperationException();
    }

    @Override
    public void init() {
        nullCheck();
        realBridge.init();
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
    public void closeShop(String userName, String shopName) {
        nullCheck();
        realBridge.closeShop(userName, shopName);
    }

    @Override
    public void addNewProduct(String userName, String shopName, String productName, String desc, double price) {
        nullCheck();
        realBridge.addNewProduct(userName, shopName, productName, desc, price);
    }

    @Override
    public void removeProduct(String userName, String shopName, String productName) {
        nullCheck();
        realBridge.removeProduct(userName, shopName, productName);
    }

    @Override
    public void updateProductName(String userName, String shopName, String productOldName, String productNewName) {
        nullCheck();
        realBridge.updateProductName(userName, shopName, productOldName, productNewName);
    }

    @Override
    public void updateProductDesc(String userName, String shopName, String productName, String productNewDesc) {
        nullCheck();
        realBridge.updateProductDesc(userName, shopName, productName, productNewDesc);
    }

    @Override
    public void updateProductPrice(String userName, String shopName, String productName, double price) {
        nullCheck();
        realBridge.updateProductPrice(userName, shopName, productName, price);
    }

    @Override
    public void updateProductQuantity(String userName, String shopName, String productName, int quantity) {
        nullCheck();
        realBridge.updateProductQuantity(userName, shopName, productName, quantity);
    }

    @Override
    public void addProductItems(String userName, String shopName, String productName, int quantity) {
        nullCheck();
        realBridge.addProductItems(userName, shopName, productName, quantity);
    }

    @Override
    public ShopBridge getShop(String userName, String shopName) {
        nullCheck();
        return realBridge.getShop(userName, shopName);
    }

    @Override
    public ProductBridge getProduct(String userName, String shopName, String productName) {
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
    public void appointShopOwner(String appointedBy, String appointee, String shopName) {
        nullCheck();
        realBridge.appointShopOwner(appointedBy, appointee, shopName);
    }

    @Override
    public void appointShopManager(String appointedBy, String appointee, String shopName) {
        nullCheck();
        realBridge.appointShopManager(appointedBy, appointee, shopName);
    }

    @Override
    public void removeShopManager(String managerName, String userToRemove, String shopName) {
        nullCheck();
        realBridge.removeShopManager(managerName, userToRemove, shopName);
    }

    @Override
    public void changeManagerPermissions(String actor, String actOn, String shopName, int permission) throws Exception {

    }



    @Override
    public Collection<UserIntr> getShopManagersAndPermissions(String userName, String shopName) {
        nullCheck();
        return realBridge.getShopManagersAndPermissions(userName, shopName);
    }

    @Override
    public Collection<PurchaseBridge> getShopPurchaseHistory(String userName, String shopName) {
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
    public Collection<PurchaseBridge> getShopPurchaseHistoryByAdmin(String adminName, String shopName) {
        nullCheck();
        return realBridge.getShopPurchaseHistoryByAdmin(adminName, shopName);
    }

    @Override
    public Collection<PurchaseBridge> getUserPurchaseHistoryByAdmin(String adminName, String memberName) {
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
    public void addProductsToCart(String userName, String shopName, String productName, int quantity) {
        nullCheck();
        realBridge.addProductsToCart(userName, shopName, productName, quantity);
    }

    @Override
    public void updateProductsFromCart(String userName, String shopName, String productName, int newQuantity) {
        nullCheck();
        realBridge.updateProductsFromCart(userName, shopName, productName, newQuantity);
    }

    @Override
    public void purchaseCart(String userName) {
        nullCheck();
        realBridge.purchaseCart(userName);
    }

    @Override
    public boolean isRegistered(String userName) {
        nullCheck();
        return realBridge.isRegistered(userName);
    }

    @Override
    public boolean isLogged(String userName) {
        nullCheck();
        return realBridge.isLogged(userName);
    }

    @Override
    public boolean isBlocked(String userName) {
        nullCheck();
        return realBridge.isBlocked(userName);
    }

    @Override
    public boolean isAdmin(String userName) {
        nullCheck();
        return realBridge.isAdmin(userName);
    }

    @Override
    public boolean shopExists(String shopName) {
        nullCheck();
        return realBridge.shopExists(shopName);
    }

    @Override
    public boolean isShopOpen(String shopName) {
        nullCheck();
        return realBridge.isShopOpen(shopName);
    }

    @Override
    public boolean productExistsInShop(String shopName, String productName) {
        nullCheck();
        return realBridge.productExistsInShop(shopName, productName);
    }

    @Override
    public boolean productExistsInCart(String userName, String productName) {
        nullCheck();
        return realBridge.productExistsInCart(userName, productName);
    }

    @Override
    public boolean hasPermission(String userName, String shopName, String permission) {
        nullCheck();
        return realBridge.hasPermission(userName, shopName, permission);
    }

    @Override
    public int getProductQuantityInShop(String shopName, String productName) {
        nullCheck();
        return realBridge.getProductQuantityInShop(shopName, productName);
    }

    @Override
    public String getProductDescription(String shopName, String productName) {
        nullCheck();
        return realBridge.getProductDescription(shopName, productName);
    }

    @Override
    public double getProductPrice(String shopName, String productName) {
        nullCheck();
        return realBridge.getProductPrice(shopName, productName);
    }

    @Override
    public String getShopFounder(String shopName) {
        nullCheck();
        return realBridge.getShopFounder(shopName);
    }

    @Override
    public Collection<String> getShopOwners(String shopName) {
        nullCheck();
        return realBridge.getShopOwners(shopName);
    }

    @Override
    public Collection<String> getShopManagers(String shopName) {
        nullCheck();
        return realBridge.getShopManagers(shopName);
    }

    @Override
    public int getQuantityOfProductPurchasedInShop(String shopName, String productName) {
        nullCheck();
        return realBridge.getQuantityOfProductPurchasedInShop(shopName, productName);
    }

    @Override
    public int getQuantityOfProductPurchasedInShopByUser(String userName, String shopName, String productName) {
        nullCheck();
        return realBridge.getQuantityOfProductPurchasedInShopByUser(userName, shopName, productName);
    }
}
