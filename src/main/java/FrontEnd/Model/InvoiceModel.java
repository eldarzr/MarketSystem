package FrontEnd.Model;

import ServiceLayer.DataObjects.InvoiceDataObj;

import java.util.Collection;

public abstract class InvoiceModel {

	private String userName;
	private String paymentMethod;
	private String deliveryMethod;
	public final int PRODUCT_NAME = 0;
	public static final int PRODUCT_DESCRIPTION = 1;
	public static final int PRODUCT_CATEGORY = 2;
	public static final int PRODUCT_PRICE = 3;
	public static final int PRODUCT_QUANTITY = 4;

	public InvoiceModel(String userName, String paymentMethod, String deliveryMethod) {
		this.userName = userName;
		this.paymentMethod = paymentMethod;
		this.deliveryMethod = deliveryMethod;
	}

	public InvoiceModel(InvoiceDataObj invoice) {
			this.userName = invoice.getUserName();
			this.paymentMethod = invoice.getPaymentMethod();
			this.deliveryMethod = invoice.getDeliveryMethod();
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