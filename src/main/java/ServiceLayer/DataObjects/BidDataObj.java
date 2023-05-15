package ServiceLayer.DataObjects;

import BusinessLayer.Bids.Bid;
import BusinessLayer.Bids.BidStatus;

public class BidDataObj {
    private int bidId;
    private String productName;
    private String status;
    private double price;
    public static final String approved = "APPROVED";
    public static final String pending = "PENDING";
    public static final String rejected = "REJECTED";
    public BidDataObj(Bid bid){
        bidId = bid.getId();
        productName = bid.getProduct().getName();
        price = bid.getPrice();
        if(bid.getStatus().equals(BidStatus.PENDING))status = pending;
        if(bid.getStatus().equals(BidStatus.APPROVED))status = approved;
        if(bid.getStatus().equals(BidStatus.REJECTED))status = rejected;
    }
    public int getBidId(){
        return bidId;
    }
    public String getProductName(){
        return productName;
    }
    public String getStatus(){
        return status;
    }
    public double getBidPrice(){return price;}
}
