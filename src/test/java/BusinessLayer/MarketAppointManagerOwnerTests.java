package BusinessLayer;

import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

class MarketAppointManagerOwnerTests {
    Market market;
    String[] usersName = {"eldar", "niv12","naor"};
    String[] passwords = {"Aa123456", "Aa123456","Aa654321"};
    String[] emails = {"eldar@gmail.com", "niv@gmail.com","naor@gmail.com"};
    String[] shopNames = {"shop1", "shop2"};

    //TODO : ADD TEST FOR UNREGISTERD USER ?? loggeout users ..

    @BeforeEach
    void setUp() throws Exception {
        market = new Market();
        market.init("src/InitFiles/TestsConfig.jason");
        for(int i = 0; i < usersName.length-1; i++) {
            String guestName = market.startSession();
            market.register(usersName[i], emails[i], passwords[i]);
            market.login(guestName,usersName[i], passwords[i]);
            market.createShop(usersName[i], shopNames[i]);
        }
        market.register(usersName[2], emails[2], passwords[2]);
    }

    @AfterEach
    void tearDown() {
        market.resetAll();
    }

    @Test
    void appointShopOwner_success() throws Exception {
        market.appointShopOwner("eldar","niv12","shop1");
    }

    @Test
    void appointShopOwner_failure1()  {
        Exception exception = assertThrows(Exception.class, () ->   market.appointShopOwner("niv12","eldar","shop1"));
        System.out.println(exception.getMessage());
    }

    @Test
    void appointShopOwner_failure2()  {
        Exception exception = assertThrows(Exception.class, () ->   market.appointShopOwner("eldar","eldar","shop1"));
        System.out.println(exception.getMessage());
    }

    @Test
    void appointShopOwner_failure3()  {
        Exception exception = assertThrows(Exception.class, () ->   market.appointShopOwner("naor","eldar","shop1"));
        System.out.println(exception.getMessage());
    }

    @Test
    void appointShopManager_success1() throws Exception {
        market.appointShopManager("eldar","niv12","shop1");
    }

    @Test
    void appointShopManager_aba() throws Exception {
        market.closeShop("eldar","shop1");
    }

    @Test
    void appointShopManager_failure1()  {
        Exception exception = assertThrows(Exception.class, () ->   market.appointShopManager("niv12","eldar","shop1"));
        System.out.println(exception.getMessage());
    }

    @Test
    void appointShopManager_failure2()  {
        Exception exception = assertThrows(Exception.class, () ->   market.appointShopManager("eldar","eldar","shop1"));
        System.out.println(exception.getMessage());
    }

    @Test
    void appointShopManager_failure3() throws Exception {
        market.appointShopOwner("eldar","naor","shop1");
        Exception exception = assertThrows(Exception.class, () ->   market.appointShopManager("naor","eldar","shop1"));
        System.out.println(exception.getMessage());
    }

    @Test
    void appointShopManager_failure4() throws Exception {
        market.appointShopOwner("eldar","naor","shop1");
        Exception exception = assertThrows(Exception.class, () ->   market.appointShopManager("naor","naor","shop1"));
        System.out.println(exception.getMessage());
    }

    @Test
    void appointShopManager_failure5() throws Exception {
        market.appointShopManager("eldar","naor","shop1");
        Exception exception = assertThrows(Exception.class, () ->   market.appointShopManager("naor","niv12","shop1"));
        System.out.println(exception.getMessage());
    }
    @Test
    void appointShopManager_failure6() throws Exception {
        market.appointShopManager("eldar","naor","shop1");
//        MemberRoleInShop role = market.checkForShop("shop1").validateUserHasRole("naor");
        Exception exception = assertThrows(Exception.class, () ->   market.appointShopOwner("naor","niv12","shop1"));
        System.out.println(exception.getMessage());
    }

    @Test
    void appointShopManager_successValidate() throws Exception {
        market.appointShopManager("eldar","niv12","shop1");
        market.appointShopManager("eldar","naor","shop1");
       List<MemberRoleInShop> naorShops = market.getUserRoles("naor");
        List<MemberRoleInShop> nivShops = market.getUserRoles("niv");
    }
}