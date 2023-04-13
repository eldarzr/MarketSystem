package AcceptanceTests;

public interface PaymentServiceProviderBridge {
    void updateName(String newName);
    String submitPaymentDetails(String paymentDetails);// submits the payment details to the payment system and returns the transaction ID.
    boolean getTransactionStatus(String transactionId);// checks the status of a given transaction and returns a boolean indicating whether the payment has been made or not.
}
