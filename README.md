# Welcome to Bamazon!

```
This is an Amazon-like storefront using MySQL and node.js created as a homework

There is a customer facing portal, where users can  view the inventory and purchase an item. If there is not enough stock of a particular item, we would be unable to fulfill your purchase as the transaction 
will not go through.
The app will take in orders from customers and deplete stock from the store's inventory.

Within the manager portal, you can view all inventory in the store, view all low
inventory (less than 5 items in stock), add items to the inventory and additional products to the store.

Happy shopping! 
```

**What Each JavaScript Does**

1. `BamazonCustomer.js`
`This is the application used by customers in order to make a purcahse`

* Prints the products in the store.

* Displays a list of products available for purchase.

* Asks for the purcahse quantity.

* If there is a sufficient amount of the product in stock, it will return the total amount  for that purchase.
However, if there is not enough of the product in stock, it will tell the user that there isn't enough of the product and exit out of the application.

* If the purchase goes through, it updates the stock quantity in the database to reflect the purchase.

2. `BamazonManager.js`
`This application works as a Inventory Management Tool, used for viewing or editing the products database`

    * Starts with a menu:

        * View all products
        * View low inventory (any item with stock under 5)
        * Add new product
        * Update product
        * Exit

    * If the manager selects `View all products`, it lists all of the products in the store including all of their details.

    * If the manager selects `View Low Inventory`, it will list all the products with five or less items in its stock quantity column.

    * If the manager selects `Add new product`, it allows the manager to add a new product to the inventory.

    * If the manager selects `Update product`, it allows the manager to change the products stock quantity.

    * If the manager selects `Exit`, it ends the session.


**Running the application**

* Clone repo.
* Run command in Terminal or Gitbash 'npm install'
* Run command in Terminal or Gitbash 'npm init -y'
* Run command in Terminal or Gitbash 'npm install inquirer'
* Run command in Terminal or Gitbash 'npm install mysql'
* Run command depending which mode you would like to be on:
  * Customer - 'node bamazonCutomer.js'
  * Manager - 'node bamazonManager.js'

* Run 'ctrl + c' to exit each mode

