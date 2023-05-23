package BusinessLayer;

import BusinessLayer.Shops.Product;
import BusinessLayer.Shops.Shop;
import BusinessLayer.Shops.ShopProduct;
import BusinessLayer.Users.User;
import org.apache.commons.text.similarity.LevenshteinDistance;
import org.springframework.security.core.parameters.P;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;
import java.util.List;
import java.util.Map;

public class Main {
	//this class made only for tests
	public static void main(String[] args) throws Exception {
		LevenshteinDistance distance = new LevenshteinDistance();
		System.out.println(distance.apply("dany", "dani"));
		System.out.println("hello world!");

		Market market = new Market();

		String guest = market.startSession();
		User user = market.login(guest, "admin", "Aa123456");
		List<User> users = market.getAllUsers( "admin");
		System.out.println("a");
	}

	public static void getShop(){
		EntityManagerFactory entityManagerFactory = Persistence.createEntityManagerFactory("market");
		EntityManager entityManager = entityManagerFactory.createEntityManager();


		String shopName = "shopFirst1"; // The name of the shop you want to retrieve

		Shop shop = entityManager.find(Shop.class, shopName);

		//TODO: add to every class default constructor with terenint
		if (shop != null) {
			// Shop found in the database

			// Access the products map
			List<ShopProduct> products = shop.getProducts();

		} else {
			// Shop not found in the database
			System.out.println("Shop not found");
		}

	}
}
