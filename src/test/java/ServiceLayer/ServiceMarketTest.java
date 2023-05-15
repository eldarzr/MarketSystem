package ServiceLayer;

import BusinessLayer.Market;
import BusinessLayer.Purchases.ShopBag;
import BusinessLayer.Purchases.ShopBagItem;
import BusinessLayer.Shops.Discount.DiscountPolicy;
import BusinessLayer.Shops.Product;
import FrontEnd.MarketService;
import ServiceLayer.DataObjects.DiscountDataObjects.CategoryDiscountDataObj;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import java.util.concurrent.ConcurrentHashMap;

import static org.junit.jupiter.api.Assertions.*;

class ServiceMarketTest {

    ServiceMarket market;
    String[] usersName = {"eldarT", "nivT"};
    String[] passwords = {"Aa123456", "Aa123456"};
    String[] emails = {"eldarT@gmail.com", "nivT@gmail.com"};
    String[] cat = {"cat1T", "cat2T"};
    String[] shopNames = {"shop1T", "shop2T"};
    String[] prodNames = {"prod1T", "prod2T"};
    String[] descs = {"desc1T", "desc2T"};
    double[] pricesP1 = {5.5, 10.12};
    int[] quantity = {5, 10};

    DiscountPolicy discountPolicy;
    ShopBag shopBag;
    String[] productsNames = {"milk carton", "carrot", "bread","pasta"};
    String[] categories = {"Diary", "Vegetables", "bakery", "bakery"};
    String description = "desc";
    String shopName = "shopName";
    double[] prices = {6, 1.2, 3,10};
    int[] quantities = {1 , 2, 3, 2};

    @BeforeEach
    void setUp() throws Exception {

        market = new ServiceMarket();
        market.init();
        for(int i = 0; i < usersName.length; i++) {
            String guestName = market.startSession().getData();
            market.register(usersName[i], emails[i], passwords[i]);
            market.login(guestName,usersName[i], passwords[i]);
            market.createShop(usersName[i], shopNames[i]);
            market.addNewProduct(usersName[i], shopNames[i], prodNames[i], cat[i], descs[i], pricesP1[i]);
            market.addProductItems(usersName[i], shopNames[i], prodNames[i], quantity[i]);
        }
        discountPolicy = new DiscountPolicy();
        ConcurrentHashMap<String, ShopBagItem> productsAndQuantities = new ConcurrentHashMap<>();
        for(int i = 0; i < productsNames.length; i++){
            Product product = new Product(productsNames[i], categories[i],description,prices[i],shopName);
            ShopBagItem sbi = new ShopBagItem(product,quantities[i]);
            productsAndQuantities.put(productsNames[i],sbi);
        }
        shopBag = new ShopBag(productsAndQuantities, shopName);
    }

    @AfterEach
    void tearDown() {
        market.resetAll();
    }

    @Test
    void addCategoryDiscount() {
        ResponseT<CategoryDiscountDataObj> r = market.addCategoryDiscount(shopNames[0],usersName[0],5,categories[0]);
        assertTrue(r.isSuccess(),r.getMessage());
    }
}