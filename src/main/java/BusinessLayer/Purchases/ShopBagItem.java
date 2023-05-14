package BusinessLayer.Purchases;

import BusinessLayer.Shops.Product;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "shop_bag_items")
public class ShopBagItem implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumns({
            @JoinColumn(name="shop_name", referencedColumnName="shopName", insertable = false, updatable = false),
            @JoinColumn(name="product_name", referencedColumnName="productName", insertable = false, updatable = false)
    })
    private Product product;

    @Column(name = "product_name")
    private String productName;

    @Column(name = "shop_name")
    private String shopName;

    private int quantity;

    public ShopBagItem(Product product, int quantity) {
        this.product = product;
        this.quantity = quantity;
        this.productName = product.getName();
        this.shopName = product.getShopName();
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
        return new ShopBagItem(product.deepClone(),quantity);
    }

    public String getProductName() {
        return productName;
    }
}
