package AcceptanceTests;

import java.util.Collection;

public interface ShopDiscountPolicyBridge {
    double getTotalPriceWithDiscount(Collection<ProductBridge> products, String couponCode);
    boolean isValidCoupon(String couponCode);
}
