package FrontEnd.Views;

import FrontEnd.Model.*;
import FrontEnd.SResponse;
import FrontEnd.SResponseT;

import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

import ServiceLayer.DataObjects.DiscountDataObjects.*;

import ServiceLayer.DataObjects.DiscountDataObjects.DiscountRulesDataObjects.SimpleDiscountRuleDataObj;
import com.vaadin.flow.component.Text;
import com.vaadin.flow.component.button.Button;
import com.vaadin.flow.component.combobox.ComboBox;
import com.vaadin.flow.component.dialog.Dialog;
import com.vaadin.flow.component.grid.Grid;
import com.vaadin.flow.component.html.Label;
import com.vaadin.flow.component.html.Span;
import com.vaadin.flow.component.notification.Notification;
import com.vaadin.flow.component.orderedlayout.FlexComponent;
import com.vaadin.flow.component.orderedlayout.HorizontalLayout;
import com.vaadin.flow.component.select.Select;
import com.vaadin.flow.component.textfield.IntegerField;
import com.vaadin.flow.component.textfield.NumberField;
import com.vaadin.flow.component.textfield.TextArea;
import com.vaadin.flow.router.*;
import com.vaadin.flow.component.formlayout.FormLayout;
import com.vaadin.flow.component.textfield.TextField;


@Route("shopDiscounts")
@PageTitle("shopDiscounts")
public class ShopDiscountView extends BaseView implements HasUrlParameter<String> {

    private final String XOR_DECISION_RULE_SMALLER_ID = "Smaller ID";
    private final String XOR_DECISION_RULE_BIGGEST_DISCOUNT = "Biggest Discount";
    private final String XOR_DECISION_RULE_SMALLEST_DISCOUNT = "Smallest discount";

    private List<DiscountDataObj> discounts;
    private ShopModel shopModel;
    private DiscountPolicyDataObj discountPolicyModel;

    protected Button addSimpleButton;
    protected Grid<DiscountDataObj> discountGrid;
    protected Button addSimpleDiscount;
    protected Button addCompoundDiscount;
    protected Button removeDiscount;
    protected Button manageDiscountRule;
    protected Button manageRuleButton;

    private String selectedSubType;

    //rule types
    String MinProductQuantityLabel = "Min Product Quantity";
    String MaxProductQuantityLabel = "Max Product Quantity";
    String MinFromCategoryQuantityLabel = "Min From Category";
    String MaxFromCategoryQuantityLabel = "Max From Category";
    String BagPriceHigherThanLabel = "Bag Price Higher Than";

    public ShopDiscountView() {
    }


    @Override
    protected void updateAfterUserNameChange(UserModel userModel) {
    }


    @Override
    public void setParameter(BeforeEvent event, @OptionalParameter String parameter) {
        if (parameter != null && !parameter.isEmpty()) {
            SResponseT<ShopModel> res = marketService.getShop(parameter);
            if (res.isSuccess()) {
                SResponseT<DiscountPolicyDataObj> res2 = marketService.getShopDiscountPolicy(getCurrentUser().getName(),res.getData().getName());
                if(res2.isSuccess()){
                    shopModel = res.getData();
                    discountPolicyModel = res2.getData();
                    add(new Text(shopModel.getName()));
                    showDiscountPolicyScreen();
                }else{
                    Notification.show(res2.getMessage());
                }
            }
            else Notification.show(res.getMessage());
        }
    }

