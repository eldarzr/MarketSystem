package BusinessLayer.Shops;

import BusinessLayer.Bids.Bid;
import BusinessLayer.Bids.BidManager;
import BusinessLayer.MemberRoleInShop;

import java.util.Collection;

import BusinessLayer.Notifications.Notification;
import BusinessLayer.Notifications.NotificationPublisher;
import BusinessLayer.PersistenceManager;
import BusinessLayer.Purchases.ShopInvoice;
import BusinessLayer.Search;
import BusinessLayer.Users.User;
import org.apache.commons.text.similarity.LevenshteinDistance;

import java.util.*;
import java.util.concurrent.ConcurrentHashMap;
import java.util.logging.Logger;
import java.util.stream.Collectors;
import java.util.stream.Stream;

public class ShopHandler {

    private static final Logger logger = Logger.getLogger("Market");
    ConcurrentHashMap<String,Shop> shops;
    private BidManager bidManager;
    private final int SHOP_DISTANCE_MAX_LIMIT = 2;
    private final int PRODUCT_DISTANCE_MAX_LIMIT = 2;
    private LevenshteinDistance distance = new LevenshteinDistance();
    private ShopRepository shopRepository = ShopRepository.getInstance();

    public List<Shop> getAllShops() {
        return shops.values().stream().toList();
    }

    public List<MemberRoleInShop> getUserRoles(String userName) {
       return shops.values().stream()
                .map(shop -> shop.getRoleIfExists(userName))
                .filter(Objects::nonNull)
                .collect(Collectors.toList());
//        List<MemberRoleInShop> myShops = new LinkedList<>();
//        for(Shop shop : shops.values()){
//           MemberRoleInShop role =  shop.getRoleIfExists(userName);
//           if (role != null)
//               myShops.add(role);
//        }


    }

    public boolean isUserHasRoleInAnyShops(String userName) {
        return shops.values().stream().map(shop -> shop.isUserHasRole(userName)).
                reduce(false, (acc, cur) -> acc || cur);
    }




    private static class  ShopHolder {
        private static ShopHandler  instance = new ShopHandler() ;
    }
    private ShopHandler()  {
       this.shops = new ConcurrentHashMap<>();
       this.bidManager = new BidManager();
    }


    public Collection<MemberRoleInShop> getShopManagementPermissions(User user, String shopName) throws Exception {
        Shop shop = getShop(shopName);
        return shop.getManagementPermissions(user);
    }

    public void addShop(String shopName, Shop shop) throws Exception {
        if(shops.containsKey(shopName))
            throwException("There is already shop with that name");
        shopRepository.addShop(shopName, shop);
        shops.put(shopName, shop);
    }

    public void closeShop(String userName, String shopName) throws Exception {
        userName = userName.toLowerCase();
        Shop reqShop = getShop(shopName);
        reqShop.closeShop(userName);
        // notify management on closing shop
        String message=String.format("User %s closed shop %s.", userName, shopName);
        Notification notification=new Notification(userName,message);
        NotificationPublisher.getInstance().notifyShopManagement(userName, shopName,notification);
    }

    public void openShop(String userName, String shopName) throws Exception {
        userName = userName.toLowerCase();
        Shop reqShop = getShop(shopName);
        reqShop.openShop(userName);
        // notify management on opening shop
        String message=String.format("User %s opened shop %s.", userName, shopName);
        Notification notification=new Notification(userName,message);
        NotificationPublisher.getInstance().notifyShopManagement(userName, shopName,notification);
    }

    public Shop getShop(String shopName) throws Exception {
        validateShopExistsException(shopName);
        return shops.get(shopName);
    }

    private void validateShopExistsOpenedException(String shopName) throws Exception {
        if (!getShop(shopName).isActive())
            throwException(String.format("the shop %s is closed", shopName));
    }

    private void validateShopExistsException(String shopName) throws Exception {
        if(!shops.containsKey(shopName))
            throwException("there is no such shop named :" +shopName);
    }

