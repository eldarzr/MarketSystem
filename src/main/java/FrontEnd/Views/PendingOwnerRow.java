package FrontEnd.Views;

import com.vaadin.flow.component.button.Button;

public class PendingOwnerRow {
    private String ownerName;
    private Button approvalButton;

    public PendingOwnerRow(String ownerName, Button approvalButton) {
        this.ownerName = ownerName;
        this.approvalButton = approvalButton;
    }

    public String getOwnerName() {
        return ownerName;
    }

    public void setOwnerName(String ownerName) {
        this.ownerName = ownerName;
    }

    public Button getApprovalButton() {
        return approvalButton;
    }

    public void setApprovalButton(Button approvalButton) {
        this.approvalButton = approvalButton;
    }
}

