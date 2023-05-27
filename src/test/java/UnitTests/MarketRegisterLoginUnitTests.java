package UnitTests;

import BusinessLayer.Market;
import BusinessLayer.Users.UsersHandler;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;

import static org.junit.jupiter.api.Assertions.assertThrows;

public class MarketRegisterLoginUnitTests {


    UsersHandler usersHandler = UsersHandler.getInstance();
    String guestName;

    @BeforeAll
    static void configInit() throws Exception {
        new Market().init("src/InitFiles/TestsConfig.jason");
    }

    @BeforeEach
    void setUp() throws Exception {
        guestName = usersHandler.createGuest();
    }

    @AfterEach
    void tearDown() {
        usersHandler.reset();
    }

    @org.junit.jupiter.api.Test
    void register_invalid_username(){
        String[] names = {"1231asasd", "", "a","asdaasdasxdasdasdeasdsdasdasdasdasdasasd","!sd2","username!"};
        for(String user_name : names){
            assertThrows(Exception.class, () -> {
                usersHandler.register(user_name,"adsas@gmail.com","TryTry123");
            },String.format("successful registration with username : %s",user_name));
        }
    }

    @org.junit.jupiter.api.Test
    void register_invalid_email(){
        String[] emails = {"@gmail.com", "", "sdasd@sads..","bloblogmail.co.com.com", "asdas@sadsa..com"};
        for(String email : emails){
            assertThrows(Exception.class, () -> {
                usersHandler.register("username",email,"TryTry123");
            },String.format("successful registration with email : %s",email));
        }
    }

    @org.junit.jupiter.api.Test
    void register_invalid_password(){
        String[] passwords = {"asdasas12", "asdanASD", "Nasdm","1231232","","lololol@@#"};
        for(String password : passwords){
            assertThrows(Exception.class, () -> {
                usersHandler.register("username","email@gmail",password);
            },String.format("successful registration with password : %s",password));
        }
    }

    @org.junit.jupiter.api.Test
    void register() throws Exception {
        usersHandler.register("nivuzan","nivuzan@gmail.com","TryTry123");
    }

    @org.junit.jupiter.api.Test
    void login() throws Exception {
        usersHandler.register("nivuzan","nivuzan@gmail.com","TryTry123");
        usersHandler.login(guestName,"nivuzan","TryTry123");
    }

    @org.junit.jupiter.api.Test
    void login_fail() throws Exception {
        String username = "nivuzan";
        assertThrows(Exception.class, () -> {
            usersHandler.login(guestName,username,"aN12332");
        },String.format("successful login with username : %s",username));
    }

    @org.junit.jupiter.api.Test
    void double_login() throws Exception {
        usersHandler.register("nivuzan","nivuzan@gmail.com","TryTry123");
        usersHandler.login(guestName,"nivuzan","TryTry123");
        assertThrows(Exception.class, () -> {
            usersHandler.login(guestName,"nivuzan","TryTry123");
        },"successful double login");
    }

    @org.junit.jupiter.api.Test
    void logout() throws Exception {
        usersHandler.register("nivuzan","nivuzan@gmail.com","TryTry123");
        usersHandler.login(guestName,"nivuzan","TryTry123");
        usersHandler.disconnect("nivuzan");
    }

    @org.junit.jupiter.api.Test
    void logout_fail() throws Exception {
        String username = "nivuzan";
        assertThrows(Exception.class, () -> {
            usersHandler.disconnect(username);
        },String.format("successful logout with username : %s without register and login",username));
    }

    @org.junit.jupiter.api.Test
    void logout_fail_with_register() throws Exception {
        String username = "nivuzan";
        assertThrows(Exception.class, () -> {
            usersHandler.register("nivuzan","nivuzan@gmail.com","TryTry123");
            usersHandler.disconnect(username);
        },String.format("successful logout with username : %s without register and login",username));
    }
}
