package BusinessLayer;

import BusinessLayer.ExternalSystemsAdapters.CreditCardPaymentDetails;
import BusinessLayer.ExternalSystemsAdapters.PaymentDetails;
import BusinessLayer.ExternalSystemsAdapters.SupplyDetails;
import BusinessLayer.Shops.*;
import BusinessLayer.Users.*;
import BusinessLayer.Purchases.*;

import org.apache.commons.lang3.NotImplementedException;
import org.apache.commons.text.similarity.LevenshteinDistance;

import java.io.File;
import java.io.IOException;
import java.util.*;
import java.util.concurrent.ConcurrentHashMap;
import java.util.logging.*;
import java.util.stream.Collectors;

public class Market implements MarketIntr{

    private static final Logger logger = Logger.getLogger("Market");

    UsersHandler usersHandler;
    ShopHandler shopHandler;
    private final int SHOP_DISTANCE_MAX_LIMIT = 2;
    private final int PRODUCT_DISTANCE_MAX_LIMIT = 2;

    //we need to change Market to be singleton , it will be more comfortable with the logger and in future version
    public Market() {
        usersHandler = UsersHandler.getInstance();
        shopHandler = shopHandler.getInstance();
    }

    @Override
    public void init() throws IOException {
        createLogger();
        logger.info("init finished");
    }

