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
    showTable("products");
    findByItemId('products', 'item_id');
    connection.end();
})

function selectProduct() {
    var product1 = "";

    showTable = table => {
        connection.query(`SELECT * from ??`, table, (err, res) => {
            if (err) throw (err);
            // console.log(res);
            // console.table(res);
        })
    }

    findByItemId = table => {
        connection.query(`SELECT product_name from ??`, table, (err, res) => {
            if (err) throw (err);
            // console.log(res);
            // console.table(res[1]);
            product1 = res[1].product_name;
            console.log(product1);
        })
    }
    function runID() {
        inquirer.prompt({
            type: 'list',
            message: "What is the product ID of your item?",
            choices: [product1, 'b', 'exit'],
            name: "choice"
        }).then(res => {
            if (res.choice === 'exit') {
                process.exit();
            } else {
                console.log("you chose " + res.choice);
                runAmount();
            }
        })
    }

    function runAmount() {
        inquirer.prompt({
            type: 'input',
            message: 'How many items would you like to buy?',
            name: 'amount'
        })
    }
    runID()
}
selectProduct()