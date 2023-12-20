

export default function SeccionFormulario() {

const cargarPelicula=async(e)=>{
    e.preventDefault();
    const formInfo=new FormData(e.target)//obtengo la info del formulario
    const poster=e.target[4].value

    formInfo.append("imagen",poster)//agregar la file adjunto a la info del formulario (para solucionar el problema de los boundary del content-type multipart/form-data)
    //headers:{"Content-Type":"multipart/form-data boundary=---MyBoundryes"},

    let respuesta=await fetch("http://localhost:4300/cargarPeli",{
        method:"post",
        body:formInfo
    })
    .then((resp)=>{return resp.json})//transforma la info recibida de la API
    .then((data)=>console.log(data))//la mostramos por la consola
    .catch((err)=>console.log(err))

    //if(respuesta){...}

}

return(
   <form onSubmit={(event)=>cargarPelicula(event)}>
        <label className="form-label mt-3" htmlFor="titulo">Titulo de la pelicula</label>
        <input type="text" className="form-control" id="titulo" name="titulo"/>

        <label className="form-label mt-3" htmlFor="genero">Genero del a pelicula</label>
        <select className="form-select" id="genero" name="genero">
            <option value="Documental">Documental</option>
            <option value="Aventura"> Aventura</option>
            <option value="Accion">Accion</option>
            <option value="Drama">Drama</option>
            <option value="Comedia">Comedia</option>
            <option value="Animacion">Animacion</option>
        </select>

        <label className="form-label mt-3" htmlFor="duracion">Duracion de la pelicula</label>
        <input type="text" className="form-control" id="duracion" name="duracion"/>

        <label className="form-label mt-3" htmlFor="tickets" >Cantidad de tickets disponibles</label>
        <input type="text" className="form-control" id="tickets" name="tickets"/>
        
        <label className="form-label mt-3" htmlFor="poster">Poster de la pelicula</label>
        <input className="ms-2" type="file" id="poster" name="imagen"/>

        <input className="btn btn-success d-block" type="submit"  value={"Cargar"}/>

   </form>
)

}