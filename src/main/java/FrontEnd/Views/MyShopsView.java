package FrontEnd.Views;

import FrontEnd.Model.MemberRoleInShopModel;
import FrontEnd.Model.ShopModel;
import FrontEnd.Model.UserModel;
import FrontEnd.SResponse;
import FrontEnd.SResponseT;
import com.vaadin.flow.component.button.Button;
import com.vaadin.flow.component.dialog.Dialog;
import com.vaadin.flow.component.html.Label;
import com.vaadin.flow.component.notification.Notification;
import com.vaadin.flow.component.orderedlayout.HorizontalLayout;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;
import com.vaadin.flow.component.textfield.TextField;
import com.vaadin.flow.router.PageTitle;
import com.vaadin.flow.router.Route;

import java.util.ArrayList;
import java.util.List;



@Route("my_shops")
@PageTitle("My Shops")
public class MyShopsView extends BaseView {

    private VerticalLayout mainLayout;
    private VerticalLayout myShopsLayout;
    protected List<MemberRoleInShopModel> myRoles;
    protected HorizontalLayout createShopLayout;
    protected TextField shopNameField;
    protected Button createShopButton;

    public MyShopsView() {
        mainLayout = new VerticalLayout();
        myRoles = new ArrayList<>();
        myShopsLayout = new VerticalLayout();

        // Get the user's roles and populate myShops
        importShops(false);

        add(mainLayout);
    }

    protected void importShops(boolean isAdmin) {
        SResponseT<List<MemberRoleInShopModel>> rolesRes = getUserRolesRes();
        if (rolesRes != null && !rolesRes.isSuccess()) {
            Notification.show(rolesRes.getMessage());
            getUI().ifPresent(ui -> ui.navigate(""));
        } else {
            if (rolesRes != null && rolesRes.isSuccess())
                myRoles.addAll(rolesRes.getData());
            populateShopsList(isAdmin);
        }
    }

    protected SResponseT<List<MemberRoleInShopModel>> getUserRolesRes() {
        return marketService.getUserRoles(getCurrentUser().getName());
    }

    @Override
    protected void updateAfterUserNameChange(UserModel userModel) {

    }

    private void populateShopsList(boolean isAdmin) {
        addShopsToLayout(isAdmin);

        // Add the create shop form at the end
        createShopLayout = new HorizontalLayout();
        createShopLayout.setWidth("100%");
        createShopLayout.setPadding(true);
        createShopLayout.setSpacing(true);

        shopNameField = new TextField();
        shopNameField.setWidth("100%");
        shopNameField.setPlaceholder("Shop Name");

        createShopButton = new Button("Create Shop");
        createShopButton.addClickListener(e -> createShop(shopNameField.getValue()));
        enableButton(createShopButton);

        createShopLayout.add(new Label("Shop Name: "), shopNameField, createShopButton);
        createShopLayout.setFlexGrow(1, shopNameField);
        mainLayout.add(myShopsLayout, createShopLayout);
    }

    protected void addShopsToLayout(boolean isAdmin) {
        myShopsLayout.removeAll();
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
            enableButton(enterButton);

            Button closeButton = new Button("Close Shop");
            closeButton.addClickListener(e -> onCloseShop(role.getRoleShop().getName()));
            closeButton.setVisible(!isAdmin);
            enableButton(closeButton);

            Button historyButton = new Button("Shop history");
            historyButton.addClickListener(e -> navigateToHistory(shopName));
            enableButton(historyButton);

            shopLayout.add(shopNameLabel, roleLabel, enterButton,closeButton, historyButton);
            shopLayout.setFlexGrow(1, shopNameLabel, roleLabel);
            myShopsLayout.add(shopLayout);
        }
    }

    protected void navigateToHistory(String shopName){
        getUI().ifPresent(ui -> ui.navigate("shop_history/" + shopName));
    }

    protected void onCloseShop(String shopName) {
        Dialog confirmDialog = new Dialog();
        confirmDialog.setCloseOnEsc(false);
        confirmDialog.setCloseOnOutsideClick(false);

        Label message = new Label("Are you sure you want to close the shop? This action cannot be undone.");
        Button confirmButton = new Button("Close Shop");
        confirmButton.addClickListener(event -> {
            SResponse res = marketService.closeShop(getCurrentUser().getName(), shopName);
            if (!res.isSuccess() && res!=null) {
                Notification.show(res.getMessage());
            } else {
                Notification.show("The shop has been Closed");
            }
            confirmDialog.close();
        });
        Button cancelButton = new Button("Cancel", event -> confirmDialog.close());
        HorizontalLayout buttonsLayout = new HorizontalLayout(confirmButton, cancelButton);

        confirmDialog.add(message, buttonsLayout);
        confirmDialog.open();

        //enableButton(closeButton);   // Not sure what this does, so I commented it out
    }
//    protected void onCloseShop(String shopName) {
//        SResponse res = marketService.closeShop(getCurrentUser().getName(), shopName);
//        if (!res.isSuccess() && res!=null) {
//            Notification.show(res.getMessage());
//        } else {
//            Notification.show("The shop has been Closed");
//        }
//    }

    protected void navigateToShop(String shopId) {
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
                populateShopsList(false);
            }
        }


    }
}

