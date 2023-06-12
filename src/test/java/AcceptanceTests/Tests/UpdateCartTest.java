package AcceptanceTests.Tests;

import AcceptanceTests.MarketSystemBridge;
import AcceptanceTests.MarketSystemRealBridge;
import AcceptanceTests.ProductBridge;
import AcceptanceTests.ShoppingCartBridge;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import java.util.Collection;

import static com.helger.commons.mock.CommonsAssert.assertEquals;
import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertTrue;
import static org.junit.jupiter.api.Assertions.fail;


public class UpdateCartTest {
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
        market.addNewProduct("testUser", "My Shop", "item1", category, "Item 1 description", 10.0,10);
        market.logout("testUser");
    }

    @AfterEach
    public void tearDown() {
        market.logout(tempUserName);
        market.clearData();
    }

    @Test
    public void testEmptyCart() {
        try {
            ShoppingCartBridge cart = market.getCart(tempUserName);

            assertTrue(cart.isEmpty(), "Cart is not empty");

        } catch (Exception e) {
            fail("Exception thrown while testing empty cart: " + e.getMessage());
        }
    }

    @Test
    public void testAddProductQuantityInCart() {
        try {

            Collection<ProductBridge> products = market.basicSearch(tempUserName, "item1");
            ProductBridge product = products.iterator().next();

            // add one item to the cart
            market.addProductsToCart(tempUserName, shopName, product.getProductName(), 1);

            // update the quantity to 2
            market.updateProductQuantityInCart(tempUserName, shopName, product.getProductName(), 2);

            // check that the product is in the cart and has the correct quantity
            assertTrue(market.getCart(tempUserName).getProductNames().contains(product.getProductName()), "Product not in cart");
            assertEquals("Incorrect quantity of product in cart", 2, market.getCart(tempUserName).getQuantityOfProduct(product.getProductName()));
            //todo: again cart not the same object

        } catch (Exception e) {
            fail("Exception thrown while testing update product quantity in cart: " + e.getMessage());
        }
    }

    @Test
    public void testReduceProductQuantityInCart() {
        try {

            Collection<ProductBridge> products = market.basicSearch(tempUserName, "item1");
            ProductBridge product = products.iterator().next();

            // add one item to the cart
            market.addProductsToCart(tempUserName, shopName, product.getProductName(), 5);

            // update the quantity to 3
            market.updateProductQuantityInCart(tempUserName, shopName, product.getProductName(), 3);

            // check that the product is in the cart and has the correct quantity
            assertTrue(market.getCart(tempUserName).getProductNames().contains(product.getProductName()), "Product not in cart");
            int amount = market.getCart(tempUserName).getQuantityOfProduct(product.getProductName());
            assertEquals("Incorrect quantity of product in cart", 3,amount);

        } catch (Exception e) {
            fail("Exception thrown while testing update product quantity in cart: " + e.getMessage());
        }
    }

    @Test
    public void testAddTooMuchProductQuantityInCart() {
        try {

            Collection<ProductBridge> products = market.basicSearch(tempUserName, "item1");
            ProductBridge product = products.iterator().next();

            // add one item to the cart
            market.addProductsToCart(tempUserName, shopName, product.getProductName(), 1);

            // update the quantity to 2
            market.updateProductQuantityInCart(tempUserName, shopName, product.getProductName(), 200);
            fail("Added way too much product.");
        } catch (Exception ignored) {
        }
    }
}
