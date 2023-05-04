package FrontEnd.Views;

import FrontEnd.Model.UserModel;
import FrontEnd.SResponseT;
import com.vaadin.flow.component.Text;
import com.vaadin.flow.component.notification.Notification;
import com.vaadin.flow.router.BeforeEvent;
import com.vaadin.flow.router.HasUrlParameter;
import com.vaadin.flow.router.OptionalParameter;
import com.vaadin.flow.router.Route;

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