    private void showDiscountPolicyScreen() {

        //***************Simple Discount Button*****************
        addSimpleDiscount = new Button("Add Simple Discount");
        addSimpleDiscount.getStyle().set("background-image", "linear-gradient(to right,#ffcc33 , #ffb347)");
        addSimpleDiscount.getStyle().set("color", "white");

        // Create the dialog
        Dialog addDiscountDialog = new Dialog();

        // Create the form layout to add the input fields
        FormLayout formLayout = new FormLayout();

        // Add the discount percentage field
        IntegerField percentageField = new IntegerField("Discount Percentage");
        formLayout.add(percentageField);

        // Add the sub type field
        Select<String> subTypeSelect = new Select<String>();
        subTypeSelect.setItems("Category", "Product", "Shop");
        subTypeSelect.setLabel("Discount Sub Type");
        formLayout.add(subTypeSelect);
        subTypeSelect.addValueChangeListener(event -> {
            selectedSubType = event.getValue();
            // Do something with the selected sub type
        });

        // Add the appropriate input fields based on the sub type
        ComboBox<String> subTypeField = new ComboBox<>();
        subTypeField.setLabel("Name");
        subTypeField.setVisible(false);
        subTypeSelect.addValueChangeListener(event -> {
            selectedSubType = event.getValue();
            subTypeField.setLabel(selectedSubType + " Name");
            subTypeField.setVisible(!event.getValue().equals("Shop"));
            if (selectedSubType.equalsIgnoreCase("Product")) {
                // Populate the ComboBox with the list of products from the shop
                List<String> productList = getProductListFromShop();
                subTypeField.setItems(productList);
            }else if(selectedSubType.equalsIgnoreCase("Category"))
            {
                List<String> CategoriesList = getShopCategories();
                subTypeField.setItems(CategoriesList);
            }
        });
        formLayout.add(subTypeField);

        // Add the save button to submit the form data
        Button saveButton = new Button("Save", e -> {
            int discountPercentage = percentageField.getValue();
            String discountSubType = subTypeSelect.getValue();
            String discountSubTypeValue = subTypeField.getValue();

            processRequest(discountPercentage,discountSubType,discountSubTypeValue);

            showDiscountGird();

            // Close the dialog
            addDiscountDialog.close();
        });

        Button cancelButton = new Button("Cancel", e -> addDiscountDialog.close());

        saveButton.getStyle().set("background-image", "linear-gradient(to right,#ffcc33 , #ffb347)");
        saveButton.getStyle().set("color", "white");


        cancelButton.getStyle().set("background-image", "linear-gradient(to right,#ffcc33 , #ffb347)");
        cancelButton.getStyle().set("color", "white");

        // Add the buttons to the button layout
        HorizontalLayout buttonLayout = new HorizontalLayout(cancelButton, saveButton);
        buttonLayout.setDefaultVerticalComponentAlignment(FlexComponent.Alignment.END);
        buttonLayout.setWidthFull();

        // Add the form layout and save button to the dialog
        addDiscountDialog.add(formLayout, buttonLayout);

        // Open the dialog when the add simple discount button is clicked
        addSimpleDiscount.addClickListener(e -> addDiscountDialog.open());


        //*************compoundButton**************

        addCompoundDiscount = new Button("Make Compound Discount");
        addCompoundDiscount.getStyle().set("background-image", "linear-gradient(to right,#ffcc33 , #ffb347)");
        addCompoundDiscount.getStyle().set("color", "white");

        // Add a listener to the button
        addCompoundDiscount.addClickListener(event -> {
            // Get the currently selected items from the grid
            List<DiscountDataObj> selectedDiscounts = discountGrid.getSelectedItems().stream().toList();
            if(!(selectedDiscounts.size() >= 2))
                return;
            // Create a dialog for the user to choose the type of compound discount
            Dialog dialog = new Dialog();
            dialog.getElement().getStyle().set("word-wrap", "break-word");
            dialog.setWidth("400px");
            Label label = new Label("Select a type of compound discount");
            label.getElement().getStyle().set("white-space", "normal");
            label.getElement().getStyle().set("word-wrap", "break-word");

            ComboBox<String> comboBox = new ComboBox<>();
            comboBox.setItems("Max", "Sum", "Xor"); // Replace with your own types
            comboBox.getElement().getStyle().set("white-space", "normal");
            comboBox.getElement().getStyle().set("word-wrap", "break-word");



            Select<String> xorDecisionRule = new Select<>();
            xorDecisionRule.setLabel("Select Xor Decision Rule");
            xorDecisionRule.setVisible(false);
            xorDecisionRule.setItems(XOR_DECISION_RULE_SMALLER_ID, XOR_DECISION_RULE_BIGGEST_DISCOUNT, XOR_DECISION_RULE_SMALLEST_DISCOUNT);
            comboBox.addValueChangeListener(event1 -> {
                xorDecisionRule.setVisible(event1.getValue().equalsIgnoreCase("Xor"));
            });

            Button confirmButton = new Button("Confirm");
            confirmButton.addClickListener(confirmEvent -> {
                String selectedType = comboBox.getValue();
                String selectedXorDecision = xorDecisionRule.getValue();
                // Send the selected discounts and type to the backend for processing
                // Your backend implementation here
                Set<DiscountDataObj> discountsSelected = discountGrid.getSelectedItems();
                handleCompoundDiscountRequest(discountsSelected,selectedType,selectedXorDecision);

                showDiscountGird();

                dialog.close();
            });
            enableButton(confirmButton);

            Button addCompoundCancelButton = new Button("Cancel");
            addCompoundCancelButton.addClickListener(confirmEvent -> dialog.close());
            // Add the buttons to the button layout
            HorizontalLayout buttonLayout2 = new HorizontalLayout(addCompoundCancelButton, confirmButton);
            buttonLayout2.setDefaultVerticalComponentAlignment(FlexComponent.Alignment.END);
            buttonLayout2.setWidthFull();
            enableButton(addCompoundCancelButton);

            FormLayout formLayout2 = new FormLayout();
            dialog.add(label, comboBox, xorDecisionRule, buttonLayout2);
            formLayout2.setColspan(comboBox, 2);
            dialog.add(formLayout2);
            formLayout2.setMaxWidth("500px");
            formLayout2.getStyle().set("margin", "0 auto");
            formLayout2.getStyle().set("text-align", "center");
            formLayout2.getStyle().set("display", "flex");
            formLayout2.getStyle().set("flex-direction", "column");
            formLayout2.getStyle().set("align-items", "center");
            dialog.setCloseOnEsc(true);
            dialog.setCloseOnOutsideClick(true);


            dialog.open();
        });

        //********************Manage Rules*********************

        // Create the dialog
        Dialog ruleDialog = new Dialog();
        ruleDialog.setCloseOnEsc(true);
        ruleDialog.setCloseOnOutsideClick(true);

        manageRuleButton = new Button("Manage Rule",buttonClickEvent -> {
            if(!(discountGrid.getSelectedItems().size() == 1)){
                Notification.show("Please choose exactly one discount");
                return;
            }
            // Hide all input fields by default
            ruleDialog.open();
        });
        manageRuleButton.getStyle().set("background-image", "linear-gradient(to right,#ffcc33 , #ffb347)");
        manageRuleButton.getStyle().set("color", "white");

        FormLayout ruleFormManageRule = new FormLayout();

        // Create the select component for choosing the action type
        Select<String> actionTypeSelect = new Select<>();
        actionTypeSelect.setLabel("Action Type");
        actionTypeSelect.setItems("XOR", "AND", "OR", "REPLACE");
        ruleFormManageRule.add(actionTypeSelect);

        //constants to simple rules
        Select<String> ruleTypeSelect = new Select<>();
        ruleTypeSelect.setLabel("Rule Type");
        ruleTypeSelect.setItems(MinProductQuantityLabel, MaxProductQuantityLabel, MinFromCategoryQuantityLabel, MaxFromCategoryQuantityLabel, BagPriceHigherThanLabel);
        ruleFormManageRule.add(ruleTypeSelect);

        IntegerField quantityField = new IntegerField("Quantity");
        TextField productField = new TextField("Product Name");
        TextField categoryField = new TextField("Category Name");
        NumberField priceField = new NumberField("Minimum Price");

        // Hide all input fields by default
        quantityField.setVisible(false);
        productField.setVisible(false);
        categoryField.setVisible(false);
        priceField.setVisible(false);
        actionTypeSelect.setVisible(false);

        ruleFormManageRule.add(quantityField);
        ruleFormManageRule.add(productField);
        ruleFormManageRule.add(categoryField);
        ruleFormManageRule.add(priceField);
        ruleFormManageRule.add(actionTypeSelect);

        // Add value change listeners to show/hide the appropriate input fields
        ruleTypeSelect.addValueChangeListener(event -> {
            String ruleType = event.getValue();
            if (ruleType.equals("")) {
                quantityField.clear();
                productField.clear();
                categoryField.clear();
                priceField.clear();
                actionTypeSelect.clear();
                quantityField.setVisible(false);
                productField.setVisible(false);
                categoryField.setVisible(false);
                priceField.setVisible(false);
                actionTypeSelect.setVisible(false);
                return;
            }
            boolean displayActionWithOld = discountGrid.getSelectedItems().stream().toList().get(0).getDiscountRule() != null;
            if (ruleType.equals(MinProductQuantityLabel) || ruleType.equals(MaxProductQuantityLabel)) {
                quantityField.setVisible(true);
                productField.setVisible(true);
                categoryField.setVisible(false);
                priceField.setVisible(false);
                actionTypeSelect.setVisible(displayActionWithOld);
            } else if (ruleType.equals(MinFromCategoryQuantityLabel) || ruleType.equals(MaxFromCategoryQuantityLabel)) {
                quantityField.setVisible(true);
                productField.setVisible(false);
                categoryField.setVisible(true);
                priceField.setVisible(false);
                actionTypeSelect.setVisible(displayActionWithOld);
            } else if (ruleType.equals(BagPriceHigherThanLabel)) {
                quantityField.setVisible(false);
                productField.setVisible(false);
                categoryField.setVisible(false);
                priceField.setVisible(true);
                actionTypeSelect.setVisible(displayActionWithOld);
            }

        });

        // Define the layout for the dialog
        ruleFormManageRule.add(ruleTypeSelect, quantityField, productField, categoryField, priceField, actionTypeSelect);

        // Define the buttons for the dialog
        Button addRuleButton = new Button("Add Rule");
        Button resetRuleButton = new Button("Reset Rule");
        addRuleButton.getStyle().set("background-image", "linear-gradient(to right,#ffcc33 , #ffb347)");
        addRuleButton.getStyle().set("color", "white");
        resetRuleButton.getStyle().set("background-image", "linear-gradient(to right,#ffcc33 , #ffb347)");
        resetRuleButton.getStyle().set("color", "white");

        // Add click listeners to the buttons
        addRuleButton.addClickListener(event -> {
            DiscountDataObj selectedDiscount = discountGrid.getSelectedItems().stream().toList().get(0);
            String ruleType = ruleTypeSelect.getValue();
            String ActionWithOldRule = actionTypeSelect.getValue();
            Integer quantity = quantityField.getValue();
            String product = productField.getValue();
            String category = categoryField.getValue();
            Double price = priceField.getValue();
            handleAddRuleRequest(selectedDiscount,ruleType,ActionWithOldRule,quantity,product,category,price);

            showDiscountGird();

            ruleTypeSelect.setValue("");
            ruleDialog.close();
        });
        resetRuleButton.addClickListener(event -> {
            SResponse res =marketService.resetDiscountRule(shopModel.getName(),getCurrentUser().getName(),discountGrid.getSelectedItems().stream().toList().get(0));
            if(!res.isSuccess())
                Notification.show(res.getMessage());

            showDiscountGird();

            ruleTypeSelect.setValue("");
            ruleDialog.close();
        });

        // Define the layout for the dialog buttons
        HorizontalLayout buttonLayout2 = new HorizontalLayout(addRuleButton, resetRuleButton);
        buttonLayout.setSpacing(true);



        // Add the buttons to the dialog
        ruleDialog.add(ruleFormManageRule,buttonLayout2);

        //*************remove discount*************************
        removeDiscount = new Button("Remove Discount");
        enableButton(removeDiscount);
        removeDiscount.addClickListener(removeEvent -> {
           List<DiscountDataObj> discountDataObjs = discountGrid.getSelectedItems().stream().toList();
           if(discountDataObjs.size() != 1){
               Notification.show("Please choose exactly one discount");
               return;
           }
           DiscountDataObj discountChosen = discountDataObjs.get(0);
           handleRemoveDiscount(discountChosen.getDiscountId());

            showDiscountGird();
        });
        enableButton(removeDiscount);

        //**********************summary************************
        showDiscounts();

        HorizontalLayout horizontalLayout = new HorizontalLayout(addSimpleDiscount, addCompoundDiscount,manageRuleButton, removeDiscount);

        add(horizontalLayout);

    }

