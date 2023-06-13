package BusinessLayer;

import BusinessLayer.ExternalSystemsAdapters.ExternalSystemAPI;
import com.google.gson.Gson;
import com.google.gson.JsonElement;
import com.google.gson.JsonObject;

import java.io.FileReader;
import java.util.HashMap;
import java.util.Map;

public record SysConfig(Market market) {
    static Map<String, String> persistenceMap;
    static String table_scheme;

    private void set_database_data(String database_path, String database_admin, String database_password, String table_name) {
        Map<String, String> map = new HashMap<>();

        map.put("javax.persistence.jdbc.url", database_path);
        map.put("javax.persistence.jdbc.user", database_admin);
        map.put("javax.persistence.jdbc.password", database_password);
        persistenceMap = map;
        table_scheme = table_name;
    }

    public void config(String configFilePath) throws Exception {
        // Read the configuration file
        FileReader reader = new FileReader(configFilePath);
        Gson gson = new Gson();
        JsonElement configElement = gson.fromJson(reader, JsonElement.class);
        JsonObject configData = configElement.getAsJsonObject();

        // Access the database details
        JsonObject database = configData.getAsJsonObject("database");
        String database_path = database.get("path").getAsString();
        String table_scheme = database.get("table_scheme").getAsString();
        String database_admin = database.get("admin").getAsString();
        String database_password = database.get("password").getAsString();

        // Access the system administrator details
        JsonObject systemAdmin = configData.getAsJsonObject("systemAdmin");
        String adminUsername = systemAdmin.get("username").getAsString();
        String adminEmail = systemAdmin.get("email").getAsString();
        String adminPassword = systemAdmin.get("password").getAsString();

        // Access the system administrator details
        JsonObject externalSystems = configData.getAsJsonObject("externalSystems");
        String webAddress = externalSystems.get("webAddress").getAsString();

        // Close the file reader
        reader.close();

        // Set database connection details.
        set_database_data(database_path, database_admin, database_password, table_scheme);
        // Add admin user.
        try {
            market.getUser(adminUsername);
        } catch (Exception e) {
            market.register(adminUsername, adminEmail, adminPassword);
            market.addAdmin(adminUsername);
        }

        // Connect ExternalSystemAPI.
        ExternalSystemAPI.setURL(webAddress);
    }
}
