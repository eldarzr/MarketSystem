package AcceptanceTests.Tests;

import AcceptanceTests.MarketSystemBridge;
import AcceptanceTests.PaymentMethodBridge;
import junit.framework.Assert;
import junit.framework.TestCase;
import org.junit.jupiter.api.Test;

public class SystemInitiationTests extends TestCase {
    MarketSystemBridge bridge;
    boolean setUpIsDone = false;
    boolean initiationIsDone = false;

    public void setUp() throws Exception {
        super.setUp();
        if(!initiationIsDone)return;
        if(setUpIsDone)return;
        String pass = "1234Gabi";
        String shopName = "Gabi's Goods";
        String founderName = "gabi0";
        String appointedOwnerName = "gabi1";
        String appointedOwner_notLoggedIn = "gabi5";
        String productName = "Basketball";
        String productDesc = "Size 7 Nike basketball";
        double productPrice = 240;
        int productQuantity = 20;

        for(int i=0;i<10;i++){
            String index = Integer.toString(i);
            bridge.register("gabi"+index,"gabi"+index+"@gmail.com",pass);
            if (i<5)
                bridge.login("gabi"+index,pass);
        }
        bridge.createShop(founderName,shopName);
        bridge.appointShopOwner(founderName,appointedOwnerName,shopName);
        bridge.appointShopOwner(founderName,appointedOwner_notLoggedIn,shopName);
        bridge.addNewProduct(founderName,shopName,productName,productDesc,productPrice);
        bridge.updateProductQuantity(founderName,shopName,productName,productQuantity);

    }
    //1.1 initiation
    @Test
    public void initiationTest(){
        try{
            bridge.init();
            Assert.assertTrue(true);
        }catch (Exception e){
            Assert.fail("Initiation exception "+e.getMessage());
        }
    }

}
