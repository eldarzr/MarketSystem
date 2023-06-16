package BusinessLayer.Shops.Discount.DiscountRules;

public class BasicDiscountRulesFactory {

    public static DiscountRule makeBagPriceHigherThanRule(double price){
        if(price < 0)
            throw new IllegalArgumentException("Price cannot be negative");
        SimpleDiscountRule simpleDiscountRule = new SimpleDiscountRule(SimpleRuleType.BagPriceHigherThan);
        simpleDiscountRule.setMinPrice(price);
        return simpleDiscountRule;
    }

    public static DiscountRule makeMinProductQuantityRule(int minQuantity, String productName){
        if(minQuantity < 0)
            throw new IllegalArgumentException("product quantity cannot be negative");
        SimpleDiscountRule simpleDiscountRule = new SimpleDiscountRule(SimpleRuleType.MinProductQuantity);
        simpleDiscountRule.setSubjectName(productName);
        simpleDiscountRule.setMinQuantity(minQuantity);
        return simpleDiscountRule;
    }

    public static DiscountRule makeMaxProductQuantityRule(int maxQuantity, String productName){
        if(maxQuantity < 0)
            throw new IllegalArgumentException("product quantity cannot be negative");
        SimpleDiscountRule simpleDiscountRule = new SimpleDiscountRule(SimpleRuleType.MaxProductQuantity);
        simpleDiscountRule.setSubjectName(productName);
        simpleDiscountRule.setMaxQuantity(maxQuantity);
        return simpleDiscountRule;
    }

    public static DiscountRule makeMinFromCategoryRule(int minQuantity, String category){
        if(minQuantity < 0)
            throw new IllegalArgumentException("product quantity cannot be negative");
        SimpleDiscountRule simpleDiscountRule = new SimpleDiscountRule(SimpleRuleType.MinFromCategory);
        simpleDiscountRule.setSubjectName(category);
        simpleDiscountRule.setMinQuantity(minQuantity);
        return simpleDiscountRule;
    }

    public static DiscountRule makeMaxFromCategoryRule(int maxQuantity, String category){
        if(maxQuantity < 0)
            throw new IllegalArgumentException("product quantity cannot be negative");
        SimpleDiscountRule simpleDiscountRule = new SimpleDiscountRule(SimpleRuleType.MaxFromCategory);
        simpleDiscountRule.setSubjectName(category);
        simpleDiscountRule.setMaxQuantity(maxQuantity);
        return simpleDiscountRule;
    }

}
