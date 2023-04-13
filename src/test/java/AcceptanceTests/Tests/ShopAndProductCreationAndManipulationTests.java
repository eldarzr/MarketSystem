package AcceptanceTests.Tests;


import AcceptanceTests.MarketSystemBridge;
import junit.framework.Assert;
import junit.framework.TestCase;
import org.junit.jupiter.api.Test;

import java.util.Collection;


//This test class assumes GuestBasicTests are all passed
public class ShopAndProductCreationAndManipulationTests extends TestCase {

    MarketSystemBridge bridge;
    boolean setUpComplete = false;
    boolean testsComplete = false;

    //In set up we register 10 users (gabi0 - gabi9) and log in to the first 5 (gabi0 - gabi4)
    public void setUp() throws Exception{
        if(setUpComplete)return;
        bridge.init();
        String pass = "1234Gabi";
        super.setUp();
        for(int i=0;i<10;i++){
            String index = Integer.toString(i);
            bridge.register("gabi"+index,"gabi"+index+"@gmail.com",pass);
            if (i<5)
                bridge.login("gabi"+index,pass);
        }
        setUpComplete = true;

    }
    public void tearDown() throws Exception{
        if(!testsComplete)return;
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
    //unsuccessful add product by a non appointed user
    @Test
    public void addProductTest3(){
        try{
            String userName = "gabi5"; // a non-appointed user
            String shopName = "Gabi's Goods";
            String productName = "Soccer Ball";
            double price = 150;
            String desc = "Adidas soccer ball size 5";
            bridge.addNewProduct(userName,shopName,productName,desc,price);
            Assert.fail("shouldn't be able to add a product as a non-appointed user");
        }catch (Exception e){
            Assert.assertTrue(true);
        }
    }
    //unsuccessful add product by a non logged in owner
    @Test
    public void addProductTest4(){
        try{
            String founderName = "gabi0";
            String userName = "gabi5";
            String shopName = "Gabi's Goods";
            bridge.appointShopOwner(founderName, userName, shopName);
            String productName = "Soccer Ball";
            double price = 100;
            String desc = "Adidas soccer ball size 5";
            bridge.addNewProduct(userName, shopName, productName, desc, price);
            Assert.fail("non-logged in owner should not be able to add product");
        } catch (Exception e){
            Assert.assertTrue(true);
        }
    }
    //successful add product by appointed owner
    @Test
    public void addProductTest5(){
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
//Update product tests:
//user is only able to update a product's name in a shop if he is founder, owner or manager there, he is logged in,
//and the new name he is trying to change the product's name to is not taken already.
//"Gabi's Goods" shop : founder is gabi0, logged in appointed owner is gabi1, non-logged in owner is gabi5

    //unsuccessful update product's name test because the name is already used for a different product in the store
    @Test
    public void updateProductNameTest1(){
        try{
            String userName = "gabi0"; // founder of Gabi's Goods
            String oldProductName = "Basketball"; // Was added in earlier tests
            String newProductName = "Soccer"; // Also was added in earlier tests
            String shopName = "Gabi's Goods";
            bridge.updateProductName(userName,shopName,oldProductName,newProductName);
            Assert.fail("Should not be able to update a product's name to an already existing product's name in the same shop");
        }catch (Exception e){
            Assert.assertTrue(true);
        }
    }

    //unsuccessful update product's name test because the user trying to do it is not authorized to
    @Test
    public void updateProductNameTest2(){
        try{
            String userName = "gabi5"; // Non-logged in owner of Gabi's Goods
            String oldProductName = "Soccer"; // Was added in earlier tests
            String newProductName = "Football";
            String shopName = "Gabi's Goods";
            bridge.updateProductName(userName,shopName,oldProductName,newProductName);
            Assert.fail("Should not be able to update a product's name if user is not authorized");
        }catch (Exception e){
            Assert.assertTrue(true);
        }
    }

    //unsuccessful update product's name test because the user trying to do it is an owner, but isn't logged in
    @Test
    public void updateProductNameTest3(){
        try{
            String userName = "gabi5"; // Non-logged in owner of Gabi's Goods
            String oldProductName = "Soccer"; // Was added in earlier tests
            String newProductName = "Football";
            String shopName = "Gabi's Goods";
            bridge.updateProductName(userName,shopName,oldProductName,newProductName);
            Assert.fail("Should not be able to update a product's name if user is not logged in");
        }catch (Exception e){
            Assert.assertTrue(true);
        }
    }

    //unsuccessful update product's name because the product itself not exists in that shop
    @Test
    public void updateProductNameTest4(){
        try{
            String userName = "gabi1"; // Logged in owner of Gabi's Goods
            String oldProductName = "Guitar"; // A non-existing product in Gabi's Goods
            String newProductName = "Electric Guitar";
            String shopName = "Gabi's Goods";
            bridge.updateProductName(userName,shopName,oldProductName,newProductName);
            Assert.fail("Should not be able to update a product's name if the product does not exist in the shop");
        }catch (Exception e){
            Assert.assertTrue(true);
        }
    }

    //successful update product's name by founder
    @Test
    public void updateProductNameTest5(){
        try{
            String userName = "gabi0"; // Founder of Gabi's Goods
            String oldProductName = "Soccer"; // Was added in earlier tests
            String newProductName = "Football";
            String shopName = "Gabi's Goods";
            bridge.updateProductName(userName,shopName,oldProductName,newProductName);
            Assert.assertTrue(true);
        }catch (Exception e){
            Assert.fail("Should be able to update a product's name as a founder");
        }
    }
    //successful update product's name by appointed owner who is logged in
    @Test
    public void updateProductNameTest6(){
        try{
            String userName = "gabi1"; // appointed owner of Gabi's Goods and is logged in
            String oldProductName = "Basketball"; //Was added in earlier tests
            String newProductName = "Tennis ball";
            String shopName = "Gabi's Goods";
            bridge.updateProductName(userName,shopName,oldProductName,newProductName);
            Assert.assertTrue(bridge.productExistsInShop(shopName,newProductName));
        }catch (Exception e){
            Assert.fail("Should be able to update a product's name by an appointed owner who is logged in");
        }
    }
    //Update product's description tests:
    // user is only able to update a product's description in a shop if he is founder, owner or manager there, he is logged in,
    //"Gabi's Goods" shop : founder is "gabi0", logged in appointed owner is "gabi1", non-logged in owner is "gabi5"
    //products in "Gabi's Goods" are currently "Football" and "Tennis ball"

    //unsuccessful update product's description test because the user trying to do it is not authorized to
    @Test
    public void updateProductDescription1(){
        try{
            String userName = "gabi3"; // non authorized user
            String shopName = "Gabi's Goods";
            String productName = "Football"; // existing product
            String newDescription = "Brown NFL football with white stitches";
            bridge.updateProductDesc(userName,shopName,productName,newDescription);
            Assert.fail("user should not be able to update product's description if they aren't authorized");
        }catch (Exception e){
            Assert.assertTrue(true);
        }
    }
    //unsuccessful update product's description test because the user trying to do it is an owner, but isn't logged in
    @Test
    public void updateProductDescription2(){
        try{
            String userName = "gabi5"; // non-logged in owner
            String shopName = "Gabi's Goods";
            String productName = "Football"; // existing product
            String newDescription = "Brown NFL football with white stitches";
            bridge.updateProductDesc(userName,shopName,productName,newDescription);
            Assert.fail("user should not be able to update product's description if they are not logged in");
        }catch (Exception e){
            Assert.assertTrue(true);
        }
    }

    //unsuccessful update product's description because the product itself not exists in that shop
    @Test
    public void updateProductDescription3(){
        try{
            String userName = "gabi0"; // founder of Gabi's Goods
            String shopName = "Gabi's Goods";
            String productName = "Soccer"; // non-existent product
            String newDescription = "Adidas Soccer ball";
            bridge.updateProductDesc(userName,shopName,productName,newDescription);
            Assert.fail("user should not be able to update a product's description that does not exist in the shop");
        }catch (Exception e){
            Assert.assertTrue(true);
        }
    }

    //successful update product's description by logged in founder
    @Test
    public void updateProductDescription4(){
        try{
            String userName = "gabi0"; // founder of Gabi's Goods
            String shopName = "Gabi's Goods";
            String productName = "Football"; // existing product
            String newDescription = "Brown NFL football with white stitches";
            bridge.updateProductDesc(userName,shopName,productName,newDescription);
            Assert.assertEquals(newDescription, bridge.getProductDescription(shopName, productName));
        }catch (Exception e){
            Assert.fail("founder should be able to update product's description");
        }
    }

    //successful update product's name by appointed owner who is logged in
    @Test
    public void updateProductDescription5(){
        try{
            String userName = "gabi1"; // appointed owner of Gabi's Goods and is logged in
            String shopName = "Gabi's Goods";
            String productName = "Tennis ball"; // existing product
            String newDescription = "Wilson US Open Tennis ball";
            bridge.updateProductDesc(userName,shopName,productName,newDescription);
            Assert.assertEquals(newDescription, bridge.getProductDescription(shopName, productName));
        }catch (Exception e){
            Assert.fail("appointed owner should be able to update product's description");
        }
    }
    //Update product's price tests:
    // user is only able to update a product's description in a shop if he is founder, owner or manager there, he is logged in,
    // price cannot be changed to a negative number
    //"Gabi's Goods" shop : founder is "gabi0", logged in appointed owner is "gabi1", non-logged in owner is "gabi5"
    //products in "Gabi's Goods" are currently "Football" and "Tennis ball"

//unsuccessful update product's price test because the user trying to do it is not authorized to
    @Test
    public void updateProductPrice1(){
        try{
            String userName = "gabi3"; // non authorized user
            String shopName = "Gabi's Goods";
            String productName = "Football"; // existing product
            double newPrice = 320;
            bridge.updateProductPrice(userName,shopName,productName,newPrice);
            Assert.fail("user should not be able to update product's price if they aren't authorized");
        }catch (Exception e){
            Assert.assertTrue(true);
        }
    }

    //unsuccessful update product's price test because the user trying to do it is an owner, but isn't logged in
    @Test
    public void updateProductPrice2(){
        try{
            String userName = "gabi5"; // non-logged in owner
            String shopName = "Gabi's Goods";
            String productName = "Football"; // existing product
            double newPrice = 320;
            bridge.updateProductPrice(userName,shopName,productName,newPrice);
            Assert.fail("non-logged in owner should not be able to update product's price");
        }catch (Exception e){
            Assert.assertTrue(true);
        }
    }

    //unsuccessful update product's price because the product itself not exists in that shop
    @Test
    public void updateProductPrice3(){
        try{
            String userName = "gabi0"; // founder of the shop
            String shopName = "Gabi's Goods";
            String productName = "Baseball"; // product doesn't exist in the shop
            double newPrice = 20;
            bridge.updateProductPrice(userName,shopName,productName,newPrice);
            Assert.fail("should not be able to update price of product that doesn't exist in the shop");
        }catch (Exception e){
            Assert.assertTrue(true);
        }
    }

    //unsuccessful update product's price because the price is negative
    @Test
    public void updateProductPrice4(){
        try{
            String userName = "gabi1"; // appointed owner of the shop and is logged in
            String shopName = "Gabi's Goods";
            String productName = "Tennis ball"; // existing product
            double newPrice = -1;
            bridge.updateProductPrice(userName,shopName,productName,newPrice);
            Assert.fail("should not be able to update product's price to a negative number");
        }catch (Exception e){
            Assert.assertTrue(true);
        }
    }

    //successful update product's price by logged in founder
    @Test
    public void updateProductPrice5(){
        try{
            String userName = "gabi0"; // founder of the shop and is logged in
            String shopName = "Gabi's Goods";
            String productName = "Football"; // existing product
            double newPrice = 320;
            bridge.updateProductPrice(userName,shopName,productName,newPrice);
            Assert.assertEquals(newPrice, bridge.getProductPrice(shopName, productName), 0.01);
        }catch (Exception e){
            Assert.fail("should be able to update product's price as logged in founder");
        }
    }

    //successful update product's price by appointed owner who is logged in
    @Test
    public void updateProductPrice6(){
        try{
            String userName = "gabi1"; // Owner of the shop and is logged in
            String shopName = "Gabi's Goods";
            String productName = "Football"; // existing product
            double newPrice = 300;
            bridge.updateProductPrice(userName,shopName,productName,newPrice);
            Assert.assertEquals(newPrice, bridge.getProductPrice(shopName, productName), 0.01);
        }catch (Exception e){
            Assert.fail("should be able to update product's price as logged in founder");
        }
    }
    //add product to shopping cart test:
    //user should be able to add a product to cart if they're registered and logged in,
    // the shop exists and has the product in a quantity that is
    // enough to satisfy the amount of products they want
    //"Gabi's Goods" shop : founder is "gabi0", logged in appointed owner is "gabi1", non-logged in owner is "gabi5"
    //products in "Gabi's Goods" are currently "Football" and "Tennis ball"

    //unsuccessful addition to cart because the user not exists
    @Test
    public void addProductToCart1(){
        try{
            String userName = "gabi10";  // Non existing user
            String productName = "Football";
            int quantity = 1;
            String shopName = "Gabi's Goods";
            bridge.addProductsToCart(userName,shopName,productName,quantity);
            Assert.fail("Should not be able to add a product to a non existing user");
        }catch (Exception e){
            Assert.assertTrue(true);
        }
    }
    //unsuccessful addition to cart because the shop not exists
    @Test
    public void addProductToCart2(){
        try {
            String userName = "gabi0";
            String productName = "Football";
            int quantity = 1;
            String shopName = "Shop 1"; // Non existing shop
            bridge.addProductsToCart(userName, shopName, productName, quantity);
            Assert.fail("Should not be able to add a product to a non-existing shop");
        } catch (Exception e) {
            Assert.assertTrue(true);
        }
    }

    //unsuccessful addition to cart because the shop exists but the user is not the owner
    @Test
    public void addProductToCart3(){
        try {
            String userName = "gabi5"; //Non logged-in owner
            String productName = "Football";
            int quantity = 1;
            String shopName = "Gabi's Goods";
            bridge.addProductsToCart(userName, shopName, productName, quantity);
            Assert.fail("Should not be able to add a product to a shop with non authorized user");
        } catch (Exception e) {
            Assert.assertTrue(true);
        }
    }

    //unsuccessful addition to cart because the shop exists but the product does not exists
    @Test
    public void addProductToCart4(){
        try {
            String userName = "gabi0";
            String productName = "Table"; // Non existing product
            int quantity = 1;
            String shopName = "Gabi's Goods";
            bridge.addProductsToCart(userName, shopName, productName, quantity);
            Assert.fail("Should not be able to add a non existing product to a shop");
        } catch (Exception e) {
            Assert.assertTrue(true);
        }
    }

    //unsuccessful addition to cart because the user exists but isn't logged in
    @Test
    public void addProductToCart5(){
        try {
            String userName = "gabi0";
            String productName = "Football";
            int quantity = 1;
            String shopName = "Gabi's Goods";
            bridge.addProductsToCart(userName, shopName, productName, quantity);
            Assert.fail("Should not be able to add a product to a shop with a non logged-in user");
        } catch (Exception e) {
            Assert.assertTrue(true);
        }
    }

    //successful addition to cart - the user is registered, logged in, and exists in the shop
    @Test
    public void addProductToCart6(){
        testsComplete = true;
        try {
            String userName = "gabi1"; //logged-in appointed owner
            String productName = "Football";
            int quantity = 3;
            String shopName = "Gabi's Goods";
            bridge.addProductsToCart(userName, shopName, productName, quantity);
            Assert.assertTrue(bridge.getCart(userName).getQuantityOfProduct(productName) == quantity);
        } catch (Exception e) {
            Assert.fail("Addition to cart should've succeeded");
        }
    }



}
