package BusinessLayer.ExternalSystemsAdapters;

import BusinessLayer.Purchases.Purchase;

import java.util.HashMap;
import java.util.Map;

public class CreditCardPaymentDetails implements PaymentDetails{


    private String card_number;
    private String month;
    private String year;
    private String holder;
    private String ccv;
    private String id;

    private String transactionID;

    public CreditCardPaymentDetails(String card_number, String month, String year, String holder, String ccv, String id) {
        this.card_number = card_number;
        this.month = month;
        this.year = year;
        this.holder = holder;
        this.ccv = ccv;
        this.id = id;
    }

    public String getCard_number() {
        return card_number;
    }

    public String getMonth() {
        return month;
    }

    public String getYear() {
        return year;
    }

    public String getHolder() {
        return holder;
    }

    public String getCcv() {
        return ccv;
    }

    public String getId() {
        return id;
    }

    @Override
    public void accept(Purchase purchase, double priceAfterDiscount) throws Exception {
        purchase.visit(this, priceAfterDiscount);
    }

    @Override
    public void acceptRevert(Purchase purchase) throws Exception {
        purchase.visitRevert(this);
    }

    public Map<String, String> getMappedInfo() {
        Map<String, String> parameters = new HashMap<>();
        parameters.put("card_number", getCard_number());
        parameters.put("month",getMonth());
        parameters.put("year", getYear());
        parameters.put("holder", getHolder());
        parameters.put("ccv", getCcv());
        parameters.put("id", getId());
        return parameters;
    }

    public void setTransactionID(String transactionID) {
        this.transactionID = transactionID;
    }

    public String getTransactionID() {
        return transactionID;
    }
}
