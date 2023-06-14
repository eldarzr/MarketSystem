package BusinessLayer.Shops.PurchasePolicies.BasicPolicies;

import BusinessLayer.Purchases.ShopBag;
import BusinessLayer.Purchases.ShopBagItem;
import BusinessLayer.Users.User;

import javax.persistence.*;
import java.util.Collection;

@Entity
@DiscriminatorValue("QuantityPurchasePolicy")
public class QuantityPurchasePolicy extends BasicPolicy{
    @Column(name = "min_quantity")
    int minQuantity;
    @Column(name = "max_quantity")
    int maxQuantity;

    public QuantityPurchasePolicy() {
    }

    public QuantityPurchasePolicy(int id, boolean isProduct, String toConstraint, boolean positive, int minQuantity, int maxQuantity) throws Exception {
        super(id, isProduct, toConstraint, positive);
        this.maxQuantity = maxQuantity;
        this.minQuantity = minQuantity;
    }

    @Override
    public boolean evaluate(ShopBag shopBag, User user) {
        int amount = 0;
        if(isProduct){
            ShopBagItem s = findProduct(shopBag);
            if(s != null) amount+=s.getQuantity();
        }
        else{
            Collection<ShopBagItem> c = findCategory(shopBag);
            for(ShopBagItem s : c)
                amount +=s.getQuantity();
        }
        boolean between = (amount >= minQuantity) & (amount <= maxQuantity);
        // positive = true means the user can buy the product if the amount of it is between min and max
        // positive = false means the user cannot buy the product if the amount is between min and max
        if(positive & between) return true;
        if(!positive & !between)return true;
        return false;
    }

    @Override
    public String getRuleName() {
        StringBuilder s = new StringBuilder();
        s.append("Customer ");
        if(positive)s.append("can ");
        else s.append("can't ");
        s.append("purchase ");
        if(isProduct)s.append("product ");
        else s.append("products from category ");
        s.append(toConstraint).append(" in amount between ");
        s.append(minQuantity).append(" and ").append(maxQuantity);
        return s.toString();
    }


}
