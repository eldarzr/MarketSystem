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

//		EntityManagerFactory entityManagerFactory = Persistence.createEntityManagerFactory("market");
//		EntityManager entityManager = entityManagerFactory.createEntityManager();
//
//		Shop shop = entityManager.find(Shop.class, "Gabi's Goods 1");
//		System.out.println("aaa");
//
		Market market = new Market();
//		market.register("eldar222", "eldar@gmail.com", "Aa123456");
//		String guest = market.startSession();
//		User user = market.login(guest, "eldar222", "Aa123456");
//		market.searchShop(user.getName(), "shopFirst1");
//		market.resetAll();
		market.init();
//		System.out.println(product.getCategory());

//		getShop();
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
