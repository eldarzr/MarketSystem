package BusinessLayer.Shops;

import BusinessLayer.Enums.ManageType;
import BusinessLayer.MemberRoleInShop;
import BusinessLayer.Users.User;

import java.util.concurrent.ConcurrentHashMap;

public class Shop implements ShopIntr{
	String name;
	boolean open;
	private String founderUserName;
	//map of user name to role in this shop
	private ConcurrentHashMap<String, MemberRoleInShop> roles;

	public Shop(String name, String founderUserName) {
		this.name = name;
		this.open = false;
		this.founderUserName = founderUserName;
		this.roles = new ConcurrentHashMap<>();
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

	public void setShopOwner(String actor, String actOn) throws Exception {

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
		MemberRoleInShop.createOwner(actOn,this, actor);

	}

	public void setShopManager(String actor, String actOn) throws Exception {
		validateUserHasRole(actor);
		MemberRoleInShop actorMRIS = roles.get(actor);
		if(actorMRIS.getType()!= ManageType.OWNER)
			throw new Exception("only owners can set new managers to a store");
		if (roles.containsKey(actOn)) {
			throw new Exception("the user :" + actOn + "is already have a role in the store");
		}
		MemberRoleInShop.createManager(actOn,this,actor);

	}


	public MemberRoleInShop validateUserHasRole(String actorUserName) throws Exception {
		if (!roles.containsKey(actorUserName)) {
			throw new Exception("the user :" + actorUserName + " isnt belong to the shop:" + this.name + "at all");
		}
		return roles.get(actorUserName);
	}




//	public void addRole(User user, ManageType type) throws Exception {
//		MemberRoleInShop.
//		switch (type) {
//			case OWNER:
//				MemberRoleInShop newRole =  MemberRoleInShop.createOwner(user);
//				roles.put(founderUserName, newRole);
//				user.addFoundedShop(this.name);
//				user.addRole(newRole);
//			case MANAGER:
//				roles.put(founderUserName, MemberRoleInShop.createManager(user, ManagePermissions.READ_ONLY_ACCESS));
//		}
//	}

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


	}


