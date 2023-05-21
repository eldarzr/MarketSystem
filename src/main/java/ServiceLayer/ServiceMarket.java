package ServiceLayer;

import BusinessLayer.Bids.Bid;
import BusinessLayer.ExternalSystemsAdapters.PaymentDetails;
import BusinessLayer.ExternalSystemsAdapters.SupplyDetails;
import BusinessLayer.Market;
import BusinessLayer.Notifications.Notification;
import BusinessLayer.Shops.FinalCartPriceResult;
import BusinessLayer.Shops.PurchasePolicies.ComplexPolicyType;
import BusinessLayer.Shops.PurchasePolicies.PurchasePolicy;
import BusinessLayer.Shops.Shop;
import BusinessLayer.Shops.Discount.DiscountRules.CompoundRuleType;
import BusinessLayer.Shops.Discount.DiscountRules.DiscountRule;
import BusinessLayer.Shops.Discount.XorDecisionRules.XorDecisionRule;
import BusinessLayer.Users.NotificationCallback;
import BusinessLayer.Shops.Discount.DiscountRules.*;
import BusinessLayer.Shops.Discount.XorDecisionRules.XorDecisionRule;
import BusinessLayer.Shops.Discount.XorDecisionRules.XorDecisionRuleName;

import BusinessLayer.Users.User;
import ServiceLayer.DataObjects.*;
import ServiceLayer.DataObjects.DiscountDataObjects.*;
import ServiceLayer.DataObjects.DiscountDataObjects.DiscountRulesDataObjects.DiscountRuleServiceInterface;
import ServiceLayer.DataObjects.DiscountDataObjects.DiscountRulesDataObjects.SimpleDiscountRuleDataObj;


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


	public Response addNewProduct(String userName, String shopName, String productName, String category, String desc, double price) {
		try {
			market.addNewProduct(userName, shopName, productName, category, desc, price);
		} catch (Exception exception) {
			return new Response(exception.getMessage());
		}
		return new Response();
	}

	public Response addNewProduct(String userName, String shopName, String productName, String productCategory, String productDescription, Double productPrice, Integer productQuantity) {
		try {
			market.addNewProduct(userName, shopName, productName, productCategory, productDescription, productPrice,productQuantity);
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

	public Response closeShop(String userName, String shopName)  {
		try {
			market.closeShop(userName, shopName);
		} catch (Exception exception) {
			return new Response(exception.getMessage());
		}
		return new Response();
	}

	public Response removeProduct(String userName, String shopName, String productName){
		try {
			market.removeProduct(userName, shopName, productName);
		} catch (Exception exception) {
			return new Response(exception.getMessage());
		}
		return new Response();
	}

//	public Response updateProductName(String userName, String shopName, String productOldName, String productNewName) {
//		try {
//			market.updateProductName(userName, shopName, productOldName, productNewName);
//		} catch (Exception exception) {
//			return new Response(exception.getMessage());
//		}
//		return new Response();
//	}

	public Response updateProductDesc(String userName, String shopName, String productName, String productNewDesc) {
		try {
			market.updateProductDesc(userName, shopName, productName, productNewDesc);
		} catch (Exception exception) {
			return new Response(exception.getMessage());
		}
		return new Response();
	}

	public Response updateProductPrice(String userName, String shopName, String productName, double price) {
		try {
			market.updateProductPrice(userName, shopName, productName, price);
		} catch (Exception exception) {
			return new Response(exception.getMessage());
		}
		return new Response();
	}

	public Response updateProductQuantity(String userName, String shopName, String productName, int quantity) {
		try {
			market.updateProductQuantity(userName, shopName, productName, quantity);
		} catch (Exception exception) {
			return new Response(exception.getMessage());
		}
		return new Response();
	}

	public Response updateProductCategory(String userName, String shopName, String productName, String category) {
		try {
			market.updateProductCategory(userName, shopName, productName, category);
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

	public ResponseT<MemberRoleInShopDataObj> changeManagerAccess(String actor, String actOn, String shopName, int permission){
		try {
			return new ResponseT<MemberRoleInShopDataObj>(new MemberRoleInShopDataObj(market.changeManagerAccess(actor, actOn, shopName, permission)));

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

	public ResponseT<CategoryDiscountDataObj> addCategoryDiscount(String shopName, String userName, double discountPercentage, String category) {
		try {
			return new ResponseT<CategoryDiscountDataObj>(new CategoryDiscountDataObj(market.addCategoryDiscount(shopName, userName,discountPercentage,category)));

		} catch (Exception exception) {
			return new ResponseT(exception.getMessage(), false);
		}
	}

	public ResponseT<ProductDiscountDataObj> addProductDiscount(String shopName, String userName, double discountPercentage, String productName){
		try {
			return new ResponseT<ProductDiscountDataObj>(new ProductDiscountDataObj(market.addProductDiscount(shopName, userName,discountPercentage,productName)));

		} catch (Exception exception) {
			return new ResponseT(exception.getMessage(), false);
		}
	}

	public ResponseT<ShopDiscountDataObj> addShopDiscount(String shopName, String userName, double discountPercentage) {
		try {
			return new ResponseT<ShopDiscountDataObj>(new ShopDiscountDataObj(market.addShopDiscount(shopName, userName,discountPercentage)));

		} catch (Exception exception) {
			return new ResponseT(exception.getMessage(), false);
		}
	}

	public ResponseT<CompoundDiscountDataObj> addSumDiscount(String shopName, String userName, List<Integer> discountsIds) {
		try {
			return new ResponseT<CompoundDiscountDataObj>(new SumCompoundDiscountDataObj(market.addSumDiscount(shopName, userName,discountsIds)));

		} catch (Exception exception) {
			return new ResponseT(exception.getMessage(), false);
		}
	}

	public ResponseT<CompoundDiscountDataObj> addMaxDiscount(String shopName, String userName, List<Integer> discountsIds) {
		try {
			return new ResponseT<CompoundDiscountDataObj>(new MaxCompoundDiscountDataObj(market.addMaxDiscount(shopName, userName,discountsIds)));

		} catch (Exception exception) {
			return new ResponseT(exception.getMessage(), false);
		}
	}

	public ResponseT<CompoundDiscountDataObj> addXorDiscount(String shopName, String userName, List<Integer> discountsIds, String xorDecisionRule) {
		try {
			return new ResponseT<CompoundDiscountDataObj>(new XorCompoundDiscountDataObj(market.addXorDiscount(shopName, userName,discountsIds,XorDecisionRuleName.valueOf(xorDecisionRule))));

		} catch (Exception exception) {
			return new ResponseT(exception.getMessage(), false);
		}
	}

	public Response addDiscountRule(String shopName, String userName, SimpleDiscountRuleDataObj discountRule, int discountId, String actionWithOldRule) {
		try {
			DiscountRule BDiscountRule = makeBDiscountRule(discountRule);
			market.addDiscountRule(shopName,userName, BDiscountRule, discountId,actionWithOldRule);
		} catch (Exception exception) {
			return new Response(exception.getMessage());
		}
		return new Response();
	}


	public Response resetDiscountRule(String shopName, String userName, int discountId) {
		try {
			market.resetDiscountRule(shopName,userName, discountId);
		} catch (Exception exception) {
			return new Response(exception.getMessage());
		}
		return new Response();
	}

	public Response removeDiscount(String shopName, String userName, int discountId) {
		try{
			market.removeDiscount(shopName,userName,discountId);
		}catch (Exception e){
			return new Response(e.getMessage());
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

	public ResponseT<List<NotificationDataObj>> getUserNotifications(String userName) {
		try {
			return new ResponseT<List<NotificationDataObj>>(market.getUserNotifications(userName).stream().map(NotificationDataObj::new)
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

	public void removeNotificationCallback(String name) {
		market.removeNotificationCallback(name);
	}

	public ResponseT<DiscountPolicyDataObj> getShopDiscountPolicy(String currentUser, String shopName) {
		try{
			return new ResponseT<DiscountPolicyDataObj>(new DiscountPolicyDataObj(market.getDiscountPolicy(currentUser,shopName)));
		}catch (Exception e){
			return new ResponseT<>(e.getMessage(),false);
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
	
	private DiscountRule makeBDiscountRule(SimpleDiscountRuleDataObj discountRule) {
		if(discountRule.getRuleSubType().equalsIgnoreCase(SimpleRuleType.MinProductQuantity.toString())){
			return BasicDiscountRulesFactory.makeMinProductQuantityRule(discountRule.getMinQuantity(),discountRule.getSubjectName());
		}
		if(discountRule.getRuleSubType().equalsIgnoreCase(SimpleRuleType.MaxProductQuantity.toString())){
			return BasicDiscountRulesFactory.makeMaxProductQuantityRule(discountRule.getMaxQuantity(),discountRule.getSubjectName());
		}
		if(discountRule.getRuleSubType().equalsIgnoreCase(SimpleRuleType.MinFromCategory.toString())){
			return BasicDiscountRulesFactory.makeMinFromCategoryRule(discountRule.getMinQuantity(),discountRule.getSubjectName());
		}
		if(discountRule.getRuleSubType().equalsIgnoreCase(SimpleRuleType.MaxFromCategory.toString())){
			return BasicDiscountRulesFactory.makeMinFromCategoryRule(discountRule.getMaxQuantity(),discountRule.getSubjectName());
		}
		if(discountRule.getRuleSubType().equalsIgnoreCase(SimpleRuleType.BagPriceHigherThan.toString())){
			return BasicDiscountRulesFactory.makeBagPriceHigherThanRule(discountRule.getMinPrice());
		}
		return null;
	}

	public ResponseT<Integer> getActivePurchasePolicyId(String userName, String shopName) {
		try{
			Integer i = market.getActivePurchasePolicyId(userName,shopName);
			return new ResponseT<Integer>(i);
		}catch (Exception e){
			return new ResponseT<>(e.getMessage(),false);
		}
	}
	//Bid functions
	public Response createBidOffer (String userName, String productName, String shopName, double bidPrice)  {
		try {
			market.createBidOffer(userName, productName, shopName, bidPrice);
			return new Response();
		}catch (Exception e){
			return new Response(e.getMessage());
		}
	}
	public ResponseT<Collection<BidDataObj>> getPendingBids(String userName, String shopName)  {
		try{
			Collection<BidDataObj> ret = new ArrayList<>();
			for(Bid b : market.getPendingBids(userName, shopName))
				ret.add(new BidDataObj(b));
			return new ResponseT<>(ret);
		}catch (Exception e){
			return new ResponseT<>(e.getMessage(),false);
		}
	}
	public ResponseT<Collection<BidDataObj>> getApprovedBids(String userName,String shopName)  {
		try{
			Collection<BidDataObj> ret = new ArrayList<>();
			for(Bid b : market.getApprovedBids(userName, shopName))
				ret.add(new BidDataObj(b));
			return new ResponseT<>(ret);
		}catch (Exception e){
			return new ResponseT<>(e.getMessage(),false);
		}
	}
	public ResponseT<Collection<BidDataObj>> getRejectedBids(String userName,String shopName)  {
		try{
			Collection<BidDataObj> ret = new ArrayList<>();
			for(Bid b : market.getRejectedBids(userName, shopName))
				ret.add(new BidDataObj(b));
			return new ResponseT<>(ret);
		}catch (Exception e){
			return new ResponseT<>(e.getMessage(),false);
		}
	}
	public Response approveBid(String userName, int bidId)  {
		try{
			market.approveBid(userName, bidId);
			return new Response();
		}catch (Exception e){
			return new Response(e.getMessage());
		}
	}
	public Response rejectBid(String userName, int bidId)  {
		try{
			market.rejectBid(userName, bidId);
			return new Response();
		}catch (Exception e){
			return new Response(e.getMessage());
		}
	}
	public ResponseT<FinalCartPriceDataObj> calcCartPriceAfterDiscount(String userName) {
		try{
			FinalCartPriceResult result = market.calcCartPriceAfterDiscount(userName);
			return new ResponseT<FinalCartPriceDataObj>(new FinalCartPriceDataObj(result));
		}catch (Exception e){
			return new ResponseT<FinalCartPriceDataObj>(e.getMessage(),false);
		}
	}

    public void ReadUserNotifications(String username) {
		market.ReadUserNotifications(username);
    }
}
