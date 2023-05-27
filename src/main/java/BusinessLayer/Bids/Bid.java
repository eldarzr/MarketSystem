package BusinessLayer.Bids;


import BusinessLayer.Shops.Product;

import javax.persistence.*;

@Entity
@Table(name = "bids")
public class Bid {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    @Column(name = "user_name")
    private final String userName;
    @Column(name = "b_id")
    private final int b_id;
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "product_id")
    private final Product product;
    @Column(name = "price")
    private final double price;

    @Enumerated(EnumType.STRING)
    private BidStatus status;

    public Bid() {
        userName = null;
        b_id = 0;
        product = null;
        price = 0.0;
    }

    public Bid(String userName, int id, Product product, double price) throws Exception {
        this.userName = userName;
        this.b_id = id;
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
        return b_id;
    }

    public String getUserName() {
        return userName;
    }
}
