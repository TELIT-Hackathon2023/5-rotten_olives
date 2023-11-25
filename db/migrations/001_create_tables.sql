-- 001_create_tables.sql

CREATE DATABASE parking_db;
USE parking_db;

CREATE TABLE employee
(
  employee_id INT NOT NULL,
  firstname VARCHAR(256) NOT NULL,
  lastname VARCHAR(256) NOT NULL,
  email VARCHAR(256) NOT NULL,
  phone VARCHAR(32) NOT NULL,
  car_licenses JSON,
  PRIMARY KEY (employee_id)
);

CREATE TABLE sector
(
  sector_id INT NOT NULL,
  secotr_name VARCHAR(256) NOT NULL,
  PRIMARY KEY (sector_id)
);

CREATE TABLE spot
(
  spot_id INT NOT NULL,
  spot_type INT NOT NULL,
  spot_state INT NOT NULL,
  spot_number INT NOT NULL,
  lon FLOAT NOT NULL,
  lat FLOAT NOT NULL,
  sector_id INT NOT NULL,
  PRIMARY KEY (spot_id),
  FOREIGN KEY (sector_id) REFERENCES sector(sector_id)
);

CREATE TABLE reservation
(
  reservation_id INT NOT NULL,
  start_time DATE NOT NULL,
  end_time DATE NOT NULL,
  created DATE NOT NULL,
  employee_id INT NOT NULL,
  spot_id INT NOT NULL,
  vehicle_licesne VARCHAR(16) NOT NULL,
  PRIMARY KEY (reservation_id),
  FOREIGN KEY (employee_id) REFERENCES employee(employee_id),
  FOREIGN KEY (spot_id) REFERENCES spot(spot_id)
);