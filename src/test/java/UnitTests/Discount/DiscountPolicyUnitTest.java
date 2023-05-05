package UnitTests.Discount;

import BusinessLayer.Purchases.ShopBag;
import BusinessLayer.Purchases.ShopBagItem;
import BusinessLayer.Shops.Discount.DiscountPolicy;
import BusinessLayer.Shops.Product;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;

import java.util.List;
import java.util.concurrent.ConcurrentHashMap;
import java.util.stream.Collectors;

import static org.junit.jupiter.api.Assertions.*;

class DiscountPolicyUnitTest {

    DiscountPolicy discountPolicy;

    @BeforeEach
    void setUp() {
        discountPolicy = new DiscountPolicy();
    }

    @AfterEach
    void tearDown() {
        discountPolicy = null;
    }

    @Test
    void addCategoryDiscount() {
        discountPolicy.addCategoryDiscount(50,"Diary");
    }

    @Test
    void addCategoryDiscount_fail() {
        assertThrows(Exception.class,() -> discountPolicy.addCategoryDiscount(-1,"category"),"able to insert negative discount percentage");
    }

    @Test
    void addProductDiscount() {
        discountPolicy.addProductDiscount(50,"milk carton");
    }

    @Test
    void addProductDiscount_fail() {
        assertThrows(Exception.class,() -> discountPolicy.addProductDiscount(-1,""),"able to insert empty productName");
    }

    @Test
    void addShopDiscount() {
        discountPolicy.addShopDiscount(50);
    }
}