package BusinessLayer.Purchases;

import BusinessLayer.Shops.Product;

public class ShopBagItem {

    private Product product;
    private int quantity;

    public ShopBagItem(Product product, int quantity) {
        this.product = product;
        this.quantity = quantity;
    }

    public Product getProduct() {
        return product;
    }

    public void setProduct(Product product) {
        this.product = product;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    public ShopBagItem deepClone() {
        return new ShopBagItem(product.deepClone(),quantity);
    }
}
