package AcceptanceTests.Tests;

import BusinessLayer.Enums.ManageType;
import BusinessLayer.Market;
import BusinessLayer.MemberRoleInShop;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import java.io.BufferedReader;
import java.io.FileReader;
import java.util.ArrayList;
import java.util.Collection;

import static org.junit.jupiter.api.Assertions.fail;

public class InitNLoadTests {

    private Market market;
    @BeforeEach
    public void setUp() throws Exception {
        market = new Market();
        try{market.init("src/InitFiles/TestsConfig.jason");}
        catch (Exception ignored) {}
    }

    @AfterEach
    public void tearDown() {market.resetAll();}

    @Test
    public void testNotLoadingEmptyConfig() {
        try
        {
            market.init("src/InitFiles/ErrorConfig.jason");
            fail("Loaded empty config file.");
        }
        catch (Exception e) {System.out.println(e.getMessage());}
    }

    @Test
    public void testNotLoadingMissingConfig() {
        try
        {
            market.init("src/InitFiles/temp");
            fail("Loaded missing config file.");
        }
        catch (Exception e) {System.out.println(e.getMessage());}
    }

    @Test
    public void testNotLoadingNonCompleteConfig() {
        try
        {
            market.init("src/InitFiles/NonCompleteConfig.jason");
            fail("Loaded not-complete config file.");
        }
        catch (Exception e) {System.out.println(e.getMessage());}
    }

    @Test
    public void testValidStateFile() {
        try
        {
            market.init("src/InitFiles/TestsConfig.jason");
            market.loadState(new BufferedReader(new FileReader("src/StateFiles/loadHWStateSuccess")));
            market.login("admin","Aa123456");
            Collection<MemberRoleInShop> memberRoleInShops  =market.getShopManagersAndPermissions("admin","shop1");
            market.logout("admin");
            Collection<String> owners = new ArrayList<>();
            for(MemberRoleInShop m : memberRoleInShops)
                if(m.getType().equals(ManageType.OWNER)) owners.add(m.getUserName());

            for(String ownerName : owners)
                if(ownerName.equals("user3")) fail("user3 was not removed as owner");
        }
        catch (Exception e) {fail(e.getMessage());}
    }

    @Test
    public void testNonValidStateFile() {
        try
        {
            market.loadState(new BufferedReader(new FileReader("src/StateFiles/loadHWStateFail")));
            fail();
        }
        catch (Exception e) {System.out.println(e.getMessage());}
    }
}
