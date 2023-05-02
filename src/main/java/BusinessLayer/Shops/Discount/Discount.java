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

    public void addRule(DiscountRule newDiscountRule, ActionWithOldRule actionWithOldRule){
        if(discountRule == null){
            discountRule = newDiscountRule;
            return;
        }
        switch (actionWithOldRule) {
            case OR:
                discountRule = new OrDiscountRule(Arrays.asList(newDiscountRule, discountRule));
                break;
            case XOR:
                discountRule = new XorDiscountRule(Arrays.asList(newDiscountRule, discountRule));
                break;
            case AND:
                discountRule = new AndDiscountRule(Arrays.asList(newDiscountRule, discountRule));
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
