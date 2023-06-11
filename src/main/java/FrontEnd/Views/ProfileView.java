package FrontEnd.Views;

import BusinessLayer.Enums.UserType;
import FrontEnd.Model.UserModel;
import FrontEnd.SResponse;
import com.vaadin.flow.component.button.Button;
import com.vaadin.flow.component.combobox.ComboBox;
import com.vaadin.flow.component.datepicker.DatePicker;
import com.vaadin.flow.component.dialog.Dialog;
import com.vaadin.flow.component.icon.Icon;
import com.vaadin.flow.component.icon.VaadinIcon;
import com.vaadin.flow.component.notification.Notification;
import com.vaadin.flow.component.orderedlayout.HorizontalLayout;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;
import com.vaadin.flow.router.PageTitle;
import com.vaadin.flow.router.Route;

import java.time.LocalDate;

@Route("profile")
@PageTitle("Profile")
public class ProfileView extends BaseView {

    protected Button purchaseHistoryButton;
    protected Button viewMessagesButton;
    protected Button viewMyShopsButton;
    protected Button updateBirthdayButton;
    protected Button searchButton;
    protected Button adminButton;
    protected String PURCHASE_HISTORY = "user_history";
    protected String MY_NOTIFICATIONS = "user_notifications";
    protected String MY_SHOPS_SCREEN = "my_shops";
    protected String SEARCH_SCREEN = "search";
    protected String ADMIN_SCREEN = "admin";

    public ProfileView() {
        purchaseHistoryButton = new Button("Purchase History");
        enableButton(purchaseHistoryButton);

        viewMessagesButton = new Button("View Messages");
        enableButton(viewMessagesButton);

        viewMyShopsButton = new Button("View My Shops");
        enableButton(viewMyShopsButton);

        //Gabi Added
        updateBirthdayButton = new Button("Update Birthday");
        enableButton(updateBirthdayButton);

        Icon searchIcon = VaadinIcon.SEARCH.create();
        searchButton = new Button(searchIcon);
        searchButton.getStyle().set("background-image", "linear-gradient(to right,#ffcc33 , #ffb347)");
        searchButton.getStyle().set("color", "white");

        adminButton = new Button("Admin");
        adminButton.getStyle().set("background-color", "#FF8C00");
        adminButton.getStyle().set("color", "white");

        HorizontalLayout buttonsLayout = new HorizontalLayout(purchaseHistoryButton, viewMessagesButton, viewMyShopsButton,updateBirthdayButton, searchButton, adminButton);
        buttonsLayout.setWidthFull();
        buttonsLayout.setMargin(true);
        buttonsLayout.setSpacing(true);

        VerticalLayout mainLayout = new VerticalLayout(buttonsLayout);
        mainLayout.setMargin(true);
        mainLayout.setSpacing(true);
        add(mainLayout);
        setClickListenersAndVisibility();
    }

    protected void setClickListenersAndVisibility() {
        purchaseHistoryButton.addClickListener(e ->
                purchaseHistoryButton.getUI().ifPresent(ui ->
                        ui.navigate(PURCHASE_HISTORY))
        );
        viewMessagesButton.addClickListener(e ->
                viewMessagesButton.getUI().ifPresent(ui ->
                        ui.navigate(MY_NOTIFICATIONS))
        );
        viewMyShopsButton.addClickListener(e ->
                viewMyShopsButton.getUI().ifPresent(ui ->
                        ui.navigate(MY_SHOPS_SCREEN))
        );
        searchButton.addClickListener(e ->
                searchButton.getUI().ifPresent(ui ->
                        ui.navigate(SEARCH_SCREEN))
        );
        updateBirthdayButton.addClickListener(e->handleUpdateBirthday());
        adminButton.addClickListener(e ->
                adminButton.getUI().ifPresent(ui ->
                        ui.navigate(ADMIN_SCREEN))
        );
        adminButton.setVisible(getCurrentUser().getUserType() == UserType.ADMIN);
    }

    private void handleUpdateBirthday() {
        Dialog dialog = new Dialog();
        dialog.setWidth("400px");

        VerticalLayout layout = new VerticalLayout();
        layout.setPadding(false);


        DatePicker birthDate = new DatePicker("Birth Date");
        birthDate.setRequired(true);

        Button updateButton = new Button("Update Birthday", e -> {
            LocalDate bDate = birthDate.getValue();
            SResponse res = marketService.updateUserBirthDay(getCurrentUser().getName(), bDate);
            if(!res.isSuccess()) Notification.show(res.getMessage());
            else{
                Notification.show("Birthday successfully updated to "+bDate.toString());
            }
            dialog.close();
        });
        updateButton.getStyle().set("background-image", "linear-gradient(to right,#ffcc33 , #ffb347)");
        updateButton.getStyle().set("color", "white");

        layout.add(birthDate,updateButton);
        dialog.add(layout);
        dialog.open();
    }

    @Override
    protected void updateAfterUserNameChange(UserModel userModel) {
        if (adminButton != null)
            adminButton.setVisible(userModel.getUserType() == UserType.ADMIN);
    }
}