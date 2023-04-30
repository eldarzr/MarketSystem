package FrontEnd.Model;

import BusinessLayer.Enums.ManageType;
import ServiceLayer.DataObjects.MemberRoleInShopDataObj;

import java.io.Serializable;

public class MemberRoleInShopModel implements Serializable {

    private ShopModel roleShop;
    private String grantor;
    private String roleUser;
    private ManageType type;
//    private ManagePermissions permissions;

    private MemberRoleInShopModel(ShopModel roleShop , String roleUser , String grantor, ManageType type) {
        this.grantor = grantor;
        this.type = type;
//        this.permissions = permissions;
        this.roleShop =  roleShop;
        this.roleUser = roleUser;
    }

    public MemberRoleInShopModel(MemberRoleInShopDataObj memberRoleInShop) {
        this.grantor = memberRoleInShop.getGrantor();
        this.type = memberRoleInShop.getType();
//        this.permissions = memberRoleInShop.getPermissions();
        this.roleShop =  new ShopModel(memberRoleInShop.getRoleShop());
        this.roleUser = memberRoleInShop.getRoleUser();
    }

    public ShopModel getRoleShop() {
        return roleShop;
    }

    public void setRoleShop(ShopModel roleShop) {
        this.roleShop = roleShop;
    }

    public String getGrantor() {
        return grantor;
    }

    public void setGrantor(String grantor) {
        this.grantor = grantor;
    }

    public String getRoleUser() {
        return roleUser;
    }

    public void setRoleUser(String roleUser) {
        this.roleUser = roleUser;
    }

    public ManageType getType() {
        return type;
    }

    public void setType(ManageType type) {
        this.type = type;
    }
}
