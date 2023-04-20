package AcceptanceTests.Tests;

import AcceptanceTests.MarketSystemBridge;
import AcceptanceTests.MarketSystemRealBridge;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import java.util.Collection;
import java.util.HashSet;

import static org.junit.jupiter.api.Assertions.*;


public class ShopRoleTests2 {

    private static MarketSystemBridge marketSystem = new MarketSystemRealBridge();
    private static String shopOwner;
    private static String shopManager1;
    private static String shopManager2;
    private static String shopName;


    @BeforeEach
    public void setUp() throws Exception {
     
        // Set up market system
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

    @AfterEach
    public void tearDown() throws Exception {

        marketSystem.clearData();
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
            marketSystem.register(nonShopOwnerManager, "nonShopOwnerManager@gmail.com", "Passw0rd!!!");
            assertFalse(marketSystem.isShopOwner(nonShopOwnerManager, shopName));
            assertFalse(marketSystem.isShopManager(nonShopOwnerManager, shopName));
            marketSystem.login(nonShopOwnerManager, "Passw0rd!!!");
            marketSystem.unregister(nonShopOwnerManager);
        } catch (Exception e) {
            fail("Failed to test requesting shop roles: " + e.getMessage());
        }
    }

    @Test
    public void testAppointShopOwner() {
        try {
            String newShopOwnerUserName = "newShopOwner";
            //register and login the new shop owner
            marketSystem.register(newShopOwnerUserName,"newShopOwnerManager@gmail.com","Passw0rd!!!");
            marketSystem.login(newShopOwnerUserName,"Passw0rd!!!");

            // Appoint shop owner
            marketSystem.appointShopOwner(shopOwner, newShopOwnerUserName, shopName);

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
            assertTrue(marketSystem.isShopOwner(shopOwner, shopName));

            // Check non-shop owner cannot appoint new shop owner
            String nonShopOwner = "nonShopOwner";
            marketSystem.register(nonShopOwner, "nonShopOwner@gmail.com", "Passw0rd!!!");
            marketSystem.login(nonShopOwner, "Passw0rd!!!");
            try {
                marketSystem.appointShopOwner(nonShopOwner, "newShopOwner2", shopName);
                fail("Expected exception: User is not a shop owner");
            } catch (Exception e) {

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
            marketSystem.register(newManager, "newManager@gmail.com", "Passw0rd!!!");
            marketSystem.appointShopManager(shopOwner, newManager, shopName);
            // Check new shop manager permissions
            Collection<String> shopManagers = marketSystem.getShopManagers(shopName);
            assertEquals(3, shopManagers.size());
            assertTrue(marketSystem.isShopManager(newManager, shopName));

            // Check non-shop owner cannot appoint new shop manager
            String nonShopOwner = "nonShopOwner";
            marketSystem.register(nonShopOwner, "nonShopOwner@gmail.com", "Passw0rd!!!");
            marketSystem.login(nonShopOwner,  "Passw0rd!!!");
            try {
                marketSystem.appointShopManager(nonShopOwner, "newManager2", shopName);
                fail("Expected exception: User is not a shop owner");
            } catch (Exception e) {
//                assertEquals("User is not a shop owner", e.getMessage());
            }
            assertFalse(marketSystem.isShopManager("newManager2", shopName));
            marketSystem.unregister(nonShopOwner);
        } catch (Exception e) {
            fail("Failed to test appointing shop manager: " + e.getMessage());
        }
    }
  //todo: for later versions

//    @Test
//    public void testRemoveShopOwner() {
//        try {
//            // Remove shop owner
//            marketSystem.removeShopOwner(shopOwner, shopManager1, shopName);
//            // Check new shop owner permissions
//            Collection<String> shopOwners = marketSystem.getShopOwners(shopName);
//            assertEquals(0, shopOwners.size());
//            assertFalse(marketSystem.isShopOwner(shopOwner, shopName));
//
//            // Check non-shop owner cannot remove shop owner
//            String nonShopOwner = "nonShopOwner";
//            marketSystem.register(nonShopOwner, "nonShopOwner@gmail.com", "Passw0rd!!!");
//            try {
//                marketSystem.removeShopOwner(nonShopOwner, shopManager1, shopName);
//                fail("Expected exception: User is not a shop owner");
//            } catch (Exception e) {
////                assertEquals("User is not a shop owner", e.getMessage());
//            }
//            assertFalse(marketSystem.isShopOwner(shopManager1, shopName));
//            marketSystem.login(nonShopOwner, "Passw0rd!!!");
//            marketSystem.unregister(nonShopOwner);
//        } catch (Exception e) {
//            fail("Failed to test removing shop owner: " + e.getMessage());
//            //todo: failed because removeShopOwner not implemented yet
//        }
//    }
//    //todo: for later versions
//    @Test
//    public void testRemoveShopManager() {
//        try {
//            // Remove shop manager
//            marketSystem.removeShopManager(shopOwner, shopManager1, shopName);
//            // Check new shop manager permissions
//            Collection<String> shopManagers = marketSystem.getShopManagers(shopName);
//            assertEquals(1, shopManagers.size());
//            assertFalse(marketSystem.isShopManager(shopManager1, shopName));
//
//            // Check non-shop owner cannot remove shop manager
//            String nonShopOwner = "nonShopOwner";
//            marketSystem.register(nonShopOwner, "nonShopOwner@gmail.com", "Passw0rd!!!");
//            try {
//                marketSystem.removeShopManager(nonShopOwner, shopManager2, shopName);
//                fail("Expected exception: User is not a shop owner");
//            } catch (Exception e) {
////                assertEquals("User is not a shop owner", e.getMessage());
//            }
//            assertTrue(marketSystem.isShopManager(shopManager2, shopName));
//            marketSystem.login(nonShopOwner, "Passw0rd!!!");
//            marketSystem.unregister(nonShopOwner);
//        } catch (Exception e) {
//            fail("Failed to test removing shop manager: " + e.getMessage());
//            //todo: failed because removeShopOwner not implemented yet
//        }
//    }
}
