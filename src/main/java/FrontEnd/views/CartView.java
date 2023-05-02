package FrontEnd.views;


import com.vaadin.flow.component.orderedlayout.HorizontalLayout;

import FrontEnd.Model.ProductModel;
import FrontEnd.Model.UserModel;
import FrontEnd.SResponseT;
import ServiceLayer.DataObjects.CartDataObj;
import ServiceLayer.DataObjects.ShopBagDataObj;
import ServiceLayer.DataObjects.ShopBagItemDataObj;
import ServiceLayer.DataObjects.ShopDataObj;
import com.vaadin.flow.component.UI;
import com.vaadin.flow.component.accordion.Accordion;
import com.vaadin.flow.component.accordion.AccordionPanel;
import com.vaadin.flow.component.button.Button;
import com.vaadin.flow.component.dialog.Dialog;
import com.vaadin.flow.component.grid.Grid;
import com.vaadin.flow.component.html.Div;
import com.vaadin.flow.component.html.H3;
import com.vaadin.flow.component.html.Span;
import com.vaadin.flow.component.notification.Notification;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;
import com.vaadin.flow.component.textfield.NumberField;
import com.vaadin.flow.data.provider.ListDataProvider;
import com.vaadin.flow.router.PageTitle;
import com.vaadin.flow.router.Route;

import java.text.DecimalFormat;
import java.util.Collection;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@Route("cart")
@PageTitle("Cart")
public class CartView extends BaseView {

    private Accordion shopAccordion;
    private DecimalFormat priceFormat = new DecimalFormat("#,##0.00");

    public CartView() {

        updateAfterUserNameChange(getCurrentUser());
    }

    @Override
    protected void updateAfterUserNameChange(UserModel userModel) {
        removeAll();
        add(getHorizontalLayout());

        shopAccordion = new Accordion();
        add(shopAccordion);

        // Fetch cart data
        SResponseT<CartDataObj> cart_res = marketService.getCart(userModel.getName());
        if(cart_res.isSuccess()) {
            CartDataObj c = cart_res.getData();
            Map<String, ShopBagDataObj> cart = c.getCart();


            // Populate accordion with shop panels
            for (Map.Entry<String, ShopBagDataObj> entry : cart.entrySet()) {
                String shop = entry.getKey();
                //List<ShopBagItemDataObj> items = entry.getValue();
                Map<String, ShopBagItemDataObj> productNameToItem = entry.getValue().getProductsAndQuantities();

                Grid<ShopBagItemDataObj> itemGrid = createCartItemGrid(productNameToItem.values().stream().toList());
                AccordionPanel shopPanel = createShopPanel(shop, itemGrid);
                shopAccordion.add(shopPanel);
            }
        }
        else {
            Notification.show(cart_res.getMessage());
        }

        Button checkoutButton = new Button("Checkout", e -> {
                getUI().ifPresent(ui ->
                    ui.navigate("payment"));
        });
        checkoutButton.getStyle().set("background-image", "linear-gradient(to right,#ffcc33 , #ffb347)");
        checkoutButton.getStyle().set("color", "white");
        checkoutButton.getStyle().set("margin-top", "1rem");

        add(checkoutButton);
    }

    private Grid<ShopBagItemDataObj> createCartItemGrid(List<ShopBagItemDataObj> items) {
        Grid<ShopBagItemDataObj> grid = new Grid<>();

        grid.setItems(items);

        grid.addColumn(cartItem -> cartItem.getProduct().getName()).setHeader("Product").setWidth("100px");
        grid.addColumn(cartItem -> cartItem.getProduct().getDescription()).setHeader("Description").setWidth("200px");
        grid.addColumn(cartItem -> priceFormat.format(cartItem.getProduct().getPrice())).setHeader("Price").setWidth("100px");
        grid.addColumn(ShopBagItemDataObj::getQuantity).setHeader("Quantity").setWidth("100px");


        grid.addComponentColumn(cartItem -> {
            Button editButton = new Button("Edit", e -> {
                // Implement the edit quantity functionality
                Dialog editDialog = new Dialog();
                editDialog.setCloseOnEsc(false);
                editDialog.setCloseOnOutsideClick(false);

                NumberField quantityField = new NumberField("Quantity");
                quantityField.setValue((double) cartItem.getQuantity());
                //quantityField.setHasControls(true);
                quantityField.setMin(1);

                Button saveButton = new Button("Save", event -> {
                    int newQuantity = quantityField.getValue().intValue();
                    handleEditQuantity(cartItem, newQuantity);
                    editDialog.close();
                });

                Button cancelButton = new Button("Cancel", event -> editDialog.close());

                editDialog.add(new VerticalLayout(quantityField, new HorizontalLayout(saveButton, cancelButton)));
                editDialog.open();
            });
            editButton.getStyle().set("color", "white");
            editButton.getStyle().set("background-image", "linear-gradient(to right,#ffcc33 , #ffb347)");
            return editButton;
        }).setHeader("Edit");

        grid.addComponentColumn(cartItem -> {
            Button removeButton = new Button("Remove", e -> {
                handleRemoveFromCart(cartItem);
            });
            removeButton.getStyle().set("color", "white");
            removeButton.getStyle().set("background-image", "linear-gradient(to right,#ff4d4d , #ff1a1a)");
            return removeButton;
        }).setHeader("Remove");


        // Set grid height based on the number of items
        int numberOfRows = items.size();
        int rowHeight = 100;
        int gridHeight = (numberOfRows * rowHeight) + 60;
        grid.setHeight(gridHeight + "px");

        return grid;
    }

    private void handleRemoveFromCart(ShopBagItemDataObj cartItem) {
        Notification.show("Why would you do that");
    }

    private void handleEditQuantity(ShopBagItemDataObj cartItem, int newQuantity) {
        Notification.show("A bit greedy ay?");
    }

    private AccordionPanel createShopPanel(String shopName, Grid<ShopBagItemDataObj> itemGrid) {
        VerticalLayout layout = new VerticalLayout();
        layout.add(itemGrid);
        Collection<ShopBagItemDataObj> items = ((ListDataProvider<ShopBagItemDataObj>)itemGrid.getDataProvider()).getItems();

        // Calculate the shop total
        double shopTotal = items.stream()
                .mapToDouble(item -> item.getProduct().getPrice() * item.getQuantity())
                .sum();

        H3 shopTitle = new H3(shopName + " - Total: $" + String.format("%.2f", shopTotal));


        AccordionPanel shopPanel = new AccordionPanel(shopTitle, layout);
        shopPanel.setWidth("800px");
        return shopPanel;
    }





}
