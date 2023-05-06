package FrontEnd.Views;

import FrontEnd.Model.*;
import FrontEnd.Model.InvoiceModel.*;
import FrontEnd.SResponseT;
import com.vaadin.flow.component.button.Button;
import com.vaadin.flow.component.grid.Grid;
import com.vaadin.flow.component.html.Div;
import com.vaadin.flow.component.html.Label;
import com.vaadin.flow.component.notification.Notification;
import com.vaadin.flow.component.orderedlayout.HorizontalLayout;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;
import com.vaadin.flow.component.textfield.TextField;
import com.vaadin.flow.router.PageTitle;
import com.vaadin.flow.router.Route;

import java.util.*;


@Route("user_history")
@PageTitle("user history")
public class UserHistoryView extends BaseView {

    private VerticalLayout mainLayout;
    private VerticalLayout userHistory;
    protected Grid<UserInvoiceModel> userHistoryGrid;
    protected List<UserInvoiceModel> userInvoiceModels;

    public UserHistoryView() {
        mainLayout = new VerticalLayout();
        userInvoiceModels = new ArrayList<>();
        userHistoryGrid = new Grid<>();

        // Get the user's roles and populate myShops
        importHistory();

        add(mainLayout);
    }

    protected void importHistory() {
        SResponseT<List<UserInvoiceModel>> userHistory = getUserHistory();
        if (userHistory != null && !userHistory.isSuccess()) {
            Notification.show(userHistory.getMessage());
            getUI().ifPresent(ui -> ui.navigate(""));
        } else {
            if (userHistory != null && userHistory.isSuccess()) {
                userInvoiceModels.addAll(userHistory.getData());
                populateHistoryList();
            }
        }
    }

    protected SResponseT<List<UserInvoiceModel>> getUserHistory() {
        return marketService.getUserPurchaseHistory(getCurrentUser().getName());
    }

    @Override
    protected void updateAfterUserNameChange(UserModel userModel) {

    }

    private void populateHistoryList() {
//        addShopsToLayout();

        userHistoryGrid = new Grid<UserInvoiceModel>(UserInvoiceModel.class);


        Grid<UserInvoiceModel> historyGrid = new Grid<>();
        historyGrid.setItems(userInvoiceModels);
        historyGrid.addColumn(InvoiceModel::getUserName).setHeader("User Name");
        historyGrid.setSelectionMode(Grid.SelectionMode.SINGLE);


        Grid<String> shopGrid = new Grid<>();
//        HashMap<String, HashMap<String, List<String>>> productInfoInShop = userInvoiceModels.get(0).getProductInfoInShop();
//        List<String> shopList = new ArrayList<>(productInfoInShop.keySet());
//        shopGrid.setItems(shopList);
        shopGrid.addColumn(shop -> shop).setHeader("shop Name");
        shopGrid.setSelectionMode(Grid.SelectionMode.SINGLE);




        Grid<Map.Entry<String, List<String>>> innerGrid = new Grid<>();
        innerGrid.addColumn(Map.Entry::getKey).setHeader("product Name");
        innerGrid.addColumn(entry -> entry.getValue().get(InvoiceModel.PRODUCT_DESCRIPTION)).setHeader("product description");
        innerGrid.addColumn(entry -> entry.getValue().get(InvoiceModel.PRODUCT_CATEGORY)).setHeader("product category");
        innerGrid.addColumn(entry -> entry.getValue().get(InvoiceModel.PRODUCT_PRICE)).setHeader("product price");
        innerGrid.addColumn(entry -> entry.getValue().get(InvoiceModel.PRODUCT_QUANTITY)).setHeader("product quantity");
        innerGrid.setSelectionMode(Grid.SelectionMode.NONE);

        historyGrid.addSelectionListener(event -> {
            UserInvoiceModel userInvoiceModel = event.getFirstSelectedItem().orElse(null);
            if (userInvoiceModel != null) {
                HashMap<String, HashMap<String, List<String>>> productInfoInShop = userInvoiceModel.getProductInfoInShop();
                List<String> shopList = new ArrayList<>(productInfoInShop.keySet());
                shopGrid.setItems(shopList);
                shopGrid.addSelectionListener(event2 -> {
                    String selectedShop = event2.getFirstSelectedItem().orElse(null);
                    if (selectedShop != null) {
                        HashMap<String, List<String>> innerFields = productInfoInShop.get(selectedShop);
                        List<Map.Entry<String, List<String>>> innerFieldsList = new ArrayList<>(innerFields.entrySet());
                        innerGrid.setItems(innerFieldsList);
                    } else {
                        innerGrid.setItems(Collections.emptyList());
                    }
                });
            } else {
                shopGrid.setItems(Collections.emptyList());
            }
        });


        add(historyGrid, shopGrid, innerGrid);


    }

//    protected void addShopsToLayout() {
//        myShopsLayout.removeAll();
//        for (MemberRoleInShopModel role : myRoles) {
//            String shopName = role.getRoleShop().getName();
//            String roleType = role.getType().toString();
//
//            HorizontalLayout shopLayout = new HorizontalLayout();
//            shopLayout.setWidth("100%");
//            shopLayout.getStyle().set("border-bottom", "1px solid #CCC");
//            shopLayout.setPadding(true);
//            shopLayout.setSpacing(true);
//
//            Label shopNameLabel = new Label("Shop Name: " + shopName);
//            shopNameLabel.getStyle().set("font-weight", "bold");
//            shopNameLabel.setWidth("100%");
//
//            Label roleLabel = new Label("Role: " + roleType);
//            roleLabel.setWidth("100%");
//
//            Button enterButton = new Button("Enter");
//            enterButton.addClickListener(e -> navigateToShop(role.getRoleShop().getName()));
//
//            shopLayout.add(shopNameLabel, roleLabel, enterButton);
//            shopLayout.setFlexGrow(1, shopNameLabel, roleLabel);
//            myShopsLayout.add(shopLayout);
//        }
//    }

    protected void navigateToShop(String shopId) {
        getUI().ifPresent(ui -> ui.navigate("shop/" + shopId));
    }


}

