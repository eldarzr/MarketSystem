package AcceptanceTests.Tests;

import AcceptanceTests.PaymentServiceProviderBridge;

public class PaymentServiceProviderRealBridge implements PaymentServiceProviderBridge {
    @Override
    public void updateName(String newName) {
        throw new UnsupportedOperationException();
    }

    @Override
    public String submitPaymentDetails(String paymentDetails) {
        throw new UnsupportedOperationException();
    }

    @Override
    public boolean getTransactionStatus(String transactionId) {
        throw new UnsupportedOperationException();
    }
}
