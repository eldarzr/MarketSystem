package IntegrationTests;

import AcceptanceTests.MarketSystemBridge;
import AcceptanceTests.MarketSystemRealBridge;
import BusinessLayer.ExternalSystemsAdapters.CreditCardPaymentDetails;
import BusinessLayer.ExternalSystemsAdapters.SupplyDetails;
import BusinessLayer.Market;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.fail;

public class MarketPurchasePolicyTests {

    private Market market = new Market();
    private String tempUserName;
    private String category = "category";
    private String shopName = "My Shop";
    private String john = "johndoe";
    private String jane = "janedoe";
    private String pass = "Passw0rd!!!";
    private String item1 = "item1";

    @BeforeEach
    public void setUp() throws Exception {

        market = new Market();
        market.init("src/InitFiles/TestsConfig.jason");
        tempUserName = market.startSession();

        // create some shops with products for testing
        market.register("johndoe", "johndoe@example.com", "Passw0rd!!!");
        market.login(tempUserName, "johndoe", "Passw0rd!!!");
        market.createShop("johndoe", "My Shop");
        market.addNewProduct("johndoe", "My Shop", "item1", category, "Item 1 description", 10.0, 5);
        market.addNewProduct("johndoe", "My Shop", "item2", category, "Item 2 description", 15.0, 5);
        market.logout("johndoe");

        market.register("janedoe", "janedoe@example.com", "Passw0rd!!!");
        tempUserName = market.startSession();
        market.login(tempUserName, "janedoe", "Passw0rd!!!");
        market.createShop("janedoe", "Jane's Shop");
        market.addNewProduct("janedoe", "Jane's Shop", "item3", category, "Item 3 description", 20.0, 5);
        market.addNewProduct("janedoe", "Jane's Shop", "item4", category, "Item 4 description", 25.0, 5);
        market.logout("janedoe");
    }


    @Test
    public void quantityPolicyFailPurchase(){
        try {
            tempUserName = market.startSession();
            market.login(tempUserName, john, pass);
            market.addQuantityPurchasePolicy(john, shopName, true, item1, false, 0, 2);
            // now you can only buy 3 or more of item 1
            tempUserName = market.startSession();
            market.login(tempUserName, jane, pass);
            market.addProductsToCart(jane,shopName,item1,1);
            market.purchaseCart(jane,new CreditCardPaymentDetails("1234123412341234","11","2025","Gabi Rich","666","123321123"),new SupplyDetails("Gabi Richmond","100 and Charming","New York","United States","90210"));
            fail("Jane should not be able to purchase this quantity of item 1");
        }catch (Exception ignored){}
    }


    @Test
    public void quantityPolicySuccessPurchase(){
        try {
            tempUserName = market.startSession();
            market.login(tempUserName, john, pass);
            market.addQuantityPurchasePolicy(john, shopName, true, item1, false, 0, 2);
            // now you can only buy 3 or more of item 1
            tempUserName = market.startSession();
            market.login(tempUserName, jane, pass);
            market.addProductsToCart(jane,shopName,item1,4);
            market.purchaseCart(jane,new CreditCardPaymentDetails("1234123412341234","11","2025","Gabi Rich","666","123321123"),new SupplyDetails("Gabi Richmond","100 and Charming","New York","United States","90210"));
            fail("Jane should not be able to purchase this quantity of item 1");
        }catch (Exception ignored){}
    }


    @Test
    public void createAgePurchasePolicy() {
        try {
            tempUserName = market.startSession();
            market.login(tempUserName, john, pass);
            market.addAgePurchasePolicy(john, shopName, true, item1, false, 0, 18);
        } catch (Exception e) {
            fail(e.getMessage());
        }
    }

    @Test
    public void WrongAgesPurchasePolicy() {
        try {
            tempUserName = market.startSession();
            market.login(tempUserName, john, pass);
            market.addAgePurchasePolicy(john, shopName, true, item1, false, 18, 0);
            fail("John should not be able to create such purchase policy");
        } catch (Exception ignored) {
        }
    }

    @Test
    public void UnauthorizedUserCreatePurchasePolicy() {
        try {
            tempUserName = market.startSession();
            market.login(tempUserName, jane, pass);
            market.addAgePurchasePolicy(jane, shopName, true, item1, false, 0, 18);
            fail("Jane should not be able to create such purchase policy");
        } catch (Exception ignored) {
        }
    }

}
