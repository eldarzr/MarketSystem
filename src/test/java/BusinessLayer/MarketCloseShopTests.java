package BusinessLayer;

import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class MarketCloseShopTests {
    Market market;
    String[] usersName = {"eldar", "niv12","naor","gabi"};
    String[] passwords = {"Aa123456", "Aa123456","Aa654321","A32197823k"};
    String[] emails = {"eldar@gmail.com", "niv@gmail.com","naor@gmail.com","gabi@gmail.com"};
    String[] shopNames = {"shopEldar", "shopNiv","shopNaor"};

    //TODO : ADD TEST FOR UNREGISTERD USER ?? loggeout users ..

    @BeforeEach
    void setUp() throws Exception {
        market = new Market();
        market.init();
        for(int i = 0; i < usersName.length-1; i++) {
            market.register(usersName[i], emails[i], passwords[i]);
            market.login(usersName[i], passwords[i]);
            market.createShop(usersName[i], shopNames[i]);
        }
        market.register(usersName[3], emails[3], passwords[3]);
        market.appointShopOwner("eldar","niv12","shopEldar");
        market.appointShopManager("eldar","naor","shopEldar");
    }

    @AfterEach
    void tearDown() {
        market.resetAll();
    }

    @Test
    void closeShop_success() throws Exception {
        //TODO : ADD SUCCESS ON ACHEIVE INFO (Admins & Owners only)
        //TODO : ADD SUCCESS ON SEARCHING FOR A PRODUCT AFTER THE SHOP CLOSED
        market.closeShop("eldar","shopEldar");
        assertEquals("the shop named : shopEldar is closed",
                market.usersHandler.findUserByName("eldar").getShopsMessages().stream().toArray()[0]);
    }

    @Test
    void closeShop_failure_NotTheFounderClose() throws Exception {
        Exception exception =  assertThrows(Exception.class, () ->  market.closeShop("niv12","shopEldar"));
        assertTrue(exception.getMessage().equals("only the founder can close a store"));
    }

    @Test
    void closeShop_failure_ManagerClose() throws Exception {
        Exception exception =  assertThrows(Exception.class, () ->  market.closeShop("naor","shopEldar"));
        assertTrue(exception.getMessage().equals("only the founder can close a store"));
    }

}