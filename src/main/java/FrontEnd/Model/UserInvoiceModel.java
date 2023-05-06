package FrontEnd.Model;

import ServiceLayer.DataObjects.UserInvoiceDataObj;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.Collection;
import java.util.HashMap;
import java.util.List;
import java.util.stream.Collectors;

public class UserInvoiceModel extends InvoiceModel implements Serializable {

	private HashMap<String, HashMap<String, List<String>>> productInfoInShop;

	public UserInvoiceModel(String userName, String paymentMethod, String deliveryMethod) {
		super(userName, paymentMethod, deliveryMethod);
		productInfoInShop = new HashMap<>();
	}

	public UserInvoiceModel(UserInvoiceDataObj userInvoice) {
		super(userInvoice);
		productInfoInShop = new HashMap<>();
		HashMap<String, HashMap<String, List<String>>> productInfoInShopS = userInvoice.getProductInfoInShop();
		for (String shopName : productInfoInShopS.keySet()){
			productInfoInShop.put(shopName, new HashMap<>());
			HashMap<String, List<String>> productInfo = productInfoInShopS.get(shopName);
			for (String productName : productInfo.keySet()){
				productInfoInShop.get(shopName).put(productName, new ArrayList<>());
				for (String s : productInfo.get(productName))
					productInfoInShop.get(shopName).get(productName).add(s);
			}
		}
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
		return Integer.parseInt(String.valueOf(productInfoInShop.values().stream().
				filter(hm -> hm.containsKey(productName)).collect(Collectors.toList()).
				get(0).get(PRODUCT_QUANTITY)));
	}

	public HashMap<String, HashMap<String, List<String>>> getProductInfoInShop() {
		return productInfoInShop;
	}
}