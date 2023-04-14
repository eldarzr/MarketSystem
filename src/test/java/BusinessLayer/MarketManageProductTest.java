package BusinessLayer;

import BusinessLayer.Shops.ProductIntr;
import BusinessLayer.Shops.ShopProduct;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class MarketManageProductTest {
	Market market;
	String[] usersName = {"eldar", "niv12"};
	String[] passwords = {"Aa123456", "Aa123456"};
	String[] emails = {"eldar@gmail.com", "niv@gmail.com"};
	String[] cat = {"cat1", "cat2"};
	String[] shopNames = {"shop1", "shop2"};
	String[] prodNames = {"prod1", "prod2"};
	String[] descs = {"desc1", "desc2"};
	double[] prices = {5.5, 10.12};
	int[] quantity = {5, 10};
	String[] prodNamesNew = {"newProd1", "newProd2"};
	String[] descsNew = {"newDesc1", "newDesc2"};
	double[] pricesNew = {5, 10};

	@BeforeEach
	void setUp() throws Exception {
		market = new Market();
		market.init();
		for(int i = 0; i < usersName.length; i++) {
			String guestName = market.startSession();
			market.register(usersName[i], emails[i], passwords[i]);
			market.login(guestName,usersName[i], passwords[i]);
			market.createShop(usersName[i], shopNames[i]);
		}
	}

	@AfterEach
	void tearDown() {
		market.resetAll();
	}

	@Test
	void addProductSuccess() throws Exception {
		for(int i = 0; i < usersName.length; i++) {
			market.addNewProduct(usersName[i], shopNames[i], prodNames[i], cat[i], descs[i], prices[i]);
			ProductIntr product = market.getProduct(usersName[i], shopNames[i], prodNames[i]);
			assertTrue(product.getName().equals(prodNames[i]));
		}
	}

	@Test
	void addProductFailLogin() throws Exception {
		market.logout(usersName[0]);
		assertThrows(Exception.class, () -> market.addNewProduct(usersName[0], shopNames[0], prodNames[0], cat[0],
				descs[0], prices[0]));
	}

	@Test
	void addProductFailPermission() throws Exception {
		assertThrows(Exception.class, () -> market.addNewProduct(usersName[0], shopNames[1], prodNames[0], cat[0],
				descs[0], prices[0]));
	}

	@Test
	void removeProductSuccess() throws Exception {
		market.addNewProduct(usersName[0], shopNames[0], prodNames[0], cat[0], descs[0], prices[0]);
		ProductIntr product = market.getProduct(usersName[0], shopNames[0], prodNames[0]);
		assertTrue(product.getName().equals(prodNames[0]));
		market.removeProduct(usersName[0], shopNames[0], prodNames[0]);
		assertNull(market.getProduct(usersName[0], shopNames[0], prodNames[0]));
	}

	@Test
	void removeProductFailLogin() throws Exception {
		market.addNewProduct(usersName[0], shopNames[0], prodNames[0], cat[0], descs[0], prices[0]);
		market.logout(usersName[0]);
		assertThrows(Exception.class, () -> market.removeProduct(usersName[0], shopNames[0], prodNames[0]));
	}

	@Test
	void removeProductFailPermission() throws Exception {
		market.addNewProduct(usersName[0], shopNames[0], prodNames[0], cat[0], descs[0], prices[0]);
		assertThrows(Exception.class, () -> market.removeProduct(usersName[0], shopNames[1], prodNames[0]));
	}

	@Test
	void updateProductNameSuccess() throws Exception {
		for(int i = 0; i < usersName.length; i++) {
			market.addNewProduct(usersName[i], shopNames[i], prodNames[i], cat[i], descs[i], prices[i]);
			market.updateProductName(usersName[i], shopNames[i], prodNames[i], prodNamesNew[i]);
			ProductIntr product = market.getProduct(usersName[i], shopNames[i], prodNamesNew[i]);
			assertTrue(product.getName().equals(prodNamesNew[i]));
		}
	}

	@Test
	void updateProductNameFailLogin() throws Exception {
		market.addNewProduct(usersName[0], shopNames[0], prodNames[0], cat[0], descs[0], prices[0]);
		market.logout(usersName[0]);
		assertThrows(Exception.class, () -> market.updateProductName(usersName[0], shopNames[0], prodNames[0],
				prodNamesNew[0]));
	}

	@Test
	void updateProductNameFailPermission() throws Exception {
		market.addNewProduct(usersName[0], shopNames[0], prodNames[0], cat[0], descs[0], prices[0]);
		market.logout(usersName[0]);
		assertThrows(Exception.class, () -> market.updateProductName(usersName[0], shopNames[1], prodNames[0],
				prodNamesNew[0]));
	}

	@Test
	void updateProductDescSuccess() throws Exception {
		for(int i = 0; i < usersName.length; i++) {
			market.addNewProduct(usersName[i], shopNames[i], prodNames[i], cat[i], descs[i], prices[i]);
			market.updateProductDesc(usersName[i], shopNames[i], prodNames[i], descsNew[i]);
			ProductIntr product = market.getProduct(usersName[i], shopNames[i], prodNames[i]);
			assertTrue(product.getDescription().equals(descsNew[i]));
		}
	}

	@Test
	void updateProductDescFailLogin() throws Exception {
		market.addNewProduct(usersName[0], shopNames[0], prodNames[0], cat[0], descs[0], prices[0]);
		market.logout(usersName[0]);
		assertThrows(Exception.class, () -> market.updateProductDesc(usersName[0], shopNames[0], prodNames[0],
				descsNew[0]));
	}

	@Test
	void updateProductDescFailPermission() throws Exception {
		market.addNewProduct(usersName[0], shopNames[0], prodNames[0], cat[0], descs[0], prices[0]);
		market.logout(usersName[0]);
		assertThrows(Exception.class, () -> market.updateProductDesc(usersName[0], shopNames[1], prodNames[0],
				descsNew[0]));
	}

	@Test
	void updateProductPriceSuccess() throws Exception {
		for(int i = 0; i < usersName.length; i++) {
			market.addNewProduct(usersName[i], shopNames[i], prodNames[i], cat[i], descs[i], prices[i]);
			market.updateProductPrice(usersName[i], shopNames[i], prodNames[i], pricesNew[i]);
			ProductIntr product = market.getProduct(usersName[i], shopNames[i], prodNames[i]);
			assertTrue(product.getPrice() == pricesNew[i]);
		}
	}

	@Test
	void updateProductPriceFailLogin() throws Exception {
		market.addNewProduct(usersName[0], shopNames[0], prodNames[0], cat[0], descs[0], prices[0]);
		market.logout(usersName[0]);
		assertThrows(Exception.class, () -> market.updateProductPrice(usersName[0], shopNames[0], prodNames[0],
				pricesNew[0]));
	}

	@Test
	void updateProductPriceFailPermission() throws Exception {
		market.addNewProduct(usersName[0], shopNames[0], prodNames[0], cat[0], descs[0], prices[0]);
		market.logout(usersName[0]);
		assertThrows(Exception.class, () -> market.updateProductPrice(usersName[0], shopNames[1], prodNames[0],
				pricesNew[0]));
	}

	@Test
	void updateProductQuantitySuccess() throws Exception {
		for(int i = 0; i < usersName.length; i++) {
			market.addNewProduct(usersName[i], shopNames[i], prodNames[i], cat[i], descs[i], prices[i]);
			market.updateProductQuantity(usersName[i], shopNames[i], prodNames[i], quantity[i]);
			ShopProduct product = (ShopProduct) market.getProduct(usersName[i], shopNames[i], prodNames[i]);
			assertTrue(product.getQuantity() == quantity[i]);
		}
	}

	@Test
	void updateProductQuantityFailLogin() throws Exception {
		market.addNewProduct(usersName[0], shopNames[0], prodNames[0], cat[0], descs[0], prices[0]);
		market.logout(usersName[0]);
		assertThrows(Exception.class, () -> market.updateProductQuantity(usersName[0], shopNames[0], prodNames[0],
				quantity[0]));
	}

	@Test
	void updateProductQuantityFailPermission() throws Exception {
		market.addNewProduct(usersName[0], shopNames[0], prodNames[0], cat[0], descs[0], prices[0]);
		market.logout(usersName[0]);
		assertThrows(Exception.class, () -> market.updateProductQuantity(usersName[0], shopNames[1], prodNames[0],
				quantity[0]));
	}


}