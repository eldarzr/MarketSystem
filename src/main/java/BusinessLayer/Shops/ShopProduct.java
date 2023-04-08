package BusinessLayer.Shops;

public class ShopProduct extends Product{

	private int quantity;

	public ShopProduct(String name, String category, String description, double price) {
		super(name, category, description, price);
		quantity = 0;
	}

	public int getQuantity() {
		return quantity;
	}

	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}
}
