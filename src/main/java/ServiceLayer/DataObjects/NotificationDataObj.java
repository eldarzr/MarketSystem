package ServiceLayer.DataObjects;

import BusinessLayer.MemberRoleInShop;
import BusinessLayer.Notifications.Notification;
import FrontEnd.Model.NotificationModel;

import java.time.LocalDate;

public class NotificationDataObj {

    private String source;
    private String message;
    private LocalDate creationTime;
    private boolean read;
    public NotificationDataObj(Notification notification) {
        this.source = notification.getSource();
        this.message = notification.getMessage();
        this.creationTime = notification.getCreationTime();
    }

    public NotificationDataObj(NotificationModel notification) {
        this.source = notification.getSource();
        this.message = notification.getMessage();
        this.creationTime = notification.getCreationTime();
    }

    public String getSource() {
        return source;
    }

    public String getMessage() {
        return message;
    }

    public LocalDate getCreationTime() {
        return creationTime;
    }

    public boolean isRead() {
        return read;
    }

    public void Read(boolean read) {
        this.read = read;
    }
}

