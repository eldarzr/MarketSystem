package BusinessLayer.ExternalSystemsAdapters;

import java.util.HashMap;
import java.util.Map;

public class SupplyDetails {
    private String name;
    private String address;
    private String city;
    private String country;
    private String zip;

    private String transactionID;

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

    public String getTransactionID() {
        return this.transactionID;
    }

    public void setTransactionID(String transID) {
        this.transactionID=transID;
    }

    public Map<String, String> getMappedInfo() {
        Map<String, String> parameters = new HashMap<>();
        parameters.put("name", getName());
        parameters.put("address", getAddress());
        parameters.put("city", getCity());
        parameters.put("country", getCountry());
        parameters.put("zip", getZip());
        return parameters;
    }
}
