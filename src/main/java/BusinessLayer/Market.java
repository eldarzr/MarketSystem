package BusinessLayer;

import BusinessLayer.Enums.UserType;
import BusinessLayer.ExternalSystemsAdapters.CreditCardPaymentDetails;
import BusinessLayer.ExternalSystemsAdapters.PaymentDetails;
import BusinessLayer.ExternalSystemsAdapters.SupplyDetails;
import BusinessLayer.Notifications.Notification;
import BusinessLayer.Purchases.*;
import BusinessLayer.Shops.Discount.XorDecisionRules.XorDecisionRuleName;
import BusinessLayer.Shops.Product;
import BusinessLayer.Shops.ProductIntr;
import BusinessLayer.Shops.PurchasePolicies.ComplexPolicyType;
import BusinessLayer.Shops.PurchasePolicies.PurchasePolicy;
import BusinessLayer.Shops.Shop;
import BusinessLayer.Shops.ShopHandler;
import BusinessLayer.Shops.*;
import BusinessLayer.Shops.Discount.*;
import BusinessLayer.Shops.Discount.DiscountRules.CompoundRuleType;
import BusinessLayer.Shops.Discount.DiscountRules.DiscountRule;
import BusinessLayer.Users.NotificationCallback;
import BusinessLayer.Users.User;
import BusinessLayer.Users.UsersHandler;
import org.apache.commons.lang3.NotImplementedException;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;
import javax.persistence.Transient;
import java.io.File;
import java.io.IOException;
import java.time.LocalDate;
import java.util.Collection;
import java.util.List;
import java.util.Map;
import java.util.logging.FileHandler;
import java.util.logging.Level;
import java.util.logging.Logger;
import java.util.logging.SimpleFormatter;

public class Market implements MarketIntr{

    private static final Logger logger = Logger.getLogger("Market");

    UsersHandler usersHandler;
    ShopHandler shopHandler;
    private final int SHOP_DISTANCE_MAX_LIMIT = 2;
    private final int PRODUCT_DISTANCE_MAX_LIMIT = 2;
    private final String ADMIN_NAME = "admin";
    private final String ADMIN_MAIL = "admin@gmail.com";
    private final String ADMIN_PASSWORD = "Aa123456";

    public Market() {
        usersHandler = UsersHandler.getInstance();
        shopHandler = ShopHandler.getInstance();
    }

    @Override
    public void init() throws Exception {
        logger.info("Starting market init.");
        createLogger();
        loadAdmin();
        loadProducts();
        logger.info("Market init Finished successfully.");
    }

    private void loadAdmin() throws Exception {
        logger.info("Start loading admin data.");
        register(ADMIN_NAME, ADMIN_MAIL, ADMIN_PASSWORD);
        addAdmin(ADMIN_NAME);
        logger.info("Loading admin data finished successfully.");
    }

    //todo: suggestion - we use logger in most of classes,
    // mainly at beginning and end of an action but also at throwing exceptions
    // I think it will be wise to create a static class of logUpdater
    // which will wrap exception throwing with adding severe logs and will manage the logs.
    private void createLogger() throws IOException {
        // Create a file handler and set its formatter
        try {
            String logDirectory = "./logs";
            File file = new File(logDirectory);

            // Create directory if it does not exist
            if (!file.exists()) {
                file.mkdir();
            }
            if (logger.getHandlers().length == 0) {
                FileHandler fileHandler = new FileHandler(logDirectory + "/MarketLog.log");
                SimpleFormatter formatter = new SimpleFormatter();
                fileHandler.setFormatter(formatter);

                // Add the file handler to the logger
                logger.addHandler(fileHandler);
            }

            // Set the logging level to INFO
            logger.setLevel(Level.INFO);
        } catch (IOException e) {
            logger.severe("Failed to create file handler: " + e.getMessage());
            throw new IOException("Failed to create file handler: " + e.getMessage());
        }
    }


    //return guest username
    @Override
    public String startSession() {
        logger.info("Attempt to start new session.");
        return usersHandler.createGuest();
    }

    //return guest username
    public String startSession(String sessionID) {
        logger.info("Attempt to start new session.");
        return usersHandler.createGuest(sessionID);
    }

    @Override
    public void closeSession(String userName) {
        logger.info("Attempt to close current session.");
        disconnect(userName);
        logger.info(String.format("Session of user %s closed.",userName));
    }

    @Override
    public User register(String userName, String email, String password) throws Exception {
        logger.info(String.format("Attempt to register user %s.", userName));
        User user = usersHandler.register(userName, email, password);
        logger.info(String.format("User %s registered successfully.", userName));
        return user;

    }

