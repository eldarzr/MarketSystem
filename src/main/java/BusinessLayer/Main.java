package BusinessLayer;

import BusinessLayer.Shops.Product;
import BusinessLayer.Shops.ShopProduct;
import org.apache.commons.text.similarity.LevenshteinDistance;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

public class Main {
	//this class made only for tests
	public static void main(String[] args) throws Exception {
		LevenshteinDistance distance = new LevenshteinDistance();
		System.out.println(distance.apply("dany", "dani"));
		System.out.println("hello world!");

//		EntityManagerFactory entityManagerFactory = Persistence.createEntityManagerFactory("market");
//
//// Step 5: Create an instance of EntityManager
//		EntityManager entityManager = entityManagerFactory.createEntityManager();

// Step 6: Use JPA APIs to perform database operations
// Create a new product
//		ShopProduct product = new ShopProduct.createProduct("prod1", "cat1", "desc1", 2, "shop1");
//		Product shopProduct = Product("prod1", "cat1", "desc1", 2, "shop1");
		ShopProduct product = ShopProduct.createProduct("prod1", "cat1", "desc1", 2, "shop1");


	}
}
