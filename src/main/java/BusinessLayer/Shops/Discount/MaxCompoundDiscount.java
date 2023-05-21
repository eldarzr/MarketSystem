package BusinessLayer.Shops.Discount;

import BusinessLayer.Purchases.ShopBag;

import javax.persistence.*;
import java.util.List;

@Entity
@DiscriminatorValue("MaxCompoundDiscount")
public class MaxCompoundDiscount extends CompoundDiscount{

    public MaxCompoundDiscount() {
    }

    public MaxCompoundDiscount(List<Discount> discounts, int discountId) {
        super(discounts, discountId);
    }

    @Override
    public void applyDiscount(ShopBag shopBag) {
        double minPrice = shopBag.calculatePrice();
        Discount discountToApply = null;
        for(Discount discount : discounts){
            ShopBag shopBagClone = shopBag.deepClone();
            discount.applyDiscount(shopBagClone);
            double clonePrice = shopBagClone.calculatePrice();
            if(clonePrice < minPrice){
                minPrice = clonePrice;
                discountToApply = discount;
            }
        }
        if(discountToApply != null)
            discountToApply.applyDiscount(shopBag);
    }

    @Override
    public int getDiscountId() {
        return discountId;
    }
}
