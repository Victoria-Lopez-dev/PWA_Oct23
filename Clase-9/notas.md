## Comandos Mongo

## leer - buscar
db.coleccion.find() | db.coleccion.findOne({filtro})  | db.coleccion.find({filtro})

## crear documento

db.coleccion.insertOne({datos}) | db.coleccion.insertMany([{datos}])

## actualizar
db.coleccion.updateOne({filtro},[estados de agregacion])
db.coleccion.updateMany({filtro},[estados de agregacion])

estados de agregacion:
{$set:{prop:valor}}
{$unset:["prop"]}


## eliminar documentos

db.coleccion.deleteOne({filtro}) | db.coleccion.deleteMany({filtro})


## operadores de Mongo

# operadores de comparacion

$eq  -> es igual a (==)
$gt  -> es mayor a (>)
$gte -> es mayor o igual a (>=)
$lt  -> es menor a (< )
$lte -> es menor o igual a (<=)
$ne -> no es igual a (!=)

$nin -> para arrays, con valores que no se encuentran ( seria un un filter con un distinto )
$in -> para arrays, devuelve la lista de valores que continen estos mismos
ejemplo
db.coleccion.find({campo:{$op:valor}})

# operadores logicos -> opL

$and  
$or
$not

ejemplo

db.coleccion.find({$opL:[{campos},{campos}]})


## links
https://www.mongodb.com/docs/manual/reference/operator/query-comparison/
https://www.mongodb.com/docs/manual/reference/operator/query-logical/
https://www.mongodb.com/docs/manual/reference/method/js-database/


## notas
Se pasa para el Martes 7/11 19hs taller (optativo ) de typescript(ejercitacion)

La profe se compromete a hoy terminar de cargar notas/devoluciones

Viernes 3/11 clase 9-12hs recupero (ejercitacion Mongo DB )

Por la tarde se carga clase de hoy en el link de grabaciones como en el drive
