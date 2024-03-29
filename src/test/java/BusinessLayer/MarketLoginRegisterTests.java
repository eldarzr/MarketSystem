package BusinessLayer;

import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;

import java.io.IOException;

import static org.junit.jupiter.api.Assertions.*;


class MarketLoginRegisterTests {

    Market market;
    String guestName;

    @BeforeEach
    void setUp() throws Exception {
        market = new Market();
        market.init("src/InitFiles/TestsConfig.jason");
        guestName = market.startSession();
    }

    @AfterEach
    void tearDown() {
        market.resetAll();
    }

    @org.junit.jupiter.api.Test
    void register_invalid_username(){
        String[] names = {"1231asasd", "", "a","asdaasdasxdasdasdeasdsdasdasdasdasdasasd","!sd2","username!"};
        for(String user_name : names){
            assertThrows(Exception.class, () -> {
                market.register(user_name,"adsas@gmail.com","TryTry123");
            },String.format("successful registration with username : %s",user_name));
        }
    }

    @org.junit.jupiter.api.Test
    void register_invalid_email(){
        String[] emails = {"@gmail.com", "", "sdasd@sads..","bloblogmail.co.com.com", "asdas@sadsa..com"};
        for(String email : emails){
            assertThrows(Exception.class, () -> {
                market.register("username",email,"TryTry123");
            },String.format("successful registration with email : %s",email));
        }
    }

    @org.junit.jupiter.api.Test
    void register_invalid_password(){
        String[] passwords = {"asdasas12", "asdanASD", "Nasdm","1231232","","lololol@@#"};
        for(String password : passwords){
            assertThrows(Exception.class, () -> {
                market.register("username","email@gmail",password);
            },String.format("successful registration with password : %s",password));
        }
    }

    @org.junit.jupiter.api.Test
    void register() throws Exception {
        market.register("nivuzan","nivuzan@gmail.com","TryTry123");
    }

    @org.junit.jupiter.api.Test
    void login() throws Exception {
        market.register("nivuzan","nivuzan@gmail.com","TryTry123");
        market.login(guestName,"nivuzan","TryTry123");
    }

    @org.junit.jupiter.api.Test
    void login_fail() throws Exception {
        String username = "nivuzan";
        assertThrows(Exception.class, () -> {
            market.login(guestName,username,"aN12332");
        },String.format("successful login with username : %s",username));
    }

    @org.junit.jupiter.api.Test
    void double_login() throws Exception {
        market.register("nivuzan","nivuzan@gmail.com","TryTry123");
        market.login(guestName,"nivuzan","TryTry123");
        assertThrows(Exception.class, () -> {
            market.login(guestName,"nivuzan","TryTry123");
        },"successful double login");
    }

    @org.junit.jupiter.api.Test
    void logout() throws Exception {
        market.register("nivuzan","nivuzan@gmail.com","TryTry123");
        market.login(guestName,"nivuzan","TryTry123");
        market.logout("nivuzan");
    }

    @org.junit.jupiter.api.Test
    void logout_fail() throws Exception {
        String username = "nivuzan";
        assertThrows(Exception.class, () -> {
            market.logout(username);
        },String.format("successful logout with username : %s without register and login",username));
    }

    @org.junit.jupiter.api.Test
    void logout_fail_with_register() throws Exception {
        String username = "nivuzan";
        assertThrows(Exception.class, () -> {
            market.register("nivuzan","nivuzan@gmail.com","TryTry123");
            market.logout(username);
        },String.format("successful logout with username : %s without register and login",username));
    }

}