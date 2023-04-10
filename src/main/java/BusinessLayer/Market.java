package BusinessLayer;

import BusinessLayer.Enums.UserType;
import BusinessLayer.Shops.*;
import BusinessLayer.Users.*;
import BusinessLayer.Purchases.*;

import org.apache.commons.lang3.NotImplementedException;
import org.apache.commons.lang3.StringUtils;
import org.apache.commons.text.similarity.LevenshteinDistance;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

import javax.mail.internet.AddressException;
import javax.mail.internet.InternetAddress;

import java.util.*;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.ConcurrentLinkedDeque;
import java.util.regex.Pattern;
import java.util.stream.Collectors;

public class Market implements MarketIntr{


    ConcurrentHashMap<String,Shop> shops = new ConcurrentHashMap<>();
    UsersHandler usersHandler;
    private final int SHOP_DISTANCE_MAX_LIMIT = 2;
    private final int PRODUCT_DISTANCE_MAX_LIMIT = 2;

    public Market() {
        usersHandler = UsersHandler.getInstance();
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
        return null;
    }

    @Override
    public void createShop(String userName, String shopName) throws Exception {
      if(!isLoggedIn(userName))
          throw new Exception(String.format("the user %s is not login", userName));
      if(shops.containsKey(shopName))
        throw new Exception("there is already shop with that name");
      User user = findUserByName(userName);
      Shop shop = new Shop(shopName, userName);
      //user.addFoundedShop(shopName);
      shops.put(shopName, shop);
      MemberRoleInShop.createOwner(userName,shop);
    }

    @Override
    public void openShop(String userName, String shopName) {
        throw new NotImplementedException();
    }

    //todo: naor
    @Override
    public void closeShop(String userName, String shopName) {
    }

    @Override
    public void addNewProduct(String userName, String shopName, String productName, String category, String desc, double price) throws Exception {
        if(!isLoggedIn(userName))
            throw new Exception(String.format("the user %s is not login", userName));
        if(shopName == null || !shops.containsKey(shopName))
            throw new Exception("there is already shop with that name");
        shops.get(shopName).addNewProduct(userName, productName, category, desc, price);
    }

    @Override
    public void removeProduct(String userName, String shopName, String productName) throws Exception {
        if(!isLoggedIn(userName))
            throw new Exception(String.format("the user %s is not login", userName));
        if(shopName == null || !shops.containsKey(shopName))
            throw new Exception("there is already shop with that name");
        shops.get(shopName).removeProduct(userName, productName);
    }

    @Override
    public void updateProductName(String userName, String shopName, String productOldName, String productNewName) throws Exception {
        if(!isLoggedIn(userName))
            throw new Exception(String.format("the user %s is not login", userName));
        if(shopName == null || !shops.containsKey(shopName))
            throw new Exception("there is already shop with that name");
        shops.get(shopName).updateProductName(userName, productOldName, productNewName);
    }

    @Override
    public void updateProductDesc(String userName, String shopName, String productName, String productNewDesc) throws Exception {
        if(!isLoggedIn(userName))
            throw new Exception(String.format("the user %s is not login", userName));
        if(shopName == null || !shops.containsKey(shopName))
            throw new Exception("there is already shop with that name");
        shops.get(shopName).updateProductDesc(userName, productName, productNewDesc);
    }

    @Override
    public void updateProductPrice(String userName, String shopName, String productName, double price) throws Exception {
        if(!isLoggedIn(userName))
            throw new Exception(String.format("the user %s is not login", userName));
        if(shopName == null || !shops.containsKey(shopName))
            throw new Exception("there is already shop with that name");
        shops.get(shopName).updateProductPrice(userName, productName, price);
    }

    @Override
    public void updateProductQuantity(String userName, String shopName, String productName, int quantity) throws Exception {
        if(!isLoggedIn(userName))
            throw new Exception(String.format("the user %s is not login", userName));
        if(shopName == null || !shops.containsKey(shopName))
            throw new Exception("there is already shop with that name");
        shops.get(shopName).updateProductQuantity(userName, productName, quantity);
    }

    @Override
    public void addProductItems(String userName, String shopName, String productName, int quantity) throws Exception {
        if(!isLoggedIn(userName))
            throw new Exception(String.format("the user %s is not login", userName));
        if(shopName == null || !shops.containsKey(shopName))
            throw new Exception("there is already shop with that name");
        shops.get(shopName).addProductQuantity(userName, productName, quantity);
    }

