package BusinessLayer.Shops.Discount;

import BusinessLayer.Purchases.ShopBag;
import BusinessLayer.Purchases.ShopBagItem;

public class CategoryDiscount extends SimpleDiscount {

    String category;

    public CategoryDiscount(double percentage, int discountId, String category) {
        super(percentage, discountId);
        this.category = category;
    }

    @Override
    public void applyDiscount(ShopBag shopBag) {
        if(!deserveDiscount(shopBag))
            return;
        for(ShopBagItem sbi : shopBag.getProductsAndQuantities().values()){
            if(sbi.getProduct().getCategory().equalsIgnoreCase(category))
                updateProductPriceAfterDiscount(sbi.getProduct());
        }
    }

    public String getCategory() {
        return category;
    }
}
