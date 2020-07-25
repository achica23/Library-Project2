DROP DATABASE IF EXISTS books_DB;
CREATE DATABASE books_DB;

USE books_DB;

CREATE TABLE books (
	id INT NOT NULL auto_increment,
    thumbnail varchar(255) not null,
    author varchar(255) not null,
    title varchar(255) not null,
    publish_date varchar(45) not null,
    cost int default 0,
    primary key (id)
);

SELECT * FROM books;

INSERT INTO books(thumbnail, author, title, publish_date, cost)
VALUES ("https://images-na.ssl-images-amazon.com/images/I/51aTZ37G1rL._SX327_BO1,204,203,200_.jpg", "N.K. Jemisin", "The City We Became", "March 24, 2020", 24.99 );