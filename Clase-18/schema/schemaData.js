const mongoose= require("mongoose");

const dataSchema= new mongoose.Schema({
    nombrePlato:String,
    precio:Number,
    stock:Number,
    categoria:String

})

module.exports= mongoose.model("data",dataSchema);