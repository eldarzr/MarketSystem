package ServiceLayer.DataObjects.DiscountDataObjects;

import BusinessLayer.Shops.Discount.*;
import java.util.List;
import java.util.stream.Collectors;

public abstract class CompoundDiscountDataObj extends DiscountDataObj{

    List<DiscountDataObj> discounts;
    
    public CompoundDiscountDataObj(CompoundDiscount compoundDiscount){
        super(compoundDiscount);
        discounts = compoundDiscount.getDiscounts().stream().map((discount) -> makeDiscountDataObj(discount)).collect(Collectors.toList());
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

    @Override
    public int getPercentage() {
        return -1;
    }

    @Override
    public String getType() {
        return "Compound";
    }

    @Override
    public abstract String getSubtype();
}
