package DataAccessLayer;


import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

public class ShopDAO {
	private EntityManagerFactory entityManagerFactory = Persistence.createEntityManagerFactory("market");
	private EntityManager entityManager = entityManagerFactory.createEntityManager();

	public void createShop(ShopDTO shop) {
		entityManager.getTransaction().begin();
		entityManager.persist(shop);
		entityManager.getTransaction().commit();
	}

	public void updateShop(ShopDTO shop) {
		entityManager.getTransaction().begin();
		entityManager.merge(shop);
		entityManager.getTransaction().commit();
	}

	public ShopDTO getShopById(int id) {
		return entityManager.find(ShopDTO.class, id);
	}

	// Other methods...
}