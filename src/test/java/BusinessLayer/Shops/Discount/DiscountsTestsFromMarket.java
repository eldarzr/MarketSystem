package BusinessLayer.Shops.Discount;

import BusinessLayer.Market;
import BusinessLayer.Purchases.ShopBag;
import BusinessLayer.Purchases.ShopBagItem;
import BusinessLayer.Shops.Discount.DiscountRules.BasicDiscountRulesFactory;
import BusinessLayer.Shops.Discount.DiscountRules.CompoundDiscountRule;
import BusinessLayer.Shops.Discount.DiscountRules.CompoundRuleType;
import BusinessLayer.Shops.Discount.DiscountRules.DiscountRule;
import BusinessLayer.Shops.FinalBagPriceResult;
import BusinessLayer.Shops.Product;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import java.util.LinkedList;
import java.util.List;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotEquals;

public class DiscountsTestsFromMarket {

    ShopBag shopBag = null;
    DiscountPolicy discountPolicy = null;

    Market market;
    String[] usersName = {"eldar", "niv12"};
    String[] passwords = {"Aa123456", "Aa123456"};
    String[] emails = {"eldar@gmail.com", "niv@gmail.com"};
    String[] shopNames = {"shop1", "shop2"};
    String[] productsNames = {"milk carton1", "carrot", "bread","pasta","tomatoes", "buns", "cottage","yogurt"};
    String[] categories = {"Diary", "Vegetables", "bakery", "bakery", "Vegetables", "bakery","Diary","Diary"};
    String description = "descri";
    double[] prices = {6, 1.2, 3, 10, 5, 5, 3.6, 2.5};
    int[] quantities = {1 , 2, 3, 2, 3, 5, 3, 1};

    @BeforeEach
    void setUp() throws Exception {
        market = new Market();
        market.resetAll();
        market.init("src/InitFiles/BaseConfig.jason");
        for(int i = 0; i < usersName.length; i++) {
            String guestName = market.startSession();
            market.register(usersName[i], emails[i], passwords[i]);
            market.login(guestName,usersName[i], passwords[i]);
            market.createShop(usersName[i], shopNames[i]);
        }

        Map<String, ShopBagItem> productsAndQuantities = new ConcurrentHashMap<>();
        for(int i = 0; i < productsNames.length; i++){
            market.addNewProduct(usersName[0], shopNames[0], productsNames[i], categories[i], description, prices[i],(quantities[i]+5));
            market.addProductsToCart(usersName[0], shopNames[0],productsNames[i],quantities[i]);
        }

    }

    @AfterEach
    void tearDown() {
        market.resetAll();
    }

    @Test
    void addDiscountRule_shopBagPriceLowerThan() throws Exception {
        ProductDiscount productDiscount = market.addProductDiscount(shopNames[0], usersName[0],10,"tomatoes");
        market.addDiscountRule(shopNames[0],usersName[0],BasicDiscountRulesFactory.makeBagPriceHigherThanRule(200),productDiscount.discountId, "REPLACE");
        double totalBagPriceBefore = market.getShopBag(usersName[0],shopNames[0]).calculatePrice();
        market.getDiscountPolicy(usersName[0],shopNames[0]).applyDiscount(market.getShopBag(usersName[0],shopNames[0]));
        double totalBagPriceAfter = market.getShopBag(usersName[0],shopNames[0]).calculatePrice();
        assertEquals(totalBagPriceBefore,totalBagPriceAfter);
    }

    @Test
    void addDiscountRule_shopBagPriceHigherThan() throws Exception {
        Product product = new Product("dummyProduct", "dummy","desc",210,shopNames[0]);
        market.addNewProduct(usersName[0],shopNames[0],product.getName(),categories[0],description,210.0,5);
        market.addProductsToCart(usersName[0],shopNames[0],product.getName(),2);
        ProductDiscount productDiscount = market.addProductDiscount(shopNames[0],usersName[0],5,"dummyProduct");
        market.addDiscountRule(shopNames[0],usersName[0],BasicDiscountRulesFactory.makeBagPriceHigherThanRule(200),productDiscount.getDiscountId(),"REPLACE");
        ShopBag shopBag = market.getShopBag(usersName[0],shopNames[0]);
        double totalBagPriceBefore = shopBag.calculatePrice();
        FinalBagPriceResult finalBagPriceResult =market.getDiscountPolicy(usersName[0],shopNames[0]).applyDiscount(shopBag);
        assertNotEquals(totalBagPriceBefore,finalBagPriceResult.getTotalPriceAfterDiscount());
        assertEquals(totalBagPriceBefore,finalBagPriceResult.getPriceBeforeDiscount());
    }

}
