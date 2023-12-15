const express=require("express");
const route=express.Router();
const update=require("../cargaDeImagen/multer");
const{mostrarPelis,cargarNuevaPelicula,eliminarPelicula,modificarPelicula,modificarPeliculaConImg}=require("../controllers/peliculasControllers")


route.get("/todasLasPeliculas",mostrarPelis);
route.post("/cargarPeli",update.single("imagen"),cargarNuevaPelicula);
route.delete("/eliminarPelicula",eliminarPelicula);

route.put("/cargarPeli/:id",modificarPelicula);//no permitimos que cambie la imagen...para ello agregamos el middleware(podriamos hacer otro mas que si ya tiene una imagen no la carge o dejarla asi)

//otra opcion
//route.put("/cargarPeli/:id",update.single("imagen"),modificarPeliculaConImg);




module.exports= route