CREATE TABLE ecoride.users(
   id SERIAL,
   username VARCHAR(50) NOT NULL,
   firstname VARCHAR(100),
   lastname VARCHAR(100),
   email VARCHAR(250) NOT NULL,
   password VARCHAR(250) NOT NULL,
   phone VARCHAR(10),
   address VARCHAR(250),
   birth_date DATE,
   photo BYTEA,
   credit DECIMAL(4,2),
   PRIMARY KEY(id),
   UNIQUE(email)
);

CREATE TABLE ecoride.configurations(
   id SERIAL,
   user_id INT NOT NULL,
   PRIMARY KEY(id),
   FOREIGN KEY(user_id) REFERENCES users(id)
);

CREATE TABLE ecoride.parametres(
   id SERIAL,
   propertie VARCHAR(50) NOT NULL,
   valeur VARCHAR(50) NOT NULL,
   configuration_id INT NOT NULL,
   PRIMARY KEY(id),
   FOREIGN KEY(configuration_id) REFERENCES configurations(id)
);

CREATE TYPE opinion_status  AS ENUM('pending', 'accepted', 'refused');

CREATE TABLE ecoride.opinions(
   id SERIAL,
   comment TEXT NOT NULL,
   note INT NOT NULL,
   status opinion_status DEFAULT('pending') NOT NULL,
   PRIMARY KEY(id)
);

CREATE TABLE ecoride.brands(
   id SERIAL,
   name VARCHAR(50) NOT NULL,
   PRIMARY KEY(id)
);


CREATE TABLE ecoride.cars(
   id SERIAL,
   model VARCHAR(50) NOT NULL,
   registration VARCHAR(15) NOT NULL,
   first_registration_date DATE NOT NULL,
   energy VARCHAR(50) NOT NULL,
   color VARCHAR(100),
   brand_id INT NOT NULL,
   user_id INT NOT NULL,
   PRIMARY KEY(id),
   FOREIGN KEY(brand_id) REFERENCES brands(id),
   FOREIGN KEY(user_id) REFERENCES users(id)
);

CREATE TABLE ecoride.roles(
   id SERIAL,
   name VARCHAR(50) NOT NULL,
   PRIMARY KEY(id)
);


CREATE TYPE carpooling_status AS ENUM('pending','in progress','done','cancelled');

CREATE TABLE ecoride.carpoolings(
   id SERIAL,
   departure_date DATE NOT NULL,
   departure_time TIME NOT NULL,
   departure_location VARCHAR(200) NOT NULL,
   end_date DATE NOT NULL,
   end_time TIME NOT NULL,
   end_location VARCHAR(200) NOT NULL,
   status carpooling_status DEFAULT('pending') NOT NULL,
   place_number SMALLINT NOT NULL,
   price DECIMAL(4,2) NOT NULL,
   car_id INT NOT NULL,
   PRIMARY KEY(id),
   FOREIGN KEY(car_id) REFERENCES cars(id)
);

CREATE TABLE ecoride.carpooling_user(
   carpooling_id INT,
   user_id INT,
   PRIMARY KEY(carpooling_id, user_id ),
   FOREIGN KEY(carpooling_id) REFERENCES carpoolings(id),
   FOREIGN KEY(user_id) REFERENCES users(id)
   
);

CREATE TABLE ecoride.role_user(
   role_id INT,
   user_id INT,
   PRIMARY KEY( role_id, user_id),
   FOREIGN KEY(role_id) REFERENCES roles(id),
   FOREIGN KEY(user_id) REFERENCES users(id)
);

CREATE TABLE ecoride.opinion_user(
   opinion_id INT,
   user_id INT,
   PRIMARY KEY(opinion_id, user_id),
   FOREIGN KEY(opinion_id) REFERENCES opinions(id),
   FOREIGN KEY(user_id) REFERENCES users(id)
);
