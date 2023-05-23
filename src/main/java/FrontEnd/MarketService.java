package FrontEnd;

import BusinessLayer.Bids.Bid;
import BusinessLayer.ExternalSystemsAdapters.PaymentDetails;
import BusinessLayer.ExternalSystemsAdapters.SupplyDetails;
import BusinessLayer.Users.NotificationCallback;
import FrontEnd.Model.*;
import ServiceLayer.DataObjects.*;
import ServiceLayer.DataObjects.DiscountDataObjects.CategoryDiscountDataObj;
import ServiceLayer.DataObjects.DiscountDataObjects.CompoundDiscountDataObj;
import ServiceLayer.DataObjects.DiscountDataObjects.ProductDiscountDataObj;
import ServiceLayer.DataObjects.DiscountDataObjects.ShopDiscountDataObj;
import ServiceLayer.DataObjects.DiscountDataObjects.*;
import ServiceLayer.DataObjects.DiscountDataObjects.DiscountRulesDataObjects.SimpleDiscountRuleDataObj;
import ServiceLayer.Response;
import ServiceLayer.ResponseT;
import ServiceLayer.ServiceMarket;
import com.vaadin.flow.server.VaadinService;
import com.vaadin.flow.server.VaadinSession;
import org.apache.commons.lang3.NotImplementedException;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.concurrent.ConcurrentHashMap;
import java.util.stream.Collectors;

public class MarketService {

	ServiceMarket serviceMarket;
	ConcurrentHashMap<String, VaadinSession> sessions = new ConcurrentHashMap<>();

	private static volatile MarketService instance;

	public static MarketService getInstance(){
		if(instance == null){
			synchronized ( (MarketService.class)){
				if(instance == null){
					instance =  new MarketService();
					instance.init("src/InitFiles/BaseConfig.jason");
				}
			}
		}
		return instance;
	}

	private MarketService() {
		serviceMarket = new ServiceMarket();
	}

	public Response init(String configPath) {
		try {
			serviceMarket.init(configPath);
			if (VaadinService.getCurrent() != null) {
				VaadinService.getCurrent().addSessionInitListener(event ->
						startSession(event.getSession().getSession().getId()));
				VaadinService.getCurrent().addSessionDestroyListener(event ->
						closeSession(event.getSession().getSession().getId()));
				startSession(VaadinSession.getCurrent().getSession().getId());
			}
		} catch (Exception exception) {
			return new Response(exception.getMessage());
		}
		return new Response();
	}

	public Response resetAll() {
		try {
			serviceMarket.resetAll();
			return new Response();
		} catch (Exception exception) {
			return new Response(exception.getMessage());
		}
	}

	public SResponseT<String> startSession() {
		ResponseT<String> res = serviceMarket.startSession();
		if (res.isSuccess())
			return new SResponseT<String>(res.getData());
		return new SResponseT<>(res.getMessage(), res.isSuccess());
	}

	public SResponseT<String> startSession(String sessionID) {
		sessions.put(sessionID, VaadinSession.getCurrent());
		ResponseT<String> res = serviceMarket.startSession(sessionID);
		if (res.isSuccess())
			return new SResponseT<String>(res.getData());
		return new SResponseT<>(res.getMessage(), res.isSuccess());
	}

	public SResponse closeSession(String sessionID) {
		sessions.remove(sessionID);
		Response res = serviceMarket.closeSession(sessionID);
		if (res.isSuccess())
			return new SResponse();
		return new SResponse(res.getMessage());
	}


	public SResponseT<UserModel> register(String userName, String email, String password) {
		ResponseT<UserDataObj> r = serviceMarket.register(userName, email, password);
		if (r.isSuccess())
			return new SResponseT<>(new UserModel(r.getData()));
		return new SResponseT<>(r.getMessage(), r.isSuccess());
	}

