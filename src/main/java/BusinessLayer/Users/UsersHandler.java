package BusinessLayer.Users;

import BusinessLayer.Purchases.UserInvoice;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

import javax.mail.internet.AddressException;
import javax.mail.internet.InternetAddress;
import java.util.Collection;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.ConcurrentLinkedQueue;
import java.util.logging.Logger;
import java.util.regex.Pattern;

import static BusinessLayer.Enums.UserType.*;

public class UsersHandler {
    private static final Logger logger = Logger.getLogger("Market");

    @Autowired
    private PasswordEncoder passwordEncoder;
    @Bean
    private PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    private static volatile UsersHandler instance;

    private int nextGuestId;
    Object guestIdLock;

    ConcurrentHashMap<String,User> members = new ConcurrentHashMap<>();
    ConcurrentHashMap<String,User> loginUsers = new ConcurrentHashMap<>();

    public static UsersHandler getInstance(){
        if(instance == null){
            synchronized ( (UsersHandler.class)){
                if(instance == null){
                    instance =  new UsersHandler();
                }
            }
        }
        return instance;
    }

    private UsersHandler() {
        this.passwordEncoder = passwordEncoder();
        guestIdLock = new Object();
    }

    public void register(String guestName,String userName, String email, String password) throws Exception{
        register(userName,email,password);
        User guestUser = loginUsers.remove(guestName);
        if(guestUser != null){
            //todo: find new User, and copy guest cart to new user
        }
    }

    public void register(String userName, String email, String password) throws Exception{
        checkValidUserName(userName);
        checkValidPassword(password);
        checkValidEmail(email);
        String encodedPassword = passwordEncoder.encode(password);
        User nuser = new User(userName,email,encodedPassword);
        members.put(userName,nuser);
    }

    public void login(String guestName, String userName, String password) {
        login(userName,password);
        loginUsers.remove(guestName);
    }

    public void login(String userName, String password) {
        User user = findMemberByName(userName);
        if(isLoggedIn(user.getName()))
            throw new IllegalArgumentException(String.format("User: %s already logged in",userName));
        if(!passwordEncoder.matches(password,user.getPassword()))
            throw new IllegalArgumentException("incorrect password");
        loginUsers.put(user.getName(),user);
    }

    public void disconnect(String userName){
        if(!isLoggedIn(userName))
            throw new IllegalArgumentException(String.format("user: %s is not logged in", userName));
        loginUsers.remove(userName);
    }

    //finds logged in members or guests
    public User findLoginUser(String targetName) {
        //this get method returns null if the key doesn't exist
        User user = loginUsers.get(targetName);
        if(user == null)
            throw new IllegalArgumentException(String.format("User name:%s doesn't exist or is not currently logged in",targetName));
        return user;
    }

    public User findMemberByName(String targetName) {
        User user = members.get(targetName);
        if(user == null)
            throw new IllegalArgumentException(String.format("user name: %s is unknown",targetName));
        return user;
    }

    public User findUserByName(String userName) {
        User user = loginUsers.get(userName);
        if(user == null)
            throw new IllegalArgumentException(String.format("user name: %s is unknown",userName));
        return user;
    }

    public boolean isLoggedIn(String userName){
        return loginUsers.containsKey(userName);
    }

    public void checkValidPassword(String password) {
        // Check if password is at least 8 characters long
        if (password.length() < 8) {
            throw new IllegalArgumentException("Password must be at least of length 8");
        }

        // Check if password contains at least one uppercase letter, one lowercase letter, and one digit
        boolean hasUpperCase = false;
        boolean hasLowerCase = false;
        boolean hasDigit = false;
        for (char c : password.toCharArray()) {
            if (Character.isUpperCase(c)) {
                hasUpperCase = true;
            } else if (Character.isLowerCase(c)) {
                hasLowerCase = true;
            } else if (Character.isDigit(c)) {
                hasDigit = true;
            }
        }
        if(!hasUpperCase)
            throw new IllegalArgumentException("Password must contain at least one upper case letter");
        if(!hasLowerCase)
            throw new IllegalArgumentException("Password must contain at least one lower case letter");
        if(!hasDigit)
            throw new IllegalArgumentException("password must contain at lesat one number");
    }

    public String createGuest() {
        String nextGuestName = getNextGuestName();
        User user = new User(nextGuestName);
        //guest is added only to login users, the reason is that as long as he is connected to the system we want to threat him as a login user
        loginUsers.put(nextGuestName,user);
        return nextGuestName;
    }

    private String getNextGuestName(){
        String guestName = "Guest";
        synchronized (guestIdLock){
            guestName += nextGuestId;
            nextGuestId++;
        }
        return guestName;
    }

    private void checkValidUserName(String username) {
        int lower_bound = 4;
        int upper_bound = 16;
        // Check if username is between lower_bound and upper_bound characters long
        if (username.length() < lower_bound || username.length() > upper_bound) {
            throw new IllegalArgumentException(String.format("user name length need to be bigger than %d and lower than %d",lower_bound,upper_bound));
        }

        // Check if username only contains alphanumeric characters or underscores
        Pattern pattern = Pattern.compile("^[a-zA-Z0-9_]*$");
        if (!pattern.matcher(username).matches()) {
            throw new IllegalArgumentException("password can contain only alphanumeric characters or underscores");
        }

        // Check if username starts with a letter
        char firstChar = username.charAt(0);
        if (!Character.isLetter(firstChar)) {
            throw new IllegalArgumentException("password must start with a letter");
        }
    }

    private static void checkValidEmail(String email) throws AddressException {
        InternetAddress emailVal = new InternetAddress(email);
        emailVal.validate();
    }

    public void reset() {
        members.clear();
        loginUsers.clear();
    }

	public boolean isAdmin(String userName) {
        return findMemberByName(userName).getUserType() == ADMIN;
	}

    public void addAdmin(String adminName) throws Exception {
        User admin = findMemberByName(adminName);
        if(admin.getUserType() == ADMIN)
            throw new Exception(String.format("the user %s is already admin", adminName));
        admin.setUserType(ADMIN);
    }


    public Collection<UserInvoice> getUserPurchaseHistory(String userName) {
        return findLoginUser(userName).getInvoices();
    }

    public Collection<UserInvoice> getUserPurchaseHistoryByAdmin(String memberName) {
        return findMemberByName(memberName).getInvoices();
    }
}
