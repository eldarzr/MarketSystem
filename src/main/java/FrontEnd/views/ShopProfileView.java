package FrontEnd.Views;

import FrontEnd.Model.ProductModel;
import FrontEnd.Model.ShopModel;
import FrontEnd.Model.UserModel;
import FrontEnd.SResponseT;
import com.vaadin.flow.component.Text;
import com.vaadin.flow.component.button.Button;
import com.vaadin.flow.component.dependency.CssImport;
import com.vaadin.flow.component.grid.Grid;
import com.vaadin.flow.component.notification.Notification;
import com.vaadin.flow.component.orderedlayout.HorizontalLayout;
import com.vaadin.flow.data.provider.ListDataProvider;
import com.vaadin.flow.router.BeforeEvent;
import com.vaadin.flow.router.HasUrlParameter;
import com.vaadin.flow.router.OptionalParameter;
import com.vaadin.flow.router.Route;

import java.util.List;
import java.util.Optional;

@Route(value = "shop")
public class ShopProfileView extends BaseView implements HasUrlParameter<String> {

	protected ShopModel shopProfile;
	protected Button manageRolesButton;
	protected Grid<ProductModel> productGrid;
	protected List<ProductModel> products;
	protected ListDataProvider<ProductModel> productDataProvider;
	protected Button editProductButton;

	public ShopProfileView() {
		//todo: pay attention, userprofile is the one that this screen is all about,
		// we can come to this page if the user himself called it, or if admin called it,
		// in such case we can only *show* info and not set it.
	}

	@Override
	protected void updateAfterUserNameChange(UserModel userModel) {

	}

	@Override
	public void setParameter(BeforeEvent event, @OptionalParameter String parameter) {
		Notification.show("aaa");
		if (parameter != null && !parameter.isEmpty()) {
			SResponseT<ShopModel> res = marketService.getShop(parameter);
			if (res.isSuccess()) {
				shopProfile = res.getData();
				add(new Text(shopProfile.getName()));
				showShopProfileScreen();
			}
			else Notification.show(res.getMessage());
		}
	}

	protected void showShopProfileScreen() {
		manageRolesButton = new Button("Manage Shop Roles");
		manageRolesButton.getStyle().set("background-image", "linear-gradient(to right,#ffcc33 , #ffb347)");
		manageRolesButton.getStyle().set("color", "white");
		manageRolesButton.addClickListener(e ->
				manageRolesButton.getUI().ifPresent(ui ->
						ui.navigate("manage_roles"))
		);


		editProductButton = new Button("Edit Product");
		editProductButton.getStyle().set("color", "white");
		disableButton(editProductButton);

		//TODO: implement click listener that navigate to edit screen for selected products.
		// for reference, take a look at AdminView.class

		showProducts();

		HorizontalLayout horizontalLayout = new HorizontalLayout(manageRolesButton, editProductButton);

		add(horizontalLayout);


	}

	protected void showProducts() {
		SResponseT<ShopModel> shopRes = marketService.getShop(shopProfile.getName());
		if(!shopRes.isSuccess()){
			Notification.show(shopRes.getMessage());
			getUI().ifPresent(ui -> ui.navigate(""));
		}



		products = shopRes.getData().getProducts().values().stream().toList();
//		productDataProvider = new ListDataProvider<>(products);

		productGrid = new Grid<>(ProductModel.class);
		productGrid.setItems(products);


//		productGrid = new Grid<>();
//		productGrid.addColumn(ProductModel::getName).setHeader("Product Name");
//		productGrid.addColumn(ProductModel::getDescription).setHeader("Description");
//		productGrid.addColumn(ProductModel::getCategory).setHeader("Category");
//		productGrid.addColumn(ProductModel::getPrice).setHeader("Price");
//		productGrid.addColumn(ProductModel::getQuantity).setHeader("Quantity");
//
//		productGrid.setDataProvider(productDataProvider);

		productGrid.addSelectionListener(event -> {
			Optional<ProductModel> selectedUser = event.getFirstSelectedItem();
			if (selectedUser.isPresent()) {
				enableButton(editProductButton);
			}
			else{
				disableButton(editProductButton);
			}
		});


		add(productGrid);


	}




}
