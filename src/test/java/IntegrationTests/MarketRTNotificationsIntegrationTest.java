package IntegrationTests;

import BusinessLayer.Market;
import BusinessLayer.Notifications.Notification;
import BusinessLayer.Shops.ProductIntr;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import java.util.Collection;
import java.util.LinkedList;
import java.util.List;

import static BusinessLayer.Search.IGNORED_INT;
import static BusinessLayer.Search.IGNORED_STRING;
import static org.junit.jupiter.api.Assertions.*;

class MarketRTNotificationsIntegrationTest {
	Market market;
	String[] usersName = {"eldar", "niv12","idan"};
	String[] passwords = {"Aa123456", "Aa123456","Aa123456"};
	String[] emails = {"eldar@gmail.com", "niv@gmail.com","idanyan@gmail.com"};
	String[] shopNames = {"shop1", "shop2","shop3"};
	String[] prodNames = {"prod1", "prod11", "prod111"};
	String[] descs = {"desc1", "desc2", "desc3"};
	String[] cats = {"cat1", "cat2", "cat3"};
	double[] prices = {5, 7, 10};

	@BeforeEach
	void setUp() throws Exception {
		market = new Market();
		market.init();
		for(int i = 0; i < usersName.length; i++) {
			String guestName = market.startSession();
			market.register(usersName[i], emails[i], passwords[i]);
			market.login(guestName,usersName[i], passwords[i]);
			market.createShop(usersName[i], shopNames[i]);
		}
	}

	@AfterEach
	void tearDown() {
		market.resetAll();
	}

	@Test
	void appointShopManagerSuccess() throws Exception {
		market.appointShopManager(usersName[0],usersName[1],shopNames[0]);
		Collection<Notification> notifications=market.getUserNotifications(usersName[1]);
		for(Notification notification: notifications)
		{
			if(notification.getMessage().equals(String.format("User %s appointed you as shop-manager of shop %s.", usersName[0], shopNames[0])))
			{
				assertTrue(true);
				return;
			}
		}
		fail();
	}

	@Test
	void appointShopManagerFail() throws Exception {
		market.appointShopManager(usersName[0],usersName[1],shopNames[0]);
		Collection<Notification> notifications=market.getUserNotifications(usersName[2]);
		for(Notification notification: notifications)
		{
			if(notification.getMessage().equals(String.format("User %s appointed you as shop-manager of shop %s.", usersName[0], shopNames[0])))
			{
				fail();
			}
		}
		assertTrue(true);
	}

	@Test
	void appointShopOwnerSuccess() throws Exception {
		market.appointShopOwner(usersName[0],usersName[1],shopNames[0]);
		Collection<Notification> notifications=market.getUserNotifications(usersName[1]);
		for(Notification notification: notifications)
		{
			if(notification.getMessage().equals(String.format("User %s appointed you as shop-owner of shop %s.", usersName[0], shopNames[0])))
			{
				assertTrue(true);
				return;
			}
		}
		fail();
	}

	@Test
	void appointShopOwnerFail() throws Exception {
		market.appointShopOwner(usersName[0],usersName[1],shopNames[0]);
		Collection<Notification> notifications=market.getUserNotifications(usersName[2]);
		for(Notification notification: notifications)
		{
			if(notification.getMessage().equals(String.format("User %s appointed you as shop-owner of shop %s.", usersName[0], shopNames[0])))
			{
				fail();
				return;
			}
		}
		assertTrue(true);
	}

	@Test
	void closeShopSuccess() throws Exception {
		market.appointShopOwner(usersName[0],usersName[1],shopNames[0]);
		market.closeShop(usersName[0],shopNames[0]);
		Collection<Notification> notifications=market.getUserNotifications(usersName[1]);
		for(Notification notification: notifications)
		{
			if(notification.getMessage().equals(String.format("User %s closed shop %s.", usersName[0], shopNames[0])))
			{
				assertTrue(true);
				return;
			}
		}
		fail();
	}

	@Test
	void closeShopFail() throws Exception {
		market.appointShopOwner(usersName[0],usersName[1],shopNames[0]);
		market.closeShop(usersName[0],shopNames[0]);
		Collection<Notification> notifications=market.getUserNotifications(usersName[2]);
		for(Notification notification: notifications)
		{
			if(notification.getMessage().equals(String.format("User %s closed shop %s.", usersName[0], shopNames[0])))
			{
				fail();
				return;
			}
		}
		assertTrue(true);
	}

	@Test
	void openShopSuccess() throws Exception {
		market.appointShopOwner(usersName[0],usersName[1],shopNames[0]);
		market.closeShop(usersName[0],shopNames[0]);
		market.openShop(usersName[0],shopNames[0]);
		Collection<Notification> notifications=market.getUserNotifications(usersName[1]);
		for(Notification notification: notifications)
		{
			if(notification.getMessage().equals(String.format("User %s opened shop %s.", usersName[0], shopNames[0])))
			{
				assertTrue(true);
				return;
			}
		}
		fail();
	}

	@Test
	void openShopFail() throws Exception {
		market.appointShopOwner(usersName[0],usersName[1],shopNames[0]);
		market.closeShop(usersName[0],shopNames[0]);
		market.openShop(usersName[0],shopNames[0]);
		Collection<Notification> notifications=market.getUserNotifications(usersName[2]);
		for(Notification notification: notifications)
		{
			if(notification.getMessage().equals(String.format("User %s opened shop %s.", usersName[0], shopNames[0])))
			{
				fail();
				return;
			}
		}
		assertTrue(true);
	}

