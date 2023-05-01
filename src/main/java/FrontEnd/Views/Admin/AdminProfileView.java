package FrontEnd.Views.Admin;

import BusinessLayer.Enums.UserType;
import FrontEnd.Model.ShopModel;
import FrontEnd.Model.UserModel;
import FrontEnd.SResponseT;
import FrontEnd.Views.ProfileView;
import com.vaadin.flow.component.Text;
import com.vaadin.flow.component.UI;
import com.vaadin.flow.component.button.Button;
import com.vaadin.flow.component.icon.Icon;
import com.vaadin.flow.component.icon.VaadinIcon;
import com.vaadin.flow.component.notification.Notification;
import com.vaadin.flow.component.orderedlayout.HorizontalLayout;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;
import com.vaadin.flow.router.*;

@Route("admin_profile")
@PageTitle("Profile")
public class AdminProfileView extends ProfileView implements HasUrlParameter<String> {

    UserModel visitedUser;
    private final String ADMIN_PREFIX = "admin_";

    public AdminProfileView() {
        super();
    }

    @Override
    protected void setClickListenersAndVisibility(){
        purchaseHistoryButton.addClickListener(e ->
                getUI().ifPresent(ui ->
                        ui.navigate(ADMIN_PREFIX + PURCHASE_HISTORY + "/" + visitedUser.getName()))
        );

        viewMessagesButton.addClickListener(e ->
                getUI().ifPresent(ui -> ui.navigate(
                        ADMIN_PREFIX + VIEW_MESSAGES_SCREEN + "/" + visitedUser.getName()))
        );

        viewMyShopsButton.addClickListener(e ->
                getUI().ifPresent(ui -> ui.navigate(
                        ADMIN_PREFIX + MY_SHOPS_SCREEN + "/" + visitedUser.getName()))
        );

        searchButton.setVisible(false);
        adminButton.setVisible(false);
    }

    protected void setButtonsNames(){
        purchaseHistoryButton.setText(String.format("View %s Purchase History", visitedUser.getName()));
        viewMessagesButton.setText(String.format("View %s Messages", visitedUser.getName()));
        viewMyShopsButton.setText(String.format("View %s Shops", visitedUser.getName()));

        searchButton.setVisible(false);
        adminButton.setVisible(false);
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
        }
        setTitle(String.format("Welcome to %s profile", visitedUser.getName()));
    }
}