    @Override
    public String unregister(String userName) {
        usersHandler.unregister(userName);
        return logout(userName);
    }

    @Override
    public User login(String guestName, String userName, String password) {
        logger.info(String.format("Attempt to login user %s.", userName));
        User user = usersHandler.login(guestName, userName, password);
        logger.info(String.format("User %s logged in.", userName));
        return user;
    }

    //this function logout a member and return a guest name
    // a guest does not suppose to call this function only for members
    @Override
    public String logout(String userName) {
        logger.info(String.format("Attempt to logout user %s.", userName));
        String newUserName = disconnect(userName);
        logger.info(String.format("User %s logged out.", userName));
        logger.info(String.format("************************************************ %s", newUserName));
        return newUserName;
    }

    //the logic behind this function is that a member can log out and still be connected to the system as a guest.
    //when a user closes is session the system will remove this guest from the login users list
    private String disconnect(String userName){
        return usersHandler.disconnect(userName);
    }

    //next version
    @Override
    public Collection<UserInvoice> getUserPurchaseHistory(String userName) {
        return usersHandler.getUserPurchaseHistory(userName);
    }

    @Override
    public Shop createShop(String userName, String shopName) throws Exception {
        logger.info(String.format("Attempt by user %s to open store %s.", userName,shopName));
        userName = userName.toLowerCase();
        if (!isLoggedIn(userName))
        {
            String errorMsg=String.format("User %s is not login, thus can't open store.", userName);
            logger.severe(errorMsg);
            throw new Exception(errorMsg);
        }
        else
        {
            logger.info(String.format("User %s is logged in, proceed to open store.", userName));
        }

        //shopHandler.shopExists(shopName);
        userName = userName.toLowerCase();
        User user = usersHandler.findMemberByName(userName);
        Shop shop = new Shop(shopName, userName);
        //user.addFoundedShop(shopName);
        shopHandler.addShop(shopName, shop);
        MemberRoleInShop.createFounder(userName, shop, user::sendMessage);
        logger.info(String.format("User %s opened store %s and became it's founder.", userName,shopName));
        return shop;
    }

    @Override
    public void openShop(String userName, String shopName) throws Exception {
        logger.info(String.format("Attempt by user %s to open store %s.", userName,shopName));
        User founder=usersHandler.findMemberByName(userName);
        usersHandler.findLoginUser(userName);
        shopHandler.openShop(userName, shopName);
        // notify management on opening shop
        String message=String.format("User %s opened shop %s.", userName, shopName);
        Notification notification=new Notification(userName,message);
        notifyShopManagement(userName, shopName,notification);
    }

    //todo: naor
    @Override
    public void closeShop(String userName, String shopName) throws Exception {
        logger.info(String.format("Attempt by user %s to close store %s.", userName,shopName));
        //usersHandler.findMemberByName(userName);
        usersHandler.findLoginUser(userName);
        shopHandler.closeShop(userName, shopName);
        // notify management on closing shop
        String message=String.format("User %s closed shop %s.", userName, shopName);
        Notification notification=new Notification(userName,message);
        notifyShopManagement(userName, shopName,notification);
        logger.info(message);
    }

    private void notifyShopManagement(String userName, String shopName,Notification notification){
        try {
            for(String roleName: shopHandler.getShop(shopName).getManagementUserNames())
            {
                // no need to notify himself.
                if (!roleName.equals(userName)) usersHandler.notify(roleName,notification);
            }
        } catch (Exception e) {}
    }

    @Override
    public void addNewProduct(String userName, String shopName, String productName, String category, String desc, double price) throws Exception {
        logger.info(String.format("Attempt by user %s to add new product %s to store %s.", userName,productName, shopName));
        userName = userName.toLowerCase();
        validateLoggedInException(userName);
        shopHandler.addNewProduct(userName, shopName, productName, category, desc, price);
        // notify management on new product
        String message=String.format("User %s added new product %s to store %s.", userName,productName, shopName);
        Notification notification=new Notification(userName,message);
        notifyShopManagement(userName, shopName,notification);
        logger.info(message);
    }

    public void addNewProduct(String userName, String shopName, String productName, String productCategory, String productDescription, Double productPrice, Integer productQuantity) throws Exception {
        addNewProduct(userName,shopName,productName,productCategory,productDescription,productPrice);
        updateProductQuantity(userName,shopName,productName,productQuantity);
    }

