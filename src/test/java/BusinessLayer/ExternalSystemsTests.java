package BusinessLayer;
import BusinessLayer.ExternalSystemsAdapters.CreditCardPaymentDetails;
import BusinessLayer.ExternalSystemsAdapters.ExternalSystemAPI;
import BusinessLayer.ExternalSystemsAdapters.SupplyDetails;
import BusinessLayer.Market;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;






public class ExternalSystemsTests {

    Market market;
    ExternalSystemAPI externalSystem;
//    String[] usersName = {"Eldar", "Niv12", "Naor", "Gabi", "Idan", "Emanuel"};
//    String[] passwords = {"Aa123456"};
//    String[] emails = {"eldar@gmail.com", "Niv12@gmail.com", "naor@gmail.com", "Gabi@gmail.com", "idan@gmail.com", "emanuel@gmail.com"};
//    String[] shopNames = {"shopEldar", "shopNiv12", "ShopNaor"};

    @BeforeEach
    void setUp() throws Exception {
       market = new Market();
       externalSystem = new ExternalSystemAPI();
       market.init();
//        for (int i = 0; i < usersName.length; i++) {
//            market.register(usersName[i], emails[i], passwords[0]);
//        }
    }

    @AfterEach
    void tearDown() {
        market.resetAll();
    }

    @Test
    void handshake() throws Exception {
        System.out.println(" HAND SHAKE START HERE : ");
        externalSystem.handshake();
    }

    @Test
    void pay_success() throws Exception {
        System.out.println(" HAND SHAKE START HERE : ");
        CreditCardPaymentDetails ccp = new CreditCardPaymentDetails("2222333344445555", "4", "2021", "Israel Israelovice", "262", "20444444");
        assertTrue(externalSystem.pay(ccp));
    }

    @Test
    void cancelpay_success() throws Exception {
        System.out.println(" HAND SHAKE START HERE : ");
        CreditCardPaymentDetails ccp = new CreditCardPaymentDetails("2222333344445555", "4", "2021", "Israel Israelovice", "262", "20444444");

        assertTrue(externalSystem.pay(ccp));
        assertTrue(externalSystem.cancelPay(ccp));
    }

    @Test
    void supply() throws Exception {
        System.out.println(" HAND SHAKE START HERE : ");
        SupplyDetails sp = new SupplyDetails("Israel Israelovice", "Rager Blvd 12", "Beer Sheva", "Israel", "8458527");
        assertTrue(externalSystem.supply(sp));
    }

    @Test
    void cancelsupply() throws Exception {
        System.out.println(" HAND SHAKE START HERE : ");
        SupplyDetails sp = new SupplyDetails("Israel Israelovice", "Rager Blvd 12", "Beer Sheva", "Israel", "8458527");
        assertTrue(externalSystem.supply(sp));
        assertTrue(externalSystem.cancelSupply(sp));
    }
}
