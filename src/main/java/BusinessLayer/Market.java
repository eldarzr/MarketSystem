package BusinessLayer;

import BusinessLayer.Enums.UserType;
import BusinessLayer.Shops.*;
import BusinessLayer.Users.*;
import BusinessLayer.Purchases.*;

import org.apache.commons.lang3.NotImplementedException;
import org.apache.commons.text.similarity.LevenshteinDistance;

import java.util.*;
import java.util.concurrent.ConcurrentHashMap;
import java.util.stream.Collectors;

public class Market implements MarketIntr{


    UsersHandler usersHandler;
    ShopHandler shopHandler;
    private final int SHOP_DISTANCE_MAX_LIMIT = 2;
    private final int PRODUCT_DISTANCE_MAX_LIMIT = 2;

    public Market() {
        usersHandler = UsersHandler.getInstance();
        shopHandler = shopHandler.getInstance();
    }

    @Override
    public void init() {

    }

    //todo: niv
    @Override
    public String startSession() {
        return null;
    }

    //todo: niv
    @Override
    public void closeSession(String userName) {

    }

    @Override
    public void register(String userName, String email, String password) throws Exception {
        usersHandler.register(userName, email, password);
    }
    @Override
    public void login(String userName, String password) {
        usersHandler.login(userName, password);
    }

    @Override
    public void logout(String userName) {
        usersHandler.logout(userName);
    }

    //todo: naor
    @Override
    public Collection<PurchaseIntr> getUserPurchaseHistory(String userName) {
        throw new NotImplementedException();
    }

    @Override
    public void createShop(String userName, String shopName) throws Exception {
        validateLoggedInException(userName);
        //shopHandler.shopExists(shopName);
      User user = findUserByName(userName);
      Shop shop = new Shop(shopName, userName);
      //user.addFoundedShop(shopName);
      shopHandler.addShop(shopName,shop);
      MemberRoleInShop.createOwner(userName,shop, user::sendMessage);
    }

    @Override
    public void openShop(String userName, String shopName) {
        throw new NotImplementedException();
    }

    //todo: naor
    @Override
    public void closeShop(String userName, String shopName) throws Exception {
        validateUserIsntGuest(userName);
        validateLoggedInException(userName);
        shopHandler.closeShop(userName,shopName);

    }

    @Override
    public void addNewProduct(String userName, String shopName, String productName, String category, String desc, double price) throws Exception {
        validateLoggedInException(userName);
        shopHandler.addNewProduct(userName, shopName, productName, category, desc, price);
    }



    @Override
    public void removeProduct(String userName, String shopName, String productName) throws Exception {
        validateLoggedInException(userName);
        shopHandler.removeProduct(userName, shopName, productName);
    }

    @Override
    public void updateProductName(String userName, String shopName, String productOldName, String productNewName) throws Exception {
        validateLoggedInException(userName);
        shopHandler.updateProductName(userName, shopName, productOldName, productNewName);
    }

    @Override
    public void updateProductDesc(String userName, String shopName, String productName, String productNewDesc) throws Exception {
        validateLoggedInException(userName);
        shopHandler.updateProductDesc(userName, shopName, productName, productNewDesc);
    }

    @Override
    public void updateProductPrice(String userName, String shopName, String productName, double price) throws Exception {
        validateLoggedInException(userName);
        shopHandler.updateProductPrice(userName, shopName, productName, price);
    }

    @Override
    public void updateProductQuantity(String userName, String shopName, String productName, int quantity) throws Exception {
        validateLoggedInException(userName);
        shopHandler.updateProductQuantity(userName, shopName, productName, quantity);
    }

    @Override
    public void addProductItems(String userName, String shopName, String productName, int quantity) throws Exception {
        validateLoggedInException(userName);
        shopHandler.addProductItems(userName, shopName, productName, quantity);
    }

    @Override
    public Shop searchShop(String userName, String shopName) throws Exception {
        validateLoggedInException(userName);
        return shopHandler.searchShop(shopName, isAdmin(userName));
    }

    public List<Shop> getShops(String userName, String shopName) throws Exception {
        validateLoggedInException(userName);
        return shopHandler.getShops(shopName, isAdmin(userName));
    }

    @Override
    public ProductIntr getProduct(String userName, String shopName, String productName) throws Exception {
        validateLoggedInException(userName);
        return shopHandler.getProduct(shopName, productName, isAdmin(userName));
    }

    @Override
    public List<ProductIntr> basicSearch(String userName, String productName) throws Exception {
        validateLoggedInException(userName);
        return shopHandler.basicSearch(productName, isAdmin(userName));
    }