    @Override
    public void removeProduct(String userName, String shopName, String productName) throws Exception {
        logger.info(String.format("Attempt by user %s to remove product %s from store %s.", userName,productName, shopName));
        validateLoggedInException(userName);
        shopHandler.removeProduct(userName, shopName, productName);
        // notify management on new product
        String message=String.format("User %s removed product %s from store %s.", userName,productName, shopName);
        Notification notification=new Notification(userName,message);
        notifyShopManagement(userName, shopName,notification);
        logger.info(message);
    }

    @Override
    public void updateProductName(String userName, String shopName, String productOldName, String productNewName) throws Exception {
        logger.info(String.format("Attempt by user %s to update product %s name from store %s.", userName,productOldName, shopName));
        validateLoggedInException(userName);
        shopHandler.updateProductName(userName, shopName, productOldName, productNewName);
        logger.info(String.format("User %s updated product %s name to %s from store %s.", userName,productOldName,productNewName, shopName));
    }

    @Override
    public void updateProductDesc(String userName, String shopName, String productName, String productNewDesc) throws Exception {
        logger.info(String.format("Attempt by user %s to update product %s desc from store %s.", userName,productName, shopName));
        validateLoggedInException(userName);
        shopHandler.updateProductDesc(userName, shopName, productName, productNewDesc);
        logger.info(String.format("User %s updated product %s desc to %s from store %s.", userName,productName,productNewDesc, shopName));
    }

    @Override
    public void updateProductPrice(String userName, String shopName, String productName, double price) throws Exception {
        logger.info(String.format("Attempt by user %s to update product %s price from store %s.", userName,productName, shopName));
        validateLoggedInException(userName);
        shopHandler.updateProductPrice(userName, shopName, productName, price);
        logger.info(String.format("User %s updated product %s price to %f from store %s.", userName,productName,price, shopName));
    }

    @Override
    public void updateProductQuantity(String userName, String shopName, String productName, int quantity) throws Exception {
        logger.info(String.format("Attempt by user %s to update product %s quantity in store %s.", userName,productName, shopName));
        validateLoggedInException(userName);
        shopHandler.updateProductQuantity(userName, shopName, productName, quantity);
        logger.info(String.format("User %s updated product %s quantity to %d in store %s.", userName,productName,quantity, shopName));
    }

    @Override
    public void updateProductCategory(String userName, String shopName, String productName, String category) throws Exception {
        logger.info(String.format("Attempt by user %s to update product %s category in store %s.", userName,productName, shopName));
        validateLoggedInException(userName);
        shopHandler.updateProductCategory(userName, shopName, productName, category);
        logger.info(String.format("User %s updated product %s category to %s in store %s.", userName,productName,category, shopName));
    }

    @Override
    public void addProductItems(String userName, String shopName, String productName, int quantity) throws Exception {
        logger.info(String.format("Attempt by user %s to add items to product %s in store %s.", userName,productName, shopName));
        validateLoggedInException(userName);
        shopHandler.addProductItems(userName, shopName, productName, quantity);
        logger.info(String.format("User %s added %d items to product %s  in store %s.", userName,quantity,productName, shopName));
    }

    @Override
    public Shop searchShop(String userName, String shopName) throws Exception {
        logger.info(String.format("Attempt by user %s to find store %s.", userName, shopName));
        validateLoggedInException(userName);
        return shopHandler.searchShop(shopName, isAdmin(userName));
    }

    public List<Shop> getShops(String userName, String shopName) throws Exception {
        logger.info(String.format("Attempt by user %s to search for store %s.", userName, shopName));
        validateLoggedInException(userName);
        return shopHandler.getShops(shopName, isAdmin(userName));
    }

    @Override
    public ProductIntr getProduct(String userName, String shopName, String productName) throws Exception {
        logger.info(String.format("Attempt by user %s to get product %s from store %s.", userName,productName, shopName));
        validateLoggedInException(userName);
        return shopHandler.getProduct(shopName, productName, isAdmin(userName));
    }

    @Override
    public List<ProductIntr> basicSearch(String userName, String productName) throws Exception {
        logger.info(String.format("Attempt by user %s to basic search for product %s.", userName, productName));
        validateLoggedInException(userName);
        return shopHandler.basicSearch(productName, isAdmin(userName));
    }

    @Override
    public List<ProductIntr> extendedSearch(String userName, String productName, double minPrice, double maxPrice,
                                                  String category) throws Exception{
        logger.info(String.format("Attempt by user %s to extended search for product %s.", userName, productName));
        validateLoggedInException(userName);
        return shopHandler.extendedSearch(productName, minPrice, maxPrice, category, isAdmin(userName));
    }

