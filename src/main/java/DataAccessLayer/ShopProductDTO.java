package DataAccessLayer;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "products")
@Inheritance(strategy = InheritanceType.SINGLE_TABLE)
public class ShopProductDTO extends ProductDTO {

	@Column(name = "quantity")
	protected int quantity;
//	@OneToMany(mappedBy = "shop", cascade = CascadeType.ALL)
//	private List<ProductDTO> products = new ArrayList<>();

	protected ShopProductDTO(String name, String category, String description, double price, String shopName, int quantity) {
		super(name, category, description, price, shopName);
		this.quantity = quantity;
	}

	public static ShopProductDTO createShopProductDTO(String name, String category, String description, double price, String shopName, int quantity) {
		ShopProductDTO shopProductDTO = new ShopProductDTO(name, category, description, price, shopName, quantity);
		productDAO.createProduct(shopProductDTO);
		return shopProductDTO;
	}

	public int getQuantity() {
		return quantity;
	}

	public void setQuantity(int quantity) {
		this.quantity = quantity;
		update();
	}
}