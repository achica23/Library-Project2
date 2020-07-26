DROP DATABASE IF EXISTS book_info;
CREATE DATABASE books_info;

USE books_info;

CREATE TABLE books_list (
	id INT NOT NULL auto_increment,
    thumbnail varchar(255) not null,
    author varchar(255) not null,
    title varchar(255) not null,
    publish_date varchar(45) not null,
    cost int default 0,
    primary key (id)
);

SELECT * FROM books;

insert into book_list (image_ID, title, author, publish_date)
values ("", "The Order", "Daniel Silva", "July 14, 2020");
("", "Peace Talks", "Jim Butcher", "July 14,2020"),
("", "The Vanishing Half", "Brit Bennett", "June 2, 2020"),
("", "28 Summers", "Elin Hilderbrand", "June 16, 2020"),
("", "Where the Crawdads Sing", "Deli Ownes", "August 14, 2018");