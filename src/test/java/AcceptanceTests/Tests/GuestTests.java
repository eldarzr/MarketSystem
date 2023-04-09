package AcceptanceTests.Tests;


import BusinessLayer.MarketIntr;
import junit.framework.TestCase;

public class GuestTests extends TestCase {
    MarketIntr bridge;
    public void setUp() throws Exception{
        String pass = "1234Gabi";
        super.setUp();
        for(int i=0;i<10;i++){
            String index = Integer.toString(i);
            bridge.register("gabi"+index,"gabi"+index+"@gmail.com",pass);
            bridge.login("gabi"+index,pass);
        }
        bridge.openShop("gabi0","");


    }
}
