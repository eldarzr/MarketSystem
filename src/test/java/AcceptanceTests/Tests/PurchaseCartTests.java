package AcceptanceTests.Tests;

import AcceptanceTests.MarketSystemBridge;
import AcceptanceTests.MarketSystemRealBridge;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.fail;

public class PurchaseCartTests {
    MarketSystemBridge market = new MarketSystemRealBridge();

    private final String shopName1 = "Shop 1";
    private final String product1 = "Item 1";
    private final int quantity1 = 5;
    private final String shopName2 = "Shop 2";
    private final String product2 = "Item 2";
    private final int quantity2 = 9;

    @BeforeEach
    public void setUp() throws Exception {
        market.init("src/InitFiles/BaseConfig.jason");
        String ownerName = "owner";
        String email = "owner@example.com";
        String password = "Passw0rd!!!";

        //Register and login the owner
        market.register(ownerName,email,password);
        market.login(ownerName,password);

        //Create the shops
        market.createShop(ownerName,shopName1);
        market.createShop(ownerName,shopName2);

        //Add products to the shop
        String category = "category";
        market.addNewProduct(ownerName,shopName1,product1, category,"Description",40.0,quantity1);
        market.addNewProduct(ownerName,shopName2,product2, category,"Description",15.0,quantity2);

        //Logout the owner
        market.logout(ownerName);
    }

    @AfterEach
    public void tearDown(){
        market.clearData();
    }

    @Test
    public void guestSuccessfulPurchaseCartTest(){
        try{
            String tempUserName = market.startSession();

            //Add products to cart
            market.addProductsToCart(tempUserName,shopName1,product1,quantity1);
            market.addProductsToCart(tempUserName,shopName2,product2,quantity2);


            //Purchase the cart
            market.purchaseCart(tempUserName);
        } catch (Exception e) {
            fail("Purchase should be executed successfully");
        }
    }

    @Test
    public void memberSuccessfulPurchaseCartTest(){
        try{
            String userName = "jonsnow";
            String email = "jon@example.com";
            String password = "Passw0rd!!!";

            //Register and login the user
            market.register(userName,email,password);
            market.login(userName,password);

            //Add products to cart
            market.addProductsToCart(userName,shopName1,product1,quantity1);
            market.addProductsToCart(userName,shopName2,product2,quantity2);

            //Purchase the cart
            market.purchaseCart(userName);
        } catch (Exception e) {
            fail("Purchase should be executed successfully");
        }
    }

    @Test
    public void unsuccessfulPurchaseCartTest(){
        try{
            String userName = "jonsnow";
            String email = "jon@example.com";
            String password = "Passw0rd!!!";

            //Register and login the user
            market.register(userName,email,password);
            market.login(userName,password);

            //Add products to cart
            market.addProductsToCart(userName,shopName1,product1,quantity1);
            market.addProductsToCart(userName,shopName2,product2,quantity2);

            String tempUserName = market.startSession();

            //Add products to cart
            market.addProductsToCart(tempUserName,shopName1,product1,quantity1);
            market.addProductsToCart(tempUserName,shopName2,product2,quantity2);

            //Purchase the cart - should be successful since the quantities exist
            market.purchaseCart(userName);

            //Purchase the cart - should be unsuccessful since the products are sold out
            market.purchaseCart(tempUserName);

            fail("purchase should be unsuccessful since the products are sold out");
        } catch (Exception ignored) {}
    }

}
