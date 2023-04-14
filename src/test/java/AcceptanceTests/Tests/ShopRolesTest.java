package AcceptanceTests.Tests;

import AcceptanceTests.MarketSystemBridge;
import AcceptanceTests.MarketSystemRealBridge;
import org.junit.*;
import org.junit.jupiter.api.BeforeEach;

import java.util.Collection;
import java.util.HashSet;

import static org.junit.Assert.*;

public class ShopRolesTest {

    private static MarketSystemBridge marketSystem;
    private static String shopOwner;
    private static String shopManager1;
    private static String shopManager2;
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

            marketSystem.register("shopManager1", "shopManager1@gmail.com", "Passw0rd!!!");
            shopManager1 = "shopManager1";

            marketSystem.register("shopManager2", "shopManager2@gmail.com", "Passw0rd!!!");
            shopManager2 = "shopManager2";
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

        // Appoint shop managers
        try {
            marketSystem.appointShopManager(shopOwner, shopManager1, shopName);
            marketSystem.appointShopManager(shopOwner, shopManager2, shopName);
        } catch (Exception e) {
            fail("Failed to set up test: " + e.getMessage());
        }
    }

    @AfterClass
    public static void tearDownClass() {
        // Unregister users and clear data
        marketSystem.unregister("shopOwner");
        marketSystem.unregister("shopManager1");
        marketSystem.unregister("shopManager2");
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
    public void testRequestShopRoles() {
        try {
            // Request shop roles
            Collection<String> shopOwners = marketSystem.getShopOwners(shopName);
            Collection<String> shopManagers = marketSystem.getShopManagers(shopName);
            assertEquals(1, shopOwners.size());
            assertEquals(2, shopManagers.size());

            // Check shop owner permissions
            String shopOwner = shopOwners.iterator().next();
            assertTrue(marketSystem.isShopOwner(shopOwner, shopName));

            // Check shop manager permissions
            HashSet<String> managerUserNames = new HashSet<>();
            for (String manager : shopManagers) {
                managerUserNames.add(manager);
                assertTrue(marketSystem.isShopManager(manager, shopName));
            }
            assertTrue(managerUserNames.contains(shopManager1));
            assertTrue(managerUserNames.contains(shopManager2));
        } catch (Exception e) {
            fail("Failed to request shop roles: " + e.getMessage());
        }
    }

}