	@Test
	void removeShopOwnerSuccess() throws Exception {
		market.appointShopOwner(usersName[0],usersName[1],shopNames[0]);
		market.removeShopOwner(usersName[0],usersName[1],shopNames[0]);
		Collection<Notification> notifications=market.getUserNotifications(usersName[1]);
		for(Notification notification: notifications)
		{
			if(notification.getMessage().equals(String.format("Manager %s removed you as shop-manager of shop %s.", usersName[0], shopNames[0])))
			{
				assertTrue(true);
				return;
			}
		}
		fail();
	}

	@Test
	void removeShopOwnerFail() throws Exception {
		market.appointShopOwner(usersName[0],usersName[1],shopNames[0]);
		market.removeShopOwner(usersName[0],usersName[1],shopNames[0]);
		Collection<Notification> notifications=market.getUserNotifications(usersName[2]);
		for(Notification notification: notifications)
		{
			if(notification.getMessage().equals(String.format("Manager %s removed you as shop-manager of shop %s.", usersName[0], shopNames[0])))
			{
				fail();
				return;
			}
		}
		assertTrue(true);
	}

	@Test
	void addNewProductSuccess() throws Exception {
		market.appointShopOwner(usersName[0],usersName[1],shopNames[0]);
		market.addNewProduct(usersName[0], shopNames[0], prodNames[0], cats[0], descs[0], prices[0]);
		Collection<Notification> notifications=market.getUserNotifications(usersName[1]);
		for(Notification notification: notifications)
		{
			if(notification.getMessage().equals(String.format("User %s added new product %s to store %s.", usersName[0],prodNames[0], shopNames[0])))
			{
				assertTrue(true);
				return;
			}
		}
		fail();
	}

	@Test
	void addNewProductFail() throws Exception {
		market.appointShopOwner(usersName[0],usersName[1],shopNames[0]);
		market.addNewProduct(usersName[0], shopNames[0], prodNames[0], cats[0], descs[0], prices[0]);
		Collection<Notification> notifications=market.getUserNotifications(usersName[2]);
		for(Notification notification: notifications)
		{
			if(notification.getMessage().equals(String.format("User %s added new product %s to store %s.", usersName[0],prodNames[0], shopNames[0])))
			{
				fail();
				return;
			}
		}
		assertTrue(true);
	}

	@Test
	void removeProductSuccess() throws Exception {
		market.appointShopOwner(usersName[0],usersName[1],shopNames[0]);
		market.addNewProduct(usersName[0], shopNames[0], prodNames[0], cats[0], descs[0], prices[0]);
		market.removeProduct(usersName[0], shopNames[0], prodNames[0]);
		Collection<Notification> notifications=market.getUserNotifications(usersName[1]);
		for(Notification notification: notifications)
		{
			if(notification.getMessage().equals(String.format("User %s removed product %s from store %s.",usersName[0],prodNames[0], shopNames[0])))
			{
				assertTrue(true);
				return;
			}
		}
		fail();
	}

	@Test
	void removeProductFail() throws Exception {
		market.appointShopOwner(usersName[0],usersName[1],shopNames[0]);
		market.addNewProduct(usersName[0], shopNames[0], prodNames[0], cats[0], descs[0], prices[0]);
		market.removeProduct(usersName[0], shopNames[0], prodNames[0]);
		Collection<Notification> notifications=market.getUserNotifications(usersName[2]);
		for(Notification notification: notifications)
		{
			if(notification.getMessage().equals(String.format("User %s removed product %s from store %s.", usersName[0],prodNames[0], shopNames[0])))
			{
				fail();
				return;
			}
		}
		assertTrue(true);
	}

	@Test
	void changeManagerPermissionsSuccess() throws Exception {
		market.appointShopOwner(usersName[0],usersName[1],shopNames[0]);
		LinkedList<Integer> permissions=new LinkedList<>();
		permissions.add(0);
		permissions.add(1);
		market.changeManagerPermissions(usersName[0],usersName[1],shopNames[0],permissions);
		Collection<Notification> notifications=market.getUserNotifications(usersName[1]);
		for(Notification notification: notifications)
		{
			if(notification.getMessage().equals(String.format("User %s changed your permissions in shop %s.", usersName[0], shopNames[0])))
			{
				assertTrue(true);
				return;
			}
		}
		fail();
	}

	@Test
	void changeManagerPermissionsFail() throws Exception {
		market.appointShopOwner(usersName[0],usersName[1],shopNames[0]);
		LinkedList<Integer> permissions=new LinkedList<>();
		permissions.add(0);
		permissions.add(1);
		market.changeManagerPermissions(usersName[0],usersName[1],shopNames[0],permissions);
		Collection<Notification> notifications=market.getUserNotifications(usersName[2]);
		for(Notification notification: notifications)
		{
			if(notification.getMessage().equals(String.format("User %s changed your permissions in shop %s.", usersName[0], shopNames[0])))
			{
				fail();
				return;
			}
		}
		assertTrue(true);
	}

	@Test
	void concurrentSuccess() throws Exception {
		// Create a thread to wait for the notification to arrive
		Thread notificationThread = new Thread(() -> {
			Collection<Notification> notifications;
			try {
				notifications=market.getUserNotifications(usersName[0]);
			} catch (Exception e) {
				throw new RuntimeException(e);
			}
			for(Notification notification: notifications)
			{
				if(notification.getMessage().equals("hey"))
				{
					assertTrue(true);
					return;
				}
			}
		});
		notificationThread.start();
		market.notifyUser(usersName[0],new Notification("me","hey"));
		// Wait for the notification thread to finish
		notificationThread.join();
	}



}