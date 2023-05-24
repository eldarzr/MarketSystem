package BusinessLayer;

import BusinessLayer.Market;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

public class ScenarioTests {

    Market market;
    String[] usersName = {"Eldar", "Niv12", "Naor","Gabi","Idan","Emanuel"};
    String[] passwords = {"Aa123456"};
    String[] emails = {"eldar@gmail.com", "Niv12@gmail.com", "naor@gmail.com","Gabi@gmail.com","idan@gmail.com","emanuel@gmail.com"};
    String[] shopNames = {"shopEldar", "shopNiv12","ShopNaor"};

    //TODO : ADD TEST FOR UNREGISTERD USER ?? loggeout users ..

    @BeforeEach
    void setUp() throws Exception {
        market = new Market();
        market.init("src/InitFiles/TestsConfig.jason");
        for (int i = 0; i < usersName.length; i++) {
            market.register(usersName[i], emails[i], passwords[0]);
        }
    }

    @AfterEach
    void tearDown() {
        market.resetAll();
    }

    @Test
    void fromCreationToAppoints_removeTree() throws Exception {
        String guestName = market.startSession();
        market.login(guestName,usersName[0], passwords[0]);
        market.createShop(usersName[0], shopNames[0]);
        market.appointShopOwner("Eldar", "Niv12", "shopEldar");
        market.appointShopManager("Eldar", "Emanuel", "shopEldar");
        guestName = market.startSession();
        market.login(guestName,usersName[1], passwords[0]);
        market.appointShopOwner("Niv12", "Naor", "shopEldar");
        market.appointShopManager("Niv12", "Idan", "shopEldar");
        guestName = market.startSession();
        market.login(guestName,usersName[2], passwords[0]);
        market.appointShopManager("Naor", "Gabi", "shopEldar");
        market.removeShopOwner("Eldar","Niv12","shopEldar");
        System.out.println(market.getRolesInformation("Eldar","ShopEldar"));
    }

    @Test
    void fromCreationToAppoints_removeOne() throws Exception {
        String guestName = market.startSession();
        market.login(guestName,usersName[0], passwords[0]);
        market.createShop(usersName[0], shopNames[0]);
        market.appointShopOwner("Eldar", "Niv12", "shopEldar");
        market.appointShopOwner("Eldar", "Emanuel", "shopEldar");
        guestName = market.startSession();
        market.login(guestName,usersName[1], passwords[0]);
        market.appointShopOwner("Niv12", "Naor", "shopEldar");
        market.appointShopManager("Niv12", "Idan", "shopEldar");
        guestName = market.startSession();
        market.login(guestName,usersName[2], passwords[0]);
        market.appointShopManager("Naor", "Gabi", "shopEldar");
        market.removeShopOwner("Eldar","Emanuel","shopEldar");
        System.out.println(market.getRolesInformation("Eldar","ShopEldar"));
    }

    @Test
    void fromCreationToAppoints_FailureNotDirectGrantor() throws Exception {
        String guestName = market.startSession();
        market.login(guestName,usersName[0], passwords[0]);
        market.createShop(usersName[0], shopNames[0]);
        market.appointShopOwner("Eldar", "Niv12", "shopEldar");
        market.appointShopManager("Eldar", "Emanuel", "shopEldar");
        guestName = market.startSession();
        market.login(guestName,usersName[1], passwords[0]);
        market.appointShopOwner("Niv12", "Naor", "shopEldar");
        market.appointShopManager("Niv12", "Idan", "shopEldar");
        guestName = market.startSession();
        market.login(guestName,usersName[2], passwords[0]);
        market.appointShopManager("Naor", "Gabi", "shopEldar");
        Exception exception = assertThrows(Exception.class, () ->
                market.removeShopOwner("Eldar","Naor","shopEldar"));
        System.out.println(exception.getMessage());
    }

