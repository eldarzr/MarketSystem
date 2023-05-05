package BusinessLayer.Shops.Discount;

import BusinessLayer.Purchases.ShopBag;
import BusinessLayer.Purchases.ShopBagItem;

import java.util.List;
import java.util.concurrent.ConcurrentHashMap;

public class SumCompoundDiscount extends CompoundDiscount{
    public SumCompoundDiscount(List<Discount> discounts,int discountId) {
        super(discounts,discountId);
    }

    @Override
    public void applyDiscount(ShopBag shopBag) {
        ConcurrentHashMap<String,Double> productToDiscountPercentage = new ConcurrentHashMap<>();

        for(String productName : shopBag.getProductsAndQuantities().keySet())
            productToDiscountPercentage.put(productName,0.0);

        for(Discount discount : discounts){
            ShopBag shopBagClone = shopBag.deepClone();
            discount.applyDiscount(shopBagClone);
            for(String productName : shopBag.getProductsAndQuantities().keySet()){
                double newProductPrice = shopBagClone.getProductsAndQuantities().get(productName).getProduct().getPrice();
                double oldProductPrice = shopBag.getProductsAndQuantities().get(productName).getProduct().getPrice();
                if(newProductPrice != oldProductPrice){
                    double discountPercentage = 1 - newProductPrice / oldProductPrice;
                    double currentProductDiscount = productToDiscountPercentage.get(productName);
                    double newProductDiscount = currentProductDiscount + discountPercentage > 100 ? 100 : currentProductDiscount + discountPercentage;
                    productToDiscountPercentage.put(productName,newProductDiscount);
                }
            }
        }

        for(ShopBagItem sbi : shopBag.getProductsAndQuantities().values()){
            sbi.getProduct().setPrice(sbi.getProduct().getPrice()*(1-productToDiscountPercentage.get(sbi.getProduct().getName())));
        }
    }


    @Override
    public int getDiscountId() {
        return discountId;
    }
}
