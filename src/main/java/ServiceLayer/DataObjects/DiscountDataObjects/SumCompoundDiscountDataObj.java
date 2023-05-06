package ServiceLayer.DataObjects.DiscountDataObjects;


import BusinessLayer.Shops.Discount.SumCompoundDiscount;

public class SumCompoundDiscountDataObj extends CompoundDiscountDataObj {


    public SumCompoundDiscountDataObj(SumCompoundDiscount compoundDiscount) {
        super(compoundDiscount);
    }

    @Override
    public String getSubtype() {
        return "Sum";
    }

    @Override
    public String getDescription() {
        String description = "(";
        for(int i = 0; i < discounts.size(); i++){
            description += discounts.get(i).getDescription();
            if(i != discounts.size()-1)
                description += " SUM ";
        }
        description += ")";
        return description;
    }
}
