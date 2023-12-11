const express=require('express');
const route= express.Router();
const{saludo,recibirInfo,cargarAlumno,compararPassword,buscarAlumno}= require("../controllers/alumnosControllers");
const upload=require("../multer/configMulter")


route.get("/",saludo);
route.get("/:id",buscarAlumno);
route.get("/ingresar/:pass/:id",compararPassword);//no es lo recomendable mandar la pass por el header de la peticion

route.post("/cargarImagenAlumno",upload.single("file"),recibirInfo);
route.post('/nuevoAlumno',upload.single("imagen"),cargarAlumno);


module.exports=route;