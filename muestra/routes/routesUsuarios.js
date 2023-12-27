const express=require("express");
const route=express.Router();



route.get("/usuarios",controller);
route.post("/nuevoUsuario",controller);
route.delete("/eliminarUsuario",controller);

route.put("/modificarUsuarios",controller);

module.exports= route