package FrontEnd.Views;

import BusinessLayer.Enums.ManagePermissionsEnum;
import BusinessLayer.Enums.ManageType;
import FrontEnd.Model.MemberRoleInShopModel;
import FrontEnd.Model.ShopModel;
import FrontEnd.Model.UserModel;
import FrontEnd.SResponse;
import FrontEnd.SResponseT;
import com.vaadin.flow.component.Component;
import com.vaadin.flow.component.Text;
import com.vaadin.flow.component.button.Button;
import com.vaadin.flow.component.checkbox.Checkbox;
import com.vaadin.flow.component.dialog.Dialog;
import com.vaadin.flow.component.grid.Grid;
import com.vaadin.flow.component.html.H3;
import com.vaadin.flow.component.html.H4;
import com.vaadin.flow.component.html.Label;
import com.vaadin.flow.component.html.Span;
import com.vaadin.flow.component.icon.Icon;
import com.vaadin.flow.component.icon.VaadinIcon;
import com.vaadin.flow.component.notification.Notification;
import com.vaadin.flow.component.orderedlayout.FlexComponent;
import com.vaadin.flow.component.orderedlayout.HorizontalLayout;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;
import com.vaadin.flow.component.textfield.TextField;
import com.vaadin.flow.router.BeforeEvent;
import com.vaadin.flow.router.HasUrlParameter;
import com.vaadin.flow.router.OptionalParameter;
import com.vaadin.flow.router.Route;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

@Route(value = "manage_roles")
public class ShopManageCrew extends BaseView implements HasUrlParameter<String> {

    protected ShopModel shopProfile;
    protected Button promoteButton;
    protected Button setOwnerButton;

    protected Button removeOwnerButton;
    protected Button viewPermissionsButton;

    protected String currentUser;
    protected Button setManagerButton;
    protected TextField newManagerTextField;
    protected MemberRoleInShopModel clickedRole;

    public HorizontalLayout scrollView;

    public ShopManageCrew() {
        // Your existing implementation
    }

    @Override
    protected void updateAfterUserNameChange(UserModel userModel) {
        // Your existing implementation
    }

    @Override
    public void setParameter(BeforeEvent event, @OptionalParameter String parameter) {
        currentUser = getCurrentUser().getName();
        if (parameter != null && !parameter.isEmpty()) {
            SResponseT<ShopModel> res = marketService.getShop(parameter);
            if (res.isSuccess()) {
                shopProfile = res.getData();
//                add(new Text(shopProfile.getName()));
                showShopProfileScreen();
            } else Notification.show(res.getMessage());
        }
    }

    protected void showShopProfileScreen() {
        // Title

        add(new H3("Shop Staff"));
        scrollView = new HorizontalLayout();
        scrollView.setWidth("100%");
        scrollView.getStyle().set("overflow-x", "auto");
        add(scrollView);

        updateShopStaff();



        // Buttons
        promoteButton = new Button("Promote To Owner" , e -> handlePromoteOwnerButtonClick());
        setDefaultStyle(promoteButton);

        removeOwnerButton = new Button("RemoveOwner", e -> handleRemoveOwnerButtonClick());
        setDefaultStyle(removeOwnerButton);


        viewPermissionsButton = new Button("ViewPermissions" , e -> handleViewPermissionsButtonClick2());
        setDefaultStyle(viewPermissionsButton);

        add(new HorizontalLayout(promoteButton, removeOwnerButton, viewPermissionsButton));

        newManagerTextField = new TextField();
        newManagerTextField.setPlaceholder("Enter new manager's username");
        add(newManagerTextField);

        setManagerButton = new Button("Set manager", e -> handleSetManagerButtonClick());
        setDefaultStyle(setManagerButton);


        setOwnerButton = new Button("Set Owner", e -> handleSetOwnerButtonClick());
        setDefaultStyle(setOwnerButton);

        add(new HorizontalLayout(setManagerButton, setOwnerButton));



    }

