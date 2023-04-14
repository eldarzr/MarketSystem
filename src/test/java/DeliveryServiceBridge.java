import AcceptanceTests.ProductBridge;
import AcceptanceTests.PurchaseBridge;

public interface DeliveryServiceBridge {
    boolean executeDelivery(PurchaseBridge purchase, String address);
}
