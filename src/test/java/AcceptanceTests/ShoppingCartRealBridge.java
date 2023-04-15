package AcceptanceTests;

import BusinessLayer.Purchases.Cart;
import BusinessLayer.Purchases.ShopBag;
import BusinessLayer.Purchases.ShopBagItem;
import BusinessLayer.Shops.Product;

import java.util.Collection;
import java.util.LinkedList;
import java.util.List;
import java.util.concurrent.ConcurrentHashMap;
import java.util.stream.Collectors;

public class ShoppingCartRealBridge implements ShoppingCartBridge{

    private Cart cart;

    public ShoppingCartRealBridge(Cart cart) {
        this.cart = cart;
    }

    @Override
    public int getQuantityOfProduct(String productName) {
        ConcurrentHashMap<String, ShopBag> productList = cart.getShopsAndProducts();
        for(ShopBag shopBag : productList.values()){
            ConcurrentHashMap<String, ShopBagItem> productAndQuan = shopBag.getProductsAndQuantities();
            for(String product : productAndQuan.keySet()){
                if(product.equals(productName))
                    return productAndQuan.get(product).getQuantity();
            }
        }
        return -1;
    }

    @Override
    public double calculateTotalPrice() {
        return 0;
    }

    @Override
    public Collection<String> getProductNames() {
        return cart.getAllProducts().stream().map(Product::getName).collect(Collectors.toList());
    }

    @Override
    public boolean isEmpty() {
        return cart.getAllProducts().isEmpty();
    }
    //not in ver 1
    @Override
    public double getTotalPriceWithDiscount(String discountCode) {
        return 0;
    }

    @Override
    public Collection<ProductBridge> getProducts() {
        List<ProductBridge> products = new LinkedList<>();
        for(Product product : cart.getAllProducts()){
            products.add(new ProductRealBridge(product));
        }
        return products;
    }
}
