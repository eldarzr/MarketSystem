package ServiceLayer.DataObjects;


import BusinessLayer.Enums.ManageType;
import BusinessLayer.ManagePermissions;
import BusinessLayer.MemberRoleInShop;

import java.util.List;

public class MemberRoleInShopDataObj {
	private ShopDataObj roleShop;
	private String grantor;
	private String roleUser;
	private ManageType type;
	private ManagePermissions permissions;
	private List<Integer> activatedPermissions;


	private MemberRoleInShopDataObj(ShopDataObj roleShop , String roleUser , String grantor, ManageType type, ManagePermissions permissions) {
		this.grantor = grantor;
		this.type = type;
		this.permissions = permissions;
		this.roleShop =  roleShop;
		this.roleUser = roleUser;
		this.activatedPermissions = this.permissions.getActivatedPermissions();
	}

	public MemberRoleInShopDataObj(MemberRoleInShop memberRoleInShop) {
		this.grantor = memberRoleInShop.getGrantor();
		this.type = memberRoleInShop.getType();
		this.permissions = memberRoleInShop.getPermissions();
		this.roleShop =  new ShopDataObj(memberRoleInShop.getRoleShop());
		this.roleUser = memberRoleInShop.getUserName();
		this.activatedPermissions = memberRoleInShop.getPermissions().getActivatedPermissions();
	}

	public ShopDataObj getRoleShop() {
		return roleShop;
	}

	public String getGrantor() {
		return grantor;
	}

	public String getRoleUser() {
		return roleUser;
	}

	public ManageType getType() {
		return type;
	}

	public ManagePermissions getPermissions() {
		return permissions;
	}
}
