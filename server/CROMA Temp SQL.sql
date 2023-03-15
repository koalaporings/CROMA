CREATE TABLE users (
  id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  first_name VARCHAR(50),
  last_name VARCHAR(50),
  email VARCHAR(50),
  password VARCHAR(50)
);

INSERT INTO users (first_name, last_name, email, password) VALUES
('John', 'Doe', 'john.doe@example.com', 'password1'),
('Jane', 'Doe', 'jane.doe@example.com', 'password2'),
('Bob', 'Smith', 'bob.smith@example.com', 'password3'),
('Alice', 'Johnson', 'alice.johnson@example.com', 'password4'),
('Mike', 'Brown', 'mike.brown@example.com', 'password5');

INSERT INTO users (first_name, last_name, email, password) VALUES
('everything', 'daijobu', 'edaijobu@email.com', 'daijobu');

ALTER TABLE `croma`.`users` 
AUTO_INCREMENT = 1 ;