package BusinessLayer.Shops.Discount.DiscountRules;

import BusinessLayer.Shops.Discount.DiscountRules.DiscountRule;

import java.util.List;

public abstract class CompoundDiscountRule implements DiscountRule {

    List<DiscountRule> discountRules;

    public CompoundDiscountRule(List<DiscountRule> discountRules) {
        this.discountRules = discountRules;
    }
}
