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
    private LocalDate birthday;

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
        this.birthday = LocalDate.of(1999,9,4);
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
        pendingNotifications = new CopyOnWriteArrayList<>();
        shopsMessages = new CopyOnWriteArrayList<>();
        this.invoices = new CopyOnWriteArrayList<>();
    }

    public User() {
        this.invoices = new CopyOnWriteArrayList<>();
        pendingNotifications = new CopyOnWriteArrayList<>();
        shopsMessages = new CopyOnWriteArrayList<>();
    }

    public void sendMessage(String message) {
        shopsMessages.add(message);
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name.toLowerCase();
        updateDB();
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
        updateDB();
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
        updateDB();
    }

    public boolean isTwoFactorEnabled() {
        return twoFactorEnabled;
    }

    public UserType getUserType() {
        return userType;
    }

    public void setUserType(UserType userType) {
        this.userType = userType;
        updateDB();
    }

    public List<String> getShopsMessages() {
        return shopsMessages;
    }

    public void setTwoFactorEnabled(boolean twoFactorEnabled) {
        this.twoFactorEnabled = twoFactorEnabled;
        updateDB();
    }

    public Cart getCart() {
        return currentCart;
    }

    public void addProductToCart(String shopName, Product product, int quantity) throws Exception {
        getCart().addProduct(shopName, product, quantity);
        updateDB();
    }

    public void updateProductsFromCart(String shopName, String productName, int newQuantity) throws Exception {
        getCart().updateProductQuantity(shopName, productName, newQuantity);
        updateDB();
    }

    public void removeProductFromCart(String shopName, String productName) throws Exception {
        getCart().removeProduct(shopName,productName);
        updateDB();
    }

    public void removeProductFromCartIfExists(String shopName, String productName) throws Exception {
        getCart().removeProductIfExists(shopName,productName);
        updateDB();
    }

    public boolean isAdmin() {
        return userType == UserType.ADMIN;
    }
    
    public void addInvoice(UserInvoice userInvoice) {
        invoices.add(userInvoice);
        PersistenceManager.getInstance().persistObj(userInvoice);
        updateDB();
    }

    public List<UserInvoice> getInvoices() {
        return invoices;
    }

    public void clearCart() {
//        PersistenceManager.getInstance().removeFromDB(currentCart);
        currentCart.clear();
//        PersistenceManager.getInstance().removeFromDB(currentCart);
//        currentCart = new Cart(name);
        updateDB();
    }

    public void addPendingNotifications(Notification notification) {
        pendingNotifications.add(notification);
        updateDB();
    }

    public String getSessionID() {
        return sessionID;
    }

    public void setSessionID(String sessionID) {
        this.sessionID = sessionID.toLowerCase();
        updateDB();
    }
	
	public void setCart(Cart currentCart) {
        this.currentCart = currentCart;
        updateDB();
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
        updateDB();
    }

    public LocalDate getBirthDay() {
        return birthday;
    }

    public void ReadNotifications() {
        for(Notification notification: pendingNotifications)
            if(!notification.isRead()) notification.Read();
    }

    private void updateDB(){
        if (this.getUserType() != UserType.GUEST)
            PersistenceManager.getInstance().updateObj(this);
    }

    public void setBirthday(LocalDate bDay) throws Exception {
        if (bDay.isAfter(LocalDate.now()))throw new Exception("Birthday cannot be in the future!!");
        if (bDay.isBefore(LocalDate.ofYearDay(1900,1)))throw new Exception("You're too old, 1900 and above only");
        birthday = bDay;
    }
}