    @Override
    public List<ProductIntr> extendedSearch(String userName, String productName, double minPrice, double maxPrice,
                                                  String category) throws Exception{
        validateLoggedInException(userName);
        return shopHandler.extendedSearch(productName, minPrice, maxPrice, category, isAdmin(userName));
    }

    @Override
    public void appointShopOwner(String appointedBy, String appointee, String shopName) throws Exception {
        validateUserIsntGuest(appointedBy);
        isLoggedIn(appointedBy);
        User user = validateUserIsntGuest(appointee);
        Shop reqShop = checkForShop(shopName);
        reqShop.setShopOwner(appointedBy,appointee , user::sendMessage);
    }

    public Shop checkForShop(String shopName) throws Exception {
        return shopHandler.getShop(shopName);
//      reqShop.setShopOwner(actor,actOn);
    }

    @Override
    public void appointShopManager(String appointedBy, String appointee, String shopName) throws Exception {
        validateUserIsntGuest(appointedBy);
        isLoggedIn(appointedBy);
        User user = validateUserIsntGuest(appointee);
        Shop reqShop = checkForShop(shopName);
        reqShop.setShopManager(appointedBy,appointee ,user::sendMessage);
    }

    //todo: naor
    @Override
    public void removeShopManager(String managerName, String userToRemove, String shopName) {
        throw new NotImplementedException();
    }

    @Override
    public MemberRoleInShop changeManagerPermissions(String actor, String actOn, String shopName, List<Integer> permission) throws Exception {
        validateUserIsntGuest(actor);
        isLoggedIn(actor);
        validateUserIsntGuest(actOn);
        Shop reqShop = checkForShop(shopName);
       return reqShop.setManageOption(actor,actOn,permission);
    }

    @Override
    public void addManagerPermissions(String actor, String actOn, String shopName,int permission) throws Exception {
        validateUserIsntGuest(actor);
        isLoggedIn(actor);
        validateUserIsntGuest(actOn);
        Shop reqShop = checkForShop(shopName);
        reqShop.addManageOption(actor,actOn,permission);
    }

    //todo: naor - talk with eldar
    @Override
    public Collection<MemberRoleInShop> getShopManagersAndPermissions(String userName, String shopName) throws Exception {
        isLoggedIn(userName);
        return shopHandler.getShopManagementPermissions(userName,shopName);
    }

    public String getRolesInformation(String userName, String shopName) throws Exception {
        return getShop(userName,shopName).getRolesInfo();
    }

    //todo: naor
    @Override
    public Collection<PurchaseIntr> getShopPurchaseHistory(String userName, String shopName) {
        return null;
    }

    @Override
    public void removeShop(String adminName, String userName, String shopName) {
        throw new NotImplementedException();
    }

    @Override
    public void blockUser(String adminName, String UserName) {
        throw new NotImplementedException();
    }

    @Override
    public Collection<PurchaseIntr> getShopPurchaseHistoryByAdmin(String adminName, String shopName) {
        throw new NotImplementedException();
    }

    @Override
    public Collection<PurchaseIntr> getUserPurchaseHistoryByAdmin(String adminName, String memberName) {
        throw new NotImplementedException();
    }

    //todo: niv
    @Override
    public Cart getCart(String userName) {
        return null;
    }

    //todo: niv
    @Override
    public ShopBag getShopBag(String userName, String ShopName) {
        return null;
    }

    //todo: niv
    @Override
    public void addProductsToCart(String userName, String shopName, String productName, int quantity) {

    }

    //todo: niv
    @Override
    public void updateProductsFromCart(String userName, String shopName, String productName, int newQuantity) {

    }

    //todo: niv
    @Override
    public void purchaseCart(String userName) {

    }

    //this function reset everything on the system, for now only use is for testing
    //need to add logic to reset all shops, but since we dont have a controller yet and I'm not sure what we want
    //to do I left it like this
    public void resetAll(){
        usersHandler.reset();
        shopHandler.reset();
    }

    private boolean isLoggedIn(String userName) {
        return usersHandler.isLoggedIn(userName);
    }

    private User findUserByName(String userName) {
        return usersHandler.findUserByName(userName);
    }

    private User validateUserIsntGuest(String userName) throws Exception {
        User user = findUserByName(userName);
//      User user = allUsers.get(appointedBy);
        if(user.getUserType() == UserType.GUEST)
            throw new Exception("guests cannot do it");
        return user;
    }

    private void validateLoggedInException(String userName) throws Exception {
        if(!isLoggedIn(userName))
            throw new Exception(String.format("the user %s is not login", userName));
    }

    private boolean isAdmin(String userName) {
        return usersHandler.isAdmin(userName);
    }

}
