package AcceptanceTests.Tests;

import AcceptanceTests.PaymentMethodBridge;

public class PaymentMethodRealBridge implements PaymentMethodBridge {
    @Override
    public int getQuantityOfProduct(String productName) {
        throw new UnsupportedOperationException();
    }

    @Override
    public boolean processPayment(double totalPrice, String transactionDetails) {
        throw new UnsupportedOperationException();
    }
}
