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

		EntityManager entityManager = PersistenceManager.getInstance().getEntityManager();
		entityManager.getTransaction().begin();

		// Disable foreign key checks
		entityManager.createNativeQuery("SET FOREIGN_KEY_CHECKS = 0").executeUpdate();

		// Delete all records from all tables
		for (String tableName : tableNames) {
			String deleteQuery = String.format("DELETE FROM %s;", tableName);
			entityManager.createNativeQuery(deleteQuery).executeUpdate();
		}

		// Re-enable foreign key checks
		entityManager.createNativeQuery("SET FOREIGN_KEY_CHECKS = 1").executeUpdate();

		entityManager.getTransaction().commit();

		entityManager.close();
	}


	public List<String> getAllTableNames() {
		EntityManager entityManager = PersistenceManager.getInstance().getEntityManager();
		entityManager.getTransaction().begin();
		List<String> tableNames = entityManager.createNativeQuery(
				"SELECT TABLE_NAME FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_SCHEMA = 'market'"
		).getResultList();
		entityManager.getTransaction().commit();
		entityManager.close();
		return tableNames;
	}

	private static class PerMan {
		private static PersistenceManager instance = new PersistenceManager() ;
	}

	public static PersistenceManager getInstance() {
		return PersistenceManager.PerMan.instance;
	}


	public EntityManager getEntityManager() {
		return entityManagerFactory.createEntityManager();
	}

	public void persistObj(Object obj) {
		try {
			EntityManager entityManager = PersistenceManager.getInstance().getEntityManager();
			entityManager.getTransaction().begin();
			entityManager.persist(obj);
			entityManager.getTransaction().commit();
		} finally {
			entityManager.close();
		}
	}

	public void updateObj(Object obj) {
		try {
			EntityManager entityManager = PersistenceManager.getInstance().getEntityManager();
			entityManager.getTransaction().begin();
			entityManager.merge(obj);
			entityManager.getTransaction().commit();
		} finally {
			entityManager.close();
		}
	}
}
