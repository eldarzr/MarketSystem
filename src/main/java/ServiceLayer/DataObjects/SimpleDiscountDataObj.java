package ServiceLayer.DataObjects;

import BusinessLayer.Shops.Discount.SimpleDiscount;

public class SimpleDiscountDataObj extends DiscountDataObj{

    double percentage;

    public SimpleDiscountDataObj(SimpleDiscount discount) {
        super(discount);
        percentage = discount.getPercentage();
    }
}
