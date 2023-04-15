package AcceptanceTests;

import BusinessLayer.Purchases.PurchaseIntr;
import BusinessLayer.Purchases.UserInvoice;

import java.util.Collection;

public class UserInvoceRealBridge implements PurchaseBridge{
    private UserInvoice userInvoice;
    public UserInvoceRealBridge(UserInvoice userInvoice){
        this.userInvoice = userInvoice;
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
