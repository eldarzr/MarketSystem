package FrontEnd.Model;

import BusinessLayer.Enums.ManageKindEnum;
import BusinessLayer.Enums.ManageType;
import ServiceLayer.DataObjects.MemberRoleInShopDataObj;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

public class MemberRoleInShopModel implements Serializable {

    private ShopModel roleShop;
    private String grantor;
    private String roleUser;
    private ManageType type;

    private ManageKindEnum manageKind;
    private List<Integer> activatedPermissions = new ArrayList<>();

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
        this.activatedPermissions = memberRoleInShop.getPermissions().getActivatedPermissions();
        this.manageKind = memberRoleInShop.getManageKind();
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

    public ManageKindEnum getManageKind() {
        return manageKind;
    }

    public List<Integer> getActivatedPermissions() {
        return activatedPermissions;
    }
}
