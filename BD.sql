CREATE TABLE IF NOT EXISTS `mydb`.`Users` (
    `IdUser` INT NOT NULL,
    `Nombre` VARCHAR(50) NOT NULL,
    `Ciudad` VARCHAR(50) NOT NULL,
    `Numero` DECIMAL NOT NULL,
PRIMARY KEY (`IdUser`));