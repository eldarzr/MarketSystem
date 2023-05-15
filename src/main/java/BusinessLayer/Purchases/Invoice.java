package BusinessLayer.Purchases;

import BusinessLayer.Shops.Product;

import javax.persistence.MappedSuperclass;
import java.util.ArrayList;
import java.util.Collection;
import java.util.HashMap;
import java.util.List;

@MappedSuperclass
public abstract class Invoice {

	private String userName;
	private String paymentMethod;
	private String deliveryMethod;

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