    public void addNewProduct(String userName, String shopName, String productName, String category, String desc, double price) throws Exception {
        userName = userName.toLowerCase();
        validateShopExistsOpenedException(shopName);
        shops.get(shopName).addNewProduct(userName, productName, category, desc, price);
        // notify management on new product
        String message=String.format("User %s added new product %s to store %s.", userName,productName, shopName);
        Notification notification=new Notification(userName,message);
        NotificationPublisher.getInstance().notifyShopManagement(userName, shopName,notification);
    }

    public void removeProduct(String userName, String shopName, String productName) throws Exception {
        userName = userName.toLowerCase();
        validateShopExistsOpenedException(shopName);
        shops.get(shopName).removeProduct(userName, productName);
        // notify management on new product
        String message=String.format("User %s removed product %s from store %s.", userName,productName, shopName);
        Notification notification=new Notification(userName,message);
        NotificationPublisher.getInstance().notifyShopManagement(userName, shopName,notification);
    }

//    public void updateProductName(String userName, String shopName, String productOldName, String productNewName) throws Exception {
//        userName = userName.toLowerCase();
//        validateShopExistsOpenedException(shopName);
//        shops.get(shopName).updateProductName(userName, productOldName, productNewName);
//        PersistenceManager.getInstance().updateObj(shops.get(shopName));
//    }

    public void updateProductDesc(String userName, String shopName, String productName, String productNewDesc) throws Exception {
        userName = userName.toLowerCase();
        validateShopExistsOpenedException(shopName);
        shops.get(shopName).updateProductDesc(userName, productName, productNewDesc);
        PersistenceManager.getInstance().updateObj(shops.get(shopName));
    }

    public void updateProductPrice(String userName, String shopName, String productName, double price) throws Exception {
        userName = userName.toLowerCase();
        validateShopExistsOpenedException(shopName);
        shops.get(shopName).updateProductPrice(userName, productName, price);
    }

    public void updateProductQuantity(String userName, String shopName, String productName, int quantity) throws Exception {
        userName = userName.toLowerCase();
        validateShopExistsOpenedException(shopName);
        shops.get(shopName).updateProductQuantity(userName, productName, quantity);
    }

    public void updateProductCategory(String userName, String shopName, String productName, String category) throws Exception {
        validateShopExistsOpenedException(shopName);
        shops.get(shopName).updateProductCategory(userName, productName, category);
    }

    public void addProductItems(String userName, String shopName, String productName, int quantity) throws Exception {
        userName = userName.toLowerCase();
        validateShopExistsOpenedException(shopName);
        shops.get(shopName).addProductQuantity(userName, productName, quantity);
        PersistenceManager.getInstance().updateObj(shops.get(shopName));
    }

    public Shop searchShop(String shopName, boolean isAdmin) throws Exception {
        List<Shop> shopsToReturn = getShops(shopName, isAdmin);
        return shopsToReturn.size() == 0 ? null : shopsToReturn.get(0);
    }

    public List<Shop> getShops(String shopName, boolean isAdmin) throws Exception {
        Stream<Shop> shopsToReturn = shops.values().stream();
        shopsToReturn = shopsToReturn.filter(shop -> stringDistance(shop.getName(), shopName) <= SHOP_DISTANCE_MAX_LIMIT);
        shopsToReturn = shopsToReturn.sorted(Comparator.comparingInt(shop -> stringDistance(shop.getName(), shopName)));
        if (!isAdmin)
            shopsToReturn = shopsToReturn.filter(Shop::isActive);
        return shopsToReturn.collect(Collectors.toList());
    }

    private List<ProductIntr> getProducts(Collection<String> shopNames, String productName, boolean isAdmin) throws Exception {
        List<ProductIntr> prodsToReturn = new ArrayList<>();
        for (String shopName : shopNames) {
            Shop shop = shops.get(shopName);
            if (isAdmin || shop.isActive())
                for (ProductIntr product : shop.getProducts()) {
                    if (stringDistance(productName, product.getName()) <= PRODUCT_DISTANCE_MAX_LIMIT)
                        prodsToReturn.add(product);
                }
        }
        return prodsToReturn.stream().sorted(Comparator.comparingInt(
                prod -> stringDistance(prod.getName(), productName))).collect(Collectors.toList());
    }

