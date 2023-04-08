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
	MESSAGES_ACCESS(9);

	private final int value;

	private ManagePermissionsEnum(int value) {
		this.value = value;
	}

	public int getValue() {
		return value;
	}
}
