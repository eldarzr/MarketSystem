package AcceptanceTests;

public class BridgeGenerator {
    public static MarketSystemBridge getBridge(){
        MarketSystemProxyBridge bridge = new MarketSystemProxyBridge();
        bridge.realBridge = null;
        return bridge;
    }
}
