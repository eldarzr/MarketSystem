package FrontEnd.Views.main;

import BusinessLayer.Enums.UserType;
import FrontEnd.Model.ShopModel;
import FrontEnd.Model.UserModel;
import FrontEnd.SResponseT;
import com.nimbusds.jose.shaded.gson.Gson;
import com.vaadin.flow.component.Component;
import com.vaadin.flow.component.HasComponents;
import com.vaadin.flow.component.Text;
import com.vaadin.flow.component.UI;
import com.vaadin.flow.component.button.Button;
import com.vaadin.flow.component.dialog.Dialog;
import com.vaadin.flow.component.grid.Grid;
import com.vaadin.flow.component.notification.Notification;
import com.vaadin.flow.component.orderedlayout.HorizontalLayout;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;
import com.vaadin.flow.data.provider.ListDataProvider;
import com.vaadin.flow.router.BeforeEvent;
import com.vaadin.flow.router.HasUrlParameter;
import com.vaadin.flow.router.OptionalParameter;
import com.vaadin.flow.router.Route;
import com.vaadin.flow.server.VaadinSession;
import jakarta.websocket.server.PathParam;

import java.util.List;
import java.util.Optional;
import java.util.TreeSet;

@Route(value = "userProfile")
public class UserProfileView extends BaseView implements HasUrlParameter<String> {

	private UserModel userProfile;
	private boolean isSetAllow;

	public UserProfileView() {
		//todo: pay attention, userprofile is the one that this screen is all about,
		// we can come to this page if the user himself called it, or if admin called it,
		// in such case we can only *show* info and not set it.
		add(new Text("aaa\n"));
	}

	@Override
	protected void updateAfterUserNameChange(UserModel userModel) {

	}

	@Override
	public void setParameter(BeforeEvent event, @OptionalParameter String parameter) {
		if (parameter != null && !parameter.isEmpty()) {
//			userProfile = new Gson().fromJson(parameter, UserModel.class);
			SResponseT<UserModel> res = marketService.getUser(parameter);
			if (res.isSuccess()) {
				userProfile = res.getData();
				isSetAllow = userProfile.getName().equals(getCurrentUser().getName());
				add(new Text(userProfile.getName()));
			}
			else Notification.show(res.getMessage());
		}
	}

}
