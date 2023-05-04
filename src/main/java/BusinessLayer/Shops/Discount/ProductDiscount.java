package BusinessLayer.Shops.Discount;

import BusinessLayer.Purchases.ShopBag;
import BusinessLayer.Purchases.ShopBagItem;

public class ProductDiscount extends SimpleDiscount {

    String productName;

    public ProductDiscount(double percentage, int discountId, String productName) {
        super(percentage, discountId);
        this.productName = productName;
    }

    @Override
    public void applyDiscount(ShopBag shopBag) {
        if(!deserveDiscount(shopBag))
            return;
        for(ShopBagItem sbi : shopBag.getProductsAndQuantities().values()){
            if(sbi.getProduct().getName().equalsIgnoreCase(productName))
                updateProductPriceAfterDiscount(sbi.getProduct());
        }
    }

    public String getProductName() {
        return productName;
    }
}
