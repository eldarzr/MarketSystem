package DataAccessLayer;


import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

public class ShopProductDAO {
	private EntityManagerFactory entityManagerFactory = Persistence.createEntityManagerFactory("market");
	private EntityManager entityManager = entityManagerFactory.createEntityManager();

	public void createProduct(ShopProductDTO product) {
		entityManager.getTransaction().begin();
		entityManager.persist(product);
		entityManager.getTransaction().commit();
	}

	public void updateProduct(ShopProductDTO product) {
		entityManager.getTransaction().begin();
		entityManager.merge(product);
		entityManager.getTransaction().commit();
	}

	public ShopProductDTO getProductById(int id) {
		return entityManager.find(ShopProductDTO.class, id);
	}

	// Other methods...
}