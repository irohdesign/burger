CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers (
    id int auto-increment,
    primary key (id),
    burger_name VARCHAR(100) not null,
    devoured boolean
);

select * from burgers;