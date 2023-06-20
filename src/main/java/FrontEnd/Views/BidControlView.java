package FrontEnd.Views;

import BusinessLayer.Enums.ManageKindEnum;
import BusinessLayer.Enums.ManageType;
import FrontEnd.Model.ShopModel;
import FrontEnd.Model.UserModel;
import FrontEnd.SResponse;
import FrontEnd.SResponseT;
import FrontEnd.Views.BaseView;
import ServiceLayer.DataObjects.BidDataObj;
import com.vaadin.flow.component.orderedlayout.HorizontalLayout;
import com.vaadin.flow.router.BeforeEnterEvent;
import com.vaadin.flow.router.BeforeEnterObserver;
import com.vaadin.flow.router.PageTitle;
import com.vaadin.flow.router.Route;
import com.vaadin.flow.component.button.Button;
import com.vaadin.flow.component.dialog.Dialog;
import com.vaadin.flow.component.grid.Grid;
import com.vaadin.flow.component.notification.Notification;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;
import com.vaadin.flow.component.select.Select;
import com.vaadin.flow.component.textfield.NumberField;
import com.vaadin.flow.data.binder.Binder;
import com.vaadin.flow.data.renderer.NativeButtonRenderer;

import java.util.Collection;

@Route(value = "bids/:shopName")
@PageTitle("Bid Control")
public class BidControlView extends BaseView implements BeforeEnterObserver {
    private String shopName;
    private ShopModel shopProfile;
    private String userName;
    private Grid<BidDataObj> grid;
    private Collection<BidDataObj> bids;
    private Select<String> select;
    private Button approveButton;
    private Button counterButton;
    private Button rejectButton;
    private Dialog counterBidDialog;
    private NumberField counterBidField;

    public BidControlView() {
        //removeAll();
        userName = getCurrentUser().getName();
        add(getHorizontalLayout());
        grid = new Grid<>(BidDataObj.class);
        select = new Select<>();
        select.setItems(BidDataObj.approved, BidDataObj.pending, BidDataObj.rejected);


        select.addValueChangeListener(event -> updateGrid());
        approveButton = new Button("Approve", click -> approveBid());
        approveButton.getStyle().set("color", "white");
        approveButton.getStyle().set("background-image", "linear-gradient(to right,#ffcc33 , #ffb347)");
        counterButton = new Button("Counter Bid", click -> openCounterBidDialog());
        counterButton.getStyle().set("color","white");
        counterButton.getStyle().set("background-image","linear-gradient(to right,#ff4d4d , #a020f0)");
        rejectButton  = new Button("Reject", click -> rejectBid());
        rejectButton.getStyle().set("color", "white");
        rejectButton.getStyle().set("background-image", "linear-gradient(to right,#ff4d4d , #ff1a1a)");
        counterBidDialog = new Dialog();
        counterBidField = new NumberField("New price");
        //counterBidField.setHasControls(true);
        counterBidField.setStep(0.01);
        counterBidDialog.add(counterBidField);
        counterBidDialog.add(new Button("Submit Offer", click -> submitCounterBid()));
//        if(shopName == null){
//            //System.out.println("shopname is null");
//        }
        HorizontalLayout buttonsLayout = new HorizontalLayout(approveButton,counterButton,rejectButton);
        VerticalLayout layout = new VerticalLayout(select, grid, buttonsLayout);
        add(layout);
        updateAfterUserNameChange(getCurrentUser());
    }



    private void updateGrid() {
        String status = select.getValue();
        switch (status) {
            case BidDataObj.pending:
                SResponseT<Collection<BidDataObj>> res1 = marketService.getPendingBids(userName, shopName);
                if(!res1.isSuccess())Notification.show(res1.getMessage());
                else bids = res1.getData();
                break;
            case BidDataObj.approved:
                SResponseT<Collection<BidDataObj>> res2 = marketService.getApprovedBids(userName, shopName);
                if(!res2.isSuccess())Notification.show(res2.getMessage());
                else bids = res2.getData();
                break;
            case BidDataObj.rejected:
                SResponseT<Collection<BidDataObj>> res3 = marketService.getRejectedBids(userName, shopName);
                if(!res3.isSuccess())Notification.show(res3.getMessage());
                else bids = res3.getData();
                break;
        }
        if(bids != null)
            grid.setItems(bids);

    }

    private void rejectBid() {
        BidDataObj selectedBid = grid.asSingleSelect().getValue();
        if (selectedBid == null) {
            Notification.show("No bid selected");
            return;
        }
        // Call your service layer function here
        SResponse res = marketService.rejectBid(userName,shopName, selectedBid.getBidId());
        if(!res.isSuccess()) Notification.show(res.getMessage());
        else Notification.show("Successfully rejected bid");
        updateGrid();
    }

    private void approveBid() {
        BidDataObj selectedBid = grid.asSingleSelect().getValue();
        if (selectedBid == null) {
            Notification.show("No bid selected");
            return;
        }
        // Call your service layer function here
        SResponse res = marketService.approveBid(userName,shopName, selectedBid.getBidId());
        if(!res.isSuccess()) Notification.show(res.getMessage());
        else Notification.show("Successfully approved bid, bid will be confirmed once all parties will approve it!");
        updateGrid();
    }

    private void openCounterBidDialog() {
        BidDataObj selectedBid = grid.asSingleSelect().getValue();
        if (selectedBid == null) {
            Notification.show("No bid selected");
            return;
        }
        counterBidDialog.open();
    }

    private void submitCounterBid() {
        double counterBidPrice = counterBidField.getValue();
        BidDataObj selectedBid = grid.asSingleSelect().getValue();

        SResponse res = marketService.createBidOffer(userName, selectedBid.getProductName(), shopName, counterBidPrice);
        if(!res.isSuccess())Notification.show(res.getMessage());
        else Notification.show("Successfully created bid!");
        counterBidDialog.close();
        updateGrid();
    }

    @Override
    protected void updateAfterUserNameChange(UserModel userModel) {
        if (shopName == null) return;
        userName = userModel.getName();
        updateButtons();
        updateGrid();
    }

    @Override
    public void beforeEnter(BeforeEnterEvent event) {
        if (checkIfFirstScreen(event)) return;
        //Notification.show("before enter");
        event.getRouteParameters().get("shopName").ifPresent(shopName -> {
            //Notification.show("Updating shopName");
            this.shopName = shopName;

            SResponseT<ShopModel> res = marketService.getShop(shopName);
            if(res.isSuccess()){
                //Notification.show("Got here");
                shopProfile = res.getData();
            }
            // Disable editing product buttons for managers who have read only permissions
            updateButtons();
            //updateAfterUserNameChange(getCurrentUser());
        });
    }
    public void updateButtons(){
        if(shopProfile != null && shopProfile.getRoles().get(getCurrentUser().getName()).getType().equals(ManageType.MANAGER) && shopProfile.getRoles().get(getCurrentUser().getName()).getPermissions().getManageAccess() == ManageKindEnum.READ_ONLY) {
            disableButton(approveButton);
            disableButton(rejectButton);
            disableButton(counterButton);
        }
        else{
            enableButton(approveButton);
            enableButton(rejectButton);
            enableButton(counterButton);
        }
    }
}