    @Test
    void fromCreationToAppoints_FailureNotGrantorAtAll() throws Exception {
        String guestName = market.startSession();
        market.login(guestName,usersName[0], passwords[0]);
        market.createShop(usersName[0], shopNames[0]);
        market.appointShopOwner("Eldar", "Niv12", "shopEldar");
        market.appointShopManager("Eldar", "Emanuel", "shopEldar");
        guestName = market.startSession();
        market.login(guestName,usersName[1], passwords[0]);
        market.appointShopOwner("Niv12", "Naor", "shopEldar");
        market.appointShopManager("Niv12", "Idan", "shopEldar");
        guestName = market.startSession();
        market.login(guestName,usersName[2], passwords[0]);
        market.appointShopManager("Naor", "Gabi", "shopEldar");
        Exception exception = assertThrows(Exception.class, () ->
                market.removeShopOwner("Naor","Niv12","shopEldar"));
        System.out.println(exception.getMessage());
        //System.out.println(market.getRolesInformation("Eldar","ShopEldar"));
    }

    @Test
    void fromCreationToAppoints_FailureNotLoggedIn() throws Exception {
        String guestName = market.startSession();
        market.login(guestName,usersName[0], passwords[0]);
        market.createShop(usersName[0], shopNames[0]);
        market.appointShopOwner("Eldar", "Niv12", "shopEldar");
        market.appointShopManager("Eldar", "Emanuel", "shopEldar");
        guestName = market.startSession();
        market.login(guestName,usersName[1], passwords[0]);
        market.appointShopOwner("Niv12", "Naor", "shopEldar");
        market.appointShopManager("Niv12", "Idan", "shopEldar");
        guestName=market.startSession();
        market.login(guestName,usersName[2], passwords[0]);
        market.logout(usersName[1]);
        market.appointShopManager("Naor", "Gabi", "shopEldar");
        Exception exception = assertThrows(Exception.class, () ->
                market.removeShopOwner("Niv12","Idan","shopEldar"));
        System.out.println(exception.getMessage());
        //System.out.println(market.getRolesInformation("Eldar","ShopEldar"));
    }

    @Test
    void fromCreationToAppoints_SuccessOnTypeChange() throws Exception {
        String guestName = market.startSession();
        market.login(guestName,usersName[0], passwords[0]);
        market.createShop(usersName[0], shopNames[0]);
        market.appointShopOwner("Eldar", "Niv12", "shopEldar");
        market.appointShopManager("Eldar", "Emanuel", "shopEldar");
        guestName = market.startSession();
        market.login(guestName,usersName[1], passwords[0]);
        market.appointShopOwner("Niv12", "Naor", "shopEldar");
        market.appointShopManager("Niv12", "Idan", "shopEldar");
        guestName = market.startSession();
        market.login(guestName,usersName[2], passwords[0]);
        market.appointShopManager("Naor", "Gabi", "shopEldar");
        guestName = market.startSession();
        market.appointShopOwner("Eldar","Emanuel","shopEldar");
        market.login(guestName,"Emanuel",passwords[0]);
        market.appointShopOwner("Emanuel","Idan","shopEldar");
        market.removeShopOwner("Eldar","Niv12","shopEldar");
        System.out.println(market.getRolesInformation("Eldar","ShopEldar"));
    }

    @Test
    void fromCreationToAppoints_SuccessOnTypeChange2() throws Exception {
        String guestName = market.startSession();
        market.login(guestName,usersName[0], passwords[0]);
        market.createShop(usersName[0], shopNames[0]);
        market.appointShopOwner("Eldar", "Niv12", "shopEldar");
        market.appointShopManager("Eldar", "Emanuel", "shopEldar");
        guestName = market.startSession();
        market.login(guestName,usersName[1], passwords[0]);
        market.appointShopOwner("Niv12", "Naor", "shopEldar");
        market.appointShopManager("Niv12", "Idan", "shopEldar");
        guestName = market.startSession();
        market.login(guestName,usersName[2], passwords[0]);
        market.appointShopManager("Naor", "Gabi", "shopEldar");
        guestName = market.startSession();
        market.appointShopOwner("Eldar","Emanuel","shopEldar");
        market.login(guestName,"Emanuel",passwords[0]);
        market.appointShopOwner("Emanuel","Idan","shopEldar");
        market.removeShopOwner("Emanuel","Idan","shopEldar");
        market.removeShopOwner("Eldar","Emanuel","shopEldar");
        System.out.println(market.getRolesInformation("Eldar","ShopEldar"));
    }
}
