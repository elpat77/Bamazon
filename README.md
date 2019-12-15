# Welcome to Bamazon!

```
* This is an Amazon-like storefront using MySQL and node.js created as a homework

There is a customer facing portal, where users can  view the inventory and purchase an item. If there is not enough stock of a particular item, we would be unable to fulfill your purchase as the transaction 
will not go through.
The app will take in orders from customers and deplete stock from the store's inventory.

Within the manager portal, you can view all inventory in the store, view all low
inventory (less than 5 items in stock), add items to the inventory and additional products to the store.

Happy shopping! 
```

**What Each JavaScript Does**
_bamazonCustomer.js_

* Prints the products in the store.

* Prompts customer which product they would like to purchase by ID number.

* Asks for the quantity.

* If there is a sufficient amount of the product in stock, it will return the total for that purchase.
However, if there is not enough of the product in stock, it will tell the user that there isn't enough of the product.
If the purchase goes through, it updates the stock quantity to reflect the purchase.
It will also update the product sales in the department table.


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

