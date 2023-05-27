package AcceptanceTests;

import BusinessLayer.Bids.Bid;
import BusinessLayer.Enums.ManageType;
import BusinessLayer.ExternalSystemsAdapters.CreditCardPaymentDetails;
import BusinessLayer.ExternalSystemsAdapters.PaymentDetails;
import BusinessLayer.Market;
import BusinessLayer.MarketIntr;
import BusinessLayer.MemberRoleInShop;
import BusinessLayer.Notifications.Notification;
import BusinessLayer.Purchases.*;
import BusinessLayer.Shops.ProductIntr;
import BusinessLayer.Shops.PurchasePolicies.PurchasePolicy;
import BusinessLayer.Shops.Shop;
import BusinessLayer.Shops.ShopProduct;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.Map;

public class MarketSystemRealBridge implements MarketSystemBridge {

    private final String adminUserName = "admin"; // update later to a userName that will always be an admin
    private final String ADMIN_PASSWORD = "Aa123456";
    MarketIntr market;

    public MarketSystemRealBridge() {
        market = new Market();
    }

    public void init() throws Exception {
        market.init("src/InitFiles/TestsConfig.jason");
    }

    public String startSession() {
        return market.startSession();
    }

    public void closeSession(String userName) {
        market.closeSession(userName);
    }

    public void register(String userName, String email, String password) throws Exception {
        market.register(userName, email, password);
    }

    @Override
    public void unregister(String userName) {
        market.unregister(userName);
    }

    public void login(String userName, String password) {
        String guestName = market.startSession();
        market.login(guestName,userName, password);
    }

    @Override
    public void addAdmin(String userName) {
        throw new UnsupportedOperationException();
    }

    public void logout(String userName) {
        market.logout(userName);
    }

    public Collection<PurchaseBridge> getUserPurchaseHistory(String userName) {

        Collection<UserInvoice> purchases =  market.getUserPurchaseHistory(userName);
        Collection<PurchaseBridge> ret = new ArrayList<>();
        for(UserInvoice p : purchases){
            ret.add(new UserInvoceRealBridge(p));
        }
        return ret;
    }

    public void createShop(String userName, String shopName) throws Exception {
        market.createShop(userName, shopName);
    }

    public void openShop(String userName, String shopName) {
    }

    public void closeShop(String userName, String shopName) throws Exception {
        market.closeShop(userName, shopName);
    }

    public void addNewProduct(String userName, String shopName, String productName, String category, String desc, double price) throws Exception {
        market.addNewProduct(userName, shopName, productName, category, desc, price);
    }

    @Override
    public void removeProduct(String userName, String shopName, String productName) throws Exception {
        market.removeProduct(userName, shopName, productName);
    }

//    public void updateProductName(String userName, String shopName, String productOldName, String productNewName) throws Exception {
//        market.updateProductName(userName, shopName, productOldName, productNewName);
//    }

    public void updateProductDesc(String userName, String shopName, String productName, String productNewDesc) throws Exception {
        market.updateProductDesc(userName, shopName, productName, productNewDesc);
    }

    public void updateProductPrice(String userName, String shopName, String productName, double price) throws Exception {
        market.updateProductPrice(userName, shopName, productName, price);
    }

    public void updateProductQuantity(String userName, String shopName, String productName, int quantity) throws Exception {
        market.updateProductQuantity(userName, shopName, productName, quantity);
    }

    public void addProductItems(String userName, String shopName, String productName, int quantity) throws Exception {
        market.addProductItems(userName, shopName, productName, quantity);
    }

    public ShopBridge getShop(String userName, String shopName) throws Exception {
        Shop shop =  market.searchShop(userName, shopName);
        return new ShopRealBridge(shop);
    }

    public ProductBridge getProduct(String userName, String shopName, String productName) throws Exception {
        ProductIntr productIntr =  market.getProduct(userName, shopName, productName);
        return new ProductRealBridge(productIntr);
    }

    @Override
    public Collection<ProductBridge> basicSearch(String userName, String productName) throws Exception {
        Collection<ProductIntr> productIntrs = market.basicSearch(userName, productName);
        Collection<ProductBridge> ret = new ArrayList<>();
        for(ProductIntr p : productIntrs)
            ret.add(new ProductRealBridge(p));
        return ret;
    }

