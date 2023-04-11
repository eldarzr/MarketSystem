package BusinessLayer;

import BusinessLayer.ManagePermissions;
import BusinessLayer.Enums.ManageType;
import BusinessLayer.Shops.Shop;
//import BusinessLayer.Shops.ShopMessageObserver;
import BusinessLayer.Users.User;
import static BusinessLayer.Enums.ManageType.*;
import static BusinessLayer.Enums.ManagePermissionsEnum.*;

public class MemberRoleInShop {
	private Shop roleShop;

	private String grantor;
	private String roleUser;
	private ManageType type;
	private ManagePermissions permissions;

	private MemberRoleInShop(Shop roleShop , String roleUser , String grantor, ManageType type, ManagePermissions permissions) {
		this.grantor = grantor;
		this.type = type;
		this.permissions = permissions;
		this.roleShop =  roleShop;
		this.roleUser = roleUser;
	}

	public static MemberRoleInShop createOwner(String user, Shop shop, MessageObserver observer) throws Exception {
		//TODO: add logic to add owner
		return adjustRole(new MemberRoleInShop(shop ,user , null, OWNER, ManagePermissions.getFullAccessPermissions()),observer);
	}

	public static MemberRoleInShop createOwner(String roleUser , Shop roleShop , String grantor , MessageObserver observer) throws Exception {
		//TODO: add logic to add owner
		return adjustRole(new MemberRoleInShop(roleShop , roleUser , grantor , OWNER,
				ManagePermissions.getFullAccessPermissions()) , observer);
	}

	public static MemberRoleInShop createManager(String roleUser , Shop roleShop , String grantor, MessageObserver observer) throws Exception {
		//TODO: add logic to add manager
		return adjustRole(new MemberRoleInShop(roleShop,roleUser,grantor, MANAGER,
				ManagePermissions.getReadOnlyPermissions()), observer);
	}

	public void setGrantor(String grantor) {
		this.grantor = grantor;
	}

	public Shop getRoleShop() {
		return roleShop;
	}

	public String getGrantor() {
		return grantor;
	}

	public String getRoleUser() {
		return roleUser;
	}

	public void setRoleUser(String roleUser) {
		this.roleUser = roleUser;
	}

	public ManageType getType() {
		return type;
	}

	public void setType(ManageType type) {
		this.type = type;
	}

	public ManagePermissions getPermissions() {
		return permissions;
	}

	public void setPermissions(ManagePermissions permissions) {
		this.permissions = permissions;
	}

	public void setPermissions(int permissions) throws Exception {
			setPermissions(acheivePermission(permissions));
		}

	private ManagePermissions acheivePermission(int permissions) throws Exception {
		switch (permissions){
			case 0:
				return ManagePermissions.getFullAccessPermissions();
			case 1:
				return ManagePermissions.getReadOnlyPermissions();
			default:
				throw new Exception("there is no such permission");
	}

}
	private static MemberRoleInShop adjustRole(MemberRoleInShop role , MessageObserver obs) throws Exception {
		String roleUser = role.roleUser;
		Shop roleShop = role.roleShop;
//		roleUser.addShopRole(roleShop.getName() ,role);
		roleShop.addRole(roleUser,role);
		roleShop.addObserver(obs);
		return role;
	}

//	private static MemberRoleInShop adjustRole(MemberRoleInShop role) throws Exception {
//		String roleUser = role.roleUser;
//		Shop roleShop = role.roleShop;
////		roleUser.addShopRole(roleShop.getName() ,role);
//		roleShop.addRole(roleUser,role);
//		return role;
//	}
}
