package AcceptanceTests.Tests;

import AcceptanceTests.MarketSystemBridge;
import AcceptanceTests.MarketSystemRealBridge;
import org.junit.*;
import org.junit.jupiter.api.BeforeEach;

import java.util.Collection;

import static org.junit.Assert.*;

public class ChangeManagerPermissionsTest {

    private static MarketSystemBridge marketSystem;
    private static String shopOwner;
    private static String shopManager;
    private static String shopName;

    @BeforeClass
    public static void setUpClass() throws Exception {
        // Set up market system
        marketSystem = new MarketSystemRealBridge();
        marketSystem.init();

        // Register users
        try {
            marketSystem.register("shopOwner", "shopOwner@gmail.com", "Passw0rd!!!");
            marketSystem.login("shopOwner", "Passw0rd!!!");
            shopOwner = "shopOwner";

            marketSystem.register("shopManager", "shopManager@gmail.com", "Passw0rd!!!");
            marketSystem.login("shopManager", "Passw0rd!!!");
            shopManager = "shopManager";
        } catch (Exception e) {
            fail("Failed to set up test: " + e.getMessage());
        }

        // Create shop
        try {
            marketSystem.createShop(shopOwner, "TestShop");
            shopName = "TestShop";
        } catch (Exception e) {
            fail("Failed to set up test: " + e.getMessage());
        }

        // Appoint shop manager
        try {
            marketSystem.appointShopManager(shopOwner, shopManager, shopName);
        } catch (Exception e) {
            fail("Failed to set up test: " + e.getMessage());
        }
    }

    @AfterClass
    public static void tearDownClass() {
        // Unregister users and clear data
        marketSystem.unregister("shopOwner");
        marketSystem.unregister("shopManager");
        marketSystem.clearData();
    }

    @BeforeEach
    public void setUp() throws Exception {
        // Open shop
        marketSystem.openShop(shopOwner, shopName);
    }

    @After
    public void tearDown() throws Exception {
        // Close shop
        marketSystem.closeShop(shopOwner, shopName);
    }

    @Test
    public void testChangeManagerPermissions() throws Exception {
        // Set initial permissions
        try {
            marketSystem.changeManagerPermissions(shopOwner, shopManager, shopName, 1);
        } catch (Exception e) {
            fail("Failed to set up test: " + e.getMessage());
        }

        // Check initial permissions
        Collection<Integer> permissions = marketSystem.getManagerPermissionsInShop(shopManager, shopName);
        assertEquals(1, permissions.size());
        assertTrue(permissions.contains(1));

        // Change permissions
        try {
            marketSystem.changeManagerPermissions(shopOwner, shopManager, shopName, 2);
        } catch (Exception e) {
            fail("Failed to change manager permissions: " + e.getMessage());
        }

        // Check changed permissions
        permissions = marketSystem.getManagerPermissionsInShop(shopManager, shopName);
        assertEquals(1, permissions.size());
        assertTrue(permissions.contains(2));
    }

}
