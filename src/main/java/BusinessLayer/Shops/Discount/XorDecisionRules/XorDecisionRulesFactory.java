package BusinessLayer.Shops.Discount.XorDecisionRules;

import BusinessLayer.Purchases.ShopBag;
import BusinessLayer.Shops.Discount.Discount;

public class XorDecisionRulesFactory {

    public static XorDecisionRule makeRule(XorDecisionRuleName xorDecisionRuleName){
        switch (xorDecisionRuleName) {
            case BIGGER_DISCOUNT:
                return (Discount  discount1, Discount discount2, ShopBag shopBag) -> makeBiggerDiscountRule(discount1,discount2,shopBag);
            case SMALLER_DISCOUNT:
                return (Discount  discount1, Discount discount2, ShopBag shopBag) -> makeSmallerDiscountRule(discount1,discount2,shopBag);
            default:
                return (Discount  discount1, Discount discount2, ShopBag shopBag) -> makeSmallerIdRule(discount1,discount2,shopBag);
        }
    }

    private static Discount makeSmallerIdRule(Discount discount1, Discount discount2, ShopBag shopBag) {
        return discount1.getDiscountId() < discount2.getDiscountId()? discount1 : discount2;
    }

    private static Discount makeSmallerDiscountRule(Discount discount1, Discount discount2, ShopBag shopBag) {
        return getDiscountWithSmallerDiscount(discount1,discount2,shopBag);
    }

    private static Discount getDiscountWithSmallerDiscount(Discount discount1, Discount discount2, ShopBag shopBag){
        ShopBag shopBagClone1 = shopBag.deepClone();
        ShopBag shopBagClone2 = shopBag.deepClone();
        discount1.applyDiscount(shopBagClone1);
        discount2.applyDiscount(shopBagClone2);
        return shopBagClone1.calculatePrice() > shopBagClone2.calculatePrice()? discount1 : discount2;
    }

    private static Discount makeBiggerDiscountRule(Discount discount1, Discount discount2, ShopBag shopBag) {
        return getDiscountWithSmallerDiscount(discount1,discount2,shopBag) == discount1 ? discount2 : discount1;
    }
}
