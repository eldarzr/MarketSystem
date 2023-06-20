package FrontEnd.Views;

import BusinessLayer.Enums.ManageKindEnum;
import BusinessLayer.Enums.ManageType;
import FrontEnd.MarketService;
import FrontEnd.Model.ProductModel;
import FrontEnd.Model.ShopModel;
import FrontEnd.Model.UserModel;
import FrontEnd.SResponse;
import FrontEnd.SResponseT;
import com.vaadin.flow.component.Text;
import com.vaadin.flow.component.button.Button;
import com.vaadin.flow.component.formlayout.FormLayout;
import com.vaadin.flow.component.dialog.Dialog;
import com.vaadin.flow.component.grid.Grid;
import com.vaadin.flow.component.notification.Notification;
import com.vaadin.flow.component.orderedlayout.FlexComponent;
import com.vaadin.flow.component.orderedlayout.HorizontalLayout;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;
import com.vaadin.flow.component.textfield.IntegerField;
import com.vaadin.flow.component.textfield.NumberField;
import com.vaadin.flow.data.provider.ListDataProvider;
import com.vaadin.flow.router.BeforeEvent;
import com.vaadin.flow.router.HasUrlParameter;
import com.vaadin.flow.router.OptionalParameter;
import com.vaadin.flow.router.Route;
import com.vaadin.flow.component.textfield.TextField;

