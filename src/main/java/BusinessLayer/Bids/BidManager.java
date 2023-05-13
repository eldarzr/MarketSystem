package BusinessLayer.Bids;

import BusinessLayer.Shops.Product;
import BusinessLayer.Shops.Shop;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

public class BidManager {
    private BidData bidData;
    private Map<Integer, List<String>> bidIdToApproves;
    public BidManager(){
        bidData = new BidData();
        bidIdToApproves = new ConcurrentHashMap<>();
    }
    public int createNewBid(Product product, double price){
        int res =  bidData.createNewBid(product, price);
        bidIdToApproves.put(res,new ArrayList<>());
        return res;
    }
    public void approveBid(int id, String userName, Collection<String> shouldApprove) throws Exception {
        // Check if the bid exists
        if(!bidIdToApproves.containsKey(id))throw new Exception("bid with id "+id+" doesn't exist");
        // Check if the bid is currently pending
        if(bidData.getBid(id).getStatus() != BidStatus.PENDING)throw new Exception("Bid "+id+" isn't pending");

        // Check if the user is authorized to approve it
        if(!shouldApprove.contains(userName))throw new Exception("user "+userName+" cannot approve bid "+id);
        List<String> approves = bidIdToApproves.get(id);

        // Check if the user has already approved this bid
        if(approves.contains(userName))throw new Exception(userName+" already approved bid "+id);

        approves.add(userName);
        boolean fullyApproved = checkFullyApproved(id,shouldApprove);
        if(fullyApproved){
            bidData.approveBid(id);
        }
    }
    // This function assumes there is a bid with the given ID !!
    private boolean checkFullyApproved(int id, Collection<String> shouldApprove) {
        for(String s : shouldApprove)
            if(!bidIdToApproves.get(id).contains(s))
                return false;
        return true;
    }
    public void rejectBid(int id,String userName,Collection<String> shouldApprove) throws Exception {
        if(!shouldApprove.contains(userName))
            throw new Exception(userName+" isn't authorized to reject bid "+id);
        bidData.rejectBid(id);
    }
    public Collection<Bid> getPendingBids(String shopName){
        return bidData.getPendingBids(shopName);
    }
    public Collection<Bid> getApprovedBids(String shopName){
        return bidData.getApprovedBids(shopName);
    }
    public Collection<Bid> getRejectedBids(String shopName){
        return bidData.getRejectedBids(shopName);
    }


    public boolean isApproved(int bidId) throws Exception {
        return bidData.getBid(bidId).getStatus().equals(BidStatus.APPROVED);
    }

    public Bid getBid(int bidId) throws Exception {
        return bidData.getBid(bidId);
    }
}
