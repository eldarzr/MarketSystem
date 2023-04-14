package BusinessLayer.ExternalSystemsAdapters;

public class SupplyDetails {
    private String name;
    private String address;
    private String city;
    private String country;
    private String zip;

    public SupplyDetails(String name, String address, String city, String country, String zip) {
        this.name = name;
        this.address = address;
        this.city = city;
        this.country = country;
        this.zip = zip;
    }

    public String getName() {
        return name;
    }

    public String getAddress() {
        return address;
    }

    public String getCity() {
        return city;
    }

    public String getCountry() {
        return country;
    }

    public String getZip() {
        return zip;
    }
}
