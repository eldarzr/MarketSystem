package BusinessLayer;

import java.io.Serializable;

public class ShopBagId implements Serializable {
	protected String shopName;
	protected String userName;

	public ShopBagId() { }

	public ShopBagId(String shopName, String userName) {
		this.shopName = shopName;
		this.userName = userName;
	}

	// default constructor, getters and setters, and equals/hashCode methods
}
