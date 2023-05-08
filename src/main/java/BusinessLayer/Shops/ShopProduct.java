package BusinessLayer.Shops;

import DataAccessLayer.ProductDTO;
import DataAccessLayer.ShopProductDTO;

public class ShopProduct extends Product{

	private int quantity;
	protected ShopProductDTO shopProductDTO;

	private ShopProduct(String name, String category, String description, double price, String shopName) {
		super(name, category, description, price, shopName);
		quantity = 0;
		shopProductDTO = ShopProductDTO.createShopProductDTO(name, category, description, price, shopName, quantity);
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
		product.shopProductDTO = ShopProductDTO.createShopProductDTO(name, category, description, price, shopName, 0);
		product.setName(name);
		product.setCategory(category);
		product.setDescription(description);
		product.setPrice(price);
		product.setShopName(shopName);
		return product;
	}
}
