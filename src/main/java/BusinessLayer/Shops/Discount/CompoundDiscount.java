package BusinessLayer.Shops.Discount;

import javax.persistence.*;
import java.util.List;

@Entity
@DiscriminatorValue("CompoundDiscount")
public abstract class CompoundDiscount extends Discount{

    @OneToMany(cascade = CascadeType.ALL, orphanRemoval = true)
    @JoinColumn(name = "parent_discount_id")
    List<Discount> discounts;


    protected CompoundDiscount() {
    }

    public CompoundDiscount(List<Discount> discounts, int discountId) {
        super(discountId);
        this.discounts = discounts;
    }

    public Discount searchSimpleDiscount(int id){
        for(Discount discount : discounts){
            Discount innerDiscount = discount.searchSimpleDiscount(discountId);
            if(innerDiscount != null)
                return innerDiscount;
        }
        return null;
    }

    public List<Discount> getDiscounts() {
        return discounts;
    }
}
