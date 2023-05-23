package FrontEnd.Model;

import BusinessLayer.MemberRoleInShop;
import BusinessLayer.Shops.Shop;
import BusinessLayer.Shops.ShopProduct;
import ServiceLayer.DataObjects.ProductDataObj;
import ServiceLayer.DataObjects.ShopDataObj;

import java.io.Serializable;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

public class ShopModel implements Serializable {
	private String name;
	private boolean open;
	private boolean active;
	private final String founderUserName;
	private Map<String, MemberRoleInShop> roles;
	//map of user name to role in this shop
	private ConcurrentHashMap<String, ProductModel> products;

	public ShopModel(String name, String founderUserName) {
		this.name = name;
		this.open = false;
		this.founderUserName = founderUserName;
		this.products = new ConcurrentHashMap<>();
		this.active = true;
	}

	public ShopModel(ShopDataObj shop) {
		this.name = shop.getName();
		this.open = shop.isOpen();
		this.founderUserName = shop.getFounderUserName();
		this.products = new ConcurrentHashMap<>();
		for (ProductDataObj product : shop.getProducts().values())
			products.put(product.getName(), new ProductModel(product));
		this.active = true;
		this.roles = shop.getRoles();
	}

	public String getName() {
		return name;
	}

	public boolean isOpen() {
		return open;
	}

	public boolean isActive() {
		return active;
	}

	public String getFounderUserName() {
		return founderUserName;
	}

	public ConcurrentHashMap<String, ProductModel> getProducts() {
		return products;
	}

	public Map<String, MemberRoleInShop> getRoles() {
		return roles;
	}
}

