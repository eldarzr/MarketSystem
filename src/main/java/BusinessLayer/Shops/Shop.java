package BusinessLayer.Shops;

import BusinessLayer.MemberRoleInShop;

import java.util.concurrent.ConcurrentHashMap;

public class Shop implements ShopIntr{
	String name;
	boolean open;
	private String founderUserName;
	//map of user name to role in this shop
	private ConcurrentHashMap<String, MemberRoleInShop> roles;

	public Shop(String name, String founderUserName) {
		this.name = name;
		this.open = false;
		this.founderUserName = founderUserName;
		this.roles = new ConcurrentHashMap<>();
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public boolean isOpen() {
		return open;
	}

	public void setState(boolean open) {
		this.open = open;
	}

	public String getFounder() {
		return founderUserName;
	}
}
