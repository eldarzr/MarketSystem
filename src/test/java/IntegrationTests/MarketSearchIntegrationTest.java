package IntegrationTests;

import BusinessLayer.Market;
import BusinessLayer.Shops.ProductIntr;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import java.util.List;

import static org.junit.jupiter.api.Assertions.*;
import static BusinessLayer.Search.*;

class MarketSearchIntegrationTest {
	Market market;
	String[] usersName = {"eldar", "niv12"};
	String[] passwords = {"Aa123456", "Aa123456"};
	String[] emails = {"eldar@gmail.com", "niv@gmail.com"};
	String[] shopNames = {"shop1", "shop2"};
	String[] prodNames = {"prod1", "prod11", "prod111"};
	String[] descs = {"desc1", "desc2", "desc3"};
	String[] cats = {"cat1", "cat2", "cat3"};
	double[] prices = {5, 7, 10};

	@BeforeEach
	void setUp() throws Exception {
		market = new Market();
		market.init("src/InitFiles/TestsConfig.jason");
		for(int i = 0; i < usersName.length; i++) {
			String guestName = market.startSession();
			market.register(usersName[i], emails[i], passwords[i]);
			market.login(guestName,usersName[i], passwords[i]);
			market.createShop(usersName[i], shopNames[i]);
		}
		for(int i = 0; i < prodNames.length; i++) {
			market.addNewProduct(usersName[0], shopNames[0], prodNames[i], cats[i], descs[i], prices[i]);
		}
	}

	@AfterEach
	void tearDown() {
		market.resetAll();
	}

	@Test
	void basicSuccess() throws Exception {
		List<ProductIntr> products = market.basicSearch(usersName[0], prodNames[0]);
		for(int i = 0; i < prodNames.length; i++) {
			assertEquals(products.get(i).getName(), prodNames[i]);
		}
	}

	@Test
	void minSuccess() throws Exception {
		List<ProductIntr> products = market.extendedSearch(usersName[0], prodNames[0], 6, IGNORED_INT, IGNORED_STRING);
		assertEquals(products.get(0).getName(), prodNames[1]);
	}

	@Test
	void maxSuccess() throws Exception {
		List<ProductIntr> products = market.extendedSearch(usersName[0], prodNames[0],  IGNORED_INT, 6, IGNORED_STRING);
		assertEquals(products.get(0).getName(), prodNames[0]);
	}

	@Test
	void minMaxSuccess() throws Exception {
		List<ProductIntr> products = market.extendedSearch(usersName[0], prodNames[0],  4, 6, IGNORED_STRING);
		assertEquals(products.get(0).getName(), prodNames[0]);
	}

	@Test
	void catSuccess() throws Exception {
		List<ProductIntr> products = market.extendedSearch(usersName[0], prodNames[0],  IGNORED_INT, IGNORED_INT, cats[0]);
		assertEquals(products.get(0).getName(), prodNames[0]);
	}

	@Test
	void allSuccess() throws Exception {
		List<ProductIntr> products = market.extendedSearch(usersName[0], prodNames[0],  prices[0], prices[0], cats[0]);
		assertEquals(products.get(0).getName(), prodNames[0]);
	}

}