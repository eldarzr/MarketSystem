package BusinessLayer.Notifications;

import java.time.LocalDate;
import java.util.Date;

public class Notification {

    private String source;
    private String message;
    private LocalDate creationTime;
    private boolean read;

    public Notification(String source, String message, LocalDate creationTime) {
        this.source = source;
        this.message = message;
        this.creationTime = creationTime;
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
