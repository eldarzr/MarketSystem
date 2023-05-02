package BusinessLayer.Shops.Discount;

import java.util.List;

public abstract class CompoundDiscount extends Discount{

    List<Discount> discounts;


    public CompoundDiscount(List<Discount> discounts,int discountId) {
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
}
