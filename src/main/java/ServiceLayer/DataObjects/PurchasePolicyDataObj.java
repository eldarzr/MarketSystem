package ServiceLayer.DataObjects;

import BusinessLayer.Shops.PurchasePolicies.PurchasePolicy;

public class PurchasePolicyDataObj {
    private int id;
    private String name;
    public PurchasePolicyDataObj(PurchasePolicy p){
        id = p.getPolicyId();
        name = p.getRuleName();
    }

    public int getId() {
        return id;
    }

    public String getName() {
        return name;
    }
}
