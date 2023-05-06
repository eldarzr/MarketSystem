package ServiceLayer;

import BusinessLayer.ExternalSystemsAdapters.PaymentDetails;
import BusinessLayer.ExternalSystemsAdapters.SupplyDetails;
import BusinessLayer.Market;
import BusinessLayer.Notifications.Notification;
import BusinessLayer.Shops.PurchasePolicies.ComplexPolicyType;
import BusinessLayer.Shops.PurchasePolicies.PurchasePolicy;
import BusinessLayer.Shops.Shop;
import BusinessLayer.Shops.Discount.DiscountRules.CompoundRuleType;
import BusinessLayer.Shops.Discount.DiscountRules.DiscountRule;
import BusinessLayer.Shops.Discount.XorDecisionRules.XorDecisionRule;
import BusinessLayer.Users.NotificationCallback;
import ServiceLayer.DataObjects.*;
import ServiceLayer.DataObjects.DiscountDataObjects.*;


import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

public class ServiceMarket {

	private final Market market;

	public ServiceMarket() {
		this.market = new Market();
	}


	public Response addNewProduct(String userName, String shopName, String productName, String category, String desc, double price) throws Exception {
		try {
			market.addNewProduct(userName, shopName, productName, category, desc, price);
		} catch (Exception exception) {
			return new Response(exception.getMessage());
		}
		return new Response();
	}

	public Response init() {
		try {
			market.init();
		} catch (Exception exception) {
			return new Response(exception.getMessage());
		}
		return new Response();
	}


	public Response resetAll() {
		try {
			market.resetAll();
			return new Response();
		} catch (Exception exception) {
			return new Response(exception.getMessage());
		}
	}


	public ResponseT<String> startSession() {
		try {
			return new ResponseT<String>(market.startSession());

		} catch (Exception exception) {
			return new ResponseT(exception.getMessage(), false);
		}
	}


	public ResponseT<String> startSession(String sessionID) {
		try {
			return new ResponseT<String>(market.startSession(sessionID));

		} catch (Exception exception) {
			return new ResponseT(exception.getMessage(), false);
		}
	}


	public Response closeSession(String userName) {
		try {
			market.closeSession(userName);
		} catch (Exception exception) {
			return new Response(exception.getMessage());
		}
		return new Response();
	}

	public ResponseT<UserDataObj> register(String userName, String email, String password) {
		try {
			return new ResponseT<>(new UserDataObj(market.register(userName, email, password)));
		} catch (Exception exception) {
			return new ResponseT<UserDataObj>(exception.getMessage(), false);
		}
	}

	public ResponseT<UserDataObj> login(String guestName, String userName, String password) {
		try {
			return new ResponseT<>(new UserDataObj(market.login(guestName, userName, password)));
		} catch (Exception exception) {
			return new ResponseT<UserDataObj>(exception.getMessage(), false);
		}
	}

	public ResponseT<String> logout(String userName) {
		try {
			return new ResponseT<>(market.logout(userName));
		} catch (Exception exception) {
			return new ResponseT<>(exception.getMessage());
		}
	}

	public ResponseT<Collection<UserInvoiceDataObj>> getUserPurchaseHistory(String userName) {
		try {
			return new ResponseT<Collection<UserInvoiceDataObj>>(market.getUserPurchaseHistory(userName).stream().
					map(UserInvoiceDataObj::new).collect(Collectors.toList()));

		} catch (Exception exception) {
			return new ResponseT(exception.getMessage(), false);
		}
	}

	public ResponseT<ShopDataObj> createShop(String userName, String shopName) throws Exception {

		try {
			return new ResponseT<>(new ShopDataObj(market.createShop(userName, shopName)));
		} catch (Exception exception) {
			return new ResponseT<ShopDataObj>(exception.getMessage(), false);
		}

	}

	public Response openShop(String userName, String shopName) {
		try {
			market.openShop(userName, shopName);
		} catch (Exception exception) {
			return new Response(exception.getMessage());
		}
		return new Response();
	}

	public Response closeShop(String userName, String shopName) throws Exception {
		try {
			market.closeShop(userName, shopName);
		} catch (Exception exception) {
			return new Response(exception.getMessage());
		}
		return new Response();
	}

	public Response removeProduct(String userName, String shopName, String productName) throws Exception {
		try {
			market.removeProduct(userName, shopName, productName);
		} catch (Exception exception) {
			return new Response(exception.getMessage());
		}
		return new Response();
	}

