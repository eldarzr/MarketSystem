package BusinessLayer;

import BusinessLayer.Enums.ManagePermissionsEnum;
import BusinessLayer.Enums.ManageType;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collection;
import java.util.List;
import java.util.concurrent.ConcurrentHashMap;

import static org.junit.jupiter.api.Assertions.*;

class MarketManagementPermissionsTests {
    Market market;
    String[] usersName = {"eldar", "niv12","naor","gabi","Danny"};
    String[] passwords = {"Aa123456", "Aa123456","Aa654321","A32197823k","Aa123456"};
    String[] emails = {"eldar@gmail.com", "niv@gmail.com","naor@gmail.com","gabi@gmail.com","gabizon@gmail.com"};
    String[] shopNames = {"shopEldar", "shopNiv","shopNaor","shopGabi"};

    //TODO : ADD TEST FOR UNREGISTERD USER ?? loggeout users ..

    @BeforeEach
    void setUp() throws Exception {
        market = new Market();
        market.init();
        for(int i = 0; i < usersName.length-1; i++) {
            market.register(usersName[i], emails[i], passwords[i]);
            market.login(usersName[i], passwords[i]);
            market.createShop(usersName[i], shopNames[i]);
        }
        market.register(usersName[4], emails[4], passwords[4]);
        market.appointShopOwner("eldar","niv12","shopEldar");
        market.appointShopManager("eldar","naor","shopEldar");
    }

    @AfterEach
    void tearDown() {
        market.resetAll();
    }

    @Test
    void getPermissions_success() throws Exception {
//        List<Integer> newPermissions = Arrays.asList(0, 2, 4);
//        market.changeManagerPermissions("eldar","naor","shopEldar",newPermissions);
//      market.getShopManagersAndPermissions("eldar", "shopEldar").stream().forEach(naorRole -> System.out.println(naorRole.getPermissions().describePermissions()));
        StringBuilder real = new StringBuilder();
        for ( MemberRoleInShop role : market.getShopManagersAndPermissions("eldar", "shopEldar")){
            real.append(role.getRoleInfo());
        }
        assertEquals(real.toString(),market.getRolesInformation("eldar","shopEldar").toString());
    //        MemberRoleInShop naorRole = (MemberRoleInShop) roles.stream().toArray()[0];
//        System.out.println(naorRole.getPermissions().describePermissions());
    }
    @Test
    void validateOwnersPermissionsAreCorrect() throws Exception {
        for (MemberRoleInShop role : market.getShopManagersAndPermissions("eldar","shopEldar")) {
            if(role.getType() == ManageType.OWNER){
                for (ManagePermissionsEnum permission : ManagePermissionsEnum.values()) {
                    assertTrue(role.getPermissions().validatePermission(permission));
                }
            }
        }

    }
    @Test
    void addPermission_success() throws Exception {
        List<Integer> newPermissions = Arrays.asList(0, 2, 4);
      ManagePermissions mp = market.changeManagerPermissions("eldar","naor","shopEldar",newPermissions).getPermissions();
        int amountOfPerms = newPermissions.size();
     for(Integer permType : mp.getActivatedPermissions()){
         assertTrue(newPermissions.contains(permType));
         amountOfPerms--;
     }
     assertTrue(amountOfPerms == 0);
    }

    @Test
    void addPermissionThenRemoveSome_success() throws Exception {
        List<Integer> newPermissions = Arrays.asList(0, 2, 4);
        market.changeManagerPermissions("eldar", "naor", "shopEldar", newPermissions).getPermissions();
        List<Integer> newPermissions2 = Arrays.asList(0, 9);
        ManagePermissions mp = market.changeManagerPermissions("eldar", "naor", "shopEldar", newPermissions2).getPermissions();
        List<Integer> activatedPerms = mp.getActivatedPermissions();
        assertTrue(activatedPerms.contains(0));
        assertTrue(activatedPerms.contains(9));
        int amountOfPermissions = ManagePermissions.getFullAccessPermissions().getActivatedPermissions().size();
        for (int i = 0;i<amountOfPermissions;i++){
            if (i == 0 || i == 9)
                continue;
            assertFalse(activatedPerms.contains(i));
        }

    }

    @Test
    void changePermissionThenAddMore_success() throws Exception {
        List<Integer> newPermissions = Arrays.asList(0, 2, 4);
        ManagePermissions mp = market.changeManagerPermissions("eldar", "naor", "shopEldar", newPermissions).getPermissions();
        List<Integer> activatedPerms = mp.getActivatedPermissions();
        activatedPerms.add(1);
        activatedPerms.add(3);
        ManagePermissions mp2 = market.changeManagerPermissions("eldar", "naor", "shopEldar", activatedPerms).getPermissions();
        List<Integer> activatedPerms2 = mp2.getActivatedPermissions();
        assertTrue(activatedPerms2.contains(0));
        assertTrue(activatedPerms2.contains(1));
        assertTrue(activatedPerms2.contains(2));
        assertTrue(activatedPerms2.contains(3));
        assertTrue(activatedPerms2.contains(4));
    }


    @Test
    void setManageOptions_Fail_OutOfBound() throws Exception {
        List<Integer> newPermissions = Arrays.asList(-1, 9);
        assertThrows(Exception.class, () -> market.changeManagerPermissions("eldar","naor","shopEldar",newPermissions).getPermissions());
        List<Integer> newPermissions2 = Arrays.asList(0, ManagePermissions.getFullAccessPermissions().getActivatedPermissions().size() + 1);
        assertThrows(Exception.class, () -> market.changeManagerPermissions("eldar","naor","shopEldar",newPermissions2).getPermissions());
    }

    @Test
    void setManageOptions_Fail_notTheGrantor() throws Exception {
        List<Integer> newPermissions = Arrays.asList(0,1, 2);
        Exception exception = assertThrows(Exception.class, () -> market.changeManagerPermissions("niv12","naor","shopEldar",newPermissions).getPermissions());
//        System.out.println(exception.getMessage());

    }

    @Test
    void setManageOptions_Fail_dosentHaveRole() throws Exception {
        List<Integer> newPermissions = Arrays.asList(0,1, 2);
       Exception exception = assertThrows(Exception.class, () -> market.changeManagerPermissions("eldar","gabi","shopEldar",newPermissions).getPermissions());
       // System.out.println(exception.getMessage());
    }

    @Test
    void setManageOptions_Fail_dosentRegistered() throws Exception {
        List<Integer> newPermissions = Arrays.asList(0,1, 2);
        Exception exception = assertThrows(Exception.class, () -> market.changeManagerPermissions("eldar","Danny","shopEldar",newPermissions).getPermissions());
        // System.out.println(exception.getMessage());
    }

    @Test
    void setManageOptions_Fail_managerSet() throws Exception {
        List<Integer> newPermissions = Arrays.asList(0,1, 2);
        Exception exception = assertThrows(Exception.class, () -> market.changeManagerPermissions("naor","niv12","shopEldar",newPermissions).getPermissions());
        System.out.println(exception.getMessage());
    }

// Case : zero permissions sent.



}