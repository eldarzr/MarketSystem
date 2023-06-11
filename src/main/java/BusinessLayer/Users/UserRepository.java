package BusinessLayer.Users;

import BusinessLayer.PersistenceManager;
import BusinessLayer.Shops.Shop;
import BusinessLayer.Shops.ShopProduct;

import javax.persistence.EntityManager;
import javax.persistence.TypedQuery;
import java.util.*;
import java.util.concurrent.ConcurrentHashMap;
import java.util.logging.Logger;


public class UserRepository {

	private static class  UserRepo {
        private static UserRepository instance = new UserRepository() ;
    }

    public static UserRepository getInstance() {
        return UserRepo.instance;
    }

    private static final Logger logger = Logger.getLogger("Market");
    private Map<String,User> members;
    private Map<String,User> loginUsers;


    private UserRepository()  {
        this.members = new ConcurrentHashMap<>();
        this.loginUsers = new ConcurrentHashMap<>();
    }

    public List<User> getAllMembers() {
        EntityManager entityManager = PersistenceManager.getInstance().getEntityManager();
        try {
            TypedQuery<User> query = entityManager.createQuery("SELECT s FROM User s", User.class);
            return query.getResultList();
        }
        catch (Exception e){
            return members.values().stream().toList();
        }
        finally {
            entityManager.close();
        }
    }

    public void addMember(String userName, User user) throws Exception {
        EntityManager entityManager = PersistenceManager.getInstance().getEntityManager();
        if(members.containsKey(userName))
            throwException("There is already user with that name");
        User userFromDB;
        try {
            userFromDB = entityManager.find(User.class, userName);
        }
        catch (Exception e){
            userFromDB = null;
        }
        if (userFromDB != null) {
            members.put(userName, userFromDB);
            throwException("There is already user with that name");
        }
        members.put(userName, user);
        PersistenceManager.getInstance().persistObj(user);
    }

    public User getMember(String userName) {
        EntityManager entityManager = PersistenceManager.getInstance().getEntityManager();
        if (members.containsKey(userName))
            return members.get(userName);
        User user;
        try {
            user = entityManager.find(User.class, userName);
        }
        catch (Exception e){
            user = null;
        }
        if (user == null)
            return null;
        members.put(userName, user);
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
        if (getMember(userName) == null)
            throwException("this user is not registered");
        User user = members.remove(userName);
        removeMemberFromDB(user);
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

    public void removeMemberFromDB(User user) {
        PersistenceManager.getInstance().removeFromDB(user);
    }

}
