package DataAccessLayer;


import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;
import javax.persistence.TypedQuery;
import java.util.List;

public class ProductDAO {
	private EntityManagerFactory entityManagerFactory = Persistence.createEntityManagerFactory("market");
	private EntityManager entityManager = entityManagerFactory.createEntityManager();

	public void createProduct(ProductDTO product) {
		entityManager.getTransaction().begin();
		entityManager.persist(product);
		entityManager.getTransaction().commit();
	}

	public void updateProduct(ProductDTO product) {
		entityManager.getTransaction().begin();
		entityManager.merge(product);
		entityManager.getTransaction().commit();
	}

	public ProductDTO getProductById(int id) {
		return entityManager.find(ProductDTO.class, id);
	}

	// Other methods...
}