    private void setDefaultStyle(Button promoteButton) {
        promoteButton.getStyle().set("background-image", "linear-gradient(to right,#ffcc33 , #ffb347)");
        promoteButton.getStyle().set("color", "white");
    }

    protected void updateShopStaff() {
        SResponseT<List<MemberRoleInShopModel>> res = marketService.getShopManagersAndPermissions(currentUser,shopProfile.getName());
        if (res.isSuccess()) {
            List<MemberRoleInShopModel> shopRoles = res.getData();
            List<Component> roleComponents = shopRoles.stream()
                    .map(this::createRoleComponent)
                    .collect(Collectors.toList());
            scrollView.add(roleComponents.toArray(new Component[0]));
        } else {
            Notification.show(res.getMessage());
        }
    }

    protected Component createRoleComponent(MemberRoleInShopModel role) {
        VerticalLayout roleLayout = new VerticalLayout();
        roleLayout.setAlignItems(FlexComponent.Alignment.CENTER);
        roleLayout.setPadding(false);
        roleLayout.setSpacing(false);
        roleLayout.getStyle().set("border", "1px solid #ccc");
        roleLayout.getStyle().set("border-radius", "4px");
        roleLayout.getStyle().set("padding", "8px");
        roleLayout.getStyle().set("margin-right", "8px");
        roleLayout.getStyle().set("cursor", "pointer");
        roleLayout.setWidth("150px");

        roleLayout.add(new H4(role.getRoleUser()));
        roleLayout.add(new Span(role.getType().toString()));
        Icon icon = VaadinIcon.USER_CARD.create();
        icon.setSize("50px");
        roleLayout.add(icon);

        roleLayout.addClickListener(e -> handleRoleComponentClick(role));

        return roleLayout;
    }
    private void handleRemoveOwnerButtonClick() {
        if(clickedRole.getType() == ManageType.MANAGER) {
            Notification.show("Only an owner can be removed");
            return;
        }
        startVertificationDialog();
    }

    private void startVertificationDialog() {
        Dialog dialog = new Dialog();
        dialog.setCloseOnEsc(false);
        dialog.setCloseOnOutsideClick(false);

        Label message = new Label("Are you sure you want to remove the user? Removing them will remove all their subordinates.");

        Button okButton = new Button("Ok", event -> {
            SResponse res = marketService.removeShopOwner(currentUser,clickedRole.getRoleUser(),shopProfile.getName());
            if (!res.isSuccess() && res!=null) {
                Notification.show(res.getMessage());
            }
            else {
                Notification.show(clickedRole.getRoleUser() + " and his subordinates has been removed.");
            }
            dialog.close();
        });

        Button cancelButton = new Button("Cancel", event -> dialog.close());

        HorizontalLayout buttonLayout = new HorizontalLayout(okButton, cancelButton);
        dialog.add(new VerticalLayout(message, buttonLayout));
        dialog.open();
    }

    private void setOwner(String actor, String actOn, String shopName) {
        SResponse res = marketService.appointShopOwner(actor,actOn,shopName);
        if (!res.isSuccess() && res!=null) {
            Notification.show(res.getMessage());
        }
        else {
            Notification.show("User : "+actOn + " is an Owner now!");
        }
    }

    private void setManager(String actor, String actOn, String shopName) {
        SResponse res = marketService.appointShopManager(actor,actOn,shopName);

        if (!res.isSuccess() && res!=null) {
            Notification.show(res.getMessage());
        }
        else {
            Notification.show("User : "+actOn + " is a Manager now!");
        }

    }


    private void handleRoleComponentClick(MemberRoleInShopModel role) {
        // Handle click event, bind to the current user role
        clickedRole = role;
        Notification.show("User: " + role.getRoleUser() + ", Role: " + role.getType());
    }
    private void handleSetOwnerButtonClick() {
        String newOwnerUsername = newManagerTextField.getValue();
        setOwner(getCurrentUser().getName(),newOwnerUsername,shopProfile.getName());
    }

