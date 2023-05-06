package ServiceLayer.DataObjects.DiscountDataObjects;

import BusinessLayer.Shops.Discount.CategoryDiscount;

public class CategoryDiscountDataObj extends SimpleDiscountDataObj {

    String category;

    public CategoryDiscountDataObj(CategoryDiscount categoryDiscount) {
        super(categoryDiscount);
        this.category = categoryDiscount.getCategory();
    }

    @Override
    public String getSubtype() {
        return "Category";
    }

    @Override
    public String getDescription() {
        return String.format("( %d %% discount on %s category )",getPercentage(),category);
    }
}
