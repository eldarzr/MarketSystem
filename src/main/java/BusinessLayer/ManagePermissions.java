package BusinessLayer;


import BusinessLayer.Enums.ManagePermissionsEnum;

import static BusinessLayer.Enums.ManagePermissionsEnum.*;

public class ManagePermissions {

	private boolean[] permissions;
	private final int NUM_OF_PERMISSIONS = ManagePermissionsEnum.values().length;

	public ManagePermissions(){
		permissions = new boolean[NUM_OF_PERMISSIONS];
	}

	public void changeToFullAccess(){
		for(int i = 0; i < NUM_OF_PERMISSIONS; i++)
			permissions[i] = true;
	}

	public void changeToReadOnlyAccess(){
		resetPermissions();
		permissions[WATCH_HISTORY.getValue()] = true;
		permissions[WATCH_MANAGERS_INFO.getValue()] = true;
	}

	public void resetPermissions(){
		for(int i = 0; i < NUM_OF_PERMISSIONS; i++)
			permissions[i] = false;
	}

	public void addPermission(ManagePermissionsEnum managePermissionsEnum){
		permissions[managePermissionsEnum.getValue()] = true;
	}

	public void removePermission(ManagePermissionsEnum managePermissionsEnum){
		permissions[managePermissionsEnum.getValue()] = false;
	}

	public static ManagePermissions getFullAccessPermissions(){
		ManagePermissions mp = new ManagePermissions();
		mp.changeToFullAccess();
		return mp;
	}

	public static ManagePermissions getReadOnlyPermissions(){
		ManagePermissions mp = new ManagePermissions();
		mp.changeToReadOnlyAccess();
		return mp;
	}

}