    @Override
    public void appointShopOwner(String appointedBy, String appointee, String shopName) throws Exception {
        logger.info(String.format("Attempt by user %s to appoint %s as shop-owner of shop %s.", appointedBy,appointee, shopName));
        appointee = appointee.toLowerCase();
        appointedBy = appointedBy.toLowerCase();
        usersHandler.findMemberByName(appointedBy);
        validateLoggedInException(appointedBy);
        User user = usersHandler.findMemberByName(appointee);
        Shop reqShop = checkForShop(shopName);
        reqShop.setShopOwner(appointedBy,appointee , user::sendMessage);
        //notify appointee
        String message=String.format("User %s appointed %s as shop-owner of shop %s.", appointedBy,appointee, shopName);
        Notification notification=new Notification(appointedBy,message);
        usersHandler.notify(appointee,notification);
        logger.info(message);
    }

    public Shop checkForShop(String shopName) throws Exception {
        logger.info(String.format("Attempt to find exact shop %s.", shopName));
        return shopHandler.getShop(shopName);
    }

    @Override
    public void appointShopManager(String appointedBy, String appointee, String shopName) throws Exception {
        logger.info(String.format("Attempt by user %s to appoint %s as shop-manager of shop %s.", appointedBy,appointee, shopName));
        appointedBy = appointedBy.toLowerCase();
        appointee = appointee.toLowerCase();
        usersHandler.findMemberByName(appointedBy);
        validateLoggedInException(appointedBy);
        User user = usersHandler.findMemberByName(appointee);
        Shop reqShop = checkForShop(shopName);
        reqShop.setShopManager(appointedBy,appointee ,user::sendMessage);
        //notify appointee
        String message=String.format("User %s appointed %s as shop-manager of shop %s.", appointedBy,appointee, shopName);
        Notification notification=new Notification(appointedBy,message);
        usersHandler.notify(appointee,notification);
        logger.info(message);
    }

    @Override
    public void removeShopManager(String managerName, String userToRemove, String shopName) throws Exception {
        throw new NotImplementedException();
    }

    //next version
    @Override
    public void removeShopOwner(String managerName, String userToRemove, String shopName) throws Exception {
        managerName = managerName.toLowerCase();
        userToRemove = userToRemove.toLowerCase();
        usersHandler.findMemberByName(managerName);
        validateLoggedInException(managerName);
        usersHandler.findMemberByName(userToRemove);
        Shop reqShop = checkForShop(shopName);
        reqShop.removeOwner(managerName,userToRemove);

       //notify removed owner
        String message=String.format("Manager %s removed you as shop-manager of shop %s.", managerName, shopName);
        Notification notification=new Notification(managerName,message);
        usersHandler.notify(userToRemove,notification);
        logger.info(String.format("Manager %s removed %s as shop-manager of shop %s.", managerName,userToRemove, shopName));
    }

    @Override
    public MemberRoleInShop changeManagerPermissions(String actor, String actOn, String shopName, List<Integer> permission) throws Exception {
        logger.info(String.format("Attempt by user %s to change manager permissions of %s as shop-manager of shop %s.", actor,actOn, shopName));
        validateUserIsntGuest(actor);
        //isLoggedIn(actor);
        validateLoggedInException(actor);
        validateUserIsntGuest(actOn);
        Shop reqShop = checkForShop(shopName);
        //notify appointee
        String message=String.format("User %s changed your permissions in shop %s.", actor, shopName);
        Notification notification=new Notification(actor,message);
        actOn=actOn.toLowerCase();
        usersHandler.notify(actOn,notification);
        logger.info(String.format("User %s changed %s permissions in shop %s.", actor,actOn, shopName));
       return reqShop.setManageOption(actor,actOn,permission);
    }

    public void notifyUser( String actOn,Notification notification)
    {
        usersHandler.notify(actOn,notification);
    }

    @Override
    public void addManagerPermissions(String actor, String actOn, String shopName,int permission) throws Exception {
        logger.info(String.format("Attempt by user %s to add manager permissions of %s as shop-manager of shop %s.", actor,actOn, shopName));
        validateUserIsntGuest(actor);
        isLoggedIn(actor);
        validateUserIsntGuest(actOn);
        Shop reqShop = checkForShop(shopName);
        reqShop.addManageOption(actor,actOn,permission);
        //notify appointee
        String message=String.format("User %s added to your permissions in shop %s.", actor, shopName);
        Notification notification=new Notification(actor,message);
        usersHandler.notify(actOn,notification);
        logger.info(String.format("User %s added to %s permissions in shop %s.", actor,actOn, shopName));
    }

