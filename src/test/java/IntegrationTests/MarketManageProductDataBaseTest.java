package IntegrationTests;

import BusinessLayer.Market;
import BusinessLayer.PersistenceManager;
import BusinessLayer.Shops.Product;
import BusinessLayer.Shops.ProductIntr;
import BusinessLayer.Shops.ShopProduct;
import BusinessLayer.Users.User;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class MarketManageProductDataBaseTest {
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
		market.init("src/InitFiles/TestsConfig.jason");
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
			Product product = (Product) market.getProduct(usersName[i], shopNames[i], prodNames[i]);
			Product productFromDB = PersistenceManager.getInstance().getEntityManager().find(Product.class, product.getId());
			assertTrue(productFromDB.getName().equals(prodNames[i]));
		}
	}

	@Test
	void removeProductSuccess() throws Exception {
		market.addNewProduct(usersName[0], shopNames[0], prodNames[0], cat[0], descs[0], prices[0]);
		Product product = (Product) market.getProduct(usersName[0], shopNames[0], prodNames[0]);
		assertTrue(product.getName().equals(prodNames[0]));
		market.removeProduct(usersName[0], shopNames[0], prodNames[0]);
		Product productFromDB = PersistenceManager.getInstance().getEntityManager().find(Product.class, product.getId());
		assertNull(productFromDB);
	}

	@Test
	void updateProductDescSuccess() throws Exception {
		for(int i = 0; i < usersName.length; i++) {
			market.addNewProduct(usersName[i], shopNames[i], prodNames[i], cat[i], descs[i], prices[i]);
			market.updateProductDesc(usersName[i], shopNames[i], prodNames[i], descsNew[i]);
			Product product = (Product) market.getProduct(usersName[i], shopNames[i], prodNames[i]);
			Product productFromDB = PersistenceManager.getInstance().getEntityManager().find(Product.class, product.getId());
			assertTrue(productFromDB.getDescription().equals(descsNew[i]));
		}
	}

	@Test
	void updateProductPriceSuccess() throws Exception {
		for(int i = 0; i < usersName.length; i++) {
			market.addNewProduct(usersName[i], shopNames[i], prodNames[i], cat[i], descs[i], prices[i]);
			market.updateProductPrice(usersName[i], shopNames[i], prodNames[i], pricesNew[i]);
			Product product = (Product) market.getProduct(usersName[i], shopNames[i], prodNames[i]);
			Product productFromDB = PersistenceManager.getInstance().getEntityManager().find(Product.class, product.getId());
			assertTrue(productFromDB.getPrice() == pricesNew[i]);
		}
	}
	@Test
	void updateProductQuantitySuccess() throws Exception {
		for(int i = 0; i < usersName.length; i++) {
			market.addNewProduct(usersName[i], shopNames[i], prodNames[i], cat[i], descs[i], prices[i]);
			market.updateProductQuantity(usersName[i], shopNames[i], prodNames[i], quantity[i]);
			ShopProduct product = (ShopProduct) market.getProduct(usersName[i], shopNames[i], prodNames[i]);
			ShopProduct productFromDB = PersistenceManager.getInstance().getEntityManager().find(ShopProduct.class, product.getId());
			assertTrue(productFromDB.getQuantity() == quantity[i]);
		}
	}


}