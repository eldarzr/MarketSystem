package FrontEnd.Views;

import BusinessLayer.Enums.UserType;
import FrontEnd.Model.UserModel;
import com.vaadin.flow.component.button.Button;
import com.vaadin.flow.component.icon.Icon;
import com.vaadin.flow.component.icon.VaadinIcon;
import com.vaadin.flow.component.notification.Notification;
import com.vaadin.flow.component.orderedlayout.HorizontalLayout;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;
import com.vaadin.flow.router.PageTitle;
import com.vaadin.flow.router.Route;
import com.vaadin.flow.router.RouterLink;

@Route("profile")
@PageTitle("Profile")
public class ProfileView extends BaseView {

    protected Button purchaseHistoryButton;
    protected Button viewMessagesButton;
    protected Button viewMyShopsButton;
    protected Button searchButton;
    protected Button adminButton;
    protected String PURCHASE_HISTORY = "purchase_history";
    protected String VIEW_MESSAGES_SCREEN = "view_messages";
    protected String MY_SHOPS_SCREEN = "my_shops";
    protected String SEARCH_SCREEN = "search";
    protected String ADMIN_SCREEN = "admin";

    public ProfileView() {
        purchaseHistoryButton = new Button("Purchase History");
        purchaseHistoryButton.getStyle().set("background-color", "#FF8C00");
        purchaseHistoryButton.getStyle().set("color", "white");

        viewMessagesButton = new Button("View Messages");
        viewMessagesButton.getStyle().set("background-color", "#FF8C00");
        viewMessagesButton.getStyle().set("color", "white");

        viewMyShopsButton = new Button("View My Shops");
        viewMyShopsButton.getStyle().set("background-color", "#FF8C00");
        viewMyShopsButton.getStyle().set("color", "white");

        Icon searchIcon = VaadinIcon.SEARCH.create();
        searchButton = new Button(searchIcon);
        searchButton.getStyle().set("background-image", "linear-gradient(to right,#ffcc33 , #ffb347)");
        searchButton.getStyle().set("color", "white");

        adminButton = new Button("Admin");
        adminButton.getStyle().set("background-color", "#FF8C00");
        adminButton.getStyle().set("color", "white");

        HorizontalLayout buttonsLayout = new HorizontalLayout(purchaseHistoryButton, viewMessagesButton, viewMyShopsButton, searchButton, adminButton);
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
                        ui.navigate(VIEW_MESSAGES_SCREEN))
        );
        viewMyShopsButton.addClickListener(e ->
                viewMyShopsButton.getUI().ifPresent(ui ->
                        ui.navigate(MY_SHOPS_SCREEN))
        );
        searchButton.addClickListener(e ->
                searchButton.getUI().ifPresent(ui ->
                        ui.navigate(SEARCH_SCREEN))
        );
        adminButton.addClickListener(e ->
                adminButton.getUI().ifPresent(ui ->
                        ui.navigate(ADMIN_SCREEN))
        );
        adminButton.setVisible(getCurrentUser().getUserType() == UserType.ADMIN);
    }

    @Override
    protected void updateAfterUserNameChange(UserModel userModel) {
        if (adminButton != null)
            adminButton.setVisible(userModel.getUserType() == UserType.ADMIN);
    }
}