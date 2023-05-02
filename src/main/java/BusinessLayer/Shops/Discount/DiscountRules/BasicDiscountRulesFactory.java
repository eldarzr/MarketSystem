package BusinessLayer.Shops.Discount.DiscountRules;

import BusinessLayer.Purchases.ShopBagItem;

public class BasicDiscountRulesFactory {

    public static DiscountRule makeBagPriceHigherThanRule(double price){
        return shopBag -> shopBag.calculatePrice() >= price;
    }

    public static DiscountRule makeMinProductQuantityRule(int minQuantity, String productName){
        return shopBag -> {
            for(ShopBagItem sbi : shopBag.getProductsAndQuantities().values()){
                if(sbi.getProduct().getName().equals(productName))
                    return sbi.getQuantity() >= minQuantity;
            }
            return false;
        };
    }

    public static DiscountRule makeMaxProductQuantityRule(int maxQuantity, String productName){
        return shopBag -> {
            for(ShopBagItem sbi : shopBag.getProductsAndQuantities().values()){
                if(sbi.getProduct().getName().equals(productName))
                    return sbi.getQuantity() <= maxQuantity;
            }
            return false;
        };
    }

    public static DiscountRule makeMinFromCategoryRule(int minQuantity, String category){
        return shopBag -> {
            int amount = 0;
            for(ShopBagItem sbi : shopBag.getProductsAndQuantities().values()){
                if(sbi.getProduct().getCategory().equals(category))
                    amount++;
            }
            return amount >= minQuantity;
        };
    }

    public static DiscountRule makeMaxFromCategoryRule(int maxQuantity, String category){
        return shopBag -> {
            int amount = 0;
            for(ShopBagItem sbi : shopBag.getProductsAndQuantities().values()){
                if(sbi.getProduct().getCategory().equals(category))
                    amount++;
            }
            return amount <= maxQuantity;
        };
    }

}
