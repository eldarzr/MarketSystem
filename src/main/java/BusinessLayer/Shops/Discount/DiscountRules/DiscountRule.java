package BusinessLayer.Shops.Discount.DiscountRules;

import BusinessLayer.Purchases.ShopBag;

public interface DiscountRule {
    boolean evaluate(ShopBag shopBag);

    String getRuleName();

    String getRuleMainType();
}
