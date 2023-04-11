package BusinessLayer.Shops;

import BusinessLayer.Enums.ManagePermissionsEnum;
import BusinessLayer.Enums.ManageType;
import BusinessLayer.MemberRoleInShop;
import BusinessLayer.MessageObserver;

import java.util.List;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.ConcurrentLinkedQueue;
import java.util.stream.Collectors;

import static BusinessLayer.Enums.ManagePermissionsEnum.*;

public class Shop implements ShopIntr{
	String name;
	boolean open;
	boolean isActive;
	private final String founderUserName;
	//map of user name to role in this shop
	private ConcurrentHashMap<String, MemberRoleInShop> roles;
	private ConcurrentHashMap<String, ShopProduct> products;
	private ConcurrentLinkedQueue<MessageObserver> observers;

	public Shop(String name, String founderUserName) {
		this.name = name;
		this.open = false;
		this.founderUserName = founderUserName;
		this.roles = new ConcurrentHashMap<>();
		this.products = new ConcurrentHashMap<>();
		this.isActive = true;
		this.observers = new ConcurrentLinkedQueue<>();
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

	public void setState(boolean open) {
		this.open = open;
	}

	public String getFounder() {
		return founderUserName;
	}

	public void setShopOwner(String actor, String actOn , MessageObserver sendMessage) throws Exception {

		validateUserHasRole(actor);
		MemberRoleInShop actorMRIS = roles.get(actor);
		if(actorMRIS.getType()!= ManageType.OWNER)
			throw new Exception("only owners can set new owners to a store");

		// if the appointee is manager than:
		if (roles.containsKey(actOn)) {
			MemberRoleInShop actOnMRIS = roles.get(actOn);
			if (actOnMRIS.getType() == ManageType.OWNER)
				throw new Exception(actOn + " is already an owner");
			actOnMRIS.setType(ManageType.OWNER);
			actOnMRIS.setGrantor(actor);
			return;
		}
		MemberRoleInShop.createOwner(actOn,this, actor , sendMessage);

	}

	public void setShopManager(String actor, String actOn , MessageObserver sendMessage) throws Exception {
		validateUserHasRole(actor);
		MemberRoleInShop actorMRIS = roles.get(actor);
		if(actorMRIS.getType()!= ManageType.OWNER)
			throw new Exception("only owners can set new managers to a store");
		if (roles.containsKey(actOn)) {
			throw new Exception("the user :" + actOn + "is already have a role in the store");
		}
		MemberRoleInShop.createManager(actOn,this,actor , sendMessage);

	}

	public MemberRoleInShop validateUserHasRole(String actorUserName) throws Exception {
		if (!roles.containsKey(actorUserName)) {
			throw new Exception("the user :" + actorUserName + " isnt belong to the shop:" + this.name + "at all");
		}
		return roles.get(actorUserName);
	}

	public void addRole(String name, MemberRoleInShop role) throws Exception {
		if(roles.containsKey(name))
			throw new Exception( "the user : "+ name + " already have a role");
		roles.put(name,role);
	}

	public void setManageOption(String actor, String actOn , int permission) throws Exception {
		validateUserHasRole(actor);
		MemberRoleInShop actorMRIS = roles.get(actor);
		if (actorMRIS.getType() != ManageType.OWNER)
			throw new Exception("only owners can set permissions");
		if (!roles.containsKey(actOn)) {
			throw new Exception("you cannot set permissions to user that dosent already have a role in the shop. User :" + actOn);
		}
		MemberRoleInShop reqRole = roles.get(actOn);
		String roleGrantor = reqRole.getGrantor();
		if(!roleGrantor.equals(actor) || !actor.equals(founderUserName))
			throw new Exception("only the grantor or the shop founder can set manager permissions");
		reqRole.setPermissions(permission);

		}

	public void closeShop(String userName) throws Exception {
		if(!this.founderUserName.equals(userName))
			throw new Exception("only the founder can close a store");
		this.isActive = false;
		for (MessageObserver observer : this.observers ){
			 observer.update("the shop named : " +this.name + " is closed");
		}
		//TODO : Only managers & owners can acheive information on the shop.
		//TODO : products of the store should be unavialbe now when a member looking for them.


	}

	public List<ShopProduct> getProducts() {
		return products.values().stream().collect(Collectors.toList());
	}

	public void addNewProduct(String userName, String productName, String category, String desc, double price) throws Exception {
		if(products.containsKey(productName))
			throw new Exception(String.format("there is already product %s in the shop %s", productName, name));
		validatePermissionsException(userName, MANAGE_STOCK);
		products.put(productName, ShopProduct.createProduct(productName, category, desc, price));
	}

	private void validatePermissionsException(String userName, ManagePermissionsEnum permissionsEnum) throws Exception {
		if(!roles.containsKey(userName))
			throw new Exception(String.format("the user %s is not manager or owner of the shop %s", userName, name));
		if(!roles.get(userName).getPermissions().validatePermission(permissionsEnum))
			throw new Exception(String.format("the user %s does not have the right permission for the shop %s",
					userName, name));
	}

	public void removeProduct(String userName, String productName) throws Exception {
		validateProductExists(productName);
		validatePermissionsException(userName, MANAGE_STOCK);
		products.remove(productName);
	}

	public void updateProductName(String userName, String productOldName, String productNewName) throws Exception {
		validateProductExists(productOldName);
		validatePermissionsException(userName, MANAGE_STOCK);
		synchronized (products) {
			ShopProduct product = products.remove(productOldName);
			product.setName(productNewName);
			products.put(productNewName, product);
		}
	}

	public void addObserver(MessageObserver obs) {
		this.observers.add(obs);
	}
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
		validateProductExists(productName);
		validatePermissionsException(userName, MANAGE_STOCK);
		products.get(productName).setQuantity(quantity);
	}

	public void addProductQuantity(String userName, String productName, int quantity) throws Exception {
		validateProductExists(productName);
		validatePermissionsException(userName, MANAGE_STOCK);
		products.get(productName).addQuantity(quantity);
	}

	private void validateProductExists(String productName) throws Exception {
		if(!products.containsKey(productName))
			throw new Exception(String.format("there is no product %s in the shop %s", productName, name));
	}


	}

