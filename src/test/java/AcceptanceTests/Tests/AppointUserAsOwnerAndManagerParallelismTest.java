package AcceptanceTests.Tests;

import AcceptanceTests.MarketSystemBridge;
import AcceptanceTests.MarketSystemRealBridge;
import AcceptanceTests.ShopBridge;
import BusinessLayer.Shops.Shop;
import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertTrue;
import static org.junit.jupiter.api.Assertions.fail;


public class AppointUserAsOwnerAndManagerParallelismTest {
    MarketSystemBridge system;

    @BeforeEach
    public void setUp() throws Exception {
        system = new MarketSystemRealBridge();
        system.init();
    }

    @AfterEach
    public void tearDown() {
        system.clearData();
    }

    @Test
    public void testAppointUserAsOwnerAndManager() throws Exception {
        // Arrange
        String shopOwner1 = "shopOwner1";
        String shopOwner2 = "shopOwner2";
        String userName = "testUser";
        String shopName = "testShop";
        system.register(shopOwner1, "shopowner1@gmail.com", "Passw0rd!!!");
        system.login(shopOwner1, "Passw0rd!!!");
        system.createShop(shopOwner1, shopName);
        system.register(shopOwner2, "shopowner2@gmail.com", "Passw0rd!!!");
        system.login(shopOwner2, "Passw0rd!!!");
        system.register(userName, "shopowner1@gmail.com", "Passw0rd!!!");
        // Act
        Runnable appointAsOwner = () -> {
            try {
                system.appointShopOwner(shopOwner1, userName, shopName);
            } catch (Exception e) {
                fail("Could not appoint user as shop owner.");
            }
        };
        Runnable appointAsManager = () -> {
            try {
                system.appointShopManager(shopOwner2, userName, shopName);
            } catch (Exception e) {
            }
        };
        // Run in parallel
        Thread t1 = new Thread(appointAsOwner);
        Thread t2 = new Thread(appointAsManager);
        t1.start();
        t2.start();
        t1.join();
        t2.join();
        ShopBridge s=system.getShop(shopOwner1,shopName);
        // Assert
        assertTrue(system.isShopOwner(userName, shopName));
        //assertTrue(system.isShopManager(userName, shopName));
    }
}
