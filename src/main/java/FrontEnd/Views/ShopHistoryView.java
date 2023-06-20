package FrontEnd.Views;

import BusinessLayer.Purchases.ProductInfo;
import FrontEnd.Model.*;
import FrontEnd.SResponseT;
import com.vaadin.flow.component.Text;
import com.vaadin.flow.component.grid.Grid;
import com.vaadin.flow.component.html.Label;
import com.vaadin.flow.component.notification.Notification;
import com.vaadin.flow.component.orderedlayout.HorizontalLayout;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;
import com.vaadin.flow.router.*;

import java.util.*;


@Route("shop_history")
@PageTitle("shop history")
public class ShopHistoryView extends BaseView implements HasUrlParameter<String> {

    private VerticalLayout mainLayout;
    protected ShopModel shopProfile;
    protected List<ShopInvoiceModel> shopInvoiceModels;

    public ShopHistoryView() {
        mainLayout = new VerticalLayout();
        shopInvoiceModels = new ArrayList<>();

        // Get the user's roles and populate myShops

        add(mainLayout);
    }

    protected void importHistory() {
        SResponseT<List<ShopInvoiceModel>> userHistory = getShopHistory();
        if (userHistory != null && !userHistory.isSuccess()) {
            Notification.show(userHistory.getMessage());
            getUI().ifPresent(ui -> ui.navigate(""));
        } else {
            if (userHistory != null && userHistory.isSuccess()) {
                shopInvoiceModels.addAll(userHistory.getData());
                populateHistoryList();
            }
        }
    }

    protected SResponseT<List<ShopInvoiceModel>> getShopHistory() {
        return marketService.getShopPurchaseHistory(getCurrentUser().getName(), shopProfile.getName());
    }

    @Override
    protected void updateAfterUserNameChange(UserModel userModel) {

    }

    private void populateHistoryList() {

        Grid<ShopInvoiceModel> shopGrid = new Grid<>();
        shopGrid.addColumn(ShopInvoiceModel::getId).setHeader("invoice id");
        shopGrid.setSelectionMode(Grid.SelectionMode.SINGLE);
        shopGrid.setItems(shopInvoiceModels);

        Label userName = new Label();
        VerticalLayout userNameVerticalLayout = new VerticalLayout(new Label("user name"), userName);

        Label priceBeforeDiscount = new Label();
        VerticalLayout origPriceVerticalLayout = new VerticalLayout(new Label("price before discount"), priceBeforeDiscount);

        Label priceAfterDiscount = new Label();
        VerticalLayout newPriceVerticalLayout = new VerticalLayout(new Label("price after discount"), priceAfterDiscount);

        HorizontalLayout invoiceLayout = new HorizontalLayout(userNameVerticalLayout, origPriceVerticalLayout, newPriceVerticalLayout);
        invoiceLayout.setVisible(false);

        Grid<ProductInfoModel> innerGrid = new Grid<>();
        innerGrid.addColumn(ProductInfoModel::getName).setHeader("product Name");
        innerGrid.addColumn(ProductInfoModel::getDescription).setHeader("product description");
        innerGrid.addColumn(ProductInfoModel::getCategory).setHeader("product category");
        innerGrid.addColumn(ProductInfoModel::getPrice).setHeader("product origin price");
        innerGrid.addColumn(ProductInfoModel::getPriceAfterDiscount).setHeader("product price after discount");
        innerGrid.addColumn(ProductInfoModel::getQuantity).setHeader("product quantity");
        innerGrid.setSelectionMode(Grid.SelectionMode.NONE);

        shopGrid.addSelectionListener(event2 -> {
            ShopInvoiceModel selectedShop = event2.getFirstSelectedItem().orElse(null);
            if (selectedShop != null) {
                userName.setText(selectedShop.getUserName());
                priceBeforeDiscount.setText(String.valueOf(selectedShop.totalOrigPrice()));
                priceAfterDiscount.setText(String.valueOf(selectedShop.totalNewPrice()));
                invoiceLayout.setVisible(true);
                List<ProductInfoModel> innerFields = selectedShop.getProductInfoInShop();
//                List<Map.Entry<String, List<String>>> innerFieldsList = new ArrayList<>(innerFields.entrySet());
                innerGrid.setItems(innerFields);
            } else {
                innerGrid.setItems(Collections.emptyList());
                invoiceLayout.setVisible(false);
            }
        });


        add(shopGrid, invoiceLayout, innerGrid);


    }


    protected void navigateToShop(String shopId) {
        getUI().ifPresent(ui -> ui.navigate("shop/" + shopId));
    }

    @Override
    public void setParameter(BeforeEvent event, @OptionalParameter String parameter) {
        if (checkIfFirstScreen(event)) return;
        if (parameter != null && !parameter.isEmpty()) {
            SResponseT<ShopModel> res = marketService.getShop(parameter);
            if (res.isSuccess()) {
                shopProfile = res.getData();
                add(new Text(shopProfile.getName()));
                importHistory();
            }
            else Notification.show(res.getMessage());
        }
    }


}

