package BusinessLayer;

import BusinessLayer.Enums.UserType;
import BusinessLayer.ExternalSystemsAdapters.PaymentDetails;
import BusinessLayer.ExternalSystemsAdapters.SupplyDetails;
import BusinessLayer.Notifications.Notification;
import BusinessLayer.Purchases.*;
import BusinessLayer.Shops.Product;
import BusinessLayer.Shops.ProductIntr;
import BusinessLayer.Shops.Shop;
import BusinessLayer.Shops.ShopHandler;
import BusinessLayer.Users.User;
import BusinessLayer.Users.UsersHandler;
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
        Notification notification=new Notification(userName,message,java.time.LocalDate.now());
        notifyShopManagement(userName, shopName,notification);
    }

    //todo: naor
    @Override
    public void closeShop(String userName, String shopName) throws Exception {
        logger.info(String.format("Attempt by user %s to close store %s.", userName,shopName));
        User founder=usersHandler.findMemberByName(userName);
        usersHandler.findLoginUser(userName);
        shopHandler.closeShop(userName, shopName);
        // notify management on closing shop
        String message=String.format("User %s closed shop %s.", userName, shopName);
        Notification notification=new Notification(userName,message,java.time.LocalDate.now());
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
        validateLoggedInException(userName);
        shopHandler.addNewProduct(userName, shopName, productName, category, desc, price);
        // notify management on new product
        String message=String.format("User %s added new product %s to store %s.", userName,productName, shopName);
        Notification notification=new Notification(userName,message,java.time.LocalDate.now());
        notifyShopManagement(userName, shopName,notification);
        logger.info(message);
    }



    @Override
    public void removeProduct(String userName, String shopName, String productName) throws Exception {
        logger.info(String.format("Attempt by user %s to remove product %s from store %s.", userName,productName, shopName));
        validateLoggedInException(userName);
        shopHandler.removeProduct(userName, shopName, productName);
        // notify management on new product
        String message=String.format("User %s removed product %s from store %s.", userName,productName, shopName);
        Notification notification=new Notification(userName,message,java.time.LocalDate.now());
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
        validateLoggedInException(appointedBy);
        User user = usersHandler.findMemberByName(appointee);
        Shop reqShop = checkForShop(shopName);
        reqShop.setShopOwner(appointedBy,appointee , user::sendMessage);
        //notify appointee
        String message=String.format("User %s appointed %s as shop-owner of shop %s.", appointedBy,appointee, shopName);
        Notification notification=new Notification(appointedBy,message,java.time.LocalDate.now());
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
        usersHandler.findMemberByName(appointedBy);
//        isLoggedIn(appointedBy);
        validateLoggedInException(appointedBy);
        User user = usersHandler.findMemberByName(appointee);
        Shop reqShop = checkForShop(shopName);
        reqShop.setShopManager(appointedBy,appointee ,user::sendMessage);
        //notify appointee
        String message=String.format("User %s appointed %s as shop-manager of shop %s.", appointedBy,appointee, shopName);
        Notification notification=new Notification(appointedBy,message,java.time.LocalDate.now());
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
        usersHandler.findMemberByName(managerName);
        validateLoggedInException(managerName);
        usersHandler.findMemberByName(userToRemove);
        Shop reqShop = checkForShop(shopName);
        reqShop.removeOwner(managerName,userToRemove);

       //notify removed owner
        String message=String.format("Manager %s removed you as shop-manager of shop %s.", managerName, shopName);
        Notification notification=new Notification(managerName,message,java.time.LocalDate.now());
        usersHandler.notify(userToRemove,notification);
        logger.info(String.format("Manager %s removed %s as shop-manager of shop %s.", managerName,userToRemove, shopName));
    }

    @Override
    public MemberRoleInShop changeManagerPermissions(String actor, String actOn, String shopName, List<Integer> permission) throws Exception {
        logger.info(String.format("Attempt by user %s to change manager permissions of %s as shop-manager of shop %s.", actor,actOn, shopName));
        validateUserIsntGuest(actor);
        isLoggedIn(actor);
        validateUserIsntGuest(actOn);
        Shop reqShop = checkForShop(shopName);
        //notify appointee
        String message=String.format("User %s changed your permissions in shop %s.", actor, shopName);
        Notification notification=new Notification(actor,message,java.time.LocalDate.now());
        usersHandler.notify(actOn,notification);
        logger.info(String.format("User %s changed %s permissions in shop %s.", actor,actOn, shopName));
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
        //notify appointee
        String message=String.format("User %s added to your permissions in shop %s.", actor, shopName);
        Notification notification=new Notification(actor,message,java.time.LocalDate.now());
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
//      User user = allUsers.get(appointedBy);
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
        String[] usersName = {"eldar", "niv12","naor","Gavriel","Idan","Moses"};
        String[] passwords = {"Aa123456", "Aa123456","Aa123456","Aa123456", "Aa123456","Aa123456"};
        String[] emails = {"eldar@gmail.com", "niv12@gmail.com","naor@gmail.com","Gavriel@gmail.com","Idan@gmail.com","moses@gmail.com"};
        String[] shopNames = {"shop1", "shop2","shop3","TheCheapest" , "DMobile","AdiDog"};
        String[] prodNames = {"prod1", "prod2","prod3","Cola","Beer","Bear"};
        String[] descs = {"Item Desc","Catasd","PreDasdasd","Tentasdd","description1 description1 description1 description1 description1 description1 description1 description1 description1 description1 description1 description1 description1 description1 description1 description1 description1 description1 description1 description1 ", "description2" , "Descript3SP"};
        String[] cat = {"cat1","cat2","Category","Apple","Food","TVasdfasf"};
        double[] prices = {5,10,15,80,999,2,20};

        for (int i = 0; i < usersName.length; i++) {
            logger.info("STARTINGGGGGGGG  WITH :"+usersName[i]+"!!!!!!!!!!!!!!!!!!!!!!!!");
            String guestName = startSession();
//            String guestName = "Guest"+i;
            register(usersName[i], emails[i], passwords[i]);
            login(guestName, usersName[i], passwords[i]);
            createShop(usersName[i], shopNames[i]);
            addNewProduct(usersName[i], shopNames[i], prodNames[i], cat[i], descs[i], prices[i]);
            addProductItems(usersName[i], shopNames[i], prodNames[i], 3);
            logout(usersName[i]);
            logger.info(usersName[i]+" FINISHED !!!!!!!!!!!!!!!!!!!!!!!!!");
        }
        String guestName = startSession();
        login(guestName, usersName[0], passwords[0]);
        createShop(usersName[0],"The Shop");
        createShop(usersName[0],"Super Shop");
        appointShopOwner("eldar","niv12","shop1");
        appointShopOwner("eldar","naor","shop1");
        for(int i = 0; i < 6; i++) {
            addNewProduct(usersName[0], "Super Shop", "product" + i, cat[0], descs[0], prices[0]);
            addProductItems(usersName[0], "Super Shop", "product" + i, 3);
        }

        logout("eldar");

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

}
