package BusinessLayer.Notifications;

import ServiceLayer.DataObjects.NotificationDataObj;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.Date;

@Entity
@Table(name = "notifications")
public class Notification {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String source;
    private String message;
    private LocalDate creationTime;
    @Column(name = "`read_status`") // changed from "read" to "read_status" and quoted to avoid SQL syntax issues
    private boolean read;

    public Notification() {
    }

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
