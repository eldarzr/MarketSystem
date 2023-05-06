package ServiceLayer.DataObjects.DiscountDataObjects;

import BusinessLayer.Shops.Discount.MaxCompoundDiscount;

    public class MaxCompoundDiscountDataObj extends CompoundDiscountDataObj {

        public MaxCompoundDiscountDataObj(MaxCompoundDiscount compoundDiscount) {
            super(compoundDiscount);
        }

        @Override
        public String getSubtype() {
            return "Max";
        }

        @Override
        public String getDescription() {
            String description = "( MAX { ";
            for(int i = 0; i < discounts.size(); i++){
                description += discounts.get(i).getDescription();
                if(i != discounts.size()-1)
                    description += ", ";
            }
            description += "} )";
            return description;
        }
    }
