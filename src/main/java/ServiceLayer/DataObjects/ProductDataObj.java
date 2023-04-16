package ServiceLayer.DataObjects;

import BusinessLayer.Shops.ProductIntr;
import BusinessLayer.Shops.ShopProduct;

public class ProductDataObj {

	public String name;
	public String category;
	public String description;
	public double price;
	private int quantity;

	public ProductDataObj(String name, String category, String description, double price) {
		this.name = name;
		this.category = category;
		this.description = description;
		this.price = price;
		this.quantity = 0;
	}

	public ProductDataObj(ProductIntr product) {
		this.name = product.getName();
		this.category = product.getCategory();
		this.description = product.getDescription();
		this.price = product.getPrice();
		this.quantity = product instanceof ShopProduct ? ((ShopProduct) product).getQuantity() : 0;
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
}
