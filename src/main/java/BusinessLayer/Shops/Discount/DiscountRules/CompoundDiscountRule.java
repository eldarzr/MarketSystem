package BusinessLayer.Shops.Discount.DiscountRules;

import BusinessLayer.Purchases.ShopBag;
import BusinessLayer.Shops.Discount.DiscountRules.DiscountRule;

import java.util.Arrays;
import java.util.List;

public class CompoundDiscountRule implements DiscountRule {

    String ruleMainType = "Compound";
    List<DiscountRule> discountRules;
    CompoundRuleType ruleType;

    public CompoundDiscountRule(List<DiscountRule> discountRules, CompoundRuleType ruleType) {
        this.discountRules = discountRules;
        this.ruleType = ruleType;
    }

    @Override
    public boolean evaluate(ShopBag shopBag) {
        switch (ruleType) {
            case OR:
                return orEvaluate(shopBag);
            case XOR:
                return xorEvaluate(shopBag);
            case AND:
                return andEvaluate(shopBag);
            default:
                return true; //not suppose to get here
        }
    }

    @Override
    public String getRuleName() {
        return ruleType.toString();
    }

    private boolean xorEvaluate(ShopBag shopBag){
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

    private boolean orEvaluate(ShopBag shopBag) {
        for(DiscountRule discountRule : discountRules){
            if(discountRule.evaluate(shopBag))
                return true;
        }
        return false;
    }

    private boolean andEvaluate(ShopBag shopBag) {
        for(DiscountRule discountRule : discountRules){
            if(!discountRule.evaluate(shopBag))
                return false;
        }
        return true;
    }

    public List<DiscountRule> getDiscountRules() {
        return discountRules;
    }

    @Override
    public String getRuleMainType() {
        return ruleMainType;
    }
}
