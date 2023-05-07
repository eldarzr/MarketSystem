package FrontEnd.Views.Admin;

import FrontEnd.Model.InvoiceModel;
import FrontEnd.Model.UserInvoiceModel;
import FrontEnd.Model.UserModel;
import FrontEnd.SResponseT;
import FrontEnd.Views.BaseView;
import FrontEnd.Views.UserHistoryView;
import com.vaadin.flow.component.Text;
import com.vaadin.flow.component.grid.Grid;
import com.vaadin.flow.component.notification.Notification;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;
import com.vaadin.flow.router.*;

import java.util.*;


@Route("admin_user_history")
@PageTitle("admin user history")
public class AdminUserHistoryView extends UserHistoryView implements HasUrlParameter<String> {

    UserModel visitedUser;
    protected Grid<UserInvoiceModel> userHistoryGrid;
    protected List<UserInvoiceModel> userInvoiceModels;

    public AdminUserHistoryView() {
    }

    protected SResponseT<List<UserInvoiceModel>> getUserHistory() {
        return visitedUser == null ? null : marketService.getUserPurchaseHistoryByAdmin(getCurrentUser().getName(), visitedUser.getName());
    }

    @Override
    public void setParameter(BeforeEvent event, @OptionalParameter String parameter) {
        if (parameter != null && !parameter.isEmpty()) {
            SResponseT<UserModel> res = marketService.getUser(parameter);
            if (res.isSuccess()) {
                visitedUser = res.getData();
                add(new Text(visitedUser.getName()));
            }
            else {
                Notification.show(res.getMessage());
                getUI().ifPresent(ui ->
                        ui.navigate(""));
            }
            importHistory();
        }
    }


}

