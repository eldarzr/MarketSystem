package BusinessLayer.ExternalSystemsAdapters;

import BusinessLayer.Purchases.Purchase;

public interface PaymentDetails {
    void accept(Purchase purchase,double finalPrice) throws Exception;

    void acceptRevert(Purchase purchase) throws Exception;
}
