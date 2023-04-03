package BusinessLayer;

import BusinessLayer.Shops.*;
import BusinessLayer.Users.*;
import BusinessLayer.Purchases.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

import javax.mail.internet.AddressException;
import javax.mail.internet.InternetAddress;

import java.util.Collection;
import java.util.concurrent.ConcurrentHashMap;
import java.util.regex.Pattern;

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
      Shop shop = new Shop(shopName);
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
    public ShopIntr getShop(String userName, String shopName) {
        return null;
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
    public void appointShopOwner(String appointedBy, String appointee, String shopName) {

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
