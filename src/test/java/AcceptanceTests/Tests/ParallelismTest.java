package AcceptanceTests.Tests;

import AcceptanceTests.MarketSystemBridge;
import AcceptanceTests.MarketSystemRealBridge;
import org.junit.After;
import org.junit.Before;
import org.junit.jupiter.api.*;
import org.junit.jupiter.api.BeforeEach;

import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.concurrent.TimeUnit;

import static org.junit.Assert.assertTrue;

public class ParallelismTest {

    private MarketSystemBridge marketSystem;
    private ExecutorService executor;

    @BeforeEach
    public void setUp() {
        // Instantiate the MarketSystem and initialize it
        marketSystem = new MarketSystemRealBridge();
        marketSystem.init();

        // Instantiate an executor with 10 threads
        executor = Executors.newFixedThreadPool(10);
    }

    @After
    public void tearDown() {
        // Close the executor and unregister all users
        executor.shutdown();
        marketSystem = null;
    }

    @Test
    public void testTwoUsersBuySameProduct() throws Exception {
        // Create two users
        String user1 = "user1";
        String user2 = "user2";
        marketSystem.register(user1, "user1@gmail.com", "password1");
        marketSystem.register(user2, "user2@gmail.com", "password2");

        // Create a shop and add a product with quantity 1
        String shopName = "shop1";
        String productName = "product1";
        marketSystem.createShop(user1, shopName);
        marketSystem.addNewProduct(user1, shopName, productName, "description", 10, 1);

        // User1 and User2 both try to buy the product
        Runnable task1 = () -> marketSystem.addProductsToCart(user1, shopName, productName, 1);
        Runnable task2 = () -> marketSystem.addProductsToCart(user2, shopName, productName, 1);
        executor.submit(task1);
        executor.submit(task2);

        // Wait for the threads to finish
        executor.shutdown();
        executor.awaitTermination(5, TimeUnit.SECONDS);

        // Assert that only one user was able to buy the product
        assertTrue(marketSystem.getProductQuantityInShop(shopName, productName) == 0);
        assertTrue(marketSystem.getQuantityOfProductPurchasedInShop(shopName, productName) == 1);
    }

    @Test
    public void testShopOwnerDeleteProductAndUserBuys() throws Exception {
        // Create a user and a shop
        String user = "user1";
        String shopName = "shop1";
        marketSystem.register(user, "user1@gmail.com", "password1");
        marketSystem.createShop(user, shopName);

        // Add a product with quantity 1
        String productName = "product1";
        marketSystem.addNewProduct(user, shopName, productName, "description", 10, 1);

        // Delete the product and try to buy it at the same time
        Runnable task1 = () -> {
            try {
                marketSystem.removeProduct(user, shopName, productName);
            } catch (Exception e) {
                e.printStackTrace();
            }
        };
        Runnable task2 = () -> marketSystem.addProductsToCart(user, shopName, productName, 1);
        executor.submit(task1);
        executor.submit(task2);

        // Wait for the threads to finish
        executor.shutdown();
        executor.awaitTermination(5, TimeUnit.SECONDS);
        // Assert that the product was not purchased
        assertTrue(marketSystem.getProductQuantityInShop(shopName, productName) == 1);
        assertTrue(marketSystem.getQuantityOfProductPurchasedInShop(shopName, productName) == 0);
    }
}
