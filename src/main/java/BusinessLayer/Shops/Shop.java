package BusinessLayer.Shops;

import BusinessLayer.Bids.Bid;
import BusinessLayer.Bids.BidManager;
import BusinessLayer.Enums.ManageKindEnum;
import BusinessLayer.Enums.ManagePermissionsEnum;
import BusinessLayer.Enums.ManageType;
import BusinessLayer.MemberRoleInShop;
import BusinessLayer.MessageObserver;
import BusinessLayer.Notifications.Notification;
import BusinessLayer.Notifications.NotificationPublisher;
import BusinessLayer.PersistenceManager;
import BusinessLayer.Purchases.ShopBag;
import BusinessLayer.Purchases.ShopBagItem;
import BusinessLayer.Shops.Discount.*;
import BusinessLayer.Shops.Discount.DiscountRules.CompoundRuleType;
import BusinessLayer.Shops.Discount.DiscountRules.DiscountRule;
import BusinessLayer.Shops.Discount.XorDecisionRules.XorDecisionRuleName;
import BusinessLayer.Shops.PurchasePolicies.PurchasePolicyManager;
import BusinessLayer.Users.User;
import BusinessLayer.Purchases.ShopInvoice;


import javax.persistence.*;
import java.util.*;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.ConcurrentLinkedQueue;
import java.util.concurrent.CopyOnWriteArrayList;
import java.util.concurrent.locks.Lock;
import java.util.concurrent.locks.ReentrantLock;
import java.util.logging.Logger;
import java.util.stream.Collectors;

import static BusinessLayer.Enums.ManagePermissionsEnum.*;

@Entity
@Table(name = "shops")
public class Shop implements ShopIntr {

	@Transient
	private final static int PRODUCT_MIN_QUANTITY = 0;

	@Transient
	private static final Logger logger = Logger.getLogger("Market");

	@Id
	@Column(name = "shopName")
	private String name;
	@Column(name = "open")
	private boolean open;
	@Column(name = "active")
	private boolean active;

