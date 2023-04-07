package BusinessLayer;

import BusinessLayer.Enums.ManagePermissions;
import BusinessLayer.Enums.ManageType;
import BusinessLayer.Shops.Shop;
import BusinessLayer.Users.User;
import static BusinessLayer.Enums.ManageType.*;
import static BusinessLayer.Enums.ManagePermissions.*;

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

	public static MemberRoleInShop createOwner(String user,Shop shop) throws Exception {
		//TODO: add logic to add owner
		return adjustRole(new MemberRoleInShop(shop ,user , null, OWNER, FULL_ACCESS));
	}

	public static MemberRoleInShop createOwner(String roleUser , Shop roleShop , String grantor) throws Exception {
		//TODO: add logic to add owner
		return adjustRole(new MemberRoleInShop(roleShop , roleUser , grantor , OWNER, FULL_ACCESS));
	}

	public static MemberRoleInShop createManager(String roleUser , Shop roleShop , String grantor) throws Exception {
		//TODO: add logic to add manager
		return adjustRole(new MemberRoleInShop(roleShop,roleUser,grantor, MANAGER, READ_ONLY_ACCESS));
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
				return FULL_ACCESS;
			case 1:
				return READ_ONLY_ACCESS;
			default:
				throw new Exception("there is no such permission");
	}

}

	private static MemberRoleInShop adjustRole(MemberRoleInShop role) throws Exception {
		String roleUser = role.roleUser;
		Shop roleShop = role.roleShop;
//		roleUser.addShopRole(roleShop.getName() ,role);
		roleShop.addRole(roleUser,role);
		return role;
	}
}
