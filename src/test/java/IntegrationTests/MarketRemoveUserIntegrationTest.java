package IntegrationTests;

import BusinessLayer.Market;
import BusinessLayer.Shops.ProductIntr;
import BusinessLayer.Shops.ShopProduct;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class MarketRemoveUserIntegrationTest {
	Market market;
	String[] usersName = {"eldar", "niv12"};
	String[] passwords = {"Aa123456", "Aa123456"};
	String[] emails = {"eldar@gmail.com", "niv@gmail.com"};
	String[] shopNames = {"shop1", "shop2"};
	String adminUserName = "admin";
	String adminPassword = "Aa123456";

	@BeforeEach
	void setUp() throws Exception {
		market = new Market();
		market.init();
		for(int i = 0; i < usersName.length; i++) {
			String guestName = market.startSession();
			market.register(usersName[i], emails[i], passwords[i]);
			market.login(guestName,usersName[i], passwords[i]);
//			market.createShop(usersName[i], shopNames[i]);
		}
	}

	@AfterEach
	void tearDown() {
		market.resetAll();
	}

	@Test
	void removeUserSuccess() throws Exception {
		String guestName = market.startSession();
		market.login(guestName, adminUserName, adminPassword);
		for (String userName : usersName) {
			market.removeUser(adminUserName, userName);
		}
	}

	@Test
	void removeUserFailLogin() {
		assertThrows(Exception.class, () -> market.removeUser(adminUserName, usersName[0]));
	}

	@Test
	void removeUserFailNoUser() {
		String guestName = market.startSession();
		market.login(guestName, adminUserName, adminPassword);
		assertThrows(Exception.class, () -> market.removeUser(adminUserName, "bla bla"));
	}

	@Test
	void removeUserFailFounder() throws Exception {
		String guestName = market.startSession();
		market.login(guestName, adminUserName, adminPassword);
		market.createShop(usersName[0], shopNames[0]);
		assertThrows(Exception.class, () -> market.removeUser(adminUserName, usersName[0]));
	}

	@Test
	void removeUserFailManager() throws Exception {
		String guestName = market.startSession();
		market.login(guestName, adminUserName, adminPassword);
		market.createShop(usersName[0], shopNames[0]);
		market.appointShopManager(usersName[0], usersName[1], shopNames[0]);
		assertThrows(Exception.class, () -> market.removeUser(adminUserName, usersName[1]));
	}
}