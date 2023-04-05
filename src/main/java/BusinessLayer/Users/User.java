package BusinessLayer.Users;

import BusinessLayer.Enums.UserType;
import BusinessLayer.MemberRoleInShop;
import BusinessLayer.Shops.Shop;

import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.ConcurrentLinkedQueue;

public class User {
    private UserType userType;
    private String name;
    private String email;
    private String password;
    private boolean twoFactorEnabled;
    private ConcurrentLinkedQueue<String> foundedShops;
    //map of shop name to role of this user in the shop
    private ConcurrentHashMap<String, MemberRoleInShop> roles;

    public User(String name, String email, String password) {
        this.name = name;
        this.email = email;
        this.password = password;
        this.foundedShops = new ConcurrentLinkedQueue<>();
        this.roles = new ConcurrentHashMap<>();
        userType = UserType.MEMBER;
    }

    public User() {
        userType = UserType.GUEST;
    }


    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public boolean isTwoFactorEnabled() {
        return twoFactorEnabled;
    }

    public UserType getUserType() {
        return userType;
    }

    public void setUserType(UserType userType) {
        this.userType = userType;
    }

    public void setTwoFactorEnabled(boolean twoFactorEnabled) {
        this.twoFactorEnabled = twoFactorEnabled;
    }

    public void addFoundedShop(String shopName) throws Exception {
        if(foundedShops.contains(shopName))
            throw new Exception(String.format("the user %s already have shop named %s", name, shopName));
        foundedShops.add(shopName);
    }

    public void addShopRole(String roleShop , MemberRoleInShop role) {
        roles.put(roleShop , role);
    }
}