	public SResponseT<UserModel> login(String guestName, String userName, String password) {
		ResponseT<UserDataObj> r = serviceMarket.login(guestName, userName, password);
		if (r.isSuccess())
			return new SResponseT<>(new UserModel(r.getData()));
		return new SResponseT<>(r.getMessage(), r.isSuccess());
	}

	public SResponseT<String> logout(String userName) {
		ResponseT<String> res = serviceMarket.logout(userName);
		if (res.isSuccess())
			return new SResponseT<>(res.getData());
		return new SResponseT<>(res.getMessage(), res.isSuccess());
	}

	public SResponseT<List<UserInvoiceModel>> getUserPurchaseHistory(String userName) {
		try {
			return new SResponseT<List<UserInvoiceModel>>(serviceMarket.getUserPurchaseHistory(userName).getData().stream().
					map(UserInvoiceModel::new).collect(Collectors.toList()));

		} catch (Exception exception) {
			return new SResponseT(exception.getMessage(), false);
		}
	}

	public SResponseT<ShopModel> createShop(String userName, String shopName) {
		ResponseT<ShopDataObj> res = null;
		try {
			res = serviceMarket.createShop(userName, shopName);
		} catch (Exception e) {
			throw new RuntimeException(e);
		}
		if (res.isSuccess())
			return new SResponseT<>(new ShopModel(res.getData()));
		return new SResponseT<>(res.getMessage(), res.isSuccess());
	}

	public Response openShop(String userName, String shopName) {
		throw new NotImplementedException();
	}

	public SResponse closeShop(String userName, String shopName) {
		Response r = serviceMarket.closeShop(userName , shopName);
		if (r.isSuccess())
			return new SResponse();
		return new SResponse(r.getMessage());
	}

	public SResponse removeProduct(String userName, String shopName, String productName){
		Response r = serviceMarket.removeProduct(userName,shopName,productName);
		if (r.isSuccess())
			return new SResponse();
		return new SResponse(r.getMessage());
	}

//	public SResponse updateProductName(String userName, String shopName, String productOldName, String productNewName) {
//		Response r = serviceMarket.updateProductName(userName,shopName, productOldName,productNewName);
//		if (r.isSuccess())
//			return new SResponse();
//		return new SResponse(r.getMessage());
//	}

	public SResponse updateProductDesc(String userName, String shopName, String productName, String productNewDesc){
		Response r = serviceMarket.updateProductDesc(userName,shopName, productName,productNewDesc);
		if (r.isSuccess())
			return new SResponse();
		return new SResponse(r.getMessage());
	}

	public SResponse updateProductPrice(String userName, String shopName, String productName, double price) {
		Response r = serviceMarket.updateProductPrice(userName,shopName, productName,price);
		if (r.isSuccess())
			return new SResponse();
		return new SResponse(r.getMessage());
	}

	public SResponse updateProductQuantity(String userName, String shopName, String productName, int quantity) {
		Response r = serviceMarket.updateProductQuantity(userName,shopName, productName,quantity);
		if (r.isSuccess())
			return new SResponse();
		return new SResponse(r.getMessage());
	}

	public SResponse updateProductCategory(String userName, String shopName, String productName, String category) {
		Response r = serviceMarket.updateProductCategory(userName,shopName, productName,category);
		if (r.isSuccess())
			return new SResponse();
		return new SResponse(r.getMessage());
	}

	public Response addProductItems(String userName, String shopName, String productName, int quantity) throws Exception {
		throw new NotImplementedException();
	}

	public ResponseT<ShopDataObj> searchShop(String userName, String shopName) throws Exception {
		throw new NotImplementedException();
	}


	public ResponseT<ProductDataObj> getProduct(String userName, String shopName, String productName) throws Exception {
		throw new NotImplementedException();
	}

	public ResponseT<List<ShopDataObj>> getShops(String userName, String shopName) throws Exception {
		throw new NotImplementedException();
	}

	public ResponseT<List<ProductDataObj>> basicSearch(String userName, String productName) throws Exception {
		throw new NotImplementedException();
	}