	public Response updateProductName(String userName, String shopName, String productOldName, String productNewName) throws Exception {
		try {
			market.updateProductName(userName, shopName, productOldName, productNewName);
		} catch (Exception exception) {
			return new Response(exception.getMessage());
		}
		return new Response();
	}

	public Response updateProductDesc(String userName, String shopName, String productName, String productNewDesc) throws Exception {
		try {
			market.updateProductDesc(userName, shopName, productName, productNewDesc);
		} catch (Exception exception) {
			return new Response(exception.getMessage());
		}
		return new Response();
	}

	public Response updateProductPrice(String userName, String shopName, String productName, double price) throws Exception {
		try {
			market.updateProductPrice(userName, shopName, productName, price);
		} catch (Exception exception) {
			return new Response(exception.getMessage());
		}
		return new Response();
	}

	public Response updateProductQuantity(String userName, String shopName, String productName, int quantity) throws Exception {
		try {
			market.updateProductQuantity(userName, shopName, productName, quantity);
		} catch (Exception exception) {
			return new Response(exception.getMessage());
		}
		return new Response();
	}

	public Response addProductItems(String userName, String shopName, String productName, int quantity) throws Exception {
		try {
			market.addProductItems(userName, shopName, productName, quantity);
		} catch (Exception exception) {
			return new Response(exception.getMessage());
		}
		return new Response();
	}

	public ResponseT<ShopDataObj> searchShop(String userName, String shopName) throws Exception {
		try {
		return new ResponseT<ShopDataObj>(new ShopDataObj(market.searchShop(userName, shopName)));

		} catch (Exception exception) {
			return new ResponseT(exception.getMessage(), false);
		}
	}


	public ResponseT<ProductDataObj> getProduct(String userName, String shopName, String productName) throws Exception {
		try {
			return new ResponseT<ProductDataObj>(new ProductDataObj(market.getProduct(userName, shopName, productName)));
		} catch (Exception exception) {
			return new ResponseT(exception.getMessage(), false);
		}
	}

	public ResponseT<List<ShopDataObj>> getShops(String userName, String shopName) throws Exception {
		try {
		return new ResponseT<List<ShopDataObj>>(market.getShops(userName, shopName).stream().map(ShopDataObj::new)
				.collect(Collectors.toList()));

		} catch (Exception exception) {
			return new ResponseT(exception.getMessage(), false);
		}
	}

	public ResponseT<List<ProductDataObj>> basicSearch(String userName, String productName) throws Exception {
		try {
		return new ResponseT<List<ProductDataObj>>(market.basicSearch(userName, productName).stream()
				.map(ProductDataObj::new).collect(Collectors.toList()));

		} catch (Exception exception) {
			return new ResponseT(exception.getMessage(), false);
		}
	}

	public ResponseT<List<ProductDataObj>> extendedSearch(String userName, String productName, double minPrice, double maxPrice, String category){
		try {
		return new ResponseT<List<ProductDataObj>>(market.extendedSearch(userName, productName, minPrice, maxPrice, category).stream()
				.map(ProductDataObj::new).collect(Collectors.toList()));
		} catch (Exception exception) {
			return new ResponseT<>(exception.getMessage(), false);
		}
	}

	public Response appointShopOwner(String appointedBy, String appointee, String shopName){
		try {
			market.appointShopOwner(appointedBy, appointee, shopName);
		} catch (Exception exception) {
			return new Response(exception.getMessage());
		}
		return new Response();
	}


	public Response appointShopManager(String appointedBy, String appointee, String shopName) {
		try {
			market.appointShopManager(appointedBy, appointee, shopName);
		} catch (Exception exception) {
			return new Response(exception.getMessage());
		}
		return new Response();
	}


	public Response removeShopOwner(String managerName, String userToRemove, String shopName) {
		try {
			market.removeShopOwner(managerName, userToRemove, shopName);
		} catch (Exception exception) {
			return new Response(exception.getMessage());
		}
		return new Response();
	}


	public ResponseT<MemberRoleInShopDataObj> changeManagerPermissions(String actor, String actOn, String shopName, List<Integer> permission){
		try {
		return new ResponseT<MemberRoleInShopDataObj>(new MemberRoleInShopDataObj(market.changeManagerPermissions(actor, actOn, shopName, permission)));

		} catch (Exception exception) {
			return new ResponseT(exception.getMessage(), false);
		}
	}


