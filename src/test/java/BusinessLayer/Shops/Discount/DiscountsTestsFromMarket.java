package BusinessLayer.Shops.Discount;

import BusinessLayer.Market;
import BusinessLayer.Purchases.ShopBag;
import BusinessLayer.Purchases.ShopBagItem;
import BusinessLayer.Shops.Discount.DiscountRules.BasicDiscountRulesFactory;
import BusinessLayer.Shops.Discount.DiscountRules.CompoundDiscountRule;
import BusinessLayer.Shops.Discount.DiscountRules.CompoundRuleType;
import BusinessLayer.Shops.Discount.DiscountRules.DiscountRule;
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
    String[] productsNames = {"milk carton", "carrot", "bread","pasta","tomatoes", "buns", "cottage","yogurt"};
    String[] categories = {"Diary", "Vegetables", "bakery", "bakery", "Vegetables", "bakery","Diary","Diary"};
    String description = "descri";
    double[] prices = {6, 1.2, 3, 10, 5, 5, 3.6, 2.5};
    int[] quantities = {1 , 2, 3, 2, 3, 5, 3, 1};

    @BeforeEach
    void setUp() throws Exception {
        market = new Market();
        market.resetAll();
        market.init();
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
    void addDiscountRule_shopBagPriceHigherThan() {
        Product product = new Product("dummyProduct", "dummy","desc",200,shopNames[0]);
        shopBag.addProduct(product,2);
        ProductDiscount productDiscount = discountPolicy.addProductDiscount(10,"tomatoes");
        discountPolicy.addDiscountRule(BasicDiscountRulesFactory.makeBagPriceHigherThanRule(200),productDiscount.discountId, CompoundRuleType.REPLACE);
        double totalBagPriceBefore = shopBag.calculatePrice();
        discountPolicy.applyDiscount(shopBag);
        double totalBagPriceAfter = shopBag.calculatePrice();
        assertNotEquals(totalBagPriceBefore,totalBagPriceAfter);
    }

    @Test
    void addDiscountRule_NotEnoughFromProduct() {
        ProductDiscount productDiscount = discountPolicy.addProductDiscount(10,"tomatoes");
        discountPolicy.addDiscountRule(BasicDiscountRulesFactory.makeMinProductQuantityRule(quantities[0]+1,productsNames[0]),productDiscount.discountId, CompoundRuleType.REPLACE);
        double totalBagPriceBefore = shopBag.calculatePrice();
        discountPolicy.applyDiscount(shopBag);
        double totalBagPriceAfter = shopBag.calculatePrice();
        assertEquals(totalBagPriceBefore,totalBagPriceAfter);
    }

    @Test
    void addDiscountRule_EnoughFromProduct() {
        ProductDiscount productDiscount = discountPolicy.addProductDiscount(10,"tomatoes");
        discountPolicy.addDiscountRule(BasicDiscountRulesFactory.makeMinProductQuantityRule(quantities[0]-1,productsNames[0]),productDiscount.discountId, CompoundRuleType.REPLACE);
        double totalBagPriceBefore = shopBag.calculatePrice();
        discountPolicy.applyDiscount(shopBag);
        double totalBagPriceAfter = shopBag.calculatePrice();
        assertNotEquals(totalBagPriceBefore,totalBagPriceAfter);
    }

    @Test
    void addDiscountRule_NotEnoughFromCategory() {
        ProductDiscount productDiscount = discountPolicy.addProductDiscount(10,"tomatoes");
        discountPolicy.addDiscountRule(BasicDiscountRulesFactory.makeMinFromCategoryRule(quantities[0]+1,"dummyCategory"),productDiscount.discountId, CompoundRuleType.REPLACE);
        double totalBagPriceBefore = shopBag.calculatePrice();
        discountPolicy.applyDiscount(shopBag);
        double totalBagPriceAfter = shopBag.calculatePrice();
        assertEquals(totalBagPriceBefore,totalBagPriceAfter);
    }

    @Test
    void addDiscountRule_EnoughFromCategory() {
        ProductDiscount productDiscount = discountPolicy.addProductDiscount(10,"tomatoes");
        discountPolicy.addDiscountRule(BasicDiscountRulesFactory.makeMinFromCategoryRule(quantities[0]-1,categories[0]),productDiscount.discountId, CompoundRuleType.REPLACE);
        double totalBagPriceBefore = shopBag.calculatePrice();
        discountPolicy.applyDiscount(shopBag);
        double totalBagPriceAfter = shopBag.calculatePrice();
        assertNotEquals(totalBagPriceBefore,totalBagPriceAfter);
    }

    @Test
    void addDiscountRule_TooMuchFromCategory() {
        ProductDiscount productDiscount = discountPolicy.addProductDiscount(10,"tomatoes");
        discountPolicy.addDiscountRule(BasicDiscountRulesFactory.makeMaxFromCategoryRule(quantities[0]-1,categories[0]),productDiscount.discountId, CompoundRuleType.REPLACE);
        double totalBagPriceBefore = shopBag.calculatePrice();
        discountPolicy.applyDiscount(shopBag);
        double totalBagPriceAfter = shopBag.calculatePrice();
        assertEquals(totalBagPriceBefore,totalBagPriceAfter);
    }

    @Test
    void addDiscountRule_lessThanAtMostFromCategory() {
        ProductDiscount productDiscount = discountPolicy.addProductDiscount(10,"tomatoes");
        discountPolicy.addDiscountRule(BasicDiscountRulesFactory.makeMaxFromCategoryRule(10000000,categories[0]),productDiscount.discountId, CompoundRuleType.REPLACE);
        double totalBagPriceBefore = shopBag.calculatePrice();
        discountPolicy.applyDiscount(shopBag);
        double totalBagPriceAfter = shopBag.calculatePrice();
        assertNotEquals(totalBagPriceBefore,totalBagPriceAfter);
    }

    @Test
    void addDiscountRule_TooMuchFromProduct() {
        ProductDiscount productDiscount = discountPolicy.addProductDiscount(10,"tomatoes");
        discountPolicy.addDiscountRule(BasicDiscountRulesFactory.makeMaxProductQuantityRule(quantities[0]-1,productsNames[0]),productDiscount.discountId, CompoundRuleType.REPLACE);
        double totalBagPriceBefore = shopBag.calculatePrice();
        discountPolicy.applyDiscount(shopBag);
        double totalBagPriceAfter = shopBag.calculatePrice();
        assertEquals(totalBagPriceBefore,totalBagPriceAfter);
    }

    @Test
    void addDiscountRule_lessThanAtMostFromProduct() {
        ProductDiscount productDiscount = discountPolicy.addProductDiscount(10,"tomatoes");
        discountPolicy.addDiscountRule(BasicDiscountRulesFactory.makeMaxProductQuantityRule(quantities[0]+1,productsNames[0]),productDiscount.discountId, CompoundRuleType.REPLACE);
        double totalBagPriceBefore = shopBag.calculatePrice();
        discountPolicy.applyDiscount(shopBag);
        double totalBagPriceAfter = shopBag.calculatePrice();
        assertNotEquals(totalBagPriceBefore,totalBagPriceAfter);
    }

    @Test
    void AndDiscountRule() {
        CategoryDiscount categoryDiscount = discountPolicy.addCategoryDiscount(10,"bakery");
        List<DiscountRule> discountRules = new LinkedList<>();
        discountRules.add(BasicDiscountRulesFactory.makeMinProductQuantityRule(5, "buns"));
        discountRules.add(BasicDiscountRulesFactory.makeMinProductQuantityRule(2, "bread"));
        CompoundDiscountRule andDiscountRule = new CompoundDiscountRule(discountRules,CompoundRuleType.AND);
        discountPolicy.addDiscountRule(andDiscountRule,categoryDiscount.discountId, CompoundRuleType.REPLACE);
        double totalBagPriceBefore = shopBag.calculatePrice();
        discountPolicy.applyDiscount(shopBag);
        double totalBagPriceAfter = shopBag.calculatePrice();
        assertNotEquals(totalBagPriceBefore,totalBagPriceAfter);
    }

    @Test
    void AndDiscountRule_fail() {
        CategoryDiscount categoryDiscount = discountPolicy.addCategoryDiscount(10,"bakery");
        List<DiscountRule> discountRules = new LinkedList<>();
        discountRules.add(BasicDiscountRulesFactory.makeMinProductQuantityRule(5, "buns"));
        discountRules.add(BasicDiscountRulesFactory.makeMinProductQuantityRule(10, "bread"));
        CompoundDiscountRule andDiscountRule = new CompoundDiscountRule(discountRules,CompoundRuleType.AND);
        discountPolicy.addDiscountRule(andDiscountRule,categoryDiscount.discountId, CompoundRuleType.REPLACE);
        double totalBagPriceBefore = shopBag.calculatePrice();
        discountPolicy.applyDiscount(shopBag);
        double totalBagPriceAfter = shopBag.calculatePrice();
        assertEquals(totalBagPriceBefore,totalBagPriceAfter);
    }

    @Test
    void orDiscountRule() {
        CategoryDiscount categoryDiscount = discountPolicy.addCategoryDiscount(5,"Diary");
        List<DiscountRule> discountRules = new LinkedList<>();
        discountRules.add(BasicDiscountRulesFactory.makeMinProductQuantityRule(3, "cottage"));
        discountRules.add(BasicDiscountRulesFactory.makeMinProductQuantityRule(2, "yogurt"));
        CompoundDiscountRule orDiscountRule = new CompoundDiscountRule(discountRules,CompoundRuleType.OR);
        discountPolicy.addDiscountRule(orDiscountRule,categoryDiscount.discountId, CompoundRuleType.REPLACE);
        double totalBagPriceBefore = shopBag.calculatePrice();
        discountPolicy.applyDiscount(shopBag);
        double totalBagPriceAfter = shopBag.calculatePrice();
        assertNotEquals(totalBagPriceBefore,totalBagPriceAfter);
    }

    @Test
    void orDiscountRule_fail() {
        CategoryDiscount categoryDiscount = discountPolicy.addCategoryDiscount(5,"Diary");
        List<DiscountRule> discountRules = new LinkedList<>();
        discountRules.add(BasicDiscountRulesFactory.makeMinProductQuantityRule(10, "cottage"));
        discountRules.add(BasicDiscountRulesFactory.makeMinProductQuantityRule(10, "yogurt"));
        CompoundDiscountRule orDiscountRule = new CompoundDiscountRule(discountRules,CompoundRuleType.OR);
        discountPolicy.addDiscountRule(orDiscountRule,categoryDiscount.discountId, CompoundRuleType.REPLACE);
        double totalBagPriceBefore = shopBag.calculatePrice();
        discountPolicy.applyDiscount(shopBag);
        double totalBagPriceAfter = shopBag.calculatePrice();
        assertEquals(totalBagPriceBefore,totalBagPriceAfter);
    }

    @Test
    void DiscountRuleComposition_fail() {
        CategoryDiscount categoryDiscount = discountPolicy.addCategoryDiscount(5,"Diary");
        categoryDiscount.addRule(BasicDiscountRulesFactory.makeBagPriceHigherThanRule(100), CompoundRuleType.REPLACE);
        categoryDiscount.addRule(BasicDiscountRulesFactory.makeMinProductQuantityRule(3, "pasta"), CompoundRuleType.AND);
        double totalBagPriceBefore = shopBag.calculatePrice();
        discountPolicy.applyDiscount(shopBag);
        double totalBagPriceAfter = shopBag.calculatePrice();
        assertEquals(totalBagPriceBefore,totalBagPriceAfter);
    }

    @Test
    void DiscountRuleComposition() {
        CategoryDiscount categoryDiscount = discountPolicy.addCategoryDiscount(5,"Diary");
        categoryDiscount.addRule(BasicDiscountRulesFactory.makeBagPriceHigherThanRule(10), CompoundRuleType.REPLACE);
        categoryDiscount.addRule(BasicDiscountRulesFactory.makeMinProductQuantityRule(1, "pasta"), CompoundRuleType.AND);
        double totalBagPriceBefore = shopBag.calculatePrice();
        discountPolicy.applyDiscount(shopBag);
        double totalBagPriceAfter = shopBag.calculatePrice();
        assertNotEquals(totalBagPriceBefore,totalBagPriceAfter);
    }

    @Test
    void DiscountRuleComposition2() {
        CategoryDiscount categoryDiscount = discountPolicy.addCategoryDiscount(5,"Diary");
        categoryDiscount.addRule(BasicDiscountRulesFactory.makeBagPriceHigherThanRule(20000), CompoundRuleType.REPLACE);
        categoryDiscount.addRule(BasicDiscountRulesFactory.makeMinProductQuantityRule(1, "pasta"), CompoundRuleType.AND);
        double totalBagPriceBefore = shopBag.calculatePrice();
        discountPolicy.applyDiscount(shopBag);
        double totalBagPriceAfter = shopBag.calculatePrice();
        assertEquals(totalBagPriceBefore,totalBagPriceAfter);
    }
}
