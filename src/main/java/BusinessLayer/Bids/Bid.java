package BusinessLayer.Bids;

import BusinessLayer.Shops.Product;

public class Bid {
    private final int id;
    private final Product product;
    private final double price;
    private BidStatus status;
    public Bid(int id, Product product, double price){
        this.id = id;
        this.status = BidStatus.PENDING;
        this.price = price;
        this.product = product;
    }
    private void checkPending() throws Exception {
        if(status!=BidStatus.PENDING)
            throw new Exception("Bid error: bid isn't pending");
    }
    public void approve() throws Exception {
        checkPending();
        status = BidStatus.APPROVED;
        product.setPrice(price);
    }
    public void reject() throws Exception {
        checkPending();
        status = BidStatus.REJECTED;
    }
    public Product getProduct(){
        return product;
    }
    public double getPrice(){
        return price;
    }
    public BidStatus getStatus(){
        return status;
    }
    public int getId() {
        return id;
    }
}
