package BusinessLayer.Notifications;
import java.util.Collection;

public interface NotificationPublisher {
    public void notify(String userName, Notification notification);

    // Notify all users with notification (system notifications).
    public void notifyAll(Notification notification);

    // Notify collection of users with notification (shop management notifications).
    public void notifySome(Collection<String> userNames,Notification notification);
}
