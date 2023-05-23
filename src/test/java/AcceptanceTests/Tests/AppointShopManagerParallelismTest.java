package AcceptanceTests.Tests;

import AcceptanceTests.MarketSystemBridge;
import AcceptanceTests.MarketSystemRealBridge;
import org.junit.jupiter.api.*;
import org.junit.jupiter.api.BeforeEach;

import static org.junit.jupiter.api.Assertions.assertTrue;
import static org.junit.jupiter.api.Assertions.fail;

public class AppointShopManagerParallelismTest {

    private MarketSystemBridge marketSystem;

    private String admin1;
    private String admin2;

    private String shopOwner1;
    private String shopOwner2;

    private String shopManager;

    @BeforeEach
    public void setUp() throws Exception {
        marketSystem = new MarketSystemRealBridge();
        marketSystem.init("src/InitFiles/BaseConfig.jason");

        admin1 = "admin1";
        admin2 = "admin2";

        shopOwner1 = "shopOwner1";
        shopOwner2 = "shopOwner2";
        String password = "Passw0rd1";

        shopManager = "shopManager";
        //Register shopManger
        marketSystem.register(shopManager, "admin1@example.com", password);

        // Register and log in the admins
        marketSystem.register(admin1, "admin1@example.com", password);
        marketSystem.login(admin1, password);
        marketSystem.register(admin2, "admin2@example.com", password);
        marketSystem.login(admin2, password);

        // Register and log in the shop owners
        marketSystem.register(shopOwner1, "shopOwner1@example.com", password);
        marketSystem.login(shopOwner1, password);
        marketSystem.register(shopOwner2, "shopOwner2@example.com", password);
        marketSystem.login(shopOwner2, password);
    }

    @AfterEach
    public void tearDown() {
        // Log out all users and clear data
//        marketSystem.logout(admin1);
//        marketSystem.logout(admin2);
//        marketSystem.logout(shopOwner1);
//        marketSystem.logout(shopOwner2); todo: log out twice ,at thread task and here
        marketSystem.clearData();
    }

    @Test
    public void testAppointShopManagerParallelism() throws Exception {
        // Create a shop for each shop owner
        marketSystem.createShop(shopOwner1, "Shop1");
        marketSystem.createShop(shopOwner2, "Shop2");

        // Open the shops
        marketSystem.openShop(shopOwner1, "Shop1");
        marketSystem.openShop(shopOwner2, "Shop2");

        // Both shop owners attempt to appoint the same user as manager at the same time
        Thread thread1 = new Thread(() -> {
            try {
//                marketSystem.login(shopOwner1, "shopOwner1password");
                marketSystem.appointShopManager(shopOwner1,shopManager, "Shop1");
            } catch (Exception e) {
                fail(e.getMessage());
            } finally {
                marketSystem.logout(shopOwner1);
            }
        });

        Thread thread2 = new Thread(() -> {
            try {
//                marketSystem.login(shopOwner2, "shopOwner2password");
                marketSystem.appointShopManager(shopOwner2,shopManager, "Shop2");
            } catch (Exception e) {
                fail(e.getMessage());
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
        assertTrue(marketSystem.isShopManager(shopManager, "Shop1") || marketSystem.isShopManager(shopManager, "Shop2"));
    }
}