	public Response addManagerPermissions(String actor, String actOn, String shopName, int permission) throws Exception {
		try {
			market.addManagerPermissions(actor, actOn, shopName, permission);
		} catch (Exception exception) {
			return new Response(exception.getMessage());
		}
		return new Response();
	}


	public ResponseT<List<MemberRoleInShopDataObj>> getShopManagersAndPermissions(String userName, String shopName) throws Exception {
		try {
			return new ResponseT<>(market. getShopManagersAndPermissions(userName, shopName).stream()
					.map(MemberRoleInShopDataObj::new).collect(Collectors.toList()));

		} catch (Exception exception) {
			return new ResponseT(exception.getMessage(), false);
		}
	}


	public ResponseT<List<MemberRoleInShopDataObj>> getShopManagersAndPermissionsByAdmin(String admin, String userName, String shopName) throws Exception {
		try {
			return new ResponseT<>(market.getShopManagersAndPermissionsByAdmin(admin, userName, shopName).stream()
					.map(MemberRoleInShopDataObj::new).collect(Collectors.toList()));

		} catch (Exception exception) {
			return new ResponseT(exception.getMessage(), false);
		}
	}


	public ResponseT<Collection<ShopInvoiceDataObj>> getShopPurchaseHistory(String userName, String shopName) {
		try {
		return new ResponseT<>(market.getShopPurchaseHistory(userName, shopName).stream()
				.map(ShopInvoiceDataObj::new).collect(Collectors.toList()));
		} catch (Exception exception) {
			return new ResponseT(exception.getMessage(), false);
		}
	}


	public Response removeShop(String adminName, String userName, String shopName) {
		try {
			market.removeShop(adminName, userName, shopName);
		} catch (Exception exception) {
			return new Response(exception.getMessage());
		}
		return new Response();
	}


	public Response blockUser(String adminName, String userName) {
		try {
			market.blockUser(adminName, userName);
		} catch (Exception exception) {
			return new Response(exception.getMessage());
		}
		return new Response();
	}


	public ResponseT<Collection<ShopInvoiceDataObj>> getShopPurchaseHistoryByAdmin(String adminName, String shopName) {
		try {
		return new ResponseT<>(market.getShopPurchaseHistoryByAdmin(adminName, shopName).stream()
				.map(ShopInvoiceDataObj::new).collect(Collectors.toList()));
		} catch (Exception exception) {
			return new ResponseT(exception.getMessage(), false);
		}
	}


	public ResponseT<List<UserInvoiceDataObj>> getUserPurchaseHistoryByAdmin(String adminName, String memberName) {
		try {
		return new ResponseT<>(market.getUserPurchaseHistoryByAdmin(adminName, memberName).stream()
				.map(UserInvoiceDataObj::new).collect(Collectors.toList()));
		} catch (Exception exception) {
			return new ResponseT(exception.getMessage(), false);
		}
	}


	public ResponseT<CartDataObj> getCart(String userName) {
		try {
		return new ResponseT<CartDataObj>(new CartDataObj(market.getCart(userName)));

		} catch (Exception exception) {
			return new ResponseT(exception.getMessage(), false);
		}
	}


	public ResponseT<ShopBagDataObj> getShopBag(String userName, String shopName) {
		try {
		return new ResponseT<ShopBagDataObj>(new ShopBagDataObj(market.getShopBag(userName, shopName)));

		} catch (Exception exception) {
			return new ResponseT(exception.getMessage(), false);
		}
	}


	public Response addProductsToCart(String userName, String shopName, String productName, int quantity) {
		try {
			market.addProductsToCart(userName, shopName, productName, quantity);
		} catch (Exception exception) {
			return new Response(exception.getMessage());
		}
		return new Response();
	}


	public Response updateProductsFromCart(String userName, String shopName, String productName, int newQuantity) {
		try {
			market.updateCartProductQuantity(userName, shopName, productName, newQuantity);
		} catch (Exception exception) {
			return new Response(exception.getMessage());
		}
		return new Response();
	}


	public Response purchaseCart(String userName, PaymentDetails paymentDetails, SupplyDetails supplyDetails) {
		try {
			market.purchaseCart(userName, paymentDetails, supplyDetails);
		} catch (Exception exception) {
			return new Response(exception.getMessage());
		}
		return new Response();
	}

