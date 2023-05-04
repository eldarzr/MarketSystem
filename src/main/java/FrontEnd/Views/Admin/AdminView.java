package FrontEnd.Views.Admin;

import BusinessLayer.Enums.UserType;
import FrontEnd.Model.ProductModel;
import FrontEnd.Model.ShopModel;
import FrontEnd.Model.UserModel;
import FrontEnd.SResponse;
import FrontEnd.SResponseT;
import FrontEnd.Views.BaseView;
import com.nimbusds.jose.shaded.gson.Gson;
import com.vaadin.flow.component.Component;
import com.vaadin.flow.component.Key;
import com.vaadin.flow.component.Text;
import com.vaadin.flow.component.UI;
import com.vaadin.flow.component.button.Button;
import com.vaadin.flow.component.dialog.Dialog;
import com.vaadin.flow.component.grid.Grid;
import com.vaadin.flow.component.html.Div;
import com.vaadin.flow.component.html.Label;
import com.vaadin.flow.component.notification.Notification;
import com.vaadin.flow.component.orderedlayout.HorizontalLayout;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;
import com.vaadin.flow.component.textfield.TextField;
import com.vaadin.flow.data.provider.ListDataProvider;
import com.vaadin.flow.router.Route;
import com.vaadin.flow.router.RouteParameters;
import com.vaadin.flow.router.internal.HasUrlParameterFormat;
import com.vaadin.flow.server.VaadinService;
import com.vaadin.flow.server.VaadinSession;

import java.net.URLEncoder;
import java.nio.charset.StandardCharsets;
import java.util.List;
import java.util.Optional;

@Route("admin")
public class AdminView extends BaseView {

	private Grid<UserModel> userGrid;
	private List<UserModel> users;
	private ListDataProvider<UserModel> userDataProvider;
	private Grid<ShopModel> shopGrid;
	private List<ShopModel> shops;
	private ListDataProvider<ShopModel> shopDataProvider;

	private Dialog confirmDialog;
	private Button removeButton;
	private Button userHistoryButton;
	private Button shopHistoryButton;
	private Button userProfileButton;

	public AdminView() {
		// Initialize the data provider for the grid
		UserModel userModel = getCurrentUser();
		if(getCurrentUser().getUserType() != UserType.ADMIN)
			navigateToHome();
		SResponseT<List<UserModel>> userRes = marketService.getAllUsers(userModel.getName());
		SResponseT<List<ShopModel>> shopRes = marketService.getAllShops(userModel.getName());
		if(!userRes.isSuccess() || !shopRes.isSuccess()){
			Notification.show(
					(userRes.isSuccess() ? "" : userRes.getMessage()) +
					(shopRes.isSuccess() ? "" : shopRes.getMessage()));
			getUI().ifPresent(ui -> ui.navigate(""));
		}
		users = userRes.getData();
		userDataProvider = new ListDataProvider<>(users);

		shops = shopRes.getData();
		shopDataProvider = new ListDataProvider<>(shops);

		// Initialize the grid and set its data provider
		userGrid = new Grid<>();
		userGrid.addColumn(UserModel::getName).setHeader("Name");
		userGrid.setDataProvider(userDataProvider);
		userGrid.addSelectionListener(event -> {
			Optional<UserModel> selectedUser = event.getFirstSelectedItem();
			if (selectedUser.isPresent()) {
				enableButton(userProfileButton);
				enableButton(userHistoryButton);
				if (selectedUser.get().getUserType() == UserType.MEMBER) {
					enableButton(removeButton);
				} else {
					disableButton(removeButton);
				}
			}
			else{
				disableButton(userProfileButton);
				disableButton(userHistoryButton);
			}
		});
		shopGrid = new Grid<>();
		shopGrid.addColumn(ShopModel::getName).setHeader("Name");
		shopGrid.setDataProvider(shopDataProvider);

		shopGrid.addSelectionListener(event -> {
			Optional<ShopModel> selectedShop = event.getFirstSelectedItem();
			if (selectedShop.isPresent()) {
				enableButton(shopHistoryButton);
			}
			else{
				disableButton(shopHistoryButton);
			}
		});
		removeButton = new Button("Remove user");
		disableButton(removeButton);
		removeButton.addClickListener(event -> {
			UserModel selectedUser = userGrid.asSingleSelect().getValue();
			Notification.show(selectedUser == null ? "null" : selectedUser.getName());
			if (selectedUser != null) {
				showDialog(selectedUser);
			}
		});

		userProfileButton = new Button("User Profile");
		disableButton(userProfileButton);
		userProfileButton.addClickListener(event -> {
			UserModel selectedUser = userGrid.asSingleSelect().getValue();
			Notification.show(selectedUser == null ? "null" : selectedUser.getName());
			if (selectedUser != null) {
				getUI().ifPresent(ui -> {
				UI.getCurrent().navigate("admin_profile/" + selectedUser.getName());
				});
			}
		});

		userHistoryButton = new Button("User Purchase History");
		disableButton(userHistoryButton);
		userHistoryButton.addClickListener(event -> {
			UserModel selectedUser = userGrid.asSingleSelect().getValue();
			if (selectedUser != null)
				getUI().ifPresent(ui -> ui.navigate("userHistory/" + selectedUser.getName()));
		});

		shopHistoryButton = new Button("Shop Purchase History");
		disableButton(shopHistoryButton);
		shopHistoryButton.addClickListener(event -> {
			ShopModel selectedShop = shopGrid.asSingleSelect().getValue();
			if (selectedShop != null)
				getUI().ifPresent(ui -> ui.navigate("shopHistory/" + selectedShop.getName()));
		});

		// Add the components to the layout
		VerticalLayout userLayout = new VerticalLayout(userGrid,
				new HorizontalLayout(removeButton, userHistoryButton, userProfileButton));
		VerticalLayout shopLayout = new VerticalLayout(shopGrid, shopHistoryButton);
		add(new HorizontalLayout(userLayout, shopLayout));
	}

	private void removeUser(UserModel user) {
		UserModel userModel = getCurrentUser();
		SResponseT<String> res = marketService.removeUser(userModel.getName(), user.getName());
		if (res.isSuccess()) {
			SResponseT<List<UserModel>> userRes = marketService.getAllUsers(userModel.getName());
			if(!userRes.isSuccess()){
				Notification.show(userRes.getMessage());
				getUI().ifPresent(ui -> ui.navigate(""));
			}
			users = userRes.getData();
			userDataProvider = new ListDataProvider<>(users);
			userGrid.setDataProvider(userDataProvider);
//			Notification.show(user.getSessionID());
			if(user.getSessionID() != null) {
				VaadinSession session = marketService.getSession(user.getSessionID());
				if(session != null) {
					UserModel userModelNew = new UserModel(res.getData(), res.getData());
					session.setAttribute(UserModel.class, userModelNew);
				}
			}
		}
		else
			Notification.show(res.getMessage());
		confirmDialog.close();
	}

	private void showDialog(UserModel user){
		// Initialize the confirmation dialog for removing users
		confirmDialog = new Dialog();
		confirmDialog.add(new Text(String.format("Are you sure you want to remove the user %s?",
				user.getName())));
		Button confirmButton = new Button("OK", event -> {
			removeUser(user);
			confirmDialog.close();
		});
		Button cancelButton = new Button("Cancel", event -> confirmDialog.close());
		confirmDialog.add(confirmButton, cancelButton);
		confirmDialog.open();
	}

	@Override
	protected void updateAfterUserNameChange(UserModel userModel) { }

}