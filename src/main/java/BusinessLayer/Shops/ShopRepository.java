package BusinessLayer.Shops;

import BusinessLayer.MemberRoleInShop;
import BusinessLayer.PersistenceManager;
import BusinessLayer.ProductId;
import BusinessLayer.Purchases.ShopInvoice;
import BusinessLayer.Search;
import BusinessLayer.Users.User;
import org.apache.commons.lang3.NotImplementedException;
import org.apache.commons.text.similarity.LevenshteinDistance;

import javax.persistence.EntityManager;
import javax.persistence.TypedQuery;
import java.util.*;
import java.util.concurrent.ConcurrentHashMap;
import java.util.logging.Logger;
import java.util.stream.Collectors;
import java.util.stream.Stream;


public class ShopRepository {

    private static final int MAX_SHOPS_IN_MEMORY = 5;

	private static class  ShopRepo {
        private static ShopRepository instance = new ShopRepository() ;
    }

    public static ShopRepository getInstance() {
        return ShopRepo.instance;
    }

    private static final Logger logger = Logger.getLogger("Market");
    private LinkedList<Shop> shops;

    private ShopRepository()  {
        this.shops = new LinkedList<>();
    }

    public List<Shop> getAllShops() {
        EntityManager entityManager = PersistenceManager.getInstance().getEntityManager();
        try {
            TypedQuery<Shop> query = entityManager.createQuery("SELECT s FROM Shop s", Shop.class);
            return query.getResultList();
        }
        catch (Exception e){
            return shops;
        }
        finally {
            entityManager.close();
        }
    }

    public void addShop(String shopName, Shop shop) throws Exception {
		EntityManager entityManager = PersistenceManager.getInstance().getEntityManager();
        if(getFromCache(shopName) != null)
            throwException("There is already shop with that name");
        Shop shopFromDB;
        try {
            shopFromDB = entityManager.find(Shop.class, shopName);
        }
        catch (Exception e){
            shopFromDB = null;
        }
        finally {
            entityManager.close();
        }
        if (shopFromDB != null) {
            storeInCache(shopFromDB);
            throwException("There is already shop with that name");
        }
        storeInCache(shop);
        PersistenceManager.getInstance().persistObj(shop);
    }

    public Shop getShop(String shopName) {
        EntityManager entityManager = PersistenceManager.getInstance().getEntityManager();
        Shop shop;
        shop = getFromCache(shopName);
        if (shop != null)
            return shop;
        try {
            shop = entityManager.find(Shop.class, shopName);
        }
        catch (Exception e){
            shop = null;
        }
        finally {
            entityManager.close();
        }
        if (shop == null)
            return null;
        storeInCache(shop);
        return shop;
    }

    public List<Shop> getShops(List<String> shopsNames) throws Exception {
        List<Shop> ret = new LinkedList<>();
        for(String shopName : shopsNames){
            ret.add(getShop(shopName));
        }
        return ret;
    }

    public void reset() {
        shops.clear();
        PersistenceManager.getInstance().reset();
    }

    private void throwException(String errorMsg)  throws IllegalArgumentException{
        logger.severe(errorMsg);
        throw new IllegalArgumentException(errorMsg);
    }

    public void updateToDB(String shopName){
        Shop shop = getShop(shopName);
        PersistenceManager.getInstance().updateObj(shop);
    }

    public void removeConnectionFromDB(String shopName, ShopProduct shopProduct) {
        PersistenceManager.getInstance().removeFromDB(shopProduct);
        updateToDB(shopName);
    }

    private void storeInCache(Shop shop) {
        synchronized (shops){
            if(shops.size() > MAX_SHOPS_IN_MEMORY)
                shops.removeLast();
            shops.addFirst(shop);
        }
    }

    private Shop getFromCache(String shopName) {
        synchronized (shops){
            Shop shop = null;
            for(int i = 0; i < shops.size(); i++){
                if(shops.get(i).getName().equalsIgnoreCase(shopName))
                    shop = shops.remove(i);
            }
            if(shop == null)
                return null;
            shops.addFirst(shop);
            return shop;
        }
    }
}
