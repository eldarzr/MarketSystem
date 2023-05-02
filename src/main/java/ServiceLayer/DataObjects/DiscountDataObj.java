package ServiceLayer.DataObjects;

import BusinessLayer.Shops.Discount.Discount;
import BusinessLayer.Shops.Discount.DiscountRules.AndDiscountRule;
import BusinessLayer.Shops.Discount.DiscountRules.DiscountRule;
import BusinessLayer.Shops.Discount.DiscountRules.OrDiscountRule;
import BusinessLayer.Shops.Discount.XorDecisionRules.XorDecisionRule;

public class DiscountDataObj {

    protected int discountId;
    protected DiscountRuleDataObj discountRule;

    public DiscountDataObj(Discount discount){
        discountId = discount.getDiscountId();
        discountRule = getExactRule(discount.getDiscountRule());
    }

    private DiscountRuleDataObj getExactRule(DiscountRule discountRule){
        if(discountRule instanceof AndDiscountRule){
            return new AndDiscountRuleDataObj((AndDiscountRuleDataObj)discountRule);
        }
        if(discountRule instanceof OrDiscountRule){
            return new OrDiscountRuleDataObj((OrDiscountRuleDataObj)discountRule);
        }
        if(discountRule instanceof XorDecisionRule){
            return new XorDecisionRuleDataObj((XorDecisionRuleDataObj)discountRule);
        }
    }

}
