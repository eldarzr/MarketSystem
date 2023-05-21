package BusinessLayer.Shops.Discount;

import BusinessLayer.Purchases.ShopBag;
import BusinessLayer.Shops.Discount.XorDecisionRules.XorDecisionRule;
import BusinessLayer.Shops.Discount.XorDecisionRules.XorDecisionRuleName;
import BusinessLayer.Shops.Discount.XorDecisionRules.XorDecisionRulesFactory;

import javax.persistence.*;
import java.util.List;

@Entity
@DiscriminatorValue("XorCompoundDiscount")
public class XorCompoundDiscount extends CompoundDiscount {

    @Enumerated(EnumType.STRING)
    @Column(name = "xor_decision_rule_name")
    XorDecisionRuleName xorDecisionRuleName;

    public XorCompoundDiscount() {
    }

    public XorCompoundDiscount(List<Discount> discounts, int discountId, XorDecisionRuleName xorDecisionRule) {
        super(discounts,discountId);
        this.xorDecisionRuleName = xorDecisionRule;
    }

    @Override
    public void applyDiscount(ShopBag shopBag) {
        Discount discountToApply = null;
        for(Discount discount : discounts){
            if(discount.deserveDiscount(shopBag)){
                if(discountToApply == null)
                    discountToApply = discount;
                else{
                    XorDecisionRule xorDecisionRule = XorDecisionRulesFactory.makeRule(xorDecisionRuleName);
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
