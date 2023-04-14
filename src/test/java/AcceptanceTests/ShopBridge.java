package AcceptanceTests;

public interface ShopBridge {
    String getShopName();
    int getQuantityOfProduct(String productName);
    //not for version 1
    void setDiscountPolicy(ShopDiscountPolicyBridge discountPolicy);
}
