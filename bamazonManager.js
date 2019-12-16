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

function start() {
    connection.connect(err => {
        if (err) throw err;
        console.log(`you are connected to thread ID: ${connection.threadId}`);
        options()
    })
}
start();


function options() {
    inquirer.prompt({
        type: 'list',
        name: 'selected',
        message: 'Welcom to the Inventory Managmengt Tool. What would you like to do?',
        choices: ['View all products', 'View items with low inventory', 'Add new product', 'Update existing product', 'Exit']
    }).then(response => {
        if (response.selected === 'View all products') {
            viewProducts();
        } else if (response.selected === 'View items with low inventory') {
            viewLowInventory();
        } else if (response.selected === 'Add new product') {
            addProduct();
        } else if (response.selected === 'Update existing product') {
            updateProduct();
        } else if (response.selected === 'Exit') {
            process.exit();
        }
    });
}

function viewProducts() {
    connection.query('SELECT * FROM products', (err, res) => {
        if (err) throw err;
        console.table(res);
        connection.end();
    });
}

function viewLowInventory() {
    connection.query('SELECT * FROM products WHERE stock_quantity <= 5', (err, res) => {
        if (err) throw err;
        console.table(res);
        connection.end();
    });
}

function addProduct() {
    inquirer.prompt([{
        type: 'input',
        message: 'What is the name of the new product?',
        name: 'newProductName'
    },
    {
        type: 'input',
        message: 'What is the item id #?',
        name: 'newProductId'
    },
    {
        type: 'input',
        message: 'To which department would you like to add the item?',
        name: 'newProductDepartment'
    },
    {
        type: 'input',
        message: 'What is the sub-department?',
        name: 'newProductSubDepartment'
    },
    {
        type: 'input',
        message: 'What is the sales price of the item?',
        name: 'newProductPrice'
    },
    {
        type: 'input',
        message: 'What is the products stock amount?',
        name: 'newProductStock'
    }])
        .then(name => {
            let newProductName = name.newProductName;
            let newProductID = name.newProductId;
            let newProductDepartment = name.newProductDepartment;
            let newProductSubDepartment = name.newProductSubDepartment;
            let newProductPrice = name.newProductPrice;
            let newProductStock = name.newProductStock;
            connection.query('INSERT into products SET ?', { item_id: newProductID, product_name: newProductName, department_name: newProductDepartment, sub_department: newProductSubDepartment, price: newProductPrice, stock_quantity: newProductStock }, (err, res) => {
                if (err) throw err;
                viewProducts()
            });

        });
}

function updateProduct() {
    inquirer.prompt(
        [{
            type: 'input',
            message: 'What is the name of the product you want to edit?',
            name: 'updateItem'
        },
        {
            type: 'list',
            name: "choice",
            message: "What would you like to do?",
            choices: ["Change Name", "Change Department", "Change Price", "Change Stock Amount"]
        },
        ]).then(result => {
            let choice = result.choice;
            connection.query('SELECT * FROM products WHERE ?', { product_name: result.choice }, (err, res) => {
                if (err) throw err;
                console.log(choice);

            })

        })
}