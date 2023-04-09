package AcceptanceTests;

import BusinessLayer.MarketIntr;

public class BridgeGenerator {
    public static MarketIntr getBridge(){
        MarketSystemProxyBridge bridge = new MarketSystemProxyBridge();
        bridge.realBridge = null;
        return bridge;
    }
}
