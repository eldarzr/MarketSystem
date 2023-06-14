package BusinessLayer.Purchases;

import BusinessLayer.ExternalSystemsAdapters.CreditCardPaymentDetails;
import BusinessLayer.ExternalSystemsAdapters.ExternalSystemAPI;
import BusinessLayer.ExternalSystemsAdapters.PaymentDetails;
import BusinessLayer.ExternalSystemsAdapters.SupplyDetails;
import BusinessLayer.Notifications.Notification;
import BusinessLayer.Notifications.NotificationPublisher;
import BusinessLayer.PersistenceManager;
import BusinessLayer.Shops.*;
import BusinessLayer.Users.User;

import javax.persistence.Transient;
import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

public class Purchase implements PurchaseIntr{

    List<Shop> shops;
    User user;
    List<Product> products;
    PaymentDetails paymentDetails;
    SupplyDetails supplyDetails;
    UserInvoice userInvoice;
    List<ShopInvoice> shopInvoices;
    ExternalSystemAPI externalSystem;
    boolean productsReducedFromShop;

    public Purchase(User user, List<Shop> shops, PaymentDetails paymentDetails, SupplyDetails supplyDetails) {
        this.user = user;
        this.shops = shops;
        this.paymentDetails = paymentDetails;
        this.supplyDetails = supplyDetails;
        if(paymentDetails != null && supplyDetails != null)
            this.userInvoice = new UserInvoice(user.getName(), paymentDetails.toString(), paymentDetails.toString());
        this.shopInvoices = new ArrayList<>();
        this.externalSystem = new ExternalSystemAPI();
        productsReducedFromShop = false;
    }

    @Override
    public void process() throws Exception {
        acquireProductsLocks();
        FinalCartPriceResult finalPrice;
        try {
            finalPrice = handleStock();
        }catch (Exception e){
          revert();
          throw new Exception(String.format("Error: %s",e.getMessage()));
        }
        try {
            paymentDetails.accept(this, finalPrice.getTotalPriceAfterDiscount());
        }catch (Exception e){
            revert();
            throw new Exception("Error with payment!");
        }

        try{
            supply();
        }catch (Exception e){
            revertPay();
            revert();
            throw new Exception(String.format("problem with shipment, error message: %s",e.getMessage()));
        }
        addInvoicesToObjects();
        user.clearCart();
        releaseProductsLocks();
    }

    private void addInvoicesToObjects() {
        user.addInvoice(userInvoice);
        for (ShopInvoice shopInvoice : shopInvoices) {
            Shop shop = getShopByName(shopInvoice.getShopName());
            if (shop != null) {
                shop.addInvoice(shopInvoice);
                for(ProductInfo productInfo :shopInvoice.getProductInfoInShop())
                {
                    Notification notification = new Notification(user.getName(),user.getName()+" purchased "+productInfo.getQuantity()+" "+productInfo.getName()+" in shop "+shop.getName());
                    NotificationPublisher.getInstance().notifyShopManagement(user.getName(),shop.getName(),notification);
                }
            }
        }
    }

    private void revertPay() throws Exception {
        paymentDetails.acceptRevert(this);
    }


    private FinalCartPriceResult handleStock() throws Exception {
        Cart cart = user.getCart();
        Map<String, ShopBag> shopsAndProducts = cart.getShopsAndProducts();
        // Check for every shop if the purchase policy applies
        checkPurchasePolicies(shopsAndProducts);
        checkProductsAvailability(shopsAndProducts);
        FinalCartPriceResult finalPriceResultResult = computeCartPrice();
        reduceProductsQuantity(shopsAndProducts);
        productsReducedFromShop = true;
        addProductsToInvoices(shopsAndProducts);
        return finalPriceResultResult;
    }

    private void checkPurchasePolicies(Map<String, ShopBag> shopsAndProducts) throws Exception {
        for(String shopName : shopsAndProducts.keySet()){
            Shop shop = null;
            for(Shop s : shops){
                if(s.getName().equals(shopName)){
                    shop = s;
                    break;
                }
            }
            if(shop == null)throw new Exception("Shop not found: "+shopName);
            shop.evaluatePurchasePolicy(shopsAndProducts.get(shopName), user);
        }
    }

    public FinalCartPriceResult computeCartPrice() {
        Cart userCart = user.getCart();
        FinalCartPriceResult finalCartPriceResult = new FinalCartPriceResult();
        for(String shopName : userCart.getShopsNames()){
            ShopBag shopBag = userCart.getShoppingBag(shopName);
            Shop shop=getShopByName(shopName);
            FinalBagPriceResult finalBagPriceResult = shop.computeShopBagPrice(shopBag);
            finalCartPriceResult.addBagResults(shopName, finalBagPriceResult);
        }
        return finalCartPriceResult;
    }

