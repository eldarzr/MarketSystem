package FrontEnd.Model;

import BusinessLayer.Purchases.ProductInfo;
import BusinessLayer.Purchases.ShopInvoice;
import ServiceLayer.DataObjects.InvoiceDataObj;
import ServiceLayer.DataObjects.ProductInfoDataObj;
import ServiceLayer.DataObjects.ShopInvoiceDataObj;

import java.util.ArrayList;
import java.util.Collection;
import java.util.HashMap;
import java.util.List;
import java.util.stream.Collectors;

public class ShopInvoiceModel extends InvoiceModel {

//	private HashMap<product name, product fields> productInfoInShop;
private List<ProductInfoModel> productInfoInShop;
	private String shopName;

	public ShopInvoiceModel(String userName, String paymentMethod, String deliveryMethod, String shopName) {
		super(userName, paymentMethod, deliveryMethod);
		productInfoInShop = new ArrayList<>();
		this.shopName = shopName;
	}

	public ShopInvoiceModel(ShopInvoiceDataObj shopInvoice) {
		super(shopInvoice);
		productInfoInShop = new ArrayList<>();
		this.shopName = shopInvoice.getShopName();
		List<ProductInfoDataObj> productInfoInShopB = shopInvoice.getProductInfoInShop();
		for (ProductInfoDataObj productInfo : productInfoInShopB) {
			productInfoInShop.add(new ProductInfoModel(productInfo));
		}
	}

	public Collection<String> getProducts() {
			return productInfoInShop.stream().map(Object::toString).collect(Collectors.toList());
	}

	public List<ProductInfoModel> getProductInfoInShop() {
		return productInfoInShop;
	}

	public String getShopName() {
		return shopName;
	}

	public double totalOrigPrice(){
		return productInfoInShop.stream().map(prod -> prod.price).reduce(0.0, Double::sum);
	}

	public double totalNewPrice(){
		return productInfoInShop.stream().map(prod -> prod.priceAfterDiscount).reduce(0.0, Double::sum);
	}
}