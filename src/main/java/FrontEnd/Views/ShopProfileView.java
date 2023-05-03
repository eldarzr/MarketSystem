package FrontEnd.Views;

import FrontEnd.Model.ShopModel;
import FrontEnd.Model.UserModel;
import FrontEnd.SResponseT;
import com.vaadin.flow.component.Text;
import com.vaadin.flow.component.button.Button;
import com.vaadin.flow.component.notification.Notification;
import com.vaadin.flow.router.BeforeEvent;
import com.vaadin.flow.router.HasUrlParameter;
import com.vaadin.flow.router.OptionalParameter;
import com.vaadin.flow.router.Route;

@Route(value = "shop")
public class ShopProfileView extends BaseView implements HasUrlParameter<String> {

	protected ShopModel shopProfile;
	protected Button manageRolesButton;

	public ShopProfileView() {
		//todo: pay attention, userprofile is the one that this screen is all about,
		// we can come to this page if the user himself called it, or if admin called it,
		// in such case we can only *show* info and not set it.
	}

	@Override
	protected void updateAfterUserNameChange(UserModel userModel) {

	}

	@Override
	public void setParameter(BeforeEvent event, @OptionalParameter String parameter) {
		Notification.show("aaa");
		if (parameter != null && !parameter.isEmpty()) {
			SResponseT<ShopModel> res = marketService.getShop(parameter);
			if (res.isSuccess()) {
				shopProfile = res.getData();
				add(new Text(shopProfile.getName()));
				showShopProfileScreen();
			}
			else Notification.show(res.getMessage());
		}
	}

	protected void showShopProfileScreen() {
		manageRolesButton = new Button("Manage Shop Roles");
		manageRolesButton.getStyle().set("background-image", "linear-gradient(to right,#ffcc33 , #ffb347)");
		manageRolesButton.getStyle().set("color", "white");
		manageRolesButton.addClickListener(e ->
				manageRolesButton.getUI().ifPresent(ui ->
						ui.navigate("manage_roles/"+shopProfile.getName()))
		);

		add(manageRolesButton);


	}

}
