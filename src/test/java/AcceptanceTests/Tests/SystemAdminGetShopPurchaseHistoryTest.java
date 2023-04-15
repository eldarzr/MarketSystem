//package AcceptanceTests.Tests;
//
//import AcceptanceTests.MarketSystemBridge;
//import AcceptanceTests.MarketSystemRealBridge;
//import AcceptanceTests.PurchaseBridge;
//import org.junit.After;
//import org.junit.jupiter.api.BeforeEach;
//import org.junit.jupiter.api.Test;
//
//import java.util.Collection;
//
//import static org.junit.Assert.assertEquals;
//
//public class SystemAdminGetShopPurchaseHistoryTest {
//    private MarketSystemBridge marketSystem;
//    private String systemAdmin;
//    private String shopOwner;
//    private String shopName;
//
//    @BeforeEach
//    public void setUp() throws Exception {
//        marketSystem = new MarketSystemRealBridge();
//        systemAdmin = "testSystemAdmin";
//        shopOwner = "testShopOwner";
//        shopName = "testShop";
//        // create system admin account and shop owner account
//        marketSystem.register(systemAdmin, "mail@post.org", "Passw0rd!!!");
//        marketSystem.register(shopOwner, "mail@post.org", "Passw0rd!!!");
//        // add system admin role to the system admin account
//        marketSystem.addAdmin(systemAdmin);//todo: not implemented yet
//        // create a shop using the shop owner account
//        marketSystem.createShop(shopOwner, shopName);
//        // add some products to the shop
//        marketSystem.addNewProduct(shopOwner, shopName, "product1","category", "description", 10, 50);
//        marketSystem.addNewProduct(shopOwner, shopName, "product2", "category","description", 5, 20);
//        // make some purchases
//        marketSystem.addProductsToCart("buyer1", shopName, "product1", 2);
//        marketSystem.addProductsToCart("buyer1", shopName, "product2", 1);
//        marketSystem.purchaseCart("buyer1", "1234567812345678", "Kofiko Kohen", "04/24", "123");
//        marketSystem.addProductsToCart("buyer2", shopName, "product1", 1);
//        marketSystem.purchaseCart("buyer2", "1234567812345678", "Kofiko Kohen", "04/24", "123");
//    }
//
//    @After
//    public void tearDown() {
//        marketSystem = null;
//    }
//
//    @Test
//    public void testGetShopPurchaseHistory() throws Exception {
//        // log in as system admin to get purchase history
//        marketSystem.login(systemAdmin, "Passw0rd!!!");
//        // get purchase history before any changes
//        Collection<PurchaseBridge> purchaseHistory = marketSystem.getShopPurchaseHistory(shopOwner, shopName);
//        assertEquals(2, purchaseHistory.size());
//        // verify purchase history contents
//        PurchaseBridge[] purchaseArray = purchaseHistory.toArray(new PurchaseBridge[0]);
//        // check first purchase
//        assertEquals("buyer1", purchaseArray[0].getTransactionId());
//        assertEquals(2, purchaseArray[0].getQuantityOfProduct("product1"));
//        assertEquals(1, purchaseArray[0].getQuantityOfProduct("product2"));
//        // check second purchase
//        assertEquals("buyer2", purchaseArray[1].getTransactionId());
//        assertEquals(1, purchaseArray[1].getQuantityOfProduct("product1"));
//        // remove one of the products from the shop
//        marketSystem.removeProduct(shopOwner, shopName, "product2");
//        // get purchase history after product removal
//        purchaseHistory = marketSystem.getShopPurchaseHistory(shopOwner, shopName);
//        assertEquals(2, purchaseHistory.size());
//        // verify purchase history contents
//        purchaseArray = purchaseHistory.toArray(new PurchaseBridge[0]);
//        // check first purchase
//        assertEquals("buyer1", purchaseArray[0].getTransactionId());
//        assertEquals(2, purchaseArray[0].getQuantityOfProduct("product1"));
//        // the second purchase should not contain "product2" anymore
//        assertEquals(0, purchaseArray[0].getQuantityOfProduct("product2"));
//        // check second purchase
//        assertEquals("buyer2", purchaseArray[1].getTransactionId());
//        assertEquals(1, purchaseArray[1].getQuantityOfProduct("product1"));
//    }
//}