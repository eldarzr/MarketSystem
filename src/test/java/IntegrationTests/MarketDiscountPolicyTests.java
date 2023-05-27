package IntegrationTests;

import BusinessLayer.ExternalSystemsAdapters.CreditCardPaymentDetails;
import BusinessLayer.ExternalSystemsAdapters.SupplyDetails;
import BusinessLayer.Market;
import BusinessLayer.Shops.Discount.DiscountRules.BasicDiscountRulesFactory;
import BusinessLayer.Shops.Discount.DiscountRules.CompoundRuleType;
import BusinessLayer.Shops.Discount.ProductDiscount;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.fail;

public class MarketDiscountPolicyTests {

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

    @AfterEach
    public void teardown() {
        market.resetAll();
    }

    @Test
    void addDiscountRule_shopBagPriceLowerThan() throws Exception {
        tempUserName = market.startSession();
        market.login(tempUserName, john, pass);
        ProductDiscount productDiscount = market.addProductDiscount(shopName, john, 10, item1);
        market.addDiscountRule(shopName, john, BasicDiscountRulesFactory.makeBagPriceHigherThanRule(200),productDiscount.getDiscountId(), "REPLACE");
        market.removeDiscount(shopName, john, productDiscount.getDiscountId());
    }

}
