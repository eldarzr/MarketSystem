package IntegrationTests;

import BusinessLayer.Market;
import org.junit.jupiter.api.*;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.CsvSource;

import java.io.IOException;

import static org.junit.jupiter.api.Assertions.*;

class MarketCreateShopIntegrationTest {
	Market market;
	String[] usersName = {"eldar", "niv12"};
	String[] passwords = {"Aa123456", "Aa123456"};
	String[] emails = {"eldar@gmail.com", "niv@gmail.com"};
	String[] shopNames = {"shop1", "shop2"};

	String guestName;
	@BeforeEach
	void setUp() throws Exception {
		market = new Market();
		market.resetAll();
		market.init();
		guestName = market.startSession();
	}

	@AfterEach
	void tearDown() {
		market.resetAll();
	}

	@Test
	void createShopSuccess() throws Exception {
		for(int i = 0; i < usersName.length; i++) {
			market.register(usersName[i], emails[i], passwords[i]);
			market.login(guestName,usersName[i], passwords[i]);
			market.createShop(usersName[i], shopNames[i]);
		}
	}

	@Test
	void createShopFailDoubleName() throws Exception {
		for(int i = 0; i < usersName.length; i++) {
			market.register(usersName[i], emails[i], passwords[i]);
			market.login(guestName,usersName[i], passwords[i]);
		}
		market.createShop(usersName[0], shopNames[0]);
		assertThrows(Exception.class, () -> market.createShop(usersName[0], shopNames[0]));
		assertThrows(Exception.class, () -> market.createShop(usersName[1], shopNames[0]));
	}


	@Test
	void createShopFailNotLoggedIn() throws Exception {
		market.register(usersName[0], emails[0], passwords[0]);
		assertThrows(Exception.class, () -> market.createShop(usersName[0], shopNames[0]));
	}

	@Test
	void createShopFailNotRegistered() {
		assertThrows(Exception.class, () -> market.createShop(usersName[0], shopNames[0]));
	}
}