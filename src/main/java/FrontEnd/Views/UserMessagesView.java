package FrontEnd.Views;

import FrontEnd.Model.*;
import FrontEnd.SResponseT;
import com.vaadin.flow.component.Text;
import com.vaadin.flow.component.button.Button;
import com.vaadin.flow.component.grid.Grid;
import com.vaadin.flow.component.notification.Notification;
import com.vaadin.flow.component.orderedlayout.HorizontalLayout;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;
import com.vaadin.flow.data.provider.ListDataProvider;
import com.vaadin.flow.router.BeforeEvent;
import com.vaadin.flow.router.HasUrlParameter;
import com.vaadin.flow.router.OptionalParameter;
import com.vaadin.flow.router.Route;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Route(value = "user_messages")
public class UserMessagesView extends BaseView {

	protected Grid<MessageModel> messagesGrid;
	protected List<MessageModel> messages;
	protected VerticalLayout mainLayout;

	public UserMessagesView() {
		mainLayout = new VerticalLayout();
		messages = new ArrayList<>();
		messagesGrid = new Grid<>(MessageModel.class);

		// Get the user's roles and populate myShops
		showMessagesScreen();

		add(messagesGrid);
	}

	@Override
	protected void updateAfterUserNameChange(UserModel userModel) {

	}


	protected void showMessagesScreen() {
		SResponseT<List<MessageModel>> rolesRes = getUserMessages();
		if (rolesRes != null && !rolesRes.isSuccess()) {
			Notification.show(rolesRes.getMessage());
			getUI().ifPresent(ui -> ui.navigate(""));
		}
		else if (rolesRes != null && rolesRes.isSuccess()) {
			messages.addAll(rolesRes.getData());
		}


		messagesGrid.setItems(messages);

		add(messagesGrid);


	}

	protected SResponseT<List<MessageModel>> getUserMessages() {
		return marketService.getMessages(getCurrentUser().getName());
		//TODO: implement getMessages.
	}



}
