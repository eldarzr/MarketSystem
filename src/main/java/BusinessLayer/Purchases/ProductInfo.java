package BusinessLayer.Purchases;

import BusinessLayer.Shops.Product;

import javax.persistence.*;

@Entity
@Table(name = "product_infos")
public class ProductInfo {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@Column(name = "productName")
	protected String name;

	@Column(name = "category")
	protected String category;

	@Column(name = "description")
	protected String description;

	@Column(name = "price")
	protected double price;

	@Column(name = "quantity")
	protected double quantity;

	@Column(name = "priceAfterDiscount")
	protected double priceAfterDiscount;

	public ProductInfo() {
	}

	public ProductInfo(Product product, int quantity, double priceAfterDiscount) {
		this.name = product.getName();
		this.category = product.getCategory();
		this.description = product.getDescription();
		this.price = product.getPrice();
		this.quantity = quantity;
		this.priceAfterDiscount = priceAfterDiscount;
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

	// getters and setters...
}
