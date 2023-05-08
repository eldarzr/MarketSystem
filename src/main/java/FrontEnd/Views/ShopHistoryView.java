package FrontEnd.Views;

import FrontEnd.Model.*;
import FrontEnd.SResponseT;
import com.vaadin.flow.component.Text;
import com.vaadin.flow.component.grid.Grid;
import com.vaadin.flow.component.notification.Notification;
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
        shopGrid.addColumn(ShopInvoiceModel::getShopName).setHeader("shop Name");
        shopGrid.setSelectionMode(Grid.SelectionMode.SINGLE);
        shopGrid.setItems(shopInvoiceModels);


        Grid<Map.Entry<String, List<String>>> innerGrid = new Grid<>();
        innerGrid.addColumn(Map.Entry::getKey).setHeader("product Name");
        innerGrid.addColumn(entry -> entry.getValue().get(InvoiceModel.PRODUCT_DESCRIPTION)).setHeader("product description");
        innerGrid.addColumn(entry -> entry.getValue().get(InvoiceModel.PRODUCT_CATEGORY)).setHeader("product category");
        innerGrid.addColumn(entry -> entry.getValue().get(InvoiceModel.PRODUCT_PRICE)).setHeader("product price");
        innerGrid.addColumn(entry -> entry.getValue().get(InvoiceModel.PRODUCT_QUANTITY)).setHeader("product quantity");
        innerGrid.setSelectionMode(Grid.SelectionMode.NONE);

        shopGrid.addSelectionListener(event2 -> {
            ShopInvoiceModel selectedShop = event2.getFirstSelectedItem().orElse(null);
            if (selectedShop != null) {
                HashMap<String, List<String>> innerFields = selectedShop.getProductInfoInShop();
                List<Map.Entry<String, List<String>>> innerFieldsList = new ArrayList<>(innerFields.entrySet());
                innerGrid.setItems(innerFieldsList);
            } else {
                innerGrid.setItems(Collections.emptyList());
            }
        });


        add(shopGrid, innerGrid);


    }


    protected void navigateToShop(String shopId) {
        getUI().ifPresent(ui -> ui.navigate("shop/" + shopId));
    }

    @Override
    public void setParameter(BeforeEvent event, @OptionalParameter String parameter) {
        Notification.show("aaa");
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