    private void handlePromoteOwnerButtonClick() {
        setOwner(getCurrentUser().getName(),clickedRole.getRoleUser(),shopProfile.getName());
    }
    private void handleSetManagerButtonClick() {
        String newManagerUsername = newManagerTextField.getValue();
        setManager(getCurrentUser().getName(),newManagerUsername,shopProfile.getName());
    }


    public void handleViewPermissionsButtonClick() {

        List<Integer> currentPermissions = clickedRole.getActivatedPermissions();
        int manageAccess = clickedRole.getManageKind().getValue();
        Dialog dialog = new Dialog();
        dialog.setWidth("600px");

        Grid<ManagePermissionsEnum> grid = new Grid<>();
        grid.setItems(Arrays.asList(ManagePermissionsEnum.values()));
        grid.addColumn(ManagePermissionsEnum::name).setHeader("Permission");
        grid.addComponentColumn(permission -> {
            Checkbox checkBox = new Checkbox();
            checkBox.setValue(currentPermissions.contains(permission.getValue()));
            return checkBox;
        }).setHeader("Activated");

        VerticalLayout layout = new VerticalLayout();
        layout.add(grid);

        Button changePermissionsButton = new Button("Change Permissions");
        changePermissionsButton.addClickListener(event -> {
            List<Integer> chosenPermissions = new ArrayList<>();
            for (ManagePermissionsEnum permission : grid.getSelectedItems()) {
                chosenPermissions.add(permission.getValue());
            }
            SResponseT<MemberRoleInShopModel> res = marketService.changeManagerPermissions(currentUser,clickedRole.getRoleUser(),

//            SResponseT<MemberRoleInShopModel> res = marketService.changeManagerPermissions(currentUser,clickedRole.getRoleUser(),
                    shopProfile.getName(),chosenPermissions);
            if(res!=null && !res.isSuccess()){
                Notification.show(res.getMessage());
            }
            if(res.isSuccess()){
                Notification.show("Permissions changes successfully");
//                clickedRole = res.getData();
            }

            //manager.setPermissions(chosenPermissions);
            dialog.close();
        });

        layout.add(changePermissionsButton);
        dialog.add(layout);
        dialog.open();
    }


    public void handleViewPermissionsButtonClick2() {

        List<Integer> currentPermissions = clickedRole.getActivatedPermissions();
        Dialog dialog = new Dialog();
        dialog.setWidth("600px");

        Grid<ManagePermissionsEnum> grid = new Grid<>();
        grid.setItems(Arrays.asList(ManagePermissionsEnum.values()));
        grid.addColumn(ManagePermissionsEnum::name).setHeader("Permission");
        grid.addComponentColumn(permission -> {
            Checkbox checkBox = new Checkbox();
            checkBox.setValue(currentPermissions.contains(permission.getValue()));
            return checkBox;
        }).setHeader("Activated");

        VerticalLayout layout = new VerticalLayout();
        layout.add(grid);

        Button changePermissionsButton = new Button("Change Permissions");
        changePermissionsButton.addClickListener(event -> {
            List<Integer> chosenPermissions = new ArrayList<>();
            for (ManagePermissionsEnum permission : grid.getSelectedItems()) {
                chosenPermissions.add(permission.getValue());
            }
            SResponseT<MemberRoleInShopModel> res = marketService.changeManagerPermissions(currentUser,clickedRole.getRoleUser(),

//            SResponseT<MemberRoleInShopModel> res = marketService.changeManagerPermissions(currentUser,clickedRole.getRoleUser(),
                    shopProfile.getName(),chosenPermissions);
            if(res!=null && !res.isSuccess()){
                Notification.show(res.getMessage());
            }
            if(res.isSuccess()){
                Notification.show("Permissions changes successfully");
//                clickedRole = res.getData();
            }

            //manager.setPermissions(chosenPermissions);
            dialog.close();
        });

        layout.add(changePermissionsButton);
        dialog.add(layout);
        dialog.open();
    }
}