	public ResponseT<CategoryDiscountDataObj> addCategoryDiscount(String shopName, String userName, double discountPercentage, String category) throws Exception {
		try {
			return new ResponseT<CategoryDiscountDataObj>(new CategoryDiscountDataObj(market.addCategoryDiscount(userName, shopName,discountPercentage,category)));

		} catch (Exception exception) {
			return new ResponseT(exception.getMessage(), false);
		}
	}

	public ResponseT<ProductDiscountDataObj> addProductDiscount(String shopName, String userName, double discountPercentage, String productName) throws Exception {
		try {
			return new ResponseT<ProductDiscountDataObj>(new ProductDiscountDataObj(market.addProductDiscount(userName, shopName,discountPercentage,productName)));

		} catch (Exception exception) {
			return new ResponseT(exception.getMessage(), false);
		}
	}

	public ResponseT<ShopDiscountDataObj> addShopDiscount(String shopName, String userName, double discountPercentage) {
		try {
			return new ResponseT<ShopDiscountDataObj>(new ShopDiscountDataObj(market.addShopDiscount(userName, shopName,discountPercentage)));

		} catch (Exception exception) {
			return new ResponseT(exception.getMessage(), false);
		}
	}

	public ResponseT<CompoundDiscountDataObj> addSumDiscount(String shopName, String userName, List<Integer> discountsIds) throws Exception {
		try {
			return new ResponseT<CompoundDiscountDataObj>(new CompoundDiscountDataObj(market.addSumDiscount(userName, shopName,discountsIds)));

		} catch (Exception exception) {
			return new ResponseT(exception.getMessage(), false);
		}
	}

	public ResponseT<CompoundDiscountDataObj> addMaxDiscount(String shopName, String userName, List<Integer> discountsIds) throws Exception {
		try {
			return new ResponseT<CompoundDiscountDataObj>(new CompoundDiscountDataObj(market.addMaxDiscount(userName, shopName,discountsIds)));

		} catch (Exception exception) {
			return new ResponseT(exception.getMessage(), false);
		}
	}

	public ResponseT<CompoundDiscountDataObj> addXorDiscount(String shopName, String userName, List<Integer> discountsIds, XorDecisionRule xorDiscountRule) throws Exception {
		try {
			return new ResponseT<CompoundDiscountDataObj>(new CompoundDiscountDataObj(market.addXorDiscount(userName, shopName,discountsIds,xorDiscountRule)));

		} catch (Exception exception) {
			return new ResponseT(exception.getMessage(), false);
		}
	}

	public Response addDiscountRule(String shopName, String userName, DiscountRule discountRule, int discountId, CompoundRuleType actionWithOldRule) throws Exception {
		try {
			market.addDiscountRule(shopName,userName, discountRule, discountId,actionWithOldRule);
		} catch (Exception exception) {
			return new Response(exception.getMessage());
		}
		return new Response();
	}

	public ResponseT<List<UserDataObj>> getAllUsers(String adminName) {
		try {
			return new ResponseT<List<UserDataObj>>(market.getAllUsers(adminName).stream().
					map(UserDataObj::new).collect(Collectors.toList()));

		} catch (Exception exception) {
			return new ResponseT<>(exception.getMessage(), false);
		}
	}

	public ResponseT<String> removeUser(String adminName, String userName) {
		try {
			return new ResponseT<>(market.removeUser(adminName, userName));
		} catch (Exception exception) {
			return new ResponseT<>(exception.getMessage(), false);
		}
	}

	public ResponseT<List<ShopDataObj>> getAllShops(String userName) {
		try {
			return new ResponseT<List<ShopDataObj>>(market.getAllShops(userName).stream().map(ShopDataObj::new)
					.collect(Collectors.toList()));

		} catch (Exception exception) {
			return new ResponseT(exception.getMessage(), false);
		}
	}

	public ResponseT<UserDataObj> getUser(String userName) {
		try {
			return new ResponseT<UserDataObj>(new UserDataObj(market.getUser(userName)));

		} catch (Exception exception) {
			return new ResponseT<>(exception.getMessage(), false);
		}
	}

	public ResponseT<List<MemberRoleInShopDataObj>> getUserRoles(String userName) {
			try {
				return new ResponseT<List<MemberRoleInShopDataObj>>(market.getUserRoles(userName).stream().map(MemberRoleInShopDataObj::new)
						.collect(Collectors.toList()));

			} catch (Exception exception) {
				return new ResponseT(exception.getMessage(), false);
			}
		}

