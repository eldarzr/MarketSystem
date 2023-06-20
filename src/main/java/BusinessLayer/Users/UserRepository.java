package BusinessLayer.Users;

import BusinessLayer.PersistenceManager;
import BusinessLayer.Shops.Shop;
import BusinessLayer.Shops.ShopProduct;

import javax.persistence.TypedQuery;
import java.util.*;
import java.util.concurrent.ConcurrentHashMap;
import java.util.logging.Logger;


public class UserRepository {

    private static final int MAX_USERS_IN_MEMORY = 5;


    private static class  UserRepo {
        private static UserRepository instance = new UserRepository() ;
    }

    public static UserRepository getInstance() {
        return UserRepo.instance;
    }

    private static final Logger logger = Logger.getLogger("Market");
    private LinkedList<User> members;
    private Map<String,User> loginUsers;


    private UserRepository()  {
        this.members = new LinkedList<>();
        this.loginUsers = new ConcurrentHashMap<>();
    }

    public List<User> getAllMembers() {
        try {
            TypedQuery<User> query = PersistenceManager.getInstance().getEntityManager().createQuery("SELECT s FROM User s", User.class);
            return query.getResultList();
        }
        catch (Exception e){
            return members;
        }
    }

    public void addMember(String userName, User user) throws Exception {
        User userFromDB = getUserFromCache(userName);
        if(userFromDB != null)
            throwException("There is already user with that name");
        try {
            userFromDB = PersistenceManager.getInstance().getEntityManager().find(User.class, userName);
        }
        catch (Exception e){
            userFromDB = null;
        }
        if (userFromDB != null) {
            storeInCache(userFromDB);
            throwException("There is already user with that name");
        }
        storeInCache(user);
        PersistenceManager.getInstance().persistObj(user);
    }

    public User getMember(String userName) {
        User user;
        user = getUserFromCache(userName);
        if (user != null)
            return user;
        try {
            user = PersistenceManager.getInstance().getEntityManager().find(User.class, userName);
        }
        catch (Exception e){
            user = null;
        }
        if (user == null)
            return null;

        return user;
    }

    public User getLoginUser(String userName) {
        if (loginUsers.containsKey(userName))
            return loginUsers.get(userName);
        return null;
    }

    public Collection<User> getAllLoginUsers() {
        return loginUsers.values();
    }

    public void loginUser(String userName, User user) {
        if(loginUsers.containsKey(userName))
            throwException("This user is already logged in");
        loginUsers.put(userName, user);
    }

    public User logoutUser(String userName) {
        if (!loginUsers.containsKey(userName))
            throwException("this user is not logged in");
        return loginUsers.remove(userName);
    }

    public void removeMember(String userName) {
        User user=getMember(userName);
        if (user == null)
            throwException("this user is not registered");
        members.remove(user);
        removeMemberFromDB(userName);
    }

    public void reset() {
        members.clear();
        loginUsers.clear();
        PersistenceManager.getInstance().reset();
    }

    private void throwException(String errorMsg)  throws IllegalArgumentException{
        logger.severe(errorMsg);
        throw new IllegalArgumentException(errorMsg);
    }

    public void updateToDB(String userName){
        User user = getMember(userName);
        PersistenceManager.getInstance().updateObj(user);
    }

    public void removeMemberFromDB(String userName) {
        User user = getMember(userName);
        PersistenceManager.getInstance().removeFromDB(user);
    }

    private User getUserFromCache(String userName) {
        synchronized (members){
            User user = null;
            for(int i = 0; i < members.size(); i++){
                if(members.get(i).getName().equalsIgnoreCase(userName))
                    user = members.remove(i);
            }
            if(user == null)
                return null;
            members.addFirst(user);
            return user;
        }
    }
    private void storeInCache(User user) {
        synchronized (members){
            if(members.size() > MAX_USERS_IN_MEMORY)
                members.removeLast();
            members.addFirst(user);
        }
    }
}
