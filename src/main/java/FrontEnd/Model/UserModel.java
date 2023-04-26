package FrontEnd.Model;

import BusinessLayer.Enums.UserType;
import BusinessLayer.Purchases.UserInvoice;
import ServiceLayer.DataObjects.UserDataObj;
import ServiceLayer.DataObjects.UserInvoiceDataObj;

import java.io.Serializable;
import java.util.concurrent.ConcurrentLinkedQueue;

public class UserModel implements Serializable {

	private UserType userType;
	private String name;
	private String email;
	private String sessionID;
	private ConcurrentLinkedQueue<String> shopsMessages = new ConcurrentLinkedQueue<>();
	private ConcurrentLinkedQueue<UserInvoiceModel> invoices = new ConcurrentLinkedQueue<>();

	public UserModel(String name, String sessionID) {
		this.name = name;
		this.sessionID = sessionID;
		this.userType = UserType.GUEST;
	}


	public UserModel(UserDataObj userDataObj) {
		this.name = userDataObj.getName();
		this.email = userDataObj.getEmail();
		this.sessionID = userDataObj.getSessionID();
		this.userType = userDataObj.getUserType();
		shopsMessages.addAll(userDataObj.getShopsMessages());
		for (UserInvoiceDataObj invoice : userDataObj.getInvoices())
			invoices.add(new UserInvoiceModel(invoice));
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getSessionID() {
		return sessionID;
	}

	public void setSessionID(String sessionID) {
		this.sessionID = sessionID;
	}

	public UserType getUserType() {
		return userType;
	}

	public void setUserType(UserType userType) {
		this.userType = userType;
	}
}
