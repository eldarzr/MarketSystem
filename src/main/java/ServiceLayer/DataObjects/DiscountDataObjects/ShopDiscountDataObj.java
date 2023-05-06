package ServiceLayer.DataObjects.DiscountDataObjects;

import BusinessLayer.Shops.Discount.ShopDiscount;

public class ShopDiscountDataObj extends SimpleDiscountDataObj{

    public ShopDiscountDataObj(ShopDiscount shopDiscount) {
        super(shopDiscount);
    }

    @Override
    public String getSubtype() {
        return "Shop";
    }

    @Override
    public String getDescription() {
        return String.format("( %d %% discount on all shop products )",percentage);
    }
}
