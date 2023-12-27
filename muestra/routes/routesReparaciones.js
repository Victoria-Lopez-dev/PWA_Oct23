const express=require("express");
const route=express.Router();



route.get("/todosReparaciones",controller);
route.post("/nuevoReparacion",controller);
route.delete("/eliminarReparacion",controller);

route.put("/modificarReparaciones",controller);

module.exports= route