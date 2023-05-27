package BusinessLayer.Shops.PurchasePolicies;

import BusinessLayer.Purchases.ShopBag;
import BusinessLayer.Shops.PurchasePolicies.BasicPolicies.AgePurchasePolicy;
import BusinessLayer.Shops.PurchasePolicies.BasicPolicies.DatePurchasePolicy;
import BusinessLayer.Shops.PurchasePolicies.BasicPolicies.QuantityPurchasePolicy;
import BusinessLayer.Shops.PurchasePolicies.BasicPolicies.TimePurchasePolicy;
import BusinessLayer.Users.User;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

@Entity
@Table(name = "purchase_policy")
public class PurchasePolicyManager {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @ManyToMany(cascade = CascadeType.ALL)
    @JoinTable(name = "purchase_policy_purchase",
            joinColumns = @JoinColumn(name = "purchase_policy_id"),
            inverseJoinColumns = @JoinColumn(name = "purchase_id"))
    private Map<Integer, PurchasePolicy> policiesById;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "purchase_id_indexer_id")
    private PurchaseIdIndexer policyIdIndexer;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "active_policy_id", referencedColumnName = "id")
    private PurchasePolicy activePolicy;
    public PurchasePolicyManager(){
        policiesById = new ConcurrentHashMap<>();
        policyIdIndexer = new PurchaseIdIndexer();
        activePolicy = null;
    }
    public boolean evaluate(ShopBag shopBag, User user) throws Exception {
        if(activePolicy == null)return true;
        if(activePolicy.evaluate(shopBag,user)) return true;
        throw new Exception("Purchase policy error: "+activePolicy.getRuleName());
    }


    public void setActivePolicy(int pid) throws Exception {
        if(pid == -1)activePolicy = null;
        if(!policiesById.containsKey(pid))throw new Exception("Error: purchase policy with id "+ pid+" doesn't exist");
        activePolicy = policiesById.get(pid);
    }

    public Map<Integer,PurchasePolicy> getAllPolicies(){
        return policiesById;
    }
    public void addComplexConstraint(int pid1, int pid2, ComplexPolicyType type) throws Exception {
        if(!policiesById.containsKey(pid1))throw new Exception("Error: purchase policy with id "+ pid1+" doesn't exist");
        if(!policiesById.containsKey(pid2))throw new Exception("Error: purchase policy with id "+ pid2+" doesn't exist");
        PurchasePolicy p1 = policiesById.get(pid1);
        PurchasePolicy p2 = policiesById.get(pid2);
        PurchasePolicy complex = new ComplexPolicy(policyIdIndexer.getAndAdd(1),p1,p2,type);
        policiesById.put(complex.getPolicyId(),complex);
    }
    public void addAgeConstraint(boolean isProduct, String toConstraint, boolean positive, int startAge, int endAge) throws Exception {
        if(startAge < 0)throw new Exception("Age can't be negative");
        if(endAge <= startAge)throw new Exception("end age should be higher than start age");
        PurchasePolicy p = new AgePurchasePolicy(policyIdIndexer.getAndAdd(1),isProduct,toConstraint,positive,startAge,endAge);
        policiesById.put(p.getPolicyId(),p);
    }

    public void addTimeConstraint(boolean isProduct, String toConstraint, boolean positive, int startHour, int endHour) throws Exception {
        if(startHour < 0 | startHour > 23)throw new Exception("Invalid start hour");
        if(endHour < 0 | endHour > 23)throw new Exception("Invalid end hour");
        if(startHour == endHour)throw new Exception("start hour and end hour should be different");
        PurchasePolicy p = new TimePurchasePolicy(policyIdIndexer.getAndAdd(1),isProduct,toConstraint,positive,startHour,endHour);
        policiesById.put(p.getPolicyId(),p);
    }

    public void addDateConstraint(boolean isProduct, String toConstraint, boolean positive, LocalDate startDate, LocalDate endDate) throws Exception {
        if(startDate.isAfter(endDate))throw new Exception("Error: Start date is after the end date");
        PurchasePolicy p = new DatePurchasePolicy(policyIdIndexer.getAndAdd(1),isProduct,toConstraint,positive,startDate,endDate);
        policiesById.put(p.getPolicyId(),p);
    }

    public int addQuantityConstraint(boolean isProduct, String toConstraint, boolean positive, int minQuantity, int maxQuantity) throws Exception {
        if(minQuantity < 0)throw new Exception("quantity can't be negative");
        if(maxQuantity < minQuantity)throw new Exception("max quantity can't be smaller than min quantity");
        PurchasePolicy p = new QuantityPurchasePolicy(policyIdIndexer.getAndAdd(1),isProduct,toConstraint,positive,minQuantity,maxQuantity);
        policiesById.put(p.getPolicyId(),p);
        return p.getPolicyId();
    }


    public Integer getActivePolicyId() {
        if(activePolicy == null)return -1;
        return activePolicy.getPolicyId();
    }
}
