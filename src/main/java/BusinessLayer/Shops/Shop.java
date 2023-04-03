package BusinessLayer.Shops;

public class Shop implements ShopIntr{
	String name;
	Boolean open;

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

	public Boolean isOpen() {
		return open;
	}

	public void setState(Boolean open) {
		this.open = open;
	}
}
