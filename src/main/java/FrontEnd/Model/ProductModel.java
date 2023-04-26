package FrontEnd.Model;

import BusinessLayer.Shops.ProductIntr;
import BusinessLayer.Shops.ShopProduct;
import ServiceLayer.DataObjects.ProductDataObj;

public class ProductModel {

	public String name;
	public String category;
	public String description;
	public double price;
	private int quantity;
	private String shopName;

	public ProductModel(String name, String category, String description, double price, String shopName) {
		this.name = name;
		this.category = category;
		this.description = description;
		this.price = price;
		this.quantity = 0;
		this.shopName = shopName;
	}

	public ProductModel(ProductDataObj product) {
		this.name = product.getName();
		this.category = product.getCategory();
		this.description = product.getDescription();
		this.price = product.getPrice();
		this.quantity = product.getQuantity();
		this.shopName = product.getShopName();
	}

	public String getName() {
		return name;
	}

	public String getCategory() {
		return category;
	}

	public String getDescription() {
		return description;
	}

	public double getPrice() {
		return price;
	}

	public int getQuantity() {
		return quantity;
	}

	public String getShopName() {
		return shopName;
	}
}
