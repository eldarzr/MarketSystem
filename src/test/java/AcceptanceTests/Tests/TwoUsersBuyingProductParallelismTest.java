package AcceptanceTests.Tests;

import AcceptanceTests.MarketSystemBridge;
import AcceptanceTests.MarketSystemRealBridge;
import AcceptanceTests.PurchaseBridge;
import org.junit.After;
import org.junit.Before;
import org.junit.jupiter.api.*;
import org.junit.jupiter.api.BeforeEach;

import java.util.Collection;
import java.util.concurrent.*;

import static org.junit.Assert.assertEquals;

public class TwoUsersBuyingProductParallelismTest {

        private static final int THREAD_COUNT = 2;
        private static final int TEST_TIMEOUT_MS = 10000;
        private MarketSystemBridge marketSystem;
        private String user1;
        private String user2;
        private String shopName;
        private String productName;

        @BeforeEach
        public void setUp() throws Exception {
            // Initialize market system
            marketSystem = new MarketSystemRealBridge();
            marketSystem.init();

            // Add two users
            user1 = "user1";
            user2 = "user2";
            marketSystem.register(user1, "user1@example.com", "Passw0rd!!!");
            marketSystem.register(user2, "user2@example.com", "Passw0rd!!!");

            //  Login to the market
            marketSystem.login(user1,"Passw0rd!!!");
            marketSystem.login(user2,"Passw0rd!!!");

            // Create a shop
            shopName = "shop1";
            marketSystem.createShop(user1, shopName);

            // Add a product to the shop
            productName = "product1";
            marketSystem.addNewProduct(user1, shopName, productName, "description", 10.0,1);
        }

        @After
        public void tearDown() throws Exception {
            marketSystem = null;
        }

        @Test
        public void testParallelPurchase() throws Throwable {
            // Create two threads that try to purchase the same product at the same time
            ExecutorService executor = Executors.newFixedThreadPool(THREAD_COUNT);
            Callable<Void> task = new Callable<Void>() {
                public Void call() throws Exception {
                    String session = marketSystem.startSession();
                    marketSystem.addProductsToCart(session, shopName, productName, 1);
                    marketSystem.purchaseCart(session);
                    marketSystem.closeSession(session);
                    return null;
                }
            };
            Future<Void> future1 = executor.submit(task);
            Future<Void> future2 = executor.submit(task);

            // Wait for the threads to complete
            try {
                future1.get();
                future2.get();
            } catch (ExecutionException e) {
                throw e.getCause();
            }

            // Check that only one of the purchases was successful
            Collection<PurchaseBridge> purchases = marketSystem.getShopPurchaseHistory(user1, shopName);
            assertEquals(1, purchases.size());
        }


}
