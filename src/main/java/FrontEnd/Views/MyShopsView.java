package FrontEnd.views;

import BusinessLayer.Shops.Shop;
import FrontEnd.Model.MemberRoleInShopModel;
import FrontEnd.Model.ShopModel;
import FrontEnd.Model.UserModel;
import FrontEnd.SResponseT;
import com.vaadin.flow.component.button.Button;
import com.vaadin.flow.component.grid.Grid;
import com.vaadin.flow.component.html.Div;
import com.vaadin.flow.component.html.H1;
import com.vaadin.flow.component.html.Label;
import com.vaadin.flow.component.notification.Notification;
import com.vaadin.flow.component.orderedlayout.HorizontalLayout;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;
import com.vaadin.flow.component.textfield.TextField;
import com.vaadin.flow.data.provider.ListDataProvider;
import com.vaadin.flow.router.PageTitle;
import com.vaadin.flow.router.Route;

import java.util.ArrayList;
import java.util.List;



@Route("my-shops")
@PageTitle("My Shops")
public class MyShopsView extends BaseView {

    private VerticalLayout mainLayout;
    private List<MemberRoleInShopModel> myShops;

    public MyShopsView() {
        mainLayout = new VerticalLayout();
        myShops = new ArrayList<>();

        // Get the user's roles and populate myShops
        SResponseT<List<MemberRoleInShopModel>> rolesRes = marketService.getUserRoles(getCurrentUser().getName());
        if (!rolesRes.isSuccess()) {
            Notification.show(rolesRes.getMessage());
            getUI().ifPresent(ui -> ui.navigate(""));
        } else {
            myShops.addAll(rolesRes.getData());
            populateShopsList();
        }

        add(mainLayout);
    }

    @Override
    protected void updateAfterUserNameChange(UserModel userModel) {

    }

    private void populateShopsList() {
        for (MemberRoleInShopModel role : myShops) {
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
        // Implement creating a new shop here
    }
}
//public class MyShopsView extends BaseView {
//
//    private ListDataProvider<MemberRoleInShopModel> rolesDataProvider;
//    private ListDataProvider<ShopModel> shopDataProvider;
//
//
//    public MyShopsView() {
//        SResponseT<List<MemberRoleInShopModel>> rolesRes = marketService.getUserRoles(getCurrentUser().getName());
//        if(!rolesRes.isSuccess()){
//            Notification.show(
//                    (rolesRes.isSuccess() ? "" : rolesRes.getMessage()));
//            getUI().ifPresent(ui -> ui.navigate(""));
//        }
//        rolesDataProvider = new ListDataProvider<>(rolesRes.getData());
//
//
//        H1 header = new H1("My Shops");
//
//        Grid<Shop> shopsGrid = new Grid<>(Shop.class);
//        shopsGrid.setItems(userShops);
//        shopsGrid.setColumns("name", "role");
//        shopsGrid.addComponentColumn(shop -> {
//            Button enterButton = new Button("Enter");
//            enterButton.addClickListener(e -> {
//                // Add logic to navigate to shop details screen
//            });
//            return enterButton;
//        }).setHeader("Action");
//
//        TextField newShopNameField = new TextField();
//        newShopNameField.setLabel("Shop Name");
//
//        Button createShopButton = new Button("Create Shop");
//        createShopButton.addClickListener(e -> {
//            String newShopName = newShopNameField.getValue();
//            if (!newShopName.isEmpty()) {
//                Shop newShop = new Shop(newShopName);
//                getCurrentUser().addShop(newShop);
//                userShops.add(newShop);
//                shopsGrid.setItems(userShops);
//                newShopNameField.clear();
//            }
//        });
//
//        HorizontalLayout newShopLayout = new HorizontalLayout(newShopNameField, createShopButton);
//
//        Div content = new Div(shopsGrid, newShopLayout);
//        add(header, content);
//    }
//
//    @Override
//    protected void updateAfterUserNameChange(UserModel userModel) {
//
//    }