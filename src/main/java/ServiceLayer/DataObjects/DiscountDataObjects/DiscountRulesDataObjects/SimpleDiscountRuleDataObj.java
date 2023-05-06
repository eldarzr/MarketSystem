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

    public SimpleDiscountRuleDataObj() {
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

    @Override
    public String getDescription() {
        if(ruleSubType.equalsIgnoreCase("MinProductQuantity")){
            return String.format("( at least %d from product %s )",minQuantity,subjectName);
        }else if(ruleSubType.equalsIgnoreCase("MaxProductQuantity")){
            return String.format("( at most %d from product %s )",maxQuantity,subjectName);
        }else if(ruleSubType.equalsIgnoreCase("MinFromCategory")){
            return String.format("( at least %d products from category %s )",minQuantity,subjectName);
        }else if(ruleSubType.equalsIgnoreCase("MaxFromCategory")){
            return String.format("( at most %d products from category %s )",maxQuantity,subjectName);
        }else if(ruleSubType.equalsIgnoreCase("BagPriceHigherThan")){
            return String.format("( bag price must be at least %.2f )",minPrice);
        }else{
            return "rule description not found";
        }
    }

    public void setRuleSubType(String ruleSubType) {
        this.ruleSubType = ruleSubType;
    }

    public void setSubjectName(String subjectName) {
        this.subjectName = subjectName;
    }

    public void setMinQuantity(int minQuantity) {
        this.minQuantity = minQuantity;
    }

    public void setMaxQuantity(int maxQuantity) {
        this.maxQuantity = maxQuantity;
    }

    public void setMinPrice(double minPrice) {
        this.minPrice = minPrice;
    }

    @Override
    public String toString(){
        return getDescription();
    }
}
