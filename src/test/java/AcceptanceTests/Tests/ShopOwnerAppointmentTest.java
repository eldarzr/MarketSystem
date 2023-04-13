package AcceptanceTests.Tests;

import AcceptanceTests.MarketSystemBridge;
import AcceptanceTests.MarketSystemRealBridge;
import org.junit.jupiter.api.*;
import org.junit.After;
import org.junit.Before;
import org.junit.jupiter.api.BeforeEach;


import static org.junit.Assert.*;

public class ShopOwnerAppointmentTest {
    private MarketSystemBridge marketSystem;
    private String founderUserName = "founder";
    private String founderEmail = "founder@gmail.com";
    private String founderPassword = "founder123";
    private String ownerUserName = "owner";
    private String ownerEmail = "owner@gmail.com";
    private String ownerPassword = "owner123";
    private String appointeeUserName = "appointee";
    private String appointeeEmail = "appointee@gmail.com";
    private String appointeePassword = "appointee123";
    private String shopName = "Test Shop";

    @BeforeEach
    public void setUp() throws Exception {
        marketSystem = new MarketSystemRealBridge();
        marketSystem.init();
        marketSystem.register(founderUserName, founderEmail, founderPassword);
        marketSystem.login(founderUserName, founderPassword);
        marketSystem.createShop(founderUserName, shopName);
        marketSystem.logout(founderUserName);
    }

    @After
    public void tearDown() throws Exception {
        marketSystem = null;
    }

    @Test
    public void testShopOwnerAppointment() throws Exception {
        marketSystem.login(founderUserName, founderPassword);
        marketSystem.appointShopOwner(founderUserName, ownerUserName, shopName);
        assertTrue(marketSystem.isShopOwner(ownerUserName, shopName));
        marketSystem.logout(ownerUserName);

        marketSystem.login(ownerUserName, ownerPassword);
        marketSystem.appointShopOwner(ownerUserName, appointeeUserName, shopName);
        assertTrue(marketSystem.isShopOwner(appointeeUserName, shopName));
        marketSystem.logout(appointeeUserName);
    }

    @Test
    public void testNonOwnerAppointment() throws Exception {
        marketSystem.login(founderUserName, founderPassword);
        marketSystem.appointShopOwner(founderUserName, ownerUserName, shopName);
        marketSystem.logout(ownerUserName);

        marketSystem.register(appointeeUserName, appointeeEmail, appointeePassword);
        marketSystem.login(appointeeUserName, appointeePassword);
        marketSystem.appointShopOwner(appointeeUserName, "newOwner", shopName);
        marketSystem.logout("newOwner");
    }

    @Test
    public void testNotLoggedInAppointment() throws Exception {
        marketSystem.login(founderUserName, founderPassword);
        marketSystem.appointShopOwner(founderUserName, ownerUserName, shopName);
        marketSystem.logout(ownerUserName);

        marketSystem.appointShopOwner(ownerUserName, appointeeUserName, shopName);
    }

    @Test
    public void testCircularAppointment() throws Exception {
        marketSystem.login(founderUserName, founderPassword);
        marketSystem.appointShopOwner(founderUserName, ownerUserName, shopName);
        marketSystem.appointShopOwner(ownerUserName, appointeeUserName, shopName);
        marketSystem.appointShopOwner(appointeeUserName, founderUserName, shopName);
        marketSystem.logout(founderUserName);
    }

    @Test
    public void testShopOwnerAppointsFounder() throws Exception {
        marketSystem.login(founderUserName, founderPassword);
        marketSystem.appointShopOwner(founderUserName, ownerUserName, shopName);
        marketSystem.logout(ownerUserName);

        marketSystem.login(ownerUserName, ownerPassword);
        marketSystem.appointShopOwner(ownerUserName, founderUserName, shopName);
        marketSystem.logout(founderUserName);
    }
}
