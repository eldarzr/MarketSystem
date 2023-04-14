package AcceptanceTests.Tests;

import AcceptanceTests.MarketSystemBridge;
import AcceptanceTests.MarketSystemRealBridge;
import AcceptanceTests.ProductBridge;
import AcceptanceTests.ShoppingCartBridge;
import org.junit.After;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import java.util.Collection;

import static org.junit.Assert.*;

public class ShoppingCartActionsTest {
    private MarketSystemBridge market= new MarketSystemRealBridge();
    private String tempUserName;
    private String category = "category";
    private String shopName = "My Shop";

    @BeforeEach
    public void setUp() throws Exception {
        market = new MarketSystemRealBridge();
        market.init();
        tempUserName = market.startSession();

        // create a shop with a product for testing
        market.register("testUser", "testUser@example.com", "Passw0rd!!!");
        market.login("testUser", "Passw0rd!!!");
        market.createShop("testUser", "My Shop");
        market.addNewProduct("testUser", "My Shop", "item1", category, "Item 1 description", 10.0);
        market.logout("testUser");
    }

    @After
    public void tearDown() {
        market.logout(tempUserName);
        market.clearData();
    }

    @Test
    public void testEmptyCart() {
        try {
            ShoppingCartBridge cart = market.getCart(tempUserName);

            assertTrue("Cart is not empty", cart.isEmpty());

        } catch (Exception e) {
            fail("Exception thrown while testing empty cart: " + e.getMessage());
        }
    }

    @Test
    public void testAddProductToCart() {
        try {
            ShoppingCartBridge cart = market.getCart(tempUserName);

            Collection<ProductBridge> products = market.basicSearch(tempUserName, "item1");
            ProductBridge product = products.iterator().next();

            market.addProductsToCart(tempUserName, shopName, product.getProductName(), 1);

            assertFalse("Cart is empty", cart.isEmpty());

            assertTrue("Product not in cart", cart.getProductNames().contains(product.getProductName()));
            assertEquals("Incorrect quantity of product in cart", 1, cart.getQuantityOfProduct(product.getProductName()));

        } catch (Exception e) {
            fail("Exception thrown while testing add product to cart: " + e.getMessage());
        }
    }

    @Test
    public void testRemoveProductFromCart() {
        try {
            ShoppingCartBridge cart = market.getCart(tempUserName);

            Collection<ProductBridge> products = market.basicSearch(tempUserName, "item1");
            ProductBridge product = products.iterator().next();

            market.addProductsToCart(tempUserName, shopName, product.getProductName(), 1);

            assertTrue("Product not in cart", cart.getProductNames().contains(product.getProductName()));

            market.removeProductsFromCart(tempUserName, shopName, product.getProductName());

            assertFalse("Product still in cart", cart.getProductNames().contains(product.getProductName()));
            assertEquals("Incorrect quantity of product in cart", 0, cart.getQuantityOfProduct(product.getProductName()));

        } catch (Exception e) {
            fail("Exception thrown while testing remove product from cart: " + e.getMessage());
        }
    }

    @Test
    public void testUpdateProductQuantityInCart() {
        try {
            ShoppingCartBridge cart = market.getCart(tempUserName);

            Collection<ProductBridge> products = market.basicSearch(tempUserName, "item1");
            ProductBridge product = products.iterator().next();

            // add one item to the cart
            market.addProductsToCart(tempUserName, shopName, product.getProductName(), 1);

            // update the quantity to 2
            market.updateProductQuantityInCart(tempUserName, shopName, product.getProductName(), 2);

            // check that the product is in the cart and has the correct quantity
            assertTrue("Product not in cart", cart.getProductNames().contains(product.getProductName()));
            assertEquals("Incorrect quantity of product in cart", 2, cart.getQuantityOfProduct(product.getProductName()));

        } catch (Exception e) {
            fail("Exception thrown while testing update product quantity in cart: " + e.getMessage());
        }
    }
}