	public SResponseT<List<ProductModel>> extendedSearch(String userName, String productName, double minPrice, double maxPrice, String category) {
		ResponseT<List<ProductDataObj>> r = serviceMarket.extendedSearch(userName, productName,
				minPrice, maxPrice, category);
		if (r.isSuccess())
			return new SResponseT<>(r.getData().stream().map(ProductModel::new).collect(Collectors.toList()));
		return new SResponseT<>(r.getMessage(), r.isSuccess());
	}

	public SResponse appointShopOwner(String appointedBy, String appointee, String shopName) {
		Response r = serviceMarket.appointShopOwner(appointedBy,appointee, shopName);
		if (r.isSuccess())
			return new SResponse();
		return new SResponse(r.getMessage());
	}


	public SResponse appointShopManager(String appointedBy, String appointee, String shopName) {
			Response r = serviceMarket.appointShopManager(appointedBy,appointee, shopName);
			if (r.isSuccess())
				return new SResponse();
			return new SResponse(r.getMessage());
		}


	public SResponse removeShopOwner(String ownerName, String userToRemove, String shopName) {
		Response r = serviceMarket.removeShopOwner(ownerName,userToRemove, shopName);
		if (r.isSuccess())
			return new SResponse();
		return new SResponse(r.getMessage());
	}


	public SResponseT<MemberRoleInShopModel> changeManagerPermissions(String actor, String actOn, String shopName, List<Integer> permission) {
		ResponseT<MemberRoleInShopDataObj> r = serviceMarket.changeManagerPermissions(actor,actOn,shopName,permission);
		if (r.isSuccess())
			return new SResponseT<>(new MemberRoleInShopModel(r.getData()));
		return new SResponseT<>(r.getMessage(), r.isSuccess());	}

	public SResponseT<MemberRoleInShopModel> changeManagerAccess(String actor, String actOn, String shopName, int permission) {
		ResponseT<MemberRoleInShopDataObj> r = serviceMarket.changeManagerAccess(actor,actOn,shopName,permission);
		if (r.isSuccess())
			return new SResponseT<>(new MemberRoleInShopModel(r.getData()));
		return new SResponseT<>(r.getMessage(), r.isSuccess());	}

	public Response addManagerPermissions(String actor, String actOn, String shopName, int permission) throws Exception {
		throw new NotImplementedException();
	}


	public SResponseT<List<MemberRoleInShopModel>> getShopManagersAndPermissions(String userName, String shopName) {
		ResponseT<List<MemberRoleInShopDataObj>> r = null;
		try {
			r = serviceMarket.getShopManagersAndPermissions(userName, shopName);
		} catch (Exception e) {
			throw new RuntimeException(e);
		}
		if (r.isSuccess())
			return new SResponseT<>(r.getData().stream().map(MemberRoleInShopModel::new).collect(Collectors.toList()));
		return new SResponseT<>(r.getMessage(), r.isSuccess());
	}


	public SResponseT<List<MemberRoleInShopModel>> getShopManagersAndPermissionsByAdmin(String admin, String userName, String shopName) {
		ResponseT<List<MemberRoleInShopDataObj>> r = null;
		try {
			r = serviceMarket.getShopManagersAndPermissionsByAdmin(admin, userName, shopName);
		} catch (Exception e) {
			throw new RuntimeException(e);
		}
		if (r.isSuccess())
			return new SResponseT<>(r.getData().stream().map(MemberRoleInShopModel::new).collect(Collectors.toList()));
		return new SResponseT<>(r.getMessage(), r.isSuccess());
	}


	public SResponseT<List<ShopInvoiceModel>> getShopPurchaseHistory(String userName, String shopName) {
		try {
			return new SResponseT<>(serviceMarket.getShopPurchaseHistory(userName, shopName).getData().stream().
					map(ShopInvoiceModel::new).collect(Collectors.toList()));

		} catch (Exception exception) {
			return new SResponseT(exception.getMessage(), false);
		}
	}


	public Response removeShop(String adminName, String userName, String shopName) {
		throw new NotImplementedException();
	}


