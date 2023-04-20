package AcceptanceTests.Tests;

import AcceptanceTests.MarketSystemBridge;
import AcceptanceTests.MarketSystemRealBridge;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.concurrent.TimeUnit;

import static org.junit.jupiter.api.Assertions.assertTrue;

public class ParallelismTest {

    private MarketSystemBridge marketSystem;
    private ExecutorService executor;

    @BeforeEach
    public void setUp() throws Exception {
        // Instantiate the MarketSystem and initialize it
        marketSystem = new MarketSystemRealBridge();
        marketSystem.clearData();
        marketSystem.init();

        // Instantiate an executor with 10 threads
        executor = Executors.newFixedThreadPool(10);
    }

    @AfterEach
    public void tearDown() {
        // Close the executor and unregister all users
        executor.shutdown();
        marketSystem.clearData();
        marketSystem = null;
    }

    @Test
    public void testTwoUsersBuySameProduct() throws Exception {
        // Create two users
        String user1 = "user1";
        String user2 = "user2";
        String password = "Password1";
        marketSystem.register(user1, "user1@gmail.com", password);
        marketSystem.register(user2, "user2@gmail.com", password);

        //login users
        marketSystem.login(user1,password);
        marketSystem.login(user2,password);


        // Create a shop and add a product with quantity 1
        String shopName = "shop1";
        String productName = "product1";
        marketSystem.createShop(user1, shopName);
        marketSystem.addNewProduct(user1, shopName, productName, "category","description", 10, 1);

        // User1 and User2 both try to buy the product
        Runnable task1 = () -> {
            try{
                marketSystem.addProductsToCart(user1, shopName, productName, 1);
            }catch (Exception e){
            }
        };
        Runnable task2 = () -> {
            try{
                marketSystem.addProductsToCart(user2, shopName, productName, 1);
            }catch (Exception e){

            }
        };
        executor.submit(task1);
        executor.submit(task2);

        // Wait for the threads to finish
        executor.shutdown();
        executor.awaitTermination(5, TimeUnit.SECONDS);

        //todo: this assert is not true, both of the users can add the product to their cart but only one can buy it (as long that this is the quantity provided)
        // Assert that only one user was able to buy the product
        assertTrue(marketSystem.getProductQuantityInShop(shopName, productName) == 1);
    }

    @Test
    public void testShopOwnerDeleteProductAndUserBuys() throws Exception {
        // Create a user and a shop
        String user = "user1";
        String shopName = "shop1";
        String password = "Password1";
        marketSystem.register(user, "user1@gmail.com", password);
        marketSystem.login(user,password);
        marketSystem.createShop(user, shopName);

        // Add a product with quantity 1
        String productName = "product1";
        marketSystem.addNewProduct(user, shopName, productName, "category","description", 10, 1);

        // Delete the product and try to buy it at the same time
        Runnable task1 = () -> {
            try {
                marketSystem.removeProduct(user, shopName, productName);
            } catch (Exception e) {
                e.printStackTrace();
            }
        };
        Runnable task2 = () -> {
            try{
                marketSystem.addProductsToCart(user, shopName, productName, 1);
            }catch (Exception e){

            }
        };
        executor.submit(task1);
        executor.submit(task2);

        // Wait for the threads to finish
        executor.shutdown();
        executor.awaitTermination(5, TimeUnit.SECONDS);
        // Assert that the product was not purchased
        assertTrue(marketSystem.getProductQuantityInShop(shopName, productName) == -1);
    }
}