	public ResponseT<ShopDataObj> getShop(String name) {
		try {
			return new ResponseT<ShopDataObj>(new ShopDataObj(market.getShop(name)));

		} catch (Exception exception) {
			return new ResponseT<>(exception.getMessage(), false);
		}
	}

	public void setNotificationCallback(String name, NotificationCallback callback) {
		market.setNotificationCallback(name,callback);
	}

	public ResponseT<List<NotificationDataObj>> getUserNotifications(String userName) {
		try {
			return new ResponseT<List<NotificationDataObj>>(market.getUserNotifications(userName).stream().map(NotificationDataObj::new)
					.collect(Collectors.toList()));

		} catch (Exception exception) {
			return new ResponseT(exception.getMessage(), false);
		}
	}

	public void removeNotification(String username, NotificationDataObj notificationData) {
		Notification notification = new Notification(notificationData);
		market.removeNotification(username, notification);
	}

	public Response addAgePurchasePolicy(String userName, String shopName,boolean isProduct, String toConstraint,boolean positive,int startAge, int endAge){
		try{
			market.addAgePurchasePolicy(userName, shopName, isProduct, toConstraint, positive, startAge, endAge);
			return new Response();
		}catch (Exception e){
			return new Response(e.getMessage());
		}
	}

	public Response addQuantityPurchasePolicy(String userName, String shopName,boolean isProduct, String toConstraint,boolean positive,int minQuantity, int maxQuantity){
		try{
			market.addQuantityPurchasePolicy(userName, shopName, isProduct, toConstraint, positive, minQuantity, maxQuantity);
			return new Response();
		}catch (Exception e){
			return new Response(e.getMessage());
		}
	}

	public Response addDatePurchasePolicy(String userName, String shopName, boolean isProduct, String toConstraint, boolean positive, LocalDate startDate, LocalDate endDate) {
		try{
			market.addDatePurchasePolicy(userName, shopName, isProduct, toConstraint, positive, startDate, endDate);
			return new Response();
		}catch (Exception e){
			return new Response(e.getMessage());
		}
	}

	public Response addTimePurchasePolicy(String userName, String shopName,boolean isProduct, String toConstraint,boolean positive,int startHour, int endHour) {
		try{
			market.addTimePurchasePolicy(userName, shopName, isProduct, toConstraint, positive, startHour, endHour);
			return new Response();
		}catch (Exception e){
			return new Response(e.getMessage());
		}
	}

	public Response addOrPurchasePolicy(String userName, String shopName,int pid1, int pid2){
		try{
			market.addOrPurchasePolicy(userName, shopName, pid1, pid2);
			return new Response();
		}catch (Exception e){
			return new Response(e.getMessage());
		}
	}
	public Response addAndPurchasePolicy(String userName, String shopName,int pid1, int pid2){
		try{
			market.addAndPurchasePolicy(userName, shopName, pid1, pid2);
			return new Response();
		}catch (Exception e){
			return new Response(e.getMessage());
		}
	}
	public Response addIfPurchasePolicy(String userName, String shopName,int pid1, int pid2){
		try{
			market.addIfPurchasePolicy(userName, shopName, pid1, pid2);
			return new Response();
		}catch (Exception e){
			return new Response(e.getMessage());
		}
	}

	public ResponseT<Collection<PurchasePolicyDataObj>> getAllPurchasePolicies(String userName, String shopName){
		try{
			Map<Integer, PurchasePolicy> purchasePolicyMap = market.getAllPurchasePolicies(userName, shopName);
			Collection<PurchasePolicyDataObj> ret = new ArrayList<>();
			for(PurchasePolicy p : purchasePolicyMap.values())
				ret.add(new PurchasePolicyDataObj(p));
			return new ResponseT<>(ret);
		}
		catch (Exception e){
			return new ResponseT<>(e.getMessage(),false);
		}
	}

	public Response setActivePurchasePolicy(String userName, String shopName, int policyId) {
		try{
			market.setActivePurchasePolicy(userName,shopName,policyId);
			return new Response();
		}catch (Exception e){
			return new Response(e.getMessage());
		}
	}

	public ResponseT<Integer> getActivePurchasePolicyId(String userName, String shopName) {
		try{
			Integer i = market.getActivePurchasePolicyId(userName,shopName);
			return new ResponseT<Integer>(i);
		}catch (Exception e){
			return new ResponseT<>(e.getMessage(),false);
		}
	}
}
