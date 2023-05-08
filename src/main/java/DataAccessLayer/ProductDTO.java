package DataAccessLayer;

import BusinessLayer.Shops.ProductIntr;
import org.apache.commons.text.similarity.LevenshteinDistance;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import java.io.Serializable;
import java.util.concurrent.locks.Lock;
import java.util.concurrent.locks.ReentrantLock;

@Entity
@Table(name = "products")
public class ProductDTO implements Serializable {
	protected static final ProductDAO productDAO = new ProductDAO();

	@Id
	@Column(name = "shopName")
	protected String shopName;
	@Id
	@Column(name = "name")
	protected String name;
	@Column(name = "category")
	protected String category;
	@Column(name = "description")
	protected String description;
	@Column(name = "price")
	protected double price;

	protected ProductDTO(String name, String category, String description, double price, String shopName) {
		this.name = name;
		this.category = category;
		this.description = description;
		this.price = price;
		this.shopName = shopName;
	}

	public static ProductDTO createProductDTO(String name, String category, String description, double price, String shopName){
		ProductDTO productDTO = new ProductDTO(name, category, description, price, shopName);
		productDAO.createProduct(productDTO);
		return productDTO;
	}

	protected void update(){
		productDAO.updateProduct(this);
	}

	public String getShopName() {
		return shopName;
	}

	public void setShopName(String shopName) {
		this.shopName = shopName;
		update();
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
		update();
	}

	public String getCategory() {
		return category;
	}

	public void setCategory(String category) {
		this.category = category;
		update();
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
		update();
	}

	public double getPrice() {
		return price;
	}

	public void setPrice(double price) {
		this.price = price;
		update();
	}
}
