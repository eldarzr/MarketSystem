package AcceptanceTests.Tests;

import AcceptanceTests.MarketSystemBridge;
import AcceptanceTests.MarketSystemRealBridge;
import org.junit.jupiter.api.*;
import org.junit.jupiter.api.BeforeEach;

import static org.junit.jupiter.api.Assertions.assertTrue;
import static org.junit.jupiter.api.Assertions.fail;


public class ShopOwnerAppointmentTest {
    private MarketSystemBridge marketSystem;
    private String founderUserName = "founder";
    private String founderEmail = "founder@gmail.com";
    private String founderPassword = "Founder123";
    private String ownerUserName = "owner";
    private String ownerEmail = "owner@gmail.com";
    private String ownerPassword = "Owner123";
    private String appointeeUserName = "appointee";
    private String appointeeEmail = "appointee@gmail.com";
    private String appointeePassword = "Appointee123";
    private String shopName = "Test Shop";

    @BeforeEach
    public void setUp() throws Exception {
        marketSystem = new MarketSystemRealBridge();
        marketSystem.init();
        marketSystem.register(founderUserName, founderEmail, founderPassword);
        marketSystem.login(founderUserName, founderPassword);
        marketSystem.createShop(founderUserName, shopName);
        marketSystem.logout(founderUserName);
        marketSystem.register(ownerUserName,ownerEmail,ownerPassword);
        marketSystem.login(ownerUserName,ownerPassword);
        marketSystem.register(appointeeUserName,appointeeEmail,appointeePassword);
        marketSystem.login(appointeeUserName,appointeePassword);
    }

    @AfterEach
    public void tearDown() throws Exception {
        marketSystem.clearData();
    }

    @Test
    public void testShopOwnerAppointment() throws Exception {
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
        marketSystem.appointShopOwner(founderUserName, ownerUserName, shopName);
        marketSystem.logout(ownerUserName);

        try{
            marketSystem.appointShopOwner(appointeeUserName, "newOwner", shopName);
            fail("successful appoint shop owner with non shop owner");
        }catch (Exception e){

        }
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
        try{
            marketSystem.appointShopOwner(appointeeUserName, founderUserName, shopName);
            fail("successful appoint owner twice");
        }catch(Exception e){

        }
        marketSystem.logout(founderUserName);
    }

    @Test
    public void testShopOwnerAppointsFounder() throws Exception {
        marketSystem.login(founderUserName, founderPassword);
        marketSystem.appointShopOwner(founderUserName, ownerUserName, shopName);
        marketSystem.logout(ownerUserName);

        marketSystem.login(ownerUserName, ownerPassword);
        try{
            marketSystem.appointShopOwner(ownerUserName, founderUserName, shopName);
            fail("successful appoint owner twice");
        }catch(Exception e){

        }
        marketSystem.logout(founderUserName);
    }
}
