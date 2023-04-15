package ServiceLayer.DataObjects;

import BusinessLayer.Enums.UserType;
import BusinessLayer.Users.User;

import java.util.concurrent.ConcurrentLinkedQueue;

public class UserDataObj {
    private UserType userType;
    private String name;
    private String email;
    private ConcurrentLinkedQueue<String> shopsMessages = new ConcurrentLinkedQueue<>();
    private boolean twoFactorEnabled;

    public UserDataObj(String name, String email) {
        this.name = name;
        this.email = email;
        userType = UserType.MEMBER;
    }

    public UserDataObj(User user) {
        this.name = user.getName();
        this.email = user.getEmail();
        this.userType = user.getUserType();
        this.twoFactorEnabled = user.isTwoFactorEnabled();
        for (String msg : user.getShopsMessages())
            shopsMessages.add(msg);
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

    public ConcurrentLinkedQueue<String> getShopsMessages() {
        return shopsMessages;
    }

    public boolean isTwoFactorEnabled() {
        return twoFactorEnabled;
    }
}
