package BusinessLayer.Enums;

public enum ManagePermissions {
	MANAGE_STOCK((int) Math.pow(2,0)),
	MANAGE_PURCHASE_TYPE((int) Math.pow(2,1)),
	MANAGE_DISCOUNT_TYPE((int) Math.pow(2,2)),
	MANAGE_PURCHASE_POLICY((int) Math.pow(2,3)),
	MANAGE_DISCOUNT_POLICY((int) Math.pow(2,4)),
	MANAGE_DISCOUNT_CONSTRAINTS((int) Math.pow(2,5)),
	MANAGE_PURCHASE_CONSTRAINTS((int) Math.pow(2,6)),
	WATCH_MANAGERS_INFO((int) Math.pow(2,7)),
	WATCH_HISTORY((int) Math.pow(2,8)),
	MESSAGES_ACCESS((int) Math.pow(2,9)),
	//get all the other access
	FULL_ACCESS((int) Math.pow(2,10) - 1),
	READ_ONLY_ACCESS(WATCH_HISTORY.value + WATCH_MANAGERS_INFO.value);

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
