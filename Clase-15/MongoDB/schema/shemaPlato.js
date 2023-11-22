const mongoose= require("mongoose");

const platoSchema= new mongoose.Schema({
    nombrePlato:String,
    precio:Number,
    stock:Number,
    categoria:String

})

module.exports= mongoose.model("platos",platoSchema);