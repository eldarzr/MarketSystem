package ServiceLayer;

import BusinessLayer.Enums.UserType;
import BusinessLayer.Market;
import BusinessLayer.MarketIntr;
import BusinessLayer.MemberRoleInShop;
import BusinessLayer.Purchases.Cart;
import BusinessLayer.Purchases.PurchaseIntr;
import BusinessLayer.Purchases.ShopBag;
import BusinessLayer.Shops.ProductIntr;
import BusinessLayer.Shops.Shop;
import BusinessLayer.Users.User;

import java.util.Collection;
import java.util.List;

public class ServiceMarket {

	private final Market market;

	public ServiceMarket() {
		this.market = new Market();
	}

	
	public void init() {
		market.init();
	}

	
	public void resetAll() {
		market.resetAll();
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

	public void login(String userName, String password) {
		market.login(userName, password);
	}

	public void logout(String userName) {
		market.logout(userName);
	}

	public Collection<PurchaseIntr> getUserPurchaseHistory(String userName) {
		return market.getUserPurchaseHistory(userName);
	}

	public void createShop(String userName, String shopName) throws Exception {
		market.createShop(userName, shopName);
	}

	public void openShop(String userName, String shopName) {
		market.openShop(userName, shopName);
	}

	public void closeShop(String userName, String shopName) throws Exception {
		market.closeShop(userName, shopName);
	}

	public void addNewProduct(String userName, String shopName, String productName, String category, String desc, double price) throws Exception {
		market.addNewProduct(userName, shopName, productName, category, desc, price);
	}

	public void removeProduct(String userName, String shopName, String productName) throws Exception {
		market.removeProduct(userName, shopName, productName);
	}

	public void updateProductName(String userName, String shopName, String productOldName, String productNewName) throws Exception {
		market.updateProductName(userName, shopName, productOldName, productNewName);
	}

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

	public Shop searchShop(String userName, String shopName) throws Exception {
		return market.searchShop(userName, shopName);
	}

	
	public ProductIntr getProduct(String userName, String shopName, String productName) throws Exception {
		return null;
	}

	public List<Shop> getShops(String userName, String shopName) throws Exception {
		return market.getShops(userName, shopName);
	}

	public List<ProductIntr> basicSearch(String userName, String productName) throws Exception {
		return market.basicSearch(userName, productName);
	}

	public List<ProductIntr> extendedSearch(String userName, String productName, double minPrice, double maxPrice, String category) throws Exception {
		return market.extendedSearch(userName, productName, minPrice, maxPrice, category);
	}

	public void appointShopOwner(String appointedBy, String appointee, String shopName) throws Exception {
		market.appointShopOwner(appointedBy, appointee, shopName);
	}

	
	public void appointShopManager(String appointedBy, String appointee, String shopName) throws Exception {
		market.appointShopManager(appointedBy, appointee, shopName);
	}

	
	public void removeShopManager(String managerName, String userToRemove, String shopName) {
		market.removeShopManager(managerName, userToRemove, shopName);
	}

	
	public MemberRoleInShop changeManagerPermissions(String actor, String actOn, String shopName, List<Integer> permission) throws Exception {
		return changeManagerPermissions(actor, actOn, shopName, permission);
	}

	
	public void addManagerPermissions(String actor, String actOn, String shopName, int permission) throws Exception {
		market.addManagerPermissions(actor, actOn, shopName, permission);
	}

	
	public Collection<MemberRoleInShop> getShopManagersAndPermissions(String userName, String shopName) throws Exception {
		return market.getShopManagersAndPermissions(userName, shopName);
	}

	
	public Collection<PurchaseIntr> getShopPurchaseHistory(String userName, String shopName) {
		return market.getShopPurchaseHistory(userName, shopName);
	}

	
	public void removeShop(String adminName, String userName, String shopName) {
		market.removeShop(adminName, userName, shopName);
	}

	
	public void blockUser(String adminName, String userName) {
		market.blockUser(adminName, userName);
	}

	
	public Collection<PurchaseIntr> getShopPurchaseHistoryByAdmin(String adminName, String shopName) {
		return market.getShopPurchaseHistoryByAdmin(adminName, shopName);
	}

	
	public Collection<PurchaseIntr> getUserPurchaseHistoryByAdmin(String adminName, String memberName) {
		return market.getUserPurchaseHistoryByAdmin(adminName, memberName);
	}

	
	public Cart getCart(String userName) {
		return market.getCart(userName);
	}

	
	public ShopBag getShopBag(String userName, String shopName) {
		return market.getShopBag(userName, shopName);
	}

	
	public void addProductsToCart(String userName, String shopName, String productName, int quantity) {
		market.addProductsToCart(userName, shopName, productName, quantity);
	}

	
	public void updateProductsFromCart(String userName, String shopName, String productName, int newQuantity) {
		market.updateProductsFromCart(userName, shopName, productName, newQuantity);
	}

	
	public void purchaseCart(String userName) {
		market.purchaseCart(userName);
	}

	// custom service methods for your application
}
