package BusinessLayer.Bids;

import BusinessLayer.Shops.Product;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.atomic.AtomicInteger;

public class BidData {
    private AtomicInteger nextBidId;
    private Map<Integer,Bid> bidMap;
    public BidData(){
        nextBidId = new AtomicInteger(0);
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
}
