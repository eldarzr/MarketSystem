package ServiceLayer.DataObjects;

import BusinessLayer.Purchases.Invoice;
import BusinessLayer.Shops.Product;

import java.util.Collection;

public abstract class InvoiceDataObj {

	private String userName;
	private String paymentMethod;
	private String deliveryMethod;
	private Long id;
	protected final int PRODUCT_NAME = 0;
	protected final int PRODUCT_DESCRIPTION = 1;
	protected final int PRODUCT_CATEGORY = 2;
	protected final int PRODUCT_PRICE = 3;
	protected final int PRODUCT_QUANTITY = 4;

	public InvoiceDataObj(String userName, String paymentMethod, String deliveryMethod) {
		this.userName = userName;
		this.paymentMethod = paymentMethod;
		this.deliveryMethod = deliveryMethod;
	}

	public InvoiceDataObj(Invoice invoice) {
			this.userName = invoice.getUserName();
			this.paymentMethod = invoice.getPaymentMethod();
			this.deliveryMethod = invoice.getDeliveryMethod();
			this.id = invoice.getId();
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

	public Long getId() {
		return id;
	}
}