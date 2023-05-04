package BusinessLayer;

import BusinessLayer.Enums.UserType;
import BusinessLayer.ExternalSystemsAdapters.PaymentDetails;
import BusinessLayer.ExternalSystemsAdapters.SupplyDetails;
import BusinessLayer.Purchases.*;
import BusinessLayer.Shops.*;
import BusinessLayer.Shops.Discount.*;
import BusinessLayer.Shops.Discount.DiscountRules.CompoundRuleType;
import BusinessLayer.Shops.Discount.DiscountRules.DiscountRule;
import BusinessLayer.Shops.Discount.XorDecisionRules.XorDecisionRule;
import BusinessLayer.Users.User;
import BusinessLayer.Users.UsersHandler;
import com.vaadin.flow.server.VaadinService;
import com.vaadin.flow.server.VaadinSession;
import org.apache.commons.lang3.NotImplementedException;

import java.io.File;
import java.io.IOException;
import java.util.Collection;
import java.util.List;
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
        if (VaadinService.getCurrent() != null) {
            VaadinService.getCurrent().addSessionInitListener(event ->
                    startSession(event.getSession().getSession().getId()));
            VaadinService.getCurrent().addSessionDestroyListener(event ->
                    closeSession(event.getSession().getSession().getId()));
            startSession(VaadinSession.getCurrent().getSession().getId());

        }
        loadAdmin();
