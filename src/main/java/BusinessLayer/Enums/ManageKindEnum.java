package BusinessLayer.Enums;

public enum ManageKindEnum {
        READ_ONLY(0),
        MANAGE_READ_ACCESS(1),
        FULL_ACCESS(2);
        private final int value;

        private ManageKindEnum(int value) {
            this.value = value;
        }

        public int getValue() {
            return value;
        }
    }

