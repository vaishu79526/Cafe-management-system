
-- Create Database
CREATE DATABASE cafe_management;

-- Use the database
USE cafe_management;

-- Create Users table
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL,
    password VARCHAR(100) NOT NULL,
    role VARCHAR(20) NOT NULL
);

-- Create Menu table
CREATE TABLE menu (
    id INT AUTO_INCREMENT PRIMARY KEY,
    item_name VARCHAR(100) NOT NULL,
    price DECIMAL(10, 2) NOT NULL
);

-- Sample data for Users table
INSERT INTO users (username, password, role) VALUES ('admin', 'admin123', 'ADMIN');

-- Sample data for Menu table
INSERT INTO menu (item_name, price) VALUES ('Coffee', 50), ('Sandwich', 100);
