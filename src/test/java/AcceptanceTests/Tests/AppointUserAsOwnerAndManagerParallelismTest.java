package AcceptanceTests.Tests;

import AcceptanceTests.MarketSystemBridge;
import AcceptanceTests.MarketSystemRealBridge;
import org.junit.After;
import org.junit.Before;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import static org.junit.Assert.*;

public class AppointUserAsOwnerAndManagerParallelismTest {
    MarketSystemBridge system;

    @BeforeEach
    public void setUp() {
        system = new MarketSystemRealBridge();
    }

    @After
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
        system.init();
        system.register(shopOwner1, "shopowner1@gmail.com", "Passw0rd!!!");
        system.login(shopOwner1, "Passw0rd!!!");
        system.createShop(shopOwner1, shopName);
        system.logout(shopOwner1);
        system.register(shopOwner2, "shopowner2@gmail.com", "Passw0rd!!!");
        system.login(shopOwner2, "Passw0rd!!!");
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
                fail("Could not appoint user as shop manager.");
            }
        };
        // Run in parallel
        Thread t1 = new Thread(appointAsOwner);
        Thread t2 = new Thread(appointAsManager);
        t1.start();
        t2.start();
        t1.join();
        t2.join();
        // Assert
        assertTrue(system.isShopOwner(userName, shopName));
        assertTrue(system.isShopManager(userName, shopName));
    }
}
