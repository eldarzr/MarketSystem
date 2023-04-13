package AcceptanceTests.Tests;

import AcceptanceTests.DeliveryServiceProviderBridge;
import AcceptanceTests.MarketSystemBridge;
import AcceptanceTests.MarketSystemRealBridge;
import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import static org.junit.Assert.assertTrue;
import static org.junit.Assert.fail;
import static org.mockito.Mockito.when;


public class DeliverySystemTests {

    private MarketSystemBridge market;
    private String userName;
    private String password;
    private String shopName;
    private String productName;
    private double price;
    private int quantity;
    private String deliveryDetails;

    @Mock
    private DeliveryServiceProviderBridge deliveryService;

    @Before
    public void setUp() throws Exception {
        MockitoAnnotations.initMocks(this);
        // Initialize the market system
        market = new MarketSystemRealBridge();
        market.init();

        // Register and login a user
        userName = "johndoe";
        String email = "johndoe@example.com";
        password = "password";
        try {
            market.register(userName, email, password);
            market.login(userName, password);
        } catch (Exception e) {
            fail("Exception thrown while registering or logging in user: " + e.getMessage());
        }

        // Create a shop and add a product
        shopName = "My Shop";
        productName = "My Product";
        price = 10.0;
        quantity = 5;
        try {
            market.createShop(userName, shopName);
            market.addNewProduct(userName, shopName, productName, "My Product Description", price);
            market.updateProductQuantity(userName, shopName, productName, quantity);
        } catch (Exception e) {
            fail("Exception thrown while creating shop, adding product, or updating product quantity: " + e.getMessage());
        }

        // Add product to cart and purchase it
        market.addProductsToCart(userName, shopName, productName, quantity);
        market.purchaseCart(userName);

        // Set up delivery details
        deliveryDetails = "123 Main St., Anytown, USA";
    }

    @After
    public void tearDown() throws Exception {
        // Log out user and clear market data
        market.logout(userName);
        market.clearData();
    }

    @Test
    public void testDeliverySystemContact() {
        try {
            // Mock the delivery system to return true
            when(deliveryService.sendDeliveryRequest(userName, deliveryDetails)).thenReturn(true);
            boolean deliveryConfirmation = deliveryService.sendDeliveryRequest(userName, deliveryDetails);
            assertTrue("Failed to receive delivery confirmation", deliveryConfirmation);
        } catch (Exception e) {
            fail("Exception thrown while contacting delivery system: " + e.getMessage());
        }
    }
}
