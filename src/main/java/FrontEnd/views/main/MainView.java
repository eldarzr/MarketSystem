package FrontEnd.Views.main;

import BusinessLayer.Market;
import FrontEnd.MarketService;
import FrontEnd.Model.UserModel;
import ServiceLayer.Response;
import ServiceLayer.ServiceMarket;
import com.vaadin.flow.component.Component;
import com.vaadin.flow.component.Composite;
import com.vaadin.flow.component.Key;
import com.vaadin.flow.component.UI;
import com.vaadin.flow.component.button.Button;
import com.vaadin.flow.component.checkbox.Checkbox;
import com.vaadin.flow.component.dependency.CssImport;
import com.vaadin.flow.component.html.Div;
import com.vaadin.flow.component.html.H1;
import com.vaadin.flow.component.html.H2;
import com.vaadin.flow.component.html.Label;
import com.vaadin.flow.component.notification.Notification;
import com.vaadin.flow.component.orderedlayout.HorizontalLayout;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;
import com.vaadin.flow.component.textfield.EmailField;
import com.vaadin.flow.component.textfield.PasswordField;
import com.vaadin.flow.component.textfield.TextField;
import com.vaadin.flow.router.PageTitle;
import com.vaadin.flow.router.Route;
import com.vaadin.flow.router.RouterLink;
import com.vaadin.flow.server.VaadinService;
import com.vaadin.flow.server.VaadinSession;

import javax.activation.MailcapCommandMap;

@Route("")
public class MainView extends BaseView {

    public MainView() {
//        Label sessionIdLabel = new Label("Session ID: " + userModel.getName());

        Button registerButton = new Button("Register");
        registerButton.addClickListener(e ->
                registerButton.getUI().ifPresent(ui ->
                        ui.navigate("register"))
        );
        Button loginButton = new Button("Login");
        loginButton.addClickListener(e ->
                loginButton.getUI().ifPresent(ui ->
                        ui.navigate("login"))
        );
        Button searchButton = new Button("Search");
        searchButton.addClickListener(e ->
                searchButton.getUI().ifPresent(ui ->
                        ui.navigate("search"))
        );
        add(registerButton, loginButton, searchButton);
    }

}