DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE bamazon;
USE bamazon;

CREATE TABLE products(
id INTEGER AUTO_INCREMENT NOT NULL,
item_id VARCHAR (50) NOT NULL,
product_name VARCHAR(99) NOT NULL,
department_name VARCHAR (30) NOT NULL,
price DECIMAL (50,2) NOT NULL,
stock_quantity INT UNSIGNED NOT NULL,
PRIMARY KEY (id, product_name)
);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES ('MBJL-01', 'Mens Barcelona Jersey Large', 'Sports', 49.99, 25) ;

SELECT * FROM products;

