package AcceptanceTests;

import BusinessLayer.Purchases.ShopInvoice;
import BusinessLayer.Purchases.UserInvoice;

import java.util.Collection;

public class ShopInvoceRealBridge implements PurchaseBridge{
    private ShopInvoice shopInvoice;
    public ShopInvoceRealBridge(ShopInvoice shopInvoice){
        this.shopInvoice = shopInvoice;
    }
    @Override
    public Collection<String> getProducts() {
        return shopInvoice.getProducts();
        //return purchaseIntr.getProducts();
    }

    @Override
    public int getQuantityOfProduct(String productName) throws Exception {
        return shopInvoice.getQuantityOfProduct(productName);
        //return purchaseIntr.getQuantityOfProduct(productName);
    }

    @Override
    public String getTransactionId() {
        return "";
        //return purchaseIntr.getTransactionId();
    }
}
