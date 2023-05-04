package ServiceLayer.DataObjects.DiscountDataObjects.DiscountRulesDataObjects;

import BusinessLayer.Shops.Discount.DiscountRules.SimpleDiscountRule;
import BusinessLayer.Shops.Discount.DiscountRules.SimpleRuleType;

public class SimpleDiscountRuleDataObj implements DiscountRuleServiceInterface{

    String ruleMainType = "Simple";
    String ruleSubType;
    String subjectName; //subject name could be category name or product name
    int minQuantity;
    int maxQuantity;
    double minPrice;

    public SimpleDiscountRuleDataObj(SimpleDiscountRule simpleDiscountRule) {
        this.ruleSubType = simpleDiscountRule.getRuleName();
        this.subjectName = simpleDiscountRule.getSubjectName();
        this.minQuantity = simpleDiscountRule.getMinQuantity();
        this.maxQuantity = simpleDiscountRule.getMaxQuantity();
        this.minPrice = simpleDiscountRule.getMinPrice();
    }

    public String getSubjectName() {
        return subjectName;
    }

    public int getMinQuantity() {
        return minQuantity;
    }

    public int getMaxQuantity() {
        return maxQuantity;
    }

    public double getMinPrice() {
        return minPrice;
    }

    public String getRuleMainType() {
        return ruleMainType;
    }

    public String getRuleSubType() {
        return ruleSubType;
    }

    @Override
    public String getRuleType() {
        return ruleMainType;
    }
}
