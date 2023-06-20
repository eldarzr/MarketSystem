package FrontEnd.Views;

import BusinessLayer.Enums.UserType;
import FrontEnd.MarketService;
import FrontEnd.Model.NotificationModel;
import FrontEnd.Model.UserModel;
import FrontEnd.SResponseT;
import com.vaadin.flow.component.*;
import com.vaadin.flow.component.button.Button;
import com.vaadin.flow.component.button.ButtonVariant;
import com.vaadin.flow.component.contextmenu.ContextMenu;
import com.vaadin.flow.component.contextmenu.MenuItem;
import com.vaadin.flow.component.html.*;
import com.vaadin.flow.component.icon.Icon;
import com.vaadin.flow.component.icon.VaadinIcon;
import com.vaadin.flow.component.notification.Notification;
import com.vaadin.flow.component.orderedlayout.FlexComponent;
import com.vaadin.flow.component.orderedlayout.HorizontalLayout;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;
import com.vaadin.flow.component.page.AppShellConfigurator;
import com.vaadin.flow.component.page.Push;
import com.vaadin.flow.component.textfield.PasswordField;
import com.vaadin.flow.component.textfield.TextField;
import com.vaadin.flow.router.*;
import com.vaadin.flow.server.*;
import jakarta.servlet.http.HttpSession;

import java.util.Arrays;
import java.util.Collection;
import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;

import static BusinessLayer.Enums.Initialize.FAIL;

@Route("base")
public abstract class BaseView extends VerticalLayout implements BeforeEnterObserver {

	protected MarketService marketService = MarketService.getInstance();
	private HorizontalLayout horizontalLayout;
	private Button goToCartButton;
	private Button goToHomeButton;
	private Button goToSearchButton;
	private Button profileButton;
	private Button bellButton;
	private Span numberOfNotifications;
	private ContextMenu NotificationsMenu;
	private Label userNameLabel;
	private Label title;
	private HorizontalLayout loginLayout;
	private HorizontalLayout logoutLayout;

	protected boolean checkIfFirstScreen(BeforeEvent event){
		Object isUserInit = VaadinSession.getCurrent().getAttribute("isUserInit");
		if (!(isUserInit instanceof Boolean) || !((Boolean) isUserInit)) {
			VaadinSession.getCurrent().setAttribute("isUserInit", true);
			event.getUI().navigate("");
			event.rerouteTo("");
			return true;
		}
		return false;
	}

	@Override
	public void beforeEnter(BeforeEnterEvent event) {
		if (marketService.getInitState().getData() == FAIL) {
			event.getUI().navigate("fail_init");
			event.rerouteTo("fail_init");
		}
		else {
			checkIfFirstScreen(event);
		}
	}

