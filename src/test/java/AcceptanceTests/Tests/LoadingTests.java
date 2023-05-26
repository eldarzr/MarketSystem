package AcceptanceTests.Tests;

import AcceptanceTests.MarketSystemBridge;
import AcceptanceTests.MarketSystemRealBridge;
import BusinessLayer.Market;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import java.util.Collection;

import static org.junit.jupiter.api.Assertions.fail;

public class LoadingTests {

    private Market market;
    @BeforeEach
    public void setUp() throws Exception {
        market = new Market();
    }

    @AfterEach
    public void tearDown() {
        try{market.init("src/InitFiles/TestsConfig.jason");}
        catch (Exception ignored) {}
        market.resetAll();
    }

    @Test
    public void testNotLoadingEmptyConfig() {
        try
        {
            market.init("src/InitFiles/ErrorConfig.jason");
            fail("Loaded empty config file.");
        }
        catch (Exception ignored)
        {

        }
    }

    @Test
    public void testNotLoadingMissingConfig() {
        try
        {
            market.init("src/InitFiles/temp");
            fail("Loaded missing config file.");
        }
        catch (Exception ignored)
        {

        }
    }

    @Test
    public void testNotLoadingNonCompleteConfig() {
        try
        {
            market.init("src/InitFiles/NonCompleteConfig.jason");
            fail("Loaded not-complete config file.");
        }
        catch (Exception ignored)
        {

        }
    }
}
