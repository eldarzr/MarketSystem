package BusinessLayer;

import BusinessLayer.Enums.ManagePermissions;
import BusinessLayer.Enums.ManageType;
import BusinessLayer.Shops.Shop;
import BusinessLayer.Users.User;
import static BusinessLayer.Enums.ManageType.*;
import static BusinessLayer.Enums.ManagePermissions.*;

public class MemberRoleInShop {
	private Shop roleShop;

	private User grantor;
	private User roleUser;
	private ManageType type;
	private ManagePermissions permissions;

	private MemberRoleInShop(Shop roleShop , User roleUser , User grantor, ManageType type, ManagePermissions permissions) {
		this.grantor = grantor;
		this.type = type;
		this.permissions = permissions;
		this.roleShop =  roleShop;
		this.roleUser = roleUser;
	}

	public static MemberRoleInShop createOwner(User user,Shop shop) throws Exception {
		//TODO: add logic to add owner
		return adjustRole(new MemberRoleInShop(shop ,user , null, OWNER, FULL_ACCESS));
	}

	public static MemberRoleInShop createOwner(User roleUser , Shop roleShop , User grantor) throws Exception {
		//TODO: add logic to add owner
		return adjustRole(new MemberRoleInShop(roleShop , roleUser , grantor , OWNER, FULL_ACCESS));
	}

	public static MemberRoleInShop createManager(User roleUser , Shop roleShop , User grantor, ManagePermissions permissions){
		//TODO: add logic to add manager
		return new MemberRoleInShop(roleShop,roleUser,grantor, MANAGER, permissions);
	}
	public User getGrantor() {
		return grantor;
	}

	public void setGrantor(User grantor) {
		this.grantor = grantor;
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

	private static MemberRoleInShop adjustRole(MemberRoleInShop role) throws Exception {
		User roleUser = role.roleUser;
		Shop roleShop = role.roleShop;
		roleUser.addShopRole(roleShop.getName() ,role);
		roleShop.addRole(roleUser.getName(),role);
		return role;
	}
}
