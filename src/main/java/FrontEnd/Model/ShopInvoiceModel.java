package FrontEnd.Model;

import BusinessLayer.Purchases.ShopInvoice;
import ServiceLayer.DataObjects.InvoiceDataObj;
import ServiceLayer.DataObjects.ShopInvoiceDataObj;

import java.util.ArrayList;
import java.util.Collection;
import java.util.HashMap;
import java.util.List;
import java.util.stream.Collectors;

public class ShopInvoiceModel extends InvoiceModel {

//	private HashMap<product name, product fields> productInfoInShop;
	private HashMap<String, List<String>> productInfoInShop;
	private String shopName;

	public ShopInvoiceModel(String userName, String paymentMethod, String deliveryMethod, String shopName) {
		super(userName, paymentMethod, deliveryMethod);
		productInfoInShop = new HashMap<>();
		this.shopName = shopName;
	}

	public ShopInvoiceModel(ShopInvoiceDataObj shopInvoice) {
		super(shopInvoice);
		productInfoInShop = new HashMap<>();
		this.shopName = shopInvoice.getShopName();
		HashMap<String, List<String>> productInfoInShopS = shopInvoice.getProductInfoInShop();
		for (String productName : productInfoInShopS.keySet()) {
			productInfoInShop.put(productName, new ArrayList<>());
			for (String s : productInfoInShopS.get(productName))
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