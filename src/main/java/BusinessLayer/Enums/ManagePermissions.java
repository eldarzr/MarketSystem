package BusinessLayer.Enums;

public enum ManagePermissions {
	MANAGE_STOCK(1 << 0),
	MANAGE_PURCHASE_TYPE(1 << 1),
	MANAGE_DISCOUNT_TYPE(1 << 2),
	MANAGE_PURCHASE_POLICY(1 << 3),
	MANAGE_DISCOUNT_POLICY(1 << 4),
	MANAGE_DISCOUNT_CONSTRAINTS(1 << 5),
	MANAGE_PURCHASE_CONSTRAINTS(1 << 6),
	WATCH_MANAGERS_INFO(1 << 7),
	WATCH_HISTORY(1 << 8),
	MESSAGES_ACCESS(1 << 9),
	FULL_ACCESS((1 << 10) - 1),
	READ_ONLY_ACCESS(WATCH_HISTORY.getValue() | WATCH_MANAGERS_INFO.getValue());

	private final int value;

	private ManagePermissions(int value) {
		this.value = value;
	}

	public int getValue() {
		return value;
	}

	public boolean validateAccess(ManagePermissions permission) {
		return (this.value & permission.getValue()) != 0;
	}
}