    private List<String> getShopCategories() {
        SResponseT<List<ProductModel>> r = marketService.getShopProducts(getCurrentUser().getName(),shopModel.getName());
        if(!r.isSuccess())
            Notification.show(r.getMessage());
        List<String> productsName = r.getData().stream().map(ProductModel::getCategory).collect(Collectors.toList());
        return productsName;
    }

    private List<String> getProductListFromShop() {
        SResponseT<List<ProductModel>> r = marketService.getShopProducts(getCurrentUser().getName(),shopModel.getName());
        if(!r.isSuccess())
            Notification.show(r.getMessage());
        List<String> productsName = r.getData().stream().map(ProductModel::getName).collect(Collectors.toList());
        return productsName;
    }

    private void handleRemoveDiscount(int discountId) {
        SResponse r = marketService.removeDiscount(shopModel.getName(),getCurrentUser().getName(),discountId);
        if(!r.isSuccess())
            Notification.show(r.getMessage());
    }

    private void handleAddRuleRequest(DiscountDataObj selectedDiscount,String ruleType, String actionWithOldRule, Integer quantity, String product, String category, Double price) {
        SResponse r = null;
        if(ruleType.equals(MinProductQuantityLabel)){
            SimpleDiscountRuleDataObj simpleDiscountRuleDataObj = new SimpleDiscountRuleDataObj();
            simpleDiscountRuleDataObj.setRuleSubType("MinProductQuantity");
            simpleDiscountRuleDataObj.setMinQuantity(quantity);
            simpleDiscountRuleDataObj.setSubjectName(product);
            r = marketService.addDiscountRule(shopModel.getName(),getCurrentUser().getName(),simpleDiscountRuleDataObj,selectedDiscount.getDiscountId(),actionWithOldRule);
        }else if(ruleType.equals(MaxProductQuantityLabel)){
            SimpleDiscountRuleDataObj simpleDiscountRuleDataObj = new SimpleDiscountRuleDataObj();
            simpleDiscountRuleDataObj.setRuleSubType("MaxProductQuantity");
            simpleDiscountRuleDataObj.setMaxQuantity(quantity);
            simpleDiscountRuleDataObj.setSubjectName(product);
            r = marketService.addDiscountRule(shopModel.getName(),getCurrentUser().getName(),simpleDiscountRuleDataObj,selectedDiscount.getDiscountId(),actionWithOldRule);
        }else if(ruleType.equals(MinFromCategoryQuantityLabel)){
            SimpleDiscountRuleDataObj simpleDiscountRuleDataObj = new SimpleDiscountRuleDataObj();
            simpleDiscountRuleDataObj.setRuleSubType("MinFromCategory");
            simpleDiscountRuleDataObj.setMinQuantity(quantity);
            simpleDiscountRuleDataObj.setSubjectName(category);
            r = marketService.addDiscountRule(shopModel.getName(),getCurrentUser().getName(),simpleDiscountRuleDataObj,selectedDiscount.getDiscountId(),actionWithOldRule);
        }else if(ruleType.equals(MaxFromCategoryQuantityLabel)){
            SimpleDiscountRuleDataObj simpleDiscountRuleDataObj = new SimpleDiscountRuleDataObj();
            simpleDiscountRuleDataObj.setRuleSubType("MaxFromCategory");
            simpleDiscountRuleDataObj.setMaxQuantity(quantity);
            simpleDiscountRuleDataObj.setSubjectName(category);
            r = marketService.addDiscountRule(shopModel.getName(),getCurrentUser().getName(),simpleDiscountRuleDataObj,selectedDiscount.getDiscountId(),actionWithOldRule);
        }else if(ruleType.equals(BagPriceHigherThanLabel)){
            SimpleDiscountRuleDataObj simpleDiscountRuleDataObj = new SimpleDiscountRuleDataObj();
            simpleDiscountRuleDataObj.setRuleSubType("BagPriceHigherThan");
            simpleDiscountRuleDataObj.setMinPrice(price);
            r = marketService.addDiscountRule(shopModel.getName(),getCurrentUser().getName(),simpleDiscountRuleDataObj,selectedDiscount.getDiscountId(),actionWithOldRule);
        }
        if(r != null && !r.isSuccess())
            Notification.show(r.getMessage());
    }

