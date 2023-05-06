package FrontEnd.Views;

import BusinessLayer.Enums.UserType;

import FrontEnd.SResponse;
import FrontEnd.SResponseT;
import ServiceLayer.DataObjects.PurchasePolicyDataObj;
import FrontEnd.MarketService;
import FrontEnd.Model.UserModel;
import ServiceLayer.ResponseT;
import com.vaadin.flow.component.UI;
import com.vaadin.flow.component.button.Button;
import com.vaadin.flow.component.combobox.ComboBox;
import com.vaadin.flow.component.datepicker.DatePicker;
import com.vaadin.flow.component.dialog.Dialog;
import com.vaadin.flow.component.grid.Grid;
import com.vaadin.flow.component.html.Div;
import com.vaadin.flow.component.html.H3;
import com.vaadin.flow.component.html.Label;
import com.vaadin.flow.component.html.Span;
import com.vaadin.flow.component.notification.Notification;
import com.vaadin.flow.component.orderedlayout.HorizontalLayout;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;
import com.vaadin.flow.component.select.Select;
import com.vaadin.flow.component.textfield.IntegerField;
import com.vaadin.flow.component.textfield.TextField;
import com.vaadin.flow.component.timepicker.TimePicker;
import com.vaadin.flow.data.renderer.ComponentRenderer;
import com.vaadin.flow.router.BeforeEnterEvent;
import com.vaadin.flow.router.BeforeEnterObserver;
import com.vaadin.flow.router.PageTitle;
import com.vaadin.flow.router.Route;

import java.time.LocalDate;
import java.util.Collection;

@Route(value = "purchase_policy/:shopName")
@PageTitle("Purchase Policy")
public class PurchasePolicyView extends BaseView implements BeforeEnterObserver {

    private  MarketService marketService;
    private  UserModel currentUser;
    private  Grid<PurchasePolicyDataObj> policyGrid;
    private String shopName;

    public PurchasePolicyView() {
        //updateAfterUserNameChange(getCurrentUser());
    }

    @Override
    protected void updateAfterUserNameChange(UserModel userModel) {
        if(shopName == null)return;
        removeAll();
        add(getHorizontalLayout());
        marketService = MarketService.getInstance();
        currentUser = getCurrentUser();

        H3 pageTitle = new H3("Purchase Policies");
        add(pageTitle);

        policyGrid = new Grid<>(PurchasePolicyDataObj.class);
        policyGrid.setColumns("id", "name");
        policyGrid.getColumnByKey("name").setWidth("880px");
        policyGrid.setSizeFull();

        // Set custom styles for the active policy
        policyGrid.setClassNameGenerator(policy -> {
            SResponseT<Integer> activePolicyResponse = marketService.getActivePurchasePolicyId(getCurrentUser().getName(), shopName);
            if (!activePolicyResponse.isSuccess()) {
                Notification.show("Failed to get active purchase policy");
                // Handle the failure case if needed (e.g., display an error message)
                return "inactive-policy";
            }

            Integer activePolicyId = activePolicyResponse.getData();
            return policy.getId() == (activePolicyId) ? "active-policy" : "inactive-policy";
        });

        UI.getCurrent().getPage().addStyleSheet(
                ".active-policy { background-color: #FFA500; }" // Bright orange color
        );

        // Add 'Set as Active' button column
        policyGrid.addComponentColumn(policy -> {
            Button setActiveButton = new Button("Set as Active");
            setActiveButton.addClickListener(e -> {
                SResponse setActiveResponse = marketService.setActivePurchasePolicy(getCurrentUser().getName(), shopName, policy.getId());
                if (setActiveResponse.isSuccess()) {
                    updatePolicyGrid();
                } else {
                    Notification.show("Failed set active");
                    // Handle the failure case if needed (e.g., display an error message)
                }
            });
            return setActiveButton;
        }).setHeader("Actions");


        add(policyGrid);
        updatePolicyGrid();

        Button createSimplePolicyButton = new Button("Create Simple Policy");
        createSimplePolicyButton.addClickListener(e -> openCreateSimplePolicyDialog());

        Button createComplexPolicyButton = new Button("Create Complex Policy");
        createComplexPolicyButton.addClickListener(e -> openCreateComplexPolicyDialog());
        Button removeActivePolicyButton = new Button("Remove Active Policy");
        removeActivePolicyButton.addClickListener(e -> {
            SResponse removeActivePolicyResponse = marketService.setActivePurchasePolicy(getCurrentUser().getName(), shopName, -1);
            if(removeActivePolicyResponse.isSuccess()){
                updatePolicyGrid();
            } else {
                // Handle the failure case if needed (e.g., display an error message)
            }
        });

        HorizontalLayout buttonsLayout = new HorizontalLayout(createSimplePolicyButton, createComplexPolicyButton,removeActivePolicyButton);
        add(buttonsLayout);

        // Add custom CSS styles
        getStyle().set("padding", "1rem");
        buttonsLayout.getStyle().set("margin-top", "1rem");
    }

