package BusinessLayer;


import BusinessLayer.Enums.ManagePermissionsEnum;

import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.locks.Lock;
import java.util.concurrent.locks.ReentrantLock;

import static BusinessLayer.Enums.ManagePermissionsEnum.*;

public class ManagePermissions {

	private boolean[] permissions;
	private final int NUM_OF_PERMISSIONS = ManagePermissionsEnum.values().length;

	public ManagePermissions() {
		permissions = new boolean[NUM_OF_PERMISSIONS];
	}

	public void changeToFullAccess() {
		for (int i = 0; i < NUM_OF_PERMISSIONS; i++)
			permissions[i] = true;
	}

	public void changeToReadOnlyAccess() {
		resetPermissions();
		permissions[WATCH_HISTORY.getValue()] = true;
		permissions[WATCH_MANAGERS_INFO.getValue()] = true;
	}

	public void resetPermissions() {
		for (int i = 0; i < NUM_OF_PERMISSIONS; i++)
			permissions[i] = false;
	}

	public void addPermission(ManagePermissionsEnum managePermissionsEnum) {
		permissions[managePermissionsEnum.getValue()] = true;
	}

	public void removePermission(ManagePermissionsEnum managePermissionsEnum) {
		permissions[managePermissionsEnum.getValue()] = false;
	}

	public boolean validatePermission(ManagePermissionsEnum permissionsEnum) {
		return permissions[permissionsEnum.getValue()];
	}

	public static ManagePermissions getFullAccessPermissions() {
		ManagePermissions mp = new ManagePermissions();
		mp.changeToFullAccess();
		return mp;
	}

	public static ManagePermissions getReadOnlyPermissions() {
		ManagePermissions mp = new ManagePermissions();
		mp.changeToReadOnlyAccess();
		return mp;
	}

	public void setNewPermissions(List<Integer> permissions) throws Exception {
		resetPermissions();
		for (int i = 0; i < permissions.size(); i++) {
			int permType = permissions.get(i);
					if (!isPermissionInBounds(permType)) {
						throw new Exception("there is no such permission with the ID:" + permType);
					}
			this.permissions[permType] = true;
		}

	}

	// The following method will be used later to get information on the permissions.
	public List<Integer> getActivatedPermissions() {
		List<Integer> activated = new ArrayList<>();
		Lock lock = new ReentrantLock();
		lock.lock();
		try {
			for (ManagePermissionsEnum permission : ManagePermissionsEnum.values()) {
				if (permissions[permission.getValue()]) {
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
			if (permissions[permission.getValue()]) {
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
		permissions[permission] = true;

	}
}