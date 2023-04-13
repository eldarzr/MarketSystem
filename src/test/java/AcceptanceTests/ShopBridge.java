package AcceptanceTests;

public interface ShopBridge {
    String getShopName();
    int getQuantityOfProduct(String productName);
    void setDiscountPolicy(ShopDiscountPolicyBridge discountPolicy);
}
