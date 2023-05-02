package BusinessLayer.Shops.Discount.DiscountRules;

import BusinessLayer.Purchases.ShopBag;
import BusinessLayer.Shops.Discount.DiscountRules.CompoundDiscountRule;
import BusinessLayer.Shops.Discount.DiscountRules.DiscountRule;

import java.util.List;

public class XorDiscountRule extends CompoundDiscountRule {

    public XorDiscountRule(List<DiscountRule> discountRules) {
        super(discountRules);
    }

    @Override
    public boolean evaluate(ShopBag shopBag) {
        boolean deserveDiscount = false;
        for(DiscountRule discountRule : discountRules){
            if(discountRule.evaluate(shopBag)){
                if(!deserveDiscount)
                    deserveDiscount = true;
                else return false;
            }
        }
        return deserveDiscount;
    }
}
