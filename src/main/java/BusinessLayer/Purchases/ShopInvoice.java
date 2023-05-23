package BusinessLayer.Purchases;


import javax.persistence.*;
import java.util.ArrayList;
import java.util.Collection;
import java.util.HashMap;
import java.util.List;
import java.util.stream.Collectors;

@Entity
@Table(name = "shop_invoices")
public class ShopInvoice extends Invoice {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@OneToMany(cascade = CascadeType.ALL, orphanRemoval = true)
	@JoinColumn(name = "shop_invoice_id")
//	@Transient
	private List<ProductInfo> productInfoInShop = new ArrayList<>();

	@Column(name = "shopName")
	private String shopName;

	public ShopInvoice() {
	}

	public ShopInvoice(String userName, String paymentMethod, String deliveryMethod, String shopName) {
		super(userName, paymentMethod, deliveryMethod);
		this.shopName = shopName;
	}

	public void addProduct(ProductInfo productInfo) {
		productInfoInShop.add(productInfo);
	}

	public Collection<String> getProducts() {
		return productInfoInShop.stream().map(Object::toString).collect(Collectors.toList());
	}

	public List<ProductInfo> getProductInfoInShop() {
		return productInfoInShop;
	}

	public String getShopName() {
		return shopName;
	}
}