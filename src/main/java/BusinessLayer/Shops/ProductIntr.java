package BusinessLayer.Shops;

 public interface ProductIntr {
  public String getName();
  public String getCategory();
  public String getDescription();
  public String getShopName();
  public double getPrice();

  boolean isOnPrice(double minPrice, double maxPrice);

  boolean isOnCategory(String category);
 }
