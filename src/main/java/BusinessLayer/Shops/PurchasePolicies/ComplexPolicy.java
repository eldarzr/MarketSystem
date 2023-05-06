package BusinessLayer.Shops.PurchasePolicies;

import BusinessLayer.Purchases.ShopBag;
import BusinessLayer.Users.User;

public class ComplexPolicy implements PurchasePolicy{
    int policyId;
    PurchasePolicy policyA;
    PurchasePolicy policyB;
    ComplexPolicyType type;
    public ComplexPolicy(int policyId, PurchasePolicy policy1, PurchasePolicy policy2, ComplexPolicyType type){
        policyA = policy1;
        policyB = policy2;
        this.type = type;
        this.policyId = policyId;
    }
    @Override
    public boolean evaluate(ShopBag shopBag, User user) {
        boolean evalA = policyA.evaluate(shopBag, user);
        boolean evalB = policyB.evaluate(shopBag, user);
        switch (type){
            case AND -> {
                return evalA & evalB;
            }
            case OR -> {
                return evalA | evalB;
            }
            case IF -> {
                return (evalA & evalB) | (!evalA);
            }
        }
        return false;
    }

    @Override
    public String getRuleName() {
        switch (type){
            case OR -> {
                return getRuleNameOr();
            }
            case IF ->{
                return getRuleNameIf();
            }
            case AND -> {
                return getRuleNameAnd();
            }
        }
        return null;
    }

    private String getRuleNameAnd() {
        return "("+policyA.getRuleName()+") And ("+policyB.getRuleName()+")";
    }

    private String getRuleNameIf() {
        return "If ("+policyA.getRuleName()+") Then ("+policyB.getRuleName()+")";
    }

    private String getRuleNameOr() {
        return "("+policyA.getRuleName()+") Or ("+policyB.getRuleName()+")";
    }

    @Override
    public int getPolicyId() {
        return policyId;
    }
}
