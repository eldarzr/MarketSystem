package BusinessLayer.Shops;

import org.apache.commons.text.similarity.LevenshteinDistance;

import java.util.Locale;

public class Product implements ProductIntr{

	private String name;
	private String category;
	private double price;

	public Product(String name, String category, double price) {
		this.name = name;
		this.category = category;
		this.price = price;
	}

	public void setName(String name) {
		this.name = name;
	}

	public void setCategory(String category) {
		this.category = category;
	}

	public void setPrice(double price) {
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
}
