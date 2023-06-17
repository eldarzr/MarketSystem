package BusinessLayer;


import BusinessLayer.Enums.ManageKindEnum;
import BusinessLayer.Enums.ManagePermissionsEnum;
import BusinessLayer.Enums.ManageType;
import com.helger.commons.codec.ICharArrayStreamEncoder;

import javax.persistence.*;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.locks.Lock;
import java.util.concurrent.locks.ReentrantLock;

import static BusinessLayer.Enums.ManagePermissionsEnum.*;

@Entity
@Table(name = "ManagePermissions")
public class ManagePermissions implements Serializable {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@ElementCollection
	@OrderColumn(name = "permission_order")
	private List<Boolean> permissions;
	private ManageKindEnum manageAccess;

	@Transient
	private Lock lock;
	private final int NUM_OF_PERMISSIONS = ManagePermissionsEnum.values().length;

	public ManagePermissions() {
		permissions = new ArrayList<>();
		this.manageAccess = ManageKindEnum.READ_ONLY;
		initPermissions();
		this.lock = new ReentrantLock();
	}

	public void changeToFullAccess() {
		for (int i = 0; i < NUM_OF_PERMISSIONS; i++)
			permissions.set(i, true);
		this.manageAccess = ManageKindEnum.FULL_ACCESS;
	}

	public void changeToReadOnlyAccess() {
		resetPermissions();
		permissions.set(WATCH_HISTORY.getValue(), true);
		permissions.set(WATCH_MANAGERS_INFO.getValue(), true);
		permissions.set(MESSAGES_ACCESS.getValue(), true);
		this.manageAccess = ManageKindEnum.READ_ONLY;
	}

	public void changeToManageAccess() {
		//changeToReadOnlyAccess();
		resetPermissions();
		permissions.set(MANAGE_STOCK.getValue(), true);
		permissions.set(MANAGE_BIDS.getValue(), true);
		permissions.set(MANAGE_PURCHASE_TYPE.getValue(), true);
		permissions.set(MANAGE_DISCOUNT_TYPE.getValue(), true);
		permissions.set(MANAGE_DISCOUNT_CONSTRAINTS.getValue(), true);
		permissions.set(MANAGE_PURCHASE_CONSTRAINTS.getValue(), true);
		permissions.set(MANAGE_PURCHASE_POLICY.getValue(), true);
		permissions.set(MANAGE_DISCOUNT_POLICY.getValue(), true);
		this.manageAccess = ManageKindEnum.MANAGE_READ_ACCESS;

	}

	public void resetPermissions() {
		for (int i = 0; i < NUM_OF_PERMISSIONS; i++)
			permissions.set(i, false);
	}

	public void initPermissions() {
		for (int i = 0; i < NUM_OF_PERMISSIONS; i++)
			permissions.add(false);
	}

	public void addPermission(ManagePermissionsEnum managePermissionsEnum) {
		permissions.set(managePermissionsEnum.getValue(), true);
	}

	public void removePermission(ManagePermissionsEnum managePermissionsEnum) {
		permissions.set(managePermissionsEnum.getValue(), false);
	}

	public boolean validatePermission(ManagePermissionsEnum permissionsEnum) {
		return permissions.get(permissionsEnum.getValue());
	}

	public static ManagePermissions getFullAccessPermissions() {
		ManagePermissions mp = new ManagePermissions();
		mp.changeToFullAccess();
		PersistenceManager.getInstance().updateObj(mp);
		return mp;
	}

	public static ManagePermissions getReadOnlyPermissions() {
		ManagePermissions mp = new ManagePermissions();
		mp.changeToReadOnlyAccess();
		PersistenceManager.getInstance().updateObj(mp);
		return mp;
	}

	public void setNewPermissions(List<Integer> permissions) throws Exception {
		resetPermissions();
		for (int i = 0; i < permissions.size(); i++) {
			int permType = permissions.get(i);
					if (!isPermissionInBounds(permType)) {
						throw new Exception("there is no such permission with the ID:" + permType);
					}
			this.permissions.set(permType, true);
		}

	}

	// The following method will be used later to get information on the permissions.
	public List<Integer> getActivatedPermissions() {
		List<Integer> activated = new ArrayList<>();
		lock.lock();
		try {
			for (ManagePermissionsEnum permission : ManagePermissionsEnum.values()) {
				if (permissions.get(permission.getValue())) {
					activated.add(permission.getValue());
				}
			}
		} finally {
			lock.unlock();
		}
		return activated;
	}

	private boolean isPermissionInBounds(Integer index) {
		return index >= 0 && index < NUM_OF_PERMISSIONS;
	}

	public String describePermissions() {
		StringBuilder sb = new StringBuilder("The following permissions are allowed: ");
		for (ManagePermissionsEnum permission : ManagePermissionsEnum.values()) {
			if (permissions.get(permission.getValue())) {
				sb.append(permission.name().replace("_", " ")).append(", ");
			}
		}
		sb.setLength(sb.length() - 2); // Remove the trailing comma and space
		return sb.toString();
	}

	public void addAnotherPermission(int permission) throws Exception {
		if (!isPermissionInBounds(permission)) {
			throw new Exception("there is no such permission with the ID:" + permission);
		}
		permissions.set(permission, true);

	}

	public ManageKindEnum getManageAccess() {
		return manageAccess;
	}

	public void promoteAccess(int permission) {
		switch (permission){
			case 0:
				changeToReadOnlyAccess();
				break;
			case 1:
				changeToManageAccess();
				break;
			case 2:
				changeToFullAccess();
				break;
		}
	}
}