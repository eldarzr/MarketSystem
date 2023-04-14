package AcceptanceTests;

import BusinessLayer.Shops.ProductIntr;

public class ProductRealBridge implements ProductBridge {

    private ProductIntr productIntr;

    public ProductRealBridge(ProductIntr p){
        productIntr = p;
    }

    @Override
    public String getProductName() {
        return productIntr.getName();
    }

    @Override
    public double getProductPrice() {
        return productIntr.getPrice();
    }

    @Override
    public String getProductDescription() {
        return productIntr.getDescription();
    }

    @Override
    public String getProductCategory() {
        return productIntr.getCategory();
    }

}
