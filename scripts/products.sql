DROP TABLE PRODUCTS;

CREATE TABLE PRODUCTS (
  id SERIAL PRIMARY KEY NOT NULL,
  name CHARACTER varying(20) UNIQUE NOT NULL,
  price INTEGER NOT NULL,
  currency CHARACTER varying(3) NOT NULL,
  description CHARACTER varying(200)
);

INSERT INTO PRODUCTS (NAME, PRICE, CURRENCY, DESCRIPTION)
VALUES
('Producto 1', 50000, 'COP', 'Product number 1'),
('Producto 2', 84000, 'COP', 'Product number 2'),
('Producto 3', 98000, 'COP', 'Product number 3'),
('Producto 4', 56000, 'COP', 'Product number 4'),
('Producto 5', 60000, 'COP', 'Product number 5');

SELECT * FROM PRODUCTS