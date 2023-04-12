package AcceptanceTests;

import BusinessLayer.MarketIntr;
import BusinessLayer.Purchases.Cart;
import BusinessLayer.Purchases.PurchaseIntr;
import BusinessLayer.Purchases.ShopBag;
import BusinessLayer.Shops.ProductIntr;
import BusinessLayer.Shops.ShopIntr;
import BusinessLayer.Users.UserIntr;

import java.util.Collection;

public class MarketSystemRealBridge implements MarketSystemBridge {

    public void init() {
        throw new UnsupportedOperationException();
    }

    public String startSession() {
        throw new UnsupportedOperationException();
    }

    public void closeSession(String userName) {
        throw new UnsupportedOperationException();
    }

    public void register(String userName, String email, String password)  {
        throw new UnsupportedOperationException();
    }

    @Override
    public void unregister(String userName) {
        throw new UnsupportedOperationException();
    }

    public void login(String userName, String password) {
        throw new UnsupportedOperationException();
    }

    @Override
    public void addAdmin(String userName) {
        throw new UnsupportedOperationException();
    }

    public void logout(String userName) {
        throw new UnsupportedOperationException();
    }

    public Collection<PurchaseBridge> getUserPurchaseHistory(String userName) {
        throw new UnsupportedOperationException();
    }

    public void createShop(String userName, String shopName) {
        throw new UnsupportedOperationException();
    }

    public void openShop(String userName, String shopName) {
        throw new UnsupportedOperationException();
    }

    public void closeShop(String userName, String shopName) {
        throw new UnsupportedOperationException();
    }

    public void addNewProduct(String userName, String shopName, String productName, String desc, double price) {
        throw new UnsupportedOperationException();
    }

    @Override
    public void removeProduct(String userName, String shopName, String productName) {

    }

    public void removeNewProduct(String userName, String shopName, String productName) {
        throw new UnsupportedOperationException();
    }

    public void updateProductName(String userName, String shopName, String productOldName, String productNewName) {
        throw new UnsupportedOperationException();
    }

    public void updateProductDesc(String userName, String shopName, String productName, String productNewDesc) {
        throw new UnsupportedOperationException();
    }

    public void updateProductPrice(String userName, String shopName, String productName, double price) {
        throw new UnsupportedOperationException();
    }

    public void updateProductQuantity(String userName, String shopName, String productName, int quantity) {
        throw new UnsupportedOperationException();
    }

    public void addProductItems(String userName, String shopName, String productName, int quantity) {
        throw new UnsupportedOperationException();
    }

    public ShopBridge getShop(String userName, String shopName) {
        throw new UnsupportedOperationException();
    }

    public ProductBridge getProduct(String userName, String shopName, String productName) {
        throw new UnsupportedOperationException();
    }

    @Override
    public Collection<ProductBridge> basicSearch(String userName, String productName) throws Exception {
        return null;
    }

    @Override
    public Collection<ProductBridge> extendedSearch(String userName, String productName, double minPrice, double maxPrice, String category) throws Exception {
        return null;
    }

    public Collection<ProductIntr> search(String userName, String productName) {
        throw new UnsupportedOperationException();
    }

    public Collection<PurchaseIntr> getShopPurchaseHistory(String shopName) {
        throw new UnsupportedOperationException();
    }

    public void appointShopOwner(String appointedBy, String appointee, String shopName) {
        throw new UnsupportedOperationException();
    }

    public void appointShopManager(String appointedBy, String appointee, String shopName) {
        throw new UnsupportedOperationException();
    }

    public void removeShopManager(String managerName, String userToRemove, String shopName) {
        throw new UnsupportedOperationException();
    }

    @Override
    public void changeManagerPermissions(String actor, String actOn, String shopName, int permission) throws Exception {

    }

    public void changeManagerPermissions(String manager, String permission) {
        throw new UnsupportedOperationException();
    }

    public Collection<UserIntr> getShopManagersAndPermissions(String userName, String shopName) {
        throw new UnsupportedOperationException();
    }

    public Collection<PurchaseBridge> getShopPurchaseHistory(String userName, String shopName) {
        throw new UnsupportedOperationException();
    }

    public void removeShop(String adminName, String userName, String shopName) {
        throw new UnsupportedOperationException();
    }

    public void blockUser(String adminName, String UserName) {
        throw new UnsupportedOperationException();
    }

    public Collection<PurchaseBridge> getShopPurchaseHistoryByAdmin(String adminName, String shopName) {
        throw new UnsupportedOperationException();
    }

    public Collection<PurchaseBridge> getUserPurchaseHistoryByAdmin(String adminName, String memberName) {
        throw new UnsupportedOperationException();
    }

    public ShoppingCartBridge getCart(String userName) {
        return null;
    }
    @Override
    public ShopBagBridge getShopBag(String userName, String ShopName) {
        throw new UnsupportedOperationException();
    }

    public void addProductsToCart(String userName, String shopName, String productName, int quantity) {
        throw new UnsupportedOperationException();
    }

    public void updateProductsFromCart(String userName, String shopName, String productName, int newQuantity) {
        throw new UnsupportedOperationException();
    }

    public void purchaseCart(String userName) {
        throw new UnsupportedOperationException();
    }

    public boolean isRegistered(String userName) {
        return false;
    }

    public boolean isLogged(String userName) {
        return false;
    }

    public boolean isBlocked(String userName) {
        return false;
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
}
