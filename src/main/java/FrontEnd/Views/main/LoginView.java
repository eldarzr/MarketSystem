package FrontEnd.Views.main;

import FrontEnd.MarketService;
import FrontEnd.Model.UserModel;
import FrontEnd.SResponseT;
import com.vaadin.flow.component.Key;
import com.vaadin.flow.component.button.Button;
import com.vaadin.flow.component.html.H1;
import com.vaadin.flow.component.notification.Notification;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;
import com.vaadin.flow.component.textfield.EmailField;
import com.vaadin.flow.component.textfield.PasswordField;
import com.vaadin.flow.component.textfield.TextField;
import com.vaadin.flow.router.Route;

@Route("login")
public class LoginView extends VerticalLayout {

	MarketService marketService = new MarketService();

	public LoginView() {
		TextField username = new TextField("Username");
		PasswordField password = new PasswordField("Password");
		Button loginButton = new Button("Login");
		loginButton.addClickListener(click -> {
			if (login(username.getValue(), password.getValue())){
				getUI().ifPresent(ui ->
						ui.navigate(""));
			}
		});
		loginButton.addClickShortcut(Key.ENTER);
		add(
				new H1("Register"),
				new VerticalLayout(username, password, loginButton)
		);
	}

	private boolean login(String username, String password) {
		if (username.trim().isEmpty()) {
			Notification.show("Enter a username");
		} else if (password.isEmpty()) {
			Notification.show("Enter a password");
		} else {
			SResponseT <UserModel> res = marketService.login(username, password);
			Notification.show( res.isSuccess() ? "Check your email." : res.getMessage());
			return res.isSuccess();
		}
		return false;
	}

}