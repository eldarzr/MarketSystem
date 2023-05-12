package BusinessLayer.Shops;

import javax.persistence.*;

@Entity
@Table(name = "products")
@Inheritance(strategy = InheritanceType.SINGLE_TABLE)
public class ShopProduct extends Product{

	@Column(name = "quantity")
	private int quantity;

	private ShopProduct(String name, String category, String description, double price, String shopName) {
		super(name, category, description, price, shopName);
		quantity = 0;
	}

	private ShopProduct(){
		super();
		quantity = 0;
	}

	public int getQuantity() {
		return quantity;
	}

	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}

	public void addQuantity(int quantity) {
		this.quantity += quantity;
	}

	public static ShopProduct createProduct(String name, String category, String description, double price, String shopName) throws Exception {
		ShopProduct product = new ShopProduct();
		product.setName(name);
		product.setCategory(category);
		product.setDescription(description);
		product.setPrice(price);
		product.setShopName(shopName);
		return product;
	}
}
