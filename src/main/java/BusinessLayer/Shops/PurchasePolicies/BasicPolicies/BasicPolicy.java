package BusinessLayer.Shops.PurchasePolicies.BasicPolicies;

import BusinessLayer.Purchases.ShopBag;
import BusinessLayer.Purchases.ShopBagItem;
import BusinessLayer.Shops.PurchasePolicies.PurchasePolicy;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.Collection;

@Entity
@DiscriminatorValue("BasicPolicy")
public abstract class BasicPolicy extends PurchasePolicy {
    @Column(name = "is_product")
    protected boolean isProduct;
    @Column(name = "to_constraint")
    protected String toConstraint;
    @Column(name = "positive")
    protected boolean positive;

    protected BasicPolicy() {
    }

    public BasicPolicy(int id, boolean isProduct, String toConstraint, boolean positive){
        super(id);
        this.isProduct = isProduct;
        this.toConstraint = toConstraint;
        this.positive = positive;
    }

    protected ShopBagItem findProduct(ShopBag shopBag){
        for(ShopBagItem s : shopBag.getProductsAndQuantities().values()){
            if(s.getProduct().getName().equals(toConstraint))return s;
        }
        return null;
    }
    protected Collection<ShopBagItem> findCategory(ShopBag shopBag){
        Collection<ShopBagItem> ret = new ArrayList<>();
        for(ShopBagItem s : shopBag.getProductsAndQuantities().values()){
            if(s.getProduct().getCategory().equals(toConstraint))ret.add(s);
        }
        return ret;
    }

}
