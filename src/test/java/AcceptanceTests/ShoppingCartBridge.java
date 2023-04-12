package AcceptanceTests;

import java.util.Collection;

public interface ShoppingCartBridge {
    int getQuantityOfProduct(String productName);
    double calculateTotalPrice();

    Collection<String> getProductNames();

    boolean isEmpty();

    double getTotalPriceWithDiscount(String discountCode);

    Collection<ProductBridge> getProducts();
}
