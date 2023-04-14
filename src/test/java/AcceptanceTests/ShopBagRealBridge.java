package AcceptanceTests;

import BusinessLayer.Purchases.ShopBag;

public class ShopBagRealBridge implements ShopBagBridge{

    private ShopBag shopBag;

    public ShopBagRealBridge(ShopBag bag) {
        this.shopBag = bag;
    }

    @Override
    public int getQuantityOfProduct(String productName) {
        return 0;
    }

    @Override
    public double calculateTotalPrice() {
        return 0;
    }
}
