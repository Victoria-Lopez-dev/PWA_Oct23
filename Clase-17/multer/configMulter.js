const multer= require('multer');

//si no queremos cambiar el nombre con el que viene:

//const upload=multer({dest:"./imagenes"})// el documento que recibimos lo guardamos en la carpeta imagenes

//si queremos personalizar el nombre del archivo para evitar confuciones

const storage=multer.diskStorage({
    destination:(req,file,callback)=>{
        callback(null,"./imagenes")
    },
    filename:(req,file,callback)=>{
        const ext=file.originalname.split(".").pop(); //guardamos la extencion del documento

        const nuevoFileName="imagen-"+Date.now()+"."+ext;
        // const nuevoFileName=`imagen - ${Date.now()}.${ext}`; armamos el nuevo nombre del archivo

        callback(null,nuevoFileName)
    }
});


const upload=multer({storage})

module.exports=upload;

//imagen.blabla.jpg -> ["imagen","blabla","jpg"]
//imasjdhflkhj-sjdhfks.jpg
//nombreArchivo.PNG -> toLowerCase()