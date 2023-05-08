package BusinessLayer.Users;

import BusinessLayer.Enums.UserType;
import BusinessLayer.Notifications.Notification;
import BusinessLayer.Notifications.NotificationObserver;
import BusinessLayer.MemberRoleInShop;
import BusinessLayer.Purchases.Cart;
import BusinessLayer.Purchases.UserInvoice;
import BusinessLayer.Shops.Product;
import BusinessLayer.Shops.Shop;

import java.time.LocalDate;
import java.util.Collection;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.ConcurrentLinkedDeque;
import java.util.concurrent.ConcurrentLinkedQueue;

public class User {
    private UserType userType;
    private String name;
    private String sessionID;
    private String email;
    private String password;
    private ConcurrentLinkedQueue<String> shopsMessages = new ConcurrentLinkedQueue<>();
    private ConcurrentLinkedQueue<UserInvoice> invoices = new ConcurrentLinkedQueue<>();
    private boolean twoFactorEnabled;

    Cart currentCart;

    private ConcurrentLinkedDeque<Notification> pendingNotifications;

    public User(String name, String email, String password) {
        this.name = name.toLowerCase();
        this.email = email;
        this.password = password;
        this.sessionID = null;
        userType = UserType.MEMBER;
        currentCart = new Cart();
        pendingNotifications = new ConcurrentLinkedDeque<>();
    }

    public User(String guestName) {
        name = guestName.toLowerCase();
        sessionID = null;
        userType = UserType.GUEST;
        currentCart = new Cart();
    }

    public void sendMessage(String message) {
        shopsMessages.add(message);
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name.toLowerCase();
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

    public ConcurrentLinkedQueue<String> getShopsMessages() {
        return shopsMessages;
    }

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

    public boolean isAdmin() {
        return userType == UserType.ADMIN;
    }
    
    public void addInvoice(UserInvoice userInvoice) {
        invoices.add(userInvoice);
    }

    public ConcurrentLinkedQueue<UserInvoice> getInvoices() {
        return invoices;
    }

    public void clearCart() {
        currentCart = new Cart();
    }

    public void addPendingNotifications(Notification notification) {
        pendingNotifications.push(notification);
    }

    public String getSessionID() {
        return sessionID;
    }

    public void setSessionID(String sessionID) {
        this.sessionID = sessionID.toLowerCase();
    }
	
	public void setCart(Cart currentCart) {
        this.currentCart = currentCart;
    }

    public Collection<Notification> getPendingNotification() {
        return pendingNotifications;
    }

    public void removeNotification(Notification notification) {
        for (Notification noti : pendingNotifications) {
            if (noti.getMessage().equals(notification.getMessage())
                    && noti.getSource().equals(notification.getSource())
                    && noti.getCreationTime().equals(notification.getCreationTime())) {
                pendingNotifications.remove(noti);
                break;
            }
        }
    }

    public LocalDate getBirthDay() {
        return LocalDate.of(1999,9,4);
    }

    public void ReadNotifications() {
        for(Notification notification: pendingNotifications)
            if(!notification.isRead()) notification.Read();
    }
}

