package FrontEnd.views.main;

import BusinessLayer.Market;
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
import com.vaadin.flow.component.notification.Notification;
import com.vaadin.flow.component.orderedlayout.HorizontalLayout;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;
import com.vaadin.flow.component.textfield.EmailField;
import com.vaadin.flow.component.textfield.PasswordField;
import com.vaadin.flow.component.textfield.TextField;
import com.vaadin.flow.router.PageTitle;
import com.vaadin.flow.router.Route;
import com.vaadin.flow.router.RouterLink;

import javax.activation.MailcapCommandMap;

@Route("")
public class MainView extends VerticalLayout {

    ServiceMarket serviceMarket = new ServiceMarket();

    public MainView() {
        Button registerButton = new Button("Register");
        registerButton.addClickListener(e ->
                registerButton.getUI().ifPresent(ui ->
                        ui.navigate("register"))
        );
        add(registerButton);
    }

}