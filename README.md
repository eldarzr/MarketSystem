# MarketSystem
Hello!!
Welcome for our market system.


The format for valid configuration file in jason format is as following:
{
    "database":
    {
        "path" : "url-value",
        "admin" : "username-value",
        "password" : "password-value"
    },

    "externalSystems":
    {
        "webAddress": "url-value"
    },

    "systemAdmin":
    {
        "username" : "username-value",
        "email" : "email-value",
        "password" : "password-value"
    }
}

Make sure you are not missing any neccesary fields as it will cause failure in the initialization process.
Once you generate your requested configuration file you can save it in the initFiles folder as "BaseConfig.jason" and our system will load it's data.

As for the loading state, we will provide you an API for optional actions you can list for loading a certain state,
the format for this file will be text file and will require you to add commands only from the API, otherwise it will cause failure in the loading process.

The format for valid loading state file in text format should be like:
"
register(user1, u1@gmail.com, Aa123456);
register(user2, u2@gmail.com, Aa123456);
register(user3, u3@gmail.com, Aa123456);
login(user1, Aa123456);
createShop(user1, shop1);
appointShopOwner(user1, user2, shop1);
login(user2, Aa123456);
appointShopOwner(user2, user3, shop1);
removeShopOwner(user1, user2, shop1);
"

We hope you will enjoy our system :)

