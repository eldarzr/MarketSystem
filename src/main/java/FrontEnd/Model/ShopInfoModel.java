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
}