    //todo: naor - talk with eldar
    @Override
    public Collection<MemberRoleInShop> getShopManagersAndPermissions(String userName, String shopName) throws Exception {
        logger.info(String.format("Attempt by user %s to get management of shop %s.", userName, shopName));
        User user = usersHandler.findLoginUser(userName);
        return shopHandler.getShopManagementPermissions(user,shopName);
    }

    public Collection<MemberRoleInShop> getShopManagersAndPermissionsByAdmin(String admin, String userName, String shopName) throws Exception {
        logger.info(String.format("Attempt by admin %s to get management of shop %s.", userName, shopName));
        validateLoggedInAdminException(admin);
        User user = usersHandler.getUser(userName);
        return shopHandler.getShopManagementPermissions(user,shopName);
    }

    public String getRolesInformation(String userName, String shopName) throws Exception {
        logger.info(String.format("Attempt by user %s to get roles information of shop %s.", userName, shopName));
        return searchShop(userName,shopName).getRolesInfo();
    }

    //todo: naor
    @Override
    public Collection<ShopInvoice> getShopPurchaseHistory(String userName, String shopName) throws Exception {
        validateLoggedInException(userName);
        return shopHandler.getShopPurchaseHistory(shopName, userName);
    }

    @Override
    public void addAdmin(String adminName) throws Exception {
        logger.info(String.format("Attempt to add admin %s.", adminName));
        usersHandler.addAdmin(adminName);
    }

    @Override
    public void removeShop(String adminName, String userName, String shopName) {
        throw new NotImplementedException();
    }

    @Override
    public void blockUser(String adminName, String UserName) {
        throw new NotImplementedException();
    }

    //todo : niv
    @Override
    public Collection<ShopInvoice> getShopPurchaseHistoryByAdmin(String adminName, String shopName) throws Exception {
        validateLoggedInAdminException(adminName);
        return shopHandler.getShopPurchaseHistoryByAdmin(shopName);
    }

    @Override
    public Collection<UserInvoice> getUserPurchaseHistoryByAdmin(String adminName, String memberName) throws Exception {
        validateLoggedInAdminException(adminName);
        return usersHandler.getUserPurchaseHistoryByAdmin(memberName);
    }


    @Override
    public Cart getCart(String userName) {
        logger.info(String.format("Attempt to get cart of %s.", userName));
        return usersHandler.findLoginUser(userName).getCart();
    }


    @Override
    public ShopBag getShopBag(String userName, String ShopName) {
        logger.info(String.format("Attempt to get shop bag of user %s in shop %s.", userName,ShopName));
        return usersHandler.findLoginUser(userName).getCart().getShoppingBag(ShopName);
    }

    @Override
    public void addProductsToCart(String userName, String shopName, String productName, int quantity) throws Exception {
        logger.info(String.format("Attempt by user %s to add %d %s from shop %s.", userName,quantity,productName,shopName));
        User user = usersHandler.findLoginUser(userName);
        Shop shop = shopHandler.getShop(shopName);
        Product product = shop.getProduct(productName,quantity);
        user.addProductToCart(shop.getName(),product,quantity);
        logger.info(String.format("User %s added %d %s from shop %s.", userName,quantity,productName,shopName));
    }

    @Override
    public void removeProductFromCart(String userName, String shopName, String productName) throws Exception {
        logger.info(String.format("Attempt by user %s to remove product %s from shop %s in cart.", userName,productName,shopName));
        User user = usersHandler.findLoginUser(userName);
        user.removeProductFromCart(shopName,productName);
        logger.info(String.format("User %s removed product %s from shop %s in cart.", userName,productName,shopName));
    }


    //todo: niv
    @Override
    public void updateCartProductQuantity(String userName, String shopName, String productName, int newQuantity) throws Exception {
        logger.info(String.format("Attempt by user %s to update product %s quantity to %d from shop %s in cart.", userName,productName,newQuantity,shopName));
        User user = usersHandler.findLoginUser(userName);
        Shop shop = shopHandler.getShop(shopName);
        boolean foundProduct = false;
        for(ShopProduct product : shop.getProducts()){
            if(product.getName().equals(productName)){
                foundProduct = true;
                if(!(product.getQuantity() > newQuantity))
                    throw new IllegalArgumentException(String.format("there is not enough quantity from product : %s. available quantity : %d , desire quantity: %d",productName,product.getQuantity(),newQuantity));
            }
        }
        if(!foundProduct)
            throw new IllegalArgumentException(String.format("Product : %s does not belongs to shop: %s",productName,shopName));
        user.updateProductsFromCart(shopName,productName,newQuantity);
        logger.info(String.format("User %s to updated product %s quantity to %d from shop %s in cart.", userName,productName,newQuantity,shopName));
    }

