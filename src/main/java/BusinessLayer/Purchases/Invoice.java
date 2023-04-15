package BusinessLayer.Purchases;

import BusinessLayer.Shops.Product;

import java.util.ArrayList;
import java.util.Collection;
import java.util.HashMap;
import java.util.List;

public abstract class Invoice {

	private String userName;
	private String paymentMethod;
	private String deliveryMethod;
	protected final int PRODUCT_NAME = 0;
	protected final int PRODUCT_DESCRIPTION = 1;
	protected final int PRODUCT_CATEGORY = 2;
	protected final int PRODUCT_PRICE = 3;
	protected final int PRODUCT_QUANTITY = 4;

	public Invoice(String userName, String paymentMethod, String deliveryMethod) {
		this.userName = userName;
		this.paymentMethod = paymentMethod;
		this.deliveryMethod = deliveryMethod;
	}

	public void addProductToList(String shopName, Product product, int quantity){
		addProductName(shopName, product.getName());
		addProductDescription(shopName, product.getName(), product.getDescription());
		addProductCategory(shopName, product.getName(), product.getCategory());
		addProductPrice(shopName, product.getName(), product.getPrice());
		addProductQuantity(shopName, product.getName(), quantity);
	}



	protected abstract void addProductField(String shopName, String productName, String fieldValue, int fieldIndex);

	private void addProductName(String shopName, String productName) {
		addProductField(shopName, productName, productName, PRODUCT_NAME);
	}

	private void addProductDescription(String shopName, String productName, String productDescription) {
		addProductField(shopName, productName, productDescription, PRODUCT_DESCRIPTION);
	}

	private void addProductCategory(String shopName, String productName, String productCategory) {
		addProductField(shopName, productName, productCategory, PRODUCT_CATEGORY);
	}

	private void addProductPrice(String shopName, String productName, double productPrice) {
		addProductField(shopName, productName, String.valueOf(productPrice), PRODUCT_PRICE);
	}

	private void addProductQuantity(String shopName, String productName, int productQuantity) {
		addProductField(shopName, productName, String.valueOf(productQuantity), PRODUCT_QUANTITY);
	}

	public abstract Collection<String> getProducts();

	public abstract int getQuantityOfProduct(String productName) throws Exception;
}