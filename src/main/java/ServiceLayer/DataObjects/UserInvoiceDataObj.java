package ServiceLayer.DataObjects;

import BusinessLayer.Purchases.ProductInfo;
import BusinessLayer.Purchases.ShopInfo;
import BusinessLayer.Purchases.UserInvoice;
import BusinessLayer.Shops.Product;

import java.util.*;
import java.util.stream.Collectors;

public class UserInvoiceDataObj extends InvoiceDataObj {

//	private HashMap<shop name, HashMap<product name, product fields>> productInfoInShop;
	private HashMap<String, ShopInfoDataObj> productInfoInShop;

	public UserInvoiceDataObj(String userName, String paymentMethod, String deliveryMethod) {
		super(userName, paymentMethod, deliveryMethod);
		productInfoInShop = new HashMap<>();
	}

	public UserInvoiceDataObj(UserInvoice userInvoice) {
		super(userInvoice);
		productInfoInShop = new HashMap<>();
		Map<String, ShopInfo> productInfoInShopB = userInvoice.getProductInfoInShop();
		for (ShopInfo shopInfo : productInfoInShopB.values()){
			productInfoInShop.put(shopInfo.getShopName(), new ShopInfoDataObj(shopInfo));
		}
	}

	public HashMap<String, ShopInfoDataObj> getProductInfoInShop() {
		return productInfoInShop;
	}
}