package AcceptanceTests.Tests;
import AcceptanceTests.MarketSystemBridge;
import AcceptanceTests.MarketSystemRealBridge;
import org.junit.After;
import org.junit.Before;
import org.junit.Test;

import static org.junit.Assert.*;

public class GuestBuyingActionsTest {

    private MarketSystemBridge market;

    private String tempUserName;
    private String category = "category";

    @Before
    public void setUp() throws Exception {
        market = new MarketSystemRealBridge();
        market.init();
        tempUserName = market.startSession();

        // create a new shop
        String shopName = "My Shop";
        market.register("johndoe", "johndoe@example.com", "password");
        market.login("johndoe", "password");
        market.createShop("johndoe", shopName);
        market.addNewProduct("johndoe", shopName, "item1", category, "Item 1 description", 10.0);
        market.addNewProduct("johndoe", shopName, "item2", category,"Item 2 description", 15.0);
        market.logout("johndoe");
    }

    @After
    public void tearDown() {
        market.logout(tempUserName);
        market = null;
    }

    @Test
    public void testGuestCanViewShops() {
        try {
            // Guest can view existing shops
            String[] shops = market.getShopList();
            assertNotNull("List of shops is null", shops);
            assertTrue("List of shops is empty", shops.length > 0);
            assertTrue("Shop list does not contain expected shop", contains(shops, "My Shop"));

        } catch (Exception e) {
            fail("Exception thrown while testing guest can view shops: " + e.getMessage());
        }
    }

    @Test
    public void testGuestCanViewProducts() {
        try {
            // Guest can view products in existing shops
            String[] shops = market.getShopList();
            String shopName = shops[0];
            String[] products = market.getProductList(shopName);
            assertNotNull("List of products is null", products);
            assertTrue("List of products is empty", products.length > 0);
            assertTrue("Product list does not contain expected product", contains(products, "item1"));

        } catch (Exception e) {
            fail("Exception thrown while testing guest can view products: " + e.getMessage());
        }
    }

    private boolean contains(String[] arr, String val) {
        for (String s : arr) {
            if (s.equals(val)) {
                return true;
            }
        }
        return false;
    }
}
