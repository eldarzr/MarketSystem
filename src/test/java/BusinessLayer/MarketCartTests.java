package BusinessLayer;

import BusinessLayer.Purchases.Cart;
import BusinessLayer.Purchases.ShopBag;
import BusinessLayer.Purchases.ShopBagItem;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import java.io.IOException;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;


class MarketCartTests {

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

    @BeforeEach
    void setUp() throws Exception {
        market = new Market();
        market.init();
        for(int i = 0; i < usersName.length; i++) {
            String guestName = market.startSession();
            market.register(usersName[i], emails[i], passwords[i]);
            market.login(guestName,usersName[i], passwords[i]);
            market.createShop(usersName[i], shopNames[i]);
            market.addNewProduct(usersName[i], shopNames[i], prodNames[i], cat[i], descs[i], prices[i]);
            market.addProductItems(usersName[i], shopNames[i], prodNames[i], quantity[i]);
        }
    }

    @AfterEach
    void tearDown() {
        market.resetAll();
    }

    @Test
    void addProductToCartSuccess() throws Exception {
        market.addProductToCart(usersName[0], shopNames[0], prodNames[0], quantity[0]);
        assertEquals(prodNames[0], market.getCart(usersName[0]).getAllProducts().get(0).getName());
    }

    @Test
    void addProductToCartSuccessLogout() throws Exception {
        String userName = market.logout(usersName[0]);
        market.addProductToCart(userName, shopNames[0], prodNames[0], quantity[0]);
        assertEquals(prodNames[0], market.getCart(userName).getAllProducts().get(0).getName());
    }

    @Test
    void addProductToCartFailQuantity() throws Exception {
        assertThrows(Exception.class, () -> market.addProductToCart(usersName[0], shopNames[0], prodNames[0], Integer.MAX_VALUE));
    }

    @Test
    void removeProductToCartSuccess() throws Exception {
        market.addProductToCart(usersName[0], shopNames[0], prodNames[0], quantity[0]);
        market.removeProductFromCart(usersName[0], shopNames[0], prodNames[0]);
        assertEquals(0, market.getCart(usersName[0]).getAllProducts().size());
    }

    @Test
    void removeProductToCartSuccessLogout() throws Exception {
        String userName = market.logout(usersName[0]);
        market.addProductToCart(userName, shopNames[0], prodNames[0], quantity[0]);
        market.removeProductFromCart(userName, shopNames[0], prodNames[0]);
        assertEquals(0, market.getCart(userName).getAllProducts().size());
    }

    @Test
    void removeProductToCartFailNotAdded() throws Exception {
        assertThrows(Exception.class, () -> market.removeProductFromCart(usersName[0], shopNames[0], prodNames[0]));
    }

    @Test
    void updateProductToCartSuccess() throws Exception {
        market.addProductToCart(usersName[0], shopNames[0], prodNames[0], quantity[0]);
        market.updateCartProductQuantity(usersName[0], shopNames[0], prodNames[0], 1);
        Cart cart = market.getCart(usersName[0]);
        ShopBag shopBag = cart.getShoppingBag(shopNames[0]);
        ShopBagItem shopBagItem = shopBag.getProductsAndQuantities().get(prodNames[0]);
        assertEquals(1, shopBagItem.getQuantity());
    }

    @Test
    void updateProductToCartSuccessLogout() throws Exception {
        String userName = market.logout(usersName[0]);
        market.addProductToCart(userName, shopNames[0], prodNames[0], quantity[0]);
        market.updateCartProductQuantity(userName, shopNames[0], prodNames[0], 1);
        Cart cart = market.getCart(userName);
        ShopBag shopBag = cart.getShoppingBag(shopNames[0]);
        ShopBagItem shopBagItem = shopBag.getProductsAndQuantities().get(prodNames[0]);
        assertEquals(1, shopBagItem.getQuantity());
    }

    @Test
    void updateProductToCartFailNotAdded() throws Exception {
        assertThrows(Exception.class, () -> market.updateCartProductQuantity(usersName[0], shopNames[0], prodNames[0], 1));
    }

}