package BusinessLayer;

import BusinessLayer.Shops.ProductIntr;

import java.util.List;
import java.util.stream.Collectors;

public class Search {

	private String name;
	private String cat;
	private double minPrice;
	private double maxPrice;
	public static int IGNORED_INT = -1;
	public static String IGNORED_STRING = null;

	private Search(String name, String cat, double minPrice, double maxPrice) {
		this.name = name;
		this.cat = cat;
		this.minPrice = minPrice;
		this.maxPrice = maxPrice;
	}

	public static Search createBasicSearch(String name){
		return new Search(name, IGNORED_STRING,IGNORED_INT, IGNORED_INT);
	}

	public static Search createExtendedSearch(String name, String cat, double minPrice, double maxPrice){
		return new Search(name, cat, minPrice, maxPrice);
	}

	public List<ProductIntr> apply(List<ProductIntr> products){
		products = filterMinBound(products);
		products = filterMaxBound(products);
		products = filterCategory(products);
		return products;
	}

	private List<ProductIntr> filterCategory(List<ProductIntr> products) {
		return this.cat != IGNORED_STRING ?
				products.stream().filter(prod -> prod.isOnCategory(this.cat)).collect(Collectors.toList()) :
				products;
	}

	private List<ProductIntr> filterMaxBound(List<ProductIntr> products) {
		return this.maxPrice != IGNORED_INT ?
				products.stream().filter(prod -> prod.getPrice() <= this.maxPrice).collect(Collectors.toList()) :
				products;
	}

	private List<ProductIntr> filterMinBound(List<ProductIntr> products) {
		return this.minPrice != IGNORED_INT ?
				products.stream().filter(prod -> prod.getPrice() >= this.minPrice).collect(Collectors.toList()) :
				products;
	}
}
