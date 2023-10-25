# Lenguaje SQL

## Tipo de datos -> configurar el campo de la tabla

VARCHAR -> string ( caracteres) ""

INT | INTEGER -> numbers enteros
FLOAT DECIMAL

BOOLEAN -> booleanos ( verdadero falso) -> 0 -1


DATE - TEXT ...

# Restricciones
NULL | NOT NULL -> que indica si ese campo puede tener un valor nulo o no como defecto

DEFAULT -> definir un valor por defecto del campo si es que no lo ingreso en un registro

AUTO-INCREMENT -> valor que va incrementando por cada regitro 


## Como creo una DB y una tabla con SQL???

Comandos DML y DDL

## "paso a paso"

1- crear una DB
2- tabla/s
3- manipular el contenido(cargar, actualizar ,eliminar...)

## Comandos DDL

CREATE DATABASE nombreDB

CREATE TABLE nombreTabla (campos  tipoDato(cant) restricciones,
campos tipoDato(cant) restricciones, 
campos tipoDato(cant) restricciones)


# Ejemplo desde la DB(dentro de la DB)

CREATE TABLE personal(nombre VARCHAR(200) NOT NULL ,
                      cargo VARCHAR(100) NULL ,
                      email VARCHAR(210) DEFAULT "sin email",
                      edad INT(3) NOT NULL)

Ejemplo desde el servidor (localhost)

CREATE TABLE Veterinaria.pacientes (nombre VARCHAR(100) DEFAULT "sin nombre",titular VARCHAR(200) NOT NULL)


# Para modificar columnas 

ALTER TABLE nombreTabla MODIFY COLUMN campo restricciones y valores..
ALTER TABLE nombreTabla ADD COLUMN campo restricciones y valores..
ALTER TABLE nombreTabla DROP COLUMN campo

# primary key

hacer que un campo funcione como referencia 

Ejemplo
legajo INT(5) PRIMARY KEY AUTO_INCREMENT=11111;
legajo INT(5) PRIMARY KEY AUTO_INCREMENT;
## Comandos DML

# agregar info a la tabla

INSERT INTO nombreDB.nombreTabla


INSERT INTO nombreTabla(campos)VALUES(registro),(registro)

# modificar info de una tabla


UPDATE nombreTabla SET campo=nuevVvalor WHERE  campoReferencia=valorReferencia;

Ejemplo:

UPDATE personal SET legajo=12339 WHERE legajo=1 

# llamar a un registro

Trae  todo el registro 

SELECT * FROM nombreTabla WHERE campo=valor


Trae solo los valores de los campos

SELECT campo,campo  FROM nombreTabla WHERE campo=valor

Trae solo los que complen con todas las condiciones 
SELECT *  FROM nombreTabla WHERE campo=valor AND campo=valor 


# elimino informacion

solo elimina ese registro

DELETE FROM nombreTabla WHERE campo=valor


elimina toda la info de la tabla
DELETE FROM nombreTabla

No te olvides de poner el WHERE en el DELETE 
