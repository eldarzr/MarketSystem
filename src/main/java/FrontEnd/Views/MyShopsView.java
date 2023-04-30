package FrontEnd.views;

import FrontEnd.Model.MemberRoleInShopModel;
import FrontEnd.Model.ShopModel;
import FrontEnd.Model.UserModel;
import FrontEnd.SResponseT;
import com.vaadin.flow.component.button.Button;
import com.vaadin.flow.component.html.Label;
import com.vaadin.flow.component.notification.Notification;
import com.vaadin.flow.component.orderedlayout.HorizontalLayout;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;
import com.vaadin.flow.component.textfield.TextField;
import com.vaadin.flow.router.PageTitle;
import com.vaadin.flow.router.Route;

import java.util.ArrayList;
import java.util.List;



@Route("my-shops")
@PageTitle("My Shops")
public class MyShopsView extends BaseView {

    private VerticalLayout mainLayout;
    private List<MemberRoleInShopModel> myRoles;


    public MyShopsView() {
        mainLayout = new VerticalLayout();
        myRoles = new ArrayList<>();

        // Get the user's roles and populate myShops
        SResponseT<List<MemberRoleInShopModel>> rolesRes = marketService.getUserRoles(getCurrentUser().getName());
        if (!rolesRes.isSuccess()) {
            Notification.show(rolesRes.getMessage());
            getUI().ifPresent(ui -> ui.navigate(""));
        } else {
            myRoles.addAll(rolesRes.getData());
            populateShopsList();
        }

        add(mainLayout);
    }

    @Override
    protected void updateAfterUserNameChange(UserModel userModel) {

    }

    private void populateShopsList() {
        for (MemberRoleInShopModel role : myRoles) {
            String shopName = role.getRoleShop().getName();
            String roleType = role.getType().toString();

            HorizontalLayout shopLayout = new HorizontalLayout();
            shopLayout.setWidth("100%");
            shopLayout.getStyle().set("border-bottom", "1px solid #CCC");
            shopLayout.setPadding(true);
            shopLayout.setSpacing(true);

            Label shopNameLabel = new Label("Shop Name: " + shopName);
            shopNameLabel.getStyle().set("font-weight", "bold");
            shopNameLabel.setWidth("100%");

            Label roleLabel = new Label("Role: " + roleType);
            roleLabel.setWidth("100%");

            Button enterButton = new Button("Enter");
            enterButton.addClickListener(e -> navigateToShop(role.getRoleShop().getName()));

            shopLayout.add(shopNameLabel, roleLabel, enterButton);
            shopLayout.setFlexGrow(1, shopNameLabel, roleLabel);
            mainLayout.add(shopLayout);
        }

        // Add the create shop form at the end
        HorizontalLayout createShopLayout = new HorizontalLayout();
        createShopLayout.setWidth("100%");
        createShopLayout.setPadding(true);
        createShopLayout.setSpacing(true);

        TextField shopNameField = new TextField();
        shopNameField.setWidth("100%");
        shopNameField.setPlaceholder("Shop Name");

        Button createShopButton = new Button("Create Shop");
        createShopButton.addClickListener(e -> createShop(shopNameField.getValue()));

        createShopLayout.add(new Label("Shop Name: "), shopNameField, createShopButton);
        createShopLayout.setFlexGrow(1, shopNameField);
        mainLayout.add(createShopLayout);
    }

    private void navigateToShop(String shopId) {
        getUI().ifPresent(ui -> ui.navigate("shop/" + shopId));
    }

    private void createShop(String shopName) {
        SResponseT<ShopModel> res = marketService.createShop(getCurrentUser().getName(), shopName);
        if (!res.isSuccess()) {
            Notification.show(res.getMessage());
        } else {
//            addShopView(res.getData().getName());
            SResponseT<List<MemberRoleInShopModel>> rolesRes = marketService.getUserRoles(getCurrentUser().getName());
            if (!rolesRes.isSuccess()) {
                Notification.show(rolesRes.getMessage());
            } else {
                myRoles.clear();
                myRoles.addAll(rolesRes.getData());
                mainLayout.removeAll();
                populateShopsList();
            }
        }


    }
}

