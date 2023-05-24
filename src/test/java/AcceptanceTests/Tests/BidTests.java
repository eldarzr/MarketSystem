package AcceptanceTests.Tests;

import AcceptanceTests.MarketSystemBridge;
import AcceptanceTests.MarketSystemRealBridge;
import BusinessLayer.Bids.Bid;
import BusinessLayer.Bids.BidStatus;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.util.Assert;

import java.util.Collection;

import static org.junit.jupiter.api.Assertions.*;

public class BidTests {

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
    @AfterEach
    public void tearDown() {
        market.clearData();
    }

    @Test
    public void BidCreationTest(){
        try{
            market.login(john,pass);
            market.createBidOffer(john,item1,shopName,9);
            assertEquals(1, market.getPendingBids(john, shopName).size());
        } catch (Exception e) {
            fail(e.getMessage());
        }
    }
    @Test
    public void BidApprovalTest(){
        try{
            market.login(john,pass);
            market.appointShopOwner(john,jane,shopName);
            market.login(jane,pass);
            market.createBidOffer(jane,item1,shopName,9);
            Collection<Bid> bids = market.getPendingBids(jane,shopName);
            Bid b = bids.stream().toList().get(0);
            market.approveBid(jane, shopName,b.getId());
            assertEquals(b.getStatus(), BidStatus.PENDING);
            market.approveBid(john, shopName, b.getId());
            assertEquals(b.getStatus(), BidStatus.APPROVED);
        }catch (Exception e){
            fail(e.getMessage());
        }
    }
    @Test
    public void BidRejectionTest(){
        try{
            market.login(john,pass);
            market.appointShopOwner(john,jane,shopName);
            market.login(jane,pass);
            market.createBidOffer(jane,item1,shopName,9);
            Collection<Bid> bids = market.getPendingBids(jane,shopName);
            Bid b = bids.stream().toList().get(0);
            market.rejectBid(jane,shopName, b.getId());
            assertEquals(b.getStatus(), BidStatus.REJECTED);
        }catch (Exception e){
            fail(e.getMessage());
        }
    }
    @Test
    public void WrongProductBidCreationTest(){
        try{
            market.login(john,pass);
            market.createBidOffer(john,"NonExistingProduct",shopName,9);
            fail("Should not be able to bid a non existing product");
        } catch (Exception ignored) {}
    }
    @Test
    public void WrongShopBidCreationTest(){
        try{
            market.login(john,pass);
            market.createBidOffer(john,item1,"NonExistingShop",9);
            fail("Should not be able to bid a non existing shop");
        } catch (Exception ignored) {}
    }
    @Test
    public void FailedApprovalTest(){
        try{
            market.login(jane,pass);
            market.createBidOffer(jane,item1,shopName,9);
            market.approveBid(jane,shopName,0);
            fail("Jane should not be able to approve a bid in shop "+shopName);
        }catch (Exception ignored){}
    }
    @Test
    public void FailedRejectionTest(){
        try{
            market.login(jane,pass);
            market.createBidOffer(jane,item1,shopName,9);
            market.rejectBid(jane,shopName,0);
            fail("Jane should not be able to reject a bid in shop "+shopName);
        }catch (Exception ignored){}
    }

}
