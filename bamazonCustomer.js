const mysql = require("mysql");
var inquirer = require('inquirer');

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password",
    database: "bamazon",
    insecureAuth: true
});

// console.log(connection);

connection.connect(err => {
    if (err) throw err;
    // console.log(`you are connected to thread ID: ${connection.threadID}`);
    connection.end();
})

function runID() {
    inquirer.prompt({
        type: 'list',
        message: "What is the product ID of your item?",
        choices: ['a', 'b', 'exit'],
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