const mysql = require("mysql");
var inquirer = require('inquirer');
var itemSelected;
var purchaseAmount;
var salesAmount;


const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password",
    database: "bamazon",
    insecurerAuth: true
})

connection.connect(err => {
    if (err) throw err;
    // console.log(`you are connected to thread ID: ${connection.threadId}`);
    selectProduct();
    showTable('products');
    // updateTable(23, 'Mens Barcelona Jersey Large');
    // addTo('products', { item_id: "SFWGH-01", product_name: "SF Warriors Girls Hat", department_name: "Sports", sub_department: "Basketball", price: "15.99", stock_quantity: '12' })

})

function selectProduct() {
    showTable = table => {
        connection.query(`SELECT * from ??`, table, (err, res) => {
            if (err) throw (err);
            console.table(res);
            var products = [];
            for (let i = 0; i < res.length; i++) {
                products.push(res[i].product_name);
            }
            inquirer.prompt([{
                type: 'list',
                name: "choice",
                choices: products,
                message: "What item would you like to buy?"

            },
            {
                type: 'input',
                message: 'How many items would you like to buy?',
                name: 'amount'
            }
            ]).then(function (selection) {
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
                    console.log(itemSelected.product_name, "is in sock");
                    console.log("The price of the item is: $", itemSelected.price);
                    console.log("Your total purchase amount will be: $", parseFloat(salesAmount));
                    confirmPurchase();
                }
                //if don't have enough then "error message or shop for something else"
                else {
                    console.log("Sorry we don't have that quantity in stock. Our current stock for that item is ", itemSelected.stock_quantity, "- Please try again. -");
                    process.exit();
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
            let newStock = itemSelected.stock_quantity - purchaseAmount;
            // console.log("new stock is", newStock);
            let productBought = itemSelected.product_name;
            // console.log("product name", productBought);
            console.log("Thanks for your purchase!\n Your order for", purchaseAmount, productBought, "will ship out soon!");

            connection.query('UPDATE products SET ? WHERE ?', [{ stock_quantity: newStock }, { product_name: productBought }],
                (err) => {
                    if (err) throw (err);
                });
            process.exit();

        } else {
            console.log('Thanks for visiting, come back soon!');
            process.exit();
        }
    })
}

