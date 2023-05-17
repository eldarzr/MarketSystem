package BusinessLayer;

import BusinessLayer.Enums.ManageType;
import BusinessLayer.Shops.Shop;
//import BusinessLayer.Shops.ShopMessageObserver;

import javax.persistence.*;
import java.io.Serializable;
import java.util.List;
import java.util.concurrent.locks.Lock;
import java.util.concurrent.locks.ReentrantLock;

import static BusinessLayer.Enums.ManageType.*;

@Entity
	@Table(name = "MemberRoleInShop")
	@IdClass(ShopBagId.class) // composite key class
	public class MemberRoleInShop implements Serializable {

		@ManyToOne
		@JoinColumn(name = "roleShopName")
		private Shop roleShop;

		private String grantor;
		@Id
		@Column(name = "userName")
		private String userName;
		@Id
		@Column(name = "shopName")
		private String shopName;
		private ManageType type;
//		@Transient
		@OneToOne(cascade = CascadeType.ALL)
		@JoinColumn(name = "permissions_id", referencedColumnName = "id")
		private ManagePermissions permissions;

		@Transient
		private Lock lock;

		public MemberRoleInShop() {
		}

		private MemberRoleInShop(Shop roleShop , String userName, String grantor, ManageType type, ManagePermissions permissions) {
		this.grantor = grantor;
		this.type = type;
		this.permissions = permissions;
		this.roleShop =  roleShop;
		this.shopName =  roleShop.getName();
		this.userName = userName;
		this.lock = new ReentrantLock();
	}

	public static MemberRoleInShop createFounder(String user, Shop shop, MessageObserver observer) throws Exception {
		//TODO: add logic to add owner
		MemberRoleInShop founder= new MemberRoleInShop(shop ,user , null, OWNER, ManagePermissions.getFullAccessPermissions());
		return adjustRole(founder,observer);
	}

	public static MemberRoleInShop createOwner(String roleUser , Shop roleShop , String grantor , MessageObserver observer) throws Exception {
		//TODO: add logic to add owner
		MemberRoleInShop owner= new MemberRoleInShop(roleShop , roleUser , grantor , OWNER, ManagePermissions.getFullAccessPermissions());
		return adjustRole(owner, observer);
	}

	public static MemberRoleInShop createManager(String roleUser , Shop roleShop , String grantor, MessageObserver observer) throws Exception {
		//TODO: add logic to add manager
		MemberRoleInShop manager= new MemberRoleInShop(roleShop,roleUser,grantor, MANAGER, ManagePermissions.getReadOnlyPermissions());
		return adjustRole(manager, observer);
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

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
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

	public void setPermissions(List<Integer> permissions) throws Exception {
		lock.lock();
		this.permissions.setNewPermissions(permissions);
		lock.unlock();
	}
	private static MemberRoleInShop adjustRole(MemberRoleInShop role , MessageObserver obs) throws Exception {
		String roleUser = role.userName;
		Shop roleShop = role.roleShop;
//		roleUser.addShopRole(roleShop.getName() ,role);
		roleShop.addRole(roleUser,role);
//		roleShop.addObserver(obs);
		return role;
	}

	public void addPermission(int permission) throws Exception {
		this.permissions.addAnotherPermission(permission);
	}

	public String getRoleInfo() {
		StringBuilder rolesInfo = new StringBuilder();
		rolesInfo.append("The user ").append(userName).append(" is a ").append(type).append(" in the store\n");
		return rolesInfo.toString();
	}

		public String getShopName() {
			return shopName;
		}

		public void setShopName(String shopName) {
			this.shopName = shopName;
		}
//	private static MemberRoleInShop adjustRole(MemberRoleInShop role) throws Exception {
//		String roleUser = role.roleUser;
//		Shop roleShop = role.roleShop;
////		roleUser.addShopRole(roleShop.getName() ,role);
//		roleShop.addRole(roleUser,role);
//		return role;
//	}
}
