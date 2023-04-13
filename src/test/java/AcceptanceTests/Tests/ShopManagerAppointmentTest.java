package AcceptanceTests.Tests;

import AcceptanceTests.MarketSystemBridge;
import AcceptanceTests.MarketSystemRealBridge;
import org.junit.After;
import org.junit.Before;
import org.junit.Test;

import static org.junit.Assert.*;

public class ShopManagerAppointmentTest {
    private MarketSystemBridge market;
    private String category = "category";

    @Before
    public void setUp() {
        // initialize the market system
        market = new MarketSystemRealBridge();
        market.init();
    }

    @After
    public void tearDown() {
        // clear the data after the test
        market.clearData();
    }

    @Test
    public void testAppointShopManager() throws Exception {
        // create a shop owner
        String shopOwner = "ShopOwner1";
        market.register(shopOwner, "shopowner1@example.com", "password");
        market.login(shopOwner, "password");
        market.createShop(shopOwner, "MyShop");
        market.openShop(shopOwner, "MyShop");

        // create a registered-member of the market
        String member = "Member1";
        market.register(member, "member1@example.com", "password");
        market.login(member, "password");

        // appoint the member as the shop manager
        market.appointShopManager(shopOwner, member, "MyShop");

        // check that the member is now a shop manager
        assertTrue(market.hasPermission(member, "MyShop", 0));
        assertFalse(market.hasPermission(member, "MyShop", 1));
        assertFalse(market.hasPermission(member, "MyShop", 2));

        // check that the shop owner can add more permissions to the manager
        market.changeManagerPermissions(shopOwner, member, "MyShop", 1);
        assertTrue(market.hasPermission(member, "MyShop", 1));

        market.changeManagerPermissions(shopOwner, member, "MyShop", 2);
        assertTrue(market.hasPermission(member, "MyShop", 2));

        // check that the manager can add new managers
        market.addAdmin(member);
        assertTrue(market.hasPermission(member, "MyShop", 3));

        // check that the manager can add/remove products and update product's name/price/description
        market.addNewProduct(member, "MyShop", "NewProduct", category, "New Product Description", 10.0);
        assertTrue(market.productExistsInShop("MyShop", "NewProduct"));

        market.updateProductName(member, "MyShop", "NewProduct", "RenamedProduct");
        assertTrue(market.productExistsInShop("MyShop", "RenamedProduct"));

        market.updateProductPrice(member, "MyShop", "RenamedProduct", 15.0);
        assertEquals(15.0, market.getProductPrice("MyShop", "RenamedProduct"), 0.001);

        market.updateProductDesc(member, "MyShop", "RenamedProduct", "New Description");
        assertEquals("New Description", market.getProductDescription("MyShop", "RenamedProduct"));

        market.removeProduct(member, "MyShop", "RenamedProduct");
        assertFalse(market.productExistsInShop("MyShop", "RenamedProduct"));
    }
}
