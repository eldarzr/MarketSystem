package FrontEnd.Views;

import BusinessLayer.Enums.ManageType;
import FrontEnd.Model.MemberRoleInShopModel;
import FrontEnd.Model.PendingOwnerModel;
import FrontEnd.Model.ShopModel;
import FrontEnd.Model.UserModel;
import FrontEnd.SResponse;
import FrontEnd.SResponseT;
import com.vaadin.flow.component.Component;
import com.vaadin.flow.component.button.Button;
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
import com.vaadin.flow.data.renderer.ComponentRenderer;
import com.vaadin.flow.router.BeforeEvent;
import com.vaadin.flow.router.HasUrlParameter;
import com.vaadin.flow.router.OptionalParameter;
import com.vaadin.flow.router.Route;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Route(value = "manage_roles")
public class ShopManageCrew extends BaseView implements HasUrlParameter<String> {
    protected Button approvalsButton;
//    protected ListBox<String> pendingOwnersList;
    private Grid<String> pendingOwnersGrid;
    private List<String> pendingOwnersList;


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
        if (checkIfFirstScreen(event)) return;
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
        promoteButton = new Button("Promote To Owner", e -> handlePromoteOwnerButtonClick());
        setDefaultStyle(promoteButton);

        removeOwnerButton = new Button("RemoveOwner", e -> handleRemoveOwnerButtonClick());
        setDefaultStyle(removeOwnerButton);


        viewPermissionsButton = new Button("ViewPermissions", e -> handleViewPermissionsButtonClick2());
        setDefaultStyle(viewPermissionsButton);

        add(new HorizontalLayout(removeOwnerButton, viewPermissionsButton));
        newManagerTextField = new TextField();
        newManagerTextField.setPlaceholder("Enter new manager's username");
        add(newManagerTextField);

        setManagerButton = new Button("Set manager", e -> handleSetManagerButtonClick());
        setDefaultStyle(setManagerButton);


        setOwnerButton = new Button("Set Owner", e -> handleSetOwnerButtonClick());
        setDefaultStyle(setOwnerButton);

        approvalsButton = new Button("Approvals", e -> handleApprovalsButtonClick());
        setDefaultStyle(approvalsButton);

