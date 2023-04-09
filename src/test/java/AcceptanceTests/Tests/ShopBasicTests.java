package AcceptanceTests.Tests;


import BusinessLayer.MarketIntr;
import junit.framework.Assert;
import junit.framework.TestCase;
import org.junit.jupiter.api.Test;

import java.util.Collection;


//This test class assumes GuestBasicTests are all passed
public class ShopBasicTests extends TestCase {
    MarketIntr bridge;
    public void setUp() throws Exception{
        String pass = "1234Gabi";
        super.setUp();
        for(int i=0;i<10;i++){
            String index = Integer.toString(i);
            bridge.register("gabi"+index,"gabi"+index+"@gmail.com",pass);
            if (i<5)
                bridge.login("gabi"+index,pass);
        }

    }
    public void tearDown() throws Exception{
        super.tearDown();
        for(int i=0;i<10;i++){
            String index = Integer.toString(i);
            if(i<5)
                bridge.logout("gabi"+index);
            bridge.unregister("gabi"+index);
        }
    }
    //successful Shop create
    @Test
    public void createShopTest(){
        try{
            String userName = "gabi0";
            String shopName = "Gabi's Goods";
            bridge.openShop(userName,shopName);
            String founder = bridge.getShopFounder(shopName);
            Collection<String> owners = bridge.getShopOwners(shopName);
            Collection<String> managers = bridge.getShopManagers(shopName);
            boolean toCheck = founder.equals(userName) & owners.size() == 1 &
                    owners.contains(founder) & managers.isEmpty() & bridge.shopExists(shopName);
            Assert.assertTrue(toCheck);
        }catch (Exception e){
            Assert.fail(e.getMessage());
        }
    }
    //unsuccessful shop create because shop already exists
    @Test
    public void createShopTest2(){
        try{
            String shopName = "Gabi's Goods";
            bridge.createShop("gabi0",shopName);
            Assert.fail("shop should not be opened with the same name\n");
        }catch (Exception e){
            Assert.assertTrue(true);
        }
    }
    //unsuccessful shop create because user doesn't exist
    @Test
    public void createShopTest3(){
        try{
            String shopName = "Gabi's Goods2";
            bridge.createShop("non_existing_user",shopName);
            Assert.fail("shop should not be opened if the user not exists\n");
        }catch (Exception e){
            Assert.assertTrue(true);
        }
    }
    //unsuccessful shop create because user isn't logged in
    @Test
    public void createShopTest4(){
        try{
            String shopName = "Gabi's Goods2";
            bridge.createShop("gabi5",shopName);
            Assert.fail("shop should not be opened if the user not logged in\n");
        }catch (Exception e){
            Assert.assertTrue(true);
        }
    }
    //successful add product by founder
    @Test
    public void addProductTest1(){
        try{
            String userName = "gabi0";
            String shopName = "Gabi's Goods";
            String productName = "Basketball";
            double price = 240;
            String desc = "Nike basketball size 7";
            bridge.addNewProduct(userName,shopName,productName,desc,price);
            Assert.assertTrue(bridge.productExistsInShop(shopName,productName));
        }catch (Exception e){
            Assert.fail();
        }
    }
    //unsuccessful add product with the same name
    @Test
    public void addProductTest2(){
        try{
            String userName = "gabi0";
            String shopName = "Gabi's Goods";
            String productName = "Basketball";
            double price = 240;
            String desc = "Nike basketball size 7";
            bridge.addNewProduct(userName,shopName,productName,desc,price);
            Assert.fail("shouldn't be able to add a product with the same name");
        }catch (Exception e){
            Assert.assertTrue(true);
        }
    }
    //successful add product by appointed owner
    @Test
    public void addProductTest3(){
        try{
            String founderName = "gabi0";
            String userName = "gabi1";
            String shopName = "Gabi's Goods";
            bridge.appointShopOwner(founderName,userName,shopName);
            String productName = "Football";
            double price = 210;
            String desc = "Nike NFL football";
            bridge.addNewProduct(userName,shopName,productName,desc,price);
            Assert.assertTrue(bridge.productExistsInShop(shopName,productName));
        }catch (Exception e){
            Assert.fail(e.getMessage());
        }
    }





}