    //I'm setting the basic logic behind this, we need to sit together and decide what to do with thread safety
    //I know this is a big function, I don't mean to leave it that way it's just what I had in mind when trying to write this function
    @Override
    public void purchaseCart(String userName, PaymentDetails paymentDetails, SupplyDetails supplyDetails) throws Exception {
        logger.info(String.format("Attempt by user %s to purchase cart.", userName));
        User user = usersHandler.findLoginUser(userName);
        List<Shop> shops = shopHandler.getShops(user.getCart().getShopsNames());
        Purchase purchase = new Purchase(user,shops,paymentDetails,supplyDetails);
        purchase.process();
        //return invoice or order number or order summary something like this need to decide
        logger.info(String.format("User %s purchase cart successfully.", userName));
    }



    //this function reset everything on the system, for now only use is for testing
    //need to add logic to reset all shops, but since we dont have a controller yet and I'm not sure what we want
    //to do I left it like this
    @Override
    public void resetAll(){
        usersHandler.reset();
        shopHandler.reset();
    }

    public CategoryDiscount addCategoryDiscount(String shopName, String userName, double discountPercentage, String category) throws Exception {
        usersHandler.findMemberByName(userName);
        usersHandler.findLoginUser(userName);
        Shop shop = shopHandler.getShop(shopName);
        return shop.addCategoryDiscount(userName,discountPercentage,category);
    }

    public ProductDiscount addProductDiscount(String shopName, String userName, double discountPercentage, String productName) throws Exception {
        usersHandler.findMemberByName(userName);
        usersHandler.findLoginUser(userName);
        Shop shop = shopHandler.getShop(shopName);
        return shop.addProductDiscount(userName,discountPercentage,productName);
    }

    public ShopDiscount addShopDiscount(String shopName, String userName, double discountPercentage) throws Exception {
        usersHandler.findMemberByName(userName);
        usersHandler.findLoginUser(userName);
        Shop shop = shopHandler.getShop(shopName);
        return shop.addShopDiscount(userName,discountPercentage);
    }

    public SumCompoundDiscount addSumDiscount(String shopName, String userName, List<Integer> discountsIds) throws Exception {
        usersHandler.findMemberByName(userName);
        usersHandler.findLoginUser(userName);
        Shop shop = shopHandler.getShop(shopName);
        return shop.addSumDiscount(userName,discountsIds);
    }

    public MaxCompoundDiscount addMaxDiscount(String shopName, String userName, List<Integer> discountsIds) throws Exception {
        usersHandler.findMemberByName(userName);
        usersHandler.findLoginUser(userName);
        Shop shop = shopHandler.getShop(shopName);
        return shop.addMaxDiscount(userName,discountsIds);
    }

    public XorCompoundDiscount addXorDiscount(String shopName, String userName, List<Integer> discountsIds, XorDecisionRuleName xorDiscountRule) throws Exception {
        usersHandler.findMemberByName(userName);
        usersHandler.findLoginUser(userName);
        Shop shop = shopHandler.getShop(shopName);
        return shop.addXorDiscount(userName,discountsIds,xorDiscountRule);
    }

    public void addDiscountRule(String shopName, String userName, DiscountRule discountRule, int discountId, String actionWithOldRule) throws Exception {
        usersHandler.findMemberByName(userName);
        usersHandler.findLoginUser(userName);
        Shop shop = shopHandler.getShop(shopName);
        CompoundRuleType actionWithOldRuleE = getEnumValue(actionWithOldRule);
        shop.addDiscountRule(userName,discountRule,discountId,actionWithOldRuleE);
    }

    public void resetDiscountRule(String shopName, String userName, int discountId) throws Exception {
        usersHandler.findMemberByName(userName);
        usersHandler.findLoginUser(userName);
        Shop shop = shopHandler.getShop(shopName);
        shop.resetDiscountRule(discountId);
    }



    private boolean isLoggedIn(String userName) {
        logger.info(String.format("Attempt to check if user %s is logged in.", userName));
        return usersHandler.isLoggedIn(userName);
    }

    private User findUserByName(String userName) {
        logger.info(String.format("Attempt to find user %s.", userName));
        return usersHandler.findUserByName(userName);
    }

    private User validateUserIsntGuest(String userName) throws Exception {
        logger.info(String.format("Attempt to check if user %s is member.", userName));
        User user = findUserByName(userName);
        if(user.getUserType() == UserType.GUEST) {
            String errorMsg=String.format("User %s is guest, guests cannot do it.", userName);
            logger.severe(errorMsg);
            throw new Exception(errorMsg);
        }
        logger.info(String.format("User %s is member.", userName));
        return user;
    }

