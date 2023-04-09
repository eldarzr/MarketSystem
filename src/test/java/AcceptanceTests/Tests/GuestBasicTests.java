package AcceptanceTests.Tests;


import BusinessLayer.MarketIntr;
import junit.framework.Assert;
import junit.framework.TestCase;
import org.junit.jupiter.api.Test;

public class GuestBasicTests extends TestCase {
    MarketIntr bridge;
    String guestName;
    String userName = "Lemon";
    String password = "lemons123";
    String email = "lemon@gmail.com";

    public void setUp() throws Exception {
        super.setUp();
        bridge.init();
    }
    //2.1
    @Test
    public void startSessionTest(){
        guestName = bridge.startSession();
        Assert.assertNotNull(guestName);
    }
    //2.2
    @Test
    public void closeSessionTest(){
        try {
            bridge.closeSession(guestName);
            Assert.assertTrue(true);
        }catch (Exception e){
            Assert.fail(e.getMessage());
        }
    }
    //2.3 successful registration
    @Test
    public void RegisterTest(){
        try {
            bridge.register(userName, email, password);
            Assert.assertTrue(bridge.isRegistered(userName));
        }catch (Exception e){
            Assert.fail(e.getMessage());
        }
    }
    //2.3 unsuccessful registration
    @Test
    public void failedRegisterTest(){
        try {
            bridge.register(userName, email, password);
            Assert.fail("Should not have be successful because user is already registered\n");
        }catch (Exception e){
            Assert.assertTrue(true);
        }
    }
    //2.4 successful login
    @Test
    public void successfulLoginTest(){
        try{
            bridge.login(userName,password);
            boolean is_logged = bridge.isLogged(userName);
            Assert.assertTrue(is_logged);
        }catch (Exception e){
            Assert.fail(e.getMessage());
        }
    }
    //2.4 unsuccessful login because user is already logged in
    @Test
    public void unsuccessfulLoginTest1(){
        try{
            bridge.login(userName,password);
            Assert.fail("Should not be successful since the user is already logged in");
        }catch (Exception e){
            Assert.assertTrue(true);
        }
    }
    //2.4 logout test
    @Test
    public void logoutTest(){
        try{
            bridge.logout(userName);
            Assert.assertFalse(bridge.isLogged(userName));
        }catch (Exception e){
            Assert.fail("Failed to logout the user despite him being logged in\n");
        }
    }

    //2.4 wrong password login test
    @Test
    public void unsuccessfulLoginTest2(){
        try{
            bridge.login(userName,password+"234");
            Assert.fail("login should not be successful with the wrong password\n");
        }catch (Exception e){
            Assert.assertFalse(bridge.isLogged(userName));
        }
    }


}
