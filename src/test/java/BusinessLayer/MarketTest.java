package BusinessLayer;

import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.CsvSource;

import static org.junit.jupiter.api.Assertions.*;

class MarketTest {
	Market market;

	@BeforeEach
	void setUp() {
		market = new Market();
	}

	@AfterEach
	void tearDown() {
	}

	@ParameterizedTest
	@CsvSource({
			"user1, shop1",
			"user2, shop2"
	})
	@Test
	void createShopSuccess(String userName, String shopName) {
		assertDoesNotThrow(() -> market.createShop(userName, shopName));
	}

	@ParameterizedTest
	@CsvSource({
			"user1, shop1",
			"user2, shop2"
	})
	@Test
	void createShopFail(String userName, String shopName) {
		assertThrows(Exception.class, () -> market.createShop(userName, shopName));
	}
}