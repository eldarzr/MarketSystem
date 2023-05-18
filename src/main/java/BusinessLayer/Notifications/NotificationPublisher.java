package BusinessLayer.Notifications;

import BusinessLayer.Shops.ShopHandler;
import BusinessLayer.Users.NotificationCallback;
import BusinessLayer.Users.User;
import BusinessLayer.Users.UsersHandler;


import java.util.Collection;
import java.util.concurrent.ConcurrentHashMap;

public class NotificationPublisher {

    private ConcurrentHashMap<String, NotificationCallback> userNotificationsCallbacks;

    UsersHandler usersHandler;
    ShopHandler shopHandler;
    private static volatile NotificationPublisher instance;

    private NotificationPublisher()
    {
        usersHandler = UsersHandler.getInstance();
        shopHandler = ShopHandler.getInstance();
        userNotificationsCallbacks=new ConcurrentHashMap<>();
    }

    public static NotificationPublisher getInstance()
    {
        if(instance == null){
            synchronized ( (NotificationPublisher.class)){
                if(instance == null){
                    instance =  new NotificationPublisher();
                }
            }
        }
        return instance;
    }

    public void setNotificationCallback(String username, NotificationCallback callback) {
        userNotificationsCallbacks.put(username,callback);
    }

    public void removeNotificationCallback(String username) {
        userNotificationsCallbacks.remove(username);
    }

    // Notify all users with notification (system notifications).
    public void notifyAll(Notification notification)
    {
        for(User observer: usersHandler.getAllMembers())
        {
            if(usersHandler.isLoggedIn(observer.getName()))
            {
                NotificationCallback callback=userNotificationsCallbacks.get(observer.getName());
                if(callback!=null) callback.call(notification.getMessage(),false);
            }
            observer.addPendingNotifications(notification);
        }
    }

    // Notify collection of users with notification (shop management notifications).
    public void notifySome(Collection<String> userNames,Notification notification)
    {
        for(String userName: userNames) notify(userName,notification);
    }

    // Notify Specific user with notification(user/shop-user notifications).
    public void notify(String userName,Notification notification)
    {
        User user=usersHandler.findMemberByName(userName);
        if(usersHandler.isLoggedIn(userName))
        {
            NotificationCallback callback=userNotificationsCallbacks.get(userName);
            if(callback!=null) callback.call(notification.getMessage(),false);
        }
        user.addPendingNotifications(notification);
    }

    public void notifyShopManagement(String userName, String shopName,Notification notification){
        try {
            for(String roleName: shopHandler.getShop(shopName).getManagementUserNames())
            {
                // no need to notify himself.
                if (!roleName.equals(userName)) notify(roleName,notification);
            }
        } catch (Exception ignored) {}
    }
}