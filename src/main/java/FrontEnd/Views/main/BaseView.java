package FrontEnd.Views.main;

import BusinessLayer.Enums.UserType;
import FrontEnd.MarketService;
import FrontEnd.Model.UserModel;
import FrontEnd.SResponseT;
import com.vaadin.flow.component.*;
import com.vaadin.flow.component.button.Button;
import com.vaadin.flow.component.html.Div;
import com.vaadin.flow.component.html.H1;
import com.vaadin.flow.component.html.Label;
import com.vaadin.flow.component.notification.Notification;
import com.vaadin.flow.component.orderedlayout.HorizontalLayout;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;
import com.vaadin.flow.component.textfield.PasswordField;
import com.vaadin.flow.component.textfield.TextField;
import com.vaadin.flow.router.HasUrlParameter;
import com.vaadin.flow.router.Route;
import com.vaadin.flow.server.*;
import jakarta.servlet.http.HttpSession;

import java.util.Collection;
import java.util.stream.Collectors;

@Route("base")
public abstract class BaseView extends VerticalLayout {

	protected MarketService marketService = MarketService.getInstance();
	private HorizontalLayout horizontalLayout;
	private Button goToCartButton;
	private Label userNameLabel;
	private HorizontalLayout loginLayout;
	private HorizontalLayout logoutLayout;

	public BaseView() {
		String sessionID = VaadinSession.getCurrent().getSession().getId();
		UserModel userModel = VaadinSession.getCurrent().getAttribute(UserModel.class);
		if (userModel == null) {
			userModel = new UserModel(sessionID, sessionID);
			VaadinSession.getCurrent().setAttribute(UserModel.class, userModel);
		}
		goToCartButton = new Button("Go To Cart", e -> getUI().ifPresent(ui ->
				ui.navigate("cart")));
		userNameLabel = new Label("hello " + getCurrentUser().getName());
		horizontalLayout = new HorizontalLayout(userNameLabel, goToCartButton);
		add(horizontalLayout);
		boolean isGuest = userModel.getUserType() == UserType.GUEST;
		if (isGuest)
			showLoginScreen();
		else showLogoutScreen();
	}

	protected boolean login(String username, String password) {
		UserModel userModel = getCurrentUser();
		if (username.trim().isEmpty()) {
			Notification.show("Enter a username");
		} else if (password.isEmpty()) {
			Notification.show("Enter a password");
		} else {
			SResponseT <UserModel> res = marketService.login(userModel.getName(), username, password);
			if (res.isSuccess()){
				Notification.show("login successfully");
				userModel = res.getData();
				Notification.show(userModel.getName());
				setCurrentUser(userModel);
				horizontalLayout.remove(loginLayout);
				showLogoutScreen();
			}
			else
				Notification.show(res.getMessage());
			return res.isSuccess();
		}
		return false;
	}

	protected boolean logout() {
		UserModel userModel = getCurrentUser();
		SResponseT<String> res = marketService.logout(userModel.getName());
		if (res.isSuccess()) {
			Notification.show("logout successfully");
			userModel = new UserModel(res.getData(), res.getData());
			Notification.show(userModel.getName());
			setCurrentUser(userModel);
			horizontalLayout.remove(logoutLayout);
			showLoginScreen();
		} else
			Notification.show(res.getMessage());
		return res.isSuccess();
	}

	private void showLoginScreen(){
		TextField username = new TextField("Username");
		PasswordField password = new PasswordField("Password");
		Button loginButton = new Button("Login");
		loginButton.addClickListener(click -> login(username.getValue(), password.getValue()));
		loginLayout = new HorizontalLayout(username, password, loginButton);
		horizontalLayout.add(loginLayout);
		setSizeFull();
	}

	private void showLogoutScreen(){
		Button logoutButton = new Button("Logout");
		logoutButton.addClickListener(click -> logout());
		logoutLayout = new HorizontalLayout(logoutButton);
		horizontalLayout.add(logoutLayout);
		setSizeFull();
	}

	protected UserModel getCurrentUser(){
		return VaadinSession.getCurrent().getAttribute(UserModel.class);
	}

	protected void setCurrentUser(UserModel user){
		VaadinSession.getCurrent().setAttribute(UserModel.class, user);
		updateUserNameOnScreen(user);
		updateAfterUserNameChange(user);
	}

	private void updateUserNameOnScreen(UserModel user){
		userNameLabel.setText("hello " + (user.getUserType() == UserType.GUEST ? "guest" : user.getName()));
	}

	protected abstract void updateAfterUserNameChange(UserModel userModel);

}