const mongoose= require("mongoose");

const usuarioSchema= new mongoose.Schema({
    nombreUsuario:String,
    passwordUsuario:String

})

module.exports= mongoose.model("usuarios",usuarioSchema);