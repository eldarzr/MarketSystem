package BusinessLayer.Bids;


import BusinessLayer.Shops.Product;

public class Bid {
    private final String userName;
    private final int id;
    private final Product product;
    private final double price;
    private BidStatus status;
    public Bid(String userName, int id, Product product, double price) throws Exception {
        this.userName = userName;
        this.id = id;
        this.status = BidStatus.PENDING;
        this.price = price;
        this.product = product;
        checkPrice(price);
    }

    private void checkPrice(double price) throws Exception {
        if(price >= product.getPrice()){
            throw new Exception("Cant bid a price higher than the original price.");
        }
        if(price <= 0){
            throw new Exception("Cant bid a negative price.");
        }
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

    public String getUserName() {
        return userName;
    }
}
