package ServiceLayer.DataObjects.DiscountDataObjects;

import BusinessLayer.Shops.Discount.*;

import java.util.concurrent.ConcurrentHashMap;

public class DiscountPolicyDataObj {

    ConcurrentHashMap<Integer, DiscountDataObj> discountsById;

    public DiscountPolicyDataObj(DiscountPolicy discountPolicy){
        discountsById = convertToDataObj(discountPolicy.getDiscountsById());
    }

    private ConcurrentHashMap<Integer, DiscountDataObj> convertToDataObj(ConcurrentHashMap<Integer, Discount> discountsById) {
        ConcurrentHashMap<Integer, DiscountDataObj> newMap = new ConcurrentHashMap<>();
        for(Integer id : discountsById.keySet()){
            newMap.put(id,makeDiscountDataObj(discountsById.get(id)));
        }
        return newMap;
    }

    private DiscountDataObj makeDiscountDataObj(Discount discount) {
        if(discount instanceof XorCompoundDiscount || discount instanceof MaxCompoundDiscount || discount instanceof SumCompoundDiscount){
            return new CompoundDiscountDataObj((CompoundDiscount) discount);
        }
        if(discount instanceof CategoryDiscount || discount instanceof  ShopDiscount || discount instanceof  ProductDiscount){
            return new SimpleDiscountDataObj((SimpleDiscount) discount);
        }
        throw new IllegalArgumentException(String.format("FATAL ERROR: could not figure out discount type"));
    }

}
