create table IF NOT EXISTS stocks(
   id serial PRIMARY KEY,
   ticker VARCHAR ( 6 ) NOT NULL,
   price FLOAT(3) NOT NULL
);