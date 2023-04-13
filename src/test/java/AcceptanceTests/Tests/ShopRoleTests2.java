package AcceptanceTests.Tests;

import AcceptanceTests.MarketSystemBridge;
import AcceptanceTests.MarketSystemRealBridge;
import org.junit.*;

import java.util.Collection;
import java.util.HashSet;

import static org.junit.Assert.*;

public class ShopRoleTests2 {

    private static MarketSystemBridge marketSystem;
    private static String shopOwner;
    private static String shopManager1;
    private static String shopManager2;
    private static String shopName;

    @BeforeClass
    public static void setUpClass() {
        // Set up market system
        marketSystem = new MarketSystemRealBridge();
        marketSystem.init();

        // Register users
        try {
            marketSystem.register("shopOwner", "shopOwner@gmail.com", "123456");
            marketSystem.login("shopOwner", "123456");
            shopOwner = "shopOwner";

            marketSystem.register("shopManager1", "shopManager1@gmail.com", "123456");
            shopManager1 = "shopManager1";

            marketSystem.register("shopManager2", "shopManager2@gmail.com", "123456");
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

    @Before
    public void setUp() {
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

            // Check non-shop owner/manager permissions
            String nonShopOwnerManager = "nonShopOwnerManager";
            marketSystem.register(nonShopOwnerManager, "nonShopOwnerManager@gmail.com", "123456");
            assertFalse(marketSystem.isShopOwner(nonShopOwnerManager, shopName));
            assertFalse(marketSystem.isShopManager(nonShopOwnerManager, shopName));
            marketSystem.unregister(nonShopOwnerManager);
        } catch (Exception e) {
            fail("Failed to test requesting shop roles: " + e.getMessage());
        }
    }

    @Test
    public void testAppointShopOwner() {
        try {
            // Appoint shop owner
            marketSystem.appointShopOwner(shopOwner, "newShopOwner", shopName);

            // Check new shop owner permissions
            Collection<String> shopOwners = marketSystem.getShopOwners(shopName);
            assertEquals(2, shopOwners.size());
            String newShopOwner = null;
            for (String owner : shopOwners) {
                if (!owner.equals(shopOwner)) {
                    newShopOwner = owner;
                    break;
                }
            }
            assertNotNull(newShopOwner);
            assertTrue(marketSystem.isShopOwner(newShopOwner, shopName));

            // Check old shop owner permissions
            assertFalse(marketSystem.isShopOwner(shopOwner, shopName));

            // Check non-shop owner cannot appoint new shop owner
            String nonShopOwner = "nonShopOwner";
            marketSystem.register(nonShopOwner, "nonShopOwner@gmail.com", "123456");
            try {
                marketSystem.appointShopOwner(nonShopOwner, "newShopOwner2", shopName);
                fail("Expected exception: User is not a shop owner");
            } catch (Exception e) {
                assertEquals("User is not a shop owner", e.getMessage());
            }
            assertFalse(marketSystem.isShopOwner("newShopOwner2", shopName));
            marketSystem.unregister(nonShopOwner);
        } catch (Exception e) {
            fail("Failed to test appointing shop owner: " + e.getMessage());
        }
    }

    @Test
    public void testAppointShopManager() {
        try {
            // Appoint shop manager
            String newManager = "newManager";
            marketSystem.register(newManager, "newManager@gmail.com", "123456");
            marketSystem.appointShopManager(shopOwner, newManager, shopName);
            // Check new shop manager permissions
            Collection<String> shopManagers = marketSystem.getShopManagers(shopName);
            assertEquals(3, shopManagers.size());
            assertTrue(marketSystem.isShopManager(newManager, shopName));

            // Check non-shop owner cannot appoint new shop manager
            String nonShopOwner = "nonShopOwner";
            marketSystem.register(nonShopOwner, "nonShopOwner@gmail.com", "123456");
            try {
                marketSystem.appointShopManager(nonShopOwner, "newManager2", shopName);
                fail("Expected exception: User is not a shop owner");
            } catch (Exception e) {
                assertEquals("User is not a shop owner", e.getMessage());
            }
            assertFalse(marketSystem.isShopManager("newManager2", shopName));
            marketSystem.unregister(nonShopOwner);
        } catch (Exception e) {
            fail("Failed to test appointing shop manager: " + e.getMessage());
        }
    }
  //for later versions
    @Test
    public void testRemoveShopOwner() {
        try {
            // Remove shop owner
            marketSystem.removeShopOwner(shopOwner, shopManager1, shopName);
            // Check new shop owner permissions
            Collection<String> shopOwners = marketSystem.getShopOwners(shopName);
            assertEquals(0, shopOwners.size());
            assertFalse(marketSystem.isShopOwner(shopOwner, shopName));

            // Check non-shop owner cannot remove shop owner
            String nonShopOwner = "nonShopOwner";
            marketSystem.register(nonShopOwner, "nonShopOwner@gmail.com", "123456");
            try {
                marketSystem.removeShopOwner(nonShopOwner, shopManager1, shopName);
                fail("Expected exception: User is not a shop owner");
            } catch (Exception e) {
                assertEquals("User is not a shop owner", e.getMessage());
            }
            assertFalse(marketSystem.isShopOwner(shopManager1, shopName));
            marketSystem.unregister(nonShopOwner);
        } catch (Exception e) {
            fail("Failed to test removing shop owner: " + e.getMessage());
        }
    }
    //for later versions
    @Test
    public void testRemoveShopManager() {
        try {
            // Remove shop manager
            marketSystem.removeShopManager(shopOwner, shopManager1, shopName);
            // Check new shop manager permissions
            Collection<String> shopManagers = marketSystem.getShopManagers(shopName);
            assertEquals(1, shopManagers.size());
            assertFalse(marketSystem.isShopManager(shopManager1, shopName));

            // Check non-shop owner cannot remove shop manager
            String nonShopOwner = "nonShopOwner";
            marketSystem.register(nonShopOwner, "nonShopOwner@gmail.com", "123456");
            try {
                marketSystem.removeShopManager(nonShopOwner, shopManager2, shopName);
                fail("Expected exception: User is not a shop owner");
            } catch (Exception e) {
                assertEquals("User is not a shop owner", e.getMessage());
            }
            assertTrue(marketSystem.isShopManager(shopManager2, shopName));
            marketSystem.unregister(nonShopOwner);
        } catch (Exception e) {
            fail("Failed to test removing shop manager: " + e.getMessage());
        }
    }
}