    private void createLogger() throws IOException {
        // Create a file handler and set its formatter
        try {
            String logDirectory = "./logs";
            File file = new File(logDirectory);

            // Create directory if it does not exist
            if (!file.exists()) {
                file.mkdir();
            }

            FileHandler fileHandler = new FileHandler(logDirectory + "/Market.%u.%g.log");
            SimpleFormatter formatter = new SimpleFormatter();
            fileHandler.setFormatter(formatter);

            // Add the file handler to the logger
            logger.addHandler(fileHandler);

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
        return usersHandler.createGuest();
    }

    @Override
    public void closeSession(String userName) {
        disconnect(userName);
    }

    @Override
    public void register(String userName, String email, String password) throws Exception {
        usersHandler.register(userName, email, password);
    }

    @Override
    public void login(String guestName, String userName, String password) {
        usersHandler.login(guestName, userName, password);
    }

    //this function logout a member and return a guest name
    // a guest does not suppose to call this function only for members
    @Override
    public String logout(String userName) {
        disconnect(userName);
        return usersHandler.createGuest();
    }

    //the logic behind this function is that a member can log out and still be connected to the system as a guest.
    //when a user closes is session the system will remove this guest from the login users list
    private void disconnect(String userName){
        usersHandler.disconnect(userName);
    }

    //next version
    @Override
    public Collection<Purchase> getUserPurchaseHistory(String userName) {
        throw new NotImplementedException();
    }

    @Override
    public void createShop(String userName, String shopName) throws Exception {
      if(!isLoggedIn(userName))
          throw new Exception(String.format("the user %s is not login", userName));
      //shopHandler.shopExists(shopName);
      User user = usersHandler.findMemberByName(userName);
      Shop shop = new Shop(shopName, userName);
      //user.addFoundedShop(shopName);
      shopHandler.addShop(shopName,shop);
      MemberRoleInShop.createOwner(userName,shop, user::sendMessage);
    }

    @Override
    public void openShop(String userName, String shopName) {
        throw new NotImplementedException();
    }

    //todo: naor
    @Override
    public void closeShop(String userName, String shopName) throws Exception {
        usersHandler.findMemberByName(userName);
        usersHandler.findLoginUser(userName);
        shopHandler.closeShop(userName,shopName);
    }

    @Override
    public void addNewProduct(String userName, String shopName, String productName, String category, String desc, double price) throws Exception {
       ConcurrentHashMap<String , Shop> shops = shopHandler.getShops();

        if(!isLoggedIn(userName))
            throw new Exception(String.format("the user %s is not login", userName));
        if(shopName == null || !shops.containsKey(shopName))
            throw new Exception("there is already shop with that name");
        shops.get(shopName).addNewProduct(userName, productName, category, desc, price);
    }

    @Override
    public void removeProduct(String userName, String shopName, String productName) throws Exception {
        ConcurrentHashMap<String , Shop> shops = shopHandler.getShops();
        if(!isLoggedIn(userName))
            throw new Exception(String.format("the user %s is not login", userName));
        if(shopName == null || !shops.containsKey(shopName))
            throw new Exception("there is already shop with that name");
        shops.get(shopName).removeProduct(userName, productName);
    }

    @Override
    public void updateProductName(String userName, String shopName, String productOldName, String productNewName) throws Exception {
        ConcurrentHashMap<String , Shop> shops = shopHandler.getShops();
        if(!isLoggedIn(userName))
            throw new Exception(String.format("the user %s is not login", userName));
        if(shopName == null || !shops.containsKey(shopName))
            throw new Exception("there is already shop with that name");
        shops.get(shopName).updateProductName(userName, productOldName, productNewName);
    }

    @Override
    public void updateProductDesc(String userName, String shopName, String productName, String productNewDesc) throws Exception {
        ConcurrentHashMap<String , Shop> shops = shopHandler.getShops();
        if(!isLoggedIn(userName))
            throw new Exception(String.format("the user %s is not login", userName));
        if(shopName == null || !shops.containsKey(shopName))
            throw new Exception("there is already shop with that name");
        shops.get(shopName).updateProductDesc(userName, productName, productNewDesc);
    }

    @Override
    public void updateProductPrice(String userName, String shopName, String productName, double price) throws Exception {
        ConcurrentHashMap<String , Shop> shops = shopHandler.getShops();
        if(!isLoggedIn(userName))
            throw new Exception(String.format("the user %s is not login", userName));
        if(shopName == null || !shops.containsKey(shopName))
            throw new Exception("there is already shop with that name");
        shops.get(shopName).updateProductPrice(userName, productName, price);
    }

    @Override
    public void updateProductQuantity(String userName, String shopName, String productName, int quantity) throws Exception {
        ConcurrentHashMap<String , Shop> shops = shopHandler.getShops();
        if(!isLoggedIn(userName))
            throw new Exception(String.format("the user %s is not login", userName));
        if(shopName == null || !shops.containsKey(shopName))
            throw new Exception("there is already shop with that name");
        shops.get(shopName).updateProductQuantity(userName, productName, quantity);
    }

    @Override
    public void addProductItems(String userName, String shopName, String productName, int quantity) throws Exception {
        ConcurrentHashMap<String , Shop> shops = shopHandler.getShops();
        if(!isLoggedIn(userName))
            throw new Exception(String.format("the user %s is not login", userName));
        if(shopName == null || !shops.containsKey(shopName))
            throw new Exception("there is already shop with that name");
        shops.get(shopName).addProductQuantity(userName, productName, quantity);
    }

    @Override
    public Shop getShop(String userName, String shopName) throws Exception {
        List<Shop> shopsToReturn = getShops(userName, shopName);
        if (shopsToReturn.size() < 1)
            throw new Exception(String.format("there is no shop in this name: %s", shopName));
        return getShops(userName, shopName).get(0);
    }

    public List<Shop> getShops(String userName, String shopName) throws Exception {
        LevenshteinDistance distance = new LevenshteinDistance();
        if (!isLoggedIn(userName))
            throw new Exception(String.format("the user %s is not login", userName));
        List<Shop> shopsToReturn = new ArrayList<>();
        ConcurrentHashMap<String,Shop> shops =shopHandler.getShops();
        for (String shopName1 : shops.keySet()) {
            if (distance.apply(shopName.toLowerCase(), shopName1.toLowerCase()) <= SHOP_DISTANCE_MAX_LIMIT)
                shopsToReturn.add(shops.get(shopName1));
        }
        return shopsToReturn.stream().sorted((shop1, shop2) ->
                distance.apply(shop1.getName(), shopName) - distance.apply(shop2.getName(), shopName)).
                collect(Collectors.toList());
    }

    private List<ProductIntr> getProducts(String userName, Collection<String> shopNames,
                                                       String productName) throws Exception {
        LevenshteinDistance distance = new LevenshteinDistance();
        if (!isLoggedIn(userName))
            throw new Exception(String.format("the user %s is not login", userName));
        List<ProductIntr> prodsToReturn = new ArrayList<>();
        ConcurrentHashMap<String,Shop> shops =shopHandler.getShops();
        for (String shopName : shopNames){
            for (ProductIntr product : shops.get(shopName).getProducts()) {
                if (distance.apply(
                        product.getName().toLowerCase(), productName.toLowerCase()) <= PRODUCT_DISTANCE_MAX_LIMIT)
                    prodsToReturn.add(product);
            }
        }
        return prodsToReturn.stream().sorted((prod1, prod2) ->
                distance.apply(prod1.getName(), productName) - distance.apply(prod2.getName(), productName)).
                collect(Collectors.toList());
    }

    @Override
    public ProductIntr getProduct(String userName, String shopName, String productName) throws Exception {
        ArrayList<String> shopsNames = new ArrayList<>();
        shopsNames.add(shopName);
        Collection<ProductIntr> prodsToReturn = getProducts(userName, shopsNames, productName);
        if (prodsToReturn.size() < 1)
            throw new Exception(String.format("there is no product in this name: %s", productName));
        return new ArrayList<>(prodsToReturn).get(0);
    }

    @Override
    public List<ProductIntr> basicSearch(String userName, String productName) throws Exception {
        ConcurrentHashMap<String,Shop> shops = shopHandler.getShops();
        return getProducts(userName, shops.keySet(), productName);
    }

    @Override
    public List<ProductIntr> extendedSearch(String userName, String productName, double minPrice, double maxPrice,
                                                  String category) throws Exception{
        return Search.createExtendedSearch(productName, category, minPrice, maxPrice).
                apply(basicSearch(userName, productName));
    }

    @Override
    public void appointShopOwner(String appointedBy, String appointee, String shopName) throws Exception {
        usersHandler.findMemberByName(appointedBy);
        isLoggedIn(appointedBy);
        User user = usersHandler.findMemberByName(appointee);
        Shop reqShop = checkForShop(shopName);
        reqShop.setShopOwner(appointedBy,appointee , user::sendMessage);
    }

    public Shop checkForShop(String shopName) throws Exception {
        return shopHandler.getShop(shopName);
    }

    @Override
    public void appointShopManager(String appointedBy, String appointee, String shopName) throws Exception {
        usersHandler.findMemberByName(appointedBy);
        isLoggedIn(appointedBy);
        User user = usersHandler.findMemberByName(appointee);
        Shop reqShop = checkForShop(shopName);
        reqShop.setShopManager(appointedBy,appointee ,user::sendMessage);
    }

    //next version
    @Override
    public void removeShopManager(String managerName, String userToRemove, String shopName) {
        throw new NotImplementedException();
    }

    @Override
    public void changeManagerPermissions(String actor, String actOn, String shopName,int permission) throws Exception {
        usersHandler.findMemberByName(actor);
        usersHandler.findLoginUser(actor);
        usersHandler.findMemberByName(actOn);
        Shop reqShop = checkForShop(shopName);
        reqShop.setManageOption(actor,actOn,permission);
    }

    //todo: naor - talk with eldar
    @Override
    public Collection<UserIntr> getShopManagersAndPermissions(String userName, String shopName) {
        return null;
    }

    //todo: niv
    //only shop owner gets to see shop Purchase history
    @Override
    public Collection<Purchase> getShopPurchaseHistory(String userName, String shopName) {
        return null;
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
    public Collection<Purchase> getShopPurchaseHistoryByAdmin(String adminName, String shopName) {
        throw new NotImplementedException();
    }

    @Override
    public Collection<Purchase> getUserPurchaseHistoryByAdmin(String adminName, String memberName) {
        throw new NotImplementedException();
    }


    @Override
    public Cart getCart(String userName) {
        return usersHandler.findLoginUser(userName).getCart();
    }


    @Override
    public ShopBag getShopBag(String userName, String ShopName) {
        return usersHandler.findLoginUser(userName).getCart().getShoppingBag(ShopName);
    }

    @Override
    public void addProductToCart(String userName, String shopName, String productName, int quantity) throws Exception {
        User user = usersHandler.findLoginUser(userName);
        Shop shop = shopHandler.getShop(shopName);
        Product product = shop.getProduct(productName,quantity);
        user.addProductToCart(shop.getName(),product,quantity);
    }

    @Override
    public void removeProductFromCart(String userName, String shopName, String productName) throws Exception {
        User user = usersHandler.findLoginUser(userName);
        user.removeProductFromCart(shopName,productName);
    }


    //todo: niv
    @Override
    public void updateCartProductQuantity(String userName, String shopName, String productName, int newQuantity) throws Exception {
        User user = usersHandler.findLoginUser(userName);
        user.updateProductsFromCart(shopName,productName,newQuantity);
    }

    //I'm setting the basic logic behind this, we need to sit together and decide what to do with thread safety
    //I know this is a big function, I don't mean to leave it that way it's just what I had in mind when trying to write this function
    @Override
    public void purchaseCart(String userName, PaymentDetails paymentDetails, SupplyDetails supplyDetails) throws Exception {
        User user = usersHandler.findLoginUser(userName);
        List<Shop> shops = shopHandler.getShops(user.getCart().getShopsNames());
        Purchase purchase = new Purchase(user,shops,paymentDetails,supplyDetails);
        purchase.process();
        //return invoice or order number or order summary something like this need to decide
    }

    //this function reset everything on the system, for now only use is for testing
    //need to add logic to reset all shops, but since we dont have a controller yet and I'm not sure what we want
    //to do I left it like this
    public void resetAll(){
        usersHandler.reset();
        shopHandler.reset();
    }

    private boolean isLoggedIn(String userName) {
        return usersHandler.isLoggedIn(userName);
    }

}
