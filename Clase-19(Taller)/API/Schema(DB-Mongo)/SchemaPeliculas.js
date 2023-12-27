const mongoose= require("mongoose");

const peliculaSchema= new mongoose.Schema({
    titulo:String,
    genero:String,
    duracion:String,
    tickets:String,
    imagen:String

})

module.exports= mongoose.model("peliculas",peliculaSchema);

//armamos el schema para poder llamarlo desde los controllers para acceder a los documentos de dichaDb