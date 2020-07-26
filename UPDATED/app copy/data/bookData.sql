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

INSERT INTO books(author, title, publish_date, cost)
VALUES ("N.K. Jemisin", "The City We Became", "March 24, 2020", 24.99 );

