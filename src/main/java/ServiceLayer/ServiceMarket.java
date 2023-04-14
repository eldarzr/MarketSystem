package ServiceLayer;

import BusinessLayer.Market;
import BusinessLayer.MemberRoleInShop;
import BusinessLayer.Purchases.Cart;
import BusinessLayer.Purchases.PurchaseIntr;
import BusinessLayer.Purchases.ShopBag;
import BusinessLayer.Shops.ProductIntr;
import BusinessLayer.Shops.Shop;

import java.util.Collection;
import java.util.List;

public class ServiceMarket {

	private final Market market;

	public ServiceMarket() {
		this.market = new Market();
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
			return new ResponseT(exception.getMessage());
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

	public Response register(String userName, String email, String password) throws Exception {
		try {
			market.register(userName, email, password);
		} catch (Exception exception) {
			return new Response(exception.getMessage());
		}
		return new Response();
	}

	public Response login(String userName, String password) {
		try {
			market.login(userName, password);
		} catch (Exception exception) {
			return new Response(exception.getMessage());
		}
		return new Response();
	}

	public Response logout(String userName) {
		try {
			market.logout(userName);
		} catch (Exception exception) {
			return new Response(exception.getMessage());
		}
		return new Response();
	}

	public Collection<PurchaseIntr> getUserPurchaseHistory(String userName) {
		return market.getUserPurchaseHistory(userName);
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

	public Response addNewProduct(String userName, String shopName, String productName, String category, String desc, double price) throws Exception {
		try {
			market.addNewProduct(userName, shopName, productName, category, desc, price);
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

	public ResponseT<Shop> searchShop(String userName, String shopName) throws Exception {
		try {
		return new ResponseT<>(market.searchShop(userName, shopName));

		} catch (Exception exception) {
			return new ResponseT(exception.getMessage());
		}
	}


	public ResponseT<ProductIntr> getProduct(String userName, String shopName, String productName) throws Exception {
		try {
		return null;

		} catch (Exception exception) {
			return new ResponseT(exception.getMessage());
		}
	}

	public ResponseT<List<Shop>> getShops(String userName, String shopName) throws Exception {
		try {
		return new ResponseT<>(market.getShops(userName, shopName));

		} catch (Exception exception) {
			return new ResponseT(exception.getMessage());
		}
	}

	public ResponseT<List<ProductIntr>> basicSearch(String userName, String productName) throws Exception {
		try {
		return new ResponseT<>(market.basicSearch(userName, productName));

		} catch (Exception exception) {
			return new ResponseT(exception.getMessage());
		}
	}

	public ResponseT<List<ProductIntr>> extendedSearch(String userName, String productName, double minPrice, double maxPrice, String category) throws Exception {
		try {
		return new ResponseT<>(market.extendedSearch(userName, productName, minPrice, maxPrice, category));

		} catch (Exception exception) {
			return new ResponseT(exception.getMessage());
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


	public ResponseT<MemberRoleInShop> changeManagerPermissions(String actor, String actOn, String shopName, List<Integer> permission) throws Exception {
		try {
		return new ResponseT<>(market.changeManagerPermissions(actor, actOn, shopName, permission));

		} catch (Exception exception) {
			return new ResponseT(exception.getMessage());
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


	public ResponseT<Collection<MemberRoleInShop>> getShopManagersAndPermissions(String userName, String shopName) throws Exception {
		try {
		return new ResponseT<>(market.getShopManagersAndPermissions(userName, shopName));

		} catch (Exception exception) {
			return new ResponseT(exception.getMessage());
		}
	}


	public ResponseT<Collection<PurchaseIntr>> getShopPurchaseHistory(String userName, String shopName) {
		try {
		return new ResponseT<>(market.getShopPurchaseHistory(userName, shopName));

		} catch (Exception exception) {
			return new ResponseT(exception.getMessage());
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


	public ResponseT<Collection<PurchaseIntr>> getShopPurchaseHistoryByAdmin(String adminName, String shopName) {
		try {
		return new ResponseT<>(market.getShopPurchaseHistoryByAdmin(adminName, shopName));

		} catch (Exception exception) {
			return new ResponseT(exception.getMessage());
		}
	}


	public ResponseT<Collection<PurchaseIntr>> getUserPurchaseHistoryByAdmin(String adminName, String memberName) {
		try {
		return new ResponseT<>(market.getUserPurchaseHistoryByAdmin(adminName, memberName));

		} catch (Exception exception) {
			return new ResponseT(exception.getMessage());
		}
	}


	public ResponseT<Cart> getCart(String userName) {
		try {
		return new ResponseT<>(market.getCart(userName));

		} catch (Exception exception) {
			return new ResponseT(exception.getMessage());
		}
	}


	public ResponseT<ShopBag> getShopBag(String userName, String shopName) {
		try {
		return new ResponseT<>(market.getShopBag(userName, shopName));

		} catch (Exception exception) {
			return new ResponseT(exception.getMessage());
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
			market.updateProductsFromCart(userName, shopName, productName, newQuantity);
		} catch (Exception exception) {
			return new Response(exception.getMessage());
		}
		return new Response();
	}


	public Response purchaseCart(String userName) {
		try {
			market.purchaseCart(userName);
		} catch (Exception exception) {
			return new Response(exception.getMessage());
		}
		return new Response();
	}

	// custom service methods for your application
}
