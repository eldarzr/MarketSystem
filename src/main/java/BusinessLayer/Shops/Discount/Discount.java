package BusinessLayer.Shops.Discount;

import BusinessLayer.Purchases.ShopBag;
import BusinessLayer.Shops.Discount.DiscountRules.*;

import java.util.Arrays;

public abstract class Discount {

    protected int discountId;
    DiscountRule discountRule;

    public Discount(int discountId) {
        this.discountId = discountId;
    }

    public abstract void applyDiscount(ShopBag shopBag);

    public abstract Discount searchSimpleDiscount(int discountId);

    public boolean deserveDiscount(ShopBag shopBag){
        if(discountRule == null)
            return true;
        return discountRule.evaluate(shopBag);
    }

    public void addRule(DiscountRule newDiscountRule, CompoundRuleType actionWithOldRule){
        if(discountRule == null){
            discountRule = newDiscountRule;
            return;
        }
        switch (actionWithOldRule) {
            case OR:
                discountRule = new CompoundDiscountRule(Arrays.asList(newDiscountRule, discountRule),CompoundRuleType.OR);
                break;
            case XOR:
                discountRule = new CompoundDiscountRule(Arrays.asList(newDiscountRule, discountRule),CompoundRuleType.XOR);
                break;
            case AND:
                discountRule = new CompoundDiscountRule(Arrays.asList(newDiscountRule, discountRule),CompoundRuleType.AND);
                break;
            default:
                discountRule = newDiscountRule;
        }
    }

    public int getDiscountId(){
        return  discountId;
    }

    public DiscountRule getDiscountRule() {
        return discountRule;
    }
}
