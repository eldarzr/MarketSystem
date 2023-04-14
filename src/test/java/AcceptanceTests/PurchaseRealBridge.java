package AcceptanceTests;

import BusinessLayer.Purchases.PurchaseIntr;

import java.util.Collection;

public class PurchaseRealBridge implements PurchaseBridge{
    private PurchaseIntr purchaseIntr;
    public PurchaseRealBridge(PurchaseIntr purchaseIntr){
        this.purchaseIntr = purchaseIntr;
    }
    @Override
    public Collection<String> getProducts() {
        return null;
        //return purchaseIntr.getProducts();
    }

    @Override
    public int getQuantityOfProduct(String productName) {
        return -1;
        //return purchaseIntr.getQuantityOfProduct(productName);
    }

    @Override
    public String getTransactionId() {
        return "";
        //return purchaseIntr.getTransactionId();
    }
}
