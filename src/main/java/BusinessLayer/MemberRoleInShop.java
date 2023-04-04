package BusinessLayer;

import BusinessLayer.Enums.ManagePermissions;
import BusinessLayer.Enums.ManageType;
import BusinessLayer.Users.User;
import static BusinessLayer.Enums.ManageType.*;
import static BusinessLayer.Enums.ManagePermissions.*;

public class MemberRoleInShop {
	private User grantor;
	private ManageType type;
	private ManagePermissions permissions;

	private MemberRoleInShop(User grantor, ManageType type, ManagePermissions permissions) {
		this.grantor = grantor;
		this.type = type;
		this.permissions = permissions;
	}

	public static MemberRoleInShop createOwner(User grantor){
		//TODO: add logic to add owner
		return new MemberRoleInShop(grantor, OWNER, FULL_ACCESS);
	}

	public static MemberRoleInShop createManager(User grantor, ManagePermissions permissions){
		//TODO: add logic to add manager
		return new MemberRoleInShop(grantor, MANAGER, permissions);
	}
}
