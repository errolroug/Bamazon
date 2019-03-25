DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE bamazon;
USE bamazon;

CREATE TABLE products(
  id INT(11) NOT NULL AUTO_INCREMENT ,
  product_name VARCHAR(100) NOT NULL,
  department_name VARCHAR(100) NOT NULL,
  price DECIMAL(10) NOT NULL,
  stock_quantity INTEGER(10) NOT NULL,
  PRIMARY KEY (id)
);


INSERT INTO products (product_name, department_name, price, stock_quantity) values ('airpods', 'Electronics', 159.00, 100);
INSERT INTO products (product_name, department_name, price, stock_quantity) values ('iPhone XR', 'Electronics', 749.00, 25);
INSERT INTO products (product_name, department_name, price, stock_quantity) values ('Harry Potter and the Half Blood Prince','Books', 59.99, 35);
INSERT INTO products (product_name, department_name, price, stock_quantity) values ('couch','Furniture',569.99, 3);
INSERT INTO products (product_name, department_name, price, stock_quantity) values ("silica gels",'Miscellaneous',29.98, 300);
INSERT INTO products (product_name, department_name, price, stock_quantity) values ('nutribullet','Appliances',239.49,25);
INSERT INTO products (product_name, department_name, price, stock_quantity) values ('American Eagle Jeans','Apparel',45.95, 20);
INSERT INTO products (product_name, department_name, price, stock_quantity) values ('Pacsun T-shirt','Apparel',19.99, 50);
INSERT INTO products (product_name, department_name, price, stock_quantity) values ('H&M sweater','Apparel',24.95, 62);
INSERT INTO products (product_name, department_name, price, stock_quantity) values ('toaster oven','Appliances',59.99, 12);

SELECT * FROM products;




