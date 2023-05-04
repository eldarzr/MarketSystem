package BusinessLayer.Shops.Discount.XorDecisionRules;

import BusinessLayer.Purchases.ShopBag;
import BusinessLayer.Shops.Discount.Discount;

public interface XorDecisionRule {

    Discount decide(Discount  discount1, Discount discount2, ShopBag shopBag);
}
