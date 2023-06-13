package BusinessLayer;

import java.io.BufferedReader;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;

import static BusinessLayer.Enums.Initialize.FAIL;

public record StateLoader(Market market) {

    public void loadState(BufferedReader StateReader) throws Exception {
        try {
            String line;
            while ((line = StateReader.readLine()) != null) {
                line = line.trim();

                // Skip empty lines or comments
                if (line.isEmpty() || line.startsWith("#")) continue;

                // Extract command and parameters
                String command = line.substring(0, line.indexOf('('));
                String[] params = line.substring(line.indexOf('(') + 1, line.indexOf(')')).split(",");

                // Trim whitespace for each parameter
                for (int i = 0; i < params.length; i++) {
                    params[i] = params[i].trim();
                }
                // Execute the corresponding function based on the command
                switch (command)
                {
                    // User API
                    case "register" -> market.register(params[0], params[1], params[2]);
                    case "login" -> market.login(params[0], params[1]);
                    case "logout" -> market.logout(params[0]);
                    case "createShop" -> market.createShop(params[0], params[1]);
                    case "addProductsToCart" -> market.addProductsToCart(params[0], params[1], params[2], Integer.parseInt(params[3]));
                    case "removeProductFromCart" -> market.removeProductFromCart(params[0], params[1], params[2]);
                    case "updateCartProductQuantity" -> market.updateCartProductQuantity(params[0], params[1], params[2], Integer.parseInt(params[3]));
                    case "createBidOffer" -> market.createBidOffer(params[0], params[1], params[2], Double.parseDouble(params[3]));
                    case "addAdmin" -> market.addAdmin(params[0]);

                    // Shop Owner API
                    case "openShop" -> market.openShop(params[0], params[1]);
                    case "closeShop" -> market.closeShop(params[0], params[1]);
                    case "addNewProduct" -> market.addNewProduct(params[0], params[1], params[2], params[3], params[4], Double.parseDouble(params[5]));
                    case "removeProduct" -> market.removeProduct(params[0], params[1], params[2]);
                    case "updateProductDesc" -> market.updateProductDesc(params[0], params[1], params[2], params[3]);
                    case "updateProductPrice" -> market.updateProductPrice(params[0], params[1], params[2], Double.parseDouble(params[3]));
                    case "updateProductQuantity" -> market.updateProductQuantity(params[0], params[1], params[2], Integer.parseInt(params[3]));
                    case "updateProductCategory" -> market.updateProductCategory(params[0], params[1], params[2], params[3]);
                    case "addProductItems" -> market.addProductItems(params[0], params[1], params[2], Integer.parseInt(params[3]));
                    case "appointShopOwner" -> market.appointShopOwner(params[0], params[1], params[2]);
                    case "appointShopManager" -> market.appointShopManager(params[0], params[1], params[2]);
                    case "removeShopOwner" -> market.removeShopOwner(params[0], params[1], params[2]);
                    case "addAgePurchasePolicy" -> market.addAgePurchasePolicy(params[0], params[1], Boolean.parseBoolean(params[2]), params[3], Boolean.parseBoolean(params[4]), Integer.parseInt(params[5]), Integer.parseInt(params[6]));
                    case "addQuantityPurchasePolicy" -> market.addQuantityPurchasePolicy(params[0], params[1], Boolean.parseBoolean(params[2]), params[3], Boolean.parseBoolean(params[4]), Integer.parseInt(params[5]), Integer.parseInt(params[6]));
                    case "addDatePurchasePolicy" -> market.addDatePurchasePolicy(params[0], params[1], Boolean.parseBoolean(params[2]), params[3], Boolean.parseBoolean(params[4]), LocalDate.parse(params[5], DateTimeFormatter.ofPattern("d/MM/yyyy")), LocalDate.parse(params[6], DateTimeFormatter.ofPattern("d/MM/yyyy")));
                    case "addTimePurchasePolicy" -> market.addTimePurchasePolicy(params[0], params[1], Boolean.parseBoolean(params[2]), params[3], Boolean.parseBoolean(params[4]), Integer.parseInt(params[5]), Integer.parseInt(params[6]));
                    case "addShopDiscount" -> market.addShopDiscount(params[0], params[1], Double.parseDouble(params[2]));
                    case "addCategoryDiscount" -> market.addCategoryDiscount(params[0], params[1], Double.parseDouble(params[2]), params[3]);
                    case "addProductDiscount" -> market.addProductDiscount(params[0], params[1], Double.parseDouble(params[2]), params[3]);
                    case "changeManagerAccess" -> market.changeManagerAccess(params[0], params[1], params[2], Integer.parseInt(params[3]));
                    // Admin API
                    case "removeUser" -> market.removeUser(params[0], params[1]);
                    case "removeShop" -> market.removeShop(params[0], params[1], params[2]);

                    default -> throw new Exception("Unknown command: " + command);
                }
            }
        } catch (Exception e) {
            market.SetInitState(FAIL);
            throw new Exception("Loading system state failed due to " + e.getMessage());
        }
    }
}
