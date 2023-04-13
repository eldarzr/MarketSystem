package AcceptanceTests.Tests;

import AcceptanceTests.MarketSystemBridge;
import AcceptanceTests.MarketSystemRealBridge;
import AcceptanceTests.ProductBridge;
import org.junit.*;

import java.util.Collection;

import static org.junit.Assert.*;

public class ShopClosureTest {

    private static MarketSystemBridge marketSystem;
    private static String shopOwner;
    private static String shopManager;
    private static String shopName;
    private static String productName;
    private static double productPrice;

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

            marketSystem.register("shopManager", "shopManager@gmail.com", "123456");
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
            marketSystem.addNewProduct(shopOwner, shopName, productName, "blah blah", productPrice, 1);
        } catch (Exception e) {
            fail("Failed to set up test: " + e.getMessage());
        }
    }

    @AfterClass
    public static void tearDownClass() {
        // Unregister users and clear data
        marketSystem.unregister("shopOwner");
        marketSystem.unregister("shopManager");
        marketSystem.clearData();
    }

    @Before
    public void setUp() {
        // Open shop
        marketSystem.openShop(shopOwner, shopName);
    }

    @After
    public void tearDown() {
        // Close shop
        marketSystem.closeShop(shopOwner, shopName);
    }

    @Test
    public void testShopClosure() {
        // Check initial shop status
        assertTrue(marketSystem.isShopOpen(shopName));

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

        // Check shop status
        assertFalse(marketSystem.isShopOpen(shopName));

        // Check product search
        try {
            Collection<ProductBridge> searchResults = marketSystem.basicSearch(shopOwner, productName);
            assertEquals(0, searchResults.size());
        } catch (Exception e) {
            fail("Failed to search for product: " + e.getMessage());
        }
    }
}
