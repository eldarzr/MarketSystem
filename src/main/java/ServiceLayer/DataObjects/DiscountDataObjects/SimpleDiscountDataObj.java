package ServiceLayer.DataObjects.DiscountDataObjects;

import BusinessLayer.Shops.Discount.SimpleDiscount;

public abstract class SimpleDiscountDataObj extends DiscountDataObj {

    int percentage;

    public SimpleDiscountDataObj(SimpleDiscount discount) {
        super(discount);
        percentage = (int)(100*discount.getPercentage());
    }


    @Override
    public int getPercentage() {
        return percentage;
    }

    @Override
    public String getType() {
        return "Simple";
    }

}
