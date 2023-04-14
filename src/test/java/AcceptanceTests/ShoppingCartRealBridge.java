package AcceptanceTests;

import BusinessLayer.Purchases.Cart;

import java.util.Collection;

public class ShoppingCartRealBridge implements ShoppingCartBridge{

    private Cart cart;

    public ShoppingCartRealBridge(Cart cart) {
        this.cart = cart;
    }

    @Override
    public int getQuantityOfProduct(String productName) {
        return 0;
    }

    @Override
    public double calculateTotalPrice() {
        return 0;
    }

    @Override
    public Collection<String> getProductNames() {
        return null;
    }

    @Override
    public boolean isEmpty() {
        return false;
    }
    //not in ver 1
    @Override
    public double getTotalPriceWithDiscount(String discountCode) {
        return 0;
    }

    @Override
    public Collection<ProductBridge> getProducts() {
        return null;
    }
}