    @Override
    public Collection<ProductBridge> extendedSearch(String userName, String productName, double minPrice, double maxPrice, String category) throws Exception {
        Collection<ProductIntr> productIntrs = market.extendedSearch(userName, productName, minPrice, maxPrice, category);
        Collection<ProductBridge> ret = new ArrayList<>();
        for(ProductIntr p : productIntrs)
            ret.add(new ProductRealBridge(p));
        return ret;
    }

    public void appointShopOwner(String appointedBy, String appointee, String shopName) throws Exception {
        market.appointShopOwner(appointedBy, appointee, shopName);
    }

    public void appointShopManager(String appointedBy, String appointee, String shopName) throws Exception {
        market.appointShopManager(appointedBy, appointee, shopName);
    }

    public void removeShopManager(String managerName, String userToRemove, String shopName) throws Exception {
        market.removeShopManager(managerName, userToRemove, shopName);
    }

    @Override
    public void changeManagerPermissions(String actor, String actOn, String shopName, int permission) throws Exception {
        List<Integer> permissions = new ArrayList<>();
        permissions.add(permission);
        market.changeManagerPermissions(actor, actOn, shopName, permissions);
    }


    public Collection<PurchaseBridge> getShopPurchaseHistory(String userName, String shopName) throws Exception {
        Collection<ShopInvoice> shopInvoices =  market.getShopPurchaseHistory(userName, shopName);
        Collection<PurchaseBridge> ret = new ArrayList<>();
        for (ShopInvoice p : shopInvoices)
            ret.add(new ShopInvoceRealBridge(p));
        return ret;
    }

    public void removeShop(String adminName, String userName, String shopName) {
        market.removeShop(adminName, userName, shopName);
    }

    public void blockUser(String adminName, String userName) {
        market.blockUser(adminName, userName);
    }

    public Collection<PurchaseBridge> getShopPurchaseHistoryByAdmin(String adminName, String shopName) throws Exception {
        Collection<ShopInvoice> shopInvoices =  market.getShopPurchaseHistoryByAdmin(adminName, shopName);
        Collection<PurchaseBridge> ret = new ArrayList<>();
        for (ShopInvoice p : shopInvoices)
            ret.add(new ShopInvoceRealBridge(p));
        return ret;
    }

    public Collection<PurchaseBridge> getUserPurchaseHistoryByAdmin(String adminName, String memberName) throws Exception {
        Collection<UserInvoice> userInvoices = market.getUserPurchaseHistoryByAdmin(adminName, memberName);
        Collection<PurchaseBridge> ret = new ArrayList<>();
        for (UserInvoice p : userInvoices)
            ret.add(new UserInvoceRealBridge(p));
        return ret;
    }

    public ShoppingCartBridge getCart(String userName) {
        Cart cart =  market.getCart(userName);
        return new ShoppingCartRealBridge(cart);
    }
    @Override
    public ShopBagBridge getShopBag(String userName, String shopName) {
        ShopBag bag = market.getShopBag(userName, shopName);
        return new ShopBagRealBridge(bag);
    }

    public void addProductsToCart(String userName, String shopName, String productName, int quantity) throws Exception {
        market.addProductsToCart(userName, shopName, productName, quantity);
    }

    public void updateProductsFromCart(String userName, String shopName, String productName, int newQuantity) throws Exception {
        market.updateCartProductQuantity(userName, shopName, productName, newQuantity);
    }

    public void purchaseCart(String userName) throws Exception {
        market.purchaseCart(userName,ExternalToolsFactory.createMockPaymentDetails(),ExternalToolsFactory.createMockSupplyDetails());;
    }

    public int getProductQuantityInShop(String shopName, String productName) throws Exception {
        login(adminUserName,ADMIN_PASSWORD);
        Shop shop = market.searchShop(adminUserName,shopName);
        market.logout(adminUserName);
        for(ShopProduct p : shop.getProducts())
            if(p.getName().equals(productName)) return p.getQuantity();
        return -1;
    }

    public String getProductDescription(String shopName, String productName) throws Exception {
        login(adminUserName,ADMIN_PASSWORD);
        Shop shop = market.searchShop(adminUserName,shopName);
        market.logout(adminUserName);
        for(ShopProduct p : shop.getProducts())
            if(p.getName().equals(productName)) return p.getDescription();
        return null;
    }

