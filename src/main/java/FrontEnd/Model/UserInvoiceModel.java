package FrontEnd.Model;

import BusinessLayer.Purchases.ProductInfo;
import BusinessLayer.Purchases.ShopInfo;
import ServiceLayer.DataObjects.ProductInfoDataObj;
import ServiceLayer.DataObjects.ShopInfoDataObj;
import ServiceLayer.DataObjects.UserInvoiceDataObj;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.Collection;
import java.util.HashMap;
import java.util.List;
import java.util.stream.Collectors;

public class UserInvoiceModel extends InvoiceModel implements Serializable {

	private HashMap<String, ShopInfoModel> productInfoInShop;

	public UserInvoiceModel(String userName, String paymentMethod, String deliveryMethod) {
		super(userName, paymentMethod, deliveryMethod);
		productInfoInShop = new HashMap<>();
	}

	public UserInvoiceModel(UserInvoiceDataObj userInvoice) {
		super(userInvoice);
		productInfoInShop = new HashMap<>();
		HashMap<String, ShopInfoDataObj> productInfoInShopB = userInvoice.getProductInfoInShop();
		for (ShopInfoDataObj shopInfo : productInfoInShopB.values()){
			productInfoInShop.put(shopInfo.getShopName(), new ShopInfoModel(shopInfo));
		}
	}

	public HashMap<String, ShopInfoModel> getProductInfoInShop() {
		return productInfoInShop;
	}

	public double getPriceBeforeDiscount() {
		return productInfoInShop.values().stream().map(ShopInfoModel::getPriceBeforeDiscount).reduce(0.0, Double::sum);
	}

	public double getPriceAfterDiscount() {
		return productInfoInShop.values().stream().map(ShopInfoModel::getPriceAfterDiscount).reduce(0.0, Double::sum);
	}

}