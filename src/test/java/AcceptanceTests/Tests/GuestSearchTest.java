package AcceptanceTests.Tests;

import AcceptanceTests.MarketSystemBridge;
import AcceptanceTests.MarketSystemRealBridge;
import AcceptanceTests.ProductBridge;
import org.junit.After;
import org.junit.Before;
import org.junit.jupiter.api.*;
import org.junit.jupiter.api.BeforeEach;

import java.util.Collection;

import static org.junit.Assert.*;

public class GuestSearchTest {

    private MarketSystemBridge market= new MarketSystemRealBridge();
    private String tempUserName;
    private String category = "category";

    @BeforeEach
    public void setUp() throws Exception {
        market = new MarketSystemRealBridge();
        market.init();
        tempUserName = market.startSession();

        // create some shops with products for testing
        market.register("johndoe", "johndoe@example.com", "Passw0rd!!!");
        market.login("johndoe", "Passw0rd!!!");
        market.createShop("johndoe","My Shop");
        market.addNewProduct("johndoe", "My Shop", "item1", category,"Item 1 description", 10.0);
        market.addNewProduct("johndoe", "My Shop", "item2", category, "Item 2 description", 15.0);
        market.logout("johndoe");

        market.register("janedoe", "janedoe@example.com", "Passw0rd!!!");
        market.login("janedoe", "Passw0rd!!!");
        market.createShop("janedoe","Jane's Shop");
        market.addNewProduct("janedoe", "Jane's Shop", "item3", category,"Item 3 description", 20.0);
        market.addNewProduct("janedoe", "Jane's Shop", "item4", category,"Item 4 description", 25.0);
        market.logout("janedoe");
    }

    @After
    public void tearDown() {
        market.logout(tempUserName);
        market.clearData();
    }

    @Test
    public void testBasicSearch() {
        try {
            // Search for product by name
            Collection<ProductBridge> results = market.basicSearch(tempUserName, "item1");
            assertEquals("Incorrect number of products returned by basic search", 1, results.size());
            assertTrue("Product not found in search results", results.stream().anyMatch(p -> p.getProductName().equals("item1")));

            // Search for non-existing product
            results = market.basicSearch(tempUserName, "non-existing product");
            assertTrue("Search for non-existing product returned results", results.isEmpty());

        } catch (Exception e) {
            fail("Exception thrown while testing basic search: " + e.getMessage());
        }
    }

    @Test
    public void testExtendedSearch() {
        try {
            // Search for product by name and category
            Collection<ProductBridge> results = market.extendedSearch(tempUserName, "item", 0.0, 100.0, "category");
            assertEquals("Incorrect number of products returned by extended search", 4, results.size());
            assertTrue("Product not found in search results", results.stream().anyMatch(p -> p.getProductName().equals("item1")));
            assertTrue("Product not found in search results", results.stream().anyMatch(p -> p.getProductName().equals("item2")));
            assertTrue("Product not found in search results", results.stream().anyMatch(p -> p.getProductName().equals("item3")));
            assertTrue("Product not found in search results", results.stream().anyMatch(p -> p.getProductName().equals("item4")));

            // Search for product within price range
            results = market.extendedSearch(tempUserName, "item", 15.0, 25.0, "");
            assertEquals("Incorrect number of products returned by extended search", 2,
                    results.size());
            assertTrue("Product not found in search results", results.stream().anyMatch(p -> p.getProductName().equals("item2")));
            assertTrue("Product not found in search results", results.stream().anyMatch(p -> p.getProductName().equals("item4")));
            // Search for non-existing product
            results = market.extendedSearch(tempUserName, "non-existing product", 0.0, 100.0, "");
            assertTrue("Search for non-existing product returned results", results.isEmpty());

            // Search for product in non-existing category
            results = market.extendedSearch(tempUserName, "item", 0.0, 100.0, "non-existing category");
            assertTrue("Search for product in non-existing category returned results", results.isEmpty());

        } catch (Exception e) {
            fail("Exception thrown while testing extended search: " + e.getMessage());
        }
    }
}






