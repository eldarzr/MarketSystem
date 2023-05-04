package ServiceLayer.DataObjects.DiscountDataObjects;

import BusinessLayer.Shops.Discount.ProductDiscount;

public class ProductDiscountDataObj extends DiscountDataObj{

    String productName;

    public ProductDiscountDataObj(ProductDiscount productDiscount){
        super(productDiscount);
        this.productName = productDiscount.getProductName();
    }
}
