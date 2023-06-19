package FrontEnd.Model;

import BusinessLayer.Purchases.ProductInfo;
import BusinessLayer.Purchases.ShopInfo;
import ServiceLayer.DataObjects.ProductInfoDataObj;
import ServiceLayer.DataObjects.ShopInfoDataObj;

import java.util.ArrayList;
import java.util.List;

public class ShopInfoModel {

	private Long id;
	private String shopName;
	private List<ProductInfoModel> productInfos;

	public ShopInfoModel(ShopInfoDataObj shopInfo) {
		this.shopName = shopInfo.getShopName();
		this.productInfos = new ArrayList<>();
		for (ProductInfoDataObj productInfo : shopInfo.getProductInfos())
			productInfos.add(new ProductInfoModel(productInfo));
	}

	public Long getId() {
		return id;
	}

	public String getShopName() {
		return shopName;
	}

	public List<ProductInfoModel> getProductInfos() {
		return productInfos;
	}

	public double getPriceBeforeDiscount() {
		return productInfos.stream().map(prod -> prod.price).reduce(0.0, Double::sum);
	}

	public double getPriceAfterDiscount() {
		return productInfos.stream().map(prod -> prod.priceAfterDiscount).reduce(0.0, Double::sum);
	}
}
