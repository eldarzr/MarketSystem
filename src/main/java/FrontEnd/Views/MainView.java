package FrontEnd.Views;

import BusinessLayer.Enums.UserType;
import FrontEnd.Model.UserModel;
import com.vaadin.flow.component.button.Button;
import com.vaadin.flow.component.icon.Icon;
import com.vaadin.flow.component.icon.VaadinIcon;
import com.vaadin.flow.router.Route;

@Route("")
public class MainView extends BaseView {

    Button registerButton;
    Button loginButton;
    Button searchButton;
    Button adminButton;
    Button profileButton;
    public MainView() {
//        Label sessionIdLabel = new Label("Session ID: " + userModel.getName());

//        Image profileImage = new Image("img/profilePic.jpg", "Profile picture");
        Icon profileIcon = VaadinIcon.USER.create();
        profileButton = new Button(profileIcon);
        profileButton.addClickListener(e ->
                profileButton.getUI().ifPresent(ui ->
                        ui.navigate("profile"))
        );
//        add(profileButton); // Add the button to the layout


        registerButton = new Button("Register");
        registerButton.getStyle().set("background-image", "linear-gradient(to right,#ffcc33 , #ffb347)");
        registerButton.getStyle().set("color", "white");
        registerButton.addClickListener(e ->
                registerButton.getUI().ifPresent(ui ->
                        ui.navigate("register"))
        );
        loginButton = new Button("Login");
//        loginButton.getStyle().set("background-image", "linear-gradient(to right, #00c6ff, #0072ff)");
        loginButton.getStyle().set("background-image", "linear-gradient(to right, #ffb347, #ffcc33)");
        loginButton.getStyle().set("color", "white");
//        loginButton.getStyle().set("transition", "background-color 0.5s ease");

        loginButton.addClickListener(e ->
                loginButton.getUI().ifPresent(ui ->
                        ui.navigate("login"))
        );
        searchButton = new Button("Search");
        searchButton.getStyle().set("background-image", "linear-gradient(to right,#ffcc33 , #ffb347)");
        searchButton.getStyle().set("color", "white");
        searchButton.addClickListener(e ->
                searchButton.getUI().ifPresent(ui ->
                        ui.navigate("search"))
        );
        adminButton = new Button("Admin");
        adminButton.getStyle().set("border-radius", "20px");
        adminButton.getStyle().set("color", "white");
        adminButton.getStyle().set("background-color", "#FF8C00");

        adminButton.setVisible(getCurrentUser().getUserType() == UserType.ADMIN);
        adminButton.addClickListener(e ->
                adminButton.getUI().ifPresent(ui ->
                        ui.navigate("admin"))
        );
        add(registerButton, loginButton, searchButton, adminButton,profileButton);
    }

    @Override
    protected void updateAfterUserNameChange(UserModel userModel) {
        adminButton.setVisible(userModel.getUserType() == UserType.ADMIN);
        loginButton.setVisible(userModel.getUserType() == UserType.GUEST);
    }

}