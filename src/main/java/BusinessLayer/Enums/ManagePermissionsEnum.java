package BusinessLayer.Enums;

public enum ManagePermissionsEnum {
	MANAGE_STOCK(0),
	MANAGE_PURCHASE_TYPE(1),
	MANAGE_DISCOUNT_TYPE(2),
	MANAGE_PURCHASE_POLICY(3),
	MANAGE_DISCOUNT_POLICY(4),
	MANAGE_DISCOUNT_CONSTRAINTS(5),
	MANAGE_PURCHASE_CONSTRAINTS(6),
	WATCH_MANAGERS_INFO(7),
	WATCH_HISTORY(8),
	MESSAGES_ACCESS(9),
	APPOINT_OWNER(10),
	APPOINT_MANAGER(11),
	REMOVE_OWNER(12),
	REMOVE_MANAGER(13),
	CHANGE_MANAGER_PERMISSIONS(14),
	CLOSE_SHOP(15),
	OPEN_SHOP(16);

	private final int value;

	private ManagePermissionsEnum(int value) {
		this.value = value;
	}

	public int getValue() {
		return value;
	}
}