	public Response blockUser(String adminName, String userName) {
		throw new NotImplementedException();
	}


	public SResponseT<List<ShopInvoiceModel>> getShopPurchaseHistoryByAdmin(String adminName, String shopName) {
		try {
			return new SResponseT<>(serviceMarket.getShopPurchaseHistoryByAdmin(adminName, shopName).getData().stream().
					map(ShopInvoiceModel::new).collect(Collectors.toList()));

		} catch (Exception exception) {
			return new SResponseT(exception.getMessage(), false);
		}
	}


	public SResponseT<List<UserInvoiceModel>> getUserPurchaseHistoryByAdmin(String adminName, String memberName) {
		try {
			return new SResponseT<List<UserInvoiceModel>>(serviceMarket.getUserPurchaseHistoryByAdmin(adminName, memberName).getData().stream().
					map(UserInvoiceModel::new).collect(Collectors.toList()));

		} catch (Exception exception) {
			return new SResponseT(exception.getMessage(), false);
		}
	}


	public SResponseT<CartDataObj> getCart(String userName) {
		ResponseT<CartDataObj> r = serviceMarket.getCart(userName);
		if (r.isSuccess())
			return new SResponseT<>(r.getData());
		return new SResponseT<>(r.getMessage(),r.isSuccess());
	}


	public ResponseT<ShopBagDataObj> getShopBag(String userName, String shopName) {
		throw new NotImplementedException();
	}


	public SResponse addProductsToCart(String userName, String shopName, String productName, int quantity) {
		Response r = serviceMarket.addProductsToCart(userName, shopName, productName, quantity);
		if (r.isSuccess())
			return new SResponse();
		return new SResponse(r.getMessage());
	}


	public SResponse updateProductsFromCart(String userName, String shopName, String productName, int newQuantity) {
		Response res = serviceMarket.updateProductsFromCart(userName, shopName, productName, newQuantity);
		if(res.isSuccess()){
			return new SResponse();
		}
		else{
			return new SResponse(res.getMessage());
		}
	}


	public SResponse purchaseCart(String userName, PaymentDetails paymentDetails, SupplyDetails supplyDetails) {
		Response res = serviceMarket.purchaseCart(userName, paymentDetails, supplyDetails);
		if(!res.isSuccess()){
			return new SResponse(res.getMessage());
		}
		else return new SResponse();
	}

	public SResponseT<List<UserModel>> getAllUsers(String adminName) {
		ResponseT<List<UserDataObj>> r = serviceMarket.getAllUsers(adminName);
		if (r.isSuccess())
			return new SResponseT<>(r.getData().stream().map(UserModel::new).collect(Collectors.toList()));
		return new SResponseT<>(r.getMessage(), r.isSuccess());
	}

	public SResponseT<String> removeUser(String adminName, String userName) {
		ResponseT<String> r = serviceMarket.removeUser(adminName, userName);
		if (r.isSuccess())
			return new SResponseT<>(r.getData());
		return new SResponseT<>(r.getMessage(), r.isSuccess());
	}

	public SResponseT<List<ShopModel>> getAllShops(String userName) {
		ResponseT<List<ShopDataObj>> r = serviceMarket.getAllShops(userName);
		if (r.isSuccess())
			return new SResponseT<>(r.getData().stream().map(ShopModel::new).collect(Collectors.toList()));
		return new SResponseT<>(r.getMessage(), r.isSuccess());
	}

	public VaadinSession getSession(String sessionID) {
		return sessions.get(sessionID);
	}

	public SResponseT<UserModel> getUser(String userName) {
		ResponseT<UserDataObj> r = serviceMarket.getUser(userName);
		if (r.isSuccess())
			return new SResponseT<>(new UserModel(r.getData()));
		return new SResponseT<>(r.getMessage(), r.isSuccess());
	}

