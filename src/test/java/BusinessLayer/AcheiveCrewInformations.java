package BusinessLayer;

import BusinessLayer.Enums.ManageKindEnum;
import FrontEnd.Model.MemberRoleInShopModel;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import java.util.Collection;

import static org.junit.jupiter.api.Assertions.assertEquals;

public class AcheiveCrewInformations {

    Market market;
    String[] usersName = {"Eldar", "Niv12", "Naor","Gabi","Idan","Emanuel"};
    String[] passwords = {"Aa123456"};
    String[] emails = {"eldar@gmail.com", "Niv12@gmail.com", "naor@gmail.com","Gabi@gmail.com","idan@gmail.com","emanuel@gmail.com"};
    String[] shopNames = {"shopEldar", "shopNiv12","shopNaor"};

    //TODO : ADD TEST FOR UNREGISTERD USER ?? loggeout users ..

    @BeforeEach
    void setUp() throws Exception {
        market = new Market();
        market.init("src/InitFiles/TestsConfig.jason");
        for (int i = 0; i < usersName.length; i++) {
            market.register(usersName[i], emails[i], passwords[0]);
            String guestName = market.startSession();
            market.login(guestName,usersName[i], passwords[0]);
        }
        market.createShop(usersName[0], shopNames[0]);
        market.addNewProduct(usersName[0],shopNames[0],"ColaK","Drinks","good drink",200);
        market.appointShopOwner("Eldar", "Niv12", shopNames[0]);
        market.appointShopManager("Eldar", "Naor", shopNames[0]);
        market.appointShopManager("Eldar","Gabi",shopNames[0]);

    }

    @AfterEach
    void tearDown() {
        market.resetAll();
    }

    @Test
    void rolesEquality() throws Exception {
        StringBuilder real = new StringBuilder();
        for (MemberRoleInShop role : market.getShopManagersAndPermissions("eldar", "shopEldar")) {
            real.append(role.getRoleInfo());
        }
        assertEquals(real.toString(), market.getRolesInformation("eldar", "shopEldar").toString());
    }

    @Test
    void readOnly_validate() throws Exception {
//        market.appointShopManager("Eldar", "Naor", shopNames[0]);
        market.changeManagerAccess("Eldar","Naor", shopNames[0],ManageKindEnum.READ_ONLY.getValue());
        Collection<MemberRoleInShop> wholeCrew = market.getShopManagersAndPermissions(usersName[0],shopNames[0]);
        for(MemberRoleInShop role : wholeCrew){
            if(role.getUserName().equals("Naor")){
                assertEquals(role.getManageKind().getValue(),ManageKindEnum.READ_ONLY.getValue());
               }
            }
        }

    @Test
    void ManageAccess_validate() throws Exception {
        market.changeManagerAccess("Eldar","Naor", "shopEldar",ManageKindEnum.MANAGE_READ_ACCESS.getValue());
        Collection<MemberRoleInShop> wholeCrew = market.getShopManagersAndPermissions(usersName[0],shopNames[0]);
        for(MemberRoleInShop role : wholeCrew){
            if(role.getUserName().equals("Naor")){
                assertEquals(role.getManageKind().getValue(),ManageKindEnum.MANAGE_READ_ACCESS.getValue());
            }
        }
    }

    @Test
    void FullAccess_validate() throws Exception {
        market.changeManagerAccess("Eldar","Naor", "shopEldar",ManageKindEnum.FULL_ACCESS.getValue());
        Collection<MemberRoleInShop> wholeCrew = market.getShopManagersAndPermissions(usersName[0],shopNames[0]);
        for(MemberRoleInShop role : wholeCrew){
            if(role.getUserName().equals("Naor")){
                assertEquals(role.getManageKind().getValue(),ManageKindEnum.FULL_ACCESS.getValue());
            }
        }
    }

    @Test
    void readOnly_success() throws Exception {
        market.changeManagerAccess("Eldar","Naor", "shopEldar",ManageKindEnum.READ_ONLY.getValue());
       assertEquals("ColaK", market.getProduct("Naor",shopNames[0],"CoLaK").getName());
    }
}