import java.awt.*;
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
	protected Button removeProductButton;
	protected Button addProductButton;
	protected Button addDiscountButton;
	protected Button purchasePoliciesButton;
	protected Button manageDiscount;
	protected Button bidsButton;

	public ShopProfileView() {
		//todo: pay attention, userprofile is the one that this screen is all about,
		// we can come to this page if the user himself called it, or if admin called it,
		// in such case we can only *show* info and not set it.
	}

	@Override
	protected void updateAfterUserNameChange(UserModel userModel) {
			//updateButtons();
	}

	@Override
	public void setParameter(BeforeEvent event, @OptionalParameter String parameter) {

		if (checkIfFirstScreen(event)) return;
		if (parameter != null && !parameter.isEmpty()) {
			SResponseT<ShopModel> res = marketService.getShop(parameter);
			if (res.isSuccess()) {
				shopProfile = res.getData();
				add(new Text(shopProfile.getName()));
				showShopProfileScreen();
			}
			else{ Notification.show(res.getMessage());
//				getUI().ifPresent(ui -> ui.navigate(""));

			}
		}
	}

	protected void navigateToManageRoles(){
		getUI().ifPresent(ui ->
				ui.navigate("manage_roles/" + shopProfile.getName()));
	}

	protected void showShopProfileScreen() {
		manageRolesButton = new Button("Manage Shop Roles");
		manageRolesButton.getStyle().set("background-image", "linear-gradient(to right,#ffcc33 , #ffb347)");
		manageRolesButton.getStyle().set("color", "white");
		manageRolesButton.addClickListener(e -> navigateToManageRoles());
		if(shopProfile.getRoles().get(getCurrentUser().getName()).getType().equals(ManageType.MANAGER)) {
			disableButton(manageRolesButton);
			manageRolesButton.getStyle().set("opacity", "0");
		}


		manageDiscount = new Button("Manage Discounts");
		manageDiscount.getStyle().set("background-image", "linear-gradient(to right,#ffcc33 , #ffb347)");
		manageDiscount.getStyle().set("color", "white");
		manageDiscount.addClickListener(e ->
				manageDiscount.getUI().ifPresent(ui ->
						ui.navigate("shopDiscounts/"+shopProfile.getName()))
		);

		purchasePoliciesButton = new Button("Purchase Policies");
		purchasePoliciesButton.getStyle().set("background-image", "linear-gradient(to right,#ffcc33 , #ffb347)");
		purchasePoliciesButton.getStyle().set("color", "white");
		purchasePoliciesButton.addClickListener(e ->
				purchasePoliciesButton.getUI().ifPresent(ui ->
						ui.navigate("purchase_policy/"+shopProfile.getName()))
		);
		bidsButton = new Button("Manage Bids");
		bidsButton.getStyle().set("background-image", "linear-gradient(to right,#ffcc33 , #ffb347)");
		bidsButton.getStyle().set("color", "white");
		bidsButton.addClickListener(e ->
				bidsButton.getUI().ifPresent(ui ->
						ui.navigate("bids/"+shopProfile.getName()))
		);


		TextField productName = new TextField("Product Name");
		TextField productCategory = new TextField("Product Category");
		TextField productDescription = new TextField("Product Description");
		NumberField productPrice = new NumberField("Product Price");
		IntegerField productQuantity = new IntegerField("Product Quantity");

		editProductButton = new Button("Edit Product");
		editProductButton.getStyle().set("color", "white");
		disableButton(editProductButton);
		editProductButton.setVisible(false);
		editProductButton.addClickListener(event -> {
			if(productGrid.getSelectedItems().size() != 1){
				Notification.show("please select exactly one product");
				return;
			}
			ProductModel currentProduct = productGrid.getSelectedItems().stream().toList().get(0);
			Dialog dialog = new Dialog();
			productName.setEnabled(false);
			dialog.setCloseOnEsc(true);
			dialog.setCloseOnOutsideClick(true);

			Button confirm = new Button("Confirm");
			enableButton(confirm);

			Button cancel = new Button("Cancel");
			enableButton(cancel);

			HorizontalLayout buttonLayout = new HorizontalLayout(confirm, cancel);
			buttonLayout.setDefaultVerticalComponentAlignment(FlexComponent.Alignment.END);
			buttonLayout.setWidthFull();

			productName.setValue(currentProduct.getName());
			productCategory.setValue(currentProduct.getCategory());
			productDescription.setValue(currentProduct.getDescription());
			productPrice.setValue(currentProduct.getPrice());
			productQuantity.setValue(currentProduct.getQuantity());

			FormLayout formLayoutEditProduct = new FormLayout();
			formLayoutEditProduct.add(productName,productCategory,productDescription,productPrice,productCategory,productQuantity,buttonLayout);
			dialog.add(formLayoutEditProduct);

			confirm.addClickListener(confirmEvent -> {
				updateProduct(currentProduct,productName.getValue(),productCategory.getValue(),productDescription.getValue()
						,productPrice.getValue(),productQuantity.getValue());

				refreshProducts();
				dialog.close();
			});

			cancel.addClickListener(cancelEvent -> dialog.close());
			dialog.open();
		});

		addProductButton = new Button("Add Product");
		addProductButton.getStyle().set("color", "white");
		enableButton(addProductButton);
		addProductButton.addClickListener(addEvent -> {
			Dialog dialog = new Dialog();
			dialog.setCloseOnEsc(true);
			dialog.setCloseOnOutsideClick(true);
			productName.setEnabled(true);
			Button confirm = new Button("Confirm");
			enableButton(confirm);

			Button cancel = new Button("Cancel");
			enableButton(cancel);

			HorizontalLayout buttonLayout = new HorizontalLayout(confirm, cancel);
			buttonLayout.setDefaultVerticalComponentAlignment(FlexComponent.Alignment.END);
			buttonLayout.setWidthFull();

			productName.clear();
			productCategory.clear();
			productDescription.clear();
			productPrice.clear();
			productQuantity.clear();

			productName.setRequired(true);
			productCategory.setRequired(true);
			productDescription.setRequired(false);
			productPrice.setRequired(true);
			productQuantity.setRequired(true);

			FormLayout formLayoutEditProduct = new FormLayout();
			formLayoutEditProduct.add(productName,productCategory,productDescription,productPrice,productCategory,productQuantity,buttonLayout);
			dialog.add(formLayoutEditProduct);

			confirm.addClickListener(confirmEvent -> {
				boolean isValid = true;
				if(productName.getValue() == null || productName.getValue().isEmpty()){
					isValid = false;
					productName.setInvalid(true);
					productName.setErrorMessage("please insert product name");
				}
				if(productCategory.getValue() == null || productCategory.getValue().length() < 3){
					isValid = false;
					productCategory.setInvalid(true);
					productCategory.setErrorMessage("please category must be longer than 3");
				}
				if(productPrice.getValue() == null){
					isValid = false;
					productPrice.setInvalid(true);
					productPrice.setErrorMessage("please insert product price");
				}
				if(productQuantity.getValue() == null || productQuantity.getValue() < 0){
					isValid = false;
					productQuantity.setInvalid(true);
					productQuantity.setErrorMessage("please insert product non negative quantity");
				}
				if(isValid){
					String desc = productDescription.getValue() == null ? "" : productDescription.getValue();
					addProduct(productName.getValue(),productCategory.getValue(),desc
							,productPrice.getValue(),productQuantity.getValue());

					refreshProducts();
					dialog.close();
				}
			});

			cancel.addClickListener(cancelEvent -> dialog.close());

			dialog.open();
		});

		removeProductButton = new Button("Remove Product");
		removeProductButton.getStyle().set("color", "white");
		enableButton(removeProductButton);
		removeProductButton.setVisible(false);
		removeProductButton.addClickListener(addEvent -> {
			List<ProductModel> productModels = productGrid.getSelectedItems().stream().toList();
			if(productModels.size() != 1){
				Notification.show("Please select exactly one product");
				return;
			}
			ProductModel currentProduct = productModels.get(0);
			Dialog dialog = new Dialog();
			dialog.setHeaderTitle(String.format("are you sure you want to remove %s",currentProduct.getName()));
			dialog.setCloseOnEsc(true);
			dialog.setCloseOnOutsideClick(true);

			Button confirm = new Button("Confirm");
			enableButton(confirm);

			Button cancel = new Button("Cancel");
			enableButton(cancel);

			HorizontalLayout buttonLayout = new HorizontalLayout(confirm, cancel);
			buttonLayout.setDefaultVerticalComponentAlignment(FlexComponent.Alignment.END);
			buttonLayout.setWidthFull();

			FormLayout formLayoutEditProduct = new FormLayout();
			formLayoutEditProduct.add(buttonLayout);
			dialog.add(formLayoutEditProduct);

			confirm.addClickListener(confirmEvent -> {
				SResponse res = marketService.removeProduct(getCurrentUser().getName(),shopProfile.getName(),currentProduct.getName());
				if(!res.isSuccess())
					Notification.show(res.getMessage());
				else Notification.show("Product removed successfully");
				refreshProducts();
				dialog.close();
			});


			cancel.addClickListener(cancelEvent -> dialog.close());

			dialog.open();
		});
		// Disable editing product buttons for managers who have read only permissions
		//Notification.show("Permissions : "+shopProfile.getRoles().get(getCurrentUser().getName()).getPermissions().getManageAccess());
		updateButtons();


		//TODO: implement click listener that navigate to edit screen for selected products.
		// for reference, take a look at AdminView.class

		showProducts();

		productGrid.addSelectionListener(e -> {
			editProductButton.setVisible(productGrid.getSelectedItems().size() == 1);
			removeProductButton.setVisible(productGrid.getSelectedItems().size() == 1);
		});

		HorizontalLayout horizontalLayout = new HorizontalLayout(manageRolesButton, editProductButton,addProductButton,removeProductButton,manageDiscount,purchasePoliciesButton,bidsButton);

		add(horizontalLayout);


	}

	private void updateButtons() {
		if(shopProfile == null)return;
		if(shopProfile.getRoles().get(getCurrentUser().getName()).getType().equals(ManageType.MANAGER) && shopProfile.getRoles().get(getCurrentUser().getName()).getPermissions().getManageAccess() == ManageKindEnum.READ_ONLY) {
			hideButton(editProductButton);
			hideButton(manageDiscount);
			hideButton(addProductButton);
			hideButton(removeProductButton);
		}
		else{
			enableButton(editProductButton);
			enableButton(manageDiscount);
			enableButton(addProductButton);
			enableButton(removeProductButton);
		}
	}

	private void hideButton(Button editProductButton) {
		editProductButton.getStyle().set("opacity", "0");

	}

	private void addProduct(String productName, String productCategory, String productDescription, Double productPrice, Integer productQuantity) {
		SResponse res = marketService.addProduct(getCurrentUser().getName(),shopProfile.getName(),productName,productCategory,productDescription,productPrice,productQuantity);
		if(!res.isSuccess())
			Notification.show(res.getMessage());
		else Notification.show("Added Product successfully");
	}

	private void updateProduct(ProductModel currentProduct, String productName, String productCategory, String productDescription, Double productPrice, Integer productQuantity) {
		if(!productCategory.equals(currentProduct.getCategory())){
			SResponse res = marketService.updateProductCategory(getCurrentUser().getName(), shopProfile.getName(),productName,productCategory);
			if(!res.isSuccess())
				Notification.show(res.getMessage());
			else Notification.show("Updated category successfully");
		}
		if(!(productDescription.equals(currentProduct.getDescription()))){
			SResponse res = marketService.updateProductDesc(getCurrentUser().getName(), shopProfile.getName(),currentProduct.getName(),productDescription);
			if(!res.isSuccess())
				Notification.show(res.getMessage());
			else Notification.show("Updated description successfully");
		}
		if(productPrice != null && productPrice != currentProduct.getPrice()){
			SResponse res = marketService.updateProductPrice(getCurrentUser().getName(), shopProfile.getName(),currentProduct.getName(),productPrice);
			if(!res.isSuccess())
				Notification.show(res.getMessage());
			else Notification.show("Updated price successfully");
		}
		if(productQuantity != null && productQuantity != currentProduct.getQuantity()){
			SResponse res = marketService.updateProductQuantity(getCurrentUser().getName(), shopProfile.getName(),currentProduct.getName(),productQuantity);
			if(!res.isSuccess())
				Notification.show(res.getMessage());
			else Notification.show("Updated Quantity successfully");
		}
	}

	private void refreshProducts(){
		SResponseT<ShopModel> shopRes = marketService.getShop(shopProfile.getName());
		if(!shopRes.isSuccess()){
			Notification.show(shopRes.getMessage());
			getUI().ifPresent(ui -> ui.navigate(""));
		}
		products = shopRes.getData().getProducts().values().stream().toList();
		productGrid.setItems(products);
	}

	protected void showProducts() {
		SResponseT<ShopModel> shopRes = marketService.getShop(shopProfile.getName());
		if(!shopRes.isSuccess()){
			Notification.show(shopRes.getMessage());
			getUI().ifPresent(ui -> ui.navigate(""));
		}


		products = shopRes.getData().getProducts().values().stream().toList();

		productGrid = new Grid<>(ProductModel.class);
		productGrid.setItems(products);
		productGrid.setSelectionMode(Grid.SelectionMode.MULTI);


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
