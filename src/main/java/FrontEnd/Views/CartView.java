package FrontEnd.Views;


import FrontEnd.SResponse;
import ServiceLayer.DataObjects.*;
import ServiceLayer.Response;
import com.vaadin.flow.component.orderedlayout.HorizontalLayout;

import FrontEnd.Model.ProductModel;
import FrontEnd.Model.UserModel;
import FrontEnd.SResponseT;
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
        double totalPurchasePrice = 0;
        double totalPriceAfterDiscount = 0;
        SResponseT<FinalCartPriceDataObj> res = marketService.calcCartPriceAfterDiscount(userModel.getName());
        if(res.isSuccess()){

            totalPurchasePrice = res.getData().getPriceBeforeDiscount();
            totalPriceAfterDiscount = res.getData().getPriceAfterDiscount();
        }

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

            //totalPurchasePrice = cart.entrySet().stream()
//                    .mapToDouble(entry -> {
//                        Map<String, ShopBagItemDataObj> productNameToItem = entry.getValue().getProductsAndQuantities();
//                        return productNameToItem.values().stream()
//                                .mapToDouble(item -> item.getProduct().getPrice() * item.getQuantity())
//                                .sum();
//                    })
//                    .sum();
        }
        else {
            Notification.show(cart_res.getMessage());
        }

        // Display the total purchase price
        Span totalPurchasePriceSpan = new Span("Price before discount: $" + String.format("%.2f", totalPurchasePrice));
        totalPurchasePriceSpan.getStyle().set("font-size", "18px");
        totalPurchasePriceSpan.getStyle().set("font-weight", "bold");
        totalPurchasePriceSpan.getStyle().set("margin-right", "1rem");
        Span priceAfterDiscount = new Span("Total price: $" + String.format("%.2f", totalPriceAfterDiscount));
        priceAfterDiscount.getStyle().set("font-size", "18px");
        priceAfterDiscount.getStyle().set("font-weight", "bold");
        priceAfterDiscount.getStyle().set("margin-right", "1rem");

        Button checkoutButton = new Button("Checkout", e -> {
                getUI().ifPresent(ui ->
                    ui.navigate("payment"));
        });
        checkoutButton.getStyle().set("background-image", "linear-gradient(to right,#ffcc33 , #ffb347)");
        checkoutButton.getStyle().set("color", "white");
        checkoutButton.getStyle().set("margin-top", "1rem");

        add(checkoutButton);

        HorizontalLayout buttonLayout = new HorizontalLayout(totalPurchasePriceSpan,priceAfterDiscount, checkoutButton);
        buttonLayout.setAlignItems(Alignment.BASELINE);
        add(buttonLayout);
    }

    private Grid<ShopBagItemDataObj> createCartItemGrid(List<ShopBagItemDataObj> items) {
        Grid<ShopBagItemDataObj> grid = new Grid<>();

        grid.setItems(items);

        grid.addColumn(cartItem -> cartItem.getProduct().getName()).setHeader("Product").setWidth("100px");
        grid.addColumn(cartItem -> cartItem.getProduct().getDescription()).setHeader("Description").setWidth("200px");
        grid.addColumn(cartItem -> priceFormat.format(cartItem.getProduct().getPrice())).setHeader("Price").setWidth("100px");
        grid.addColumn(ShopBagItemDataObj::getQuantity).setHeader("Quantity").setWidth("100px");
        grid.addComponentColumn(cartItem -> {
            Button bidButton = new Button("Bid", e -> {
                // Implement the edit quantity functionality
                Dialog bidDialog = new Dialog();

                NumberField priceField = new NumberField("Bid price");
                priceField.setStep(0.01);
                priceField.setMin(0.01);



                Button submitButton = new Button("Submit offer", event -> {
                    double bidPrice = priceField.getValue().doubleValue();
                    handleSumbitBid(cartItem, bidPrice);
                    bidDialog.close();
                });

                Button cancelButton = new Button("Cancel", event -> bidDialog.close());

                bidDialog.add(new VerticalLayout(priceField, new HorizontalLayout(submitButton, cancelButton)));
                bidDialog.open();
            });
            bidButton.getStyle().set("color", "white");
            bidButton.getStyle().set("background-image", "linear-gradient(to right,#ffcc33 , #ffb347)");
            return bidButton;
        }).setHeader("Bid");

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
                    Notification.show("Save");
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
        int rowHeight = 60;
        int gridHeight = (numberOfRows * rowHeight) + 60;
        grid.setHeight(gridHeight + "px");

        return grid;
    }

    private void handleSumbitBid(ShopBagItemDataObj cartItem, double bidPrice) {
        SResponse res = marketService.createBidOffer(getCurrentUser().getName(),cartItem.getProduct().getName(),cartItem.getProduct().getShopName(),bidPrice);
        if(!res.isSuccess())Notification.show(res.getMessage());
        else Notification.show("Bid successfully submitted !");
    }

    private void handleRemoveFromCart(ShopBagItemDataObj cartItem) {
        handleEditQuantity(cartItem, 0);
    }

    private void handleEditQuantity(ShopBagItemDataObj cartItem, int newQuantity) {
        int toAdd = newQuantity - cartItem.getQuantity();
        if(toAdd == 0) return;
        SResponse res = marketService.updateProductsFromCart(getCurrentUser().getName(),cartItem.getProduct().getShopName(),cartItem.getProduct().getName(),newQuantity);
        if (!res.isSuccess()){
            Notification.show(res.getMessage());
        }
        else{
            Notification.show("Successfully updated product's quantity");
            updateAfterUserNameChange(getCurrentUser());
        }
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
        shopPanel.setWidth("880px");
        return shopPanel;
    }





}