    public ProductIntr getProduct(String shopName, String productName, boolean isAdmin) throws Exception {
        ArrayList<String> shopsNames = new ArrayList<>();
        shopsNames.add(shopName);
        Collection<ProductIntr> prodsToReturn = getProducts(shopsNames, productName, isAdmin);
        return prodsToReturn.size() == 0 ? null : new ArrayList<>(prodsToReturn).get(0);
    }

    public List<ProductIntr> basicSearch(String productName, boolean isAdmin) throws Exception {
        return getProducts(shops.keySet(), productName, isAdmin);
    }
	
	public List<Shop> getShops(List<String> shopsNames) throws Exception {
        List<Shop> shops = new LinkedList<>();
        for(String shopName : shopsNames){
            shops.add(getShop(shopName));
        }
        return shops;
    }

    public List<ProductIntr> extendedSearch(String productName, double minPrice, double maxPrice,
                                            String category, boolean isAdmin) throws Exception{
        return Search.createExtendedSearch(productName, category, minPrice, maxPrice).
                apply(basicSearch(productName, isAdmin));
    }

    private int stringDistance(String s1, String s2){
        return distance.apply(s1.toLowerCase(), s2.toLowerCase());
    }

    public static ShopHandler  getInstance() {
        return ShopHolder. instance;
    }

    public void reset() {
        shops.clear();
        shopRepository = ShopRepository.getInstance();
        shopRepository.reset();
    }

    public Collection<ShopInvoice> getShopPurchaseHistory(String shopName, String userName) throws Exception {
	    validateShopExistsOpenedException(shopName);
	    return getShop(shopName).getInvoices(userName);
    }

    public Collection<ShopInvoice> getShopPurchaseHistoryByAdmin(String shopName) throws Exception {
        return getShop(shopName).getInvoicesByAdmin();
    }

    private void throwException(String errorMsg)  throws IllegalArgumentException{
        logger.severe(errorMsg);
        throw new IllegalArgumentException(errorMsg);
    }

    public int createBid(String productName, String shopName, double bidPrice) throws Exception {
        Shop shop = getShop(shopName);
        ProductIntr product = getProduct(shopName,productName,false);
        return bidManager.createNewBid((Product) product,bidPrice);
    }

    public void approveBid(User user, int bidId) throws Exception {
        Bid bid = bidManager.getBid(bidId);
        Shop shop = getShop(bid.getProduct().getShopName());

        Collection<String> shouldApprove = shop.getBidResponsibleUsers(user);
        bidManager.approveBid(bidId, user.getName(), shouldApprove);
    }
    public void rejectBid(User user, int bidId) throws Exception {
        Bid bid = bidManager.getBid(bidId);
        Shop shop = getShop(bid.getProduct().getShopName());
        Collection<String> canReject = shop.getBidResponsibleUsers(user);
        bidManager.rejectBid(bidId, user.getName(), canReject);
    }
    public Collection<Bid> getPendingBids(String shopName) throws Exception {
        if(!shops.containsKey(shopName))throw new Exception("Shop "+shopName+" doesn't exist");
        return bidManager.getPendingBids(shopName);
    }
    public Collection<Bid> getApprovedBids(String shopName) throws Exception {
        if(!shops.containsKey(shopName))throw new Exception("Shop "+shopName+" doesn't exist");
        return bidManager.getApprovedBids(shopName);
    }
    public Collection<Bid> getRejectedBids(String shopName) throws Exception {
        if(!shops.containsKey(shopName))throw new Exception("Shop "+shopName+" doesn't exist");
        return bidManager.getRejectedBids(shopName);
    }
	
    public void setShopRepositoryForTests(ShopRepository shopRepository){
        this.shopRepository = shopRepository;
    }

}
