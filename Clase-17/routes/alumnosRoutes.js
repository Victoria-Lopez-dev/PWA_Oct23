const express=require('express');
const route= express.Router();
const{saludo,recibirInfo}= require("../controllers/alumnosControllers");
const upload=require("../multer/agregarAlumno")


route.get("/",saludo);

route.post("/nuevoAlumno",upload.single("file"),recibirInfo)

module.exports=route;