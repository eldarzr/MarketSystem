package BusinessLayer.ExternalSystemsAdapters;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.net.URI;
import java.net.http.HttpHeaders;
import java.nio.charset.StandardCharsets;
import java.util.HashMap;
import java.util.Map;
import java.net.URLEncoder;
import java.io.UnsupportedEncodingException;
import java.util.stream.Collectors;

public class ExternalSystemAPI {
    private static HttpClient client = HttpClient.newHttpClient();
    private String serverUrl = "https://php-server-try.000webhostapp.com/";

    public ExternalSystemAPI() {
    }

    public ExternalSystemAPI(String serverUrl) {
        this.serverUrl=serverUrl;
    }


//        public static void main(String[] args) throws Exception {
//            // Testing the functions
//            handshake();
//            pay("2222333344445555", "4", "2021", "Israel Israelovice", "262", "20444444");
//            cancelPay("20123");
//            supply("Israel Israelovice", "Rager Blvd 12", "Beer Sheva", "Israel", "8458527");
//            cancelSupply("30525");
//        }

    private HttpResponse<String> sendPostRequest(String actionType, Map<String, String> parameters) throws Exception {
            parameters.put("action_type", actionType);

            String requestBody = parameters.keySet().stream()
                    .map(key -> key + "=" + encodeValue(parameters.get(key)))
                    .collect(Collectors.joining("&"));

            HttpRequest request = HttpRequest.newBuilder()
                    .uri(URI.create(serverUrl))
                    .header("Content-Type", "application/x-www-form-urlencoded")
                    .POST(HttpRequest.BodyPublishers.ofString(requestBody))
                    .build();

            HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());
            return response;
        }

        private String encodeValue(String value) {
            try {
                return URLEncoder.encode(value, StandardCharsets.UTF_8.toString());
            } catch (UnsupportedEncodingException e) {
                throw new RuntimeException(e.getCause());
            }
        }

        // Functions for each action type

        public void handshake() throws Exception {
            sendPostRequest("handshake", new HashMap<>());
        }

        public boolean pay(CreditCardPaymentDetails paymentDetails) throws Exception {
            Map<String, String> parameters = paymentDetails.getMappedInfo();
            HttpResponse<String> resp = sendPostRequest("pay", parameters);
            if (!validateResponse(resp))
                return false;
            int transactionId = Integer.parseInt(resp.body());
            if (!(transactionId >= 10000 && transactionId <= 100000))
                return false;

            paymentDetails.setTransactionID(resp.body());
            return true;
        }

    public boolean cancelPay(CreditCardPaymentDetails paymentDetails) throws Exception {
            Map<String, String> parameters = new HashMap<>();
            parameters.put("transaction_id", paymentDetails.getTransactionID());
            HttpResponse<String> resp = sendPostRequest("cancel_pay", parameters);
            return validateResponse(resp) && (Integer.parseInt(resp.body()) == 1);
        }

        public boolean supply(SupplyDetails supplyDetails) throws Exception {
            Map<String, String> parameters = supplyDetails.getMappedInfo();
            HttpResponse<String> resp = sendPostRequest("supply", parameters);
            if (!validateResponse(resp))
                return false;
            int transactionId = Integer.parseInt(resp.body());
            if (!(transactionId >= 10000 && transactionId <= 100000))
                return false;

            supplyDetails.setTransactionID(resp.body());
            return true;
        }
        public boolean cancelSupply(SupplyDetails supplyDetails) throws Exception {
            Map<String, String> parameters = new HashMap<>();
            parameters.put("transaction_id", supplyDetails.getTransactionID());
            HttpResponse<String> resp = sendPostRequest("cancel_supply", parameters);
            return validateResponse(resp) && (Integer.parseInt(resp.body()) == 1);
        }

    private boolean validateResponse(HttpResponse<String> resp) {
        return (resp.statusCode() >= 200 && resp.statusCode() < 300);
    }
    }
