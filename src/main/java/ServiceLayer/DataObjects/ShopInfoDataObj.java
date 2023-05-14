package ServiceLayer.DataObjects;

import BusinessLayer.Purchases.ProductInfo;
import BusinessLayer.Purchases.ShopInfo;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

public class ShopInfoDataObj {

	private Long id;
	private String shopName;
	private List<ProductInfoDataObj> productInfos;

	public ShopInfoDataObj(ShopInfo shopInfo) {
		this.shopName = shopInfo.getShopName();
		this.productInfos = new ArrayList<>();
		for (ProductInfo productInfo : shopInfo.getProductInfos())
			productInfos.add(new ProductInfoDataObj(productInfo));
	}

	public Long getId() {
		return id;
	}

	public String getShopName() {
		return shopName;
	}

	public List<ProductInfoDataObj> getProductInfos() {
		return productInfos;
	}
}
