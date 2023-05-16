package BusinessLayer.Shops.Discount;

import BusinessLayer.Purchases.ShopBag;
import BusinessLayer.Shops.Discount.DiscountRules.CompoundRuleType;
import BusinessLayer.Shops.Discount.DiscountRules.DiscountRule;
import BusinessLayer.Shops.Discount.XorDecisionRules.XorDecisionRule;
import BusinessLayer.Shops.Discount.XorDecisionRules.XorDecisionRuleName;
import BusinessLayer.Shops.Discount.XorDecisionRules.XorDecisionRulesFactory;
import BusinessLayer.Shops.FinalBagPriceResult;

import java.util.LinkedList;
import java.util.List;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.atomic.AtomicInteger;

public class DiscountPolicy {

    ConcurrentHashMap<Integer,Discount> discountsById;
    AtomicInteger discountIdIndexer;


    public DiscountPolicy() {
        discountsById = new ConcurrentHashMap<>();
        this.discountIdIndexer = new AtomicInteger(0);
    }

    public CategoryDiscount addCategoryDiscount(double discountPercentage, String category){
        if(category == null || category.length() == 0)
            throw new IllegalArgumentException("Category name is either null or empty");
        checkValidPercentage(discountPercentage);
        int id = discountIdIndexer.addAndGet(1);
        CategoryDiscount categoryDiscount = new CategoryDiscount(discountPercentage,id,category);
        discountsById.put(id, categoryDiscount);
        return categoryDiscount;
    }

    public ProductDiscount addProductDiscount(double discountPercentage, String productName){
        if(productName == null || productName.length() == 0)
            throw new IllegalArgumentException("product name is either null or empty");
        checkValidPercentage(discountPercentage);
        int id = discountIdIndexer.addAndGet(1);
        ProductDiscount productDiscount = new ProductDiscount(discountPercentage,id,productName);
        discountsById.put(id, productDiscount);
        return productDiscount;
    }

    public ShopDiscount addShopDiscount(double discountPercentage){
        checkValidPercentage(discountPercentage);
        int id = discountIdIndexer.addAndGet(1);
        ShopDiscount shopDiscount = new ShopDiscount(discountPercentage,id);
        discountsById.put(id, shopDiscount);
        return shopDiscount;
    }

    public SumCompoundDiscount addSumDiscount(List<Integer> discountsIds){
        List<Discount> discounts = getMatchingDiscountAndRemove(discountsIds);
        int id = discountIdIndexer.addAndGet(1);
        SumCompoundDiscount sumCompoundDiscount = new SumCompoundDiscount(discounts,id);
        discountsById.put(id, sumCompoundDiscount);
        return sumCompoundDiscount;
    }

    public MaxCompoundDiscount addMaxDiscount(List<Integer> discountsIds){
        List<Discount> discounts = getMatchingDiscountAndRemove(discountsIds);
        int id = discountIdIndexer.addAndGet(1);
        MaxCompoundDiscount maxCompoundDiscount = new MaxCompoundDiscount(discounts,id);
        discountsById.put(id, maxCompoundDiscount);
        return maxCompoundDiscount;
    }

    public XorCompoundDiscount addXorDiscount(List<Integer> discountsIds, XorDecisionRuleName xorDiscountRuleName){
        List<Discount> discounts = getMatchingDiscountAndRemove(discountsIds);
        int id = discountIdIndexer.addAndGet(1);
        XorCompoundDiscount xorCompoundDiscount = new XorCompoundDiscount(discounts,id, XorDecisionRulesFactory.makeRule(xorDiscountRuleName));
        discountsById.put(id, xorCompoundDiscount);
        return xorCompoundDiscount;
    }

    public void addDiscountRule(DiscountRule discountRule, int discountId, CompoundRuleType actionWithOldRule){
        if(discountRule == null)
            throw new IllegalArgumentException("discount rule cannot be null");
        Discount discount = getDiscountById(discountId);
        discount.addRule(discountRule,actionWithOldRule);
    }

    //this function applies discount on a shop bag, it changes the state of the shop bag so it should be called with a deep clone
    //return discount result which contains the price before discount , price after discount and discounts applied descriptions
    public FinalBagPriceResult applyDiscount(ShopBag shopBag){
        shopBag = shopBag.deepClone();
        FinalBagPriceResult discountResult = FinalBagPriceResult.makeDiscountResult();
        discountResult.setPriceBeforeDiscount(shopBag.calculatePrice());
        ShopBag shopBagPrev = shopBag;
        List<String> discountsAppliedDescriptions = new LinkedList<>();
        for(Discount discount : discountsById.values()){
            discount.applyDiscount(shopBag);
            if(shopBag.calculatePrice() != shopBagPrev.calculatePrice()){
                discountsAppliedDescriptions.add(discount.toString());
                shopBagPrev = shopBag.deepClone();
            }
        }
        discountResult.setDiscountAppliedDescriptions(discountsAppliedDescriptions);
        discountResult.setTotalPriceAfterDiscount(shopBag.calculatePrice());
        return discountResult;
    }

    private Discount getDiscountById(int discountId) {
        Discount ret = discountsById.get(discountId);
        if(ret != null) return ret;
        throw new IllegalArgumentException(String.format("discount id: %d doesn't match any discount",discountId));
    }

    private void checkValidPercentage(double discountPercentage) {
        if(discountPercentage < 1 || discountPercentage > 100)
            throw new IllegalArgumentException(String.format("discount percentage must be in range 0 to 100. given discount percentage: %f",discountPercentage));
    }

    private List<Discount> getMatchingDiscountAndRemove(List<Integer> discountsIds){
        List<Discount> discountsList = new LinkedList<>();
        synchronized (discountsById) {
            for (Integer discountId : discountsIds) {
                if (!discountsById.containsKey(discountId))
                    throw new IllegalArgumentException(String.format("discount id : %d. was not found in discount list.", discountId));
            }
            for (Integer discountId : discountsIds) {
                discountsList.add(discountsById.remove(discountId));
            }
        }
        return  discountsList;
    }

    public ConcurrentHashMap<Integer, Discount> getDiscountsById() {
        return discountsById;
    }

    public void resetDiscountRule(int discountId) {
        Discount discount = discountsById.get(discountId);
        if(discount == null)
            throw new IllegalArgumentException(String.format("could not find discount with discount id: %d",discountId));
        discount.resetRule();
    }

    public void removeDiscount(int discountId) {
        Discount discount = discountsById.remove(discountId);
        if(discount == null)
            throw new IllegalArgumentException(String.format("could not find discount with discount id: %d",discountId));
    }
}
