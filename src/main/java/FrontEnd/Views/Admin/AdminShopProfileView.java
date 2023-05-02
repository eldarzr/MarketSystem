package FrontEnd.Views.Admin;

import FrontEnd.Model.ShopModel;
import FrontEnd.Model.UserModel;
import FrontEnd.SResponseT;
import FrontEnd.Views.ShopProfileView;
import com.vaadin.flow.component.Text;
import com.vaadin.flow.component.button.Button;
import com.vaadin.flow.component.notification.Notification;
import com.vaadin.flow.router.*;

import java.util.List;
import java.util.Map;

@Route(value = "admin_shop")
public class AdminShopProfileView extends ShopProfileView {

	protected UserModel userProfile;

	public AdminShopProfileView() {
		super();
		//todo: pay attention, userprofile is the one that this screen is all about,
		// we can come to this page if the user himself called it, or if admin called it,
		// in such case we can only *show* info and not set it.
	}

	@Override
	protected void updateAfterUserNameChange(UserModel userModel) {

	}

	@Override
	public void setParameter(BeforeEvent event, @OptionalParameter String parameter) {
		Map<String, List<String>> queryParameters = event.getLocation().getQueryParameters().getParameters();
		String userName = queryParameters.getOrDefault("userName", null).get(0);
		String shopName = queryParameters.getOrDefault("shopName", null).get(0);
		SResponseT<UserModel> user_res = marketService.getUser(userName);
		SResponseT<ShopModel> shop_res = marketService.getShop(shopName);
		if (!shop_res.isSuccess() || !user_res.isSuccess()) {
			Notification.show((shop_res.isSuccess() ? "" : shop_res.getMessage()) +
					(user_res.isSuccess() ? "" : user_res.getMessage()));
			getUI().ifPresent(ui ->
					ui.navigate(""));
		}
		setTitle(String.format("Welcome to %s shop %s", userName, shopName));
		userProfile = user_res.getData();
		shopProfile = shop_res.getData();
		add(new Text(shopProfile.getName()));
		editProductButton.setVisible(false);
		showShopProfileScreen();
	}


}
