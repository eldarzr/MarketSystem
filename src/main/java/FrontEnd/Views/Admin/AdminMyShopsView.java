package FrontEnd.Views.Admin;

import BusinessLayer.Enums.UserType;
import FrontEnd.Model.MemberRoleInShopModel;
import FrontEnd.Model.ShopModel;
import FrontEnd.Model.UserModel;
import FrontEnd.SResponseT;
import FrontEnd.Views.MyShopsView;
import com.vaadin.flow.component.Text;
import com.vaadin.flow.component.button.Button;
import com.vaadin.flow.component.html.Label;
import com.vaadin.flow.component.notification.Notification;
import com.vaadin.flow.component.orderedlayout.HorizontalLayout;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;
import com.vaadin.flow.component.textfield.TextField;
import com.vaadin.flow.router.*;

import java.util.ArrayList;
import java.util.List;


@Route("admin_my_shops")
@PageTitle("My Shops")
public class AdminMyShopsView extends MyShopsView implements HasUrlParameter<String> {

    private VerticalLayout mainLayout;
    UserModel visitedUser;
    private final String ADMIN_PREFIX = "admin_";


    public AdminMyShopsView() {
        super();
        if(getCurrentUser().getUserType() != UserType.ADMIN)
            navigateToHome();
        createShopLayout.setVisible(false);
    }

    @Override
    protected void navigateToHistory(String shopName){
        getUI().ifPresent(ui -> ui.navigate("admin_shop_history?userName=" + visitedUser.getName() +
                "&shopName=" + shopName));
    }

    @Override
    protected SResponseT<List<MemberRoleInShopModel>> getUserRolesRes() {
        return visitedUser == null ? null : marketService.getUserRoles(visitedUser.getName());
    }

    @Override
    protected void navigateToShop(String shopId) {
        getUI().ifPresent(ui -> ui.navigate(ADMIN_PREFIX + "shop?userName=" + visitedUser.getName()
                 + "&shopName=" + shopId));
    }

    @Override
    public void setParameter(BeforeEvent event, @OptionalParameter String parameter) {
        if (parameter != null && !parameter.isEmpty()) {
            SResponseT<UserModel> res = marketService.getUser(parameter);
            if (res.isSuccess()) {
                visitedUser = res.getData();
                add(new Text(visitedUser.getName()));
            }
            else Notification.show(res.getMessage());
        }

        setTitle(String.format("Welcome to %s shops", visitedUser.getName()));
        importShops(true);
    }
}

