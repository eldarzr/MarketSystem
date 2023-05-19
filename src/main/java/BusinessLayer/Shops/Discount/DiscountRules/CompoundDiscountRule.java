package BusinessLayer.Shops.Discount.DiscountRules;

import BusinessLayer.Purchases.ShopBag;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "compound_discount_rules")
public class CompoundDiscountRule extends DiscountRule {

    @Column(name = "rule_main_type", insertable = false, updatable = false)
    String ruleMainType = "Compound";

    @OneToMany(cascade = CascadeType.ALL)
    @JoinColumn(name = "discount_rule_id")
    List<DiscountRule> discountRules;

    @Enumerated(EnumType.STRING)
    @Column(name = "rule_type")
    CompoundRuleType ruleType;

    public CompoundDiscountRule(List<DiscountRule> discountRules, CompoundRuleType ruleType) {
        this.discountRules = discountRules;
        this.ruleType = ruleType;
    }

    protected CompoundDiscountRule() {
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
