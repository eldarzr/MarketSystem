package BusinessLayer.Shops.PurchasePolicies.BasicPolicies;

import BusinessLayer.Purchases.ShopBag;
import BusinessLayer.Purchases.ShopBagItem;
import BusinessLayer.Shops.PurchasePolicies.PurchasePolicy;

import java.util.ArrayList;
import java.util.Collection;

public abstract class BasicPolicy implements PurchasePolicy {
    protected int policyId;
    protected boolean isProduct;
    protected String toConstraint;
    protected boolean positive;
    public BasicPolicy(int id, boolean isProduct, String toConstraint,boolean positive){
        this.policyId = id;
        this.isProduct = isProduct;
        this.toConstraint = toConstraint;
        this.positive = positive;
    }
    public int getPolicyId(){
        return policyId;
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
