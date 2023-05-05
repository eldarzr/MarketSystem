package FrontEnd.Views.Admin;

import BusinessLayer.Enums.ManagePermissionsEnum;
import BusinessLayer.Enums.ManageType;
import BusinessLayer.Enums.UserType;
import FrontEnd.Model.MemberRoleInShopModel;
import FrontEnd.Model.ShopModel;
import FrontEnd.Model.UserModel;
import FrontEnd.SResponse;
import FrontEnd.SResponseT;
import FrontEnd.Views.BaseView;
import FrontEnd.Views.ShopManageCrew;
import com.vaadin.flow.component.Component;
import com.vaadin.flow.component.Text;
import com.vaadin.flow.component.button.Button;
import com.vaadin.flow.component.checkbox.Checkbox;
import com.vaadin.flow.component.dialog.Dialog;
import com.vaadin.flow.component.grid.Grid;
import com.vaadin.flow.component.html.H3;
import com.vaadin.flow.component.html.H4;
import com.vaadin.flow.component.html.Label;
import com.vaadin.flow.component.html.Span;
import com.vaadin.flow.component.icon.Icon;
import com.vaadin.flow.component.icon.VaadinIcon;
import com.vaadin.flow.component.notification.Notification;
import com.vaadin.flow.component.orderedlayout.HorizontalLayout;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;
import com.vaadin.flow.component.textfield.TextField;
import com.vaadin.flow.router.BeforeEvent;
import com.vaadin.flow.router.HasUrlParameter;
import com.vaadin.flow.router.OptionalParameter;
import com.vaadin.flow.router.Route;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@Route(value = "admin_manage_roles")
public class AdminShopManageCrew extends ShopManageCrew {

    protected UserModel userProfile;

    public AdminShopManageCrew() {
        super();
        if(getCurrentUser().getUserType() != UserType.ADMIN)
            navigateToHome();
        //todo: pay attention, userprofile is the one that this screen is all about,
        // we can come to this page if the user himself called it, or if admin called it,
        // in such case we can only *show* info and not set it.
    }

    @Override
    protected void updateAfterUserNameChange(UserModel userModel) {
        // Your existing implementation
    }

    @Override
    protected void updateShopStaff() {
        SResponseT<List<MemberRoleInShopModel>> res = marketService.getShopManagersAndPermissionsByAdmin
                (getCurrentUser().getName(), currentUser,shopProfile.getName());
        if (res.isSuccess()) {
            List<MemberRoleInShopModel> shopRoles = res.getData();
            List<Component> roleComponents = shopRoles.stream()
                    .map(this::createRoleComponent)
                    .collect(Collectors.toList());
            scrollView.add(roleComponents.toArray(new Component[0]));
        } else {
            Notification.show(res.getMessage());
        }
    }

    @Override
    public void setParameter(BeforeEvent event, @OptionalParameter String parameter) {
        Map<String, List<String>> queryParameters = event.getLocation().getQueryParameters().getParameters();
        currentUser = queryParameters.getOrDefault("userName", null).get(0);
        String shopName = queryParameters.getOrDefault("shopName", null).get(0);
        SResponseT<UserModel> user_res = marketService.getUser(currentUser);
        SResponseT<ShopModel> shop_res = marketService.getShop(shopName);
        if (!shop_res.isSuccess() || !user_res.isSuccess()) {
            Notification.show((shop_res.isSuccess() ? "" : shop_res.getMessage()) +
                    (user_res.isSuccess() ? "" : user_res.getMessage()));
            getUI().ifPresent(ui ->
                    ui.navigate(""));
        }
        setTitle(String.format("Welcome to %s shop %s mange roles!", currentUser, shopName));
        userProfile = user_res.getData();
        shopProfile = shop_res.getData();
        add(new Text(shopProfile.getName()));
        showShopProfileScreen();
        invisibleButtons();
    }

    protected void invisibleButtons() {
        promoteButton.setVisible(false);
        removeOwnerButton.setVisible(false);
        viewPermissionsButton.setVisible(false);
        newManagerTextField.setVisible(false);
        setManagerButton.setVisible(false);
        setOwnerButton.setVisible(false);
    }
}