    private void validateLoggedInException(String userName) throws Exception {
        if(!isLoggedIn(userName)) {
            String errorMsg=String.format("User %s is not login.", userName);
            logger.severe(errorMsg);
            throw new Exception(errorMsg);
        }
    }

    private void validateLoggedInAdminException(String userName) throws Exception {
        validateLoggedInException(userName);
        if(!isAdmin(userName))
            throw new Exception(String.format("the user %s is not admin", userName));
    }

    private boolean isAdmin(String userName) {
        logger.info(String.format("Attempt to check if user %s is admin.", userName));
        return usersHandler.isAdmin(userName);
    }

    private void loadProducts() throws Exception {
        String[] usersName = {"eldar_first", "niv_first"};
        String[] passwords = {"Aa123456", "Aa123456"};
        String[] emails = {"eldarFirst@gmail.com", "nivFirst@gmail.com"};
        String[] shopNames = {"shopFirst1", "shopFirst2"};
        String[] prodNames = {"prodFirst1", "prodFirst2"};
        String[] descs = {"description1 description1 description1", "description2"};
        String[] cat = {"catFirst1", "catFirst2"};
        double[] prices = {5, 10};

        for (int i = 0; i < usersName.length; i++) {
            String guestName = startSession();
            register(usersName[i], emails[i], passwords[i]);
            login(guestName, usersName[i], passwords[i]);
            createShop(usersName[i], shopNames[i]);
            try {
                addNewProduct(usersName[i], shopNames[i], prodNames[i], cat[i], descs[i], prices[i]);
            }
            catch (Exception e) {
                System.out.println(e.getMessage());
            }
            addProductItems(usersName[i], shopNames[i], prodNames[i], 3);
        }
        createShop(usersName[0],"The Shop");
        createShop(usersName[0],"Super Shop");
        for(int i = 0; i < 6; i++) {
            addNewProduct(usersName[0], "Super Shop", "product" + i, cat[0], descs[0], prices[0]);
            addProductItems(usersName[0], "Super Shop", "product" + i, 3);
        }

        addProductsToCart(usersName[0], shopNames[0], prodNames[0], 1);
        addProductsToCart(usersName[0], shopNames[1], prodNames[1], 1);
        PaymentDetails paymentDetails = new CreditCardPaymentDetails("1234123412341234", "10", "28", "eldar", "123", "123456789");
        SupplyDetails supplyDetails = new SupplyDetails("eldar1", "sa", "dimona", "israel", "123456");
        purchaseCart(usersName[0], paymentDetails, supplyDetails);

        logout("eldar_first");
        logout("niv_first");

        loadDataGabi();


    }

    private void loadDataGabi() throws Exception {
        String userName = "gabi99";
        String password = "Aa123456";
        String email = "gabi@gmail.com";

        String guestName = startSession();
        register(userName,email,password);
        login(guestName,userName,password);
        for(int i = 1; i < 5; i++){
            String shopName = "Gabi's Goods "+ i;
            createShop(userName, shopName);
            for( int j = 1; j < 5; j++) {
                String prodName = "Item "+j;
                double price = 4 + ((((i * j) % 7 ) + 5.5 * j) / (2 * j)) ;
                String description = "Good product";
                int quantity = (int) ((Math.round(price) % 10) + 3);
                String category = "Category" + (j % 2);
                addNewProduct(userName, shopName, prodName, category, description, price);
                addProductItems(userName,shopName,prodName,quantity);
            }
        }
        logout(userName);
    }

    public List<User> getAllUsers(String adminName) throws Exception {
        return usersHandler.getAllUsers(adminName);
    }

    public String removeUser(String adminName, String userName) throws Exception {
        //check if user- userName has roles in some shops
        if(shopHandler.isUserHasRoleInAnyShops(userName))
            throw new Exception(String.format("the user %s has role in some shops therefore he cannot" +
                    "be removed", userName));
        return usersHandler.removeUser(adminName, userName);
    }

    public List<Shop> getAllShops(String userName) throws Exception {
        validateLoggedInAdminException(userName);
        return shopHandler.getAllShops();
    }

    public User getUser(String userName) {
        return usersHandler.getUser(userName);
    }

    public List<MemberRoleInShop> getUserRoles(String userName) throws Exception {
        validateUserIsntGuest(userName);
        isLoggedIn(userName);
        return shopHandler.getUserRoles(userName);

    }

    public Shop getShop(String name) throws Exception {
        return shopHandler.getShop(name);
    }

