package BusinessLayer.Users;

import BusinessLayer.Notifications.Notification;
import BusinessLayer.Purchases.UserInvoice;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

import javax.mail.internet.AddressException;
import javax.mail.internet.InternetAddress;
import java.util.*;
import java.util.logging.Logger;
import java.util.regex.Pattern;
import java.util.stream.Collectors;
import java.util.stream.Stream;

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

    private UserRepository userRepository;

    private int nextGuestId;
    Object guestIdLock;

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
        this.guestIdLock = new Object();
        this.userRepository = UserRepository.getInstance();
    }

    public void register(String guestName,String userName, String email, String password) throws Exception{
        register(userName.toLowerCase(),email,password);
        User guestUser = userRepository.logoutUser(guestName.toLowerCase());
        if(guestUser != null){
            //todo: find new User, and copy guest cart to new user
            User newUser = userRepository.getMember(userName.toLowerCase());
            newUser.setCart(guestUser.getCart());
        }
    }

    public User register(String userName, String email, String password) throws Exception{
        if(userRepository.getMember(userName.toLowerCase()) != null)
            throw new Exception(String.format("User: %s already exists",userName));

        logger.info(String.format("Attempt to validate %s is valid username.",userName));
        userName = userName.toLowerCase();
        checkValidUserName(userName);
        logger.info(String.format("%s is valid username.",userName));

        logger.info("Attempt to validate password.");
        checkValidPassword(password);
        logger.info("Password is valid.");

        logger.info(String.format("Attempt to validate %s is valid email.",email));
        checkValidEmail(email);
        logger.info(String.format("%s is valid email.",email));

        String encodedPassword = passwordEncoder.encode(password);

        logger.info(String.format("Attempt to create user %s.", userName));
        User nuser = new User(userName,email,encodedPassword);
        logger.info(String.format("User %s created.", userName));

        userRepository.addMember(userName,nuser);
        return nuser;
    }

    public User login(String guestName, String userName, String password) {
        User user = login(userName,password);
        user.setSessionID(guestName);
        userRepository.logoutUser(guestName);
        return user;
    }

    public User login(String userName, String password) {
        userName = userName.toLowerCase();
        User user = findMemberByName(userName);
        if(isLoggedIn(user.getName()))
            throwIllegalArgumentException(String.format("User %s already logged in",userName));
        if(!passwordEncoder.matches(password,user.getPassword()))
            throwIllegalArgumentException("Incorrect password");
        userRepository.loginUser(user.getName(),user);
        return user;
    }

    public String disconnect(String userName){
        userName = userName.toLowerCase();
        User user = findLoginUser(userName);
        userRepository.logoutUser(userName);
        if (user.getSessionID() == null)
            return null;
        User newUser = new User(user.getSessionID());
        userRepository.loginUser(newUser.getName(), newUser);
//        user.setName(user.getSessionID());
        return user.getSessionID();
    }

    //finds logged in members or guests
    public User findLoginUser(String targetName) {
        //this get method returns null if the key doesn't exist
        User user = userRepository.getLoginUser(targetName.toLowerCase());
        if(user == null)
            throwIllegalArgumentException(String.format("User %s doesn't exist or is not currently logged in",targetName));
        return user;
    }

    public User findMemberByName(String targetName) {
        User user = userRepository.getMember(targetName.toLowerCase());
        if(user == null)
            throwIllegalArgumentException(String.format("User %s is unknown",targetName));
        return user;
    }

    public User findUserByName(String userName) {
        userName = userName.toLowerCase();
        User userLogin = userRepository.getLoginUser(userName);
        User member = userRepository.getMember(userName);
        if(userLogin != null)
            return userLogin;
        else if(member != null)
            return member;
        throwIllegalArgumentException(String.format("User %s is unknown",userName));
        return null; //not suppose to get here
    }

    public boolean isLoggedIn(String userName){
        return userRepository.getLoginUser(userName.toLowerCase()) != null;
    }

    public void checkValidPassword(String password) {
        // Check if password is at least 8 characters long
        if (password.length() < 8) {
            throwIllegalArgumentException("Password must be at least of length 8.");
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
        if(!hasUpperCase) {
            throwIllegalArgumentException("Password must contain at least one upper case letter.");
        }
        if(!hasLowerCase) {
            throwIllegalArgumentException("Password must contain at least one lower case letter.");
        }
        if(!hasDigit) {
            throwIllegalArgumentException("Password must contain at least one number.");
        }
    }

    public String createGuest() {
        String nextGuestName = getNextGuestName().toLowerCase();
        User user = new User(nextGuestName);
        //guest is added only to login users, the reason is that as long as he is connected to the system we want to threat him as a login user
        userRepository.loginUser(nextGuestName,user);
        logger.info(String.format("Session of guest %s started.",nextGuestName));
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

    private void checkValidUserName(String username) throws Exception {
        int lower_bound = 4;
        int upper_bound = 32;
        // Check if username is between lower_bound and upper_bound characters long
        if (username.length() < lower_bound || username.length() > upper_bound) {
            throwIllegalArgumentException(String.format("User name length need to be bigger than %d and lower than %d.",lower_bound,upper_bound));
        }

        // Check if username only contains alphanumeric characters or underscores
        Pattern pattern = Pattern.compile("^[a-zA-Z0-9_]*$");
        if (!pattern.matcher(username).matches()) {
            throwIllegalArgumentException("Username can contain only alphanumeric characters or underscores.");
        }

        // Check if username starts with a letter
        char firstChar = username.charAt(0);
        if (!Character.isLetter(firstChar)) {
            throwIllegalArgumentException("Username must start with a letter.");
        }

        if (userRepository.getLoginUser(username) != null || userRepository.getMember(username) != null)
            throw new Exception(String.format("there is already user with the name %s", username));
    }

    private static void checkValidEmail(String email) throws AddressException {
        InternetAddress emailVal = new InternetAddress(email);
        emailVal.validate();
    }

    public void reset() {
        userRepository.reset();
    }

	public boolean isAdmin(String userName) {
        return findUserByName(userName).getUserType() == ADMIN;
	}

    public void addAdmin(String adminName) throws Exception {
        User admin = findMemberByName(adminName.toLowerCase());
        if(admin.getUserType() == ADMIN)
            throw new Exception(String.format("the user %s is already admin", adminName));
        admin.setUserType(ADMIN);
    }

    public Collection<UserInvoice> getUserPurchaseHistory(String userName) {
        return findLoginUser(userName.toLowerCase()).getInvoices();
    }

    public void unregister(String userName) {
        findMemberByName(userName.toLowerCase());
        userRepository.removeMember(userName.toLowerCase());
    }

    public Collection<UserInvoice> getUserPurchaseHistoryByAdmin(String memberName) {
        return findMemberByName(memberName.toLowerCase()).getInvoices();
    }
    
    private void throwIllegalArgumentException(String errorMsg)  throws IllegalArgumentException{
        logger.severe(errorMsg);
        throw new IllegalArgumentException(errorMsg);
    }

    public String createGuest(String sessionID) {
        User user = new User(sessionID);
        //guest is added only to login users, the reason is that as long as he is connected to the system we want to threat him as a login user
        userRepository.loginUser(sessionID,user);
        logger.info(String.format("Session of guest %s started.",sessionID));
        return sessionID;
    }

	public List<User> getAllUsers(String adminName) throws Exception {
        User admin = findLoginUser(adminName.toLowerCase());
        if(!isAdmin(adminName.toLowerCase())){
            throw new Exception(String.format("the user %s is not admin!", adminName));
        }
        return getAllUsers();
    }

	private List<User> getAllUsers() {
        return Stream.concat(userRepository.getAllMembers().stream(),
                userRepository.getAllLoginUsers().stream()).distinct()
                .collect(Collectors.toList());
    }

    // Just for notification publisher.
    public List<User> getAllMembers(){
        return new ArrayList<>(userRepository.getAllMembers());
    }

    public String removeUser(String adminName, String userName) throws Exception {
        User admin = findLoginUser(adminName.toLowerCase());
        User user = findMemberByName(userName.toLowerCase());
        if(!isAdmin(adminName.toLowerCase())){
            throw new Exception(String.format("the user %s is not admin!", adminName));
        }
        if(isAdmin(userName.toLowerCase())){
            throw new Exception(String.format("the user %s is admin! you cant remove them", userName));
        }
        userRepository.logoutUser(userName.toLowerCase());
        userRepository.removeMember(userName.toLowerCase());
        return createGuest(user.getSessionID());
    }

    public User getUser(String userName) {
        User user = findUserByName(userName.toLowerCase());
        return user;
    }

    public Collection<Notification> getUserNotifications(String userName) {
        return findLoginUser(userName).getPendingNotification();
    }

    public void removeNotification(String username,Notification notification) {
        findLoginUser(username).removeNotification(notification);
    }

	public void removeProductFromAllCarts(String shopName, String productName) throws Exception {
        for (User user : getAllUsers()){
            user.removeProductFromCartIfExists(shopName, productName);
        }
	}
}
