package BusinessLayer;

import BusinessLayer.Shops.ShopRepository;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

public class PersistenceManager {
	private final EntityManagerFactory entityManagerFactory;
	private final EntityManager entityManager;
	private static final PersistenceManager instance = new PersistenceManager();


	private PersistenceManager() {
		entityManagerFactory = Persistence.createEntityManagerFactory("market");
		entityManager = entityManagerFactory.createEntityManager();
	}

	private static class PerMan {
		private static PersistenceManager instance = new PersistenceManager() ;
	}

	public static PersistenceManager getInstance() {
		return PersistenceManager.PerMan.instance;
	}


	public EntityManager getEntityManager() {
		return entityManager;
	}
}
