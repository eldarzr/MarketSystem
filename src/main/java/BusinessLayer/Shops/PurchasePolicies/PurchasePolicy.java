package BusinessLayer.Shops.PurchasePolicies;

import BusinessLayer.Purchases.ShopBag;
import BusinessLayer.Users.User;

public interface PurchasePolicy {

    boolean evaluate(ShopBag shopBag, User user);

    String getRuleName();


    int getPolicyId();
}