    private void updatePolicyGrid() {
        Notification.show("shopName : "+shopName);

        SResponseT<Collection<PurchasePolicyDataObj>> policiesResponse = marketService.getAllPurchasePolicies(currentUser.getName(), shopName);

        if (policiesResponse.isSuccess()) {
            policyGrid.setItems(policiesResponse.getData());
        } else {
            Notification.show("Failed to load policies "+policiesResponse.getMessage());
            // Show an error message
        }

    }

    private void openCreateSimplePolicyDialog() {
        Dialog dialog = new Dialog();
        dialog.setWidth("400px");

        VerticalLayout layout = new VerticalLayout();
        layout.setPadding(false);

        ComboBox<String> policyTypeComboBox = new ComboBox<>("Policy Type");
        policyTypeComboBox.setItems("Age Constraint", "Quantity Constraint", "Date Constraint", "Time Constraint");
        policyTypeComboBox.setRequired(true);

        Button createPolicyButton = new Button("Create Policy", e -> createSimplePolicy(policyTypeComboBox.getValue()));
        createPolicyButton.getStyle().set("background-image", "linear-gradient(to right,#ffcc33 , #ffb347)");
        createPolicyButton.getStyle().set("color", "white");

        layout.add(policyTypeComboBox, createPolicyButton);
        dialog.add(layout);
        dialog.open();
    }

    private void createSimplePolicy(String policyType) {
        if (policyType == null) {
            Notification.show("Please select a policy type");
            return;
        }

        switch (policyType) {
            case "Age Constraint":
                openAgeConstraintDialog();
                break;
            case "Quantity Constraint":
                openQuantityConstraintDialog();
                break;
            case "Date Constraint":
                openDateConstraintDialog();
                break;
            case "Time Constraint":
                openTimeConstraintDialog();
                break;
            default:
                Notification.show("Invalid policy type");
                break;
        }
    }

    private void openAgeConstraintDialog() {
        Dialog dialog = new Dialog();
        dialog.setWidth("400px");

        VerticalLayout layout = new VerticalLayout();
        layout.setPadding(false);
        ComboBox<String> productOrCategoryComboBox = new ComboBox<>("Constraint On:");
        productOrCategoryComboBox.setItems("Product", "Category");
        productOrCategoryComboBox.setRequired(true);

        TextField productName = new TextField("Name");
        ComboBox<String> policyActionComboBox = new ComboBox<>("Action");
        policyActionComboBox.setItems("Allow", "Restrict");
        policyActionComboBox.setRequired(true);

        IntegerField startAge = new IntegerField("Start Age");
        startAge.setRequired(true);
        IntegerField endAge = new IntegerField("End Age");
        endAge.setRequired(true);

        Button createPolicyButton = new Button("Create Policy", e -> {
            boolean isProduct = productOrCategoryComboBox.getValue().equals("Product");
            String toConstraint = productName.getValue();
            boolean positive = policyActionComboBox.getValue().equals("Allow");
            int sAge = startAge.getValue();
            int eAge = endAge.getValue();
            SResponse res = marketService.addAgePurchasePolicy(getCurrentUser().getName(),shopName,isProduct,toConstraint,positive,sAge,eAge);
            if(!res.isSuccess())Notification.show("Error: "+res.getMessage());
            else {
                Notification.show("Res isSuccess!");
                updatePolicyGrid();
            }
        });
        createPolicyButton.getStyle().set("background-image", "linear-gradient(to right,#ffcc33 , #ffb347)");
        createPolicyButton.getStyle().set("color", "white");

        layout.add(productOrCategoryComboBox,productName, policyActionComboBox, startAge, endAge, createPolicyButton);
        dialog.add(layout);
        dialog.open();
    }