    @Override
    public Shop getShop(String userName, String shopName) throws Exception {
        List<Shop> shopsToReturn = getShops(userName, shopName);
        if (shopsToReturn.size() < 1)
            throw new Exception(String.format("there is no shop in this name: %s", shopName));
        return getShops(userName, shopName).get(0);
    }

    public List<Shop> getShops(String userName, String shopName) throws Exception {
        LevenshteinDistance distance = new LevenshteinDistance();
        if (!isLoggedIn(userName))
            throw new Exception(String.format("the user %s is not login", userName));
        List<Shop> shopsToReturn = new ArrayList<>();
        for (String shopName1 : shops.keySet()) {
            if (distance.apply(shopName.toLowerCase(), shopName1.toLowerCase()) <= SHOP_DISTANCE_MAX_LIMIT)
                shopsToReturn.add(shops.get(shopName1));
        }
        return shopsToReturn.stream().sorted((shop1, shop2) ->
                distance.apply(shop1.getName(), shopName) - distance.apply(shop2.getName(), shopName)).
                collect(Collectors.toList());
    }

    private List<ProductIntr> getProducts(String userName, Collection<String> shopNames,
                                                       String productName) throws Exception {
        LevenshteinDistance distance = new LevenshteinDistance();
        if (!isLoggedIn(userName))
            throw new Exception(String.format("the user %s is not login", userName));
        List<ProductIntr> prodsToReturn = new ArrayList<>();
        for (String shopName : shopNames){
            for (ProductIntr product : shops.get(shopName).getProducts()) {
                if (distance.apply(
                        product.getName().toLowerCase(), productName.toLowerCase()) <= PRODUCT_DISTANCE_MAX_LIMIT)
                    prodsToReturn.add(product);
            }
    }
        return prodsToReturn.stream().sorted((prod1, prod2) ->
                distance.apply(prod1.getName(), productName) - distance.apply(prod2.getName(), productName)).
                collect(Collectors.toList());
    }

    @Override
    public ProductIntr getProduct(String userName, String shopName, String productName) throws Exception {
        ArrayList<String> shopsNames = new ArrayList<>();
        shopsNames.add(shopName);
        Collection<ProductIntr> prodsToReturn = getProducts(userName, shopsNames, productName);
        if (prodsToReturn.size() < 1)
            throw new Exception(String.format("there is no product in this name: %s", productName));
        return prodsToReturn.stream().collect(Collectors.toList()).get(0);
    }

    @Override
    public List<ProductIntr> basicSearch(String userName, String productName) throws Exception {
        return getProducts(userName, shops.keySet(), productName);
    }

    @Override
    public List<ProductIntr> extendedSearch(String userName, String productName, double minPrice, double maxPrice,
                                                  String category) throws Exception{
        return basicSearch(userName, productName).stream().filter(
                (ProductIntr product) -> product.isOnPrice(minPrice, maxPrice) && product.isOnCategory(category))
                .collect(Collectors.toList());
    }

    @Override
    public void appointShopOwner(String appointedBy, String appointee, String shopName) throws Exception {
        validateUserIsntGuest(appointedBy);
        isLoggedIn(appointedBy);
        validateUserIsntGuest(appointee);
        Shop reqShop = checkForShop(shopName);
        reqShop.setShopOwner(appointedBy,appointee);
    }

    public Shop checkForShop(String shopName) throws Exception {
        if(!shops.containsKey(shopName))
            throw new Exception("there is no such shop named :" +shopName);
        return shops.get(shopName);
//      reqShop.setShopOwner(actor,actOn);
    }

    @Override
    public void appointShopManager(String appointedBy, String appointee, String shopName) throws Exception {
        validateUserIsntGuest(appointedBy);
        isLoggedIn(appointedBy);
        validateUserIsntGuest(appointee);
        Shop reqShop = checkForShop(shopName);
        reqShop.setShopManager(appointedBy,appointee);
    }

    //todo: naor
    @Override
    public void removeShopManager(String managerName, String userToRemove, String shopName) {

    }

    @Override
    public void changeManagerPermissions(String actor, String actOn, String shopName,int permission) throws Exception {
        validateUserIsntGuest(actor);
        isLoggedIn(actor);
        validateUserIsntGuest(actOn);
        Shop reqShop = checkForShop(shopName);
        reqShop.setManageOption(actor,actOn,permission);
    }

    //todo: naor - talk with eldar
    @Override
    public Collection<UserIntr> getShopManagersAndPermissions(String userName, String shopName) {
        return null;
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

}
