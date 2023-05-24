package AcceptanceTests.Tests;

import AcceptanceTests.MarketSystemBridge;
import AcceptanceTests.MarketSystemRealBridge;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.fail;

public class RegistrationTests {


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
    public void successfulRegistrationTest(){
        String userName = "userName";
        String email = "johndoe@example.com";
        String password = "Passw0rd!!!";
        try{
            market.register(userName,email,password);
        }catch (Exception e){
            fail("registration should be successful");
        }

    }

    @Test
    public void unsuccessfulRegistrationInvalidPasswordTest(){
        String userName = "userName";
        String email = "johndoe@example.com";
        String password = "password";
        try{
            market.register(userName,email,password);
            fail("registration should not be successful because of an invalid password");
        }catch (Exception ignored){}
    }

    @Test
    public void unsuccessfulRegistrationAlreadyExistingUserTest(){
        String userName = "userName";
        String email = "johndoe@example.com";
        String password = "Passw0rd!!!";
        try{
            market.register(userName,email,password);
            market.register(userName,email,password);
            fail("registration should not be successful because the user is already registered");
        }catch (Exception ignored){}
    }


}
