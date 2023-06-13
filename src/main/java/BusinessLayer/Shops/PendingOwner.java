package BusinessLayer.Shops;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
public class PendingOwner {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ElementCollection
    @CollectionTable(name = "owner_names", joinColumns = @JoinColumn(name = "owner_id"))
    @Column(name = "owner_name")
    private List<String> ownerNames;

    private String pendingOwner;

    public PendingOwner() {
        ownerNames = new ArrayList<>();
     }
    public PendingOwner(String pendingOwner) {
        ownerNames = new ArrayList<>();
        this.pendingOwner = pendingOwner;
    }



    public Long getId() {
        return id;
    }

    public List<String> getOwnerNames() {
        return ownerNames;
    }

    public void setOwnerNames(List<String> ownerNames) {
        this.ownerNames = ownerNames;
    }

    public void addActor(String actor) {
        ownerNames.add(actor);
    }
    public void removeActor(String actor) {
        ownerNames.remove(actor);
    }

    public boolean isExists(String actor) {
        return ownerNames.contains(actor);
    }

//    public void setPendingOwner(String pendingOwner) {
//        this.pendingOwner = pendingOwner;
//    }
    public String getPendingOwner() {
        return pendingOwner;
    }
}
