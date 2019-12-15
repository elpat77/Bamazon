const mysql = require("mysql");
var inquirer = require('inquirer');
// var itemSelected;
// var purchaseAmount;
// var salesAmount;
// var newStock = [];

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
    console.log(`you are connected to thread ID: ${connection.threadId}`);
    // selectProduct();
    // showTable('products');
    // updateTable(23, 'Mens Barcelona Jersey Large');
    // addTo('products', { item_id: "SFWGH-01", product_name: "SF Warriors Girls Hat", department_name: "Sports", sub_department: "Basketball", price: "15.99", stock_quantity: '12' })

})