    private void showDiscountGird() {
        SResponseT<DiscountPolicyDataObj> res = marketService.getShopDiscountPolicy(getCurrentUser().getName(),shopModel.getName());
        discountPolicyModel = res.getData();
        if(res.isSuccess()){
            discountPolicyModel = res.getData();
            discounts = discountPolicyModel.getDiscountsById().values().stream().toList();
            discountGrid.setItems(discounts);
        }else{
            Notification.show(res.getMessage());
        }
    }

    private void handleCompoundDiscountRequest(Set<DiscountDataObj> discountsSelected, String selectedType,String xorDecisionRule) {
        List<Integer> discountsIds = discountsSelected.stream().map(DiscountDataObj::getDiscountId).collect(Collectors.toList());
        if(xorDecisionRule != null){
            xorDecisionRule = getServiceRep(xorDecisionRule);
        }
        SResponseT<CompoundDiscountDataObj> r = null;
        switch(selectedType){
            case("Sum"):
                r = marketService.addSumDiscount(shopModel.getName(),getCurrentUser().getName(),discountsIds);
                if(!r.isSuccess())
                    Notification.show(r.getMessage());
                break;
            case("Max"):
                r = marketService.addMaxDiscount(shopModel.getName(),getCurrentUser().getName(),discountsIds);
                if(!r.isSuccess())
                    Notification.show(r.getMessage());
                break;
            case("Xor"):
                r = marketService.addXorDiscount(shopModel.getName(),getCurrentUser().getName(),discountsIds,xorDecisionRule);
                if(!r.isSuccess())
                    Notification.show(r.getMessage());
                break;
        }
        if(r != null && !r.isSuccess())
            Notification.show(r.getMessage());
    }

