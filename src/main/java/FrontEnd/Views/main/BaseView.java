package FrontEnd.Views.main;

import FrontEnd.MarketService;
import FrontEnd.Model.UserModel;
import FrontEnd.SResponseT;
import com.vaadin.flow.component.Key;
import com.vaadin.flow.component.button.Button;
import com.vaadin.flow.component.html.H1;
import com.vaadin.flow.component.notification.Notification;
import com.vaadin.flow.component.orderedlayout.HorizontalLayout;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;
import com.vaadin.flow.component.textfield.PasswordField;
import com.vaadin.flow.component.textfield.TextField;
import com.vaadin.flow.router.Route;
import com.vaadin.flow.server.VaadinSession;

@Route("base")
public class BaseView extends VerticalLayout {

	protected MarketService marketService = MarketService.getInstance();
	protected UserModel userModel;
	private HorizontalLayout horizontalLayout;

	public BaseView() {
		String sessionID = VaadinSession.getCurrent().getSession().getId();
		userModel = VaadinSession.getCurrent().getAttribute(UserModel.class);
		if (userModel == null) {
			userModel = new UserModel(sessionID);
			VaadinSession.getCurrent().setAttribute("isGuest", true);
		}
		boolean isGuest = (boolean) VaadinSession.getCurrent().getAttribute("isGuest");
		if (isGuest)
			showLoginScreen();
	}

	protected boolean login(String username, String password) {
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
				VaadinSession.getCurrent().setAttribute(UserModel.class, userModel);
				VaadinSession.getCurrent().setAttribute("isGuest", false);
				remove(horizontalLayout);
			}
			else
				Notification.show(res.getMessage());
			return res.isSuccess();
		}
		return false;
	}

	private void showLoginScreen(){
		TextField username = new TextField("Username");
		PasswordField password = new PasswordField("Password");
		Button loginButton = new Button("Login");
		loginButton.addClickListener(click -> login(username.getValue(), password.getValue()));
		horizontalLayout = new HorizontalLayout(username, password, loginButton);
//		horizontalLayout.setAlignItems(Alignment);
		add(horizontalLayout);
		setSizeFull();
	}

}