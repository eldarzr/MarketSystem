package FrontEnd.Model;

import BusinessLayer.Notifications.Notification;
import ServiceLayer.DataObjects.NotificationDataObj;

import java.time.LocalDate;

public class NotificationModel {

    private String source;
    private String message;
    private LocalDate creationTime;

    public NotificationModel(NotificationDataObj notification) {
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
}

