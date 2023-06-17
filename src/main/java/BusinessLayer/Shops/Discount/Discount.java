package BusinessLayer.Shops.Discount;

import BusinessLayer.Purchases.ShopBag;
import BusinessLayer.Shops.Discount.DiscountRules.*;

import javax.persistence.*;
import java.util.Arrays;

@Entity
@Table(name = "discount")
@Inheritance(strategy = InheritanceType.SINGLE_TABLE)
@DiscriminatorColumn(name = "discount_type")
public abstract class Discount {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id; //for data base use

    @Column(name = "b_id")
    protected int discountId;

    @OneToOne(cascade = CascadeType.ALL,fetch = FetchType.EAGER)
    @JoinColumn(name = "discount_rule_id")
    DiscountRule discountRule;

    protected Discount() {
    }

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

    public void resetRule() {
        this.discountRule = null;
    }
}
