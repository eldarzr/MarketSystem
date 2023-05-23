package BusinessLayer.Shops.Discount;

import BusinessLayer.Purchases.ShopBag;
import BusinessLayer.Purchases.ShopBagItem;

import javax.persistence.*;

@Entity
@DiscriminatorValue("ProductDiscount")
public class ProductDiscount extends SimpleDiscount {

    @Column(name = "product_name")
    String productName;

    public ProductDiscount() {
    }

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
