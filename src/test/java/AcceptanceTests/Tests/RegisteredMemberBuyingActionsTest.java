package AcceptanceTests.Tests;

import AcceptanceTests.*;
import org.junit.After;
import org.junit.Before;
import org.junit.jupiter.api.*;
import org.junit.jupiter.api.BeforeEach;

import java.util.Collection;

import static org.junit.Assert.*;

public class RegisteredMemberBuyingActionsTest {
    private MarketSystemBridge market= new MarketSystemRealBridge();
    private String tempUserName;
    private ShoppingCartBridge cart;
    private ShopBridge shop;
    private ProductBridge product;

    // initialize the MarketSystemRealBridge object before each test
    @BeforeEach
    public void setUp() throws Exception {
        market = new MarketSystemRealBridge();
        market.init();
        tempUserName = market.startSession();

        // create a shop with a product for testing
        market.register("testUser", "testUser@example.com", "Passw0rd!!!");
        market.login("testUser", "Passw0rd!!!");
        market.createShop("testUser", "My Shop");
        market.addNewProduct("testUser", "My Shop", "item1", "Item 1 description", 10.0, 100);
        market.logout("testUser");

        cart = market.getCart(tempUserName);

        // search for the product and get a reference to it
        Collection<ProductBridge> products = market.basicSearch(tempUserName, "item1");
        product = products.iterator().next();

        shop = market.getShop("testUser", "My Shop");

        // add the product to the cart
        market.addProductsToCart(tempUserName, product.getShopName(), product.getProductName(), 1);
    }

    // clean up after each test by logging out the user and nullifying objects
    @After
    public void tearDown() {
        market.logout(tempUserName);
        market.clearData();
        cart = null;
        shop = null;
        product = null;
    }

    // test that the cart is saved when a registered user logs out
    @Test
    public void testCartSavedOnLogout() {
        try {
            // log in as registered user
            market.login("testUser", "Passw0rd!!!");

            // log out and verify that the cart is saved
            market.logout("testUser");

            // verify that the user is considered a guest after logout
            assertTrue("User not considered as guest after logout", market.isGuest(tempUserName));

            // verify that the cart is not empty
            assertFalse("Cart is empty after logout", cart.isEmpty());

            // verify that the product is still in the cart
            Collection<ProductBridge> cartProducts = cart.getProducts();
            assertEquals("Incorrect number of products in cart after logout", 1, cartProducts.size());
            ProductBridge cartProduct = cartProducts.iterator().next();
            assertEquals("Incorrect product name in cart after logout", product.getProductName(), cartProduct.getProductName());
            assertEquals("Incorrect quantity of product in cart after logout", 1, market.getCart(tempUserName).getQuantityOfProduct(product.getProductName()));
        } catch (Exception e) {
            fail("Exception thrown while testing cart saved on logout: " + e.getMessage());
        }
    }

    // test that the cart is deleted when a guest user logs out
    @Test
    public void testCartDeletedOnGuestLogout() {
        try {
            // log out as guest and verify that the cart is emptied
            market.logout(tempUserName);

            assertTrue("User not considered as guest after logout", market.isGuest(tempUserName));

            assertTrue("Cart not emptied after guest logout", cart.isEmpty());
        } catch (Exception e) {
            fail("Exception thrown while testing cart deleted on guest logout: " + e.getMessage());
        }
    }
}
