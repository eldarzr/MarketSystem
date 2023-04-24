package FrontEnd.Views.main;

import BusinessLayer.Market;
import FrontEnd.MarketService;
import FrontEnd.Model.UserModel;
import FrontEnd.SResponseT;
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

@Route("register")
public class RegisterView extends BaseView {

	public RegisterView() {
		TextField username = new TextField("Username");
		EmailField emailField = new EmailField("Email");
		PasswordField password1 = new PasswordField("Password");
		PasswordField password2 = new PasswordField("Confirm password");
		Button registerButton = new Button("Register");
		registerButton.addClickListener(click -> {
			if (register(username.getValue(), password1.getValue(),
					password2.getValue(), emailField.getValue())){
				getUI().ifPresent(ui ->
						ui.navigate(""));
			}
		});
		registerButton.addClickShortcut(Key.ENTER);
		VerticalLayout verticalLayout = new VerticalLayout(emailField, username, password1, password2, registerButton);
		verticalLayout.setWidthFull();
		add(
				new H1("Register"),
				verticalLayout
		);
	}

	private boolean register(String username, String password1, String password2, String email) {
		if (username.trim().isEmpty()) {
			Notification.show("Enter a username");
		} else if (password1.isEmpty()) {
			Notification.show("Enter a password");
		} else if (!password1.equals(password2)) {
			Notification.show("Passwords don't match");
		} else if (email.trim().isEmpty()) {
			Notification.show("Enter an email address");
		} else {
			SResponseT <UserModel> res = marketService.register(username, email, password1);
			Notification.show( res.isSuccess() ? "Check your email." : res.getMessage());
			return res.isSuccess();
		}
		return false;
	}

}