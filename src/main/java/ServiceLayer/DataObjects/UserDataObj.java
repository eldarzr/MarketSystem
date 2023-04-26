package ServiceLayer.DataObjects;

import BusinessLayer.Enums.UserType;
import BusinessLayer.Purchases.UserInvoice;
import BusinessLayer.Users.User;

import java.util.ArrayList;
import java.util.concurrent.ConcurrentLinkedQueue;
import java.util.stream.Collectors;

public class UserDataObj {
    private UserType userType;
    private String name;
    private String sessionID;
    private String email;
    private ConcurrentLinkedQueue<String> shopsMessages = new ConcurrentLinkedQueue<>();
    private ConcurrentLinkedQueue<UserInvoiceDataObj> invoices = new ConcurrentLinkedQueue<>();

    public UserDataObj(String name, String email, String sessionID) {
        this.name = name;
        this.email = email;
        this.sessionID = sessionID;
        this.userType = UserType.MEMBER;
    }

    public UserDataObj(User user) {
        this.name = user.getName();
        this.email = user.getEmail();
        this.userType = user.getUserType();
        this.sessionID = user.getSessionID();
        shopsMessages.addAll(user.getShopsMessages());
        for (UserInvoice invoice : user.getInvoices())
            invoices.add(new UserInvoiceDataObj(invoice));
    }

    public UserDataObj() {
        userType = UserType.GUEST;
    }

    public UserType getUserType() {
        return userType;
    }

    public String getName() {
        return name;
    }

    public String getEmail() {
        return email;
    }

    public String getSessionID() {
        return sessionID;
    }

    public ConcurrentLinkedQueue<String> getShopsMessages() {
        return shopsMessages;
    }

    public ConcurrentLinkedQueue<UserInvoiceDataObj> getInvoices() {
        return invoices;
    }
}
