package BusinessLayer.Shops;

public class ShopProduct extends Product{

	private int quantity;

	private ShopProduct(String name, String category, String description, double price) {
		super(name, category, description, price);
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

	public static ShopProduct createProduct(String name, String category, String description, double price) throws Exception {
		ShopProduct product = new ShopProduct();
		product.setName(name);
		product.setCategory(category);
		product.setDescription(description);
		product.setPrice(price);
		return product;
	}
}
