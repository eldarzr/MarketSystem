package BusinessLayer;

import BusinessLayer.Shops.Shop;
import BusinessLayer.Shops.ShopIntr;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertThrows;

class MarketgetShopTest {
	Market market;
	String[] usersName = {"eldar", "niv12"};
	String[] passwords = {"Aa123456", "Aa123456"};
	String[] emails = {"eldar@gmail.com", "niv@gmail.com"};
	String[] shopNames = {"shop1", "shop2"};

	@BeforeEach
	void setUp() {
		market = new Market();
		market.init();
	}

	@AfterEach
	void tearDown() {
	}

	@Test
	void getShopSuccess() throws Exception {
		for(int i = 0; i < usersName.length; i++) {
			market.register(usersName[i], emails[i], passwords[i]);
			market.login(usersName[i], passwords[i]);
			market.createShop(usersName[i], shopNames[i]);
			ShopIntr shop = market.getShop(usersName[i], shopNames[i]);
		}
	}

	@Test
	void getShopSuccessDistance1() throws Exception {
		for(int i = 0; i < usersName.length; i++) {
			market.register(usersName[i], emails[i], passwords[i]);
			market.login(usersName[i], passwords[i]);
			market.createShop(usersName[i], shopNames[i]);
			ShopIntr shop = market.getShop(usersName[i], shopNames[(i + 1) % 2]);
		}
	}

	@Test
	void createShopFail() throws Exception {
		for(int i = 0; i < usersName.length; i++) {
			market.register(usersName[i], emails[i], passwords[i]);
			market.login(usersName[i], passwords[i]);
		}
		market.createShop(usersName[0], shopNames[0]);
		assertThrows(Exception.class, () -> market.getShop(usersName[0], "bla bla"));
	}

}