package BusinessLayer;

import javax.persistence.Column;
import javax.persistence.Embeddable;
import java.io.Serializable;

public class ProductId implements Serializable {
	protected String shopName;
	protected String name;

	public ProductId() { }

	public ProductId(String shopName, String name) {
		this.shopName = shopName;
		this.name = name;
	}

	// default constructor, getters and setters, and equals/hashCode methods
}
