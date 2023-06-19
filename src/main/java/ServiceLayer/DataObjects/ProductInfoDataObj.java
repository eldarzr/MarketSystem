package ServiceLayer.DataObjects;

import BusinessLayer.Purchases.ProductInfo;

public class ProductInfoDataObj {

	private Long id;
	protected String name;
	protected String category;
	protected String description;
	protected double price;
	protected double priceAfterDiscount;
	protected double quantity;

	public ProductInfoDataObj(ProductInfo productInfo) {
		this.name = productInfo.getName();
		this.category = productInfo.getCategory();
		this.description = productInfo.getDescription();
		this.price = productInfo.getPrice();
		this.priceAfterDiscount = productInfo.getPriceAfterDiscount();
		this.quantity = productInfo.getQuantity();
	}

	public Long getId() {
		return id;
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

	public double getQuantity() {
		return quantity;
	}

	public double getPriceAfterDiscount() {
		return priceAfterDiscount;
	}
}
