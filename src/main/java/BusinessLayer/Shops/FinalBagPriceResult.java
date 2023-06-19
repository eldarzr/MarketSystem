package BusinessLayer.Shops;

import BusinessLayer.Purchases.ShopBag;

import java.util.List;

public class FinalBagPriceResult {

    List<String> discountAppliedDescriptions;
    private double priceBeforeDiscount;
    private double totalPriceAfterDiscount;
    private ShopBag shopBagAfterDiscount;

    public static FinalBagPriceResult makeDiscountResult(){
        return  new FinalBagPriceResult();
    }

    public List<String> getDiscountAppliedDescriptions() {
        return discountAppliedDescriptions;
    }

    public double getPriceBeforeDiscount() {
        return priceBeforeDiscount;
    }

    public double getTotalPriceAfterDiscount() {
        return totalPriceAfterDiscount;
    }

    public void setDiscountAppliedDescriptions(List<String> discountAppliedDescriptions) {
        this.discountAppliedDescriptions = discountAppliedDescriptions;
    }

    public void setPriceBeforeDiscount(double priceBeforeDiscount) {
        this.priceBeforeDiscount = priceBeforeDiscount;
    }

    public void setTotalPriceAfterDiscount(double totalPriceAfterDiscount) {
        this.totalPriceAfterDiscount = totalPriceAfterDiscount;
    }

    public ShopBag getShopBagAfterDiscount() {
        return shopBagAfterDiscount;
    }

    public void setShopBagAfterDiscount(ShopBag shopBagAfterDiscount) {
        this.shopBagAfterDiscount = shopBagAfterDiscount;
    }
}
