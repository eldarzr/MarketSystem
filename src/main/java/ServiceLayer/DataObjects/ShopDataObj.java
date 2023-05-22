package ServiceLayer.DataObjects;

import BusinessLayer.MemberRoleInShop;
import BusinessLayer.Shops.Shop;
import BusinessLayer.Shops.ShopProduct;

import java.util.HashMap;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

public class ShopDataObj{
	private String name;
	private boolean open;
	private boolean active;
	private final String founderUserName;
	//map of user name to role in this shop
	private Map<String, MemberRoleInShop> roles;
	private ConcurrentHashMap<String, ProductDataObj> products;

	public ShopDataObj(String name, String founderUserName) {
		this.name = name;
		this.open = false;
		this.founderUserName = founderUserName;
		this.products = new ConcurrentHashMap<>();
		this.active = true;
		this.roles = new HashMap<>();
	}

	public ShopDataObj(Shop shop) {
		this.name = shop.getName();
		this.open = shop.isOpen();
		this.founderUserName = shop.getFounder();
		this.products = new ConcurrentHashMap<>();
		for (ShopProduct product : shop.getProducts())
			products.put(product.getName(), new ProductDataObj(product));
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

	public ConcurrentHashMap<String, ProductDataObj> getProducts() {
		return products;
	}

	public Map<String, MemberRoleInShop> getRoles() {
		return this.roles;
	}
}

