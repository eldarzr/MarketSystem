package BusinessLayer.Notifications;

import ServiceLayer.DataObjects.NotificationDataObj;

import java.time.LocalDate;
import java.util.Date;

public class Notification {

    private String source;
    private String message;
    private LocalDate creationTime;
    private boolean read;

    public Notification(String source, String message) {
        this.source = source;
        this.message = message;
        this.creationTime = java.time.LocalDate.now();
    }

    public Notification(NotificationDataObj notification) {
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

    public void Read() {
        this.read = true;
    }

}
