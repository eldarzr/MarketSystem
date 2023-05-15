package FrontEnd.Views.Admin;

import FrontEnd.Model.InvoiceModel;
import FrontEnd.Model.ShopInvoiceModel;
import FrontEnd.Model.ShopModel;
import FrontEnd.Model.UserModel;
import FrontEnd.SResponseT;
import FrontEnd.Views.ShopHistoryView;
import com.vaadin.flow.component.Text;
import com.vaadin.flow.component.grid.Grid;
import com.vaadin.flow.component.notification.Notification;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;
import com.vaadin.flow.router.*;

import java.util.*;


@Route("admin_shop_history")
@PageTitle("admin shop history")
public class AdminShopHistoryView extends ShopHistoryView implements HasUrlParameter<String> {

    private VerticalLayout mainLayout;
    protected ShopModel shopProfile;
    protected UserModel userProfile;
    protected List<ShopInvoiceModel> shopInvoiceModels;

    public AdminShopHistoryView() {
        super();
    }

    protected SResponseT<List<ShopInvoiceModel>> getShopHistory() {
        return userProfile == null ? null : marketService.getShopPurchaseHistoryByAdmin(getCurrentUser().getName(), shopProfile.getName());
    }


    @Override
    public void setParameter(BeforeEvent event, @OptionalParameter String parameter) {
        Map<String, List<String>> queryParameters = event.getLocation().getQueryParameters().getParameters();
        String userName = queryParameters.getOrDefault("userName", null).get(0);
        String shopName = queryParameters.getOrDefault("shopName", null).get(0);
        SResponseT<UserModel> user_res = marketService.getUser(userName);
        SResponseT<ShopModel> shop_res = marketService.getShop(shopName);
        if (!shop_res.isSuccess() || !user_res.isSuccess()) {
            Notification.show((shop_res.isSuccess() ? "" : shop_res.getMessage()) +
                    (user_res.isSuccess() ? "" : user_res.getMessage()));
            getUI().ifPresent(ui ->
                    ui.navigate(""));
        }
        userProfile = user_res.getData();
        shopProfile = shop_res.getData();
        importHistory();
    }



}

