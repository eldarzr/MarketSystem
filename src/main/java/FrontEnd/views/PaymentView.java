package FrontEnd.Views;

import FrontEnd.Model.UserModel;
import com.vaadin.flow.component.button.Button;
import com.vaadin.flow.component.combobox.ComboBox;
import com.vaadin.flow.component.formlayout.FormLayout;
import com.vaadin.flow.component.html.H2;
import com.vaadin.flow.component.icon.VaadinIcon;
import com.vaadin.flow.component.notification.Notification;
import com.vaadin.flow.component.orderedlayout.HorizontalLayout;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;
import com.vaadin.flow.component.textfield.TextField;
import com.vaadin.flow.router.PageTitle;
import com.vaadin.flow.router.Route;

@Route("payment")
@PageTitle("Payment")
public class PaymentView extends BaseView {

    public PaymentView() {
        updateAfterUserNameChange(getCurrentUser());
    }


    @Override
    protected void updateAfterUserNameChange(UserModel userModel) {
        removeAll();
        add(getHorizontalLayout());

        VerticalLayout layout = new VerticalLayout();
        layout.setSizeFull();

        H2 paymentTitle = new H2("Payment Information");
        layout.add(paymentTitle);

        // Payment method
        ComboBox<String> paymentMethod = new ComboBox<>("Payment Method");
        paymentMethod.setItems("VISA", "MasterCard", "American Express");
        paymentMethod.setRequired(true);

        // Card number and security code
        TextField cardNumber = new TextField("Card Number");
        cardNumber.setRequired(true);
        TextField securityCode = new TextField("Security Code");
        securityCode.setRequired(true);

        // Billing and shipping address form
        FormLayout addressForm = new FormLayout();

        TextField firstName = new TextField("First Name");
        firstName.setRequired(true);
        TextField lastName = new TextField("Last Name");
        lastName.setRequired(true);
        TextField country = new TextField("Country");
        country.setRequired(true);
        TextField state = new TextField("State (optional)");
        TextField city = new TextField("City");
        city.setRequired(true);
        TextField streetAddress = new TextField("Street Address");
        streetAddress.setRequired(true);
        TextField zipcode = new TextField("Zipcode");
        zipcode.setRequired(true);

        addressForm.add(firstName, lastName, country, state, city, streetAddress, zipcode);

        // Confirm button
        Button confirmButton = new Button("Confirm Purchase", VaadinIcon.CHECK_CIRCLE.create(), e -> {
            // Implement purchase confirmation logic here
            Notification.show("Payment confirmed!");
            navigateToHome();
        });
        confirmButton.getStyle().set("background-image", "linear-gradient(to right, #4CAF50, #81C784)");
        confirmButton.getStyle().set("color", "white");
        confirmButton.getStyle().set("margin-top", "1rem");

        layout.add(paymentMethod, cardNumber, securityCode, addressForm, confirmButton);

        layout.setAlignItems(Alignment.CENTER);
        add(layout);
    }
}
