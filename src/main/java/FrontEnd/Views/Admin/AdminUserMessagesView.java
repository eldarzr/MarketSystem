package FrontEnd.Views.Admin;

import BusinessLayer.Enums.UserType;
import FrontEnd.Model.MessageModel;
import FrontEnd.Model.NotificationModel;
import FrontEnd.Model.UserModel;
import FrontEnd.SResponseT;
import FrontEnd.Views.BaseView;
import FrontEnd.Views.MyNotificationView;
import FrontEnd.Views.UserMessagesView;
import com.vaadin.flow.component.Text;
import com.vaadin.flow.component.grid.Grid;
import com.vaadin.flow.component.notification.Notification;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;
import com.vaadin.flow.router.BeforeEvent;
import com.vaadin.flow.router.HasUrlParameter;
import com.vaadin.flow.router.OptionalParameter;
import com.vaadin.flow.router.Route;

import java.util.ArrayList;
import java.util.List;

@Route(value = "admin_user_notifications")
public class AdminUserMessagesView extends MyNotificationView implements HasUrlParameter<String> {

	UserModel visitedUser;
	private final String ADMIN_PREFIX = "admin_";

	public AdminUserMessagesView() {
		super();
		if(getCurrentUser().getUserType() != UserType.ADMIN)
			navigateToHome();
	}

	@Override
	protected void updateAfterUserNameChange(UserModel userModel) {

	}

	protected SResponseT<List<NotificationModel>> getUserMessages() {
		return visitedUser == null ? null : marketService.getUserNotifications(visitedUser.getName());
	}

	@Override
	public void setParameter(BeforeEvent event, @OptionalParameter String parameter) {
		if (parameter != null && !parameter.isEmpty()) {
			SResponseT<UserModel> res = marketService.getUser(parameter);
			if (res.isSuccess()) {
				visitedUser = res.getData();
				add(new Text(visitedUser.getName()));
			}
			else Notification.show(res.getMessage());
		}

		setTitle(String.format("Welcome to %s messages", visitedUser.getName()));
		//showNotificationsScreen();
	}



}
