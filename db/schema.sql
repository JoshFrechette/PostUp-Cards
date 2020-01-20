  
-- create database and table schema here



### Schema

CREATE DATABASE postup_cards;

USE postup_cards;

-- CREATE TABLE playerpersonalinfo
-- (
-- 	Id int NOT NULL AUTO_INCREMENT,
--     Player_Id INT Not null,
-- 	Player_Name varchar(255) NOT NULL,
--     Player_Height INT,
--     Player_Weight INT,
--     Player_Team VARCHAR(50),
--     Player_City  VARCHAR(50),
-- 	PRIMARY KEY (id)
    
-- );

-- create table users 
-- (
--     id int primary key auto_increment,
--     name varchar(30), 
--     password varchar(30) 
-- );

-- CREATE TABLE playerStats
-- (
--     Id INT NOT NULL AUTO_INCREMENT,
--     Fgm INT,
--     Fga INT,
--     Fg3m INT,
--     Fg3a INT,
--     Ftm INT,
--     Fta INT,
--     Oreb INT,
--     Dreb INT,
--     Ast INT,
--     Stl INT,
--     Blk INT,
--     Pts INT,
--     Avg int,
--     primary key (Id),
--    FOREIGN KEY (Id) REFERENCES playerpersonalinfo(Id)
-- );