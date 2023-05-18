package BusinessLayer.Shops.Discount;

import BusinessLayer.Purchases.ShopBag;
import BusinessLayer.Purchases.ShopBagItem;
import BusinessLayer.Shops.Discount.XorDecisionRules.XorDecisionRuleName;
import BusinessLayer.Shops.Discount.XorDecisionRules.XorDecisionRulesFactory;
import BusinessLayer.Shops.FinalBagPriceResult;
import BusinessLayer.Shops.Product;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import java.util.Arrays;
import java.util.List;
import java.util.concurrent.ConcurrentHashMap;
import java.util.stream.Collectors;

import static org.junit.jupiter.api.Assertions.*;

class DiscountPolicyTest {

    DiscountPolicy discountPolicy;
    ShopBag shopBag;
    String[] productsNames = {"milk carton", "carrot", "bread","pasta"};
    String[] categories = {"Diary", "Vegetables", "bakery", "bakery"};
    String description = "desc";
    String shopName = "shopName";
    double[] prices = {6, 1.2, 3,10};
    int[] quantities = {1 , 2, 3, 2};

    @BeforeEach
    void setUp() {
        discountPolicy = new DiscountPolicy();
        ConcurrentHashMap<String, ShopBagItem> productsAndQuantities = new ConcurrentHashMap<>();
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
    void addCategoryDiscount() {
        discountPolicy.addCategoryDiscount(50,"Diary");
        double milkCartonPriceBeforeDiscount = shopBag.getProductsAndQuantities().get("milk carton").getProduct().getPrice();
        double totalBagPriceBefore = shopBag.calculatePrice();
        FinalBagPriceResult discountResult = discountPolicy.applyDiscount(shopBag);
        double milkCartonPriceAfterDiscount = shopBag.getProductsAndQuantities().get("milk carton").getProduct().getPrice();
        double totalBagPriceAfter = shopBag.calculatePrice();
        assertNotEquals(milkCartonPriceAfterDiscount,milkCartonPriceBeforeDiscount);
        assertEquals(milkCartonPriceAfterDiscount,milkCartonPriceBeforeDiscount/2);
        assertNotEquals(totalBagPriceBefore,totalBagPriceAfter);
    }

    @Test
    void addProductDiscount() {
        discountPolicy.addProductDiscount(20,"milk carton");
        double milkCartonPriceBeforeDiscount = shopBag.getProductsAndQuantities().get("milk carton").getProduct().getPrice();
        FinalBagPriceResult discountResult = discountPolicy.applyDiscount(shopBag);
        double milkCartonPriceAfterDiscount = shopBag.getProductsAndQuantities().get("milk carton").getProduct().getPrice();
        assertNotEquals(milkCartonPriceAfterDiscount,milkCartonPriceBeforeDiscount);
        assertTrue(Math.abs(milkCartonPriceAfterDiscount-milkCartonPriceBeforeDiscount*0.8) < 0.1);
    }

    @Test
    void addShopDiscount() {
        discountPolicy.addShopDiscount(20);
        double totalBagPriceBefore = shopBag.calculatePrice();
        double milkCartonPriceBeforeDiscount = shopBag.getProductsAndQuantities().get("milk carton").getProduct().getPrice();
        FinalBagPriceResult discountResult = discountPolicy.applyDiscount(shopBag);
        double milkCartonPriceAfterDiscount = shopBag.getProductsAndQuantities().get("milk carton").getProduct().getPrice();
        double totalBagPriceAfter = shopBag.calculatePrice();
        assertNotEquals(milkCartonPriceAfterDiscount,milkCartonPriceBeforeDiscount);
        assertEquals(milkCartonPriceAfterDiscount,Math.floor((milkCartonPriceBeforeDiscount*0.8)*SimpleDiscount.ROUND_FACTOR)/SimpleDiscount.ROUND_FACTOR);
        assertNotEquals(totalBagPriceBefore,totalBagPriceAfter);
        assertTrue(Math.abs(totalBagPriceBefore*0.8-discountResult.getTotalPriceAfterDiscount()) < 0.1);
    }

    @Test
    void addSumDiscount() {
        ShopDiscount shopDiscount = discountPolicy.addShopDiscount(20);
        CategoryDiscount categoryDiscount = discountPolicy.addCategoryDiscount(5,"Diary");
        Integer[] ids = {shopDiscount.getDiscountId(),categoryDiscount.getDiscountId()};
        List<Integer> discountsIds = Arrays.stream(ids).collect(Collectors.toList());
        SumCompoundDiscount sumCompoundDiscount = discountPolicy.addSumDiscount(discountsIds);
        double milkCartonPriceBeforeDiscount = shopBag.getProductsAndQuantities().get("milk carton").getProduct().getPrice();
        double breadPriceBeforeDiscount = shopBag.getProductsAndQuantities().get("bread").getProduct().getPrice();
        FinalBagPriceResult discountResult = discountPolicy.applyDiscount(shopBag);
        double milkCartonPriceAfterDiscount = shopBag.getProductsAndQuantities().get("milk carton").getProduct().getPrice();
        double breadPriceAfterDiscount = shopBag.getProductsAndQuantities().get("bread").getProduct().getPrice();
        assertTrue(Math.abs(breadPriceBeforeDiscount*0.8 - breadPriceAfterDiscount) < 0.1);
        assertTrue(Math.abs(milkCartonPriceBeforeDiscount*0.75 - milkCartonPriceAfterDiscount) < 0.1);

    }

    @Test
    void addMaxDiscount() {
        ProductDiscount shopDiscount = discountPolicy.addProductDiscount(5,"pasta");
        ProductDiscount shopDiscount2 = discountPolicy.addProductDiscount(17,"milk carton");
        Integer[] ids = {shopDiscount.getDiscountId(),shopDiscount2.getDiscountId()};
        List<Integer> discountsIds = Arrays.stream(ids).collect(Collectors.toList());
        MaxCompoundDiscount maxCompoundDiscount = discountPolicy.addMaxDiscount(discountsIds);
        double milkCartonPriceBeforeDiscount = shopBag.getProductsAndQuantities().get("milk carton").getProduct().getPrice();
        double pastaPriceBeforeDiscount = shopBag.getProductsAndQuantities().get("pasta").getProduct().getPrice();
        FinalBagPriceResult discountResult = discountPolicy.applyDiscount(shopBag);
        double milkCartonPriceAfterDiscount = shopBag.getProductsAndQuantities().get("milk carton").getProduct().getPrice();
        double pastaPriceAfterDiscount = shopBag.getProductsAndQuantities().get("pasta").getProduct().getPrice();
        assertEquals(pastaPriceAfterDiscount,pastaPriceBeforeDiscount);
        assertTrue(Math.abs(milkCartonPriceBeforeDiscount*0.83 - milkCartonPriceAfterDiscount) < 0.1);
    }

    @Test
    void addXorDiscount_minId() {
        ProductDiscount shopDiscount = discountPolicy.addProductDiscount(5,"pasta");
        ProductDiscount shopDiscount2 = discountPolicy.addProductDiscount(17,"milk carton");
        Integer[] ids = {shopDiscount.getDiscountId(),shopDiscount2.getDiscountId()};
        List<Integer> discountsIds = Arrays.stream(ids).collect(Collectors.toList());
        XorCompoundDiscount xorCompoundDiscount = discountPolicy.addXorDiscount(discountsIds, XorDecisionRuleName.SMALLER_ID);
        double milkCartonPriceBeforeDiscount = shopBag.getProductsAndQuantities().get("milk carton").getProduct().getPrice();
        double pastaPriceBeforeDiscount = shopBag.getProductsAndQuantities().get("pasta").getProduct().getPrice();
        FinalBagPriceResult discountResult = discountPolicy.applyDiscount(shopBag);
        double milkCartonPriceAfterDiscount = shopBag.getProductsAndQuantities().get("milk carton").getProduct().getPrice();
        double pastaPriceAfterDiscount = shopBag.getProductsAndQuantities().get("pasta").getProduct().getPrice();
        assertEquals(milkCartonPriceBeforeDiscount,milkCartonPriceAfterDiscount);
        assertTrue(Math.abs(pastaPriceBeforeDiscount*0.95 - pastaPriceAfterDiscount) < 0.1);
    }
    @Test
    void addXorDiscount_biggerDiscount() {
        ProductDiscount shopDiscount = discountPolicy.addProductDiscount(5,"pasta");
        ProductDiscount shopDiscount2 = discountPolicy.addProductDiscount(17,"milk carton");
        Integer[] ids = {shopDiscount.getDiscountId(),shopDiscount2.getDiscountId()};
        List<Integer> discountsIds = Arrays.stream(ids).collect(Collectors.toList());
        XorCompoundDiscount xorCompoundDiscount = discountPolicy.addXorDiscount(discountsIds, XorDecisionRuleName.BIGGER_DISCOUNT);
        double milkCartonPriceBeforeDiscount = shopBag.getProductsAndQuantities().get("milk carton").getProduct().getPrice();
        double pastaPriceBeforeDiscount = shopBag.getProductsAndQuantities().get("pasta").getProduct().getPrice();
        FinalBagPriceResult discountResult = discountPolicy.applyDiscount(shopBag);
        double milkCartonPriceAfterDiscount = shopBag.getProductsAndQuantities().get("milk carton").getProduct().getPrice();
        double pastaPriceAfterDiscount = shopBag.getProductsAndQuantities().get("pasta").getProduct().getPrice();
        assertEquals(pastaPriceAfterDiscount,pastaPriceBeforeDiscount);
        assertTrue(Math.abs(milkCartonPriceBeforeDiscount*0.83 - milkCartonPriceAfterDiscount) < 0.1);
    }
    @Test
    void addXorDiscount_smallerDiscount() {
        ProductDiscount shopDiscount = discountPolicy.addProductDiscount(5,"pasta");
        ProductDiscount shopDiscount2 = discountPolicy.addProductDiscount(17,"milk carton");
        Integer[] ids = {shopDiscount.getDiscountId(),shopDiscount2.getDiscountId()};
        List<Integer> discountsIds = Arrays.stream(ids).collect(Collectors.toList());
        XorCompoundDiscount xorCompoundDiscount = discountPolicy.addXorDiscount(discountsIds, XorDecisionRuleName.SMALLER_DISCOUNT);
        double milkCartonPriceBeforeDiscount = shopBag.getProductsAndQuantities().get("milk carton").getProduct().getPrice();
        double pastaPriceBeforeDiscount = shopBag.getProductsAndQuantities().get("pasta").getProduct().getPrice();
        FinalBagPriceResult discountResult = discountPolicy.applyDiscount(shopBag);
        double milkCartonPriceAfterDiscount = shopBag.getProductsAndQuantities().get("milk carton").getProduct().getPrice();
        double pastaPriceAfterDiscount = shopBag.getProductsAndQuantities().get("pasta").getProduct().getPrice();
        assertEquals(milkCartonPriceBeforeDiscount,milkCartonPriceAfterDiscount);
        assertTrue(Math.abs(pastaPriceBeforeDiscount*0.95 - pastaPriceAfterDiscount) < 0.1);
    }

    @Test
    void applyDiscount() {
        ShopBag shopBagClone = shopBag.deepClone();
        discountPolicy.addShopDiscount(50);
        double totalBagPriceBefore = shopBag.calculatePrice();
        FinalBagPriceResult discountResult = discountPolicy.applyDiscount(shopBag);
        assertEquals(totalBagPriceBefore*0.5,discountResult.getTotalPriceAfterDiscount());
        discountPolicy.addShopDiscount(20);
        FinalBagPriceResult discountResult2 = discountPolicy.applyDiscount(shopBagClone);
        assertEquals(totalBagPriceBefore*0.5*0.8,discountResult2.getTotalPriceAfterDiscount());
    }
}