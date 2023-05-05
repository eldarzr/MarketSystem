package BusinessLayer.Shops.Discount;

import BusinessLayer.Purchases.ShopBag;
import BusinessLayer.Shops.Discount.XorDecisionRules.XorDecisionRule;

import java.util.List;

public class XorCompoundDiscount extends CompoundDiscount {

    XorDecisionRule xorDecisionRule;

    public XorCompoundDiscount(List<Discount> discounts, int discountId,XorDecisionRule xorDecisionRule) {
        super(discounts,discountId);
        this.xorDecisionRule = xorDecisionRule;
    }

    @Override
    public void applyDiscount(ShopBag shopBag) {
        Discount discountToApply = null;
        for(Discount discount : discounts){
            if(discount.deserveDiscount(shopBag)){
                if(discountToApply == null)
                    discountToApply = discount;
                else{
                    discountToApply = xorDecisionRule.decide(discountToApply,discount,shopBag);
                }
            }
        }
        if(discountToApply != null)
            discountToApply.applyDiscount(shopBag);
    }

    @Override
    public boolean deserveDiscount(ShopBag shopBag) {
        if(!super.deserveDiscount(shopBag))
            return false;
        for(Discount discount : discounts)
            if(discount.deserveDiscount(shopBag))
                return true;
        return false;
    }

    @Override
    public int getDiscountId() {
        return discountId;
    }
}
