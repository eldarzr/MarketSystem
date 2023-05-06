package BusinessLayer.Purchases;

import BusinessLayer.ExternalSystemsAdapters.CreditCardPaymentDetails;
import BusinessLayer.ExternalSystemsAdapters.PaymentDetails;
import BusinessLayer.ExternalSystemsAdapters.SupplyDetails;
import BusinessLayer.Shops.FinalBagPriceResult;
import BusinessLayer.Shops.FinalCartPriceResult;
import BusinessLayer.Shops.Product;
import BusinessLayer.Shops.Shop;
import BusinessLayer.Users.User;

import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;
import java.util.concurrent.ConcurrentHashMap;

public class Purchase implements PurchaseIntr{

    List<Shop> shops;
    User user;
    PaymentDetails paymentDetails;
    SupplyDetails supplyDetails;
    UserInvoice userInvoice;
    List<ShopInvoice> shopInvoices;
    double totalPrice;
    double priceAfterDiscount;

    public Purchase(User user, List<Shop> shops, PaymentDetails paymentDetails, SupplyDetails supplyDetails) {
        this.user = user;
        this.shops = shops;
        this.paymentDetails = paymentDetails;
        this.supplyDetails = supplyDetails;
        this.userInvoice = new UserInvoice(user.getName(), paymentDetails.toString(), paymentDetails.toString());
        this.shopInvoices = new ArrayList<>();
    }

    @Override
    public void process() throws Exception {
        acquireProductsLocks();
        FinalCartPriceResult finalPrice = handleStock();
        try{
            paymentDetails.accept(this,finalPrice.getTotalPriceAfterDiscount());
        }catch (Exception e){
            revert();
            throw new Exception(String.format("problem with payment, error message: %s",e.getMessage()));
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
        for (ShopInvoice shopInvoice : shopInvoices)
            getShopByName(shopInvoice.getShopName()).addInvoice(shopInvoice);
    }

    private void revertPay() throws InterruptedException {
        paymentDetails.acceptRevert(this);
    }


    private FinalCartPriceResult handleStock() throws Exception {
        Cart cart = user.getCart();
        ConcurrentHashMap<String, ShopBag>  shopsAndProducts = cart.getShopsAndProducts();
        // Check for every shop if the purchase policy applies
        checkPurchasePolicies(shopsAndProducts);

        checkProductsAvailability(shopsAndProducts);
        FinalCartPriceResult finalPriceResultResult = computeCartPrice();
        reduceProductsQuantity(shopsAndProducts);
        addProductsToInvoices(shopsAndProducts);
        return finalPriceResultResult;
    }

    private void checkPurchasePolicies(ConcurrentHashMap<String, ShopBag> shopsAndProducts) throws Exception {
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

    private FinalCartPriceResult computeCartPrice() {
        Cart userCart = user.getCart();
        FinalCartPriceResult finalCartPriceResult = new FinalCartPriceResult();
        for(String shopName : userCart.getShopsNames()){
            ShopBag shopBag = userCart.getShoppingBag(shopName);
            FinalBagPriceResult finalBagPriceResult = getShopByName(shopName).computeShopBagPrice(shopBag);
            finalCartPriceResult.addBagResults(shopName, finalBagPriceResult);
        }
        return finalCartPriceResult;
    }

    private void reduceProductsQuantity(ConcurrentHashMap<String, ShopBag> shopsAndProducts) throws Exception {
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

    private void checkProductsAvailability(ConcurrentHashMap<String, ShopBag> shopsAndProducts) throws Exception {
        for(String shopName : shopsAndProducts.keySet()){
            Shop currentShop = getShopByName(shopName);
            try {
                currentShop.validateAvailability(shopsAndProducts.get(shopName).getProductsAndQuantities());
            }catch (Exception e){
                releaseProductsLocks();
                throw new Exception(String.format("ERROR: unable to purchase cart because: %s",e.getMessage()));
            }
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
        List<Product> products = cart.getAllProducts();
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
        List<Product> products = cart.getAllProducts();
        products.sort(new Comparator<Product>() {
            public int compare(Product p1, Product p2) {
                return p1.getName().compareTo(p2.getName());
            }});
        for(int i = 0; i < products.size(); i++){
            products.get(i).unlockProduct();
        }
    }

    private void revert() throws Exception {
        acquireProductsLocks();
        Cart cart = user.getCart();
        ConcurrentHashMap<String, ShopBag>  shopsAndProducts = cart.getShopsAndProducts();
        revertProductsReduce(shopsAndProducts);
        releaseProductsLocks();
    }

    private void revertProductsReduce(ConcurrentHashMap<String, ShopBag>  shopsAndProducts) throws Exception {
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

    private void supply() throws InterruptedException {
        //connect to supply system
        Thread.sleep(20);
    }


    public void visit(CreditCardPaymentDetails creditCardPaymentDetails,double priceAfterDiscount) throws InterruptedException {
        //connect to credit Card Company
        Thread.sleep(20);
    }

    public void visitRevert(CreditCardPaymentDetails creditCardPaymentDetails) throws InterruptedException {
        //connect to credit card company for revert
        Thread.sleep(20);
    }

    public void addProductsToInvoices(ConcurrentHashMap<String, ShopBag> shopsAndProducts) {
        for(String shopName : shopsAndProducts.keySet()){
            ShopInvoice shopInvoice = new ShopInvoice
                    (user.getName(), paymentDetails.toString(), supplyDetails.toString(), shopName);
            ShopBag shopBag = shopsAndProducts.get(shopName);
            for (ShopBagItem shopBagItem : shopBag.getProductsAndQuantities().values()){
                System.out.println("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@" + shopBagItem.getProduct());
                userInvoice.addProduct(shopName, shopBagItem.getProduct(), shopBagItem.getQuantity());
                shopInvoice.addProduct(shopName, shopBagItem.getProduct(), shopBagItem.getQuantity());
            }
            shopInvoices.add(shopInvoice);
        }
    }
}
