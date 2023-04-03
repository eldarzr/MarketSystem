package BusinessLayer;

import org.junit.jupiter.api.BeforeEach;

import static org.junit.jupiter.api.Assertions.*;

class MarketTest {

    Market market;

    @org.junit.jupiter.api.Test
    void register() throws Exception {
        market.register("nivuzan","nivuzan@gmail.com","TryTry123");
    }

    @org.junit.jupiter.api.Test
    void register_invalid_username(){
        String[] names = {"1231asasd", "", "a","asdasdasdasdasdasdasasd","!sd2","username!"};
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
    void login() {
    }

    @BeforeEach
    void setUp() {
        market = new Market();
    }
}