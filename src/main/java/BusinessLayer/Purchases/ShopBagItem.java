package BusinessLayer.Purchases;

import BusinessLayer.ProductId;
import BusinessLayer.ShopBagItemId;
import BusinessLayer.Shops.Product;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "shop_bag_items")
//@IdClass(ShopBagItemId.class)
public class ShopBagItem implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumns({
            @JoinColumn(name="shopName", referencedColumnName="shopName", insertable = false, updatable = false),
            @JoinColumn(name="productName", referencedColumnName="productName", insertable = false, updatable = false)
    })
//    @Transient
    private Product product;

//    @Id
    @Column(name = "productName")
    private String productName;

//    @Id
    @Column(name = "shopName")
    private String shopName;

//    @Id
    @Column(name = "userName")
    private String userName;

    private int quantity;

    public ShopBagItem() {
    }

    public ShopBagItem(Product product, int quantity, String userName) {
        this.product = product;
        this.quantity = quantity;
        this.productName = product.getName();
        this.shopName = product.getShopName();
        this.userName = userName;
    }

    public Product getProduct() {
        return product;
    }

    public void setProduct(Product product) {
        this.product = product;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    public ShopBagItem deepClone() {
        return new ShopBagItem(product.deepClone(),quantity, userName);
    }

    public String getProductName() {
        return productName;
    }

    public Long getId() {
        return id;
    }

    public String getShopName() {
        return shopName;
    }

    public String getUserName() {
        return userName;
    }
}
