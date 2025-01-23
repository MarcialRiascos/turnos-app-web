
SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema turnos_app
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema turnos_app
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `turnos_app` DEFAULT CHARACTER SET utf8 ;
USE `turnos_app` ;

-- -----------------------------------------------------
-- Table `turnos_app`.`tipo_documento`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `turnos_app`.`tipo_documento` ;

CREATE TABLE IF NOT EXISTS `turnos_app`.`tipo_documento` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `tipo_documento` VARCHAR(45) NOT NULL,
  `created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `turnos_app`.`sexo`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `turnos_app`.`sexo` ;

CREATE TABLE IF NOT EXISTS `turnos_app`.`sexo` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `sexo` VARCHAR(45) NOT NULL,
  `created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `turnos_app`.`rol`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `turnos_app`.`rol` ;

CREATE TABLE IF NOT EXISTS `turnos_app`.`rol` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `rol` VARCHAR(45) NOT NULL,
  `created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `turnos_app`.`estado`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `turnos_app`.`estado` ;

CREATE TABLE IF NOT EXISTS `turnos_app`.`estado` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `estado` VARCHAR(45) NOT NULL,
  `created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `turnos_app`.`administrador`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `turnos_app`.`administrador` ;

CREATE TABLE IF NOT EXISTS `turnos_app`.`administrador` (
   `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NOT NULL,
  `apellido` VARCHAR(45) NOT NULL,
  `tipo_documento_id` INT UNSIGNED NOT NULL,
  `documento_identidad` VARCHAR(45) NOT NULL,
  `direccion` VARCHAR(45) NOT NULL,
  `telefono` VARCHAR(45) NOT NULL,
  `telefono_dos` VARCHAR(45) NULL,
  `sexo_id` INT UNSIGNED NOT NULL,
  `email` VARCHAR(45) NULL,
  `fecha_nacimiento` DATE NULL,
  `password` VARCHAR(255) NOT NULL,
  `rol_id` INT UNSIGNED NOT NULL,
  `estado_id` INT UNSIGNED NOT NULL,
  `created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  INDEX `fk_administrador_tipo_documento_idx` (`tipo_documento_id` ASC),
  INDEX `fk_administrador_sexo1_idx` (`sexo_id` ASC),
  INDEX `fk_administrador_rol1_idx` (`rol_id` ASC),
  INDEX `fk_administrador_estado1_idx` (`estado_id` ASC),
  CONSTRAINT `fk_administrador_tipo_documento`
    FOREIGN KEY (`tipo_documento_id`)
    REFERENCES `turnos_app`.`tipo_documento` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_administrador_sexo1`
    FOREIGN KEY (`sexo_id`)
    REFERENCES `turnos_app`.`sexo` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_administrador_rol1`
    FOREIGN KEY (`rol_id`)
    REFERENCES `turnos_app`.`rol` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_administrador_estado1`
    FOREIGN KEY (`estado_id`)
    REFERENCES `turnos_app`.`estado` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `turnos_app`.`servicio`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `turnos_app`.`servicio` ;

CREATE TABLE IF NOT EXISTS `turnos_app`.`servicio` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `servicio` VARCHAR(45) NOT NULL,
  `descripcion` TEXT NULL,
  `created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `turnos_app`.`turno`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `turnos_app`.`turno` ;

CREATE TABLE IF NOT EXISTS `turnos_app`.`turno` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `servicio_id` INT UNSIGNED NOT NULL,
  `administrador_id` INT UNSIGNED NOT NULL,
  `nombre` VARCHAR(45) NOT NULL,
  `apellido` VARCHAR(45) NULL,
  `telefono` VARCHAR(45) NOT NULL,
  `telefono_dos` VARCHAR(45) NULL,
  `fecha_turno` DATETIME NOT NULL,
  `estado_id` INT UNSIGNED NOT NULL,
  `created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  INDEX `fk_turno_servicio1_idx` (`servicio_id` ASC),
  INDEX `fk_turno_administrador1_idx` (`administrador_id` ASC),
  INDEX `fk_turno_estado1_idx` (`estado_id` ASC),
  CONSTRAINT `fk_turno_servicio1`
    FOREIGN KEY (`servicio_id`)
    REFERENCES `turnos_app`.`servicio` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_turno_administrador1`
    FOREIGN KEY (`administrador_id`)
    REFERENCES `turnos_app`.`administrador` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_turno_estado1`
    FOREIGN KEY (`estado_id`)
    REFERENCES `turnos_app`.`estado` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;