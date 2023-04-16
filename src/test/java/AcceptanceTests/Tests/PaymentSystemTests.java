//package AcceptanceTests.Tests;
//
//import AcceptanceTests.*;
//import junit.framework.TestCase;
//import org.junit.jupiter.api.AfterEach;
//import org.junit.jupiter.api.Assertions;
//import org.junit.jupiter.api.BeforeEach;
//import org.junit.jupiter.api.Test;
//
//public class PaymentSystemTests extends TestCase {
//
//    private MarketSystemBridge marketSystem;
//    private PaymentServiceProviderBridge paymentServiceProvider;
//    private PaymentMethodBridge paymentMethod;
//    private String userName;
//    private String shopName;
//    private String productName;
//    private double productPrice;
//    private int productQuantity;
//    private String category = "category";
//
//    @BeforeEach
//    public void setUp() throws Exception {
//        marketSystem = new MarketSystemRealBridge();
//        paymentServiceProvider = new PaymentServiceProviderRealBridge();
//        paymentMethod = new PaymentMethodRealBridge();
//        userName = "user1";
//        shopName = "shop1";
//        productName = "product1";
//        productPrice = 10.0;
//        productQuantity = 5;
//    }
//
//    @AfterEach
//    public void tearDown(){
//        marketSystem.clearData();
//    }
//
//    @Test
//    public void testPaymentSystem() throws Exception {
//        // Initialize the market system
//        marketSystem.init();
//        // Register a new user
//        marketSystem.register(userName, "user1@gmail.com", "Passw0rd!!!");
//        // Login the user
//        marketSystem.login(userName, "Passw0rd!!!");
//        // Create a new shop
//        marketSystem.createShop(userName, shopName);
//        // Add a new product to the shop
//        marketSystem.addNewProduct(userName, shopName, productName, category, "product1 description", productPrice,productQuantity);
//        // Add the product to the user's cart
//        marketSystem.addProductsToCart(userName, shopName, productName, productQuantity);
//        // Purchase the user's cart using the payment system
//        double totalPrice = marketSystem.getCart(userName).calculateTotalPrice();
//        paymentServiceProvider.updateName("PayPal");
//        String transactionDetails = "Transaction details";
////        boolean paymentConfirmation = paymentMethod.processPayment(totalPrice, transactionDetails);
////        Assertions.assertTrue(paymentConfirmation);//todo: product unsupported operation
//        //todo: un comment after paypal support
//    }
//}
//// we first initialize the market system and create a new user. We then create a new shop and add a new product to it. After that, we add the product to the user's cart and calculate the total price. Finally, we use the payment system to process the payment and receive a confirmation that the payment has been made. Note that in this example implementation, we assume that the payment system is represented by the PaymentServiceProviderBridge and PaymentMethodBridge interfaces, which are implemented by the PaymentServiceProviderImpl and PaymentMethodImpl classes respectively.
//
//
//
//
//
//
//
