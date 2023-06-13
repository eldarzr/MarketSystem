package ServiceLayer.DataObjects;

import BusinessLayer.Shops.PendingOwner;

import java.util.List;

public class PendingOwnerDataObj {

    private List<String> ownerNames;

    private String pendingOwner;

    public PendingOwnerDataObj(List<String> ownerNames, String pendingOwner) {
        this.ownerNames = ownerNames;
        this.pendingOwner = pendingOwner;
    }

    public PendingOwnerDataObj(PendingOwner pendingOwnerObj) {
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
