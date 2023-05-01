package FrontEnd.Views;

import BusinessLayer.Enums.UserType;
import FrontEnd.MarketService;
import FrontEnd.Model.UserModel;
import FrontEnd.SResponseT;
import com.vaadin.flow.component.*;
import com.vaadin.flow.component.button.Button;
import com.vaadin.flow.component.html.*;
import com.vaadin.flow.component.icon.Icon;
import com.vaadin.flow.component.icon.VaadinIcon;
import com.vaadin.flow.component.notification.Notification;
import com.vaadin.flow.component.orderedlayout.FlexComponent;
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
	private Button profileButton;
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

		// User menu
		Icon userIcon = VaadinIcon.USER.create();
		userIcon.getStyle().set("margin-right", "0.25rem");

		goToCartButton = new Button(new Icon(VaadinIcon.CART));
		goToCartButton.getStyle().set("background-image", "linear-gradient(to right,#ffcc33 , #ffb347)");
		goToCartButton.getStyle().set("color", "white");

		goToCartButton.addClickListener(e ->
				goToCartButton.getUI().ifPresent(ui ->
						ui.navigate("cart"))
		);
		userNameLabel = new Label("Hello, " + getCurrentUser().getName());
		userNameLabel.getStyle().set("background-color", "white");
		userNameLabel.getStyle().set("color", "black");
		userNameLabel.getStyle().set("font-weight", "bold");
		userNameLabel.getStyle().set("padding", "10px");
		userNameLabel.getStyle().set("border", "2px solid #FF8C00");
		userNameLabel.getStyle().set("border-radius", "10px");

		Icon profileIcon = VaadinIcon.USER.create();
		profileButton = new Button(profileIcon); // VaadinSession.getCurrent().getAttribute(UserModel.class).getUserType() == UserType.GUEST ?
//				e -> Notification.show("Please login to access your profile") :
//				e -> getUI().ifPresent(ui -> ui.navigate("profile")));
		profileButton.getStyle().set("background-image", "linear-gradient(to right,#ffcc33 , #ffb347)");
		profileButton.getStyle().set("color", "white");
		profileButton.addClickListener(e ->
				profileButton.getUI().ifPresent(ui ->
						ui.navigate("profile"))
		);

		Div userMenu = new Div(userIcon, userNameLabel);
		userMenu.getStyle().set("display", "flex");
		userMenu.getStyle().set("align-items", "center");

		horizontalLayout = new HorizontalLayout(userMenu,goToCartButton,profileButton);
		horizontalLayout.getStyle().set("background-color", "#FFFFFF");
		horizontalLayout.getStyle().set("padding", "1rem");
		horizontalLayout.getStyle().set("border", "1px solid #ccc");
		horizontalLayout.getStyle().set("border-radius", "5px");
		add(horizontalLayout);

		boolean isGuest = userModel.getUserType() == UserType.GUEST;
		if (isGuest)
			showLoginScreen();
		else
			showLogoutScreen();
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
			getUI().ifPresent(ui -> ui.navigate(""));
		} else
			Notification.show(res.getMessage());
		return res.isSuccess();
	}

	private void showLoginScreen(){
		TextField username = new TextField("Username");
		PasswordField password = new PasswordField("Password");
		Button loginButton = new Button("Login");
		loginButton.addClickListener(click -> login(username.getValue(), password.getValue()));
		loginButton.getStyle().set("background-image", "linear-gradient(to right,#ffcc33 , #ffb347)");
		loginButton.getStyle().set("color", "white");
		loginLayout = new HorizontalLayout(username, password, loginButton);
		horizontalLayout.add(loginLayout);
		setSizeFull();
	}

	private void showLogoutScreen(){
		Button logoutButton = new Button("Logout");
		logoutButton.addClickListener(click -> logout());
		logoutButton.getStyle().set("background-image", "linear-gradient(to right,#ffcc33 , #ffb347)");
		logoutButton.getStyle().set("color", "white");
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
		userNameLabel.setText("Welcome \n" + (user.getUserType() == UserType.GUEST ? "guest" : user.getName() + "!"));
		updateAfterUserNameChange(user);
	}

	protected abstract void updateAfterUserNameChange(UserModel userModel);

}