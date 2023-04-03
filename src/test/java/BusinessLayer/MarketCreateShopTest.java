package BusinessLayer;

import org.junit.jupiter.api.*;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.CsvSource;

import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

class MarketCreateShopTest {
	Market market;

	@BeforeEach
	void setUp() {
		market = new Market();
		market.init();
	}

	@AfterEach
	void tearDown() {
	}

	@ParameterizedTest
	@CsvSource({
			"eldar, Aa123456, shop1",
			"niv, Aa123456, shop2"
	})
	@Test
	void createShopSuccess(String userName, String password, String shopName) {
//		market.register(userName, password);
		market.login(userName, password);
		assertDoesNotThrow(() -> market.createShop(userName, shopName));
	}

	@ParameterizedTest
	@CsvSource({
			"eldar, Aa123456, shop1, niv, Aa123456, shop2"
	})
	@Test
	void createShopFailDoubleName(String user1, String password1, String shop1,
	                              String user2, String password2, String shop2) {
//		market.register(user1, password1);
		market.login(user1, password1);
//		market.register(user2, password2);
		market.login(user2, password2);
		assertDoesNotThrow(() -> market.createShop(user1, shop1));
		assertThrows(Exception.class, () -> market.createShop(user1, shop1));
		assertThrows(Exception.class, () -> market.createShop(user2, shop1));
	}

	@ParameterizedTest
	@CsvSource({
			"eldar, Aa123456, shop1"
	})
//	@Test
	void createShopFailNotLoggedIn(String user1, String password1, String shop1) {
//		market.register(user1, password1);
		assertThrows(Exception.class, () -> market.createShop(user1, shop1));
	}

	@ParameterizedTest
	@DisplayName("Test creating a shop without being logged in")
	@CsvSource({
			"eldar, Aa123456, shop1"
	})
//	@Test
	void createShopFailNotRegistered(String user1, String password1, String shop1) {
		assertThrows(Exception.class, () -> market.createShop(user1, shop1));
	}
}