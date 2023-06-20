# Market System

Hello!

Welcome to our market system.

This system was developed as part of the course "Workshop on Implementing a Software Project" at [Ben Gurion University](https://www.bgu.ac.il/). It serves as a comprehensive platform for managing various aspects of a market, offering features such as inventory management, order processing, and customer interaction.

The system's code was written in [Java](https://www.java.com/en/), utilizing [Vaadin](https://vaadin.com/) as the front-end web app framework and [Hibernate](https://hibernate.org/) as the back-end ORM framework. Vaadin provides a user-friendly interface and seamless integration with Java, allowing for efficient development of a responsive and interactive web application. Hibernate simplifies database interactions by mapping Java objects to database tables, enabling seamless data retrieval and manipulation.

For the database, we chose [MySQL](https://www.mysql.com/) server as our preferred option. MySQL is a reliable and widely used open-source relational database management system, known for its performance, scalability, and robustness. It provides a solid foundation for storing and retrieving data efficiently.

## Team Members

Let's introduce our dedicated team members who contributed to the development of this system:

- [Eldar Zrihen](https://github.com/eldarzr/)(which should be fired): Eldar has brought his extensive knowledge of back-end development and database management to ensure the smooth functioning of our system's server-side operations.
- [Niv Uzan](https://github.com/nivuza/): Niv has a strong background in software development and has played a crucial role in designing and implementing the system's core functionalities.
- [Naor Cohen](https://github.com/NaorCohenQ/): Naor's expertise in front-end development and user experience design has helped create an intuitive and visually appealing interface for our market system.
- [Gabriel (Gabi) Penrovski](https://github.com/gabiP1999/): Gabi's dedication and attention to detail have greatly contributed to the testing and quality assurance processes of our market system, ensuring a reliable and bug-free user experience.
- [Idan Yankelev](https://github.com/idanyan/): Idan has been an integral part of the team and has contributed significantly to the project.

Together, we have strived to create a robust and user-friendly market system that fulfills the requirements of the course while providing practical value to users.

## Running the Market System

To run our market system, please follow these steps:

1. Make sure you have the necessary prerequisites installed, including [Java](https://www.java.com/en/), [Tomcat](https://tomcat.apache.org/), and [MySQL](https://www.mysql.com/).
2. Clone our project repository from [GitHub](https://github.com/eldarzr/MarketSystem/).
3. Configure the system by setting up the required configuration file. It is mandatory to specify the database connection, external systems, and system admin credentials. You can find the configuration file format and an example in the section below.
4. Deploy the project to your Tomcat server.
5. Start the Tomcat server and access the market system through the provided URL.

## Setting Configuration File

<ins>Setting a configuration file for our system is mandatory</ins> as it configures the system to establish connections to the database, external systems, and define the system admin user.

The format for a valid configuration file in Jason format is as follows:

```
{
    "database": {
        "path": "url-value",
        "table_scheme": "scheme-name-value",
        "admin": "username-value",
        "password": "password-value"
    },
    "externalSystems": {
        "webAddress": "url-value"
    },
    "systemAdmin": {
        "username": "username-value",
        "email": "email-value",
        "password": "password

-value"
    }
}
```

Please ensure that you include all the necessary fields in the configuration file, as any missing fields may cause failures during the initialization process.

Here is an example for a valid configuration file:
```
{
    "database":
    {
        "path" : "jdbc:mysql://localhost:3306/market",
        "table_scheme": "market",
        "admin" : "root",
        "password" : "root"
    },

    "externalSystems":
    {
        "webAddress": "https://php-server-try.000webhostapp.com"
    },

    "systemAdmin":
    {
        "username" : "admin",
        "email" : "admin@gmail.com",
        "password" : "Aa123456"
    }
}
```

Once you have generated the requested configuration file, you can configure our system by adding the argument `-DconfigFilePath="path/to/configFile"` to the VM options of Tomcat. This will specify the path to your configuration file and allow the system to read and utilize the provided configurations.

## Setting State Loading File

<ins>Setting a state loading file for our system is optional</ins>, It allows you to specify a list of commands to move the system into a certain state. 

If a state loading file is not provided, the system will load with the current data in the database.

The format for a valid state loading file in text format is as follows:

```
API-command1(args);
API-command2(args);
API-command3(args);
...
```

You need to add commands only from the provided API in the section below. 

<ins>Using any other commands may lead to failure in the loading process and result in the system initialization being unsuccessful</ins>.

Here is an example of a valid state loading file:

```
register(user1, u1@gmail.com, Aa123456);
register(user2, u2@gmail.com, Aa123456);
register(user3, u3@gmail.com, Aa123456);
login(user1, Aa123456);
createShop(user1, shop1);
appointShopOwner(user1, user2, shop1);
login(user2, Aa123456);
appointShopOwner(user2, user3, shop1);
removeShopOwner(user1, user2, shop1);
```

Once you have generated the requested state loading file, you can configure our system by adding the argument `-DstateFilePath="path/to/stateFile"` to the VM options of Tomcat. This will specify the path to your state loading file and allow the system to read and move into the required state.

In case you want to load a state to a pre-used database, we have added an additional argument called "resetAll". If you provide the value `-DresetAll="True"`, it will reset the database before the state loading process. This step is necessary to prevent loading the state after it has already been loaded, which would cause the system to fail.

If the state hasn't been loaded before, you can ignore this argument and proceed without adding it.

By adding this argument to the VM options of Tomcat, the system will reset the database before loading the state, ensuring a clean and accurate state transition.


## API
In this section we will provide detailed explantions on the possible commands you can use for setting a state for the system.

### User API

#### register

- Signature: ```register(String userName, String email, String password);```
- Description: Registers a new user with the provided username, email, and password. the username should contain at least 4 characters and at most 32 characters, it should start with a letter,  should contain only non-alphanumeric characters and shouldn't be taken by another user. the email should be valid according to the [RFC 822 standard](https://datatracker.ietf.org/doc/html/rfc822/). The password should contain at least 8 characters and should contain at least one uppercase letter, one lowercase letter and one digit.
- Possible Failure Scenarios:
    - Invalid username: 
        - If the username is already taken by another user, registration will fail. 
        - If the username contains non-alphanumeric characters, registration will fail.
        - If the username contains less than 4 characters or more than 32 characters, registration will fail.
        - If the username doesn't start with a letter, registration will fail.
    - Invalid email:
       - If the email is not in a valid email format, registration will fail.
    - Weak password:
       - If the password contains less than 8 characters, registration will fail.
       - If the password doesn't contain at least one uppercase letter, registration will fail.
       - If the password doesn't contain at least one lowercase letter, registration will fail.
       - If the password doesn't contain at least one digit, registration will fail.
    - Server error:
       - If there is a server error or database connectivity issue, registration will fail.
- Example: ```register(JohnDoe, johndoe@example.com, Aa123456);```

#### login

- Signature: ```login(String userName, String password);```
- Description: Logs in the user with the given username and password. The username should be of a registered user. The password should match the password the user registered with.
- Possible Failure Scenarios:
    - Invalid username: 
        - If the username doesn't match any user, registration will fail.
    - Weak password:
       - If the password doesn't match the password the user registered with, login will fail.
    - Server error:
       - If there is a server error or database connectivity issue, login will fail.
- Example: ```login(JohnDoe, Aa123456);```

#### logout

- Signature: ```logout(String userName);```
- Description: Logs out the currently logged-in user. The username should be of a logged-in user.
- Possible Failure Scenarios:
    - Invalid username: 
        - If the username doesn't match any logged-in user, logout will fail.
    - Server error:
       - If there is a server error or database connectivity issue, logout will fail.
- Example: ```logout(JohnDoe);```
- 
#### createShop

- Signature: ```createShop(String userName, String shopName);```
- Description: Creates a new shop with the specified owner and shop name, set's the specified user as shop's owner. The username should be of a logged-in user. The shop name shouldn't be taken by another shop.
- Possible Failure Scenarios:
    - Invalid username: 
        - If the username doesn't match any logged-in user, createShop will fail.
    - Invalid shopName: 
        - If the shop name taken by another shop, createShop will fail.
    - Server error:
       - If there is a server error or database connectivity issue, createShop will fail.
- Example: ```createShop(JohnDoe, MyShop);```

#### addProductsToCart

- Signature: ```addProductsToCart(String userName, String shopName, String productName, int quantity);```
- Description: Adds products to the user's cart in the specified shop. The username should be of a logged-in user. The shop name should be of an existing open shop. The product name should be of an existing product in the specified shop. The quantity shouldn't be negative and shouldn't be more than the quantity in shop's stock.
- Possible Failure Scenarios:
    - Invalid username: 
        - If the username doesn't match any logged-in user, addProductsToCart will fail.
    - Invalid shopName: 
        - If the shop name doesn't match any existing open shop, addProductsToCart will fail.
    - Invalid productName: 
        - If the product name doesn't match any existing product in shop, addProductsToCart will fail.
    - Invalid quantity: 
        - If the quantity is negative, addProductsToCart will fail.
        - If the quantity is more than product's quantity in shop, addProductsToCart will fail.
    - Server error:
       - If there is a server error or database connectivity issue, addProductsToCart will fail.
- Example: ```addProductsToCart(JohnDoe, MyShop, Phone, 2);```

#### removeProductFromCart

- Signature: ```removeProductFromCart(String userName, String shopName, String productName);```
- Description: Removes a product from the user's cart in the specified shop. The username should be of a logged-in user. The shop name should be of an existing shop in user's cart. The product name should be of an existing product in shop in user's cart.
- Possible Failure Scenarios:
    - Invalid username: 
        - If the username doesn't match any logged-in user, removeProductFromCart will fail.
    - Invalid shopName: 
        - If the shop name doesn't match any existing shop in user's cart, removeProductFromCart will fail.
    - Invalid productName: 
        - If the product name doesn't match any existing product in shop in user's cart, removeProductFromCart will fail.
    - Server error:
       - If there is a server error or database connectivity issue, removeProductFromCart will fail.
- Example: ```removeProductFromCart(JohnDoe, MyShop, Phone);```

#### updateCartProductQuantity

- Signature: ```updateCartProductQuantity(String userName, String shopName, String productName, int newQuantity);```
- Description: Updates the quantity of a product in the user's cart in the specified shop. The username should be of a logged-in user. The shop name should be of an existing shop in user's cart. The product name should be of an existing product in shop in user's cart. The quantity shouldn't be negative and shouldn't be more than the quantity in shop's stock.
- Possible Failure Scenarios:
    - Invalid username: 
        - If the username doesn't match any logged-in user, updateCartProductQuantity will fail.
    - Invalid shopName: 
        - If the shop name doesn't match any existing shop in user's cart, updateCartProductQuantity will fail.
    - Invalid productName: 
        - If the product name doesn't match any existing product in shop in user's cart, updateCartProductQuantity will fail.
    - Invalid quantity: 
        - If the quantity is negative, updateCartProductQuantity will fail.
        - If the quantity is more than product's quantity in shop, updateCartProductQuantity will fail.
    - Server error:
       - If there is a server error or database connectivity issue, updateCartProductQuantity will fail.
- Example: ```updateCartProductQuantity(JohnDoe, MyShop, Phone, 3);```

#### createBidOffer

- Signature: ```createBidOffer(String userName, String productName, String shopName, double bidPrice);```
- Description: Creates a new bid offer on the specified product in the specified shop. The username should be of a logged-in user. The shop name should be of an existing open shop. The product name should be of an existing product in the specified shop. The bidding price shouldn't be negative and shouldn't be beyond the original price.
- Possible Failure Scenarios:
    - Invalid username: 
        - If the username doesn't match any logged-in user, createBidOffer will fail.
    - Invalid shopName: 
        - If the shop name doesn't match any existing open shop, createBidOffer will fail.
    - Invalid productName: 
        - If the product name doesn't match any existing product in shop, createBidOffer will fail.
    - Invalid bidPrice: 
        - If the bidPrice is negative, addProductsToCart will fail.
        - If the bidPrice is more than product's price in shop, createBidOffer will fail.
    - Server error:
       - If there is a server error or database connectivity issue, createBidOffer will fail.
- Example: ```updateCartProductQuantity(JohnDoe, Phone, MyShop, 10);```

#### addAdmin

- Signature: ```addAdmin(String adminName);```
- Description: Adds new admin to the system. The username should be of a registered user which isn't an admin.
- Possible Failure Scenarios:
    - Invalid username: 
        - If the username doesn't match any registed user, addAdmin will fail.
        - If the username matchs an admin user, addAdmin will fail.
    - Server error:
       - If there is a server error or database connectivity issue, addAdmin will fail.
- Example: ```addAdmin(JohnDoe);```

---

### Shop Owner API

#### openShop

- Signature: ```openShop(String userName, String shopName);```
- Description: Opens the shop with the given shop name. The username should be of a logged-in user which is the shop's founder. The shop name should be of an existing closed shop from user's shops.
- Possible Failure Scenarios:
    - Invalid username: 
        - If the username doesn't match any logged-in user, openShop will fail.
        - If the username doesn't match shop's founder username, openShop will fail.
    - Invalid shopName: 
        - If the shop name doesn't match any shop from user's shops, openShop will fail.
        - If the shop name doesn't match any existing closed shop, openShop will fail.
    - Server error:
       - If there is a server error or database connectivity issue, openShop will fail.
- Example: ```openShop(JohnDoe, MyShop);```

#### closeShop

- Signature: ```closeShop(String userName, String shopName);```
- Description: Closes the shop with the given shop name. The username should be of a logged-in user which is the shop's founder. The shop name should be of an existing open shop from user's shops.
- Possible Failure Scenarios:
    - Invalid username: 
        - If the username doesn't match any logged-in user, closeShop will fail.
        - If the username doesn't match shop's founder username, closeShop will fail.
    - Invalid shopName: 
        - If the shop name doesn't match any shop from user's shops, closeShop will fail.
        - If the shop name doesn't match any existing open shop, closeShop will fail.
    - Server error:
       - If there is a server error or database connectivity issue, closeShop will fail.
- Example: ```closeShop(JohnDoe, MyShop);```

#### addNewProduct

- Signature: ```addNewProduct(String userName, String shopName, String productName, String category, String description, double price);```
- Description: Adds a new product to the specified shop with the provided product name, category, description, and price. The username should be of a logged-in user which is part of the shop's management with the MANAGE_STOCK permission. The shop name should be of an existing open shop from user's shops. The product name shouldn't be of an existing product in the specified shop and should have at least 3 characters and at most 255 characters. The category name should have at least 3 characters and at most 30 characters. The description should have at least 5 characters and at most 255 characters. The price shouldn't be negative.
- Possible Failure Scenarios:
    - Invalid username: 
        - If the username doesn't match any logged-in user, addNewProduct will fail.
        - If the username doesn't match username from the shop's management with the MANAGE_STOCK permission, addNewProduct will fail.
    - Invalid shopName: 
        - If the shop name doesn't match any shop from user's shops, addNewProduct will fail.
        - If the shop name doesn't match any existing open shop, addNewProduct will fail.
    - Invalid productName: 
        - If the product name is already taken by another product in shop, addNewProduct will fail. 
        - If the product name is less than 3 characters, addNewProduct will fail. 
        - If the product name is more than 255 characters, addNewProduct will fail. 
    - Invalid category: 
        - If the category name is less than 3 characters, addNewProduct will fail. 
        - If the category name is more than 30 characters, addNewProduct will fail. 
    - Invalid description: 
        - If the description is less than 5 characters, addNewProduct will fail. 
        - If the description is more than 255 characters, addNewProduct will fail.
    - Invalid price: 
        - If the price is negative, addNewProduct will fail. 
    - Server error:
       - If there is a server error or database connectivity issue, addNewProduct will fail.
- Example: ```addNewProduct(JohnDoe, MyShop, Phone, Electronics, Smartphone, 999.99);```

#### removeProduct

- Signature: ```removeProduct(String userName, String shopName, String productName);```
- Description: Removes the product with the given name from the specified shop. The username should be of a logged-in user which is part of the shop's management with the MANAGE_STOCK permission. The shop name should be of an existing open shop from user's shops. The product name should be of an existing product in the specified shop.
- Possible Failure Scenarios:
    - Invalid username: 
        - If the username doesn't match any logged-in user, removeProduct will fail.
        - If the username doesn't match username from the shop's management with the MANAGE_STOCK permission, removeProduct will fail.
    - Invalid shopName: 
        - If the shop name doesn't match any shop from user's shops, removeProduct will fail.
        - If the shop name doesn't match any existing open shop, removeProduct will fail.
    - Invalid productName: 
        - If the product name doesn't match any product from the user's specified shop, removeProduct will fail.
    - Server error:
       - If there is a server error or database connectivity issue, removeProduct will fail.
- Example: ```removeProduct(JohnDoe, MyShop, Phone);```

#### updateProductDesc

- Signature: ```updateProductDesc(String userName, String shopName, String productName, String productNewDescription);```
- Description: Updates the description of a product in the specified shop. The username should be of a logged-in user which is part of the shop's management with the MANAGE_STOCK permission. The shop name should be of an existing open shop from user's shops. The product name should be of an existing product in the specified shop. The description should have at least 5 characters and at most 255 characters.
- Possible Failure Scenarios:
    - Invalid username: 
        - If the username doesn't match any logged-in user, updateProductDesc will fail.
        - If the username doesn't match username from the shop's management with the MANAGE_STOCK permission, updateProductDesc will fail.
    - Invalid shopName: 
        - If the shop name doesn't match any shop from user's shops, updateProductDesc will fail.
        - If the shop name doesn't match any existing open shop, updateProductDesc will fail.
    - Invalid productName: 
        - If the product name doesn't match any product from the user's specified shop, updateProductDesc will fail.
    - Invalid productNewDescription: 
        - If the productNewDescription is less than 5 characters, updateProductDesc will fail. 
        - If the productNewDescription is more than 255 characters, updateProductDesc will fail.
    - Server error:
       - If there is a server error or database connectivity issue, updateProductDesc will fail.
- Example: ```updateProductDesc(JohnDoe, MyShop, Phone, New description);```

#### updateProductPrice

- Signature: ```updateProductPrice(String userName, String shopName, String productName, double price);```
- Description: Updates the price of a product in the specified shop. The username should be of a logged-in user which is part of the shop's management with the MANAGE_STOCK permission. The shop name should be of an existing open shop from user's shops. The product name should be of an existing product in the specified shop. The price shouldn't be negative.
- Possible Failure Scenarios:
    - Invalid username: 
        - If the username doesn't match any logged-in user, updateProductPrice will fail.
        - If the username doesn't match username from the shop's management with the MANAGE_STOCK permission, updateProductPrice will fail.
    - Invalid shopName: 
        - If the shop name doesn't match any shop from user's shops, updateProductPrice will fail.
        - If the shop name doesn't match any existing open shop, updateProductPrice will fail.
    - Invalid productName: 
        - If the product name doesn't match any product from the user's specified shop, updateProductPrice will fail.
    - Invalid price: 
        - If the price is negative, updateProductPrice will fail. 
    - Server error:
       - If there is a server error or database connectivity issue, updateProductPrice will fail.
- Example: ```updateProductPrice(JohnDoe, MyShop, Phone, 899.99);```

#### updateProductQuantity

- Signature: ```updateProductQuantity(String userName, String shopName, String productName, int quantity);```
- Description: Updates the quantity of a product in the specified shop. The username should be of a logged-in user which is part of the shop's management with the MANAGE_STOCK permission. The shop name should be of an existing open shop from user's shops. The product name should be of an existing product in the specified shop. The quantity should be positive.
- Possible Failure Scenarios:
    - Invalid username: 
        - If the username doesn't match any logged-in user, updateProductQuantity will fail.
        - If the username doesn't match username from the shop's management with the MANAGE_STOCK permission, updateProductQuantity will fail.
    - Invalid shopName: 
        - If the shop name doesn't match any shop from user's shops, updateProductQuantity will fail.
        - If the shop name doesn't match any existing open shop, updateProductQuantity will fail.
    - Invalid productName: 
        - If the product name doesn't match any product from the user's specified shop, updateProductQuantity will fail.
    - Invalid quantity: 
        - If the quantity is non-positive, updateProductQuantity will fail. 
    - Server error:
       - If there is a server error or database connectivity issue, updateProductQuantity will fail.
- Example: ```updateProductQuantity(JohnDoe, MyShop, Phone, 10);```

#### updateProductCategory

- Signature: ```updateProductCategory(String userName, String shopName, String productName, String category);```
- Description: Updates the category of a product in the specified shop. The username should be of a logged-in user which is part of the shop's management with the MANAGE_STOCK permission. The shop name should be of an existing open shop from user's shops. The product name should be of an existing product in the specified shop. The category name should have at least 3 characters and at most 30 characters.
- Possible Failure Scenarios:
    - Invalid username: 
        - If the username doesn't match any logged-in user, updateProductCategory will fail.
        - If the username doesn't match username from the shop's management with the MANAGE_STOCK permission, updateProductCategory will fail.
    - Invalid shopName: 
        - If the shop name doesn't match any shop from user's shops, updateProductCategory will fail.
        - If the shop name doesn't match any existing open shop, updateProductCategory will fail.
    - Invalid productName: 
        - If the product name doesn't match any product from the user's specified shop, updateProductCategory will fail.
    - Invalid category: 
        - If the category name is less than 3 characters, updateProductCategory will fail. 
        - If the category name is more than 30 characters, updateProductCategory will fail. 
    - Server error:
       - If there is a server error or database connectivity issue, updateProductCategory will fail.
- Example: ```updateProductCategory(JohnDoe, MyShop, Phone, Electronics);```

#### addProductItems

- Signature: ```addProductItems(String userName, String shopName, String productName, int quantity);```
- Description: Adds items to the quantity of a product in the specified shop. The username should be of a logged-in user which is part of the shop's management with the MANAGE_STOCK permission. The shop name should be of an existing open shop from user's shops. The product name should be of an existing product in the specified shop. The quantity should be positive.
- Possible Failure Scenarios:
    - Invalid username: 
        - If the username doesn't match any logged-in user, addProductItems will fail.
        - If the username doesn't match username from the shop's management with the MANAGE_STOCK permission, addProductItems will fail.
    - Invalid shopName: 
        - If the shop name doesn't match any shop from user's shops, addProductItems will fail.
        - If the shop name doesn't match any existing open shop, addProductItems will fail.
    - Invalid productName: 
        - If the product name doesn't match any product from the user's specified shop, addProductItems will fail.
    - Invalid quantity: 
        - If the quantity is non-positive, addProductItems will fail. 
    - Server error:
       - If there is a server error or database connectivity issue, addProductItems will fail.
- Example: ```addProductItems(JohnDoe, MyShop, Phone, 5);```

#### appointShopOwner

- Signature: ```appointShopOwner(String appointedBy, String appointee, String shopName);```
- Description: Appoints a new owner to the specified shop. The appointedBy should be of a logged-in user which is part of the shop's owners. The appointee should be of a registered user which is not part of the shop's owners. The shop name should be of an existing open shop from appointedBy's shops.
- Possible Failure Scenarios:
    - Invalid appointedBy: 
        - If the appointedBy doesn't match any logged-in user, appointShopOwner will fail.
        - If the appointedBy doesn't match username from the shop's owners, appointShopOwner will fail.
    - Invalid appointee: 
        - If the appointee doesn't match any registered user, appointShopOwner will fail.
        - If the appointee match username from the shop's owners, appointShopOwner will fail.
    - Invalid shopName: 
        - If the shop name doesn't match any shop from user's shops, appointShopOwner will fail.
        - If the shop name doesn't match any existing open shop, appointShopOwner will fail.
    - Server error:
       - If there is a server error or database connectivity issue, appointShopOwner will fail.
- Example: ```appointShopOwner(JohnDoe, JaneSmith, MyShop);```

#### appointShopManager

- Signature: ```appointShopManager(String appointedBy, String appointee, String shopName);```
- Description: Appoints a new manager to the specified shop. The appointedBy should be of a logged-in user which is part of the shop's owners. The appointee should be of a registered user which is not part of the shop's management (both owners and managers). The shop name should be of an existing open shop from appointedBy's shops.
- Possible Failure Scenarios:
    - Invalid appointedBy: 
        - If the appointedBy doesn't match any logged-in user, appointShopOwner will fail.
        - If the appointedBy doesn't match username from the shop's owners, appointShopOwner will fail.
    - Invalid appointee: 
        - If the appointee doesn't match any registered user, appointShopOwner will fail.
        - If the appointee match username from the shop's management (both owners and managers), appointShopOwner will fail.
    - Invalid shopName: 
        - If the shop name doesn't match any shop from user's shops, appointShopOwner will fail.
        - If the shop name doesn't match any existing open shop, appointShopOwner will fail.
    - Server error:
       - If there is a server error or database connectivity issue, appointShopOwner will fail.
- Example: ```appointShopManager(JohnDoe, JaneSmith, MyShop);```

#### removeShopOwner

- Signature: ```removeShopOwner(String managerName, String userToRemove, String shopName);```
- Description: Removes an owner from the specified shop. The appointedBy should be of a logged-in user which is part of the shop's owners. The appointee should be of a registered user which is part of the shop's owners. The shop name should be of an existing open shop from appointedBy's shops.
- Possible Failure Scenarios:
    - Invalid appointedBy: 
        - If the appointedBy doesn't match any logged-in user, removeShopOwner will fail.
        - If the appointedBy doesn't match username from the shop's owners, removeShopOwner will fail.
    - Invalid appointee: 
        - If the appointee doesn't match any registered user, removeShopOwner will fail.
        - If the appointee doesn't match username from the shop's owners, removeShopOwner will fail.
    - Invalid shopName: 
        - If the shop name doesn't match any shop from user's shops, removeShopOwner will fail.
        - If the shop name doesn't match any existing open shop, removeShopOwner will fail.
    - Server error:
       - If there is a server error or database connectivity issue, removeShopOwner will fail.
- Example: ```removeShopOwner(JohnDoe, JaneSmith, MyShop);```

#### addAgePurchasePolicy

- Signature: ```addAgePurchasePolicy(String userName, String shopName, boolean isProduct, String toConstraint, boolean positive, int startAge, int endAge);```
- Description: Adds an age-based purchase policy to the specified shop. The username should be of a logged-in user which is part of the shop's owners. The shop name should be of an existing open shop from user's shops. The isProduct flag represents if the policy is set on product-level or on category level. The toConstraint is the name of the product/category accordingly. The positive flag represents if to allow only in the given range or to restrict the given range. The startAge and endAge form the age range for the policy.
- Possible Failure Scenarios:
    - Invalid username: 
        - If the username doesn't match any logged-in user, addAgePurchasePolicy will fail.
        - If the username doesn't match username from the shop's management with the MANAGE_STOCK permission, addAgePurchasePolicy will fail.
    - Invalid shopName: 
        - If the shop name doesn't match any shop from user's shops, addAgePurchasePolicy will fail.
        - If the shop name doesn't match any existing open shop, addAgePurchasePolicy will fail.
    - Invalid isProduct: 
        - If isProduct is not boolean, addAgePurchasePolicy will fail.
    - Invalid toConstraint: 
        - If isProduct is set and toConstraint doesn't match any existing product in shop, addAgePurchasePolicy will fail.
        - If isProduct is clear and toConstraint doesn't match any existing category in shop, addAgePurchasePolicy will fail.
    - Invalid positive: 
        - If If positive is not boolean, addAgePurchasePolicy will fail.
    - Invalid startAge: 
        - If startAge is negative, addAgePurchasePolicy will fail.
    - Invalid endAge: 
        - If endAge is less than startAge, addAgePurchasePolicy will fail.
    - Server error:
       - If there is a server error or database connectivity issue, addAgePurchasePolicy will fail.
- Example: ```addAgePurchasePolicy(JohnDoe, MyShop, true, Category, true, 18, 99);```

#### addQuantityPurchasePolicy

- Signature: ```addQuantityPurchasePolicy(String userName, String shopName, boolean isProduct, String toConstraint, boolean positive, int minQuantity, int maxQuantity);```
- Description: Adds a quantity-based purchase policy to the specified shop. The username should be of a logged-in user which is part of the shop's owners. The shop name should be of an existing open shop from user's shops. The isProduct flag represents if the policy is set on product-level or on category level. The toConstraint is the name of the product/category accordingly. The positive flag represents if to allow only in the given range or to restrict the given range. The minQuantity and maxQuantity form the quantity range for the policy.
- Possible Failure Scenarios:
    - Invalid username: 
        - If the username doesn't match any logged-in user, addQuantityPurchasePolicy will fail.
        - If the username doesn't match username from the shop's management with the MANAGE_STOCK permission, addQuantityPurchasePolicy will fail.
    - Invalid shopName: 
        - If the shop name doesn't match any shop from user's shops, addQuantityPurchasePolicy will fail.
        - If the shop name doesn't match any existing open shop, addQuantityPurchasePolicy will fail.
    - Invalid isProduct: 
        - If isProduct is not boolean, addQuantityPurchasePolicy will fail.
    - Invalid toConstraint: 
        - If isProduct is set and toConstraint doesn't match any existing product in shop, addQuantityPurchasePolicy will fail.
        - If isProduct is clear and toConstraint doesn't match any existing category in shop, addQuantityPurchasePolicy will fail.
    - Invalid positive: 
        - If If positive is not boolean, addQuantityPurchasePolicy will fail.
    - Invalid minQuantity: 
        - If minQuantity is negative, addQuantityPurchasePolicy will fail.
    - Invalid maxQuantity: 
        - If maxQuantity is less than minQuantity, addQuantityPurchasePolicy will fail.
    - Server error:
       - If there is a server error or database connectivity issue, addQuantityPurchasePolicy will fail.
- Example: ```addQuantityPurchasePolicy(JohnDoe, MyShop, true, Product, false, 5, 10);```

#### addDatePurchasePolicy

- Signature: ```addDatePurchasePolicy(String userName, String shopName, boolean isProduct, String toConstraint, boolean positive, LocalDate startDate, LocalDate endDate);```
- Description: Adds a date-based purchase policy to the specified shop. The username should be of a logged-in user which is part of the shop's owners. The shop name should be of an existing open shop from user's shops. The isProduct flag represents if the policy is set on product-level or on category level. The toConstraint is the name of the product/category accordingly. The positive flag represents if to allow only in the given range or to restrict the given range. The startDate and endDate form the date range for the policy.
- Possible Failure Scenarios:
    - Invalid username: 
        - If the username doesn't match any logged-in user, addDatePurchasePolicy will fail.
        - If the username doesn't match username from the shop's management with the MANAGE_STOCK permission, addDatePurchasePolicy will fail.
    - Invalid shopName: 
        - If the shop name doesn't match any shop from user's shops, addDatePurchasePolicy will fail.
        - If the shop name doesn't match any existing open shop, addDatePurchasePolicy will fail.
    - Invalid isProduct: 
        - If isProduct is not boolean, addDatePurchasePolicy will fail.
    - Invalid toConstraint: 
        - If isProduct is set and toConstraint doesn't match any existing product in shop, addDatePurchasePolicy will fail.
        - If isProduct is clear and toConstraint doesn't match any existing category in shop, addDatePurchasePolicy will fail.
    - Invalid positive: 
        - If If positive is not boolean, addDatePurchasePolicy will fail.
    - Invalid startDate and endDate: 
        - If startDate is after endDate, addDatePurchasePolicy will fail.
    - Server error:
       - If there is a server error or database connectivity issue, addDatePurchasePolicy will fail.
- Example: ```addDatePurchasePolicy(JohnDoe, MyShop, false, Shop, true, 13/6/2023, 20/6/2023);```

#### addTimePurchasePolicy

- Signature: ```addTimePurchasePolicy(String userName, String shopName, boolean isProduct, String toConstraint, boolean positive, int startHour, int endHour);```
- Description: Adds a hour-based purchase policy to the specified shop. The username should be of a logged-in user which is part of the shop's owners. The shop name should be of an existing open shop from user's shops. The isProduct flag represents if the policy is set on product-level or on category level. The toConstraint is the name of the product/category accordingly. The positive flag represents if to allow only in the given range or to restrict the given range. The startHour and endHour form the time range for the policy.
- Possible Failure Scenarios:
    - Invalid username: 
        - If the username doesn't match any logged-in user, addDatePurchasePolicy will fail.
        - If the username doesn't match username from the shop's management with the MANAGE_STOCK permission, addDatePurchasePolicy will fail.
    - Invalid shopName: 
        - If the shop name doesn't match any shop from user's shops, addDatePurchasePolicy will fail.
        - If the shop name doesn't match any existing open shop, addDatePurchasePolicy will fail.
    - Invalid isProduct: 
        - If isProduct is not boolean, addDatePurchasePolicy will fail.
    - Invalid toConstraint: 
        - If isProduct is set and toConstraint doesn't match any existing product in shop, addDatePurchasePolicy will fail.
        - If isProduct is clear and toConstraint doesn't match any existing category in shop, addDatePurchasePolicy will fail.
    - Invalid positive: 
        - If If positive is not boolean, addDatePurchasePolicy will fail.
    - Invalid startHour and endHour: 
        - If startHour is not in the range of 0-23, addDatePurchasePolicy will fail.
        - If endHour is not in the range of 0-23, addDatePurchasePolicy will fail.
        - If endHour is the same as startHour, addDatePurchasePolicy will fail.
    - Server error:
       - If there is a server error or database connectivity issue, addDatePurchasePolicy will fail.
- Example: ```addTimePurchasePolicy(JohnDoe, MyShop, false, Shop, true, 9, 17);```

#### addShopDiscount

- Signature: ```addShopDiscount(String shopName, String userName, double discountPercentage);```
- Description: Adds a discount to the specified shop at a shop-level. The userName should be of a logged-in user which is part of the shop's owners. The shop name should be of an existing open shop from userName's shops. The discountPercentage should be between 1-100.
- Possible Failure Scenarios:
    - Invalid userName: 
        - If the userName doesn't match any logged-in user, addShopDiscount will fail.
        - If the userName doesn't match username from the shop's owners, addShopDiscount will fail.
    - Invalid shopName: 
        - If the shop name doesn't match any shop from user's shops, addShopDiscount will fail.
        - If the shop name doesn't match any existing open shop, addShopDiscount will fail.
    - Invalid discountPercentage: 
        - If the discount percentage is not between 1-100, addShopDiscount will fail.
    - Server error:
       - If there is a server error or database connectivity issue, addShopDiscount will fail.
- Example: ```addShopDiscount(MyShop, JohnDoe, 15);```

#### addCategoryDiscount

- Signature: ```addCategoryDiscount(String shopName, String userName, double discountPercentage, String category);```
- Description: Adds a discount to the specified shop at a category-level. The userName should be of a logged-in user which is part of the shop's owners. The shop name should be of an existing open shop from userName's shops. The discountPercentage should be between 1-100. The category should be one of the categories in the specified shop.
- Possible Failure Scenarios:
    - Invalid userName: 
        - If the userName doesn't match any logged-in user, addCategoryDiscount will fail.
        - If the userName doesn't match username from the shop's owners, addCategoryDiscount will fail.
    - Invalid shopName: 
        - If the shop name doesn't match any shop from user's shops, addCategoryDiscount will fail.
        - If the shop name doesn't match any existing open shop, addCategoryDiscount will fail.
    - Invalid discountPercentage: 
        - If the discount percentage is not between 1-100, addCategoryDiscount will fail.
    - Invalid category: 
        - If the category doesn't match any category in the specified shop, addCategoryDiscount will fail.
    - Server error:
       - If there is a server error or database connectivity issue, addCategoryDiscount will fail.
- Example: ```addCategoryDiscount(MyShop, JohnDoe, 15, Electronics);```

#### addProductDiscount

- Signature: ```addProductDiscount(String shopName, String userName, double discountPercentage, String productName);```
- Description: Adds a discount to the specified shop at a product-level. The userName should be of a logged-in user which is part of the shop's owners. The shop name should be of an existing open shop from userName's shops. The discountPercentage should be between 1-100. The productName should be one of the products in the specified shop.
- Possible Failure Scenarios:
    - Invalid userName: 
        - If the userName doesn't match any logged-in user, addProductDiscount will fail.
        - If the userName doesn't match username from the shop's owners, addProductDiscount will fail.
    - Invalid shopName: 
        - If the shop name doesn't match any shop from user's shops, addProductDiscount will fail.
        - If the shop name doesn't match any existing open shop, addProductDiscount will fail.
    - Invalid discountPercentage: 
        - If the discount percentage is not between 1-100, addProductDiscount will fail.
    - Invalid productName: 
        - If the productName doesn't match any product in the specified shop, addProductDiscount will fail.
    - Server error:
       - If there is a server error or database connectivity issue, addProductDiscount will fail.
- Example: ```addProductDiscount(MyShop, JohnDoe, 15, Phone);```

#### changeManagerAccess

- Signature: ```changeManagerAccess(String actor, String actOn, String shopName,int permission);```
- Description: Changes manager's access according to permission (Provided permission mapping in the section below). The actor should be of a logged-in user which is part of the shop's owners (either the founder or the role-grantor of actOn). The actOn should be of a registered user which is part of the shop's management. The shop name should be of an existing open shop from actor's shops. the permission should match a permission from the permission list.
- Possible Failure Scenarios:
    - Invalid actor: 
        - If the actor doesn't match any logged-in user, changeManagerAccess will fail.
        - If the actor doesn't match username from the shop's owners, changeManagerAccess will fail.
        - If the actor is not the founder or the role-grantor of actOn, changeManagerAccess will fail.
    - Invalid actOn: 
        - If the actOn doesn't match any registered user, changeManagerAccess will fail.
        - If the actOn doesn't match username from the shop's management, changeManagerAccess will fail.
    - Invalid shopName: 
        - If the shop name doesn't match any shop from actor's shops, changeManagerAccess will fail.
        - If the shop name doesn't match any existing open shop, changeManagerAccess will fail.
    - Invalid permission: 
        - If the permission doesn't match any permission from the permission list, changeManagerAccess will fail.
    - Server error:
       - If there is a server error or database connectivity issue, changeManagerAccess will fail.
- Example: ```changeManagerAccess(JohnDoe, JaneSmith, MyShop, 1);```
---

### Admin API

#### removeUser

- Signature: ```removeUser(String adminName, String userName);```
- Description: Removes a user from the system. The adminName should be of a logged-in admin user. The userName should be of registered non-admin user without roles in any shop.
- Possible Failure Scenarios:
    - Invalid adminName: 
        - If the adminName doesn't match any logged-in user, removeUser will fail.
        - If the adminName doesn't match admin user, removeUser will fail.
    - Invalid userName: 
        - If the userName doesn't match any registered user, removeUser will fail.
        - If the userName match admin user, removeUser will fail.
        - If the userName match user with role in some shop, removeUser will fail.
    - Server error:
       - If there is a server error or database connectivity issue, removeUser will fail.
- Example: ```removeUser(admin, JohnDoe);```

---

### Permission mapping

READ_ONLY - 0.

MANAGE_READ_ACCESS - 1.

FULL_ACCESS - 2.
