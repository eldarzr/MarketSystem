package BusinessLayer.Purchases;

import BusinessLayer.Shops.Product;

import javax.persistence.*;
import java.util.*;
import java.util.concurrent.ConcurrentHashMap;
import java.util.stream.Collectors;


@Entity
@Table(name = "user_invoices")
public class UserInvoice extends Invoice {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@OneToMany(cascade = CascadeType.ALL, orphanRemoval = true, fetch = FetchType.EAGER)
	@JoinTable(
			name = "user_invoice_shop_info",
			joinColumns = @JoinColumn(name = "user_invoice_id"),
			inverseJoinColumns = @JoinColumn(name = "shop_info_id"))
	@MapKeyColumn(name = "shop_name")
	private Map<String, ShopInfo> shopInfos;

	public UserInvoice() {
	}

	public UserInvoice(String userName, String paymentMethod, String deliveryMethod) {
		super(userName, paymentMethod, deliveryMethod);
		shopInfos = new HashMap<>();
	}

	public void addProduct(String shopName, Product product, int quantity, double priceAfterDiscount){
		if (!shopInfos.containsKey(shopName)) {
			shopInfos.put(shopName, new ShopInfo(shopName));
		}
		shopInfos.get(shopName).addProduct(new ProductInfo(product,quantity, priceAfterDiscount));
	}

	public Map<String, ShopInfo> getProductInfoInShop() {
		return shopInfos;
	}

	@Override
	public Long getId() {
		return this.id;
	}

}