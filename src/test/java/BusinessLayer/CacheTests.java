package BusinessLayer;

import BusinessLayer.Users.User;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class CacheTests {
    Market market;
    int number_of_instances = 50;
    @BeforeEach
    void setUp() throws Exception {
        market = new Market();
        market.init("src/InitFiles/TestsConfig.jason");
    }

    @AfterEach
    void tearDown() {
        market.resetAll();
    }

    @Test
    void addLotsOfShops() throws Exception {
        User user = market.register("nivniv","nivniv@gmail.com","Aa123456");
        String guestName = market.startSession();
        market.login(guestName,"nivniv","Aa123456");
        String shopName = "shop";
        for(int i = 0; i < number_of_instances; i++){
            market.createShop("nivniv",shopName+i);
        }
        market.getShop(shopName+(number_of_instances/2));
    }

    @Test
    void addLotsOfUsers() throws Exception {
        for(int i =0; i < number_of_instances; i++){
            User user = market.register("nivniv"+i,String.format("nivniv%d@gmail.com",i),"Aa123456");
        }
        for(int i = 0; i < number_of_instances; i++){
            String guestName = market.startSession();
            market.login(guestName,"nivniv"+i,"Aa123456");
        }
    }

}