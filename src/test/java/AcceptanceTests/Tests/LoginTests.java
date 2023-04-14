package AcceptanceTests.Tests;

import AcceptanceTests.MarketSystemBridge;
import AcceptanceTests.MarketSystemRealBridge;

import org.junit.jupiter.api.*;
import static org.junit.Assert.*;

public class LoginTests {

    private MarketSystemBridge market= new MarketSystemRealBridge();

    @BeforeEach
    public void setUp() throws Exception {
        market.init();
    }

    @AfterEach
    public void tearDown() {
        market.clearData();
    }

    @Test
    public void testSuccessfulLogin() {
        try {
            // Register a new user
            String userName = "johndoe";
            String email = "johndoe@example.com";
            String password = "Passw0rd!!!";
            market.register(userName, email, password);

            // Login as the registered user
            market.login(userName, password);
        } catch (Exception e) {
            fail("Exception thrown while registering or logging in user: " + e.getMessage());
        }
    }

    @Test
    public void testIncorrectCredentials() throws Exception {
        // Register a new user
        String userName = "johndoe";
        String email = "johndoe@example.com";
        String password = "Passw0rd!!!";
        market.register(userName, email, password);

        // Try to login with incorrect password
        assertThrows(Exception.class, () -> market.login(userName, "wrongpassword"));
    }

    @Test
    public void testAlreadyLoggedIn() throws Exception {
        // Register a new user
        String userName = "johndoe";
        String email = "johndoe@example.com";
        String password = "Passw0rd!!!";
        market.register(userName, email, password);

        // Login as the registered user
        market.login(userName, password);
        // Try to login again to the same account
        assertThrows(Exception.class, () -> market.login(userName, password));
    }
}
