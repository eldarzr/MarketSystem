package ServiceLayer.DataObjects.DiscountDataObjects.DiscountRulesDataObjects;

import BusinessLayer.Shops.Discount.CompoundDiscount;
import BusinessLayer.Shops.Discount.DiscountRules.CompoundDiscountRule;
import BusinessLayer.Shops.Discount.DiscountRules.DiscountRule;
import BusinessLayer.Shops.Discount.DiscountRules.SimpleDiscountRule;
import BusinessLayer.Shops.Discount.SimpleDiscount;

import java.util.List;
import java.util.stream.Collectors;

public class CompoundDiscountRuleDataObj implements DiscountRuleServiceInterface{

    List<DiscountRuleServiceInterface> discountRules;
    String ruleMainType = "Compound";
    String ruleSubType;

    public CompoundDiscountRuleDataObj(CompoundDiscountRule compoundDiscountRule) {
        this.discountRules = compoundDiscountRule.getDiscountRules().stream().map((discountRule -> makeDiscountRuleDataObj(discountRule))).collect(Collectors.toList());
        this.ruleSubType = compoundDiscountRule.getRuleName();
    }

    private DiscountRuleServiceInterface makeDiscountRuleDataObj(DiscountRule discountRule) {
        if(discountRule instanceof  CompoundDiscount)
            return new CompoundDiscountRuleDataObj((CompoundDiscountRule) discountRule);
        if(discountRule instanceof SimpleDiscount)
            return new SimpleDiscountRuleDataObj((SimpleDiscountRule) discountRule);
        throw new IllegalArgumentException(String.format("FATAL ERROR: could not figure out discount rule type. discount rule name: %s",discountRule.getRuleName()));
    }

    public List<DiscountRuleServiceInterface> getDiscountRules() {
        return discountRules;
    }

    public String getRuleSubType() {
        return ruleSubType;
    }

    @Override
    public String getRuleType() {
        return ruleMainType;
    }
}