    private String getServiceRep(String xorDecisionRule) {
        switch (xorDecisionRule){
            case(XOR_DECISION_RULE_SMALLER_ID):
                return "SMALLER_ID";
            case (XOR_DECISION_RULE_BIGGEST_DISCOUNT):
                return "BIGGER_DISCOUNT";
            case(XOR_DECISION_RULE_SMALLEST_DISCOUNT):
                return "SMALLER_DISCOUNT";
        }
        return null;
    }

    private void processRequest(int discountPercentage, String discountSubType, String discountSubTypeValue) {
        if(discountSubType.equalsIgnoreCase("Shop")){
            SResponseT<ShopDiscountDataObj> r = marketService.addShopDiscount(shopModel.getName(), getCurrentUser().getName(),discountPercentage);
            if(!r.isSuccess()){
                Notification.show(r.getMessage());
            }
        }else if(discountSubType.equalsIgnoreCase("Product")){
            SResponseT<ProductDiscountDataObj> r = marketService.addProductDiscount(shopModel.getName(), getCurrentUser().getName(),discountPercentage,discountSubTypeValue);
            if(!r.isSuccess()){
                Notification.show(r.getMessage());
            }
        }else if(discountSubType.equalsIgnoreCase("Category")){
            SResponseT<CategoryDiscountDataObj> r = marketService.addCategoryDiscount(shopModel.getName(), getCurrentUser().getName(),discountPercentage,discountSubTypeValue);
            if(!r.isSuccess()){
                Notification.show(r.getMessage());
            }
        }
    }

