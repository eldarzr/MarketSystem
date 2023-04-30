package FrontEnd.views;

import FrontEnd.MarketService;
import FrontEnd.Model.ProductModel;
import FrontEnd.Model.UserModel;
import FrontEnd.SResponse;
import FrontEnd.SResponseT;
import com.vaadin.flow.component.Key;
import com.vaadin.flow.component.button.Button;
import com.vaadin.flow.component.combobox.ComboBox;
import com.vaadin.flow.component.dialog.Dialog;
import com.vaadin.flow.component.formlayout.FormLayout;
import com.vaadin.flow.component.grid.Grid;
import com.vaadin.flow.component.html.Div;
import com.vaadin.flow.component.html.Label;
import com.vaadin.flow.component.html.Span;
import com.vaadin.flow.component.notification.Notification;
import com.vaadin.flow.component.orderedlayout.HorizontalLayout;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;
import com.vaadin.flow.component.textfield.IntegerField;
import com.vaadin.flow.component.textfield.TextField;
import com.vaadin.flow.data.renderer.ComponentRenderer;
import com.vaadin.flow.router.Route;
import com.vaadin.flow.server.VaadinSession;

import java.util.List;

@Route("search")
public class SearchView extends BaseView {

	private TextField searchField;
	private Label filterField;
	private Button searchButton;
	private TextField minPriceField;
	private TextField maxPriceField;
	private TextField categoryField;
	private Grid<ProductModel> productGrid;

	public SearchView() {
		searchField = new TextField("Search");
		filterField = new Label("Filter");
		searchButton = new Button("Search", e -> search());
		searchButton.addClickShortcut(Key.ENTER);
		minPriceField = new TextField("Min Price");
		maxPriceField = new TextField("Max Price");
		categoryField = new TextField("Category");
		productGrid = new Grid<>(ProductModel.class);

		// Configure searchField and searchButton
		searchField.setWidth("30%");
		searchButton.setWidth("30%");

		// Configure minPriceField and maxPriceField
		minPriceField.setWidth("100%");
		maxPriceField.setWidth("100%");

		// Configure categoryComboBox
		categoryField.setWidth("100%");
		filterField.setWidth("100%");

		// Configure productGrid
		productGrid.setWidthFull();
		productGrid.setHeight("100%");


		productGrid.setColumns("name", "price", "category", "shopName");
		productGrid.addComponentColumn(product -> {
			// Create a Div for the description
			Div descriptionDiv = new Div();
			descriptionDiv.getStyle().set("white-space", "normal"); // Allow text to wrap
			descriptionDiv.getStyle().set("overflow", "auto"); // Add a scrollbar if necessary
			descriptionDiv.getStyle().set("max-height", "8em"); // Set the maximum height of the Div
			descriptionDiv.setText(product.getDescription());
			return descriptionDiv;
		}).setHeader("description").setWidth("20%");
		productGrid.addComponentColumn(product -> {
			// Add a quantity field and a button for each product
			TextField quantityField = new TextField("choose quantity");
			Button addToCartButton = new Button("Add to Cart");
			addToCartButton.addClickListener(e -> addToCart(product, Integer.parseInt(quantityField.getValue())));
			VerticalLayout layout = new VerticalLayout();
			layout.setSpacing(true);
			layout.setPadding(true);
			layout.add(quantityField, addToCartButton);
			layout.setAlignItems(Alignment.START);
			return layout;
		}).setWidth("20%");
		productGrid.setColumnReorderingAllowed(true);
		productGrid.getColumnByKey("name").setWidth("10%");
		productGrid.getColumnByKey("price").setWidth("10%");
		productGrid.getColumnByKey("category").setWidth("10%");
		productGrid.getColumnByKey("shopName").setWidth("10%");

		// Create filter layout
		VerticalLayout filterLayout = new VerticalLayout();
		filterLayout.setSpacing(false);
		filterLayout.setPadding(true);
		filterLayout.setWidth("10%");
		filterLayout.add(filterField, minPriceField, maxPriceField, categoryField);


		// Create content layout
		VerticalLayout contentLayout = new VerticalLayout();
		contentLayout.setSpacing(false);
		contentLayout.setPadding(true);
		contentLayout.setWidth("90%");
		contentLayout.setHeight("100%");
		contentLayout.add(searchField, searchButton, productGrid);
		contentLayout.expand(productGrid);

		// Add filter and content layouts to main layout
		HorizontalLayout horizontalLayout = new HorizontalLayout(filterLayout, contentLayout);
		horizontalLayout.setWidthFull();
		horizontalLayout.setHeightFull();
		add(horizontalLayout);
		setSpacing(false);
		setPadding(true);
		setSizeFull();
		expand(contentLayout);
	}

	private void addToCart(ProductModel productModel, int quantity) {
		SResponse res = marketService.addProductsToCart(
				getCurrentUser().getName(),
				productModel.getShopName(), productModel.getName(),quantity);
		Notification.show(res.isSuccess() ?
				String.format("%d pieces from the product %s has been added to cart", quantity, productModel.getName())
				: res.getMessage());
	}


	private void search() {
		// Implement product search logic here
		String category = categoryField.getValue().length() == 0 ? null : categoryField.getValue();
		String productName = searchField.getValue();
		int minPrice = minPriceField.getValue().length() == 0 ? -1 : Integer.parseInt(minPriceField.getValue());
		int maxPrice = maxPriceField.getValue().length() == 0 ? -1 : Integer.parseInt(maxPriceField.getValue());
		SResponseT<List<ProductModel>> res = marketService.extendedSearch(
				getCurrentUser().getName(), productName, minPrice, maxPrice, category);
		if (res.isSuccess())
			productGrid.setItems(res.getData());
		else
			Notification.show(res.getMessage());
	}

	@Override
	protected void updateAfterUserNameChange(UserModel userModel) { }
}