	@Transient
	private Lock remLock;
	private String founderUserName;

	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "owners_handler_id", referencedColumnName = "id")
	private OwnersHandler ownersHandler;

	//map of user name to role in this shop
	@OneToMany(cascade = CascadeType.ALL)
	@JoinColumn(name = "shopName", referencedColumnName = "shopName")
	@MapKeyColumn(name = "userName")
	private Map<String, MemberRoleInShop> roles;
	@OneToMany(cascade = CascadeType.ALL)
	@JoinColumns({
			@JoinColumn(name = "shopName", referencedColumnName = "shopName")
	})
	@MapKeyColumn(name = "productName") // specify the index column
	private Map<String, ShopProduct> products;
	@Transient
	private ConcurrentLinkedQueue<MessageObserver> observers;
	@OneToMany(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
	@JoinColumn(name = "shopName")
	private List<ShopInvoice> invoices;
	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "discount_policy_id")
	private DiscountPolicy discountPolicy;
	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "purchase_policy_manager_id")
	private PurchasePolicyManager purchasePolicyManager;
	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "bid_manager_id")
	private BidManager bidManager;

	public Shop() {
		this.remLock = new ReentrantLock();
	}

	public Shop(String name, String founderUserName) {
		this.name = name;
		this.open = false;
		this.founderUserName = founderUserName;
		this.roles = new ConcurrentHashMap<>();
		this.products = new HashMap<>();
		this.active = true;
		this.observers = new ConcurrentLinkedQueue<>();
		this.invoices = new CopyOnWriteArrayList<>();
		this.discountPolicy = new DiscountPolicy();
		this.purchasePolicyManager = new PurchasePolicyManager();
		this.remLock = new ReentrantLock();
		this.bidManager = new BidManager();
		this.ownersHandler = new OwnersHandler(this);
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public boolean isOpen() {
		return open;
	}

	public boolean isActive() {
		return active;
	}

	public void setState(boolean open) {
		this.open = open;
	}

	public String getFounder() {
		return founderUserName;
	}

	public boolean setShopOwner(String actor, String actOn, MessageObserver sendMessage) throws Exception {

		validateUserHasRole(actor);
		MemberRoleInShop actorMRIS = roles.get(actor);
		if (actorMRIS.getType() != ManageType.OWNER)
			throwException("only owners can set new owners to a store");

		// if the appointee is manager than:
		if (roles.containsKey(actOn)) {
			MemberRoleInShop actOnMRIS = roles.get(actOn);
			if (actOnMRIS.getType() == ManageType.OWNER)
				throwException(actOn + " is already an owner");
			actOnMRIS.setType(ManageType.OWNER);
			actOnMRIS.setGrantor(actor);
			return true;
		}
//		ownersHandler.addOwner(actOn,this,actor);
		ownersHandler.addOwner(actOn,this,actor);
		notifyOwnersOnApproveRequest(actor,actOn);
		return approveOwner(actor,actOn);

//		MemberRoleInShop.createOwner(actOn, this, actor, sendMessage);
//		PersistenceManager.getInstance().updateObj(this);
	}

	private void notifyOwnersOnApproveRequest(String actor, String actOn) {
				for (String owner : getOwnersNames()) {
					if(!owner.equalsIgnoreCase(actor))
					{
						String message = String.format("User %s was suggested to be appointed as an owner of shop %s and waits for you approval.", actOn, this.name);
						Notification notification = new Notification(owner, message);
						NotificationPublisher.getInstance().notify(owner, notification);
					}
				}

	}

	public boolean approveOwner(String actor, String actOn) throws Exception {
		//validate actor exists and is an owner
		validateUserHasRole(actor);
		MemberRoleInShop actorMRIS = roles.get(actor);
		if (actorMRIS.getType() != ManageType.OWNER)
			throwException("only owners can set new owners to a store");

		//validate the actOn is not an owner
		if (roles.containsKey(actOn)) {
			MemberRoleInShop actOnMRIS = roles.get(actOn);
			if (actOnMRIS.getType() == ManageType.OWNER)
				throwException(actOn + " is already an owner");
		}

		boolean res = ownersHandler.approveOwner(actor,actOn);
		if(res) {
			if(!roles.containsKey(actOn))
				return res;
			String grantor = roles.get(actOn).getGrantor();
			String message = String.format("User %s appointed you as shop-owner of shop %s.", grantor, this.name);
			Notification notification = new Notification(actor, message);
			NotificationPublisher.getInstance().notify(actOn, notification);
			logger.info(String.format("User %s appointed %s as shop-owner of shop %s.", actor, actOn, this.name));
		}
		return res;
	}

	public void setShopManager(String actor, String actOn, MessageObserver sendMessage) throws Exception {
		validateUserHasRole(actor);
		MemberRoleInShop actorMRIS = roles.get(actor);
		if (actorMRIS.getType() != ManageType.OWNER)
			throw new Exception("only owners can set new managers to a store");
		if (roles.containsKey(actOn)) {
			throwException("the user :" + actOn + "is already have a role in the store");
		}
		MemberRoleInShop.createManager(actOn, this, actor, sendMessage);
		PersistenceManager.getInstance().updateObj(this);
	}

	public MemberRoleInShop validateUserHasRole(String actorUserName) throws Exception {
		actorUserName = actorUserName.toLowerCase();
		if (!roles.containsKey(actorUserName)) {
			throwException("the user :" + actorUserName + " isnt belong to the shop:" + this.name + "at all");
		}
		return roles.get(actorUserName);
	}

	public boolean isUserHasRole(String actorUserName) {
		return roles.containsKey(actorUserName);
	}

	public void addRole(String name, MemberRoleInShop role) throws Exception {
		if (roles.containsKey(name)) {
			throwException(String.format("user %s already has role in shop, can't have another.", name));
		}
		roles.put(name, role);
		PersistenceManager.getInstance().updateObj(this);
	}

	private MemberRoleInShop validatePermissionsChangeAllowed(String actor, String actOn) throws Exception {
		validateUserHasRole(actor);
		actor = actor.toLowerCase();
		MemberRoleInShop actorMRIS = roles.get(actor);
		if (actOn.equals(founderUserName))
			throwException("the founder permissions cannot change");
		if (actorMRIS.getType() != ManageType.OWNER)
			throwException("only owners can set permissions");

		actOn = actOn.toLowerCase();
		if (!roles.containsKey(actOn)) {
			throwException("you cannot set permissions to user that dosent already have a role in the shop. User :" + actOn);
		}
		MemberRoleInShop reqRole = roles.get(actOn);
		String roleGrantor = reqRole.getGrantor();
		if (!roleGrantor.equals(actor) || !actor.equals(founderUserName))
			throwException("only the grantor or the shop founder can set manager permissions");
		return reqRole;
	}

	public void addManageOption(String actor, String actOn, int permission) throws Exception {
		MemberRoleInShop reqRole = validatePermissionsChangeAllowed(actor, actOn);
		reqRole.addPermission(permission);
		PersistenceManager.getInstance().updateObj(this);
	}

	/// TODO : ADD / SET - CONCURRENCY ETC
	public MemberRoleInShop setManageOption(String actor, String actOn, List<Integer> permissions) throws Exception {
		MemberRoleInShop reqRole = validatePermissionsChangeAllowed(actor, actOn);
		reqRole.setPermissions(permissions);
		return reqRole;
	}

	public void closeShop(String userName) throws Exception {
		if (!this.founderUserName.equals(userName))
			throwException("Only the founder can close a store.");
		if(!this.active)
			throwException("the shop is already closed.");
		this.active = false;
		//TODO : Only owners & Admins can acheive information on the shop.
		//TODO : products of the store should be unavilable now when a member looking for them.
	}

	public void openShop(String userName) throws Exception {
		if (!this.founderUserName.equals(userName))
			throwException("Only the founder can open a store.");
		this.active = true;
		PersistenceManager.getInstance().updateObj(this);
	}

	public List<ShopProduct> getProducts() {
		return products.values().stream().collect(Collectors.toList());
	}

	public void addNewProduct(String userName, String productName, String category, String desc, double price) throws Exception {
		if (products.containsKey(productName))
			throwException(String.format("there is already product %s in the shop %s", productName, name));
		validatePermissionsException(userName, MANAGE_STOCK);
		ShopProduct shopProduct = ShopProduct.createProduct(productName, category, desc, price, this.name);
		//PersistenceManager.getInstance().persistObj(shopProduct);
		products.put(productName, shopProduct);
	}

	private void validatePermissionsException(String userName, ManagePermissionsEnum permissionsEnum) throws Exception {
		if (!roles.containsKey(userName))
			throwException(String.format("the user %s is not manager or owner of the shop %s", userName, name));
		if (!roles.get(userName).getPermissions().validatePermission(permissionsEnum))
			throwException(String.format("the user %s does not have the right permission for the shop %s",
					userName, name));
	}

	public ShopProduct removeProduct(String userName, String productName) throws Exception {
		validateProductExists(productName);
		validatePermissionsException(userName, MANAGE_STOCK);
		ShopProduct shopProduct = products.remove(productName);
		PersistenceManager.getInstance().removeFromDB(shopProduct);
		PersistenceManager.getInstance().updateObj(this);
		return shopProduct;
	}

//	public void updateProductName(String userName, String productOldName, String productNewName) throws Exception {
//		validateProductExists(productOldName);
//		validatePermissionsException(userName, MANAGE_STOCK);
//		if (products.containsKey(productNewName))
//			throw new Exception(String.format("there is already product %s in the shop %s", productNewName, name));
//		synchronized (products) {
//			ShopProduct product = products.get(productOldName);
//			product.setName(productNewName);
//			PersistenceManager.getInstance().updateObj(product);
//			product = products.remove(productOldName);
//			products.put(productNewName, product);
//		}
//	}

	public void updateProductDesc(String userName, String productName, String productNewDesc) throws Exception {
		validateProductExists(productName);
		validatePermissionsException(userName, MANAGE_STOCK);
		products.get(productName).setDescription(productNewDesc);
	}

	public void updateProductPrice(String userName, String productName, double price) throws Exception {
		validateProductExists(productName);
		validatePermissionsException(userName, MANAGE_STOCK);
		products.get(productName).setPrice(price);
	}

	public void updateProductQuantity(String userName, String productName, int quantity) throws Exception {
		if(quantity < PRODUCT_MIN_QUANTITY)
			throw new IllegalArgumentException("product quantity cannot be negative");
		validateProductExists(productName);
		validatePermissionsException(userName, MANAGE_STOCK);
		products.get(productName).setQuantity(quantity);
	}

	public void updateProductCategory(String userName, String productName, String category) throws Exception {
		validateProductExists(productName);
		validatePermissionsException(userName, MANAGE_STOCK);
		products.get(productName).setCategory(category);
	}

	public void addProductQuantity(String userName, String productName, int quantity) throws Exception {
		validateProductExists(productName);
		validatePermissionsException(userName, MANAGE_STOCK);
		ShopProduct shopProduct = products.get(productName);
		shopProduct.addQuantity(quantity);
	}

	private void validateProductExists(String productName) throws Exception {
		if (!products.containsKey(productName))
			throwException(String.format("there is no product %s in the shop %s", productName, name));
	}

	//there is a problem with our logic of having Product and shopProduct we need to think maybe just hold a product instead of both.
	//the problem is when the product already at the user cart and the quantity went from the original quantity we want the user to be able to see it at his cart
	public Product getProduct(String productName, int quantity) {
		if (quantity < PRODUCT_MIN_QUANTITY)
			throw new IllegalArgumentException("quantity cannot be negative");
		ShopProduct shopProduct = products.get(productName);
		if (shopProduct == null) {
			throw new IllegalArgumentException(String.format("could not find product: %s at shop : %s", productName, getName()));
		}
		if (shopProduct.getQuantity() < quantity) {
			throw new IllegalArgumentException(String.format("shop quantity is lower than desire quantity. shop quantity: %d , desire quantity: %d", shopProduct.getQuantity(), quantity));
		}
		return shopProduct;
	}

	public Collection<MemberRoleInShop> getManagementPermissions(User user) throws Exception {
		if (!user.isAdmin()) {
			String username = user.getName();
			validateUserHasRole(username);
			MemberRoleInShop actorMRIS = roles.get(username);
			if (actorMRIS.getType() != ManageType.OWNER) {
				throw new Exception("only owners can get the Management information");
			}
		}
		return this.roles.values();
	}

	public String getRolesInfo() {
		StringBuilder rolesInfo = new StringBuilder();
		for (MemberRoleInShop role : roles.values()) {
			rolesInfo.append(role.getRoleInfo());
		}
		return rolesInfo.toString();
	}

	public void newPurchase(String userName, Map<String, ShopBagItem> productsAndQuantities) {
		//username is for history purpose will do it in another commit
		for (String productName : productsAndQuantities.keySet()) {
			ShopProduct shopProduct = products.get(productName);
			shopProduct.setQuantity(shopProduct.getQuantity() - productsAndQuantities.get(productName).getQuantity());
		}
	}

	public void validateAvailability(Map<String, ShopBagItem> productsAndQuantities) throws Exception {
		for (String productName : productsAndQuantities.keySet()) {
			int realQuantity = products.get(productName).getQuantity();
			int desireQuantity = productsAndQuantities.get(productName).getQuantity();
			if (realQuantity < desireQuantity)
				throwException(String.format("there is not enough quantity of product : %s at shop : %s. desire quantity : %d , real quantity: %d",
						productName, this.getName(), desireQuantity, realQuantity));
		}
	}

	public void revertPurchase(String name, Map<String, ShopBagItem> productsAndQuantities) {
		for (String productName : productsAndQuantities.keySet()) {
			products.get(productName).addQuantity(productsAndQuantities.get(productName).getQuantity());
		}
	}


	public void addInvoice(ShopInvoice shopInvoice) {
		invoices.add(shopInvoice);
		PersistenceManager.getInstance().updateObj(this);
	}

	public Collection<ShopInvoice> getInvoices(String userName) throws Exception {
		validatePermissionsException(userName, WATCH_HISTORY);
		return this.invoices;
	}

	public Collection<ShopInvoice> getInvoicesByAdmin() {
		return this.invoices;
	}

	private void throwException(String errorMsg) throws Exception {
		logger.severe(errorMsg);
		throw new Exception(errorMsg);
	}

	//this function is for Unit tests only to make mocks!
	public void addNewProductTest(ShopProduct product) {
		products.put(product.getName(), product);
	}

	public Collection<String> getManagementUserNames() throws Exception {
		List<String> usernames = new ArrayList<>();
		for (MemberRoleInShop role : roles.values()) usernames.add(role.getUserName());
		return usernames;
	}

	public MemberRoleInShop getRoleIfExists(String userName) {
		if (isUserHasRole(userName))
			return roles.get(userName);
		return null;
	}

	public void removeOwner(String grantorName, String ownerToRemove) throws Exception {
		remLock.lock();
		try {
			if(ownerToRemove.equals(this.founderUserName))
			{
				throw new Exception("Can't fire the shop founder");
			}
			MemberRoleInShop ownerToRemoveRole = validateUserHasRole(ownerToRemove);
			if (ownerToRemoveRole.getGrantor() != null && !ownerToRemoveRole.getGrantor().equals(grantorName)) {
				throw new Exception("only the grantor of an owner can remove him from his role");
			}
			if (ownerToRemoveRole.getGrantor() != null && ownerToRemoveRole.getType() != ManageType.OWNER) {
				throw new Exception("You tried to remove an owner, but " + ownerToRemove + " is a manager");
			}
			removeSubordinates(ownerToRemove);
			roles.remove(ownerToRemove);
		} finally {
			remLock.unlock();
		}
		PersistenceManager.getInstance().updateObj(this);
	}

	private void removeSubordinates(String ownerToRemove) {
		//Map<String , MemberRoleInShop> Subordinates = new Map<>();
		for (MemberRoleInShop role : roles.values()) {
			if (role.getGrantor() != null && role.getGrantor().equals(ownerToRemove)) {
				removeSubordinates(role.getUserName());
				roles.remove(role.getUserName());

				//notify removed shop owner/manager.
				String message=String.format("I was removed as owner in shop %s, so you are removed too.", name);
				Notification notification=new Notification(ownerToRemove,message);
				NotificationPublisher.getInstance().notify(role.getUserName(),notification);
			}
		}
	}


	public FinalBagPriceResult computeShopBagPrice(ShopBag shopBag) {
		return discountPolicy.applyDiscount(shopBag);
	}

	public CategoryDiscount addCategoryDiscount(String userName, double discountPercentage, String category) throws Exception {
		if (!(validateUserHasRole(userName).getType() == ManageType.OWNER))
			throw new IllegalArgumentException("Only owners can change the discount policy");
		return discountPolicy.addCategoryDiscount(discountPercentage, category);
	}

	public ProductDiscount addProductDiscount(String userName, double discountPercentage, String productName) throws Exception {
		if (!(validateUserHasRole(userName).getType() == ManageType.OWNER))
			throw new IllegalArgumentException("Only owners can change the discount policy");
		return discountPolicy.addProductDiscount(discountPercentage, productName);
	}

	public ShopDiscount addShopDiscount(String userName, double discountPercentage) throws Exception {
		if (!(validateUserHasRole(userName).getType() == ManageType.OWNER))
			throw new IllegalArgumentException("Only owners can change the discount policy");
		return discountPolicy.addShopDiscount(discountPercentage);
	}

	public SumCompoundDiscount addSumDiscount(String userName, List<Integer> discountsIds) throws Exception {
		if (!(validateUserHasRole(userName).getType() == ManageType.OWNER))
			throw new IllegalArgumentException("Only owners can change the discount policy");
		return discountPolicy.addSumDiscount(discountsIds);
	}

	public MaxCompoundDiscount addMaxDiscount(String userName, List<Integer> discountsIds) throws Exception {
		if (!(validateUserHasRole(userName).getType() == ManageType.OWNER))
			throw new IllegalArgumentException("Only owners can change the discount policy");
		return discountPolicy.addMaxDiscount(discountsIds);
	}

	public XorCompoundDiscount addXorDiscount(String userName, List<Integer> discountsIds, XorDecisionRuleName xorDiscountRule) throws Exception {
		if (!(validateUserHasRole(userName).getType() == ManageType.OWNER))
			throw new IllegalArgumentException("Only owners can change the discount policy");
		return discountPolicy.addXorDiscount(discountsIds, xorDiscountRule);
	}

	public void addDiscountRule(String userName, DiscountRule discountRule, int discountId, CompoundRuleType actionWithOldRule) throws Exception {
		if (!(validateUserHasRole(userName).getType() == ManageType.OWNER))
			throw new IllegalArgumentException("Only owners can change the discount policy");
		discountPolicy.addDiscountRule(discountRule, discountId, actionWithOldRule);
	}

	public DiscountPolicy getDiscountPolicy(String currentUser) throws Exception {
		if (!(validateUserHasRole(currentUser).getType() == ManageType.OWNER)) {
			throw new IllegalArgumentException("Only owners can get the discount policy");
		}
		validatePermissionsException(currentUser, MANAGE_DISCOUNT_POLICY);
		return discountPolicy;
	}

	public PurchasePolicyManager getPurchasePolicyManager(String userName) throws Exception {
		if (!(validateUserHasRole(userName).getType() == ManageType.OWNER))
			throw new IllegalArgumentException("Only owners can change the discount policy");
		return purchasePolicyManager;
	}

	public void resetDiscountRule(int discountId) {
		discountPolicy.resetDiscountRule(discountId);
	}

	public void removeDiscount(int discountId) {
		discountPolicy.removeDiscount(discountId);
		PersistenceManager.getInstance().updateObj(this);
	}

	public void evaluatePurchasePolicy(ShopBag shopBag, User user) throws Exception {
		purchasePolicyManager.evaluate(shopBag, user);
	}


	public Collection<String> getBidResponsibleUsers(User user) throws Exception {
		boolean isAdmin = user.isAdmin();
		MemberRoleInShop m = roles.get(user.getName());
		if (!isAdmin & (m == null))
			throw new Exception("user " + user.getName() + " doesn't have a role in shop " + name);
		if (!isAdmin && (m.getType().equals(ManageType.MANAGER) && !m.getPermissions().validatePermission(MANAGE_BIDS)))
			throw new Exception("user " + user.getName() + " doesn't have a permission to manage bids in shop " + name);

		Collection<String> users = new ArrayList<>();
		for (Map.Entry<String, MemberRoleInShop> e : roles.entrySet())
			if (e.getValue().getPermissions().validatePermission(MANAGE_BIDS) || e.getValue().getType().equals(ManageType.OWNER))
				users.add(e.getKey());
		return users;
	}
	public Collection<String> getBidResponsibleUsersForNotification() throws Exception {
		Collection<String> users = new ArrayList<>();
		for (Map.Entry<String, MemberRoleInShop> e : roles.entrySet())
			if (e.getValue().getPermissions().validatePermission(MANAGE_BIDS) || e.getValue().getType().equals(ManageType.OWNER))
				users.add(e.getKey());
		return users;
	}

    public MemberRoleInShop changeManageOption(String actor, String actOn, int permission) throws Exception {
		MemberRoleInShop reqRole = validatePermissionsChangeAllowed(actor, actOn);
//		int accessKind = reqRole.getAccessKind();
		reqRole.promoteAccess(permission);
		//notify appointee
		String message=String.format("User %s added to your permissions in shop %s.", actor, this.name);
		Notification notification=new Notification(actor,message);
		NotificationPublisher.getInstance().notify(actOn,notification);
		logger.info(String.format("User %s added to %s permissions in shop %s.", actor,actOn, this.name));
		return reqRole;

    }
	public int createBid(String userName,String  productName, String shopName, double bidPrice) throws Exception {
		Product product = getProduct(productName,0);
		int ret =  bidManager.createNewBid(userName,product,bidPrice);
		Bid bid = bidManager.getBid(ret);
		Collection<String> toNotify = getBidResponsibleUsersForNotification();
		String message=String.format("There is a pending bid for you to approve in for product '%s' in shop '%s'.", bid.getProduct().getName(), bid.getProduct().getShopName());
		Notification notification=new Notification(userName,message);
		for(String responsibleToApprove : toNotify){
			NotificationPublisher.getInstance().notify(responsibleToApprove,notification);
		}
		return ret;
	}

	public void approveBid(User user, int bidId) throws Exception {
		Bid bid = bidManager.getBid(bidId);
		Collection<String> shouldApprove = getBidResponsibleUsers(user);
		bidManager.approveBid(bidId, user.getName(), shouldApprove);
		String message = String.format("I gave my approval for your bid on product '%s' for '%f'.",bid.getProduct().getName(),(float)bid.getPrice());
		Notification notification = new Notification(user.getName(),message);
		NotificationPublisher.getInstance().notify(bid.getUserName(),notification);
	}
	public void rejectBid(User user, int bidId) throws Exception {
		Bid bid = bidManager.getBid(bidId);
		Collection<String> canReject = getBidResponsibleUsers(user);
		bidManager.rejectBid(bidId, user.getName(), canReject);
		//notify bidder
		String message=String.format("Your bid for product %s in amount %f was rejected.", bid.getProduct().getName(), (float)bid.getProduct().getPrice());
		Notification notification=new Notification(user.getName(),message);
		NotificationPublisher.getInstance().notify(bid.getUserName(),notification);
	}
	public Collection<Bid> getPendingBids(String shopName) throws Exception {
		return bidManager.getPendingBids();
	}
	public Collection<Bid> getApprovedBids() throws Exception {
		return bidManager.getApprovedBids();
	}
	public Collection<Bid> getRejectedBids() throws Exception {
		return bidManager.getRejectedBids();
	}

	public Map<String, MemberRoleInShop> getRoles() {
		return this.roles;
	}

	public List<String> getOwnersNames() {
			List<String> usernames = new ArrayList<>();
			for (MemberRoleInShop role : roles.values())
				if(role.getType() == ManageType.OWNER)
					usernames.add(role.getUserName());
			return usernames;
	}


	public List<MemberRoleInShop> getOwners() {
		List<MemberRoleInShop> usernames = new ArrayList<>();
		for (MemberRoleInShop role : roles.values())
			if(role.getType() == ManageType.OWNER)
				usernames.add(role);
		return usernames;
	}

//	public List<String> getPendings(String actor) throws Exception {
//		MemberRoleInShop reqRole =  validateUserHasRole(actor);
//		return ownersHandler.getPendings();
//	}

	public List<PendingOwner> getPendingsOwners(String actor) throws Exception {
		MemberRoleInShop reqRole =  validateUserHasRole(actor);
		return ownersHandler.getPendingsOwnersObj();
	}

	public void handleShopOwnerRemoval(User user) throws Exception {
		Collection<String> shouldApprove = getBidResponsibleUsers(user);
		bidManager.approveAllFullyApprovedBids(shouldApprove);
	}
}

