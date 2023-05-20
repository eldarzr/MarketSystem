package BusinessLayer.Shops.PurchasePolicies;

import BusinessLayer.Purchases.ShopBag;
import BusinessLayer.Users.User;

import javax.persistence.*;

@Entity
@Table(name = "purchasePolicy")
@Inheritance(strategy = InheritanceType.SINGLE_TABLE)
@DiscriminatorColumn(name = "purchase_type")
public abstract class PurchasePolicy {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id; //for data base use

    @Column(name = "b_id")
    int policyId;

    public PurchasePolicy(int policyId) {
        this.policyId = policyId;
    }

    public PurchasePolicy() {
    }

    public abstract boolean evaluate(ShopBag shopBag, User user);

    public abstract String getRuleName();


    public int getPolicyId(){
        return policyId;
    }
}
