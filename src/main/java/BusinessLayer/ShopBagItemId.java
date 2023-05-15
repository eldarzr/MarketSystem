package BusinessLayer;

import java.io.Serializable;

public class ShopBagItemId implements Serializable {
	protected String shopName;
	protected String userName;
	protected String productName;

	public ShopBagItemId() { }

	public ShopBagItemId(String shopName, String userName, String productName) {
		this.shopName = shopName;
		this.userName = userName;
		this.productName = productName;
	}

	// default constructor, getters and setters, and equals/hashCode methods
}
