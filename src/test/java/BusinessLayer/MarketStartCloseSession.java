package BusinessLayer;

import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;

import java.io.IOException;

import static org.junit.jupiter.api.Assertions.assertThrows;


class MarketStartCloseSession {

        Market market;

        @BeforeEach
        void setUp() throws IOException {
            market = new Market();
            market.init();
        }

        @AfterEach
        void tearDown() {
            market.resetAll();
        }

        @org.junit.jupiter.api.Test
        void startSession() {
            String guestName = market.startSession();
            market.getCart(guestName);
        }

        @org.junit.jupiter.api.Test
        void startSessionRegisterAndLogin() throws Exception {
            String guestName = market.startSession();
            market.register("nivuzan","nivu@gmail.com","Nn123456");
            market.login(guestName,"nivuzan", "Nn123456");
            assertThrows(Exception.class, () -> {
                market.getCart(guestName);
            },String.format("successful get cart for guest after login. guestName : %s",guestName));
            market.getCart("nivuzan");
        }

        @org.junit.jupiter.api.Test
        void createShopByGuest() throws Exception {
            String guestName = market.startSession();
            assertThrows(Exception.class, () -> {
                market.createShop(guestName,"shopName1");
            },String.format("successful create shop by guest"));
        }



        @org.junit.jupiter.api.Test
        void closeSession() {
            String guestName = market.startSession();
            market.closeSession(guestName);
            assertThrows(Exception.class, () -> {
                market.getCart(guestName);
            },String.format("successful get cart after close session with username : %s",guestName));
        }

}