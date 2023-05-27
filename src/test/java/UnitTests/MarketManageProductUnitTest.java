package UnitTests;

import BusinessLayer.Enums.ManagePermissionsEnum;
import BusinessLayer.ManagePermissions;
import BusinessLayer.Market;
import BusinessLayer.MemberRoleInShop;
import BusinessLayer.PersistenceManager;
import BusinessLayer.Shops.Shop;
import BusinessLayer.Shops.ShopProduct;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;

import javax.persistence.EntityManager;
import javax.persistence.EntityTransaction;

import static org.junit.jupiter.api.Assertions.*;

class MarketManageProductUnitTest {
	Shop shop;
	ShopProduct[] product = new ShopProduct[2];
	MemberRoleInShop memberRoleInShop;
	ManagePermissions managePermissions;
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
	EntityManager entityManager;
	EntityTransaction entityTransaction;

	@BeforeAll
	static void configInit() throws Exception {
		new Market().init("src/InitFiles/TestsConfig.jason");
	}

	@BeforeEach
	void setUp() throws Exception {
		shop = new Shop(shopNames[0], usersName[0]);
		memberRoleInShop = Mockito.mock(MemberRoleInShop.class);
		managePermissions = Mockito.mock(ManagePermissions.class);
		entityManager = Mockito.mock(EntityManager.class);
		entityTransaction = Mockito.mock(EntityTransaction.class);
		PersistenceManager.getInstance().setTestEntityManager(entityManager);
		Mockito.when(entityManager.getTransaction()).thenReturn(entityTransaction);
		Mockito.doNothing().when(entityManager).clear();
		Mockito.doNothing().when(entityManager).close();
		Mockito.doNothing().when(entityTransaction).commit();
		Mockito.doNothing().when(entityTransaction).begin();
		Mockito.when(entityTransaction.isActive()).thenReturn(false);
		Mockito.when(entityManager.isOpen()).thenReturn(true);
		Mockito.when(memberRoleInShop.getPermissions()).thenReturn(managePermissions);
		shop.addRole(usersName[0], memberRoleInShop);
		for (int i=0; i < prodNames.length; i++) {
			product[i] = Mockito.mock(ShopProduct.class);
			Mockito.doNothing().when(entityManager).persist(product[i]);
			Mockito.when(entityManager.merge(product[i])).thenReturn(product[i]);
			Mockito.doNothing().when(entityManager).remove(product[i]);
			Mockito.when(product[i].getName()).thenReturn(prodNames[i]);
			Mockito.when(product[i].getDescription()).thenReturn(descs[i]);
			Mockito.when(product[i].getCategory()).thenReturn(cat[i]);
			Mockito.when(product[i].getPrice()).thenReturn(prices[i]);
			Mockito.when(product[i].getQuantity()).thenReturn(quantity[i]);
			shop.addNewProductTest(product[i]);
		}
	}

	@AfterEach
	void tearDown() {
		shop = null;
		PersistenceManager.getInstance().setRealEntityManager();
	}

	@Test
	void removeProductSuccess() throws Exception {
		int currSize = shop.getProducts().size();
		Mockito.when(managePermissions.validatePermission(ManagePermissionsEnum.MANAGE_STOCK)).thenReturn(true);
		shop.removeProduct(usersName[0], prodNames[0]);
		assertEquals(shop.getProducts().size(), currSize - 1);
	}

	@Test
	void removeProductFailPermission() throws Exception {
		Mockito.when(managePermissions.validatePermission(ManagePermissionsEnum.MANAGE_STOCK)).thenReturn(false);
		assertThrows(Exception.class, () -> shop.removeProduct(usersName[0], prodNames[0]));
	}

//	@Test
//	void updateProductNameSuccess() throws Exception {
//		Mockito.when(managePermissions.validatePermission(ManagePermissionsEnum.MANAGE_STOCK)).thenReturn(true);
//		assertDoesNotThrow(() -> shop.updateProductName(usersName[0], prodNames[0], prodNamesNew[0]));
//	}
//
//	@Test
//	void updateProductNameFailPermission() throws Exception {
//		Mockito.when(managePermissions.validatePermission(ManagePermissionsEnum.MANAGE_STOCK)).thenReturn(false);
//		assertThrows(Exception.class, () -> shop.updateProductName(usersName[0], prodNames[0], prodNamesNew[0]));
//	}
//
//	@Test
//	void updateProductNameFailExistsNAme() throws Exception {
//		Mockito.when(managePermissions.validatePermission(ManagePermissionsEnum.MANAGE_STOCK)).thenReturn(true);
//		assertThrows(Exception.class, () -> shop.updateProductName(usersName[0], prodNames[0], prodNames[1]));
//	}

	@Test
	void updateProductDescSuccess() throws Exception {
		Mockito.when(managePermissions.validatePermission(ManagePermissionsEnum.MANAGE_STOCK)).thenReturn(true);
		assertDoesNotThrow(() -> shop.updateProductDesc(usersName[0], prodNames[0], descsNew[0]));
	}

	@Test
	void updateProductDescFailPermission() throws Exception {
		Mockito.when(managePermissions.validatePermission(ManagePermissionsEnum.MANAGE_STOCK)).thenReturn(false);
		assertThrows(Exception.class, () -> shop.updateProductDesc(usersName[0], prodNames[0], descsNew[0]));
	}

	@Test
	void updateProductPriceSuccess() throws Exception {
		Mockito.when(managePermissions.validatePermission(ManagePermissionsEnum.MANAGE_STOCK)).thenReturn(true);
		assertDoesNotThrow(() -> shop.updateProductPrice(usersName[0], prodNames[0], pricesNew[0]));
	}

	@Test
	void updateProductPriceFailPermission() throws Exception {
		Mockito.when(managePermissions.validatePermission(ManagePermissionsEnum.MANAGE_STOCK)).thenReturn(false);
		assertThrows(Exception.class, () -> shop.updateProductPrice(usersName[0], prodNames[0], pricesNew[0]));
	}

	@Test
	void updateProductQuantitySuccess() throws Exception {
		Mockito.when(managePermissions.validatePermission(ManagePermissionsEnum.MANAGE_STOCK)).thenReturn(true);
		assertDoesNotThrow(() -> shop.updateProductQuantity(usersName[0], prodNames[0], quantity[0]));
	}

	@Test
	void updateProductQuantityFailPermission() throws Exception {
		Mockito.when(managePermissions.validatePermission(ManagePermissionsEnum.MANAGE_STOCK)).thenReturn(false);
		assertThrows(Exception.class, () -> shop.updateProductQuantity(usersName[0], prodNames[0], quantity[0]));
	}


}