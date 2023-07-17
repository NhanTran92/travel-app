DROP DATABASE IF EXISTS mock_travel;
CREATE DATABASE IF NOT EXISTS mock_travel;
USE mock_travel;


#create table user

DROP TABLE IF EXISTS `Users`;
CREATE TABLE `Users` (
  user_id 				INT AUTO_INCREMENT PRIMARY KEY,
  username				VARCHAR(50) NOT NULL UNIQUE KEY,
  email 				CHAR(50) NOT NULL UNIQUE CHECK (LENGTH(`email`) >= 6 AND LENGTH(`email`) <= 50),
  password 				VARCHAR(255) NOT NULL,
 ##google_id			VARCHAR(255),
 ## facebook_id 		VARCHAR(255),
  first_name 			VARCHAR(255),
  last_name 			VARCHAR(255),
  phone_number 			VARCHAR(255) NOT NULL,
  address				VARCHAR(255),
  card_id				VARCHAR(255) NOT NULL UNIQUE,
  role 					ENUM('admin', 'employee', 'user') NOT NULL,
  created_date			DATETIME NOT NULL,
  updated_at			DATETIME NOT NULL
);

DROP TABLE IF EXISTS  `Tours`;
CREATE TABLE Tours (
  tour_id 				INT AUTO_INCREMENT PRIMARY KEY,
  tour_name 			VARCHAR(255) NOT NULL,
  description 			TEXT,
  price 				DECIMAL(10, 2),
  duration 				INT,
  location				VARCHAR(255)
);

DROP TABLE IF EXISTS Hotels;
CREATE TABLE Hotels (
  hotel_id 				INT AUTO_INCREMENT PRIMARY KEY,
  hotel_name 			VARCHAR(255) NOT NULL,
  address 				VARCHAR(255),
  check_in_date 		DATE,
  check_out_date		DATE,
  price 				DECIMAL(10, 2)
);


DROP TABLE IF EXISTS Flights;
CREATE TABLE Flights (
  flight_id 			INT AUTO_INCREMENT PRIMARY KEY,
  flight_number			VARCHAR(255) NOT NULL,
  airline 				VARCHAR(255),
  departure_date 		DATETIME,
  arrival_date 			DATETIME,
  origin 				VARCHAR(255),
  destination 			VARCHAR(255),
  price 				DECIMAL(10, 2)
);

DROP TABLE IF EXISTS  `Bookings`;
CREATE TABLE Bookings (
  booking_id 			INT AUTO_INCREMENT PRIMARY KEY,
  user_id 				INT,
  tour_id 				INT,
  flight_id 			INT,
  hotel_id 				INT,
  booking_date 			DATETIME,
  status 				ENUM('pending', 'confirmed', 'cancelled') NOT NULL,
  FOREIGN KEY (user_id) REFERENCES users(user_id),
  FOREIGN KEY (tour_id) REFERENCES tours(tour_id),
  FOREIGN KEY (flight_id) REFERENCES flights(flight_id),
  FOREIGN KEY (hotel_id) REFERENCES hotels(hotel_id)
);

-- Create table Registration_User_Token
DROP TABLE IF EXISTS 	`Registration_User_Token`;
CREATE TABLE IF NOT EXISTS `Registration_User_Token` (
	token_id 			INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
	`token`	 			CHAR(36) NOT NULL UNIQUE,
	user_id				INT NOT NULL,
	`expiryDate` 		DATETIME NOT NULL
);
ALTER TABLE Registration_User_Token
ADD CONSTRAINT FK_Registration_User_Token_Users
FOREIGN KEY (user_id) REFERENCES Users(user_id);
