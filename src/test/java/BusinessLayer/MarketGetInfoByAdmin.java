package BusinessLayer;

import BusinessLayer.Users.User;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import static org.junit.jupiter.api.Assertions.*;


class MarketGetInfoByAdmin {

    static final String password = "Aa123456";
    static final String admin = "admin";
    Market market;

    @BeforeEach
    void setUp() throws Exception {
        market = new Market();
        market.init("src/InitFiles/TestsConfig.jason");
        market.login(admin, password);
    }

    @AfterEach
    void tearDown() {
        market.resetAll();
    }


    @Test
    void startSessionRegisterAndLogin() throws Exception {
        String guestName = market.startSession();
        market.register("nivuzan", "nivu@gmail.com", "Nn123456");
        market.login(guestName, "nivuzan", "Nn123456");
        String guestName2 = market.startSession();
        List<User> users = market.getAllUsers(admin);
        Map<String, User> userMap = new HashMap<>();
        for (User user : users)
            userMap.put(user.getName(), user);
        assertEquals(users.size(), 3);
        assertTrue(userMap.get(admin) != null);
        assertTrue(userMap.get(guestName2) != null);
        assertTrue(userMap.get("nivuzan") != null);

    }

}