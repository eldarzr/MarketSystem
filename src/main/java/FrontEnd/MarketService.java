package FrontEnd;

import BusinessLayer.ExternalSystemsAdapters.PaymentDetails;
import BusinessLayer.ExternalSystemsAdapters.SupplyDetails;
import BusinessLayer.Shops.Shop;
import FrontEnd.Model.*;
import ServiceLayer.DataObjects.*;
import ServiceLayer.Response;
import ServiceLayer.ResponseT;
import ServiceLayer.ServiceMarket;
import com.vaadin.flow.server.VaadinService;
import com.vaadin.flow.server.VaadinSession;
import org.apache.commons.lang3.NotImplementedException;

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
					instance.init();
				}
			}
		}
		return instance;
	}

	private MarketService() {
		serviceMarket = new ServiceMarket();
	}

	public Response init() {
		try {
			serviceMarket.init();
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

	public ResponseT<Collection<UserInvoiceDataObj>> getUserPurchaseHistory(String userName) {
		throw new NotImplementedException();
	}

	public SResponseT<ShopModel> createShop(String userName, String shopName) {
		ResponseT<ShopDataObj>res = null;
		try {
			res = serviceMarket.createShop(userName,shopName);
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

	public Response closeShop(String userName, String shopName) throws Exception {
		throw new NotImplementedException();
	}

	public Response removeProduct(String userName, String shopName, String productName) throws Exception {
		throw new NotImplementedException();
	}

	public Response updateProductName(String userName, String shopName, String productOldName, String productNewName) throws Exception {
		throw new NotImplementedException();
	}

	public Response updateProductDesc(String userName, String shopName, String productName, String productNewDesc) throws Exception {
		throw new NotImplementedException();
	}

	public Response updateProductPrice(String userName, String shopName, String productName, double price) throws Exception {
		throw new NotImplementedException();
	}

	public Response updateProductQuantity(String userName, String shopName, String productName, int quantity) throws Exception {
		throw new NotImplementedException();
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

	public SResponseT<List<ProductModel>> extendedSearch(String userName, String productName, double minPrice, double maxPrice, String category){
		ResponseT<List<ProductDataObj>> r = serviceMarket.extendedSearch(userName, productName,
				minPrice, maxPrice, category);
		if (r.isSuccess())
			return new SResponseT<>(r.getData().stream().map(ProductModel::new).collect(Collectors.toList()));
		return new SResponseT<>(r.getMessage(), r.isSuccess());	}

	public Response appointShopOwner(String appointedBy, String appointee, String shopName) throws Exception {
		throw new NotImplementedException();
	}


	public Response appointShopManager(String appointedBy, String appointee, String shopName) throws Exception {
		throw new NotImplementedException();
	}


	public Response removeShopManager(String managerName, String userToRemove, String shopName) {
		throw new NotImplementedException();
	}


	public ResponseT<MemberRoleInShopDataObj> changeManagerPermissions(String actor, String actOn, String shopName, List<Integer> permission) throws Exception {
		throw new NotImplementedException();
	}


	public Response addManagerPermissions(String actor, String actOn, String shopName, int permission) throws Exception {
		throw new NotImplementedException();
	}


	public ResponseT<Collection<MemberRoleInShopDataObj>> getShopManagersAndPermissions(String userName, String shopName) throws Exception {
		throw new NotImplementedException();
	}


	public ResponseT<Collection<ShopInvoiceDataObj>> getShopPurchaseHistory(String userName, String shopName) {
		throw new NotImplementedException();
	}


	public Response removeShop(String adminName, String userName, String shopName) {
		throw new NotImplementedException();
	}


	public Response blockUser(String adminName, String userName) {
		throw new NotImplementedException();
	}


	public ResponseT<Collection<ShopInvoiceDataObj>> getShopPurchaseHistoryByAdmin(String adminName, String shopName) {
		throw new NotImplementedException();
	}


	public ResponseT<Collection<UserInvoiceDataObj>> getUserPurchaseHistoryByAdmin(String adminName, String memberName) {
		throw new NotImplementedException();
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
		return new SResponseT<>(r.getMessage(), r.isSuccess());	}

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

	public SResponseT<List<MessageModel>> getMessages(String userName) {
		throw new NotImplementedException();
	}
}
