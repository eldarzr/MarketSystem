package BusinessLayer.Users;

import BusinessLayer.Enums.UserType;
import BusinessLayer.MemberRoleInShop;
import BusinessLayer.Purchases.Cart;
import BusinessLayer.Shops.Product;
import BusinessLayer.Shops.Shop;

import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.ConcurrentLinkedQueue;

public class User {
    private UserType userType;
    private String name;
    private String email;
    private String password;
    private ConcurrentLinkedQueue<String> shopsMessages = new ConcurrentLinkedQueue<>();
    private boolean twoFactorEnabled;

    Cart currentCart;

    public User(String name, String email, String password) {
        this.name = name;
        this.email = email;
        this.password = password;
        userType = UserType.MEMBER;
        currentCart = new Cart();
    }

    public User(String guestName) {
        name = guestName;
        userType = UserType.GUEST;
    }

    public void sendMessage(String message) {
        shopsMessages.add(message);
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public boolean isTwoFactorEnabled() {
        return twoFactorEnabled;
    }

    public UserType getUserType() {
        return userType;
    }

    public void setUserType(UserType userType) {
        this.userType = userType;
    }

    //we really should create functions at the market that calls all of this functions
    public void setTwoFactorEnabled(boolean twoFactorEnabled) {
        this.twoFactorEnabled = twoFactorEnabled;
    }

    public Cart getCart() {
        return currentCart;
    }

    public void addProductToCart(String shopName, Product product, int quantity) throws Exception {
        getCart().addProduct(shopName, product, quantity);
    }

    public void updateProductsFromCart(String shopName, String productName, int newQuantity) throws Exception {
        getCart().updateProductQuantity(shopName, productName, newQuantity);
    }

    public void removeProductFromCart(String shopName, String productName) throws Exception {
        getCart().removeProduct(shopName,productName);
    }
}