	public SResponseT<List<MemberRoleInShopModel>> getUserRoles(String userName) {
		ResponseT<List<MemberRoleInShopDataObj>> r = serviceMarket.getUserRoles(userName);
		if (r.isSuccess())
			return new SResponseT<>(r.getData().stream().map(MemberRoleInShopModel::new).collect(Collectors.toList()));
		return new SResponseT<>(r.getMessage(), r.isSuccess());
	}

	public SResponseT<ShopModel> getShop(String name) {
		ResponseT<ShopDataObj> r = serviceMarket.getShop(name);
		if (r.isSuccess())
			return new SResponseT<>(new ShopModel(r.getData()));
		return new SResponseT<>(r.getMessage(), r.isSuccess());

    }

	public SResponse addProduct(String userName, String shopName,String productName, String productCategory, String productDescription, Double productPrice, Integer productQuantity) {
		Response res = serviceMarket.addNewProduct(userName, shopName, productName, productCategory, productDescription, productPrice, productQuantity);
		if (!res.isSuccess()) {
			return new SResponse(res.getMessage());
		}
		return new SResponse();
	}

	public SResponseT<CategoryDiscountDataObj> addCategoryDiscount(String shopName, String userName, double discountPercentage, String category) {
		ResponseT<CategoryDiscountDataObj> r = serviceMarket.addCategoryDiscount(shopName, userName,discountPercentage,category);
		if (r.isSuccess())
			return new SResponseT<>(r.getData());
		return new SResponseT<>(r.getMessage(), r.isSuccess());
	}

	public SResponseT<ProductDiscountDataObj> addProductDiscount(String shopName, String userName, double discountPercentage, String productName){
		ResponseT<ProductDiscountDataObj> r = serviceMarket.addProductDiscount(shopName, userName,discountPercentage,productName);
		if (r.isSuccess())
			return new SResponseT<>(r.getData());
		return new SResponseT<>(r.getMessage(), r.isSuccess());
	}

	public SResponseT<ShopDiscountDataObj> addShopDiscount(String shopName, String userName, double discountPercentage) {
		ResponseT<ShopDiscountDataObj> r = serviceMarket.addShopDiscount(shopName, userName,discountPercentage);
		if (r.isSuccess())
			return new SResponseT<>(r.getData());
		return new SResponseT<>(r.getMessage(), r.isSuccess());
	}

	public SResponseT<CompoundDiscountDataObj> addSumDiscount(String shopName, String userName, List<Integer> discountsIds) {
		ResponseT<CompoundDiscountDataObj> r = serviceMarket.addSumDiscount(shopName, userName,discountsIds);
		if (r.isSuccess())
			return new SResponseT<>(r.getData());
		return new SResponseT<>(r.getMessage(), r.isSuccess());
	}

	public SResponseT<CompoundDiscountDataObj> addMaxDiscount(String shopName, String userName, List<Integer> discountsIds) {
		ResponseT<CompoundDiscountDataObj> r = serviceMarket.addMaxDiscount(shopName, userName,discountsIds);
		if (r.isSuccess())
			return new SResponseT<>(r.getData());
		return new SResponseT<>(r.getMessage(), r.isSuccess());
	}

	public SResponseT<CompoundDiscountDataObj> addXorDiscount(String shopName, String userName, List<Integer> discountsIds, String xorDecisionRule) {
		ResponseT<CompoundDiscountDataObj> r = serviceMarket.addXorDiscount(shopName, userName,discountsIds, xorDecisionRule);
		if (r.isSuccess())
			return new SResponseT<>(r.getData());
		return new SResponseT<>(r.getMessage(), r.isSuccess());
	}

	public SResponse addDiscountRule(String shopName, String userName, SimpleDiscountRuleDataObj discountRule, int discountId, String actionWithOldRule){
		Response r = serviceMarket.addDiscountRule(shopName, userName,discountRule,discountId,actionWithOldRule);
		if (r.isSuccess())
			return new SResponse();
		return new SResponse(r.getMessage());
	}

	public void setNotificationCallback(String name, NotificationCallback callback) {
		serviceMarket.setNotificationCallback(name,callback);
	}

