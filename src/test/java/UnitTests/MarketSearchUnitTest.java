package UnitTests;

import BusinessLayer.ManagePermissions;
import BusinessLayer.MemberRoleInShop;
import BusinessLayer.Shops.ProductIntr;
import BusinessLayer.Shops.Shop;
import BusinessLayer.Shops.ShopHandler;
import BusinessLayer.Shops.ShopProduct;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import static BusinessLayer.Search.IGNORED_INT;
import static BusinessLayer.Search.IGNORED_STRING;
import static org.junit.jupiter.api.Assertions.assertEquals;

class MarketSearchUnitTest {
	ShopHandler shopHandler;
	Shop[] shops = new Shop[2];
	ShopProduct[] product = new ShopProduct[3];
	MemberRoleInShop memberRoleInShop;
	ManagePermissions managePermissions;
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
		shopHandler = ShopHandler.getInstance();
		memberRoleInShop = Mockito.mock(MemberRoleInShop.class);
		managePermissions = Mockito.mock(ManagePermissions.class);
		Mockito.when(memberRoleInShop.getPermissions()).thenReturn(managePermissions);
		for(int i = 0; i < usersName.length; i++) {
			shops[i] = Mockito.mock(Shop.class);
			shops[i].addRole(usersName[0], memberRoleInShop);
			Mockito.when(shops[i].isActive()).thenReturn(true);
			shopHandler.addShop(shopNames[i], shops[i]);
		}
		Mockito.when(shops[0].getProducts()).thenReturn(Arrays.asList(product));
		for(int i = 0; i < prodNames.length; i++) {
			product[i] = Mockito.mock(ShopProduct.class);
			Mockito.when(product[i].getName()).thenReturn(prodNames[i]);
			Mockito.when(product[i].getDescription()).thenReturn(descs[i]);
			Mockito.when(product[i].getCategory()).thenReturn(cats[i]);
			Mockito.when(product[i].getPrice()).thenReturn(prices[i]);
			shops[0].addNewProductTest(product[i]);
		}
	}

	@AfterEach
	void tearDown() {
		shopHandler.reset();
	}

	@Test
	void basicSuccess() throws Exception {
		List<ProductIntr> products = shopHandler.basicSearch(prodNames[0], false);
		for(int i = 0; i < prodNames.length; i++) {
			assertEquals(products.get(i).getName(), prodNames[i]);
		}
	}

	@Test
	void minSuccess() throws Exception {
		List<ProductIntr> products = shopHandler.extendedSearch(prodNames[0], 6, IGNORED_INT, IGNORED_STRING, false);
		assertEquals(products.get(0).getName(), prodNames[1]);
	}

	@Test
	void maxSuccess() throws Exception {
		List<ProductIntr> products = shopHandler.extendedSearch(prodNames[0],  IGNORED_INT, 6, IGNORED_STRING, false);
		assertEquals(products.get(0).getName(), prodNames[0]);
	}

	@Test
	void minMaxSuccess() throws Exception {
		List<ProductIntr> products = shopHandler.extendedSearch(prodNames[0],  4, 6, IGNORED_STRING, false);
		assertEquals(products.get(0).getName(), prodNames[0]);
	}

	@Test
	void catSuccess() throws Exception {
		List<ProductIntr> products = shopHandler.extendedSearch(prodNames[0],  IGNORED_INT, IGNORED_INT, cats[0], false);
		assertEquals(products.get(0).getName(), prodNames[0]);
	}

	@Test
	void allSuccess() throws Exception {
		List<ProductIntr> products = shopHandler.extendedSearch(prodNames[0],  prices[0], prices[0], cats[0], false);
		assertEquals(products.get(0).getName(), prodNames[0]);
	}

}