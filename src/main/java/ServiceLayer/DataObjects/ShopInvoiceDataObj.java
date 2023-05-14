package ServiceLayer.DataObjects;

import BusinessLayer.Purchases.ProductInfo;
import BusinessLayer.Purchases.ShopInvoice;
import BusinessLayer.Shops.Product;

import java.util.ArrayList;
import java.util.Collection;
import java.util.HashMap;
import java.util.List;
import java.util.stream.Collectors;

public class ShopInvoiceDataObj extends InvoiceDataObj {

//	private HashMap<product name, product fields> productInfoInShop;
	private List<ProductInfoDataObj> productInfoInShop;
	private String shopName;

	public ShopInvoiceDataObj(String userName, String paymentMethod, String deliveryMethod, String shopName) {
		super(userName, paymentMethod, deliveryMethod);
		productInfoInShop = new ArrayList<>();
		this.shopName = shopName;
	}

	public ShopInvoiceDataObj(ShopInvoice shopInvoice) {
		super(shopInvoice);
		productInfoInShop = new ArrayList<>();
		this.shopName = shopInvoice.getShopName();
		List<ProductInfo> productInfoInShopB = shopInvoice.getProductInfoInShop();
		for (ProductInfo productInfo : productInfoInShopB) {
			productInfoInShop.add(new ProductInfoDataObj(productInfo));
		}
	}

	public Collection<String> getProducts() {
		return productInfoInShop.stream().map(Object::toString).collect(Collectors.toList());
	}

	public List<ProductInfoDataObj> getProductInfoInShop() {
		return productInfoInShop;
	}

	public String getShopName() {
		return shopName;
	}
}