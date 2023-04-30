package ServiceLayer;

import BusinessLayer.ExternalSystemsAdapters.PaymentDetails;
import BusinessLayer.ExternalSystemsAdapters.SupplyDetails;
import BusinessLayer.Market;
import ServiceLayer.DataObjects.*;

import java.util.Collection;
import java.util.List;
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

	public Response createShop(String userName, String shopName) throws Exception {
		try {
			market.createShop(userName, shopName);
		} catch (Exception exception) {
			return new Response(exception.getMessage());
		}
		return new Response();
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

	public Response appointShopOwner(String appointedBy, String appointee, String shopName) throws Exception {
		try {
			market.appointShopOwner(appointedBy, appointee, shopName);
		} catch (Exception exception) {
			return new Response(exception.getMessage());
		}
		return new Response();
	}


	public Response appointShopManager(String appointedBy, String appointee, String shopName) throws Exception {
		try {
			market.appointShopManager(appointedBy, appointee, shopName);
		} catch (Exception exception) {
			return new Response(exception.getMessage());
		}
		return new Response();
	}


	public Response removeShopManager(String managerName, String userToRemove, String shopName) {
		try {
			market.removeShopManager(managerName, userToRemove, shopName);
		} catch (Exception exception) {
			return new Response(exception.getMessage());
		}
		return new Response();
	}


	public ResponseT<MemberRoleInShopDataObj> changeManagerPermissions(String actor, String actOn, String shopName, List<Integer> permission) throws Exception {
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


	public ResponseT<Collection<MemberRoleInShopDataObj>> getShopManagersAndPermissions(String userName, String shopName) throws Exception {
		try {
		return new ResponseT<>(market.getShopManagersAndPermissions(userName, shopName).stream()
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


	public ResponseT<Collection<UserInvoiceDataObj>> getUserPurchaseHistoryByAdmin(String adminName, String memberName) {
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
			return new ResponseT<>(exception.getMessage());
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
	// custom service methods for your application
}
