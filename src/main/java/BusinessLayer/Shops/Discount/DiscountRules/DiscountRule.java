package BusinessLayer.Shops.Discount.DiscountRules;

import BusinessLayer.Purchases.ShopBag;

import javax.persistence.*;

@Entity
@Table(name = "discount_rule")
@Inheritance(strategy = InheritanceType.SINGLE_TABLE)
@DiscriminatorColumn(name = "rule_main_type", discriminatorType = DiscriminatorType.STRING)
@DiscriminatorValue(value = "DISCOUNT_RULE")
public abstract class DiscountRule {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    public abstract boolean evaluate(ShopBag shopBag);

    public abstract String getRuleName();

    public abstract String getRuleMainType();

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    // getters and setters for id
}
