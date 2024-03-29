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
        historyGrid.addColumn(InvoiceModel::getId).setHeader("invoice id");
        historyGrid.setSelectionMode(Grid.SelectionMode.SINGLE);


        Label priceBeforeDiscount = new Label();
        VerticalLayout origPriceVerticalLayout = new VerticalLayout(new Label("price before discount"), priceBeforeDiscount);

        Label priceAfterDiscount = new Label();
        VerticalLayout newPriceVerticalLayout = new VerticalLayout(new Label("price after discount"), priceAfterDiscount);

        HorizontalLayout invoiceLayout = new HorizontalLayout(origPriceVerticalLayout, newPriceVerticalLayout);
        invoiceLayout.setVisible(false);


        Grid<ShopInfoModel> shopGrid = new Grid<>();
        shopGrid.addColumn(ShopInfoModel::getShopName).setHeader("shop Name");
        shopGrid.addColumn(ShopInfoModel::getPriceBeforeDiscount).setHeader("price before discount");
        shopGrid.addColumn(ShopInfoModel::getPriceAfterDiscount).setHeader("price after discount");
        shopGrid.setSelectionMode(Grid.SelectionMode.SINGLE);




        Grid<ProductInfoModel> innerGrid = new Grid<>();
        innerGrid.addColumn(ProductInfoModel::getName).setHeader("product Name");
        innerGrid.addColumn(ProductInfoModel::getDescription).setHeader("product description");
        innerGrid.addColumn(ProductInfoModel::getCategory).setHeader("product category");
        innerGrid.addColumn(ProductInfoModel::getPrice).setHeader("product price");
        innerGrid.addColumn(ProductInfoModel::getPriceAfterDiscount).setHeader("product price after discount");
        innerGrid.addColumn(ProductInfoModel::getQuantity).setHeader("product quantity");
        innerGrid.setSelectionMode(Grid.SelectionMode.NONE);

        historyGrid.addSelectionListener(event -> {
            UserInvoiceModel userInvoiceModel = event.getFirstSelectedItem().orElse(null);
            if (userInvoiceModel != null) {
                priceBeforeDiscount.setText(String.valueOf(userInvoiceModel.getPriceBeforeDiscount()));
                priceAfterDiscount.setText(String.valueOf(userInvoiceModel.getPriceAfterDiscount()));
                invoiceLayout.setVisible(true);
                HashMap<String, ShopInfoModel> productInfoInShop = userInvoiceModel.getProductInfoInShop();
                List<String> shopList = new ArrayList<>(productInfoInShop.keySet());
                shopGrid.setItems(productInfoInShop.values());
                shopGrid.addSelectionListener(event2 -> {
                    ShopInfoModel selectedShop = event2.getFirstSelectedItem().orElse(null);
                    if (selectedShop != null) {
                        List<ProductInfoModel> innerFields = selectedShop.getProductInfos();
                        innerGrid.setItems(innerFields);
                    } else {
                        innerGrid.setItems(Collections.emptyList());
                    }
                });
            } else {
                shopGrid.setItems(Collections.emptyList());
                invoiceLayout.setVisible(false);
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

