package ServiceLayer.DataObjects.DiscountDataObjects;

import BusinessLayer.Shops.Discount.*;

import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

public class DiscountPolicyDataObj {

    Map<Integer, DiscountDataObj> discountsById;

    public DiscountPolicyDataObj(DiscountPolicy discountPolicy){
        discountsById = convertToDataObj(discountPolicy.getDiscountsById());
    }

    private Map<Integer, DiscountDataObj> convertToDataObj(Map<Integer, Discount> discountsById) {
        ConcurrentHashMap<Integer, DiscountDataObj> newMap = new ConcurrentHashMap<>();
        for(Integer id : discountsById.keySet()){
            newMap.put(id,makeDiscountDataObj(discountsById.get(id)));
        }
        return newMap;
    }

    private DiscountDataObj makeDiscountDataObj(Discount discount) {
        if(discount instanceof XorCompoundDiscount){
            return new XorCompoundDiscountDataObj((XorCompoundDiscount) discount);
        }
        if(discount instanceof MaxCompoundDiscount){
            return new MaxCompoundDiscountDataObj((MaxCompoundDiscount) discount);
        }
        if(discount instanceof SumCompoundDiscount){
            return new SumCompoundDiscountDataObj((SumCompoundDiscount) discount);
        }
        if(discount instanceof CategoryDiscount){
            return new CategoryDiscountDataObj((CategoryDiscount) discount);
        }
        if(discount instanceof ShopDiscount){
            return new ShopDiscountDataObj((ShopDiscount) discount);
        }
        if(discount instanceof ProductDiscount){
            return new ProductDiscountDataObj((ProductDiscount) discount);
        }
        throw new IllegalArgumentException(String.format("FATAL ERROR: could not figure out discount type"));
    }


    public Map<Integer, DiscountDataObj> getDiscountsById() {
        return discountsById;
    }
}
