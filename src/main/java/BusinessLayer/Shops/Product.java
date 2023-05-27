package BusinessLayer.Shops;

import BusinessLayer.ProductId;
import org.apache.commons.text.similarity.LevenshteinDistance;

import javax.persistence.*;
import java.io.Serializable;
import java.util.concurrent.locks.Lock;
import java.util.concurrent.locks.ReentrantLock;

@Entity
@Table(name = "products")
//@IdClass(ProductId.class)
public class Product implements ProductIntr, Serializable {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@Transient
	Lock productLock = new ReentrantLock();

//	@Id
	@Column(name = "shopName")
	protected String shopName;
//	@Id
	@Column(name = "productName")
	protected String name;
	@Column(name = "category")
	protected String category;
	@Column(name = "description")
	protected String description;
	@Column(name = "price")
	protected double price;
	@Transient
	protected double MIN_PRICE = 0;
	@Transient
	protected double MIN_DESCRIPTION_LENGTH = 5;
	@Transient
	protected double MAX_DESCRIPTION_LENGTH = 255;
	@Transient
	protected double MIN_CATEGORY_LENGTH = 3;
	@Transient
	protected double MAX_CATEGORY_LENGTH = 30;
	@Transient
	protected double MIN_NAME_LENGTH = 3;
	@Transient
	protected double MAX_NAME_LENGTH = 255;

	public Product(String name, String category, String description, double price, String shopName) {
		this.name = name;
		this.category = category;
		this.description = description;
		this.price = price;
		this.shopName = shopName;
	}

	protected Product() { }

	private Product(Product product) {
		this.name = product.getName();
		this.category = product.getCategory();
		this.description = product.getDescription();
		this.price = product.getPrice();
		this.shopName = product.getShopName();
	}

	public void setName(String name) throws Exception {
		if(name.length() > MAX_NAME_LENGTH)
			throw new Exception(String.format("product name must be shorter then %d", MAX_NAME_LENGTH));
		if(name.length() < MIN_NAME_LENGTH)
			throw new Exception(String.format("product name must be longer then %d", MIN_NAME_LENGTH));
		this.name = name;
	}

	public void setCategory(String category) throws Exception {
		if(category.length() > MAX_CATEGORY_LENGTH)
			throw new Exception(String.format("product category must be shorter then %d", MAX_CATEGORY_LENGTH));
		if(category.length() < MIN_CATEGORY_LENGTH)
			throw new Exception(String.format("product category must be longer then %d", MIN_CATEGORY_LENGTH));
		this.category = category;
	}

	public void setPrice(double price) {
		if(price < MIN_PRICE)
			throw new IllegalArgumentException(String.format("product price must be bigger then %f", MIN_PRICE));
		this.price = price;
	}

	@Override
	public String getName() {
		return name;
	}

	@Override
	public String getCategory() {
		return category;
	}

	@Override
	public double getPrice() {
		return price;
	}

	@Override
	public boolean isOnPrice(double minPrice, double maxPrice) {
		return this.price >= minPrice && this.price <= maxPrice;
	}

	@Override
	public boolean isOnCategory(String category) {
		LevenshteinDistance distance = new LevenshteinDistance();
		return distance.apply(this.category.toLowerCase(), category.toLowerCase()) <= 0;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) throws Exception {
		if(description.length() > MAX_DESCRIPTION_LENGTH)
			throw new Exception(String.format("product description must be shorter then %s", MAX_DESCRIPTION_LENGTH));
		if(description.length() < MIN_DESCRIPTION_LENGTH)
			throw new Exception(String.format("product description must be longer then %s", MIN_DESCRIPTION_LENGTH));
		this.description = description;
	}

	public Lock getProductLock() {
		return productLock;
	}

	public void lockProduct(){
		productLock.lock();
		System.out.println("!!!!!!!!!!!!!!!!!!11" + name);
	}

	public void unlockProduct(){
		productLock.unlock();
		System.out.println("@@@@@@@@@@@@@@@@@@@@@@@@@@@2" + name);
	}

	public String getShopName() {
		return shopName;
	}

	public void setShopName(String shopName) {
		this.shopName = shopName;
	}

	public Product deepClone() {
		return new Product(this);
	}

	public Long getId() {
		return id;
	}
}
