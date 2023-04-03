package BusinessLayer;

import BusinessLayer.Purchases.Cart;
import BusinessLayer.Purchases.PurchaseIntr;
import BusinessLayer.Purchases.ShopBag;
import BusinessLayer.Shops.ProductIntr;
import BusinessLayer.Shops.Shop;
import BusinessLayer.Shops.ShopIntr;
import BusinessLayer.Users.UserIntr;
import com.sun.java.swing.action.ExitAction;
import sun.reflect.generics.reflectiveObjects.NotImplementedException;

import java.util.Collection;
import java.util.concurrent.ConcurrentHashMap;

public class Market implements MarketIntr{

	ConcurrentHashMap<String, ShopIntr> shops;

	@Override
	public void init() {
		shops = new ConcurrentHashMap<>();
	}

	@Override
	public String startSession() {
		return null;
	}

	@Override
	public void closeSession(String userName) {

	}

	@Override
	public void register(String userName, String password) {

	}

	@Override
	public void login(String userName, String password) {

	}

	@Override
	public void logout(String userName) {

	}

	@Override
	public Collection<PurchaseIntr> getUserPurchaseHistory(String userName) {
		return null;
	}

	@Override
	public void createShop(String userName, String shopName) throws Exception {
		checkIfLoggedIn(userName);
		if(!shops.containsKey(shopName))
			throw new Exception("there is already shop with that name");
		Shop shop = new Shop(shopName);
	}

	@Override
	public void openShop(String userName, String shopName) {

	}

	@Override
	public void closeShop(String userName, String shopName) {

	}

	@Override
	public void addNewProduct(String userName, String shopName, String productName, String desc, double price) {

	}

	@Override
	public void removeNewProduct(String userName, String shopName, String productName) {

	}

	@Override
	public void updateProductName(String userName, String shopName, String productOldName, String productNewName) {

	}

	@Override
	public void updateProductDesc(String userName, String shopName, String productName, String productNewDesc) {

	}

	@Override
	public void updateProductPrice(String userName, String shopName, String productName, double price) {

	}

	@Override
	public void updateProductQuantity(String userName, String shopName, String productName, int quantity) {

	}

	@Override
	public void addProductItems(String userName, String shopName, String productName, int quantity) {

	}

	@Override
	public ShopIntr getShop(String userName, String shopName) {
		return null;
	}

	@Override
	public ProductIntr getProduct(String userName, String shopName, String productName) {
		return null;
	}

	@Override
	public Collection<ProductIntr> search(String userName, String productName) {
		return null;
	}

	@Override
	public Collection<PurchaseIntr> getShopPurchaseHistory(String shopName) {
		return null;
	}

	@Override
	public void appointShopOwner(String appointedBy, String appointee, String shopName) {

	}

	@Override
	public void appointShopManager(String appointedBy, String appointee, String shopName) {

	}

	@Override
	public void removeShopManager(String managerName, String userToRemove, String shopName) {

	}

	@Override
	public void changeManagerPermissions(String manager, String permission) {

	}

	@Override
	public Collection<UserIntr> getShopManagersAndPermissions(String userName, String shopName) {
		return null;
	}

	@Override
	public Collection<PurchaseIntr> getShopPurchaseHistory(String userName, String shopName) {
		return null;
	}

	@Override
	public void removeShop(String adminName, String userName, String shopName) {

	}

	@Override
	public void blockUser(String adminName, String UserName) {

	}

	@Override
	public Collection<PurchaseIntr> getShopPurchaseHistoryByAdmin(String adminName, String shopName) {
		return null;
	}

	@Override
	public Collection<PurchaseIntr> getUserPurchaseHistoryByAdmin(String adminName, String memberName) {
		return null;
	}

	@Override
	public Cart getCart(String userName) {
		return null;
	}

	@Override
	public ShopBag getShopBag(String userName, String ShopName) {
		return null;
	}

	@Override
	public void addProductsToCart(String userName, String shopName, String productName, int quantity) {

	}

	@Override
	public void updateProductsFromCart(String userName, String shopName, String productName, int newQuantity) {

	}

	@Override
	public void purchaseCart(String userName) {

	}

	private boolean checkIfLoggedIn(String userName){
		//TODO: implement this
		throw new NotImplementedException();
	}
}
