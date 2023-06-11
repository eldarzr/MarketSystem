package BusinessLayer;

import java.io.BufferedReader;

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
                switch (command) {
                    case "register" -> market.register(params[0], params[1], params[2]);
                    case "login" -> market.login(params[0], params[1]);
                    case "logout" -> market.logout(params[0]);
                    case "createShop" -> market.createShop(params[0], params[1]);
                    case "removeShop" -> market.removeShop(params[0], params[1], params[2]);
                    case "openShop" -> market.openShop(params[0], params[1]);
                    case "closeShop" -> market.closeShop(params[0], params[1]);
                    case "addNewProduct" -> market.addNewProduct(params[0], params[1], params[2], params[3], params[4], Double.parseDouble(params[5]));
                    case "removeProduct" -> market.removeProduct(params[0], params[1], params[2]);
                    case "addAgePurchasePolicy" -> market.addAgePurchasePolicy(params[0], params[1], Boolean.parseBoolean(params[2]), params[3], Boolean.parseBoolean(params[4]), Integer.parseInt(params[5]), Integer.parseInt(params[6]));
                    case "appointShopManager" -> market.appointShopManager(params[0], params[1], params[2]);
                    case "setActivePurchasePolicy" -> market.setActivePurchasePolicy(params[0], params[1], Integer.parseInt(params[2]));
                    case "addProductDiscount" -> market.addProductDiscount(params[0], params[1], Double.parseDouble(params[2]), params[3]);
                    case "addManagerPermissions" -> market.addManagerPermissions(params[0], params[1], params[2], Integer.parseInt(params[3]));
                    case "removeUser" -> market.removeUser(params[0], params[1]);
                    case "addTimePurchasePolicy" -> market.addTimePurchasePolicy(params[0], params[1], Boolean.parseBoolean(params[2]), params[3], Boolean.parseBoolean(params[4]), Integer.parseInt(params[5]), Integer.parseInt(params[6]));
                    case "addCategoryDiscount" -> market.addCategoryDiscount(params[0], params[1], Double.parseDouble(params[2]), params[3]);
                    case "removeShopOwner" -> market.removeShopOwner(params[0], params[1], params[2]);
                    case "addProductItems" -> market.addProductItems(params[0], params[1], params[2], Integer.parseInt(params[3]));
                    case "createBidOffer" -> market.createBidOffer(params[0], params[1], params[2], Double.parseDouble(params[3]));
                    case "rejectBid" -> market.rejectBid(params[0], params[1], Integer.parseInt(params[2]));
                    case "updateProductCategory" -> market.updateProductCategory(params[0], params[1], params[2], params[3]);
                    case "addIfPurchasePolicy" -> market.addIfPurchasePolicy(params[0], params[1], Integer.parseInt(params[2]), Integer.parseInt(params[3]));
                    case "updateProductQuantity" -> market.updateProductQuantity(params[0], params[1], params[2], Integer.parseInt(params[3]));
                    case "blockUser" -> market.blockUser(params[0], params[1]);
                    case "removeDiscount" -> market.removeDiscount(params[0], params[1], Integer.parseInt(params[2]));
                    case "updateProductPrice" -> market.updateProductPrice(params[0], params[1], params[2], Double.parseDouble(params[3]));
                    case "addAndPurchasePolicy" -> market.addAndPurchasePolicy(params[0], params[1], Integer.parseInt(params[2]), Integer.parseInt(params[3]));
                    case "addOrPurchasePolicy" -> market.addOrPurchasePolicy(params[0], params[1], Integer.parseInt(params[2]), Integer.parseInt(params[3]));
                    case "addShopDiscount" -> market.addShopDiscount(params[0], params[1], Double.parseDouble(params[2]));
                    case "resetDiscountRule" -> market.resetDiscountRule(params[0], params[1], Integer.parseInt(params[2]));
                    case "changeManagerAccess" -> market.changeManagerAccess(params[0], params[1], params[2], Integer.parseInt(params[3]));
                    case "updateProductDesc" -> market.updateProductDesc(params[0], params[1], params[2], params[3]);
                    case "addProductsToCart" -> market.addProductsToCart(params[0], params[1], params[2], Integer.parseInt(params[3]));
                    case "addQuantityPurchasePolicy" -> market.addQuantityPurchasePolicy(params[0], params[1], Boolean.parseBoolean(params[2]), params[3], Boolean.parseBoolean(params[4]), Integer.parseInt(params[5]), Integer.parseInt(params[6]));
                    case "appointShopOwner" -> market.appointShopOwner(params[0], params[1], params[2]);
                    case "updateCartProductQuantity" -> market.updateCartProductQuantity(params[0], params[1], params[2], Integer.parseInt(params[3]));
                    case "approveBid" -> market.approveBid(params[0], params[1], Integer.parseInt(params[2]));
                    default -> throw new Exception("Unknown command: " + command);
                }
            }
        } catch (Exception e) {
            throw new Exception("Loading system state failed due to " + e.getMessage());
        }
    }
}
