package AcceptanceTests.Tests;

import AcceptanceTests.MarketSystemBridge;
import AcceptanceTests.MarketSystemRealBridge;
import AcceptanceTests.PaymentServiceProviderBridge;
import org.junit.After;
import org.junit.Before;
import org.junit.jupiter.api.*;
import org.junit.jupiter.api.BeforeEach;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import static org.junit.Assert.*;

public class ExitTests {
    @Mock
    private PaymentServiceProviderBridge paymentSystem;

    private MarketSystemBridge market= new MarketSystemRealBridge();

    private String tempUserName;
    private String category = "category";

    @BeforeEach
    public void setUp() throws Exception {
        MockitoAnnotations.initMocks(this);
        market = new MarketSystemRealBridge();
        market.init();
        market.addPaymentProvider(paymentSystem);
        tempUserName = market.startSession();

        // create a new shop
        String shopName = "My Shop";
        market.register("johndoe", "johndoe@example.com", "Passw0rd!!!");
        market.login("johndoe", "Passw0rd!!!");
        market.createShop("johndoe", shopName);
        market.addNewProduct("johndoe", shopName, "item1", category, "Item 1 description", 10.0);
        market.addNewProduct("johndoe", shopName, "item2", category, "Item 2 description", 15.0);
        market.logout("johndoe");
    }

    @After
    public void tearDown() {
        market.logout(tempUserName);
        market.clearData();
    }

    @Test
    public void testExitAsGuest() {
        try {
            // Add items to cart as a guest
            market.addProductsToCart(tempUserName, "My Shop", "item1", 1);
            market.addProductsToCart(tempUserName, "My Shop", "item2", 1);
            assertNotNull("Guest shopping cart is null after adding items", market.getCart(tempUserName));
            assertTrue("Guest is not logged in after startSession", market.isGuest(tempUserName));

            // Leave the market as guest
            market.logout(tempUserName);
            assertNull("Shopping cart is not null after guest exits the market", market.getCart(tempUserName));
            assertFalse("Guest is still logged in after guest exits the market", market.isGuest(tempUserName));

        } catch (Exception e) {
            fail("Exception thrown while testing exit as guest: " + e.getMessage());
        }
    }

    @Test
    public void testExitAsRegisteredUser() {
        try {
            String userName = "johndoe";
            String shopName = "My Shop";

            // Add items to cart as registered user
            market.login(userName, "Passw0rd!!!");
            market.addProductsToCart(userName, shopName, "item1", 1);
            market.addProductsToCart(userName, shopName, "item2", 1);
            assertNotNull("Shopping cart is null after adding items", market.getCart(userName));
            assertFalse("User is not logged in after successful login", market.isGuest(userName));

            // Leave the market as registered user
            market.logout(userName);
            assertNull("Shopping cart is not null after registered user exits the market", market.getCart(userName));
            assertFalse("User is still logged in after registered user exits the market", market.isGuest(userName));

        } catch (Exception e) {
            fail("Exception thrown while testing exit as registered user: " + e.getMessage());
        }
    }
}



