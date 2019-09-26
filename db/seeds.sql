USE burgers_db;

INSERT INTO burgers 
(burger_name, devoured, devoured_date, create_date) 
VALUES 
("cheeseburger", 0 ,NULL, CURRENT_TIMESTAMP),
("hamburger", 0,NULL, CURRENT_TIMESTAMP),
("chickenburger", 0,NULL, CURRENT_TIMESTAMP),
("fishburger", 0,NULL, CURRENT_TIMESTAMP);