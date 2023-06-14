package AcceptanceTests.Tests;

import AcceptanceTests.MarketSystemBridge;
import AcceptanceTests.MarketSystemRealBridge;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;


public class TwoOnwerAppointingTheSameManagerParallelismTest {

    private MarketSystemBridge marketSystem;


    private String shopOwner1;
    private String shopOwner2;
    private String shopOwner3;

    private String shopManager;
    private String shopName = "Shopify";
    private int exception_counter = 0;

    @BeforeEach
    public void setUp() throws Exception {
        marketSystem = new MarketSystemRealBridge();
        marketSystem.init();
        shopOwner1 = "Owner1";
        shopOwner2 = "Owner2";
        shopOwner3 = "Owner3";
        String password = "Passw0rd1";

        shopManager = "Manager";
        //Register shopManger
        marketSystem.register(shopManager, "managerrr@example.com", password);


        // Register and log in the shop owners
        marketSystem.register(shopOwner1, "Owner1@example.com", password);
        marketSystem.login(shopOwner1, password);
        marketSystem.register(shopOwner2, "Onwer2@example.com", password);
        marketSystem.login(shopOwner2, password);
        marketSystem.register(shopOwner3, "Onwer3@example.com", password);
        marketSystem.login(shopOwner3, password);
        exception_counter = 0;
    }

    @AfterEach
    public void tearDown() {
        marketSystem.clearData();
        exception_counter = 0;
    }

    @Test
    public void testAppointShopManagerParallelism() throws Exception {
        // Create a shop for each shop owner
        marketSystem.createShop(shopOwner1, shopName);

        // Open the shops
        //marketSystem.openShop(shopOwner1, shopName);
        marketSystem.appointShopOwner(shopOwner1, shopOwner2, shopName);




        // Both shop owners attempt to appoint the same user as manager at the same time
        Thread thread1 = new Thread(() -> {
            try {
                marketSystem.appointShopManager(shopOwner1,shopManager, shopName);
            } catch (Exception e) {
                increaseCounter();
            } finally {
                marketSystem.logout(shopOwner1);
            }
        });

        Thread thread2 = new Thread(() -> {
            try {
                marketSystem.appointShopManager(shopOwner2,shopManager, shopName);
            } catch (Exception e) {
                increaseCounter();
            } finally {
                marketSystem.logout(shopOwner2);
            }
        });

        // Start both threads
        thread1.start();
        thread2.start();

        // Wait for both threads to finish
        thread1.join();
        thread2.join();

        // Ensure that only one shop owner was able to appoint the user as manager
        assertEquals(1,exception_counter);
    }

    private void increaseCounter() {
        exception_counter++;
    }

    @Test
    public void testAppointShopManagerParallelism2() throws Exception {
        // Create a shop for each shop owner
        marketSystem.createShop(shopOwner1, shopName);

        // Open the shops
        //marketSystem.openShop(shopOwner1, shopName);
        marketSystem.appointShopOwner(shopOwner1, shopOwner2, shopName);
        marketSystem.appointShopOwner(shopOwner1, shopOwner3, shopName);
        marketSystem.approveOwner(shopOwner1,shopOwner3,shopName);
        marketSystem.approveOwner(shopOwner2,shopOwner3,shopName);



        // Both shop owners attempt to appoint the same user as manager at the same time
        Thread thread1 = new Thread(() -> {
            try {
                marketSystem.appointShopManager(shopOwner1,shopManager, shopName);
            } catch (Exception e) {
                increaseCounter();
            } finally {
                marketSystem.logout(shopOwner1);
            }
        });

        Thread thread2 = new Thread(() -> {
            try {
                marketSystem.appointShopManager(shopOwner2,shopManager, shopName);
            } catch (Exception e) {
                increaseCounter();
            } finally {
                marketSystem.logout(shopOwner2);
            }
        });


        Thread thread3 = new Thread(() -> {
            try {
                marketSystem.appointShopManager(shopOwner3,shopManager, shopName);
            } catch (Exception e) {
                increaseCounter();
            } finally {
                marketSystem.logout(shopOwner3);
            }
        });

        // Start both threads
        thread1.start();
        thread2.start();
        thread3.start();

        // Wait for both threads to finish
        thread1.join();
        thread2.join();
        thread3.join();

        // Ensure that only one shop owner was able to appoint the user as manager
        assertEquals(2,exception_counter);
    }
}
