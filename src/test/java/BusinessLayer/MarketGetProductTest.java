package BusinessLayer;

import BusinessLayer.Shops.Product;
import BusinessLayer.Shops.ProductIntr;
import BusinessLayer.Shops.Shop;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class MarketGetProductTest {
	Market market;
	String[] usersName = {"eldar", "niv12"};
	String[] passwords = {"Aa123456", "Aa123456"};
	String[] emails = {"eldar@gmail.com", "niv@gmail.com"};
	String[] shopNames = {"shop1", "shop2"};
	String[] prodNames = {"prod1", "prod2"};
	String[] descs = {"desc1", "desc2"};
	double[] prices = {5, 10};

	@BeforeEach
	void setUp() throws Exception {
		market = new Market();
		market.init();
		for(int i = 0; i < usersName.length; i++) {
			market.register(usersName[i], emails[i], passwords[i]);
			market.login(usersName[i], passwords[i]);
			market.createShop(usersName[i], shopNames[i]);
			market.addNewProduct(usersName[i], shopNames[i], prodNames[i], descs[i], prices[i]);
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
			assertTrue(product.getName().equals(shopNames[i]));
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
		assertThrows(Exception.class, () -> market.getProduct(usersName[0], shopNames[0], "bla bla"));
	}

}