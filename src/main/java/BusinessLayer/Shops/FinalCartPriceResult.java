package BusinessLayer.Shops;

import java.util.List;
import java.util.concurrent.ConcurrentHashMap;

public class FinalCartPriceResult {

    double priceBeforeDiscount;
    double totalPriceAfterDiscount;

    ConcurrentHashMap<String,List<String>> discountAppliedDescriptionsByShop;

    public FinalCartPriceResult() {
        this.priceBeforeDiscount = 0.0;
        this.totalPriceAfterDiscount = 0.0;
        this.discountAppliedDescriptionsByShop = new ConcurrentHashMap<>();
    }

    public double getPriceBeforeDiscount() {
        return priceBeforeDiscount;
    }

    public void setPriceBeforeDiscount(double priceBeforeDiscount) {
        this.priceBeforeDiscount = priceBeforeDiscount;
    }

    public double getTotalPriceAfterDiscount() {
        return totalPriceAfterDiscount;
    }

    public void setTotalPriceAfterDiscount(double totalPriceAfterDiscount) {
        this.totalPriceAfterDiscount = totalPriceAfterDiscount;
    }

    public ConcurrentHashMap<String, List<String>> getDiscountAppliedDescriptionsByShop() {
        return discountAppliedDescriptionsByShop;
    }

    public void setDiscountAppliedDescriptionsByShop(ConcurrentHashMap<String, List<String>> discountAppliedDescriptionsByShop) {
        this.discountAppliedDescriptionsByShop = discountAppliedDescriptionsByShop;
    }

    public void addBagResults(String shopName, FinalBagPriceResult finalBagPriceResult) {
        priceBeforeDiscount  = priceBeforeDiscount + finalBagPriceResult.getPriceBeforeDiscount();
        totalPriceAfterDiscount = totalPriceAfterDiscount + finalBagPriceResult.getTotalPriceAfterDiscount();
        discountAppliedDescriptionsByShop.put(shopName,finalBagPriceResult.getDiscountAppliedDescriptions());
    }
}
