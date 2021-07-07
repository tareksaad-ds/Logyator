//CRAETE_COMPANY_TABLE

CREATE TABLE company (
   id BIGSERIAL NOT NULL PRIMARY KEY, 
   name VARCHAR(50) NOT NULL,
   shipping_type VARCHAR(50) NOT NULL, 
   avg_period INT NOT NULL,
   avg_payment INT NOT NULL
);
SELECT * FROM company;
//ADD_COMPANY

INSERT INTO company ( name , shipping_type , avg_period , avg_payment) values ( 'msc' , 'sea' , 4 , 50);

//CREATE_CUSTOMER_TABLE

CREATE TABLE customer (
   id BIGSERIAL NOT NULL PRIMARY KEY,
   name VARCHAR(50) NOT NULL,
   address VARCHAR(50) NOT NULL, 
   phone BIGINT NOT NULL
);

//ADD_CUSTOMER

INSERT INTO customer ( name , address , email) values ( 'mahmoud hassan' , '33st seif sidi beshr' , 'email@gmail.com' );

ALTER TABLE customer
  DROP COLUMN phone;

ALTER TABLE customer
  ADD email VARCHAR(40); 

//CREATE_SERVICES_TABLE

CREATE TABLE service (
   id BIGSERIAL NOT NULL PRIMARY KEY,
   company_id BIGINT NOT NULL REFERENCES company(id),
   customer_id BIGINT NOT NULL REFERENCES customer(id),
   quantity INT NOT NULL ,
   payment INT NOT NULL
);

//ADD_ORDER 

INSERT INTO service ( company_id , customer_id , quantity , payment ) values ( 1 , 1 , 4 , 3000);

//ORDER_SHEET

SELECT  service.id as order_id ,customer_id, customer.name as customer_name, company.name as company_name, company.shipping_type, quantity , payment FROM service LEFT JOIN company on service.company_id = company.id LEFT JOIN customer on service.customer_id = customer.id ORDER BY service.id;