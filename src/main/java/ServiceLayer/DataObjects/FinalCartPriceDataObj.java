package ServiceLayer.DataObjects;

import BusinessLayer.Shops.FinalCartPriceResult;

public class FinalCartPriceDataObj {
    double priceBeforeDiscount;
    double priceAfterDiscount;
    public FinalCartPriceDataObj(FinalCartPriceResult result){
        priceAfterDiscount = result.getTotalPriceAfterDiscount();
        priceBeforeDiscount = result.getPriceBeforeDiscount();
    }
    public double getPriceBeforeDiscount(){
        return priceBeforeDiscount;
    }

    public double getPriceAfterDiscount() {
        return priceAfterDiscount;
    }
}
