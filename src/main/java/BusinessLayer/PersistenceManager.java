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
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.concurrent.ConcurrentLinkedQueue;
import java.util.concurrent.locks.Lock;
import java.util.concurrent.locks.ReentrantLock;

import static java.lang.Thread.sleep;

public class PersistenceManager {
	private EntityManagerFactory entityManagerFactory;
	private EntityManager entityManager;
	private static final PersistenceManager instance = new PersistenceManager();
	private static ConcurrentLinkedQueue<PersistCallBack> needToBeSaveQueue = new ConcurrentLinkedQueue();
	private static Thread thread;
	private ReentrantLock lock = new ReentrantLock();
	private boolean programIsRunning = true;

	private static String table_scheme;

	private PersistenceManager() {
		entityManagerFactory = Persistence.createEntityManagerFactory("market");
		entityManager = entityManagerFactory.createEntityManager();
		thread = new Thread(this::handleUnsavedQueries);
		thread.start();
	}

	public void setTestEntityManager(EntityManager entityManager) {
		this.entityManager = entityManager;
	}

	public void setRealEntityManager() {
		this.entityManager = entityManagerFactory.createEntityManager();
	}

	public static void set_table_scheme(String ts) {
		table_scheme = ts;
	}

	public void reset() {
		int tries = 5;
		lock = new ReentrantLock();
		boolean success = false;
		needToBeSaveQueue = new ConcurrentLinkedQueue<>();
		programIsRunning = false;
		thread.interrupt();
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
				if (lock.isHeldByCurrentThread())
					lock.unlock();
			} catch (Exception e) {
				if (lock.isHeldByCurrentThread())
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
					String.format("SELECT TABLE_NAME FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_SCHEMA = '%s'", table_scheme)
			).getResultList();
			entityManager.getTransaction().commit();
//		entityManager.close();
		} finally {
			if (lock.isHeldByCurrentThread())
				lock.unlock();
		}
		return tableNames;
	}

	private static class PerMan {
		private static PersistenceManager instance = new PersistenceManager();
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
		} catch (Exception e) {
			needToBeSaveQueue.add(() -> persistObj(obj));
		} finally {
			if (lock.isHeldByCurrentThread())
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
		} catch (Exception e) {
			needToBeSaveQueue.add(() -> updateObj(obj));
		} finally {
			if (lock.isHeldByCurrentThread())
				lock.unlock();
		}
	}

	public void removeConnectionFromDB(Object holder, Object needToRemove) {
		try {
			EntityManager entityManager = PersistenceManager.getInstance().getEntityManager();
			lock.lock();
			entityManager.getTransaction().begin();
			if (needToRemove != null)
				entityManager.remove(needToRemove);
			if (holder != null)
				entityManager.remove(holder);
			entityManager.getTransaction().commit();
		} catch (Exception e) {
			needToBeSaveQueue.add(() -> removeConnectionFromDB(holder, needToRemove));
		} finally {
			if (lock.isHeldByCurrentThread())
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
		} catch (Exception e) {
			needToBeSaveQueue.add(() -> removeFromDB(needToRemove));
		} finally {
			if (lock.isHeldByCurrentThread())
				lock.unlock();
		}
	}

	public void handleUnsavedQueries() {
		while (programIsRunning) {
			try {
				sleep(5000);
				while (!needToBeSaveQueue.isEmpty()) {
					needToBeSaveQueue.peek().saveToDB();
					needToBeSaveQueue.remove();
				}
			} catch (Exception e) {
			}
		}
	}

}
