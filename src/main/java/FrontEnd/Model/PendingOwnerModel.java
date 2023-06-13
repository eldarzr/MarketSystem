package FrontEnd.Model;

import BusinessLayer.Shops.PendingOwner;
import ServiceLayer.DataObjects.PendingOwnerDataObj;

import java.util.List;

public class PendingOwnerModel {

    private List<String> ownerNames;

    private String pendingOwner;

    public PendingOwnerModel(List<String> ownerNames, String pendingOwner) {
        this.ownerNames = ownerNames;
        this.pendingOwner = pendingOwner;
    }

    public PendingOwnerModel(PendingOwnerDataObj pendingOwnerObj) {
        this.ownerNames = pendingOwnerObj.getOwnerNames();
        this.pendingOwner = pendingOwnerObj.getPendingOwner();
    }



    public List<String> getOwnerNames() {
        return ownerNames;
    }

    public void setOwnerNames(List<String> ownerNames) {
        this.ownerNames = ownerNames;
    }

    public String getPendingOwner() {
        return pendingOwner;
    }

    public void setPendingOwner(String pendingOwner) {
        this.pendingOwner = pendingOwner;
    }
}
