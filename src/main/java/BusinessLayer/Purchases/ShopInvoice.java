package BusinessLayer.Purchases;

import BusinessLayer.Shops.Product;

import java.util.ArrayList;
import java.util.Collection;
import java.util.HashMap;
import java.util.List;
import java.util.stream.Collectors;

public class ShopInvoice extends Invoice {

//	private HashMap<product name, product fields> productInfoInShop;
	private HashMap<String, List<String>> productInfoInShop;
	private String shopName;

	public ShopInvoice(String userName, String paymentMethod, String deliveryMethod, String shopName) {
		super(userName, paymentMethod, deliveryMethod);
		productInfoInShop = new HashMap<>();
		this.shopName = shopName;
	}

	public void addProduct(String shopName, Product product, int quantity){
		if (!productInfoInShop.containsKey(shopName))
			productInfoInShop.put(product.getName(), new ArrayList<>());
		addProductToList(shopName, product, quantity);
	}

	protected void addProductField(String shopName, String productName, String fieldValue, int fieldIndex) {
		productInfoInShop.get(productName).add(fieldIndex, fieldValue);
	}

	@Override
	public Collection<String> getProducts() {
		return productInfoInShop.values().stream().map(prod -> prod.toString()).collect(Collectors.toList());
	}

	@Override
	public int getQuantityOfProduct(String productName) throws Exception {
		if (!productInfoInShop.containsKey(productName))
			throw new Exception(String.format("there is no %s product in this purchase", productName));
		return Integer.valueOf(productInfoInShop.get(productName).get(PRODUCT_QUANTITY));
	}

	public HashMap<String, List<String>> getProductInfoInShop() {
		return productInfoInShop;
	}

	public String getShopName() {
		return shopName;
	}
}