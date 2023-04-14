package BusinessLayer;

import BusinessLayer.ExternalSystemsAdapters.CreditCardPaymentDetails;
import BusinessLayer.ExternalSystemsAdapters.PaymentDetails;
import BusinessLayer.ExternalSystemsAdapters.SupplyDetails;
import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;

import java.io.IOException;

import static org.junit.jupiter.api.Assertions.assertThrows;


class MarketPurchsae {

    static final String password = "Aa123456";
    Market market;

    //mangers
    String[] usersName = {"eldar", "niv12"};
    String[] passwords = {password, password};
    String[] emails = {"eldar@gmail.com", "niv@gmail.com"};
    String[] cat = {"cat1", "cat2"};
    String[] shopNames = {"shop1", "shop2"};
    String[] prodNames = {"prod1", "prod2"};
    String[] descs = {"desc1", "desc2"};
    double[] prices = {5.5, 10.12};
    int[] quantity = {5, 10};

    //customers
    String[] cNames = {"eldarC", "nivC"};
    String[] cpasswords = {password, password};
    String[] cemails = {"eldar@gmail.com", "niv@gmail.com"};

    //external systems
    PaymentDetails paymentDetails;
    SupplyDetails supplyDetails;

    @BeforeEach
    void setUp() throws Exception {
        market = new Market();
        market.init();

        //managers
        for(int i = 0; i < usersName.length; i++) {
            String guestName = market.startSession();
            market.register(usersName[i], emails[i], passwords[i]);
            market.login(guestName, usersName[i], passwords[i]);
            market.createShop(usersName[i], shopNames[i]);
            market.addNewProduct(usersName[i], shopNames[i], prodNames[i], cat[i], descs[i], prices[i]);
            market.addProductItems(usersName[i],shopNames[i],prodNames[i],quantity[i]);
        }

        //customers
        for(int i = 0; i < usersName.length; i++) {
            String guestName = market.startSession();
            market.register(cNames[i], cemails[i], cpasswords[i]);
            market.login(guestName, cNames[i], cpasswords[i]);
        }

        //external systems
        paymentDetails = new CreditCardPaymentDetails("123456789","12","2028","holder","123","203354237");
        supplyDetails = new SupplyDetails("niasf","sadasd 12","asdas","sdasas","12345");

    }

    @AfterEach
    void tearDown() {
        market.resetAll();
    }

    @org.junit.jupiter.api.Test
    void addProductToCartAndBuyIt() throws Exception {
        market.addProductToCart(cNames[0],shopNames[0],prodNames[0],quantity[0]-1);
        market.purchaseCart(cNames[0],paymentDetails,supplyDetails);
    }

    @org.junit.jupiter.api.Test
    void purchaseByGuest() throws Exception {
        String guestName = market.startSession();
        market.addProductToCart(guestName,shopNames[0],prodNames[0],quantity[0]-1);
        market.purchaseCart(guestName,paymentDetails,supplyDetails);
    }

    @org.junit.jupiter.api.Test
    void purchaseByGuestFail() throws Exception {
        String guestName = market.startSession();
        assertThrows(Exception.class, () -> {
            market.addProductToCart(guestName,shopNames[0],prodNames[0],quantity[0]+1);
        },"able to add product with not enough quantity");
    }

    @org.junit.jupiter.api.Test
    void purchaseByGuestFail_quantityChanged() throws Exception {
        String guestName = market.startSession();
        market.addProductToCart(guestName,shopNames[0],prodNames[0],quantity[0]);
        market.updateProductQuantity(usersName[0],shopNames[0],prodNames[0],quantity[0]-1);
        assertThrows(Exception.class, () -> {
            market.purchaseCart(guestName,paymentDetails,supplyDetails);
        },"able to purchase product with not enough quantity");

    }

    @org.junit.jupiter.api.Test
    void startSessionRegisterAndLogin() throws Exception {
        String guestName = market.startSession();
        market.register("nivuzan","nivu@gmail.com","Nn123456");
        market.login(guestName,"nivuzan", "Nn123456");
        assertThrows(Exception.class, () -> {
            market.getCart(guestName);
        },String.format("successful get cart for guest after login. guestName : %s",guestName));
        market.getCart("nivuzan");
    }

}