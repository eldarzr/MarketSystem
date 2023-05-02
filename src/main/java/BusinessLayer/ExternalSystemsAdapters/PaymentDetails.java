package BusinessLayer.ExternalSystemsAdapters;

import BusinessLayer.Purchases.Purchase;

public interface PaymentDetails {
    void accept(Purchase purchase,double finalPrice) throws InterruptedException;

    void acceptRevert(Purchase purchase) throws InterruptedException;
}
