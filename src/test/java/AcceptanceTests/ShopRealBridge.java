package AcceptanceTests;

import BusinessLayer.Shops.Shop;
import BusinessLayer.Shops.ShopProduct;

import java.util.List;

public class ShopRealBridge implements ShopBridge{

    private Shop shop;

    public ShopRealBridge(Shop s){
        shop = s;
    }


    @Override
    public String getShopName() {
        return shop.getName();
    }

    @Override
    public int getQuantityOfProduct(String productName) {
        List<ShopProduct> shopProductList = shop.getProducts();
        for(ShopProduct p : shopProductList){
            if(p.getName().equals(productName))
                return p.getQuantity();
        }
        return 0;
    }

    @Override
    public void setDiscountPolicy(ShopDiscountPolicyBridge discountPolicy) {
        throw new UnsupportedOperationException();
    }
}
