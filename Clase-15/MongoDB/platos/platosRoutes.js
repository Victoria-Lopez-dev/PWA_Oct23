const express=require('express');
const route=express.Router();
const{traerPlatos,cargarPlato,traerEnsalada}=require('./platosControllers')

route.get("/",traerPlatos)
route.get("/:categoria",traerEnsalada)

route.post("/",cargarPlato)

module.exports=route;