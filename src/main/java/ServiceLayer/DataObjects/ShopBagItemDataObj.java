package ServiceLayer.DataObjects;

import BusinessLayer.Purchases.ShopBagItem;
import BusinessLayer.Shops.Product;

public class ShopBagItemDataObj {

    ProductDataObj product;
    int quantity;

    public ShopBagItemDataObj(ProductDataObj product, int quantity) {
        this.product = product;
        this.quantity = quantity;
    }

    public ShopBagItemDataObj(ShopBagItem shopBagItem) {
        this.product = new ProductDataObj(shopBagItem.getProduct());
        this.quantity = shopBagItem.getQuantity();
    }

    public ProductDataObj getProduct() {
        return product;
    }

    public void setProduct(ProductDataObj product) {
        this.product = product;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }
}
