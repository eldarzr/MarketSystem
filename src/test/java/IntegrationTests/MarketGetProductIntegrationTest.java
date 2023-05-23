package IntegrationTests;

import BusinessLayer.Market;
import BusinessLayer.Shops.Product;
import BusinessLayer.Shops.ProductIntr;
import BusinessLayer.Shops.Shop;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class MarketGetProductIntegrationTest {
	Market market;
	String[] usersName = {"eldar", "niv12"};
	String[] passwords = {"Aa123456", "Aa123456"};
	String[] emails = {"eldar@gmail.com", "niv@gmail.com"};
	String[] shopNames = {"shop1", "shop2"};
	String[] prodNames = {"prod1", "prod2"};
	String[] descs = {"description1", "description2"};
	String[] cat = {"cat1", "cat2"};
	double[] prices = {5, 10};

	@BeforeEach
	void setUp() throws Exception {
		market = new Market();
		market.init("src/InitFiles/BaseConfig.jason");

		for(int i = 0; i < usersName.length; i++) {
			String guestName = market.startSession();
			market.register(usersName[i], emails[i], passwords[i]);
			market.login(guestName,usersName[i], passwords[i]);
			market.createShop(usersName[i], shopNames[i]);
			market.addNewProduct(usersName[i], shopNames[i], prodNames[i], cat[i], descs[i], prices[i]);
		}
	}

	@AfterEach
	void tearDown() {
		market.resetAll();
	}

	@Test
	void getProdSuccess() throws Exception {
		for(int i = 0; i < usersName.length; i++) {
			ProductIntr product = market.getProduct(usersName[i], shopNames[i], prodNames[i]);
			assertTrue(product.getName().equals(prodNames[i]));
		}
	}

	@Test
	void getProdSuccessDistance1() throws Exception {
		for(int i = 0; i < usersName.length; i++) {
			ProductIntr product = market.getProduct(usersName[i], shopNames[i], prodNames[(i + 1) % 2]);
			assertNotNull(product);
		}
	}

	@Test
	void getProdFail() throws Exception {
		assertNull(market.getProduct(usersName[0], shopNames[0], "bla bla"));
	}

}