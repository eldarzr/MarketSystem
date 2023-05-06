package ServiceLayer.DataObjects.DiscountDataObjects;

import BusinessLayer.Shops.Discount.ProductDiscount;

public class ProductDiscountDataObj extends SimpleDiscountDataObj {

    String productName;

    public ProductDiscountDataObj(ProductDiscount productDiscount){
        super(productDiscount);
        this.productName = productDiscount.getProductName();
    }

    @Override
    public String getSubtype() {
        return "Product";
    }

    @Override
    public String getDescription() {
        String description = String.format("( %d %% discount on product %s )",getPercentage(),productName);
        return description;
    }
}
