package BusinessLayer;

import BusinessLayer.Shops.ShopRepository;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;
import javax.persistence.metamodel.EntityType;
import java.sql.Connection;
import java.sql.DatabaseMetaData;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

public class PersistenceManager {
	private final EntityManagerFactory entityManagerFactory;
	private final EntityManager entityManager;
	private static final PersistenceManager instance = new PersistenceManager();


	private PersistenceManager() {
		entityManagerFactory = Persistence.createEntityManagerFactory("market");
		entityManager = entityManagerFactory.createEntityManager();
	}

	public void reset() {
		List<String> tableNames = getAllTableNames();
        entityManager.getTransaction().begin();
		entityManager.createNativeQuery("SET FOREIGN_KEY_CHECKS = 0").executeUpdate();
		entityManager.getTransaction().commit();

		entityManager.getTransaction().begin();
		for (String tableName : tableNames) {
			entityManager.createNativeQuery("DELETE FROM " + tableName).executeUpdate();
		}
        entityManager.getTransaction().commit();
		entityManager.clear();

	}

	public List<String> getAllTableNames() {
		List<String> tableNames = entityManager.createNativeQuery(
				"SELECT TABLE_NAME FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_SCHEMA = 'market'"
		).getResultList();

		return tableNames;
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

	public void persistObj(Object obj) {
		PersistenceManager.getInstance().getEntityManager().getTransaction().begin();
		PersistenceManager.getInstance().getEntityManager().persist(obj);
		PersistenceManager.getInstance().getEntityManager().getTransaction().commit();
	}

	public void updateObj(Object obj) {
		PersistenceManager.getInstance().getEntityManager().getTransaction().begin();
		PersistenceManager.getInstance().getEntityManager().merge(obj);
		PersistenceManager.getInstance().getEntityManager().getTransaction().commit();
	}
}
