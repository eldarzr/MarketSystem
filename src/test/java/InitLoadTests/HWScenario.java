package InitLoadTests;

import AcceptanceTests.MarketSystemBridge;
import AcceptanceTests.MarketSystemRealBridge;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import java.util.Collection;

import static org.junit.jupiter.api.Assertions.fail;

public class HWScenario {

    private MarketSystemBridge marketSystem;
    @BeforeEach
    public void setUp() throws Exception {
        marketSystem = new MarketSystemRealBridge();
        marketSystem.init("src/InitFiles/BaseConfig.jason");
    }

    @AfterEach
    public void tearDown() {
        marketSystem.clearData();
    }

    @Test
    public void testHWSuccess() {
        try
        {
            marketSystem.loadState("src/InitFiles/loadHWStateSuccess");
            Collection<String> owners=marketSystem.getShopOwners("shop1");
            for(String ownerName : owners)
            {
                if(ownerName.equals("user3")) fail("user3 was not removed as owner");
            }
        }
        catch (Exception e)
        {
            fail(e.getMessage());
        }
    }

    @Test
    public void testHWFail() {
        try
        {
            marketSystem.loadState("src/InitFiles/loadHWStateFail");
            fail();
        } catch (Exception e) {
            System.out.println(e.getMessage());
        }
    }
}
