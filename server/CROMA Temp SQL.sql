CREATE TABLE users (
  id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  first_name VARCHAR(50),
  last_name VARCHAR(50),
  email VARCHAR(50),
  password VARCHAR(50)
);

INSERT INTO users (id, first_name, last_name, email, password) VALUES
(1, 'John', 'Doe', 'john.doe@example.com', 'password1'),
(2, 'Jane', 'Doe', 'jane.doe@example.com', 'password2'),
(3, 'Bob', 'Smith', 'bob.smith@example.com', 'password3'),
(4, 'Alice', 'Johnson', 'alice.johnson@example.com', 'password4'),
(5, 'Mike', 'Brown', 'mike.brown@example.com', 'password5');

