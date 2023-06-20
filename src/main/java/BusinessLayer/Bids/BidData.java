package BusinessLayer.Bids;

import BusinessLayer.Shops.Product;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

@Entity
@Table(name = "bid_datas")
public class BidData {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;


    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "next_bid_id_id")
    private BidDataIdIndexer nextBidId;

    @OneToMany(cascade = CascadeType.ALL)
    @JoinColumn(name = "bid_data_id")
    private Map<Integer,Bid> bidMap;

    public BidDataIdIndexer getNextBidId() {
        return nextBidId;
    }

    public void setNextBidId(BidDataIdIndexer nextBidId) {
        this.nextBidId = nextBidId;
    }

    public BidData(){
        nextBidId = new BidDataIdIndexer();
        bidMap = new ConcurrentHashMap<>();
    }
    private Collection<Bid> filterBidsByStatus(Collection<Bid> toFilter, BidStatus status){
        Collection<Bid> bids = new ArrayList<>();
        for(Bid b : toFilter)
            if(b.getStatus() == status)
                bids.add(b);
        return bids;
    }

    private Collection<Bid> findBidsByProduct(String productName){
        Collection<Bid> bids = new ArrayList<>();
        for(Bid b : bidMap.values())
            if(b.getProduct().getName().equals(productName))
                bids.add(b);
        return bids;
    }
    public Collection<Bid> getBidsForProduct(String productName, String shopName) {
        return findBidsByProduct(productName);
    }
    public Collection<Bid> getPendingBids(){
        return filterBidsByStatus(bidMap.values(),BidStatus.PENDING);
    }
    public Collection<Bid> getApprovedBids(){
        return filterBidsByStatus(bidMap.values(),BidStatus.APPROVED);
    }
    public Collection<Bid> getRejectedBids(){
        return filterBidsByStatus(bidMap.values(),BidStatus.REJECTED);
    }
    public void approveBid(int id) throws Exception {
        Bid bid = bidMap.get(id);
        if(bid == null)throw new Exception("Bid with id: "+id+" not found");
        bid.approve();
    }
    public void rejectBid(int id) throws Exception {
        Bid bid = bidMap.get(id);
        if(bid == null)throw new Exception("Bid with id: "+id+" not found");
        bid.reject();
    }
    public int createNewBid(String userName, Product product, double price) throws Exception {
        Bid bid = new Bid(userName, nextBidId.get(),product,price);
        bidMap.put(nextBidId.get(),bid);
        nextBidId.getAndAdd(1);
        return bid.getId();
    }
    public Bid getBid(int id) throws Exception {
        if(!bidMap.containsKey(id))throw new Exception("No bid with id: "+id);
        return bidMap.get(id);
    }

    public List<Bid> getAllBids() {
        return bidMap.values().stream().toList();
    }
}