	public BaseView() {
		String sessionID = VaadinSession.getCurrent().getSession().getId();
		UserModel userModel = VaadinSession.getCurrent().getAttribute(UserModel.class);
		if (userModel == null) {
			userModel = new UserModel(sessionID, sessionID);
//			VaadinSession.getCurrent().setAttribute(UserModel.class, userModel);
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

		goToHomeButton = new Button(new Icon(VaadinIcon.HOME));
		goToHomeButton.getStyle().set("background-image", "linear-gradient(to right,#ffcc33 , #ffb347)");
		goToHomeButton.getStyle().set("color", "white");

		goToHomeButton.addClickListener(e ->
				goToHomeButton.getUI().ifPresent(ui ->
						ui.navigate(""))
		);

		goToSearchButton = new Button(new Icon(VaadinIcon.SEARCH));
		goToSearchButton.getStyle().set("background-image", "linear-gradient(to right,#ffcc33 , #ffb347)");
		goToSearchButton.getStyle().set("color", "white");

		goToSearchButton.addClickListener(e ->
				goToSearchButton.getUI().ifPresent(ui ->
						ui.navigate("search"))
		);

		numberOfNotifications = new Span("0");
		numberOfNotifications.getElement().getThemeList().addAll(Arrays.asList("badge", "error", "primary", "small", "pill"));
		numberOfNotifications.getStyle().set("color", "red");
		numberOfNotifications.setVisible(false);

		bellButton = new Button(VaadinIcon.BELL_O.create());
		bellButton.addThemeVariants(ButtonVariant.LUMO_TERTIARY);
		bellButton.getElement().appendChild(numberOfNotifications.getElement());
		bellButton.getStyle().set("background-image", "linear-gradient(to right,#ffcc33 , #ffb347)");
		bellButton.getStyle().set("color", "white");
		bellButton.setVisible(false);

		NotificationsMenu = new ContextMenu();
		NotificationsMenu.setOpenOnClick(true);
		NotificationsMenu.setTarget(bellButton);

		bellButton.addClickListener(e->
		{
			LoadUserNotifications();
			numberOfNotifications.setText("0");
			numberOfNotifications.setVisible(false);
			marketService.ReadUserNotifications(getCurrentUser().getName());
			bellButton.getStyle().set("color", "white");
		});

		userNameLabel = new Label();
		userNameLabel.getStyle().set("background-color", "white");
		userNameLabel.getStyle().set("color", "black");
		userNameLabel.getStyle().set("font-weight", "bold");
		userNameLabel.getStyle().set("padding", "10px");
		userNameLabel.getStyle().set("border", "2px solid #FF8C00");
		userNameLabel.getStyle().set("border-radius", "10px");

		title = new Label();
		title.getStyle().set("background-color", "white");
		title.getStyle().set("color", "black");
		title.getStyle().set("font-weight", "bold");
		title.getStyle().set("padding", "10px");
		title.getStyle().set("border", "2px solid #FF8C00");
		title.getStyle().set("border-radius", "10px");
		title.setVisible(false);

		Icon profileIcon = VaadinIcon.USER.create();
		profileButton = new Button(profileIcon);
		profileButton.getStyle().set("background-image", "linear-gradient(to right,#ffcc33 , #ffb347)");
		profileButton.getStyle().set("color", "white");
		profileButton.addClickListener(e -> handleProfile()
		);
		profileButton.setVisible(false);

		Div userMenu = new Div(userIcon, userNameLabel);
		userMenu.getStyle().set("display", "flex");
		userMenu.getStyle().set("align-items", "center");

		horizontalLayout = new HorizontalLayout(userMenu, goToHomeButton,goToCartButton,profileButton,bellButton, goToSearchButton);
		horizontalLayout.getStyle().set("background-color", "#FFFFFF");
		horizontalLayout.getStyle().set("padding", "1rem");
		horizontalLayout.getStyle().set("border", "1px solid #ccc");
		horizontalLayout.getStyle().set("border-radius", "5px");
		add(horizontalLayout, title);

		setCurrentUser(userModel);
		boolean isGuest = userModel.getUserType() == UserType.GUEST;
		if (isGuest)
			showLoginScreen();
		else
			showLogoutScreen();
	}

	private void LoadUserNotifications() {
		NotificationsMenu.removeAll();
		SResponseT<List<NotificationModel>> NotificationsRes=marketService.getUserNotifications(getCurrentUser().getName());
		List<NotificationModel> notifications=NotificationsRes.getData();
		if (notifications.size()==0) return;
		for(NotificationModel notification:notifications)
		{
			Div newNotification = new Div(new Text(notification.getMessage()));
			newNotification.getStyle().set("padding", "var(--lumo-space-l)");
			if (!notification.isRead())
			{
				newNotification.getStyle().set("background-image", "linear-gradient(to right,#ffcc33 , #ffb347)");
				int num=Integer.parseInt(numberOfNotifications.getText());
				numberOfNotifications.setText(Integer.toString(num+1));
				numberOfNotifications.setVisible(true);
			}
			newNotification.addClickListener(e->newNotification.getStyle().remove("background-image"));
			NotificationsMenu.add(newNotification);
		}
	}

	private void handleProfile() {

		if(getCurrentUser().getUserType() != UserType.GUEST)
			profileButton.getUI().ifPresent(ui ->
					ui.navigate("profile"));
		else { Notification.show("guest dosent have a profile") ;}
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
				//Notification.show(userModel.getName());
				setCurrentUser(userModel);
				horizontalLayout.remove(loginLayout);
				showLogoutScreen();
			}
			else
				Notification.show("Login failed: "+res.getMessage());
			return res.isSuccess();
		}
		return false;
	}

	private void updateNotificationButton(String username)
	{
		var ui=UI.getCurrent();
		marketService.setNotificationCallback(username,((String notification,Boolean isRead)->
			ui.access(()->
			{
				Div newNotification = new Div(new Text(notification));
				newNotification.getStyle().set("padding", "var(--lumo-space-l)");
				if (!isRead)
				{
					newNotification.getStyle().set("background-image", "linear-gradient(to right,#ffcc33 , #ffb347)");
					bellButton.getStyle().set("color", "red");
					int num=Integer.parseInt(numberOfNotifications.getText());
					numberOfNotifications.setText(Integer.toString(num+1));
					numberOfNotifications.setVisible(true);
				}
				newNotification.addClickListener(e->newNotification.getStyle().remove("background-image"));
				NotificationsMenu.add(newNotification);
			})
		));
		bellButton.setVisible(true);
	}

	protected boolean logout() {
		UserModel userModel = getCurrentUser();
		SResponseT<String> res = marketService.logout(userModel.getName());
		if (res.isSuccess()) {
			Notification.show("logout successfully");
			marketService.removeNotificationCallback(userModel.getName());
			userModel = new UserModel(res.getData(), res.getData());
			VaadinSession.getCurrent().setAttribute(UserModel.class, userModel);
			updateUserNameOnScreen(userModel);
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
		loginButton.addClickShortcut(Key.ENTER);
		loginLayout = new HorizontalLayout(username, password, loginButton);
		horizontalLayout.add(loginLayout);
		setSizeFull();
	}

	private void showLogoutScreen(){
		LoadUserNotifications();
        updateNotificationButton(getCurrentUser().getName());
		profileButton.setVisible(true);
		Button logoutButton = new Button("Logout");
		logoutButton.addClickListener(click -> {
			profileButton.setVisible(false);
			bellButton.setVisible(false);
			logout();
		});
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
		userNameLabel.setText(String.format("Welcome %s !", (user.getUserType() == UserType.GUEST ?
				"guest" + user.getName().substring(0, 6) :
				user.getName())));
		updateAfterUserNameChange(user);
	}

	protected abstract void updateAfterUserNameChange(UserModel userModel);

	protected void setTitle(String title){
		this.title.setText(title);
		this.title.setVisible(title != null && !title.isEmpty());
	}

	protected HorizontalLayout getHorizontalLayout(){return horizontalLayout;}
	protected void enableButton(Button button){
		button.setEnabled(true);
		button.getStyle().set("background-image", "linear-gradient(to right,#ffcc33 , #ffb347)");
		button.getStyle().set("color", "white");
	}

	protected void disableButton(Button button){
		button.setEnabled(false);
		button.getStyle().set("background-image", "linear-gradient(to right,#ffd966 , #ffba66)");
		button.getStyle().set("color", "white");
	}

	protected void navigateToHome(){
		getUI().ifPresent(ui -> ui.navigate(""));
	}
}