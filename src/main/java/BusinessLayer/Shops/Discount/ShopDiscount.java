package BusinessLayer.Shops.Discount;

import BusinessLayer.Purchases.ShopBag;
import BusinessLayer.Purchases.ShopBagItem;

import javax.persistence.*;

@Entity
@DiscriminatorValue("ShopDiscount")
public class ShopDiscount extends SimpleDiscount {

    public ShopDiscount() {
    }

    public ShopDiscount(double percentage, int discountId) {
        super(percentage, discountId);
    }

    @Override
    public void applyDiscount(ShopBag shopBag) {
        for(ShopBagItem sbi : shopBag.getProductsAndQuantities().values()){
                updateProductPriceAfterDiscount(sbi.getProduct());
        }
    }
}
