package BusinessLayer.Shops.Discount;

import BusinessLayer.Purchases.ShopBag;
import BusinessLayer.Shops.Product;

import java.util.Arrays;
import java.util.LinkedList;

public abstract class SimpleDiscount extends Discount{

    public static final int ROUND_FACTOR = 1000;

    double percentage;

    public SimpleDiscount(double percentage, int discountId) { // todo : make sure percentage is a number between 0 to 100 in the calling function
        super(discountId);
        this.percentage = (percentage / 100);
    }

    protected void updateProductPriceAfterDiscount(Product product) {
        double priceAfterDiscount = product.getPrice()*(1-percentage);
        priceAfterDiscount = Math.floor(priceAfterDiscount * ROUND_FACTOR) / ROUND_FACTOR;
        product.setPrice(priceAfterDiscount);
    }

    public Discount searchSimpleDiscount(int ID){
        if(this.discountId == ID)
            return this;
        return null;
    }

    public double getPercentage() {
        return percentage;
    }
}
