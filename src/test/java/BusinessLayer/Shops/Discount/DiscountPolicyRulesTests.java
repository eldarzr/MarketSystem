package BusinessLayer.Shops.Discount;

import BusinessLayer.Purchases.ShopBag;
import BusinessLayer.Purchases.ShopBagItem;
import BusinessLayer.Shops.Discount.DiscountRules.*;
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

public class DiscountPolicyRulesTests {

    DiscountPolicy discountPolicy;
    ShopBag shopBag;
    String[] productsNames = {"milk carton", "carrot", "bread","pasta","tomatoes", "buns", "cottage","yogurt"};
    String[] categories = {"Diary", "Vegetables", "bakery", "bakery", "Vegetables", "bakery","Diary","Diary"};
    String description = "desc";
    String shopName = "shopName";
    double[] prices = {6, 1.2, 3, 10, 5, 5, 3.6, 2.5};
    int[] quantities = {1 , 2, 3, 2, 3, 5, 3, 1};

    @BeforeEach
    void setUp() {
        discountPolicy = new DiscountPolicy();
        Map<String, ShopBagItem> productsAndQuantities = new ConcurrentHashMap<>();
        for(int i = 0; i < productsNames.length; i++){
            Product product = new Product(productsNames[i], categories[i],description,prices[i],shopName);
            ShopBagItem sbi = new ShopBagItem(product,quantities[i], "bla");
            productsAndQuantities.put(productsNames[i],sbi);
        }
        shopBag = new ShopBag(productsAndQuantities, shopName, "bla");

    }

    @AfterEach
    void tearDown() {
        discountPolicy = null;
    }

    @Test
    void addDiscountRule_shopBagPriceLowerThan() {
        ProductDiscount productDiscount = discountPolicy.addProductDiscount(10,"tomatoes");
        discountPolicy.addDiscountRule(BasicDiscountRulesFactory.makeBagPriceHigherThanRule(200),productDiscount.discountId, CompoundRuleType.REPLACE);
        double totalBagPriceBefore = shopBag.calculatePrice();
        discountPolicy.applyDiscount(shopBag);
        double totalBagPriceAfter = shopBag.calculatePrice();
        assertEquals(totalBagPriceBefore,totalBagPriceAfter);
    }

    @Test
    void addDiscountRule_shopBagPriceHigherThan() {
        Product product = new Product("dummyProduct", "dummy","desc",200,shopName);
        shopBag.addProduct(product,2);
        ProductDiscount productDiscount = discountPolicy.addProductDiscount(10,"tomatoes");
        discountPolicy.addDiscountRule(BasicDiscountRulesFactory.makeBagPriceHigherThanRule(200),productDiscount.discountId, CompoundRuleType.REPLACE);
        double totalBagPriceBefore = shopBag.calculatePrice();
        discountPolicy.applyDiscountAndChangePrices(shopBag);
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
        discountPolicy.applyDiscountAndChangePrices(shopBag);
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
        discountPolicy.applyDiscountAndChangePrices(shopBag);
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
        discountPolicy.applyDiscountAndChangePrices(shopBag);
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
        discountPolicy.applyDiscountAndChangePrices(shopBag);
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
        discountPolicy.applyDiscountAndChangePrices(shopBag);
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
        discountPolicy.applyDiscountAndChangePrices(shopBag);
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
        discountPolicy.applyDiscountAndChangePrices(shopBag);
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
