package AcceptanceTests.Tests;

import AcceptanceTests.MarketSystemBridge;
import AcceptanceTests.MarketSystemRealBridge;
import AcceptanceTests.ProductBridge;

import org.junit.jupiter.api.*;

import java.util.Collection;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.fail;


public class ClosureTest {

    private static MarketSystemBridge marketSystem = new MarketSystemRealBridge();
    private static String shopOwner;
    private static String shopManager;
    private static String shopName;
    private static String productName;
    private static double productPrice;
    private String category = "category";


    @BeforeEach
    public void setUp() throws Exception {
        // Set up market system
        marketSystem.init();

        // Register users
        try {
            marketSystem.register("shopOwner", "shopOwner@gmail.com", "Passw0rd!!!");
            marketSystem.login("shopOwner", "Passw0rd!!!");
            shopOwner = "shopOwner";

            marketSystem.register("shopManager", "shopManager@gmail.com", "Passw0rd!!!");
            shopManager = "shopManager";
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

        // Appoint shop manager
        try {
            marketSystem.appointShopManager(shopOwner, shopManager, shopName);
        } catch (Exception e) {
            fail("Failed to set up test: " + e.getMessage());
        }

        // Add product to shop
        productName = "TestProduct";
        productPrice = 10;
        try {
            marketSystem.addNewProduct(shopOwner, shopName, productName, "catergory","desc123", productPrice, 1);
        } catch (Exception e) {
            fail("Failed to set up test: " + e.getMessage());
        }
        // Open shop
        marketSystem.openShop(shopOwner, shopName);
    }

    @AfterEach
    public void tearDown() throws Exception {
        marketSystem.clearData();
    }

    @Test
    public void testShopClosure() {
        // Check initial shop status

        // Check product search
        try {
            Collection<ProductBridge> searchResults = marketSystem.basicSearch(shopOwner, productName);
            assertEquals(1, searchResults.size());
        } catch (Exception e) {
            fail("Failed to search for product: " + e.getMessage());
        }

        // Close shop
        try {
            marketSystem.closeShop(shopOwner, shopName);
        } catch (Exception e) {
            fail("Failed to close shop: " + e.getMessage());
        }

        // Check product search
        try {
            Collection<ProductBridge> searchResults = marketSystem.basicSearch(shopOwner, productName);
            assertEquals(0, searchResults.size());
        } catch (Exception e) {
            fail("Failed to search for product: " + e.getMessage());
        }
    }

    @Test
    public void testNonExistingShopClosure() {

        // Close shop
        try {
            marketSystem.closeShop(shopOwner, "test");
            fail("Closed fake shop");
        } catch (Exception ignored) {}
    }

    @Test
    public void testShopDoubleClosure() {
        // Check initial shop status

        // Check product search
        try {
            Collection<ProductBridge> searchResults = marketSystem.basicSearch(shopOwner, productName);
            assertEquals(1, searchResults.size());
        } catch (Exception e) {
            fail("Failed to search for product: " + e.getMessage());
        }

        // Close shop
        try {
            marketSystem.closeShop(shopOwner, shopName);
        } catch (Exception e) {
            fail("Failed to close shop: " + e.getMessage());
        }

        // Close shop again
        try {
            marketSystem.closeShop(shopOwner, shopName);
            fail("Able to close Shop which is already closed");
        } catch (Exception e) {
            assertEquals(e.getMessage(),"the shop is already closed.");
        }
    }
}
