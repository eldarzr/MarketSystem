package BusinessLayer.Shops;

import org.apache.commons.text.similarity.LevenshteinDistance;

import java.util.Locale;

public class Product implements ProductIntr{

	protected String name;
	protected String category;
	protected String description;
	protected double price;
	protected double MIN_PRICE = 0;
	protected double MIN_DESCRIPTION_LENGTH = 5;
	protected double MAX_DESCRIPTION_LENGTH = 500;
	protected double MIN_CATEGORY_LENGTH = 3;
	protected double MAX_CATEGORY_LENGTH = 30;
	protected double MIN_NAME_LENGTH = 3;
	protected double MAX_NAME_LENGTH = 300;

	protected Product(String name, String category, String description, double price) {
		this.name = name;
		this.category = category;
		this.description = description;
		this.price = price;
	}

	protected Product() { }

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

	public void setPrice(double price) throws Exception {
		if(price < MIN_PRICE)
			throw new Exception(String.format("product price must be bigger then %d", MIN_PRICE));
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
}
