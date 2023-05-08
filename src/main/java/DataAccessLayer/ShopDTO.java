package DataAccessLayer;

import javax.persistence.*;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "shops")
public class ShopDTO implements Serializable {
	protected static final ShopDAO shopDAO = new ShopDAO();

	@Id
	@Column(name = "name")
	protected String name;
	@OneToMany(mappedBy = "shopName", cascade = CascadeType.ALL)
	private List<ProductDTO> products = new ArrayList<>();

	protected ShopDTO(String name) {
		this.name = name;
	}

	public static ShopDTO createShopDTO(String name){
		ShopDTO shopDTO = new ShopDTO(name);
		shopDAO.createShop(shopDTO);
		return shopDTO;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}
}
