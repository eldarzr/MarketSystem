package FrontEnd.Views;

import BusinessLayer.Enums.UserType;
import FrontEnd.MarketService;
import FrontEnd.Model.NotificationModel;
import FrontEnd.Model.UserModel;
import FrontEnd.SResponseT;
import com.vaadin.flow.component.Key;
import com.vaadin.flow.component.Text;
import com.vaadin.flow.component.UI;
import com.vaadin.flow.component.button.Button;
import com.vaadin.flow.component.button.ButtonVariant;
import com.vaadin.flow.component.contextmenu.ContextMenu;
import com.vaadin.flow.component.html.Div;
import com.vaadin.flow.component.html.Label;
import com.vaadin.flow.component.html.Span;
import com.vaadin.flow.component.icon.Icon;
import com.vaadin.flow.component.icon.VaadinIcon;
import com.vaadin.flow.component.notification.Notification;
import com.vaadin.flow.component.orderedlayout.HorizontalLayout;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;
import com.vaadin.flow.component.textfield.PasswordField;
import com.vaadin.flow.component.textfield.TextField;
import com.vaadin.flow.router.Route;
import com.vaadin.flow.server.VaadinSession;

import java.util.Arrays;
import java.util.List;

import static BusinessLayer.Enums.Initialize.FAIL;

@Route("fail_init")
public class FailInitView extends VerticalLayout{

	private Label title;

	public FailInitView() {
		title = new Label();
		title.getStyle().set("background-color", "white");
		title.getStyle().set("color", "black");
		title.getStyle().set("font-weight", "bold");
		title.getStyle().set("padding", "10px");
		title.getStyle().set("border", "2px solid #FF8C00");
		title.getStyle().set("border-radius", "10px");
		title.setText("the system if currently off. try again in few minutes");
		title.setVisible(true);

		add(title);
	}

}