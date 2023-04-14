package AcceptanceTests;

import BusinessLayer.ExternalSystemsAdapters.CreditCardPaymentDetails;
import BusinessLayer.ExternalSystemsAdapters.PaymentDetails;
import BusinessLayer.ExternalSystemsAdapters.SupplyDetails;

public class ExternalToolsFactory {

    public static SupplyDetails createMockSupplyDetails(){
        return new SupplyDetails("niasf","sadasd 12","asdas","sdasas","12345");
    }

    public static PaymentDetails createMockPaymentDetails(){
        return new CreditCardPaymentDetails("123456789","12","2028","holder","123","203354237");
    }


}
