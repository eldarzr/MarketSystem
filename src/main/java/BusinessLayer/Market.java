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
import java.util.Arrays;
import java.util.Collection;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.ConcurrentLinkedDeque;
import java.util.regex.Pattern;
import java.util.stream.Collectors;

public class Market implements MarketIntr{

    @Autowired
    private PasswordEncoder passwordEncoder;

    ConcurrentHashMap<String,User> allUsers = new ConcurrentHashMap<>();
    ConcurrentHashMap<String,User> loginUsers = new ConcurrentHashMap<>();
    ConcurrentHashMap<String,Shop> shops = new ConcurrentHashMap<>();

    public Market() {
        this.passwordEncoder = passwordEncoder();
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
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
    public void register(String userName, String email, String password) throws Exception{
        checkValidUserName(userName);
        checkValidPassword(password);
        checkValidEmail(email);
        String encodedPassword = passwordEncoder.encode(password);
        User nuser = new User(userName,email,encodedPassword);
        allUsers.put(userName,nuser);
    }

    private static void checkValidEmail(String email) throws AddressException {
            InternetAddress emailVal = new InternetAddress(email);
            emailVal.validate();
    }

    public void checkValidPassword(String password) {
        // Check if password is at least 8 characters long
        if (password.length() < 8) {
            throw new IllegalArgumentException("Password must be at least of length 8");
        }

        // Check if password contains at least one uppercase letter, one lowercase letter, and one digit
        boolean hasUpperCase = false;
        boolean hasLowerCase = false;
        boolean hasDigit = false;
        for (char c : password.toCharArray()) {
            if (Character.isUpperCase(c)) {
                hasUpperCase = true;
            } else if (Character.isLowerCase(c)) {
                hasLowerCase = true;
            } else if (Character.isDigit(c)) {
                hasDigit = true;
            }
        }
        if(!hasUpperCase)
            throw new IllegalArgumentException("Password must contain at least one upper case letter");
        if(!hasLowerCase)
            throw new IllegalArgumentException("Password must contain at least one lower case letter");
        if(!hasDigit)
            throw new IllegalArgumentException("password must contain at lesat one number");
    }

    private void checkValidUserName(String username) {
        int lower_bound = 4;
        int upper_bound = 16;
        // Check if username is between lower_bound and upper_bound characters long
        if (username.length() < lower_bound || username.length() > upper_bound) {
            throw new IllegalArgumentException(String.format("user name length need to be bigger than %d and lower than %d",lower_bound,upper_bound));
        }

        // Check if username only contains alphanumeric characters or underscores
        Pattern pattern = Pattern.compile("^[a-zA-Z0-9_]*$");
        if (!pattern.matcher(username).matches()) {
            throw new IllegalArgumentException("password can contain only alphanumeric characters or underscores");
        }

        // Check if username starts with a letter
        char firstChar = username.charAt(0);
        if (!Character.isLetter(firstChar)) {
            throw new IllegalArgumentException("password must start with a letter");
        }
    }


    @Override
    public void login(String userName, String password) {
        User user = findUserByName(userName);
        if(isLoggedIn(user.getName()))
            throw new IllegalArgumentException(String.format("User: %s already logged in",userName));
        if(!passwordEncoder.matches(password,user.getPassword()))
            throw new IllegalArgumentException("incorrect password");
        loginUsers.put(user.getName(),user);
    }

    @Override
    public void logout(String userName) {

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
        if (shopsToReturn.size() < 1)
            throw new Exception(String.format("there is no shop in this name: %s", shopName));
        return new ArrayList<>(shopsToReturn).get(0);
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

    private Collection<ProductIntr> getProductsLimited(String userName, Collection<String> shopNames,
                                                       String productName, int max_distance) throws Exception {
        LevenshteinDistance distance = new LevenshteinDistance();
        if (!isLoggedIn(userName))
            throw new Exception(String.format("the user %s is not login", userName));
        Collection<ProductIntr> prodsToReturn = new ConcurrentLinkedDeque<>();
        for (String shopName : shopNames){
            for (ProductIntr product : shops.get(shopName).getProducts()) {
                if (distance.apply(product.getName(), productName) <= max_distance)
                    prodsToReturn.add(product);
            }
    }
        return prodsToReturn;
    }

    @Override
    public ProductIntr getProduct(String userName, String shopName, String productName) throws Exception {
        ArrayList<String> shopsNames = new ArrayList<>();
        shopsNames.add(shopName);
        Collection<ProductIntr> prodsToReturn = getProductsLimited(userName, shopsNames, productName, 2);
        if (prodsToReturn.size() < 1)
            throw new Exception(String.format("there is no product in this name: %s", productName));
        return prodsToReturn.stream().collect(Collectors.toList()).get(0);
    }

    @Override
    public Collection<ProductIntr> basicSearch(String userName, String productName) throws Exception {
        Collection<ProductIntr> prodsToReturn = getProductsLimited(userName, shops.keySet(), productName, 2);
        if (prodsToReturn.size() < 1)
            throw new Exception(String.format("there is no product in this name: %s", productName));
        return prodsToReturn;
    }

    @Override
    public Collection<ProductIntr> extendedSearch(String userName, String productName, double minPrice, double maxPrice,
                                                  String category) throws Exception{
        Collection<ProductIntr> prodsToReturn = basicSearch(userName, productName);
        prodsToReturn = prodsToReturn.stream().filter(
                (ProductIntr product) -> product.isOnPrice(minPrice, maxPrice) && product.isOnCategory(category))
                .collect(Collectors.toList());
        if (prodsToReturn.size() < 1)
            throw new Exception(String.format("there is no product in this conditions"));
        return prodsToReturn;
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
        reqShop.setShopOwner(actor,actOn);

    }

    private User validateUserIsntGuest(String appointedBy) throws Exception {
        if(!allUsers.containsKey(appointedBy))
            throw new Exception("there is no such user named :" +appointedBy);
        User user = allUsers.get(appointedBy);

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

    private User findUserByName(String targetName) {
        if(allUsers.containsKey(targetName))
            return allUsers.get(targetName);
        throw new IllegalArgumentException(String.format("user name: %s is unknown",targetName));
    }

    private boolean isLoggedIn(String userName){
        if(loginUsers.containsKey(userName))
            return true;
        return false;
    }
}
