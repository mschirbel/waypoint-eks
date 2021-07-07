create table IF NOT EXISTS books(
   id INT NOT NULL AUTO_INCREMENT,
   title VARCHAR(200) NOT NULL,
   author VARCHAR(1000) NOT NULL,
   PRIMARY KEY ( id )
);
