package AcceptanceTests.Tests;

import AcceptanceTests.MarketSystemBridge;
import AcceptanceTests.MarketSystemRealBridge;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

public class AdminRemoveUserTests {
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
        marketSystem.register(ownerUserName,ownerEmail,ownerPassword);
        marketSystem.register(appointeeUserName,appointeeEmail,appointeePassword);

//        marketSystem.login(founderUserName, founderPassword);
//        marketSystem.createShop(founderUserName, shopName);
//        marketSystem.logout(founderUserName);
//        marketSystem.login(ownerUserName,ownerPassword);
//        marketSystem.login(appointeeUserName,appointeePassword);
    }

    @AfterEach
    public void tearDown() throws Exception {
        marketSystem.clearData();
    }

    @Test
    public void testRemoveLoggedInRegularUserSuccess() {
        marketSystem.login("admin", "Aa123456");
        marketSystem.login(founderUserName, founderPassword);
        try
        {
            marketSystem.removeUser("admin",founderUserName);
            marketSystem.getUser(founderUserName);
            fail("Didn't delete user");
        }
        catch (Exception ignored) {}
    }

    @Test
    public void testRemoveLoggedOutRegularUserSuccess() {
        marketSystem.login("admin", "Aa123456");
        try
        {
            marketSystem.removeUser("admin",founderUserName);
            marketSystem.getUser(founderUserName);
            fail("Didn't delete user");
        }
        catch (Exception ignored) {}
    }

    @Test
    public void testRemoveGuestUserFail() {
        marketSystem.login("admin", "Aa123456");
        try
        {
            marketSystem.removeUser("admin","test");
            fail("Deleted fake user");
        }
        catch (Exception ignored) {}
    }

    @Test
    public void testRemoveShopFounderFail() {
        marketSystem.login("admin", "Aa123456");
        marketSystem.login(founderUserName, founderPassword);
        try
        {
            marketSystem.createShop(founderUserName,shopName);
            marketSystem.removeUser("admin",founderUserName);
        }
        catch (Exception e) {
            assertEquals(e.getMessage(),String.format("the user %s has role in some shops therefore he cannot" +
                    "be removed", founderUserName));
        }
    }

    @Test
    public void testRemoveShopOwnerFail() {
        marketSystem.login("admin", "Aa123456");
        marketSystem.login(founderUserName, founderPassword);
        try
        {
            marketSystem.createShop(founderUserName,shopName);
            marketSystem.appointShopOwner(founderUserName,ownerUserName,shopName);
            marketSystem.removeUser("admin",ownerUserName);
        }
        catch (Exception e) {
            assertEquals(e.getMessage(),String.format("the user %s has role in some shops therefore he cannot" +
                    "be removed", ownerUserName));
        }
    }

    @Test
    public void testRemoveShopManagerFail() {
        marketSystem.login("admin", "Aa123456");
        marketSystem.login(founderUserName, founderPassword);
        try
        {
            marketSystem.createShop(founderUserName,shopName);
            marketSystem.appointShopManager(founderUserName,appointeeUserName,shopName);
            marketSystem.removeUser("admin",appointeeUserName);
        }
        catch (Exception e) {
            assertEquals(e.getMessage(),String.format("the user %s has role in some shops therefore he cannot" +
                    "be removed", appointeeUserName));
        }
    }

    @Test
    public void testRemoveShopFiredOwnerSuccess() {
        marketSystem.login("admin", "Aa123456");
        marketSystem.login(founderUserName, founderPassword);
        try
        {
            marketSystem.createShop(founderUserName,shopName);
            marketSystem.appointShopOwner(founderUserName,ownerUserName,shopName);
            marketSystem.removeShopOwner(founderUserName,ownerUserName,shopName);
            marketSystem.removeUser("admin",ownerUserName);
        }
        catch (Exception e) {fail("Didn't delete fired owner");}
    }

    @Test
    public void testRemoveShopFiredManagerSuccess() {
        marketSystem.login("admin", "Aa123456");
        marketSystem.login(founderUserName, founderPassword);
        try
        {
            marketSystem.createShop(founderUserName,shopName);
            marketSystem.appointShopOwner(founderUserName,ownerUserName,shopName);
            marketSystem.login(ownerUserName, ownerPassword);
            marketSystem.appointShopManager(ownerUserName,appointeeUserName,shopName);
            marketSystem.removeShopOwner(founderUserName,ownerUserName,shopName);
            marketSystem.removeUser("admin",appointeeUserName);
        }
        catch (Exception e) {fail("Didn't delete fired manager");}
    }
}
