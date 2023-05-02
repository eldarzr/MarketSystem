package ServiceLayer.DataObjects;

import BusinessLayer.Shops.Discount.CategoryDiscount;

public class CategoryDiscountDataObj extends SimpleDiscountDataObj{

    String category;

    public CategoryDiscountDataObj(CategoryDiscount categoryDiscount) {
        super(categoryDiscount);
        this.category = categoryDiscount.getCategory();
    }
}
