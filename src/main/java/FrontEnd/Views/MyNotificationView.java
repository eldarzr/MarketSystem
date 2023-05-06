package FrontEnd.Views;

import FrontEnd.Model.*;
import FrontEnd.SResponseT;
import com.vaadin.flow.component.button.Button;
import com.vaadin.flow.component.button.ButtonVariant;
import com.vaadin.flow.component.grid.Grid;
import com.vaadin.flow.component.icon.Icon;
import com.vaadin.flow.component.icon.VaadinIcon;
import com.vaadin.flow.component.notification.Notification;
import com.vaadin.flow.component.orderedlayout.HorizontalLayout;
import com.vaadin.flow.data.renderer.ComponentRenderer;
import com.vaadin.flow.router.PageTitle;
import com.vaadin.flow.router.Route;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;



@Route("user_notifications")
@PageTitle("My notifications")
public class MyNotificationView extends BaseView {

    protected Grid<NotificationModel> notificationGrid;
    protected List<NotificationModel> notifications;
    protected HorizontalLayout clearNotificationsLayout;

    protected Button clearNotificationsButton;


    public MyNotificationView() {
        this.GetNotifications();
        this.setupGrid();
        this.refreshGrid();
    }


    private void setupGrid() {
        notificationGrid = new Grid<>(NotificationModel.class, false);
        notificationGrid.setAllRowsVisible(true);
        notificationGrid.addColumn(NotificationModel::getSource).setHeader("Sender");
        notificationGrid.addColumn(NotificationModel::getMessage).setHeader("message");
        notificationGrid.addColumn(NotificationModel::getCreationTime).setHeader("time");

        notificationGrid.addColumn(
                new ComponentRenderer<>(Button::new, (button, notification) -> {
                    button.addThemeVariants(ButtonVariant.LUMO_ICON,
                            ButtonVariant.LUMO_ERROR,
                            ButtonVariant.LUMO_TERTIARY);
                    button.addClickListener(e -> this.removeNotification(notification));
                    button.setIcon(new Icon(VaadinIcon.TRASH));
                })).setHeader("Manage");

        notificationGrid.setItems(notifications);
        add(notificationGrid);
    }

    private void refreshGrid() {
        if (notifications.size() > 0) {
            notificationGrid.setVisible(true);
            notificationGrid.getDataProvider().refreshAll();
        } else {
            notificationGrid.setVisible(false);
        }
    }

    private void removeNotification(NotificationModel notification) {
        if (notification == null)
            return;
        notifications.remove(notification);
        marketService.removeNotification(getCurrentUser().getName(),notification);
        this.refreshGrid();
    }
    @Override
    protected void updateAfterUserNameChange(UserModel userModel) {

    }

    protected void GetNotifications() {
        notifications = new ArrayList<>();
        SResponseT<List<NotificationModel>> notificationRes = marketService.getUserNotifications(getCurrentUser().getName());
        if (notificationRes != null && !notificationRes.isSuccess()) {
            Notification.show(notificationRes.getMessage());
            getUI().ifPresent(ui -> ui.navigate(""));
        } else if (notificationRes != null && notificationRes.isSuccess()) {
            notifications.addAll(notificationRes.getData());
            Collections.reverse(notifications);
        }
    }
}


