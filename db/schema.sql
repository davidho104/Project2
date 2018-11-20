--- Schema
DROP DATABASE IF EXISTS burgers_db;

CREATE DATABASE burgers_db;
USE burgers_db;


-- note: you should let sequelize to generate the table instead

CREATE TABLE `burgerseqs` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `burger_name` varchar(255) DEFAULT NULL,
  `devoured` tinyint(1) DEFAULT '0',
  `createdAt` datetime DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`)
 }; 