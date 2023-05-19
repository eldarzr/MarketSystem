package BusinessLayer.Users;

import BusinessLayer.Enums.UserType;
import BusinessLayer.Notifications.Notification;
import BusinessLayer.Notifications.NotificationObserver;
import BusinessLayer.MemberRoleInShop;
import BusinessLayer.PersistenceManager;
import BusinessLayer.Purchases.Cart;
import BusinessLayer.Purchases.UserInvoice;
import BusinessLayer.Shops.Product;
import BusinessLayer.Shops.Shop;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.Collection;
import java.util.List;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.ConcurrentLinkedDeque;
import java.util.concurrent.ConcurrentLinkedQueue;
import java.util.concurrent.CopyOnWriteArrayList;

@Entity
@Table(name = "users")
public class User{

    @Enumerated(EnumType.STRING)
    private UserType userType;

    @Id
    @Column(name = "userName")
    private String name;
    private String sessionID;
    private String email;

    @Column(name = "password") // To avoid using a reserved keyword
    private String password;

    @ElementCollection
    @CollectionTable(name = "shops_messages", joinColumns = @JoinColumn(name = "userName"))
    @Column(name = "message")
    private List<String> shopsMessages;

    @OneToMany(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    @JoinColumn(name = "userName")
    private List<UserInvoice> invoices;

    private boolean twoFactorEnabled;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "cart_id")
//    @Transient
    Cart currentCart;

    @OneToMany(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    @JoinColumn(name = "userName")
    private List<Notification> pendingNotifications;
    @Transient
    private NotificationCallback callback;

    public User(String name, String email, String password) {
        this.name = name.toLowerCase();
        this.email = email;
        this.password = password;
        this.sessionID = null;
        userType = UserType.MEMBER;
        currentCart = new Cart(name);
        pendingNotifications = new CopyOnWriteArrayList<>();
        shopsMessages = new CopyOnWriteArrayList<>();
        this.invoices = new CopyOnWriteArrayList<>();
//        PersistenceManager.getInstance().persistObj(currentCart);
    }

    public User(String guestName) {
        name = guestName.toLowerCase();
        sessionID = null;
        userType = UserType.GUEST;
        currentCart = new Cart(guestName);
        this.invoices = new CopyOnWriteArrayList<>();
//        PersistenceManager.getInstance().persistObj(currentCart);
    }

    public User() {
        this.invoices = new CopyOnWriteArrayList<>();
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

    public List<String> getShopsMessages() {
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
        PersistenceManager.getInstance().updateObj(getCart());
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

    public List<UserInvoice> getInvoices() {
        return invoices;
    }

    public void clearCart() {
//        PersistenceManager.getInstance().removeFromDB(currentCart);
        currentCart.clear();
//        PersistenceManager.getInstance().removeFromDB(currentCart);
//        currentCart = new Cart(name);
    }

    public void addPendingNotifications(Notification notification) {
        pendingNotifications.add(notification);
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

