package BusinessLayer.Shops.PurchasePolicies.BasicPolicies;

import BusinessLayer.Purchases.ShopBag;
import BusinessLayer.Users.User;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
@DiscriminatorValue("AgePurchasePolicy")
public class AgePurchasePolicy extends BasicPolicy{
    @Column(name = "start_age")
    int startAge;
    @Column(name = "end_age")
    int endAge;

    public AgePurchasePolicy() {
    }

    public AgePurchasePolicy(int id, boolean isProduct, String toConstraint, boolean positive, int startAge, int endAge) throws Exception {
        super(id, isProduct, toConstraint, positive);
        this.startAge = startAge;
        this.endAge = endAge;
    }

    @Override
    public boolean evaluate(ShopBag shopBag, User user) {
        boolean found = false;
        if(isProduct) {
            found = (findProduct(shopBag) != null);
        }
        else
            found = !(findCategory(shopBag).isEmpty());
        if(!found)return true;
        int year = user.getBirthDay().getYear();
        int age = LocalDate.now().getYear() - year;
        boolean between = (startAge <= age) & (age <= endAge);
        if(positive & between)return true;
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
        s.append(toConstraint).append(" between ages ");
        s.append(startAge).append(" and ").append(endAge);
        return s.toString();
    }

}