	public void removeNotificationCallback(String name) {
		serviceMarket.removeNotificationCallback(name);
	}


	public SResponseT<List<MessageModel>> getMessages(String userName) {
		throw new NotImplementedException();
	}

	public SResponseT<List<NotificationModel>> getUserNotifications(String userName) {
		ResponseT<List<NotificationDataObj>> r = serviceMarket.getUserNotifications(userName);
		if (r.isSuccess())
			return new SResponseT<>(r.getData().stream().map(NotificationModel::new).collect(Collectors.toList()));
		return new SResponseT<>(r.getMessage(), r.isSuccess());
	}
	
	public SResponseT<DiscountPolicyDataObj> getShopDiscountPolicy(String currentUser, String shopName) {
		ResponseT<DiscountPolicyDataObj> r = serviceMarket.getShopDiscountPolicy(currentUser,shopName);
		if (r.isSuccess()){
			return new SResponseT<>(r.getData());
		}
		return new SResponseT<>(r.getMessage(), r.isSuccess());
	}

	public void removeNotification(String username, NotificationModel notification) {
		NotificationDataObj notificationData = new NotificationDataObj(notification);
		serviceMarket.removeNotification(username, notificationData);
	}
// Purchase policy


	public SResponse addAgePurchasePolicy(String userName, String shopName,boolean isProduct, String toConstraint,boolean positive,int startAge, int endAge){

		Response res = serviceMarket.addAgePurchasePolicy(userName, shopName, isProduct, toConstraint, positive, startAge, endAge);
		if(res.isSuccess())return new SResponse();
		else return new SResponse(res.getMessage());
	}

	public SResponse addQuantityPurchasePolicy(String userName, String shopName,boolean isProduct, String toConstraint,boolean positive,int minQuantity, int maxQuantity){

		Response res = serviceMarket.addQuantityPurchasePolicy(userName, shopName, isProduct, toConstraint, positive, minQuantity, maxQuantity);
		if(res.isSuccess())return new SResponse();
		else return new SResponse(res.getMessage());
	}

	public SResponse addDatePurchasePolicy(String userName, String shopName, boolean isProduct, String toConstraint, boolean positive, LocalDate startDate, LocalDate endDate) {

		Response res = serviceMarket.addDatePurchasePolicy(userName, shopName, isProduct, toConstraint, positive, startDate, endDate);
		if(res.isSuccess())return new SResponse();
		else return new SResponse(res.getMessage());
	}

	public SResponse addTimePurchasePolicy(String userName, String shopName,boolean isProduct, String toConstraint,boolean positive,int startHour, int endHour) {

		Response res = serviceMarket.addTimePurchasePolicy(userName, shopName, isProduct, toConstraint, positive, startHour, endHour);
		if(res.isSuccess())return new SResponse();
		else return new SResponse(res.getMessage());
	}

	public SResponse addOrPurchasePolicy(String userName, String shopName,int pid1, int pid2){

		Response res = serviceMarket.addOrPurchasePolicy(userName, shopName, pid1, pid2);
		if(res.isSuccess())return new SResponse();
		else return new SResponse(res.getMessage());
	}
	public SResponse addAndPurchasePolicy(String userName, String shopName,int pid1, int pid2){
		Response res = serviceMarket.addAndPurchasePolicy(userName, shopName, pid1, pid2);
		if(res.isSuccess())return new SResponse();
		else return new SResponse(res.getMessage());
	}
	public SResponse addIfPurchasePolicy(String userName, String shopName,int pid1, int pid2){

		Response res = serviceMarket.addIfPurchasePolicy(userName, shopName, pid1, pid2);
		if(res.isSuccess())return new SResponse();
		else return new SResponse(res.getMessage());
	}
	public SResponseT<Collection<PurchasePolicyDataObj>> getAllPurchasePolicies(String userName, String shopName){
		ResponseT<Collection<PurchasePolicyDataObj>> res = serviceMarket.getAllPurchasePolicies(userName, shopName);
		if(res.isSuccess())return new SResponseT<>(res.getData());
		else return new SResponseT<>(res.getMessage(),false);
	}

