package FrontEnd.views;

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

    Button purchaseHistoryButton;
    Button viewMessagesButton;
    Button viewMyShopsButton;
    Button searchButton;
    Button adminButton;

    public ProfileView() {
        purchaseHistoryButton = new Button("Purchase History");
        purchaseHistoryButton.getStyle().set("background-color", "#FF8C00");
        purchaseHistoryButton.getStyle().set("color", "white");

        viewMessagesButton = new Button("View Messages");
        viewMessagesButton.getStyle().set("background-color", "#FF8C00");
        viewMessagesButton.getStyle().set("color", "white");
        viewMessagesButton.addClickListener(e ->
                viewMessagesButton.getUI().ifPresent(ui ->
                        ui.navigate("view-messages"))
        );

        viewMyShopsButton = new Button("View My Shops");
        viewMyShopsButton.getStyle().set("background-color", "#FF8C00");
        viewMyShopsButton.getStyle().set("color", "white");
        viewMyShopsButton.addClickListener(e ->
                viewMyShopsButton.getUI().ifPresent(ui ->
                        ui.navigate("my-shops"))
        );

        Icon searchIcon = VaadinIcon.SEARCH.create();
        searchButton = new Button(searchIcon);
        searchButton.getStyle().set("background-image", "linear-gradient(to right,#ffcc33 , #ffb347)");
        searchButton.getStyle().set("color", "white");
        searchButton.addClickListener(e ->
                searchButton.getUI().ifPresent(ui ->
                        ui.navigate("search"))
        );

        adminButton = new Button("Admin");
        adminButton.getStyle().set("background-color", "#FF8C00");
        adminButton.getStyle().set("color", "white");
        adminButton.setVisible(getCurrentUser().getUserType() == UserType.ADMIN);
        adminButton.addClickListener(e ->
                adminButton.getUI().ifPresent(ui ->
                        ui.navigate("admin"))
        );

        HorizontalLayout buttonsLayout = new HorizontalLayout(purchaseHistoryButton, viewMessagesButton, viewMyShopsButton, searchButton, adminButton);
        buttonsLayout.setWidthFull();
        buttonsLayout.setMargin(true);
        buttonsLayout.setSpacing(true);

        VerticalLayout mainLayout = new VerticalLayout(buttonsLayout);
        mainLayout.setMargin(true);
        mainLayout.setSpacing(true);
        add(mainLayout);
    }

    @Override
    protected void updateAfterUserNameChange(UserModel userModel) {
        adminButton.setVisible(userModel.getUserType() == UserType.ADMIN);
    }
}