    public double getProductPrice(String shopName, String productName) throws Exception {
        login(adminUserName,ADMIN_PASSWORD);
        Shop shop = market.searchShop(adminUserName,shopName);
        market.logout(adminUserName);
        for(ShopProduct p : shop.getProducts())
            if(p.getName().equals(productName)) return p.getPrice();
        return -1;
    }

    public String getShopFounder(String shopName) throws Exception {
        login(adminUserName,ADMIN_PASSWORD);
        Shop shop = market.searchShop(adminUserName,shopName);
        market.logout(adminUserName);
        return shop.getFounder();
    }

    public Collection<String> getShopOwners(String shopName) throws Exception {
        login(adminUserName,ADMIN_PASSWORD);
        Collection<MemberRoleInShop> memberRoleInShops  =market.getShopManagersAndPermissions(adminUserName,shopName);
        market.logout(adminUserName);
        Collection<String> ret = new ArrayList<>();
        for(MemberRoleInShop m : memberRoleInShops){
            if(m.getType().equals(ManageType.OWNER))ret.add(m.getUserName());
        }
        return ret;
    }

    public Collection<String> getShopManagers(String shopName) throws Exception {
        login(adminUserName,ADMIN_PASSWORD);
        Collection<MemberRoleInShop> memberRoleInShops  =market.getShopManagersAndPermissions(adminUserName,shopName);
        market.logout(adminUserName);
        Collection<String> ret = new ArrayList<>();
        for(MemberRoleInShop m : memberRoleInShops){
            if(m.getType().equals(ManageType.MANAGER))ret.add(m.getUserName());
        }
        return ret;
    }

    @Override
    public void clearData() {
        market.resetAll();
    }

    @Override
    public void addPaymentProvider(PaymentServiceProviderBridge paymentSystem) {
        //todoinotherversion
    }

    @Override
    public void updateProductQuantityInCart(String UserName, String shopName, String productName, int newQuantity) throws Exception {
        Cart cart = market.getCart(UserName);
        ShoppingCartBridge shoppingCartBridge = new ShoppingCartRealBridge(cart);
        market.updateCartProductQuantity(UserName, shopName, productName, newQuantity);
    }

    @Override
    public void removeProductsFromCart(String UserName, String shopName, String productName) throws Exception {
        Cart cart = market.getCart(UserName);
        ShoppingCartBridge shoppingCartBridge = new ShoppingCartRealBridge(cart);
        int currentQuantity = shoppingCartBridge.getQuantityOfProduct(productName);
        market.updateProductQuantity(UserName, shopName, productName, (-1*currentQuantity));
    }

    @Override
    public void addNewProduct(String userName, String shopName, String productName,String category, String desc, double price, int quantity) throws Exception {
        market.addNewProduct(userName,shopName,productName,category,desc,price);
        market.updateProductQuantity(userName, shopName, productName, quantity);
    }

    @Override
    public void purchaseCart(String userName, String cardNumber, String cardName, String cardDate, String cardVerificationCode) throws Exception {
        PaymentDetails paymentDetails = new CreditCardPaymentDetails(cardNumber,cardDate,cardDate,cardName,cardVerificationCode,"12");
        market.purchaseCart(userName,paymentDetails,ExternalToolsFactory.createMockSupplyDetails());
    }

    @Override
    public void purchaseCart(String userName, String cardNumber, String cardName, String cardDate, String cardVerificationCode, String discountCode) throws Exception {
        PaymentDetails paymentDetails = new CreditCardPaymentDetails(cardNumber,cardDate,cardDate,cardName,cardVerificationCode,"12");
        market.purchaseCart(userName,paymentDetails,ExternalToolsFactory.createMockSupplyDetails());
    }

    @Override
    public void setDiscountPolicy(SystemDiscountPolicyBridge systemDiscountPolicyBridge) {
        throw new UnsupportedOperationException();
    }

    @Override
    public boolean isShopOwner(String ownerUserName, String shopName) throws Exception {
        ownerUserName=ownerUserName.toLowerCase();
        return getShopOwners(shopName).contains(ownerUserName);
    }

    @Override
    public boolean isShopManager(String managerUserName, String shopName) throws Exception {
        managerUserName=managerUserName.toLowerCase();
        return getShopManagers(shopName).contains(managerUserName);
    }