        // Add it to your layout
        add(new HorizontalLayout(setManagerButton, setOwnerButton, approvalsButton));


    }

    private void setDefaultStyle(Button promoteButton) {
        promoteButton.getStyle().set("background-image", "linear-gradient(to right,#ffcc33 , #ffb347)");
        promoteButton.getStyle().set("color", "white");
    }

    protected void updateShopStaff() {
        scrollView.removeAll();
        SResponseT<List<MemberRoleInShopModel>> res = marketService.getShopManagersAndPermissions(currentUser, shopProfile.getName());
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
        if (clickedRole.getType() == ManageType.MANAGER) {
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
            SResponse res = marketService.removeShopOwner(currentUser, clickedRole.getRoleUser(), shopProfile.getName());
            if (!res.isSuccess() && res != null) {
                Notification.show(res.getMessage());
            } else {
                Notification.show(clickedRole.getRoleUser() + " and his subordinates has been removed.");
                refreshView();
            }
            dialog.close();
        });

        Button cancelButton = new Button("Cancel", event -> dialog.close());

        HorizontalLayout buttonLayout = new HorizontalLayout(okButton, cancelButton);
        dialog.add(new VerticalLayout(message, buttonLayout));
        dialog.open();
    }

    private void setOwner(String actor, String actOn, String shopName) {
        SResponse res = marketService.appointShopOwner(actor, actOn, shopName);
        if (!res.isSuccess() && res != null) {
            Notification.show(res.getMessage());
        } else {

//            Notification.show("User : " + actOn + " is an Owner now!");
        }
    }

    private void setManager(String actor, String actOn, String shopName) {
        SResponse res = marketService.appointShopManager(actor, actOn, shopName);

        if (!res.isSuccess() && res != null) {
            Notification.show(res.getMessage());
        } else {
            Notification.show("User : " + actOn + " is a Manager now!");
        }

    }

    protected void refreshView() {
        scrollView.removeAll();
        updateShopStaff();
    }


    private void handleRoleComponentClick(MemberRoleInShopModel role) {
        // Handle click event, bind to the current user role
        clickedRole = role;
        Notification.show("User: " + role.getRoleUser() + ", Role: " + role.getType());
    }

    private void handleSetOwnerButtonClick() {
        String newOwnerUsername = newManagerTextField.getValue();
        setOwner(getCurrentUser().getName(), newOwnerUsername, shopProfile.getName());
        refreshView();

    }

    private void handlePromoteOwnerButtonClick() {
        setOwner(getCurrentUser().getName(), clickedRole.getRoleUser(), shopProfile.getName());
    }

    private void handleSetManagerButtonClick() {
        String newManagerUsername = newManagerTextField.getValue();
        setManager(getCurrentUser().getName(), newManagerUsername, shopProfile.getName());
        refreshView();

    }


    public void handleViewPermissionsButtonClick2() {

        // Determine the current manage access type from the clickedRole
        int manageAccess = clickedRole.getManageKind().getValue();
        Label title = new Label("Choose the required manage access");
        Dialog dialog = new Dialog();
        dialog.setWidth("600px");

        Button readOnlyButton = new Button("Read Only");
        setDefaultStyle(readOnlyButton);
        Button managePermissionsButton = new Button("Manage Permissions");
        setDefaultStyle(managePermissionsButton);
        Button fullAccessButton = new Button("Full Access");
        setDefaultStyle(fullAccessButton);

        // An array of buttons for easy access
        Button[] accessButtons = new Button[]{readOnlyButton, managePermissionsButton, fullAccessButton};

        // Set the initial state of the buttons according to the clickedRole
        for (int i = 0; i < accessButtons.length; i++) {
            if (i == manageAccess) {
                accessButtons[i].getStyle().set("opacity", "1");
            } else {
                accessButtons[i].getStyle().set("opacity", "0.5");
            }
        }

        // Add click listeners to each button
        readOnlyButton.addClickListener(event -> highlightButton(accessButtons, 0));
        managePermissionsButton.addClickListener(event -> highlightButton(accessButtons, 1));
        fullAccessButton.addClickListener(event -> highlightButton(accessButtons, 2));

        HorizontalLayout layout = new HorizontalLayout();
        layout.add(new VerticalLayout(title),readOnlyButton, managePermissionsButton, fullAccessButton);

        Button changePermissionsButton = new Button("Change Permissions");
        setDefaultStyle(changePermissionsButton);
        changePermissionsButton.addClickListener(event -> {
            // Determine which button is highlighted and save its index
            int chosenAccess = -1;
            for (int i = 0; i < accessButtons.length; i++) {
                if ("1".equals(accessButtons[i].getStyle().get("opacity"))) {
                    chosenAccess = i;
                    break;
                }
            }

            // Do something with chosenAccess, e.g. save it to the clickedRole
            SResponseT<MemberRoleInShopModel> res = marketService.changeManagerAccess(currentUser,clickedRole.getRoleUser(), shopProfile.getName(),chosenAccess);
            if (res != null && !res.isSuccess()) {
                Notification.show(res.getMessage());
            }
            if (res.isSuccess()) {
                Notification.show("Permissions changes successfully");
                updateShopStaff();
            }
        dialog.close();
        });

        layout.add(new VerticalLayout(changePermissionsButton));
        dialog.add(layout);
        dialog.open();
    }

    private void highlightButton(Button[] buttons, int indexToHighlight) {
        // Highlight the selected button and dim others
        for (int i = 0; i < buttons.length; i++) {
            if (i == indexToHighlight) {
                buttons[i].getStyle().set("opacity", "1");
            } else {
                buttons[i].getStyle().set("opacity", "0.5");
            }
        }
    }

    private void handleApprovalsButtonClick() {
        SResponseT<List<PendingOwnerModel>> res = marketService.getPendingsOwners(getCurrentUser().getName(),shopProfile.getName());
        if (res.isSuccess()) {
            List<PendingOwnerModel> pendingOwners = res.getData();
            openApprovalsDialog(pendingOwners);
        } else {
            Notification.show(res.getMessage());
        }
    }



    private void openApprovalsDialog(List<PendingOwnerModel> pendingOwners) {
        Dialog dialog = new Dialog();
        dialog.setWidth("600px");
        pendingOwnersGrid = new Grid<>();
//        pendingOwnersList = new ArrayList<>(pendingOwners);
        pendingOwnersList = acheivePendingOwnersName(pendingOwners);
        pendingOwnersGrid.setItems(pendingOwnersList);

        pendingOwnersGrid.addColumn(new ComponentRenderer<>(owner -> {
            HorizontalLayout layout = new HorizontalLayout();
            layout.setWidth("100%");
            layout.setJustifyContentMode(FlexComponent.JustifyContentMode.BETWEEN);
            layout.setDefaultVerticalComponentAlignment(FlexComponent.Alignment.CENTER);

            Span ownerSpan = new Span(owner);
            Button approveButton = new Button("Approve", event -> handleApproveButtonClick(owner));
            setDefaultStyle(approveButton);


            layout.add(ownerSpan, approveButton);
            return layout;
        }));

        dialog.add(pendingOwnersGrid);
        dialog.open();
    }

    private List<String> acheivePendingOwnersName(List<PendingOwnerModel> pendingOwners) {
        List<String> list = new ArrayList<>();
        for(PendingOwnerModel p : pendingOwners){
            if(!p.getOwnerNames().contains(getCurrentUser().getName()));
                list.add(p.getPendingOwner());
        }
        return list;
    }

    private void handleApproveButtonClick(String ownerToApprove) {
        SResponse res = marketService.approveOwner(currentUser, ownerToApprove, shopProfile.getName());
        if (!res.isSuccess() && res != null) {
            Notification.show(res.getMessage());
        } else {
            Notification.show("You have been approved : "+ ownerToApprove + "to be an owner");
            pendingOwnersList.remove(ownerToApprove);  // Remove approved owner from the list
            pendingOwnersGrid.setItems(pendingOwnersList);  // Update the items in the Grid
        }
    }



