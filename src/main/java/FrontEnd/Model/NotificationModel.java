package FrontEnd.Model;

import BusinessLayer.Notifications.Notification;
import ServiceLayer.DataObjects.NotificationDataObj;

import java.time.LocalDate;

public class NotificationModel {

    private String source;
    private String message;
    private LocalDate creationTime;

    private boolean read;

    public NotificationModel(NotificationDataObj notification) {
        this.source = notification.getSource();
        this.message = notification.getMessage();
        this.creationTime = notification.getCreationTime();
        this.read = notification.isRead();
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
        return this.read;
    }
}

