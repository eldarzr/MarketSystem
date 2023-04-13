package AcceptanceTests.Tests;

import AcceptanceTests.*;
import org.junit.After;
import org.junit.Before;
import org.junit.jupiter.api.*;
import org.junit.jupiter.api.BeforeEach;

import java.util.Collection;

import static org.junit.Assert.*;

public class GuestPurchasingActionsTest {
    private MarketSystemBridge market= new MarketSystemRealBridge();
    private String tempUserName;
    private ShoppingCartBridge cart;
    private ShopBridge shop;
    private ProductBridge product;

    @BeforeEach
    public void setUp() throws Exception {
        market = new MarketSystemRealBridge();
        market.init();
        tempUserName = market.startSession();

        // create a shop with a product for testing
        market.register("testUser", "testUser@example.com", "Passw0rd!!!");
        market.login("testUser", "Passw0rd!!!");
        market.createShop("testUser", "My Shop");
        market.addNewProduct("testUser", "My Shop", "item1", "Item 1 description", 10.0, 100);
        market.logout("testUser");

        cart = market.getCart(tempUserName);

        Collection<ProductBridge> products = market.basicSearch(tempUserName, "item1");
        product = products.iterator().next();

        shop = market.getShop("testUser", "My Shop");
    }

    @After
    public void tearDown() {
        market.logout(tempUserName);
        market.clearData();
        cart = null;
        shop = null;
        product = null;
    }

    @Test
    public void testPurchaseCartWithoutDiscount() {
        try {
            market.addProductsToCart(tempUserName, product.getShopName(), product.getProductName(), 1);

            double expectedTotalPrice = product.getProductPrice();
            double actualTotalPrice = cart.calculateTotalPrice();
            assertEquals("Incorrect total price of cart", expectedTotalPrice, actualTotalPrice, 0.001);

            market.purchaseCart(tempUserName, "1234567890123456", "John Doe", "01/23", "123");
            assertTrue("Cart not emptied after purchase", cart.isEmpty());

            int expectedQuantityInStock = market.getProductQuantityInShop(product.getShopName(), product.getProductName()) - 1;
            int actualQuantityInStock = market.getProductQuantityInShop(product.getShopName(), product.getProductName());
            assertEquals("Incorrect quantity of product in stock after purchase", expectedQuantityInStock, actualQuantityInStock);

        } catch (Exception e) {
            fail("Exception thrown while testing purchase cart without discount: " + e.getMessage());
        }
    }

    @Test
    public void testPurchaseCartWithShopDiscount() {
        try {
            // set up shop discount
            shop.setDiscountPolicy(new ShopDiscountPolicyBridge() {
                @Override
                public double getTotalPriceWithDiscount(Collection<ProductBridge> products, String couponCode) {
                    double totalPrice = 0;
                    for (ProductBridge product : products) {
                        totalPrice += product.getProductPrice();
                    }
                    return totalPrice * 0.9; // 10% discount
                }

                @Override
                public boolean isValidCoupon(String couponCode) {
                    return couponCode.equals("TEST10");
                }
            });

            market.addProductsToCart(tempUserName, product.getShopName(), product.getProductName(), 2);

            double expectedTotalPrice = product.getProductPrice() * 2 * 0.9;
            double actualTotalPrice = cart.getTotalPriceWithDiscount("TEST10");
            assertEquals("Incorrect total price of cart with shop discount", expectedTotalPrice, actualTotalPrice, 0.001);

            market.purchaseCart(tempUserName, "1234567890123456", "John Doe", "01/23", "123", "TEST10");
            assertTrue("Cart not emptied after purchase", cart.isEmpty());
            int expectedQuantityInStock = market.getProductQuantityInShop(product.getShopName(), product.getProductName()) - 2;
            int actualQuantityInStock = market.getProductQuantityInShop(product.getShopName(), product.getProductName());
            assertEquals("Incorrect quantity of product in stock after purchase with shop discount", expectedQuantityInStock, actualQuantityInStock);

        } catch (Exception e) {
            fail("Exception thrown while testing purchase cart with shop discount: " + e.getMessage());
        }
    }

    @Test
    public void testPurchaseCartWithSystemDiscount() {
        try {
            // set up system discount
            market.setDiscountPolicy(new SystemDiscountPolicyBridge() {
                @Override
                public double getTotalPriceWithDiscount(Collection<ProductBridge> products) {
                    double totalPrice = 0;
                    for (ProductBridge product : products) {
                        totalPrice += product.getProductPrice();
                    }
                    return totalPrice * 0.95; // 5% discount
                }
            });

            market.addProductsToCart(tempUserName, product.getShopName(), product.getProductName(), 3);

            double expectedTotalPrice = product.getProductPrice() * 3 * 0.95;
            double actualTotalPrice = cart.getTotalPriceWithDiscount(null);
            assertEquals("Incorrect total price of cart with system discount", expectedTotalPrice, actualTotalPrice, 0.001);

            market.purchaseCart(tempUserName, "1234567890123456", "John Doe", "01/23", "123", null);
            assertTrue("Cart not emptied after purchase", cart.isEmpty());

            int expectedQuantityInStock = market.getProductQuantityInShop(product.getShopName(), product.getProductName()) - 3;
            int actualQuantityInStock = market.getProductQuantityInShop(product.getShopName(), product.getProductName());
            assertEquals("Incorrect quantity of product in stock after purchase with system discount", expectedQuantityInStock, actualQuantityInStock);

        } catch (Exception e) {
            fail("Exception thrown while testing purchase cart with system discount: " + e.getMessage());
        }
    }
}
