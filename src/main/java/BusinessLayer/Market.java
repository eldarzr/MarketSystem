package BusinessLayer;

import BusinessLayer.Enums.UserType;
import BusinessLayer.Shops.*;
import BusinessLayer.Users.*;
import BusinessLayer.Purchases.*;

import org.apache.commons.lang3.StringUtils;
import org.apache.commons.text.similarity.LevenshteinDistance;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

import javax.mail.internet.AddressException;
import javax.mail.internet.InternetAddress;

import java.util.ArrayList;
import java.util.Collection;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.ConcurrentLinkedDeque;
import java.util.regex.Pattern;
import java.util.stream.Collectors;

public class Market implements MarketIntr{


    ConcurrentHashMap<String,Shop> shops = new ConcurrentHashMap<>();
    UsersHandler usersHandler;

    public Market() {
        usersHandler = UsersHandler.getInstance();
    }

    @Override
    public void init() {

    }

    @Override
    public String startSession() {
        return null;
    }

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
      user.addFoundedShop(shopName);
      shops.put(shopName, shop);
    }

    @Override
    public void openShop(String userName, String shopName) {

    }

    @Override
    public void closeShop(String userName, String shopName) {

    }

    @Override
    public void addNewProduct(String userName, String shopName, String productName, String desc, double price) {

    }

    @Override
    public void removeNewProduct(String userName, String shopName, String productName) {

    }

    @Override
    public void updateProductName(String userName, String shopName, String productOldName, String productNewName) {

    }

    @Override
    public void updateProductDesc(String userName, String shopName, String productName, String productNewDesc) {

    }

    @Override
    public void updateProductPrice(String userName, String shopName, String productName, double price) {

    }

    @Override
    public void updateProductQuantity(String userName, String shopName, String productName, int quantity) {

    }

    @Override
    public void addProductItems(String userName, String shopName, String productName, int quantity) {

    }

    @Override
    public ShopIntr getShop(String userName, String shopName) throws Exception {
        Collection<ShopIntr> shopsToReturn = getShopsLimited(userName, shopName, 2);
        if (shopsToReturn == null && shopsToReturn.size() < 1)
            throw new Exception(String.format("there is no shop in this name: %s", shopName));
        return shopsToReturn.stream().collect(Collectors.toList()).get(0);
    }

    public Collection<ShopIntr> getShops(String userName, String shopName) throws Exception {
        return getShopsLimited(userName, shopName, 2);
    }


    private Collection<ShopIntr> getShopsLimited(String userName, String shopName, int max_distance) throws Exception {
        LevenshteinDistance distance = new LevenshteinDistance();
        if (!isLoggedIn(userName))
            throw new Exception(String.format("the user %s is not login", userName));
        Collection<ShopIntr> shopsToReturn = new ConcurrentLinkedDeque<>();
        for (String shopName1 : shops.keySet()) {
            if (distance.apply(shopName, shopName1) <= max_distance)
                shopsToReturn.add(shops.get(shopName1));
        }
        return shopsToReturn;
    }

    @Override
    public ProductIntr getProduct(String userName, String shopName, String productName) {
        return null;
    }

    @Override
    public Collection<ProductIntr> search(String userName, String productName) {
        return null;
    }

    @Override
    public Collection<PurchaseIntr> getShopPurchaseHistory(String shopName) {
        return null;
    }

    @Override
    public void appointShopOwner(String appointedBy, String appointee, String shopName) throws Exception {
        User actor = validateUserIsntGuest(appointedBy);
        User actOn = validateUserIsntGuest(appointee);
        if(!shops.containsKey(shopName))
            throw new Exception("there is no such shop named :" +shopName);
        Shop reqShop = shops.get(shopName);
//        reqShop.setShopOwner(actor,actOn);

    }

    private User validateUserIsntGuest(String appointedBy) throws Exception {
        User user = findUserByName(appointedBy);
//        if(!usersHandler.findUserByName(appointedBy))
//            throw new Exception("there is no such user named :" +appointedBy);
//        User user = allUsers.get(appointedBy);

        if(user.getUserType() == UserType.GUEST)
            throw new Exception("guest cannot set shop owners");
        return user;
    }

    @Override
    public void appointShopManager(String appointedBy, String appointee, String shopName) {

    }

    @Override
    public void removeShopManager(String managerName, String userToRemove, String shopName) {

    }

    @Override
    public void changeManagerPermissions(String manager, String permission) {

    }

    @Override
    public Collection<UserIntr> getShopManagersAndPermissions(String userName, String shopName) {
        return null;
    }

    @Override
    public Collection<PurchaseIntr> getShopPurchaseHistory(String userName, String shopName) {
        return null;
    }

    @Override
    public void removeShop(String adminName, String userName, String shopName) {

    }

    @Override
    public void blockUser(String adminName, String UserName) {

    }

    @Override
    public Collection<PurchaseIntr> getShopPurchaseHistoryByAdmin(String adminName, String shopName) {
        return null;
    }

    @Override
    public Collection<PurchaseIntr> getUserPurchaseHistoryByAdmin(String adminName, String memberName) {
        return null;
    }

    @Override
    public Cart getCart(String userName) {
        return null;
    }

    @Override
    public ShopBag getShopBag(String userName, String ShopName) {
        return null;
    }

    @Override
    public void addProductsToCart(String userName, String shopName, String productName, int quantity) {

    }

    @Override
    public void updateProductsFromCart(String userName, String shopName, String productName, int newQuantity) {

    }

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

}
