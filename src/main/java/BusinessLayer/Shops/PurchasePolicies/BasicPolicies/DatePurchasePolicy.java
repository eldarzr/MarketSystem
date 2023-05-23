package BusinessLayer.Shops.PurchasePolicies.BasicPolicies;

import BusinessLayer.Purchases.ShopBag;
import BusinessLayer.Purchases.ShopBagItem;
import BusinessLayer.Shops.PurchasePolicies.PurchasePolicy;
import BusinessLayer.Users.User;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
@DiscriminatorValue("DatePurchasePolicy")
public class DatePurchasePolicy extends BasicPolicy {
    @Column(name = "start_date")
    LocalDate startDate;
    @Column(name = "end_date")
    LocalDate endDate;

    public DatePurchasePolicy() {
    }

    public DatePurchasePolicy(int id, boolean isProduct, String toConstraint, boolean positive, LocalDate start, LocalDate end){
        super(id, isProduct, toConstraint,positive);
        startDate = start;
        endDate = end;
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
        boolean betweenDates = (LocalDate.now().isAfter(startDate) && LocalDate.now().isBefore(endDate));
        // positive = true means that you can buy the product only between these dates
        // positive = false means you can't buy the product between these dates
        if(positive & betweenDates) return true;
        if(!positive & !betweenDates) return true;
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
        s.append(toConstraint).append(" between dates");
        s.append(startDate).append(" and ").append(endDate);
        return s.toString();
    }



}
