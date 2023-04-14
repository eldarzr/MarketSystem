package BusinessLayer.Purchases;

import BusinessLayer.ExternalSystemsAdapters.CreditCardPaymentDetails;
import BusinessLayer.ExternalSystemsAdapters.PaymentDetails;
import BusinessLayer.ExternalSystemsAdapters.SupplyDetails;
import BusinessLayer.Shops.Product;
import BusinessLayer.Shops.Shop;
import BusinessLayer.Users.User;

import java.util.Comparator;
import java.util.List;
import java.util.concurrent.ConcurrentHashMap;

public class Purchase implements PurchaseIntr{

    List<Shop> shops;
    User user;

    PaymentDetails paymentDetails;
    SupplyDetails supplyDetails;

    public Purchase(User user, List<Shop> shops, PaymentDetails paymentDetails, SupplyDetails supplyDetails) {
        this.user = user;
        this.shops = shops;
        this.paymentDetails = paymentDetails;
        this.supplyDetails = supplyDetails;
    }

    @Override
    public void process() throws Exception {
        handleStock();
        try{
            paymentDetails.accept(this);
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

    }

    private void revertPay() throws InterruptedException {
        paymentDetails.acceptRevert(this);
    }


    private void handleStock() throws Exception {
        acquireProductsLocks();
        Cart cart = user.getCart();
        ConcurrentHashMap<String, ShopBag>  shopsAndProducts = cart.getShopsAndProducts();
        checkProductsAvailability(shopsAndProducts);
        reduceProductsQuantity(shopsAndProducts);
        releaseProductsLocks();
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


    public void visit(CreditCardPaymentDetails creditCardPaymentDetails) throws InterruptedException {
        //connect to credit Card Company
        Thread.sleep(20);
    }

    public void visitRevert(CreditCardPaymentDetails creditCardPaymentDetails) throws InterruptedException {
        //connect to credit card company for revert
        Thread.sleep(20);
    }
}
