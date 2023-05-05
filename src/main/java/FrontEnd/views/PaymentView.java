
package FrontEnd.Views;

import BusinessLayer.ExternalSystemsAdapters.CreditCardPaymentDetails;
import BusinessLayer.ExternalSystemsAdapters.SupplyDetails;
import FrontEnd.Model.UserModel;
import com.vaadin.flow.component.button.Button;
import com.vaadin.flow.component.combobox.ComboBox;
import com.vaadin.flow.component.datepicker.DatePicker;
import com.vaadin.flow.component.formlayout.FormLayout;
import com.vaadin.flow.component.html.H2;
import com.vaadin.flow.component.icon.VaadinIcon;
import com.vaadin.flow.component.notification.Notification;
import com.vaadin.flow.component.orderedlayout.HorizontalLayout;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;
import com.vaadin.flow.component.textfield.TextField;
import com.vaadin.flow.router.PageTitle;
import com.vaadin.flow.router.Route;

import java.time.LocalDate;

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
        TextField idNumber = new TextField("ID Number");
        idNumber.setRequired(true);

        // Expiration date
        DatePicker expirationDate = new DatePicker("Expiration Date");
        expirationDate.setRequired(true);

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
            if (isBillingInfoValid(cardNumber, securityCode, idNumber, expirationDate)) {
                CreditCardPaymentDetails paymentDetails = createCreditCardPaymentDetails(cardNumber, expirationDate, securityCode, idNumber, firstName, lastName);
                SupplyDetails supplyDetails = createSupplyDetails(firstName, lastName, streetAddress, city, country, zipcode);

                marketService.purchaseCart(getCurrentUser().getName(),paymentDetails,supplyDetails);
                Notification.show("Payment confirmed!");
                navigateToHome();
            }
        });
        confirmButton.getStyle().set("background-image", "linear-gradient(to right, #4CAF50, #81C784)");
        confirmButton.getStyle().set("color", "white");
        confirmButton.getStyle().set("margin-top", "1rem");

        layout.add(paymentMethod, cardNumber, securityCode, idNumber, expirationDate, addressForm, confirmButton);

        layout.setAlignItems(Alignment.CENTER);
        add(layout);
    }

    private boolean isBillingInfoValid(TextField cardNumber, TextField securityCode, TextField idNumber, DatePicker expirationDate) {
        if (!isCardNumberValid(cardNumber.getValue())) {
            Notification.show("Invalid card number. It should be 16 digits long.");
            return false;
        }
        if (!isSecurityCodeValid(securityCode.getValue())) {
            Notification.show("Invalid security code. It should be 3 digits long.");
            return false;
        }
        if (!isIdNumberValid(idNumber.getValue())) {
            Notification.show("Invalid ID number. It should be 9 digits long.");
            return false;
        }
        if (!isExpirationDateValid(expirationDate.getValue())) {
            Notification.show("Invalid expiration date. The card is expired.");
            return false;
        }
        return true;
    }

    private boolean isCardNumberValid(String cardNumber) {
        return cardNumber != null && cardNumber.matches("\\d{16}");
    }

    private boolean isSecurityCodeValid(String securityCode) {
        return securityCode != null && securityCode.matches("\\d{3}");
    }

    private boolean isIdNumberValid(String idNumber) {
        return idNumber != null && idNumber.matches("\\d{9}");
    }

    private boolean isExpirationDateValid(LocalDate expirationDate) {
        return expirationDate != null && expirationDate.isAfter(LocalDate.now());
    }

    private CreditCardPaymentDetails createCreditCardPaymentDetails(TextField cardNumber, DatePicker expirationDate, TextField securityCode, TextField idNumber, TextField firstName, TextField lastName) {
        String holder = firstName.getValue() + " " + lastName.getValue();
        String year = String.valueOf(expirationDate.getValue().getYear());
        String month = String.valueOf(expirationDate.getValue().getMonthValue());
        return new CreditCardPaymentDetails(cardNumber.getValue(), month, year, holder, securityCode.getValue(), idNumber.getValue());
    }

    private SupplyDetails createSupplyDetails(TextField firstName, TextField lastName, TextField streetAddress, TextField city, TextField country, TextField zipcode) {
        String name = firstName.getValue() + " " + lastName.getValue();
        String address = streetAddress.getValue();
        return new SupplyDetails(name, address, city.getValue(), country.getValue(), zipcode.getValue());
    }
}
