package BusinessLayer.Shops;

public class Shop implements ShopIntr{
	String name;
	boolean open;

	public Shop(String name) {
		this.name = name;
		this.open = false;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public boolean isOpen() {
		return open;
	}

	public void setState(boolean open) {
		this.open = open;
	}
}
