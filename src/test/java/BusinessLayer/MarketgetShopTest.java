package BusinessLayer;

import BusinessLayer.Shops.Shop;
import BusinessLayer.Shops.ShopIntr;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class MarketgetShopTest {
	Market market;
	String[] usersName = {"eldar", "niv12"};
	String[] passwords = {"Aa123456", "Aa123456"};
	String[] emails = {"eldar@gmail.com", "niv@gmail.com"};
	String[] shopNames = {"shop1", "shop2"};

	@BeforeEach
	void setUp() throws Exception {
		market = new Market();
		market.init();
		for(int i = 0; i < usersName.length; i++) {
			market.register(usersName[i], emails[i], passwords[i]);
			market.login(usersName[i], passwords[i]);
			market.createShop(usersName[i], shopNames[i]);
		}
	}

	@AfterEach
	void tearDown() {
		market.resetAll();
	}

	@Test
	void getShopSuccess() throws Exception {
		for(int i = 0; i < usersName.length; i++) {
			Shop shop = market.getShop(usersName[i], shopNames[i]);
			assertTrue(shop.getName().equals(shopNames[i]));
		}
	}

	@Test
	void getShopSuccessDistance1() throws Exception {
		for(int i = 0; i < usersName.length; i++) {
			Shop shop = market.getShop(usersName[i], shopNames[(i + 1) % 2]);
			assertNotNull(shop);
		}
	}

	@Test
	void getShopFail() throws Exception {
		market.createShop(usersName[0], shopNames[0]);
		assertThrows(Exception.class, () -> market.getShop(usersName[0], "bla bla"));
	}

}