    private void reduceProductsQuantity(Map<String, ShopBag> shopsAndProducts) throws Exception {
        for(String shopName : shopsAndProducts.keySet()){
            Shop currentShop = getShopByName(shopName);
            try {
                currentShop.newPurchase(user.getName(),shopsAndProducts.get(shopName).getProductsAndQuantities());
            }catch (Exception e){
                releaseProductsLocks();
                throw new Exception(String.format("ERROR: unable to purchase cart because: %s",e.getMessage()));
            }
        }
    }

    private void checkProductsAvailability(Map<String, ShopBag> shopsAndProducts) throws Exception {
        for(String shopName : shopsAndProducts.keySet()){
            Shop currentShop = getShopByName(shopName);
            currentShop.validateAvailability(shopsAndProducts.get(shopName).getProductsAndQuantities());
        }
    }

    private Shop getShopByName(String shopName){
        for(Shop shop : shops)
            if(shop.getName().equals(shopName))
                return shop;
        return null; //not sure what to do here, leaving it like this for now
    }

    private void acquireProductsLocks(){
        Cart cart = user.getCart();
        products = cart.getAllProducts();
        products.sort(new Comparator<Product>() {
            public int compare(Product p1, Product p2) {
                return p1.getName().compareTo(p2.getName());
            }});
        for(int i = 0; i < products.size(); i++){
            products.get(i).lockProduct();
        }
    }

    private void releaseProductsLocks(){
        Cart cart = user.getCart();
        products = cart.getAllProducts();
        products.sort(new Comparator<Product>() {
            public int compare(Product p1, Product p2) {
                return p1.getName().compareTo(p2.getName());
            }});
        for(int i = 0; i < products.size(); i++){
            products.get(i).unlockProduct();
        }
    }

    private void revert() throws Exception {
//        acquireProductsLocks();
        if(productsReducedFromShop){
            Cart cart = user.getCart();
            Map<String, ShopBag>  shopsAndProducts = cart.getShopsAndProducts();
            revertProductsReduce(shopsAndProducts);
        }
        releaseProductsLocks();
    }

    private void revertProductsReduce(Map<String, ShopBag>  shopsAndProducts) throws Exception {
        for(String shopName : shopsAndProducts.keySet()){
            Shop currentShop = getShopByName(shopName);
            try {
                currentShop.revertPurchase(user.getName(),shopsAndProducts.get(shopName).getProductsAndQuantities());
            }catch (Exception e){
                releaseProductsLocks();
                throw new Exception(String.format("ERROR: unable to revert purchase because: %s",e.getMessage()));
            }
        }
    }

    private void supply() throws Exception {
        //connect to supply system
        Thread.sleep(20);
        if(!externalSystem.supply(supplyDetails))
            throw new Exception("Supply failed");
    }

    private void cancelSupply() throws Exception {
        //connect to supply system
        Thread.sleep(20);
        if(!externalSystem.cancelSupply(supplyDetails))
            throw new Exception("Cancel Supply failed");
    }


    public void visit(CreditCardPaymentDetails creditCardPaymentDetails,double priceAfterDiscount) throws Exception {
        //connect to credit Card Company
        Thread.sleep(20);
        if(!externalSystem.pay(creditCardPaymentDetails))
            throw new Exception("Payment failed");
    }

    public void visitRevert(CreditCardPaymentDetails creditCardPaymentDetails) throws Exception {
        //connect to credit card company for revert
        Thread.sleep(20);
        if(!externalSystem.cancelPay(creditCardPaymentDetails))
            throw new Exception("Revert Payment failed");
    }

    public void addProductsToInvoices(Map<String, ShopBag> shopsAndProducts) {
        for(String shopName : shopsAndProducts.keySet()){
            ShopInvoice shopInvoice = new ShopInvoice
                    (user.getName(), paymentDetails.toString(), supplyDetails.toString(), shopName);
            PersistenceManager.getInstance().persistObj(shopInvoice);
            ShopBag shopBag = shopsAndProducts.get(shopName);
            for (ShopBagItem shopBagItem : shopBag.getProductsAndQuantities().values()){
                userInvoice.addProduct(shopName, shopBagItem.getProduct(), shopBagItem.getQuantity());
                shopInvoice.addProduct(new ProductInfo(shopBagItem.getProduct(), shopBagItem.getQuantity()));
            }
            shopInvoices.add(shopInvoice);
        }
    }
}
