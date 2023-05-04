package ServiceLayer.DataObjects.DiscountDataObjects;

import BusinessLayer.Shops.Discount.*;
import java.util.List;
import java.util.stream.Collectors;

public class CompoundDiscountDataObj extends DiscountDataObj{

    List<DiscountDataObj> discounts;
    
    public CompoundDiscountDataObj(CompoundDiscount compoundDiscount){
        super(compoundDiscount);
        discounts = compoundDiscount.getDiscounts().stream().map((discount) -> makeDiscountDataObj(discount)).collect(Collectors.toList());
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
