package BusinessLayer.Shops;

import BusinessLayer.MemberRoleInShop;
import BusinessLayer.PersistenceManager;
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

import static BusinessLayer.Shops.Shop.entityManager;

public class ShopRepository {

    private static class  ShopRepo {
        private static ShopRepository instance = new ShopRepository() ;
    }

    public static ShopRepository getInstance() {
        return ShopRepo.instance;
    }

    private static final Logger logger = Logger.getLogger("Market");
    private Map<String,Shop> shops;

    private ShopRepository()  {
        this.shops = new ConcurrentHashMap<>();
    }

    public List<Shop> getAllShops() {
        TypedQuery<Shop> query = entityManager.createQuery("SELECT s FROM Shop s", Shop.class);
        return query.getResultList();
    }

    public void addShop(String shopName, Shop shop) throws Exception {
        if(shops.containsKey(shopName))
            throwException("There is already shop with that name");
        Shop shopFromDB = PersistenceManager.getInstance().getEntityManager().find(Shop.class, shopName);
        if (shopFromDB != null) {
            shops.put(shopName, shopFromDB);
            throwException("There is already shop with that name");
        }
        shops.put(shopName, shop);
        PersistenceManager.getInstance().persistObj(shop);
    }

    public Shop getShop(String shopName) {
        if (shops.containsKey(shopName))
            return shops.get(shopName);
        Shop shop = PersistenceManager.getInstance().getEntityManager().find(Shop.class, shopName);
        if (shop == null)
            return null;
        shops.put(shopName, shop);
        return shop;
    }

	public List<Shop> getShops(List<String> shopsNames) throws Exception {
        List<Shop> shops = new LinkedList<>();
        for(String shopName : shopsNames){
            shops.add(getShop(shopName));
        }
        return shops;
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
}
