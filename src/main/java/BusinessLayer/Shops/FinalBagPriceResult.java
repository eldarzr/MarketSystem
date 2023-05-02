package BusinessLayer.Shops;

import java.util.List;

public class FinalBagPriceResult {

    List<String> discountAppliedDescriptions;
    private double priceBeforeDiscount;
    private double totalPriceAfterDiscount;

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
}
