package UnitTests;

import BusinessLayer.ExternalSystemsAdapters.CreditCardPaymentDetails;
import BusinessLayer.ExternalSystemsAdapters.PaymentDetails;
import BusinessLayer.ExternalSystemsAdapters.SupplyDetails;
import BusinessLayer.MemberRoleInShop;
import BusinessLayer.Purchases.Cart;
import BusinessLayer.Purchases.Purchase;
import BusinessLayer.Shops.Product;
import BusinessLayer.Shops.Shop;
import BusinessLayer.Shops.ShopProduct;
import BusinessLayer.Users.User;
import org.checkerframework.checker.units.qual.C;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;

import static org.junit.jupiter.api.Assertions.assertThrows;

import org.mockito.Mockito;

import java.util.LinkedList;
import java.util.List;
import java.util.concurrent.ConcurrentHashMap;


class MarketPurchaseUnitTests {

    static final String password = "Aa123456";
    Purchase purchase;
    List<User> users = new LinkedList<>();
    List<Shop> shops = new LinkedList<>();

    //mangers
    String[] usersName = {"eldar", "niv12"};
    String[] passwords = {password, password};
    String[] emails = {"eldar@gmail.com", "niv@gmail.com"};
    String[] cat = {"cat1", "cat2"};
    String[] shopNames = {"shop1", "shop2"};
    String[] prodNames = {"prod1", "prod2"};
    String[] descs = {"desc1", "desc2"};
    double[] prices = {5.5, 10.12};
    int[] quantity = {5, 10};

    //customers
    String[] cNames = {"eldarC", "nivC"};
    String[] cpasswords = {password, password};
    String[] cemails = {"eldar@gmail.com", "niv@gmail.com"};

    //external systems
    PaymentDetails paymentDetails;
    SupplyDetails supplyDetails;

    LinkedList<ShopProduct> plist;

    @BeforeEach
    void setUp() throws Exception {
        //managers
        for(int i = 0; i < usersName.length; i++) {
            User user = Mockito.mock(User.class);
            Mockito.when(user.getName()).thenReturn(usersName[i]);
            Mockito.when(user.getEmail()).thenReturn(emails[i]);
            Mockito.when(user.getPassword()).thenReturn(passwords[i]);
            users.add(user);
            ShopProduct product = Mockito.mock(ShopProduct.class);
            Mockito.when(product.getName()).thenReturn(prodNames[i]);
            Mockito.when(product.getCategory()).thenReturn(cat[i]);
            Mockito.when(product.getDescription()).thenReturn(descs[i]);
            Mockito.when(product.getPrice()).thenReturn(prices[i]);
            Mockito.when(product.getQuantity()).thenReturn(quantity[i]);
            Shop shop = Mockito.mock(Shop.class);
            Mockito.when(shop.getName()).thenReturn(shopNames[i]);
            Mockito.doNothing().when(shop).validateAvailability(Mockito.any(ConcurrentHashMap.class));
            plist = new LinkedList<>();
            plist.add(product);
            Mockito.when(shop.getProducts()).thenReturn(plist);
            shops.add(shop);
            Cart cart = new Cart();
            cart.addProduct(shopNames[0],plist.get(0),quantity[0]);
            Mockito.when(user.getCart()).thenReturn(cart);
        }
        CreditCardPaymentDetails creditCardPaymentDetails = Mockito.mock(CreditCardPaymentDetails.class);
        SupplyDetails supplyDetails = Mockito.mock(SupplyDetails.class);
        purchase = new Purchase(users.get(0),shops,creditCardPaymentDetails,supplyDetails);
    }

    @AfterEach
    void tearDown() {
        purchase = null;
    }

    @org.junit.jupiter.api.Test
    void addProductToCartAndBuyIt() throws Exception {
        //purchase.process();
        // need to fix mock for FinalBagPriceResult.
    }

    @org.junit.jupiter.api.Test
    void purchaseByGuestFail_quantityChanged() throws Exception {
        Mockito.doThrow(new Exception()).when(shops.get(0)).validateAvailability(Mockito.any(ConcurrentHashMap.class));
        Mockito.when(plist.get(0).getQuantity()).thenReturn(quantity[0]-1);
        assertThrows(Exception.class, () -> {
            purchase.process();
        },"able to purchase product with not enough quantity");

    }

}