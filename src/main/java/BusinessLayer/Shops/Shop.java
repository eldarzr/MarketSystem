package BusinessLayer.Shops;

import BusinessLayer.Enums.ManagePermissions;
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

	public void setShopOwner(User actor, User actOn) throws Exception {
		String actorUserName = actor.getName();
		String actOnUserName = actOn.getName();

		validateUserBelongs(actorUserName);
		MemberRoleInShop actorMRIS = roles.get(actorUserName);
		if(actorMRIS.getType()!= ManageType.OWNER)
			throw new Exception("only owners can set new owners to a store");

		// if the appointee is manager than:
		if (roles.containsKey(actorUserName)) {
			MemberRoleInShop actOnMRIS = roles.get(actOnUserName);
			if (actOnMRIS.getType() == ManageType.OWNER)
				throw new Exception(actOnUserName + " is already an owner");
			actOnMRIS.setType(ManageType.OWNER);
			return;
		}

		MemberRoleInShop apointeeNewRole = MemberRoleInShop.createOwner(actOn,this, actor);
		roles.put(actorUserName,apointeeNewRole);
	}

	public void setShopManager(User actor, User actOn) {


	}

	private void validateUserBelongs(String actorUserName) throws Exception {
		if (!roles.containsKey(actorUserName)) {
			throw new Exception("the user :" + actorUserName + " isnt belong to the shop:" + this.name + "at all");
		}
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

}


