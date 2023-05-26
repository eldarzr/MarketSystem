package UnitTests;

import BusinessLayer.Market;
import BusinessLayer.Shops.Shop;
import BusinessLayer.Shops.ShopHandler;
import BusinessLayer.Shops.ShopIntr;
import BusinessLayer.Shops.ShopRepository;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;

import static org.junit.jupiter.api.Assertions.assertThrows;

class MarketCreateShopUnitTest {
	ShopHandler shopHandler;
	ShopRepository shopRepository;
	Shop[] shops = new Shop[2];
	String[] usersName = {"eldar", "niv12"};
	String[] passwords = {"Aa123456", "Aa123456"};
	String[] emails = {"eldar@gmail.com", "niv@gmail.com"};
	String[] shopNames = {"shop1", "shop2"};

	String guestName;

	@BeforeAll
	static void configInit() throws Exception {
		new Market().init("src/InitFiles/TestsConfig.jason");
	}

	@BeforeEach
	void setUp() throws Exception {
		shopHandler = ShopHandler.getInstance();
		shopRepository = Mockito.mock(ShopRepository.class);
		shopHandler.setShopRepositoryForTests(shopRepository);
		for (int i = 0; i < 2; i++) {
			shops[i] = Mockito.mock(Shop.class);
		}
	}

	@AfterEach
	void tearDown() {
		shopHandler.reset();
	}

	@Test
	void createShopSuccess() throws Exception {
		Mockito.doNothing().when(shopRepository).addShop(shopNames[0], shops[0]);
		shopHandler.addShop(shopNames[0], shops[0]);
	}

	@Test
	void createShopFailDoubleName() throws Exception {
		Mockito.doNothing().when(shopRepository).addShop(shopNames[0], shops[0]);
		shopHandler.addShop(shopNames[0], shops[0]);
		Mockito.doThrow(new Exception()).when(shopRepository).addShop(shopNames[0], shops[1]);
		assertThrows(Exception.class, () -> shopHandler.addShop(shopNames[0], shops[1]));
	}
}