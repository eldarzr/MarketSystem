package AcceptanceTests.Tests;

import AcceptanceTests.MarketSystemBridge;
import AcceptanceTests.MarketSystemRealBridge;
import AcceptanceTests.ProductBridge;
import AcceptanceTests.ShoppingCartBridge;
import org.junit.After;
import org.junit.Before;
import org.junit.Test;

import java.util.Collection;

import static org.junit.Assert.*;

public class GuestShoppingActionsTest {

    private MarketSystemBridge market;
    private String tempUserName;

    @Before
    public void setUp() throws Exception {
        market = new MarketSystemRealBridge();
        market.init();
        tempUserName = market.startSession();

        // create some shops with products for testing
        market.register("johndoe", "johndoe@example.com", "password");
        market.login("johndoe", "password");
        market.createShop("johndoe", "My Shop");
        market.addNewProduct("johndoe", "My Shop", "item1", "Item 1 description", 10.0);
        market.addNewProduct("johndoe", "My Shop", "item2", "Item 2 description", 15.0);
        market.logout("johndoe");

        market.register("janedoe", "janedoe@example.com", "password");
        market.login("janedoe", "password");
        market.createShop("janedoe", "Jane's Shop");
        market.addNewProduct("janedoe", "Jane's Shop", "item3", "Item 3 description", 20.0);
        market.addNewProduct("janedoe", "Jane's Shop", "item4", "Item 4 description", 25.0);
        market.logout("janedoe");
    }

    @After
    public void tearDown() {
        market.logout(tempUserName);
        market = null;
    }
    @Test
    public void testAddProductToCart() {
        try {
            ShoppingCartBridge cart = market.getCart(tempUserName);

            // Add product to cart
            Collection<ProductBridge> products = market.basicSearch(tempUserName, "item1");
            ProductBridge product = products.iterator().next();
            market.addProductsToCart(tempUserName, product.getShopName(), product.getProductName(), 1);
            assertTrue("Product not added to cart", cart.getQuantityOfProduct(product.getProductName()) > 0);

            // Add another product to cart
            products = market.basicSearch(tempUserName, "item4");
            product = products.iterator().next();
            market.addProductsToCart(tempUserName, product.getShopName(), product.getProductName(), 2);
            assertTrue("Product not added to cart", cart.getQuantityOfProduct(product.getProductName()) > 0);
            assertEquals("Incorrect quantity of product in cart", 2, cart.getQuantityOfProduct(product.getProductName()));

        } catch (Exception e) {
            fail("Exception thrown while testing add product to cart: " + e.getMessage());
        }
    }

    @Test
    public void testAddProductToCartNonExistingProduct() {
        try {
            ShoppingCartBridge cart = market.getCart(tempUserName);

            // Add non-existing product to cart
            market.addProductsToCart(tempUserName, "My Shop", "non-existing product", 1);
            assertEquals("Cart is not empty", 0, cart.calculateTotalPrice(), 0.0);

        } catch (Exception e) {
            fail("Exception thrown while testing add product to cart for non-existing product: " + e.getMessage());
        }
    }

    @Test
    public void testAddProductToCartNonExistingShop() {
        try {
            ShoppingCartBridge cart = market.getCart(tempUserName);

            // Add product from non-existing shop to cart
            Collection<ProductBridge> products = market.basicSearch(tempUserName, "item3");
            ProductBridge product = products.iterator().next();
            market.addProductsToCart(tempUserName, "non-existing shop", product.getProductName(), 1);
            assertEquals("Cart is not empty", 0, cart.calculateTotalPrice(), 0.0);
        } catch (Exception e) {
            fail("Exception thrown while testing add product to cart for non-existing shop: " + e.getMessage());
        }
    }

    @Test
    public void testAddProductToCartNegativeQuantity() {
        try {
            ShoppingCartBridge cart = market.getCart(tempUserName);

            // Add product to cart with negative quantity
            Collection<ProductBridge> products = market.basicSearch(tempUserName, "item2");
            ProductBridge product = products.iterator().next();
            market.addProductsToCart(tempUserName, product.getShopName(), product.getProductName(), -1);
            fail("Added product with negative quantity to cart");
        } catch (Exception e) {
            // Expected exception
        }
    }

    @Test
    public void testAddProductToCartZeroQuantity() {
        try {
            ShoppingCartBridge cart = market.getCart(tempUserName);

            // Add product to cart with zero quantity
            Collection<ProductBridge> products = market.basicSearch(tempUserName, "item1");
            ProductBridge product = products.iterator().next();
            market.addProductsToCart(tempUserName, product.getShopName(), product.getProductName(), 0);
            assertEquals("Cart is not empty", 0, cart.calculateTotalPrice(), 0.0);
        } catch (Exception e) {
            fail("Exception thrown while testing add product to cart with zero quantity: " + e.getMessage());
        }
    }

}