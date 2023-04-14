package AcceptanceTests.Tests;
import AcceptanceTests.MarketSystemBridge;
import AcceptanceTests.MarketSystemRealBridge;
import AcceptanceTests.ProductBridge;
import AcceptanceTests.ShopBridge;
import org.junit.After;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import static org.junit.Assert.*;

public class GuestBuyingActionsTest {

    private MarketSystemBridge market= new MarketSystemRealBridge();

    private String tempUserName;
    private String category = "category";

    @BeforeEach
    public void setUp() throws Exception {
        market = new MarketSystemRealBridge();
        market.init();
        tempUserName = market.startSession();

        // create a new shop
        String shopName = "My Shop";
        market.register("johndoe", "johndoe@example.com", "Passw0rd!!!");
        market.login("johndoe", "Passw0rd!!!");
        market.createShop("johndoe", shopName);
        market.addNewProduct("johndoe", shopName, "item1", category, "Item 1 description", 10.0);
        market.addNewProduct("johndoe", shopName, "item2", category,"Item 2 description", 15.0);
        market.logout("johndoe");
    }

    @After
    public void tearDown() {
        market.logout(tempUserName);
        market.clearData();
    }

    @Test
    public void testGuestCanViewShops() {
        try {
            // Guest can view existing shops
            ShopBridge shop = market.getShop(tempUserName,"My Shop");
            assertNotNull("shop is null", shop);
            assertEquals("Something went wrong with the shop's name", "My Shop", shop.getShopName());

        } catch (Exception e) {
            fail("Exception thrown while testing guest can view shops: " + e.getMessage());
        }
    }

    @Test
    public void testGuestCanViewProducts() {
        try {
            // Guest can view products in existing shops
            ProductBridge product = market.getProduct(tempUserName,"My Shop","item1");
            assertNotNull("product is null", product);
            assertEquals("Wrong product name", "item1", product.getProductName());

        } catch (Exception e) {
            fail("Exception thrown while testing guest can view products: " + e.getMessage());
        }
    }

}