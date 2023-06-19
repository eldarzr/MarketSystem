package BusinessLayer;

import BusinessLayer.ExternalSystemsAdapters.CreditCardPaymentDetails;
import BusinessLayer.ExternalSystemsAdapters.PaymentDetails;
import BusinessLayer.ExternalSystemsAdapters.SupplyDetails;
import BusinessLayer.Purchases.ProductInfo;
import BusinessLayer.Purchases.ShopInfo;
import BusinessLayer.Purchases.ShopInvoice;
import BusinessLayer.Purchases.UserInvoice;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import java.util.Collection;

import static org.junit.jupiter.api.Assertions.*;


class MarketShopHistory {

    static final String password = "Aa123456";
    static final String admin = "admin";
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
        market.init("src/InitFiles/TestsConfig.jason");

        market.login(admin, password);

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
        paymentDetails = new CreditCardPaymentDetails("123456789","12","2028","holder","100","203354237");
        supplyDetails = new SupplyDetails("niasf","sadasd 12","asdas","sdasas","12345");

    }

    @AfterEach
    void tearDown() {
        market.resetAll();
    }

    @Test
    void addProductToCartAndBuyIt() throws Exception {
        market.addProductsToCart(cNames[0],shopNames[0],prodNames[0],quantity[0]-1);
        market.purchaseCart(cNames[0],paymentDetails,supplyDetails);
        ShopInvoice shopInvoice = market.getShopPurchaseHistoryByAdmin(admin, shopNames[0]).stream().toList().get(0);
        for (ProductInfo productInfo : shopInvoice.getProductInfoInShop()){
            assertEquals(productInfo.getName(), prodNames[0]);
        }
    }

    @Test
    void purchaseMoreThanProductQuantityInShop() throws Exception {
        try{
            market.addProductsToCart(cNames[0],shopNames[0],prodNames[0],quantity[0]);
            market.addProductsToCart(cNames[0],shopNames[0],prodNames[0],quantity[0]);
            market.purchaseCart(cNames[0],paymentDetails,supplyDetails);
            fail("should not be able to buy more than shop quantity");
        }catch (Exception e){
            assertNotEquals(e.getMessage() ,null);
            Collection<ShopInvoice> shopInvoices = market.getShopPurchaseHistoryByAdmin(admin, shopNames[0]);
            assertTrue(shopInvoices == null || shopInvoices.size() == 0);
        }
    }


}