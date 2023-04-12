package AcceptanceTests;

import java.util.Collection;

public interface SystemDiscountPolicyBridge {
    double getTotalPriceWithDiscount(Collection<ProductBridge> products);
}
