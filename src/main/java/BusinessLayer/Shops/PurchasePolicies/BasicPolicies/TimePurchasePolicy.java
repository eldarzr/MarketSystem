package BusinessLayer.Shops.PurchasePolicies.BasicPolicies;

import BusinessLayer.Purchases.ShopBag;
import BusinessLayer.Users.User;

import javax.persistence.*;
import java.time.LocalDate;
import java.time.LocalTime;

@Entity
@DiscriminatorValue("TimePurchasePolicy")
public class TimePurchasePolicy extends BasicPolicy{
    @Column(name = "start_hour")
    int startHour;
    @Column(name = "end_hour")
    int endHour;

    public TimePurchasePolicy() {
    }

    public TimePurchasePolicy(int id, boolean isProduct, String toConstraint, boolean positive, int start, int end) {
        super(id, isProduct, toConstraint, positive);
        startHour = start;
        endHour = end;
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
        int currentHour = LocalTime.now().getHour();
        boolean between = checkBetween(currentHour);
        if(positive & between)return true;
        if(!positive & !between)return true;
        return false;
    }

    private boolean checkBetween(int currentHour) {
        if(startHour < endHour){
            return (startHour <= currentHour) & (currentHour <= endHour);
        }
        else{
            return (startHour <= currentHour) | (currentHour <= endHour);
        }
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
        s.append(toConstraint).append(" between hours");
        s.append(startHour).append(" and ").append(endHour);
        return s.toString();
    }


}