    private void openQuantityConstraintDialog() {
        Dialog dialog = new Dialog();
        dialog.setWidth("400px");

        VerticalLayout layout = new VerticalLayout();
        layout.setPadding(false);
        ComboBox<String> productOrCategoryComboBox = new ComboBox<>("Constraint On:");
        productOrCategoryComboBox.setItems("Product", "Category");
        productOrCategoryComboBox.setRequired(true);

        TextField productName = new TextField("Name");
        ComboBox<String> policyActionComboBox = new ComboBox<>("Action");
        policyActionComboBox.setItems("Allow", "Restrict");
        policyActionComboBox.setRequired(true);
        IntegerField minQuantity = new IntegerField("Min Quantity");
        minQuantity.setRequired(true);
        IntegerField maxQuantity = new IntegerField("Max Quantity");
        maxQuantity.setRequired(true);

        Button createPolicyButton = new Button("Create Policy", e -> {
            boolean isProduct = productOrCategoryComboBox.getValue().equals("Product");
            String toConstraint = productName.getValue();
            boolean positive = policyActionComboBox.getValue().equals("Allow");
            int min = minQuantity.getValue();
            int max = maxQuantity.getValue();
            SResponse res = marketService.addQuantityPurchasePolicy(getCurrentUser().getName(),shopName,isProduct,toConstraint,positive,min,max);
            if(!res.isSuccess())Notification.show(res.getMessage());
            else {
                Notification.show("Res isSuccess!");
                updatePolicyGrid();
            }
        });
        createPolicyButton.getStyle().set("background-image", "linear-gradient(to right,#ffcc33 , #ffb347)");
        createPolicyButton.getStyle().set("color", "white");

        layout.add(productOrCategoryComboBox,productName, policyActionComboBox,minQuantity, maxQuantity, createPolicyButton);
        dialog.add(layout);
        dialog.open();
    }

    private void openDateConstraintDialog() {
        Dialog dialog = new Dialog();
        dialog.setWidth("400px");

        VerticalLayout layout = new VerticalLayout();
        layout.setPadding(false);

        ComboBox<String> productOrCategoryComboBox = new ComboBox<>("Constraint On:");
        productOrCategoryComboBox.setItems("Product", "Category");
        productOrCategoryComboBox.setRequired(true);

        TextField productName = new TextField("Name");
        ComboBox<String> policyActionComboBox = new ComboBox<>("Action");
        policyActionComboBox.setItems("Allow", "Restrict");
        policyActionComboBox.setRequired(true);

        DatePicker startDate = new DatePicker("Start Date");
        startDate.setRequired(true);
        DatePicker endDate = new DatePicker("End Date");
        endDate.setRequired(true);

        Button createPolicyButton = new Button("Create Policy", e -> {
            boolean isProduct = productOrCategoryComboBox.getValue().equals("Product");
            String toConstraint = productName.getValue();
            boolean positive = policyActionComboBox.getValue().equals("Allow");
            LocalDate sDate = startDate.getValue();
            LocalDate eDate = endDate.getValue();
            SResponse res = marketService.addDatePurchasePolicy(getCurrentUser().getName(),shopName,isProduct,toConstraint,positive,sDate,eDate);
            if(!res.isSuccess())Notification.show(res.getMessage());
            else {
                Notification.show("Res isSuccess!");
                updatePolicyGrid();
            }
        });
        createPolicyButton.getStyle().set("background-image", "linear-gradient(to right,#ffcc33 , #ffb347)");
        createPolicyButton.getStyle().set("color", "white");

        layout.add(productOrCategoryComboBox,productName, policyActionComboBox, startDate, endDate, createPolicyButton);
        dialog.add(layout);
        dialog.open();
    }

    private void openTimeConstraintDialog() {
        Dialog dialog = new Dialog();
        dialog.setWidth("400px");

        VerticalLayout layout = new VerticalLayout();
        layout.setPadding(false);

        ComboBox<String> productOrCategoryComboBox = new ComboBox<>("Constraint On:");
        productOrCategoryComboBox.setItems("Product", "Category");
        productOrCategoryComboBox.setRequired(true);

        TextField productName = new TextField("Name");
        ComboBox<String> policyActionComboBox = new ComboBox<>("Action");
        policyActionComboBox.setItems("Allow", "Restrict");
        policyActionComboBox.setRequired(true);

        TimePicker startTime = new TimePicker("Start Time");
        startTime.setRequired(true);
        TimePicker endTime = new TimePicker("End Time");
        endTime.setRequired(true);

        Button createPolicyButton = new Button("Create Policy", e -> {
            boolean isProduct = productOrCategoryComboBox.getValue().equals("Product");
            String toConstraint = productName.getValue();
            boolean positive = policyActionComboBox.getValue().equals("Allow");
            int sTime = startTime.getValue().getHour();
            int eTime = endTime.getValue().getHour();
            SResponse res = marketService.addTimePurchasePolicy(getCurrentUser().getName(),shopName,isProduct,toConstraint,positive,sTime,eTime);
            if(!res.isSuccess())Notification.show(res.getMessage());
            else {
                Notification.show("Res isSuccess!");
                updatePolicyGrid();
            }
        });
        createPolicyButton.getStyle().set("background-image", "linear-gradient(to right,#ffcc33 , #ffb347)");
        createPolicyButton.getStyle().set("color", "white");

        layout.add(productOrCategoryComboBox,productName, policyActionComboBox, startTime, endTime, createPolicyButton);
        dialog.add(layout);
        dialog.open();
    }

