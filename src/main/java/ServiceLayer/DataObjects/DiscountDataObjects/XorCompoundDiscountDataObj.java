package ServiceLayer.DataObjects.DiscountDataObjects;

import BusinessLayer.Shops.Discount.CompoundDiscount;
import BusinessLayer.Shops.Discount.XorCompoundDiscount;

public class XorCompoundDiscountDataObj extends CompoundDiscountDataObj {

    public XorCompoundDiscountDataObj(XorCompoundDiscount compoundDiscount) {
        super(compoundDiscount);
    }

    @Override
    public String getSubtype() {
        return "Xor";
    }

    @Override
    public String getDescription() {
        String description = "(";
        for(int i = 0; i < discounts.size(); i++){
            description += discounts.get(i).getDescription();
            if(i != discounts.size()-1)
                description += " XOR ";
        }
        description += ")";
        return description;
    }
}
