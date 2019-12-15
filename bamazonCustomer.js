const mysql = require("mysql");
var inquirer = require('inquirer');
var itemSelected;
var purchaseAmount;
var salesAmount;
var newStock;

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password",
    database: "bamazon",
    insecurerAuth: true
})

// console.log(connection);

connection.connect(err => {
    if (err) throw err;
    // console.log(`you are connected to thread ID: ${connection.threadId}`);
    selectProduct()
    showTable('products');
    connection.end();
})

function selectProduct() {
    showTable = table => {
        connection.query(`SELECT * from ??`, table, (err, res) => {
            if (err) throw (err);
            console.table(res);
            console.log(res.length);
            var products = [];
            for (let i = 0; i < res.length; i++) {
                // console.log(products);
                products.push(res[i].product_name);
            }
            // console.log(products.length)
            inquirer.prompt([{
                type: 'list',
                name: "choice",
                choices: products,
                message: "What item would you like to buy?"

            },
            {
                type: 'input',
                message: 'How many items would you like to buy?',
                name: 'amount',
            }
            ]).then(function (selection) {
                // var itemSelected;
                // var purchaseAmount;
                // var salesAmount;

                //check what ids the product name
                for (let i = 0; i < res.length; i++) {
                    if (res[i].product_name === selection.choice) {
                        itemSelected = res[i];
                        // find how much the person ordered with is input
                        purchaseAmount = selection.amount;

                    }
                }
                //compare that amount with stock quantity
                //if you have enough, then sell it and substract that item
                if (purchaseAmount <= itemSelected.stock_quantity) {

                    salesAmount = itemSelected.price * purchaseAmount;
                    console.log("The item you selected is in stock");
                    console.log("The price of the item is: $", itemSelected.price);
                    console.log("Your total purchase amount will be: $", parseFloat(salesAmount));
                    confirmPurchase();


                }
                //if don't have enough then "error message or shop for something else"
                else {
                    console.log("Sorry we don't have that quantity in stock. Our current stock for that item is ", itemSelected.stock_quantity, "- Please try again. -");
                }
            })
        })
    }
}

function confirmPurchase() {
    inquirer.prompt([{
        type: 'list',
        name: 'selected',
        choices: ['Yes please!', 'I changed my mind'],
        message: 'Do you want to proceed with the purchase?'
    }]).then(function (purchase) {
        if (purchase.selected === 'Yes please!') {
            console.log("Thanks for your purchase, your order will ship out soon!");
            newStock = itemSelected.stock_quantity - purchaseAmount;

        } else {
            console.log('Thanks for visiting, come back soon!');
            process.exit();
        }
    })
}

// function updateInventory() {


// }
