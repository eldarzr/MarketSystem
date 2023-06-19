package BusinessLayer.Shops;

import BusinessLayer.Purchases.ShopBag;

import java.util.List;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

public class FinalCartPriceResult {

    double priceBeforeDiscount;
    double totalPriceAfterDiscount;
    Map<String, ShopBag> bags;

    ConcurrentHashMap<String,List<String>> discountAppliedDescriptionsByShop;

    public FinalCartPriceResult() {
        this.priceBeforeDiscount = 0.0;
        this.totalPriceAfterDiscount = 0.0;
        this.discountAppliedDescriptionsByShop = new ConcurrentHashMap<>();
        this.bags = new ConcurrentHashMap<>();
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
        bags.put(shopName, finalBagPriceResult.getShopBagAfterDiscount());
    }

    public ShopBag getShopBag(String shopName){
        if (!bags.containsKey(shopName))
            return null;
        return bags.get(shopName);
    }
}
