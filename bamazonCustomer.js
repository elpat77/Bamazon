const mysql = require("mysql");
var inquirer = require('inquirer');

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
    showTable();
    connection.end();
})

function selectProduct() {

    showTable = table => {
        connection.query(`SELECT * from products`, table, (err, res) => {
            if (err) throw (err);
            inquirer.prompt([{
                type: 'list',
                name: "choice",
                choices: function () {
                    var products = [];
                    for (let i = 0; i < res.length; i++) {
                        products.push(res[i].product_name);
                        // console.log(products);
                    }
                    return products
                },
                message: "What item would you like to buy?"
            },
            {
                type: 'input',
                message: 'How many items would you like to buy?',
                name: 'amount',
                validate: function (value) {
                    return !isNaN(value);
                }
            }
            ])
        })
    }
}