    private void openCreateComplexPolicyDialog() {
        Dialog dialog = new Dialog();
        dialog.setWidth("400px");

        VerticalLayout layout = new VerticalLayout();
        layout.setPadding(false);

        ComboBox<String> complexPolicyTypeComboBox = new ComboBox<>("Complex Policy Type");
        complexPolicyTypeComboBox.setItems("AND Policy", "OR Policy","IF Policy");
        complexPolicyTypeComboBox.setRequired(true);

        Button createPolicyButton = new Button("Next", e -> {
            String selectedType = complexPolicyTypeComboBox.getValue();
            if ("AND Policy".equals(selectedType)) {
                openCreateAndPolicyDialog();
            } else if ("OR Policy".equals(selectedType)) {
                openCreateOrPolicyDialog();
            } else if ("IF Policy".equals(selectedType)) {
                openCreateIfPolicyDialog();
            }
        });

        layout.add(complexPolicyTypeComboBox, createPolicyButton);
        dialog.add(layout);
        dialog.open();
    }

    private void openCreateIfPolicyDialog() {
        Dialog dialog = new Dialog();
        dialog.setWidth("400px");

        VerticalLayout layout = new VerticalLayout();
        layout.setPadding(false);

        IntegerField firstPolicy = new IntegerField("First Policy");
        firstPolicy.setRequired(true);

        IntegerField secondPolicy = new IntegerField("Second Policy");
        secondPolicy.setRequired(true);


        Button createPolicyButton = new Button("Create Policy", e -> {
            int pid1 = firstPolicy.getValue();
            int pid2 = secondPolicy.getValue();
            SResponse res = marketService.addIfPurchasePolicy(getCurrentUser().getName(),shopName,pid1,pid2);
            if(!res.isSuccess())Notification.show(res.getMessage());
            else {
                Notification.show("Success!");
                updatePolicyGrid();
            }
        });
        createPolicyButton.getStyle().set("background-image", "linear-gradient(to right,#ffcc33 , #ffb347)");
        createPolicyButton.getStyle().set("color", "white");

        layout.add(firstPolicy,secondPolicy,createPolicyButton);
        dialog.add(layout);
        dialog.open();
    }

    private void openCreateAndPolicyDialog() {
        Dialog dialog = new Dialog();
        dialog.setWidth("400px");

        VerticalLayout layout = new VerticalLayout();
        layout.setPadding(false);

        IntegerField firstPolicy = new IntegerField("First Policy");
        firstPolicy.setRequired(true);

        IntegerField secondPolicy = new IntegerField("Second Policy");
        secondPolicy.setRequired(true);


        Button createPolicyButton = new Button("Create Policy", e -> {
            int pid1 = firstPolicy.getValue();
            int pid2 = secondPolicy.getValue();
            SResponse res = marketService.addAndPurchasePolicy(getCurrentUser().getName(),shopName,pid1,pid2);
            if(!res.isSuccess())Notification.show(res.getMessage());
            else {
                Notification.show("Success!");
                updatePolicyGrid();
            }
        });
        createPolicyButton.getStyle().set("background-image", "linear-gradient(to right,#ffcc33 , #ffb347)");
        createPolicyButton.getStyle().set("color", "white");

        layout.add(firstPolicy,secondPolicy,createPolicyButton);
        dialog.add(layout);
        dialog.open();
    }

    private void openCreateOrPolicyDialog() {
        Dialog dialog = new Dialog();
        dialog.setWidth("400px");

        VerticalLayout layout = new VerticalLayout();
        layout.setPadding(false);

        IntegerField firstPolicy = new IntegerField("First Policy");
        firstPolicy.setRequired(true);

        IntegerField secondPolicy = new IntegerField("Second Policy");
        secondPolicy.setRequired(true);

        Button createPolicyButton = new Button("Create Policy", e -> {
            int pid1 = firstPolicy.getValue();
            int pid2 = secondPolicy.getValue();
            SResponse res = marketService.addOrPurchasePolicy(getCurrentUser().getName(),shopName,pid1,pid2);
            if(!res.isSuccess())Notification.show(res.getMessage());
            else {
                Notification.show("Success!");
                updatePolicyGrid();
            }
        });
        createPolicyButton.getStyle().set("background-image", "linear-gradient(to right,#ffcc33 , #ffb347)");
        createPolicyButton.getStyle().set("color", "white");

        layout.add(firstPolicy,secondPolicy, createPolicyButton);
        dialog.add(layout);
        dialog.open();
    }

    @Override
    public void beforeEnter(BeforeEnterEvent event) {
        event.getRouteParameters().get("shopName").ifPresent(shopName -> {
            Notification.show("Before enter");
            this.shopName = shopName;
            updateAfterUserNameChange(getCurrentUser());
        });
    }
}