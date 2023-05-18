package BusinessLayer.Purchases;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "shop_infos")
public class ShopInfo {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@Column(name = "shop_name")
	private String shopName;

	@OneToMany(cascade = CascadeType.ALL, orphanRemoval = true)
	@JoinColumn(name = "shop_info_id")
	private List<ProductInfo> productInfos;

	public ShopInfo(String shopName) {
		this.shopName = shopName;
		this.productInfos = new ArrayList<>();
	}

	public void addProduct(ProductInfo productInfo){
		productInfos.add(productInfo);
	}

	public Long getId() {
		return id;
	}

	public String getShopName() {
		return shopName;
	}

	public List<ProductInfo> getProductInfos() {
		return productInfos;
	}
}
