const express=require('express');
const route= express.Router();
const{saludo,recibirInfo,cargarAlumno,compararPassword}= require("../controllers/alumnosControllers");
const upload=require("../multer/configMulter")


route.get("/",saludo);
route.get("/ingresar/:pass/:id",compararPassword);

route.post("/cargarImagenAlumno",upload.single("file"),recibirInfo);
route.post('/nuevoAlumno',cargarAlumno);


module.exports=route;