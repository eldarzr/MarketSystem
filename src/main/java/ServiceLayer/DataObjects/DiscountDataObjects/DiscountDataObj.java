package ServiceLayer.DataObjects.DiscountDataObjects;

import BusinessLayer.Shops.Discount.Discount;
import BusinessLayer.Shops.Discount.DiscountRules.CompoundDiscountRule;
import BusinessLayer.Shops.Discount.DiscountRules.DiscountRule;
import BusinessLayer.Shops.Discount.DiscountRules.SimpleDiscountRule;
import ServiceLayer.DataObjects.DiscountDataObjects.DiscountRulesDataObjects.CompoundDiscountRuleDataObj;
import ServiceLayer.DataObjects.DiscountDataObjects.DiscountRulesDataObjects.DiscountRuleServiceInterface;
import ServiceLayer.DataObjects.DiscountDataObjects.DiscountRulesDataObjects.SimpleDiscountRuleDataObj;

import java.io.Serializable;

public abstract class DiscountDataObj implements Serializable {

    protected int discountId;
    protected DiscountRuleServiceInterface discountRule;

    public DiscountDataObj(Discount discount){
        this.discountId = discount.getDiscountId();
        discountRule = makeDiscountRuleDataObj(discount.getDiscountRule());
    }

    private DiscountRuleServiceInterface makeDiscountRuleDataObj(DiscountRule discountRule) {
        if(discountRule == null)
            return null;
        if(discountRule.getRuleMainType().equalsIgnoreCase("Simple")){
            return new SimpleDiscountRuleDataObj((SimpleDiscountRule) discountRule);
        }
        if(discountRule.getRuleMainType().equalsIgnoreCase("Compound")){
            return new CompoundDiscountRuleDataObj((CompoundDiscountRule) discountRule);
        }
        return null;
    }

    public int getDiscountId() {
        return discountId;
    }

    public DiscountRuleServiceInterface getDiscountRule() {
        return discountRule;
    }

    public abstract int getPercentage();

    public abstract String getType();

    public abstract String getSubtype();

    public abstract String getDescription();
}
