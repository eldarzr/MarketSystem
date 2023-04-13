package AcceptanceTests.Tests;

import AcceptanceTests.MarketSystemBridge;
import AcceptanceTests.MarketSystemRealBridge;
import AcceptanceTests.PurchaseBridge;
import org.junit.After;
import org.junit.Before;
import org.junit.jupiter.api.Test;

import java.util.Collection;

import static org.junit.Assert.assertEquals;

public class ShopOwnerGetPurchaseHistoryTest {
    private MarketSystemBridge marketSystem;
    private String shopOwner;
    private String shopName;

    @Before
    public void setUp() throws Exception {
        marketSystem = new MarketSystemRealBridge();
        shopOwner = "testShopOwner";
        shopName = "testShop";
        // create shop owner account and shop
        marketSystem.register(shopOwner,"mail@post.org", "password");
        marketSystem.createShop(shopOwner, shopName);
        // add some products to the shop
        marketSystem.addNewProduct(shopOwner, shopName, "product1", "description", 10, 50);
        marketSystem.addNewProduct(shopOwner, shopName, "product2", "description", 5, 20);
        // make some purchases
        marketSystem.addProductsToCart("buyer1",shopName, "product1", 2);
        marketSystem.addProductsToCart("buyer1",shopName, "product2", 1);
        marketSystem.purchaseCart("buyer1", "1234567812345678", "Kofiko Kohen","04/24","123");
        marketSystem.addProductsToCart("buyer2",shopName, "product1", 1);
        marketSystem.purchaseCart("buyer2", "1234567812345678", "Kofiko Kohen","04/24","123");
    }

    @After
    public void tearDown() {
        marketSystem = null;
    }

    @Test
    public void testGetShopPurchaseHistory() throws Exception {
        // get purchase history before any changes
        Collection<PurchaseBridge> purchaseHistory = marketSystem.getShopPurchaseHistory(shopOwner, shopName);
        assertEquals(2, purchaseHistory.size());
        // verify purchase history contents
        PurchaseBridge[] purchaseArray = purchaseHistory.toArray(new PurchaseBridge[0]);
        // check first purchase
        assertEquals("buyer1", purchaseArray[0].getTransactionId());
        assertEquals(2, purchaseArray[0].getQuantityOfProduct("product1"));
        assertEquals(1, purchaseArray[0].getQuantityOfProduct("product2"));
        // check second purchase
        assertEquals("buyer2", purchaseArray[1].getTransactionId());
        assertEquals(1, purchaseArray[1].getQuantityOfProduct("product1"));
        // remove one of the products from the shop
        marketSystem.removeProduct(shopOwner, shopName, "product2");
        // get purchase history after product removal
        purchaseHistory = marketSystem.getShopPurchaseHistory(shopOwner, shopName);
        assertEquals(2, purchaseHistory.size());
        // verify purchase history contents
        purchaseArray = purchaseHistory.toArray(new PurchaseBridge[0]);
        // check first purchase
        assertEquals("buyer1", purchaseArray[0].getTransactionId());
        assertEquals(2, purchaseArray[0].getQuantityOfProduct("product1"));
        assertEquals(1, purchaseArray[0].getQuantityOfProduct("product2"));
        // check second purchase
        assertEquals("buyer2", purchaseArray[1].getTransactionId());
        assertEquals(1, purchaseArray[1].getQuantityOfProduct("product1"));
        // change the price of one of the products in the shop

        // change the price of one of the products in the shop
        marketSystem.updateProductPrice(shopOwner, shopName, "product1", 20);


        // get purchase history after product price change
        purchaseHistory = marketSystem.getShopPurchaseHistory(shopOwner, shopName);
        assertEquals(2, purchaseHistory.size());
        // verify purchase history contents
        purchaseArray = purchaseHistory.toArray(new PurchaseBridge[0]);
        // check first purchase
        assertEquals("buyer1", purchaseArray[0].getTransactionId());
        assertEquals(2, purchaseArray[0].getQuantityOfProduct("product1"));
        assertEquals(1, purchaseArray[0].getQuantityOfProduct("product2"));
        // check second purchase
        assertEquals("buyer2", purchaseArray[1].getTransactionId());
        assertEquals(1, purchaseArray[1].getQuantityOfProduct("product1"));

        // change the description of one of the products in the shop
        marketSystem.updateProductDesc(shopOwner, shopName, "product1", "new description");

        // get purchase history after product price change
        purchaseHistory = marketSystem.getShopPurchaseHistory(shopOwner, shopName);
        assertEquals(2, purchaseHistory.size());
        // verify purchase history contents
        purchaseArray = purchaseHistory.toArray(new PurchaseBridge[0]);
        // check first purchase
        assertEquals("buyer1", purchaseArray[0].getTransactionId());
        assertEquals(2, purchaseArray[0].getQuantityOfProduct("product1"));
        assertEquals(1, purchaseArray[0].getQuantityOfProduct("product2"));
        // check second purchase
        assertEquals("buyer2", purchaseArray[1].getTransactionId());
        assertEquals(1, purchaseArray[1].getQuantityOfProduct("product1"));
        // change the description of one of the products in the shop
        marketSystem.updateProductDesc(shopOwner,shopName,"product1","newer description");
        // get purchase history after product description change
        purchaseHistory = marketSystem.getShopPurchaseHistory(shopOwner, shopName);
        assertEquals(2, purchaseHistory.size());
        // verify purchase history contents
        purchaseArray = purchaseHistory.toArray(new PurchaseBridge[0]);
        // check first purchase
        assertEquals("buyer1", purchaseArray[0].getTransactionId());
        assertEquals(2, purchaseArray[0].getQuantityOfProduct("product1"));
        assertEquals(1, purchaseArray[0].getQuantityOfProduct("product2"));
        // check second purchase
        assertEquals("buyer2", purchaseArray[1].getTransactionId());
        assertEquals(1, purchaseArray[1].getQuantityOfProduct("product1"));
    }
}