    @Override
    public Collection<Integer> getManagerPermissionsInShop(String shopManager, String shopName) throws Exception {
        login(adminUserName,ADMIN_PASSWORD);
        Collection<MemberRoleInShop>  memberRoleInShops = market.getShopManagersAndPermissions(adminUserName,shopName);
        market.logout(adminUserName);
        shopManager=shopManager.toLowerCase();
        for ( MemberRoleInShop m : memberRoleInShops){
            if(m.getUserName().equals(shopManager)){
                return m.getPermissions().getActivatedPermissions();
            }
        }
        return new ArrayList<>();
    }

    @Override
    public void removeShopOwner(String ShopOwner, String shopOwner, String shopName) {
        throw new UnsupportedOperationException();
    }

    @Override
    public void createBidOffer(String userName, String productName, String shopName, double bidPrice) throws Exception {
        market.createBidOffer(userName, productName, shopName, bidPrice);
    }

    @Override
    public Collection<Bid> getPendingBids(String userName, String shopName) throws Exception {
        return market.getPendingBids(userName, shopName);
    }

    @Override
    public Collection<Bid> getApprovedBids(String userName, String shopName) throws Exception {
        return market.getApprovedBids(userName, shopName);
    }

    @Override
    public Collection<Bid> getRejectedBids(String userName, String shopName) throws Exception {
        return market.getRejectedBids(userName, shopName);
    }

    @Override
    public void approveBid(String userName,String shopName, int bidId) throws Exception {
        market.approveBid(userName,shopName, bidId);
    }

    @Override
    public void rejectBid(String userName,String shopName, int bidId) throws Exception {
        market.rejectBid(userName, shopName, bidId);
    }

    @Override
    public Map<Integer, PurchasePolicy> getAllPurchasePolicies(String userName, String shopName) throws Exception {
        return market.getAllPurchasePolicies(userName, shopName);
    }

    @Override
    public void setActivePurchasePolicy(String userName, String shopName, int policyId) throws Exception {
        market.setActivePurchasePolicy(userName, shopName, policyId);
    }

    @Override
    public Integer getActivePurchasePolicyId(String userName, String shopName) throws Exception {
        return market.getActivePurchasePolicyId(userName, shopName);
    }

    @Override
    public void addAgePurchasePolicy(String userName, String shopName, boolean isProduct, String toConstraint, boolean positive, int startAge, int endAge) throws Exception {
        market.addAgePurchasePolicy(userName, shopName, isProduct, toConstraint, positive, startAge, endAge);
    }

    @Override
    public void addQuantityPurchasePolicy(String userName, String shopName, boolean isProduct, String toConstraint, boolean positive, int minQuantity, int maxQuantity) throws Exception {
        market.addQuantityPurchasePolicy(userName, shopName, isProduct, toConstraint, positive, minQuantity, maxQuantity);
    }

    @Override
    public void removeDiscount(String shopName, String userName, int discountId) throws Exception {

    }

    @Override
    public void addDatePurchasePolicy(String userName, String shopName, boolean isProduct, String toConstraint, boolean positive, LocalDate startDate, LocalDate endDate) throws Exception {
        market.addDatePurchasePolicy(userName, shopName, isProduct, toConstraint, positive, startDate, endDate);
    }

    @Override
    public void addTimePurchasePolicy(String userName, String shopName, boolean isProduct, String toConstraint, boolean positive, int startHour, int endHour) throws Exception {
        market.addTimePurchasePolicy(userName, shopName, isProduct, toConstraint, positive, startHour, endHour);
    }

    @Override
    public void addOrPurchasePolicy(String userName, String shopName, int pid1, int pid2) throws Exception {
        market.addOrPurchasePolicy(userName, shopName, pid1, pid2);
    }

    @Override
    public void addAndPurchasePolicy(String userName, String shopName, int pid1, int pid2) throws Exception {
        market.addAndPurchasePolicy(userName, shopName, pid1, pid2);
    }

    @Override
    public void addIfPurchasePolicy(String userName, String shopName, int pid1, int pid2) throws Exception {
        market.addIfPurchasePolicy(userName, shopName, pid1, pid2);
    }

    @Override
    public void loadState(String stateFilePath) throws Exception {
        market.loadState(stateFilePath);
    }

}
