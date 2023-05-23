package BusinessLayer.Purchases;

import BusinessLayer.Shops.Product;

import javax.persistence.Column;
import javax.persistence.MappedSuperclass;
import javax.persistence.Transient;
import java.util.ArrayList;
import java.util.Collection;
import java.util.HashMap;
import java.util.List;

@MappedSuperclass
public abstract class Invoice {

	@Column(name = "userName")
	private String userName;
	@Transient
	private String paymentMethod;
	@Transient
	private String deliveryMethod;

	public Invoice() {
	}

	public Invoice(String userName, String paymentMethod, String deliveryMethod) {
		this.userName = userName;
		this.paymentMethod = paymentMethod;
		this.deliveryMethod = deliveryMethod;
	}

	public String getUserName() {
		return userName;
	}

	public String getPaymentMethod() {
		return paymentMethod;
	}

	public String getDeliveryMethod() {
		return deliveryMethod;
	}
}