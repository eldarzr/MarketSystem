package BusinessLayer;

import BusinessLayer.Shops.ShopRepository;
import BusinessLayer.Users.User;

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
import java.util.concurrent.locks.Lock;
import java.util.concurrent.locks.ReentrantLock;

public class PersistenceManager {
	private final EntityManagerFactory entityManagerFactory;
	private EntityManager entityManager;
	private static final PersistenceManager instance = new PersistenceManager();
	private Lock lock = new ReentrantLock();


	private PersistenceManager() {
		entityManagerFactory = Persistence.createEntityManagerFactory("market");
		entityManager = entityManagerFactory.createEntityManager();
	}

	public void setTestEntityManager(EntityManager entityManager) {
		this.entityManager = entityManager;
	}

	public void setRealEntityManager() {
		this.entityManager = entityManagerFactory.createEntityManager();
	}

	public void reset() {
		int tries = 5;
		lock = new ReentrantLock();
		boolean success = false;
		while (!success && tries > 0) {
			try {
				List<String> tableNames = getAllTableNames();

				EntityManager entityManager = PersistenceManager.getInstance().getEntityManager();
				lock.lock();
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
				resetEntityManager();
				success = true;
				lock.unlock();
			} catch (Exception e) {
				if (lock.tryLock())
					lock.unlock();
				tries--;
				if (tries == 0)
					throw e;
			}
//			finally {
//				lock.unlock();
//			}
		}

	}


	public List<String> getAllTableNames() {
		List<String> tableNames;
		try {
			EntityManager entityManager = PersistenceManager.getInstance().getEntityManager();
			lock.lock();
			entityManager.getTransaction().begin();
			 tableNames = entityManager.createNativeQuery(
					"SELECT TABLE_NAME FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_SCHEMA = 'market'"
			).getResultList();
			entityManager.getTransaction().commit();
//		entityManager.close();
		}
		finally {
			lock.unlock();
		}
		return tableNames;
	}

	private static class PerMan {
		private static PersistenceManager instance = new PersistenceManager() ;
	}

	public static PersistenceManager getInstance() {
		return PersistenceManager.PerMan.instance;
	}


	public EntityManager getEntityManager() {
		if (entityManager.getTransaction().isActive())
			entityManager.getTransaction().commit();
		if (!entityManager.isOpen())
			entityManager = entityManagerFactory.createEntityManager();
		return entityManager;
	}

	public void resetEntityManager() {
		entityManager = entityManagerFactory.createEntityManager();
	}

	public void persistObj(Object obj) {
		try {
			EntityManager entityManager = PersistenceManager.getInstance().getEntityManager();
		lock.lock();
			entityManager.getTransaction().begin();
			entityManager.persist(obj);
			entityManager.getTransaction().commit();
		} finally {
			lock.unlock();
		}
	}

	public void updateObj(Object obj) {
		try {
		EntityManager entityManager = PersistenceManager.getInstance().getEntityManager();
		lock.lock();
		entityManager.getTransaction().begin();
		entityManager.merge(obj);
		entityManager.getTransaction().commit();
		} finally {
			lock.unlock();
		}
	}

	public void removeConnectionFromDB(Object holder, Object needToRemove) {
		try {
			EntityManager entityManager = PersistenceManager.getInstance().getEntityManager();
			lock.lock();
			entityManager.getTransaction().begin();
			entityManager.remove(needToRemove);
			entityManager.merge(holder);
			entityManager.getTransaction().commit();
		}
		finally {
			lock.unlock();
		}
	}

	public void removeFromDB(Object needToRemove) {
		try {
			EntityManager entityManager = PersistenceManager.getInstance().getEntityManager();
			lock.lock();
			entityManager.clear();
			entityManager.getTransaction().begin();
			Object managedShopBagItem = entityManager.merge(needToRemove);
			entityManager.remove(managedShopBagItem);
			entityManager.getTransaction().commit();
		}
		finally {
			lock.unlock();
		}
	}
}
