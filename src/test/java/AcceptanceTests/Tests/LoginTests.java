package AcceptanceTests.Tests;
import AcceptanceTests.MarketSystemBridge;
import AcceptanceTests.MarketSystemRealBridge;
import AcceptanceTests.PaymentServiceProviderBridge;
import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import static org.junit.Assert.*;

public class LoginTests {

    @Mock
    private PaymentServiceProviderBridge paymentSystem;

    private MarketSystemBridge market;

    @Before
    public void setUp() {
        MockitoAnnotations.initMocks(this);
        market = new MarketSystemRealBridge();
        market.init();
        market.addPaymentProvider(paymentSystem);
    }

    @After
    public void tearDown() {
        market = null;
    }

    @Test
    public void testSuccessfulLogin() {
        try {
            // Register a new user
            String userName = "johndoe";
            String email = "johndoe@example.com";
            String password = "password";
            market.register(userName, email, password);

            // Login as the registered user
            market.login(userName, password);
            assertNotNull("Shopping cart is null after successful login", market.getCart(userName));
            assertTrue("Guest is still logged in after successful login", market.isLogged(userName));
        } catch (Exception e) {
            fail("Exception thrown while registering or logging in user: " + e.getMessage());
        }
    }

    @Test(expected = Exception.class)
    public void testIncorrectCredentials() throws Exception {
        // Register a new user
        String userName = "johndoe";
        String email = "johndoe@example.com";
        String password = "password";
        market.register(userName, email, password);

        // Try to login with incorrect password
        market.login(userName, "wrongpassword");
    }

    @Test(expected = Exception.class)
    public void testAlreadyLoggedIn() throws Exception {
        // Register a new user
        String userName = "johndoe";
        String email = "johndoe@example.com";
        String password = "password";
        market.register(userName, email, password);

        // Login as the registered user
        market.login(userName, password);
        assertNotNull("Shopping cart is null after successful login", market.getCart(userName));

        // Try to login again to the same account
        market.login(userName, password);
    }
}
