package IntegrationTests;

import BusinessLayer.Market;
import BusinessLayer.PersistenceManager;
import BusinessLayer.Shops.Product;
import BusinessLayer.Shops.Shop;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import javax.persistence.EntityManager;

import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.junit.jupiter.api.Assertions.assertTrue;

class MarketCreateShopDataBaseTest {
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
		market.init("src/InitFiles/TestsConfig.jason");
	}

	@AfterEach
	void tearDown() {
		market.resetAll();
	}

	@Test
	void createShopSuccess() throws Exception {
		for(int i = 0; i < usersName.length; i++) {
			guestName = market.startSession();
			market.register(usersName[i], emails[i], passwords[i]);
			market.login(guestName,usersName[i], passwords[i]);
			market.createShop(usersName[i], shopNames[i]);
			EntityManager entityManager = PersistenceManager.getInstance().getEntityManager();
			Shop shopFromDB = entityManager.find(Shop.class, shopNames[i]);
			entityManager.close();
			assertTrue(shopFromDB.getName().equals(shopNames[i]));
		}
	}
}