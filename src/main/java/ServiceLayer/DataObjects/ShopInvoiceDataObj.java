package ServiceLayer.DataObjects;

import BusinessLayer.Purchases.ShopInvoice;
import BusinessLayer.Shops.Product;

import java.util.ArrayList;
import java.util.Collection;
import java.util.HashMap;
import java.util.List;
import java.util.stream.Collectors;

public class ShopInvoiceDataObj extends InvoiceDataObj {

//	private HashMap<product name, product fields> productInfoInShop;
	private HashMap<String, List<String>> productInfoInShop;
	private String shopName;

	public ShopInvoiceDataObj(String userName, String paymentMethod, String deliveryMethod, String shopName) {
		super(userName, paymentMethod, deliveryMethod);
		productInfoInShop = new HashMap<>();
		this.shopName = shopName;
	}

	public ShopInvoiceDataObj(ShopInvoice shopInvoice) {
		super(shopInvoice);
		productInfoInShop = new HashMap<>();
		this.shopName = shopInvoice.getShopName();
		for (String productName : productInfoInShop.keySet()) {
			productInfoInShop.put(productName, new ArrayList<>());
			for (String s : productInfoInShop.get(productName))
				productInfoInShop.get(productName).add(s);
		}
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