//
//    private void handleApprovalsButtonClick() {
//        SResponseT<List<String>> res = marketService.getPendingsOwners(getCurrentUser().getName(),shopProfile.getName());
//        if (res.isSuccess()) {
//            List<String> pendingOwners = res.getData();
//            openApprovalsDialog(pendingOwners);
//        } else {
//            Notification.show(res.getMessage());
//        }
//    }
//
//    private void openApprovalsDialog(List<String> pendingOwners) {
//        Dialog dialog = new Dialog();
//        dialog.setWidth("600px");
//        VerticalLayout layout = new VerticalLayout();
//
//        pendingOwnersList = new ListBox<>();
//        pendingOwnersList.setItems(pendingOwners);
//
//        pendingOwnersList.addComponentAsFirst(new Span("Pending owners"));
//
//        for (String pendingOwner : pendingOwners) {
//            Button approveButton = new Button("Approve", e -> handleApproveButtonClick(pendingOwner));
//            setDefaultStyle(approveButton);
//            layout.add(new HorizontalLayout(new Label(pendingOwner), approveButton));
//        }
//
//        dialog.add(layout);
//        dialog.open();
//    }
//
//    private void handleApproveButtonClick(String ownerToApprove) {
//        SResponse res = marketService.approveOwner(currentUser, ownerToApprove, shopProfile.getName());
//        if (!res.isSuccess() && res != null) {
//            Notification.show(res.getMessage());
//        } else {
//            Notification.show(ownerToApprove + " has been approved as an owner.");
//            refreshView();
//        }
//    }

}