package BusinessLayer.Users;

import BusinessLayer.Enums.UserType;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

import javax.mail.internet.AddressException;
import javax.mail.internet.InternetAddress;
import java.util.concurrent.ConcurrentHashMap;
import java.util.regex.Pattern;

import static BusinessLayer.Enums.UserType.*;

public class UsersHandler {
    @Autowired
    private PasswordEncoder passwordEncoder;
    @Bean
    private PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    private static volatile UsersHandler instance;

    ConcurrentHashMap<String,User> allUsers = new ConcurrentHashMap<>();
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
    }

    public void register(String userName, String email, String password) throws Exception{
        checkValidUserName(userName);
        checkValidPassword(password);
        checkValidEmail(email);
        String encodedPassword = passwordEncoder.encode(password);
        User nuser = new User(userName,email,encodedPassword);
        allUsers.put(userName,nuser);
    }

    public void login(String userName, String password) {
        User user = findUserByName(userName);
        if(isLoggedIn(user.getName()))
            throw new IllegalArgumentException(String.format("User: %s already logged in",userName));
        if(!passwordEncoder.matches(password,user.getPassword()))
            throw new IllegalArgumentException("incorrect password");
        loginUsers.put(user.getName(),user);
    }

    public void logout(String userName){
        if(!isLoggedIn(userName))
            throw new IllegalArgumentException(String.format("user: %s already is not logged in", userName));
        loginUsers.remove(userName);
    }

    public User findUserByName(String targetName) {
        if(allUsers.containsKey(targetName))
            return allUsers.get(targetName);
        throw new IllegalArgumentException(String.format("user name: %s is unknown",targetName));
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
        allUsers.clear();
        loginUsers.clear();
    }

	public boolean isAdmin(String userName) {
        return allUsers.get(userName).getUserType() == ADMIN;
	}

    public void addAdmin(String adminName) throws Exception {
        User admin = findUserByName(adminName);
        if(admin.getUserType() == ADMIN)
            throw new Exception(String.format("the user %s is already admin", adminName));
        admin.setUserType(ADMIN);
    }
}
