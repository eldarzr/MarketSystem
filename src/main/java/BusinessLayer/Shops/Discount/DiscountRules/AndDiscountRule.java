package BusinessLayer.Shops.Discount.DiscountRules;

import BusinessLayer.Purchases.ShopBag;
import BusinessLayer.Shops.Discount.DiscountRules.CompoundDiscountRule;
import BusinessLayer.Shops.Discount.DiscountRules.DiscountRule;

import java.util.List;

public class AndDiscountRule extends CompoundDiscountRule {

    public AndDiscountRule(List<DiscountRule> discountRules) {
        super(discountRules);
    }

    @Override
    public boolean evaluate(ShopBag shopBag) {
        for(DiscountRule discountRule : discountRules){
            if(!discountRule.evaluate(shopBag))
                return false;
        }
        return true;
    }
}
