package AcceptanceTests;

public interface PaymentMethodBridge {
    int getQuantityOfProduct(String productName);

    boolean processPayment(double totalPrice, String transactionDetails);
}
