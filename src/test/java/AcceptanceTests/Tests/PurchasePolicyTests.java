package AcceptanceTests.Tests;

import AcceptanceTests.MarketSystemBridge;
import AcceptanceTests.MarketSystemRealBridge;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.fail;

public class PurchasePolicyTests {

    private MarketSystemBridge market= new MarketSystemRealBridge();
    private String tempUserName;
    private String category = "category";
    private String shopName = "My Shop";
    private String john = "johndoe";
    private String jane = "janedoe";
    private String pass = "Passw0rd!!!";
    private String item1= "item1";

    @BeforeEach
    public void setUp() throws Exception {

        market= new MarketSystemRealBridge();
        market.init();
        tempUserName = market.startSession();

        // create some shops with products for testing
        market.register("johndoe", "johndoe@example.com", "Passw0rd!!!");
        market.login("johndoe", "Passw0rd!!!");
        market.createShop("johndoe", "My Shop");
        market.addNewProduct("johndoe", "My Shop", "item1", category,"Item 1 description", 10.0,5);
        market.addNewProduct("johndoe", "My Shop", "item2", category,"Item 2 description", 15.0,5);
        market.logout("johndoe");

        market.register("janedoe", "janedoe@example.com", "Passw0rd!!!");
        market.login("janedoe", "Passw0rd!!!");
        market.createShop("janedoe", "Jane's Shop");
        market.addNewProduct("janedoe", "Jane's Shop", "item3", category, "Item 3 description", 20.0,5);
        market.addNewProduct("janedoe", "Jane's Shop", "item4", category, "Item 4 description", 25.0,5);
        market.logout("janedoe");
    }
    @Test
    public void createAgePurchasePolicy(){
        try{
            market.login(john,pass);
            market.addAgePurchasePolicy(john,shopName,true,item1,false,0,18);
        }catch (Exception e){
            fail(e.getMessage());
        }
    }
    @Test
    public void WrongAgesPurchasePolicy(){
        try{
            market.login(john,pass);
            market.addAgePurchasePolicy(john,shopName,true,item1,false,18,0);
            fail("John should not be able to create such purchase policy");
        }catch (Exception ignored){}
    }
    @Test
    public void UnauthorizedUserCreatePurchasePolicy(){
        try{
            market.login(jane,pass);
            market.addAgePurchasePolicy(jane,shopName,true,item1,false,0,18);
            fail("Jane should not be able to create such purchase policy");
        }catch (Exception ignored){}
    }
    @Test
    public void createAgePurchasePolicy(){
        try{
            market.login(john,pass);
            market.addAgePurchasePolicy(john,shopName,true,item1,false,0,18);
        }catch (Exception e){
            fail(e.getMessage());
        }
    }


}

