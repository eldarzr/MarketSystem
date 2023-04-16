package ServiceLayer.DataObjects;

import BusinessLayer.Purchases.Invoice;
import BusinessLayer.Shops.Product;

import java.util.Collection;

public abstract class InvoiceDataObj {

	private String userName;
	private String paymentMethod;
	private String deliveryMethod;
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
	}

	public abstract Collection<String> getProducts();

	public abstract int getQuantityOfProduct(String productName) throws Exception;
}