    public void setNotificationCallback(String name, NotificationCallback callback) {
        usersHandler.setNotificationCallback(name,callback);
    }

    public Collection<Notification> getUserNotifications(String userName) throws Exception {
        validateUserIsntGuest(userName);
        isLoggedIn(userName);
        return usersHandler.getUserNotifications(userName);
    }

    public void removeNotification(String username,Notification notification) {
        usersHandler.removeNotification(username, notification);
    }
	
	public DiscountPolicy getDiscountPolicy(String currentUser, String shopName) throws Exception {
        usersHandler.findLoginUser(currentUser);
        Shop shop = shopHandler.getShop(shopName);
        return shop.getDiscountPolicy(currentUser);
    }

	public void addAgePurchasePolicy(String userName, String shopName,boolean isProduct, String toConstraint,boolean positive,int startAge, int endAge)throws Exception{
        validateUserIsntGuest(userName);
        isLoggedIn(userName);
        getShop(shopName).getPurchasePolicyManager(userName).addAgeConstraint(isProduct,toConstraint,positive,startAge,endAge);
    }

    public void addQuantityPurchasePolicy(String userName, String shopName,boolean isProduct, String toConstraint,boolean positive,int minQuantity, int maxQuantity)throws Exception{
        validateUserIsntGuest(userName);
        isLoggedIn(userName);
        getShop(shopName).getPurchasePolicyManager(userName).addQuantityConstraint(isProduct,toConstraint,positive,minQuantity,maxQuantity);
    }
	
	public void removeDiscount(String shopName, String userName, int discountId) throws Exception {
        usersHandler.findLoginUser(userName);
        Shop shop = shopHandler.getShop(shopName);
        shop.removeDiscount(discountId);
    }

    public void addDatePurchasePolicy(String userName, String shopName, boolean isProduct, String toConstraint, boolean positive, LocalDate startDate, LocalDate endDate)throws Exception{
        validateUserIsntGuest(userName);
        isLoggedIn(userName);
        getShop(shopName).getPurchasePolicyManager(userName).addDateConstraint(isProduct,toConstraint,positive,startDate,endDate);
    }

    public void addTimePurchasePolicy(String userName, String shopName,boolean isProduct, String toConstraint,boolean positive,int startHour, int endHour)throws Exception{
        validateUserIsntGuest(userName);
        isLoggedIn(userName);
        getShop(shopName).getPurchasePolicyManager(userName).addTimeConstraint(isProduct,toConstraint,positive,startHour,endHour);
    }

    public void addOrPurchasePolicy(String userName, String shopName,int pid1, int pid2)throws Exception{
        validateUserIsntGuest(userName);
        isLoggedIn(userName);
        getShop(shopName).getPurchasePolicyManager(userName).addComplexConstraint(pid1,pid2, ComplexPolicyType.OR);
    }
    public void addAndPurchasePolicy(String userName, String shopName,int pid1, int pid2)throws Exception{
        validateUserIsntGuest(userName);
        isLoggedIn(userName);
        getShop(shopName).getPurchasePolicyManager(userName).addComplexConstraint(pid1,pid2, ComplexPolicyType.AND);
    }

    public void addIfPurchasePolicy(String userName, String shopName,int pid1, int pid2)throws Exception{
        validateUserIsntGuest(userName);
        isLoggedIn(userName);
        getShop(shopName).getPurchasePolicyManager(userName).addComplexConstraint(pid1,pid2, ComplexPolicyType.IF);
    }

    private CompoundRuleType getEnumValue(String actionWithOldRule) {
        try{
            return CompoundRuleType.valueOf(actionWithOldRule);
        }catch (Exception e){
            logger.warning(String.format("could not find action with old rule: %s. error message: %s, returning REPLACE instead",actionWithOldRule,e.getMessage()));
            return CompoundRuleType.REPLACE;
        }
    }

    public Map<Integer, PurchasePolicy> getAllPurchasePolicies(String userName, String shopName) throws Exception {
        validateUserIsntGuest(userName);
        isLoggedIn(userName);
        return getShop(shopName).getPurchasePolicyManager(userName).getAllPolicies();
    }


    public void setActivePurchasePolicy(String userName, String shopName, int policyId) throws Exception {
        validateUserIsntGuest(userName);
        isLoggedIn(userName);
        getShop(shopName).getPurchasePolicyManager(userName).setActivePolicy(policyId);
    }

    public Integer getActivePurchasePolicyId(String userName, String shopName) throws Exception {
        validateUserIsntGuest(userName);
        isLoggedIn(userName);
        return getShop(shopName).getPurchasePolicyManager(userName).getActivePolicyId();
    }



}