	// if policy argument is -1 it means to simply remove the current policy, without choosing a different one.
	public SResponse setActivePurchasePolicy(String userName, String shopName,int policyId){
		Response res = serviceMarket.setActivePurchasePolicy(userName,shopName,policyId);
		if(res.isSuccess())return new SResponse();
		else return new SResponse(res.getMessage());
	}
	public SResponseT<Integer> getActivePurchasePolicyId(String userName, String shopName){
		ResponseT<Integer> res = serviceMarket.getActivePurchasePolicyId(userName,shopName);
		if(res.isSuccess())return new SResponseT<Integer>(res.getData());
		else return new SResponseT<>(res.getMessage(),false);
	}
	
	public SResponse resetDiscountRule(String shopName, String userName, DiscountDataObj discountDataObj) {
		Response r = serviceMarket.resetDiscountRule(shopName,userName,discountDataObj.getDiscountId());
		if (r.isSuccess())
			return new SResponse();
		return new SResponse(r.getMessage());
	}

	public SResponse removeDiscount(String shopName, String userName, int discountId) {
		Response r = serviceMarket.removeDiscount(shopName,userName,discountId);
		if(r.isSuccess())
			return new SResponse();
		return new SResponse(r.getMessage());
	}

	public void ReadUserNotifications(String username) {
		serviceMarket.ReadUserNotifications(username);
	}
  
	//Bid functions
	public SResponse createBidOffer (String userName, String productName, String shopName, double bidPrice)  {
		Response res = serviceMarket.createBidOffer(userName, productName, shopName, bidPrice);
		if(res.isSuccess()){
			return new SResponse();
		}else{
			return new SResponse(res.getMessage());
		}
	}
	public SResponseT<Collection<BidDataObj>> getPendingBids(String userName, String shopName) {
		ResponseT<Collection<BidDataObj>> res = serviceMarket.getPendingBids(userName, shopName);
		if(res.isSuccess())
			return new SResponseT<Collection<BidDataObj>>(res.getData());
		else
			return new SResponseT<Collection<BidDataObj>>(res.getMessage(),false);
	}
	public SResponseT<Collection<BidDataObj>> getApprovedBids(String userName,String shopName)  {
		ResponseT<Collection<BidDataObj>> res = serviceMarket.getApprovedBids(userName, shopName);
		if(res.isSuccess())
			return new SResponseT<Collection<BidDataObj>>(res.getData());
		else
			return new SResponseT<Collection<BidDataObj>>(res.getMessage(),false);
	}
	public SResponseT<Collection<BidDataObj>> getRejectedBids(String userName,String shopName)  {
		ResponseT<Collection<BidDataObj>> res = serviceMarket.getRejectedBids(userName, shopName);
		if(res.isSuccess())
			return new SResponseT<Collection<BidDataObj>>(res.getData());
		else
			return new SResponseT<Collection<BidDataObj>>(res.getMessage(),false);
	}
	public SResponse approveBid(String userName, int bidId){
		Response res = serviceMarket.approveBid(userName, bidId);
		if(res.isSuccess()){
			return new SResponse();
		}else{
			return new SResponse(res.getMessage());
		}
	}
	public SResponse rejectBid(String userName, int bidId)  {
		Response res = serviceMarket.rejectBid(userName, bidId);
		if(res.isSuccess()){
			return new SResponse();
		}else{
			return new SResponse(res.getMessage());
		}
	}
	public SResponseT<FinalCartPriceDataObj> calcCartPriceAfterDiscount(String userName){
		ResponseT<FinalCartPriceDataObj> res = serviceMarket.calcCartPriceAfterDiscount(userName);
		if(res.isSuccess())
			return new SResponseT<>(res.getData());
		else return new SResponseT<>(res.getMessage(),false);
	}

}
