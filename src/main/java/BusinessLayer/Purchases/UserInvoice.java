package BusinessLayer.Purchases;

import BusinessLayer.Shops.Product;

import java.util.ArrayList;
import java.util.Collection;
import java.util.HashMap;
import java.util.List;
import java.util.concurrent.ConcurrentHashMap;
import java.util.stream.Collectors;

public class UserInvoice extends Invoice {

//	private HashMap<shop name, HashMap<product name, product fields>> productInfoInShop;
	private HashMap<String, HashMap<String, List<String>>> productInfoInShop;

	public UserInvoice(String userName, String paymentMethod, String deliveryMethod) {
		super(userName, paymentMethod, deliveryMethod);
		productInfoInShop = new HashMap<>();
	}

	public void addProduct(String shopName, Product product, int quantity){
		if (!productInfoInShop.containsKey(shopName))
			productInfoInShop.put(shopName, new HashMap<>());
		if (!productInfoInShop.get(shopName).containsKey(product.getName()))
			productInfoInShop.get(shopName).put(product.getName(), new ArrayList<>());
		addProductToList(shopName, product, quantity);
	}



	protected void addProductField(String shopName, String productName, String fieldValue, int fieldIndex) {
		productInfoInShop.get(shopName).get(productName).add(fieldIndex, fieldValue);
	}

	@Override
	public Collection<String> getProducts() {
		List<String> toRet = new ArrayList<>();
		for (HashMap<String, List<String>> maps : productInfoInShop.values())
			for (List<String> list : maps.values())
				toRet.add(list.toString());
		return toRet;
	}

	@Override
	public int getQuantityOfProduct(String productName) throws Exception {
		return Integer.parseInt(String.valueOf(productInfoInShop.values().stream().filter(hm -> hm.containsKey(productName)).collect(Collectors.toList()).
				get(0).get(PRODUCT_QUANTITY)));
	}

	public HashMap<String, HashMap<String, List<String>>> getProductInfoInShop() {
		return productInfoInShop;
	}
}