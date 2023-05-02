package BusinessLayer.Shops.Discount.DiscountRules;

import BusinessLayer.Purchases.ShopBag;

import java.util.List;

public class OrDiscountRule extends CompoundDiscountRule {

    public OrDiscountRule(List<DiscountRule> discountRules) {
        super(discountRules);
    }

    @Override
    public boolean evaluate(ShopBag shopBag) {
        for(DiscountRule discountRule : discountRules){
            if(discountRule.evaluate(shopBag))
                return true;
        }
        return false;
    }
}
