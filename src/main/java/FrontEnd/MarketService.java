package FrontEnd;

import BusinessLayer.ExternalSystemsAdapters.PaymentDetails;
import BusinessLayer.ExternalSystemsAdapters.SupplyDetails;
import FrontEnd.Model.UserModel;
import ServiceLayer.DataObjects.*;
import ServiceLayer.Response;
import ServiceLayer.ResponseT;
import ServiceLayer.ServiceMarket;
import org.apache.commons.lang3.NotImplementedException;

import java.util.Collection;
import java.util.List;
import java.util.stream.Collectors;

public class MarketService {

	ServiceMarket serviceMarket;

	public MarketService() {
		serviceMarket = new ServiceMarket();
	}

	public Response init() {
		try {
			serviceMarket.init();
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

	public SResponseT<UserModel> register(String userName, String email, String password) {
		ResponseT<UserDataObj> r = serviceMarket.register(userName, email, password);
		if (r.isSuccess())
			return new SResponseT<>(new UserModel(r.getData()));
		return new SResponseT<>(r.getMessage(), r.isSuccess());
	}

	public SResponseT<UserModel> login(String userName, String password) {
		ResponseT<UserDataObj> r = serviceMarket.login("", userName, password);
		if (r.isSuccess())
			return new SResponseT<>(new UserModel(r.getData()));
		return new SResponseT<>(r.getMessage(), r.isSuccess());
	}

	public ResponseT<String> startSession() {
		throw new NotImplementedException();
	}


	public Response closeSession(String userName) {
		try {
			serviceMarket.closeSession(userName);
		} catch (Exception exception) {
			return new Response(exception.getMessage());
		}
		return new Response();
	}

	public Response logout(String userName) {
		throw new NotImplementedException();
	}

	public ResponseT<Collection<UserInvoiceDataObj>> getUserPurchaseHistory(String userName) {
		throw new NotImplementedException();
	}

	public Response createShop(String userName, String shopName) throws Exception {
		throw new NotImplementedException();
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

	public ResponseT<List<ProductDataObj>> extendedSearch(String userName, String productName, double minPrice, double maxPrice, String category) throws Exception {
		throw new NotImplementedException();
	}

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


	public ResponseT<CartDataObj> getCart(String userName) {
		throw new NotImplementedException();
	}


	public ResponseT<ShopBagDataObj> getShopBag(String userName, String shopName) {
		throw new NotImplementedException();
	}


	public Response addProductsToCart(String userName, String shopName, String productName, int quantity) {
		throw new NotImplementedException();
	}


	public Response updateProductsFromCart(String userName, String shopName, String productName, int newQuantity) {
		throw new NotImplementedException();
	}


	public Response purchaseCart(String userName, PaymentDetails paymentDetails, SupplyDetails supplyDetails) {
		throw new NotImplementedException();
	}

	// custom service methods for your application
}
