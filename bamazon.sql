DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE bamazon;
USE bamazon;

CREATE TABLE products
(
    id INTEGER
    AUTO_INCREMENT NOT NULL,
item_id VARCHAR
    (50) NOT NULL,
product_name VARCHAR
    (99) NOT NULL,
department_name VARCHAR
    (30) NOT NULL,
sub_department VARCHAR
    (30),
price DECIMAL
    (50,2) NOT NULL,
stock_quantity INT UNSIGNED NOT NULL,
PRIMARY KEY
    (id, item_id, product_name)
);

    INSERT INTO products
        (item_id, product_name, department_name, sub_department, price, stock_quantity)
    VALUES
        ('MBJL-01', 'Mens Barcelona Jersey Large', 'Sports', 'Soccer', 49.99, 25)
    ;

    INSERT INTO products
        (item_id, product_name, department_name, sub_department, price, stock_quantity)
    VALUES
        ('MBJM-02', 'Mens Barcelona Jersey Medium', 'Sports', 'Soccer', 49.99, 20)
    ;

    INSERT INTO products
        (item_id, product_name, department_name, sub_department, price, stock_quantity)
    VALUES
        ('MRMJS-03', 'Mens Real Madrid Jersey Small', 'Sports', 'Soccer', 49.99, 32)
    ;

    INSERT INTO products
        (item_id, product_name, department_name, sub_department, price, stock_quantity)
    VALUES
        ('MRMJL-01', 'Mens Real Madrid Jersey Large', 'Sports', 'Soccer', 49.99, 0)
    ;

    INSERT INTO products
        (item_id, product_name, department_name, sub_department, price, stock_quantity)
    VALUES
        ('WSFGXS-04', 'Womens SF Giants T-Shirt X-S', 'Sports', 'Baseball', 29.99, 18)
    ;

    INSERT INTO products
        (item_id, product_name, department_name, sub_department, price, stock_quantity)
    VALUES
        ('WSFGKC-19', 'Kids SF Giants Cap', 'Sports', 'Baseball', 18.00, 5)
    ;

    INSERT INTO products
        (item_id, product_name, department_name, sub_department, price, stock_quantity)
    VALUES
        ('AI-XS-256', 'Apple iPhone XS Max', 'Electronics', 'Mobile', 1029.99, 7)
    ;

    INSERT INTO products
        (item_id, product_name, department_name, sub_department, price, stock_quantity)
    VALUES
        ('1P-7T-MC', 'One Plus 7T Mclaren', 'Electronics', 'Mobile', 999.99, 1)
    ;

    INSERT INTO products
        (item_id, product_name, department_name, sub_department, price, stock_quantity)
    VALUES
        ('NSD-02', 'Nest Smoke Detector Gen2', 'Electronics', 'IOT', 119.00, 27)
    ;

    INSERT INTO products
        (item_id, product_name, department_name, sub_department, price, stock_quantity)
    VALUES
        ('NSD-03', 'Nest Smoke Detector Gen3', 'Electronics', 'IOT', 89.00, 15)
    ;

    INSERT INTO products
        (item_id, product_name, department_name, sub_department, price, stock_quantity)
    VALUES
        ('GHM-04', 'Google Home Mini  Gen4', 'Electronics', 'IOT', 25.00, 75)
    ;

    UPDATE products 
SET stock_quantity= 28 
WHERE product_name='Mens Barcelona Jersey Large';

    SELECT *
    FROM products;


