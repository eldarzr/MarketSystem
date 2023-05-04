package FrontEnd.Views;

import FrontEnd.Model.UserModel;
import com.vaadin.flow.component.Key;
import com.vaadin.flow.component.button.Button;
import com.vaadin.flow.component.html.H1;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;
import com.vaadin.flow.component.textfield.PasswordField;
import com.vaadin.flow.component.textfield.TextField;
import com.vaadin.flow.router.Route;

@Route("login")
public class LoginView extends BaseView {

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
		VerticalLayout verticalLayout = new VerticalLayout(username, password, loginButton);
		verticalLayout.setWidthFull();
		add(
				new H1("Login"),
				verticalLayout
		);
	}

	@Override
	protected void updateAfterUserNameChange(UserModel userModel) { }

}