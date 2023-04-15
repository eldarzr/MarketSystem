package AcceptanceTests;

import java.util.Collection;

public interface PurchaseBridge {
    Collection<String> getProducts();
    int getQuantityOfProduct(String productName);
    String getTransactionId();//returns the ID of the transaction associated with the purchase.
}