    private void showDiscounts() {
        SResponseT<DiscountPolicyDataObj> res = marketService.getShopDiscountPolicy(getCurrentUser().getName(),shopModel.getName());
        if(!res.isSuccess()){
            Notification.show(res.getMessage());
            getUI().ifPresent(ui -> ui.navigate(""));
        }



        discounts = res.getData().getDiscountsById().values().stream().toList();
        discountGrid = new Grid<>(DiscountDataObj.class);
        discountGrid.setSelectionMode(Grid.SelectionMode.MULTI);
        discountGrid.setItems(discounts);

        // Add a column for the description
        Grid.Column<DiscountDataObj> newDescriptionC = discountGrid.addComponentColumn(discount -> {
            String description = discount.getDescription();
            if (description.length() > 20) {
                // Show the first 20 characters of the description followed by "..."
                description = description.substring(0, 20) + "...";
            }
            Span span = new Span(description);
            span.getStyle().set("cursor", "pointer");
            span.addClickListener(event -> {
                // Show the full description in a popup window when the user clicks on the cell
                Dialog dialog = new Dialog();
                TextArea textArea = new TextArea();
                textArea.setValue(discount.getDescription());
                textArea.setReadOnly(true);
                dialog.add(textArea);
                dialog.open();
            });
            return span;
        }).setHeader("description");

        // Add a column for the description
        Grid.Column<DiscountDataObj> newRuleC = discountGrid.addComponentColumn(discount -> {
            String ruleDescription = discount.getDiscountRule() == null ? "" : discount.getDiscountRule().toString();
            String FullDescription = ruleDescription + "";
            if (ruleDescription.length() > 20) {
                // Show the first 20 characters of the description followed by "..."
                ruleDescription = ruleDescription.substring(0, 20) + "...";
            }
            Span span = new Span(ruleDescription);
            span.getStyle().set("cursor", "pointer");
            span.addClickListener(event -> {
                // Show the full description in a popup window when the user clicks on the cell
                Dialog dialog = new Dialog();
                TextArea textArea = new TextArea();
                textArea.setValue(FullDescription);
                textArea.setReadOnly(true);
                dialog.add(textArea);
                dialog.open();
            });
            return span;
        }).setHeader("discountRule");

        discountGrid.getColumnByKey("description").setVisible(false);
        discountGrid.getColumnByKey("discountRule").setVisible(false);

        discountGrid.setColumnOrder(
                discountGrid.getColumnByKey("discountId"),
                discountGrid.getColumnByKey("type"),
                discountGrid.getColumnByKey("subtype"),
                discountGrid.getColumnByKey("percentage"),
                discountGrid.getColumnByKey("discountRule"),
                discountGrid.getColumnByKey("description"),
                newRuleC,
                newDescriptionC
        );

        add(discountGrid);
    }

}

