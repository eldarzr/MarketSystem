package BusinessLayer.Shops;

import BusinessLayer.Bids.BidIdToApprovesConverter;
import BusinessLayer.MemberRoleInShop;
import BusinessLayer.Purchases.ShopInfo;

import javax.persistence.*;
import java.util.*;
import java.util.concurrent.ConcurrentHashMap;

@Entity
@Table(name = "owners_handler")
public class OwnersHandler {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @OneToOne(mappedBy = "ownersHandler")
    private Shop shop;

    @ElementCollection
    @CollectionTable(name = "pending_owners", joinColumns = @JoinColumn(name = "owner_id"))
    @MapKeyColumn(name = "owner_name")
    private Map<String, PendingOwner> pendingOwners;

    @ElementCollection
    @CollectionTable(name = "pending_by_grantor", joinColumns = @JoinColumn(name = "owners_handler_id"))
    @MapKeyColumn(name = "owner_name")
    @Column(name = "pending_owner")
    private Map<String, String> pendingByGrantor;


    public OwnersHandler() {
    }
    public OwnersHandler(Shop shop) {
        this.pendingOwners = new ConcurrentHashMap<>();
        this.pendingByGrantor = new ConcurrentHashMap<>();
        this.shop = shop;
    }


    public void addOwner(String actOn, Shop shop, String actor) throws Exception {
        //MemberRoleInShop pendingOwner = MemberRoleInShop.createDemiOwner(actOn,shop,actor.getUserName());
        this.pendingOwners.put(actOn,new PendingOwner(actOn));
        this.pendingByGrantor.put(actOn,actor);

        //return approveOwner(actor,actOn);
    }

    public boolean approveOwner(String actor, String actOn) throws Exception {

        //MemberRoleInShop reqRole = null;
        String reqFutureOwner = null;
        for (String role : pendingOwners.keySet()) {
            //Looking for the future owner
            if (role.equals(actOn)) {
                reqFutureOwner = role;
                if(!pendingOwners.get(role).isExists(actor))
                    pendingOwners.get(role).addActor(actor);
                break;
            }
        }
        if ( reqFutureOwner == null) {
            throw new Exception("there is no such user named:" + actOn + "who supposed to be a future owner");
        }
        if (validateRemains(reqFutureOwner)) {
            String grantor;
            if(!pendingByGrantor.containsKey(actOn))
                throw new Exception("failed to acheive the grantor of the future owner");
            MemberRoleInShop.createOwner(actOn, this.shop, pendingByGrantor.get(actOn));
            pendingOwners.remove(actOn);
            pendingByGrantor.remove(actOn);
            return true;
        }


//        MemberRoleInShop reqRole = null;
//        for (MemberRoleInShop role : pendingOwners.keySet()) {
//            //Looking for the future owner
//            if (role.getUserName().equals(actOn)) {
//                reqRole = role;
//                pendingOwners.get(role).add(actor);
//                break;
//            }
//        }
//        if (reqRole == null) {
//            throw new Exception("there is no such user named:" + actOn + "who supposed to be a future owner");
//        }
//        if (validateRemains(reqRole)) {
//            MemberRoleInShop.createOwner(actOn, reqRole.getRoleShop(), reqRole.getGrantor());
//            //PersistenceManager.getInstance().updateObj(this);
////            pendingOwners.remove(actOn);
//            pendingOwners.remove(reqRole);
//            return true;
//        }

        return false;
    }

    private boolean validateRemains(String reqRole) {
        List<String> currentOwners = this.shop.getOwnersNames();
        //List<MemberRoleInShop> currentOwners = shop.getOwners();
        for(String owner : pendingOwners.get(reqRole).getOwnerNames()){
            if(currentOwners.contains(owner))
                currentOwners.remove(owner);
        }
        return currentOwners.isEmpty();

    }

    public List<String> getPendings() {
        return pendingByGrantor.keySet().stream().toList();
    }

    public List<PendingOwner> getPendingsOwnersObj() {
        return pendingOwners.values().stream().toList();
    }

}