//        loadProducts();
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
        disconnect(userName);
        logger.info(String.format("User %s logged out.", userName));
        return usersHandler.createGuest();
    }

    //the logic behind this function is that a member can log out and still be connected to the system as a guest.
    //when a user closes is session the system will remove this guest from the login users list
    private void disconnect(String userName){
        usersHandler.disconnect(userName);
    }

    //next version
    @Override
    public Collection<UserInvoice> getUserPurchaseHistory(String userName) {
        return usersHandler.getUserPurchaseHistory(userName);
    }

    @Override
    public void createShop(String userName, String shopName) throws Exception {
        logger.info(String.format("Attempt by user %s to open store %s.", userName,shopName));
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
        User user = usersHandler.findMemberByName(userName);
        Shop shop = new Shop(shopName, userName);
        //user.addFoundedShop(shopName);
        shopHandler.addShop(shopName, shop);
        MemberRoleInShop.createFounder(userName, shop, user::sendMessage);
        logger.info(String.format("User %s opened store %s and became it's founder.", userName,shopName));
    }

    @Override
    public void openShop(String userName, String shopName) {
        throw new NotImplementedException();
    }

    //todo: naor
    @Override
    public void closeShop(String userName, String shopName) throws Exception {
        logger.info(String.format("Attempt by user %s to close store %s.", userName,shopName));
        usersHandler.findMemberByName(userName);
        usersHandler.findLoginUser(userName);
        shopHandler.closeShop(userName, shopName);
        logger.info(String.format("User %s closed store %s.", userName,shopName));
    }

    @Override
    public void addNewProduct(String userName, String shopName, String productName, String category, String desc, double price) throws Exception {
        logger.info(String.format("Attempt by user %s to add new product %s to store %s.", userName,productName, shopName));
        validateLoggedInException(userName);
        shopHandler.addNewProduct(userName, shopName, productName, category, desc, price);
        logger.info(String.format("User %s added new product %s to store %s.", userName,productName, shopName));
    }



    @Override
    public void removeProduct(String userName, String shopName, String productName) throws Exception {
        logger.info(String.format("Attempt by user %s to remove product %s from store %s.", userName,productName, shopName));
        validateLoggedInException(userName);
        shopHandler.removeProduct(userName, shopName, productName);
        logger.info(String.format("User %s removed product %s from store %s.", userName,productName, shopName));
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
        usersHandler.findMemberByName(appointedBy);
        isLoggedIn(appointedBy);
        User user = usersHandler.findMemberByName(appointee);
        Shop reqShop = checkForShop(shopName);
        reqShop.setShopOwner(appointedBy,appointee , user::sendMessage);
        logger.info(String.format("User %s appointed %s as shop-owner of shop %s.", appointedBy,appointee, shopName));
    }

    public Shop checkForShop(String shopName) throws Exception {
        logger.info(String.format("Attempt to find exact shop %s.", shopName));
        return shopHandler.getShop(shopName);
    }

    @Override
    public void appointShopManager(String appointedBy, String appointee, String shopName) throws Exception {
        logger.info(String.format("Attempt by user %s to appoint %s as shop-manager of shop %s.", appointedBy,appointee, shopName));
        usersHandler.findMemberByName(appointedBy);
        isLoggedIn(appointedBy);
        User user = usersHandler.findMemberByName(appointee);
        Shop reqShop = checkForShop(shopName);
        reqShop.setShopManager(appointedBy,appointee ,user::sendMessage);
        logger.info(String.format("User %s appointed %s as shop-manager of shop %s.", appointedBy,appointee, shopName));
    }

    //next version
    @Override
    public void removeShopManager(String managerName, String userToRemove, String shopName) {
        throw new NotImplementedException();
    }

    @Override
    public MemberRoleInShop changeManagerPermissions(String actor, String actOn, String shopName, List<Integer> permission) throws Exception {
        logger.info(String.format("Attempt by user %s to change manager permissions of %s as shop-manager of shop %s.", actor,actOn, shopName));
        validateUserIsntGuest(actor);
        isLoggedIn(actor);
        validateUserIsntGuest(actOn);
        Shop reqShop = checkForShop(shopName);
       return reqShop.setManageOption(actor,actOn,permission);
    }

    @Override
    public void addManagerPermissions(String actor, String actOn, String shopName,int permission) throws Exception {
        logger.info(String.format("Attempt by user %s to add manager permissions of %s as shop-manager of shop %s.", actor,actOn, shopName));
        validateUserIsntGuest(actor);
        isLoggedIn(actor);
        validateUserIsntGuest(actOn);
        Shop reqShop = checkForShop(shopName);
        reqShop.addManageOption(actor,actOn,permission);
    }

    //todo: naor - talk with eldar
    @Override
    public Collection<MemberRoleInShop> getShopManagersAndPermissions(String userName, String shopName) throws Exception {
        logger.info(String.format("Attempt by user %s to get management of shop %s.", userName, shopName));
        User user = usersHandler.findLoginUser(userName);
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

    public XorCompoundDiscount addXorDiscount(String shopName, String userName, List<Integer> discountsIds, XorDecisionRule xorDiscountRule) throws Exception {
        usersHandler.findMemberByName(userName);
        usersHandler.findLoginUser(userName);
        Shop shop = shopHandler.getShop(shopName);
        return shop.addXorDiscount(userName,discountsIds,xorDiscountRule);
    }

    public void addDiscountRule(String shopName, String userName, DiscountRule discountRule, int discountId, CompoundRuleType actionWithOldRule) throws Exception {
        usersHandler.findMemberByName(userName);
        usersHandler.findLoginUser(userName);
        Shop shop = shopHandler.getShop(shopName);
        shop.addDiscountRule(userName,discountRule,discountId,actionWithOldRule);
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
        String[] usersName = {"eldar1", "niv1"};
        String[] passwords = {"Aa123456", "Aa123456"};
        String[] emails = {"eldar@gmail.com", "niv@gmail.com"};
        String[] shopNames = {"shop1", "shop2"};
        String[] prodNames = {"prod1", "prod2"};
        String[] descs = {"description1 description1 description1 description1 description1 description1 description1 description1 description1 description1 description1 description1 description1 description1 description1 description1 description1 description1 description1 description1 ", "description2"};
        String[] cat = {"cat1", "cat2"};
        double[] prices = {5, 10};

        for (int i = 0; i < usersName.length; i++) {
            String guestName = startSession();
            register(usersName[i], emails[i], passwords[i]);
            login(guestName, usersName[i], passwords[i]);
            createShop(usersName[i], shopNames[i]);
            addNewProduct(usersName[i], shopNames[i], prodNames[i], cat[i], descs[i], prices[i]);
            addProductItems(usersName[i], shopNames[i], prodNames[i], 3);
        }
    }

}
