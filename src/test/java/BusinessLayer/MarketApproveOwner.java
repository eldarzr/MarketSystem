package BusinessLayer;

import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

public class MarketApproveOwner {

    Market market;
    String[] usersName = {"Eldar", "Niv12", "Naor","Gabi","Idan","Emanuel"};
    String[] passwords = {"Aa123456"};
    String[] emails = {"eldar@gmail.com", "Niv12@gmail.com", "naor@gmail.com","Gabi@gmail.com","idan@gmail.com","emanuel@gmail.com"};
    String[] shopNames = {"shopEldar", "shopNiv12","shopNaor"};

    //TODO : ADD TEST FOR UNREGISTERD USER ?? loggeout users ..

    @BeforeEach
    void setUp() throws Exception {
        market = new Market();
        market.init("src/InitFiles/TestsConfig.jason");
        for (int i = 0; i < usersName.length; i++) {
            market.register(usersName[i], emails[i], passwords[0]);
            String guestName = market.startSession();
            market.login(guestName,usersName[i], passwords[0]);
        }
        market.createShop(usersName[0], shopNames[0]);

    }

    @AfterEach
    void tearDown() {
        market.resetAll();
    }

    @Test
    void approve_one() throws Exception {
//        market.createShop(usersName[0], shopNames[0]);
        market.appointShopOwner("Eldar", "Niv12", "shopEldar");
        market.appointShopOwner("Eldar", "Naor", "shopEldar");
        market.approveOwner("Niv12","Naor","shopEldar");
        System.out.println(market.getShop("shopEldar").getRolesInfo());
        int x =3;
    }

    @Test
    void approve_two() throws Exception {
        //market.createShop(usersName[0], shopNames[0]);
        market.appointShopOwner("Eldar", "Niv12", "shopEldar");
        market.appointShopOwner("Eldar", "Naor", "shopEldar");
        market.approveOwner("Niv12","Naor","shopEldar");

        market.appointShopOwner("Eldar", "Gabi", "shopEldar");
        market.approveOwner("Niv12","Gabi","shopEldar");
        market.approveOwner("Naor","Gabi","shopEldar");

        System.out.println(market.getShop("shopEldar").getRolesInfo());

        int x =3;
    }

}
