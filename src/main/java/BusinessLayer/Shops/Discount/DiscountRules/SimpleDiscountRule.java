package BusinessLayer.Shops.Discount.DiscountRules;

import BusinessLayer.Purchases.ShopBag;
import BusinessLayer.Purchases.ShopBagItem;

import javax.persistence.*;

@Entity
@Table(name = "simple_discount_rules")
@DiscriminatorValue("SIMPLE")
public class SimpleDiscountRule extends DiscountRule{

    @Column(name = "rule_main_type", insertable = false, updatable = false)
    String ruleMainType = "Simple";

    @Enumerated(EnumType.STRING)
    @Column(name = "rule_sub_type")
    SimpleRuleType ruleType;

    @Column(name = "subject_name")
    String subjectName; //subject name could be category name or product name

    @Column(name = "min_quantity")
    int minQuantity;

    @Column(name = "max_quantity")
    int maxQuantity;

    @Column(name = "min_price")
    double minPrice;

    protected SimpleDiscountRule() {
    }

    public SimpleDiscountRule(SimpleRuleType ruleType) {
        this.ruleType = ruleType;
    }

    @Override
    public boolean evaluate(ShopBag shopBag) {
        switch (ruleType){
            case MinProductQuantity:
                return evaluateMinProductQuantity(shopBag);
            case MaxProductQuantity:
                return evaluateMaxProductQuantity(shopBag);
            case MinFromCategory:
                return evaluateMinFromCategory(shopBag);
            case MaxFromCategory:
                return evaluateMaxFromCategory(shopBag);
            default:
                return evaluateBagPriceHigherThan(shopBag);

        }

    }

    private boolean evaluateBagPriceHigherThan(ShopBag shopBag) {
        return shopBag.calculatePrice() >= minPrice;
    }

    private boolean evaluateMaxFromCategory(ShopBag shopBag) {
        int amount = 0;
        for(ShopBagItem sbi : shopBag.getProductsAndQuantities().values()){
            if(sbi.getProduct().getCategory().equals(subjectName))
                amount++;
        }
        return amount <= maxQuantity;
    }

    private boolean evaluateMinFromCategory(ShopBag shopBag) {
        int amount = 0;
        for(ShopBagItem sbi : shopBag.getProductsAndQuantities().values()){
            if(sbi.getProduct().getCategory().equals(subjectName))
                amount++;
        }
        return amount >= minQuantity;
    }

    private boolean evaluateMaxProductQuantity(ShopBag shopBag) {
        for(ShopBagItem sbi : shopBag.getProductsAndQuantities().values()){
            if(sbi.getProduct().getName().equals(subjectName))
                return sbi.getQuantity() <= maxQuantity;
        }
        return false;
    }

    private boolean evaluateMinProductQuantity(ShopBag shopBag) {
        for(ShopBagItem sbi : shopBag.getProductsAndQuantities().values()){
            if(sbi.getProduct().getName().equals(subjectName))
                return sbi.getQuantity() >= minQuantity;
        }
        return false;
    }

    public String getSubjectName() {
        return subjectName;
    }

    public void setSubjectName(String subjectName) {
        this.subjectName = subjectName;
    }

    public int getMinQuantity() {
        return minQuantity;
    }

    public void setMinQuantity(int minQuantity) {
        this.minQuantity = minQuantity;
    }

    public int getMaxQuantity() {
        return maxQuantity;
    }

    public void setMaxQuantity(int maxQuantity) {
        this.maxQuantity = maxQuantity;
    }

    public double getMinPrice() {
        return minPrice;
    }

    public void setMinPrice(double minPrice) {
        this.minPrice = minPrice;
    }

    @Override
    public String getRuleName() {
        return ruleType.toString();
    }

    public String getRuleMainType() {
        return ruleMainType;
    }
}
