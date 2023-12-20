import { useEffect, useState } from "react";


export default function SeccionFormulario() {

    const[metodo,setMetodo]=useState("");
    const[formData,setFormData]=useState({})

const cargarPelicula=async(e)=>{
    e.preventDefault();

    let idPeli='';
    let formInfo='';
    console.log(metodo)
    if(metodo === "post"){
        formInfo=new FormData(e.target)//obtengo la info del formulario
        const poster=e.target[4].value
        formInfo.append("imagen",poster)//agregar la file adjunto a la info del formulario (para solucionar el problema de los boundary del content-type multipart/form-data)
    //headers:{"Content-Type":"multipart/form-data boundary=---MyBoundryes"},
        
    }else{
        formInfo=JSON.stringify(formData)
        idPeli=formData.id
        console.log(formInfo)
    }
   
    let respuesta=await fetch(`http://localhost:4300/cargarPeli/${idPeli}`,{
        method:metodo,
        body:formInfo
    })
    .then((resp)=>{return resp.json})//transforma la info recibida de la API
    .then((data)=>{console.log(data); 
        if(metodo =="put"){localStorage.removeItem("infoTarjeta")}
        })//la mostramos por la consola
    .catch((err)=>console.log(err))

    //if(respuesta){...}

}

const cambioValor=(e)=>{
   
    console.dir(e.target)
    setFormData({...formData,[e.target.name]:e.target.value})//estamos seteando(actualizando) la informacion del objeto que usamos en el value de cada input , con el nuevo valor que vamos tipeando
    console.log(formData)
}

useEffect(()=>{
    //traiga la informacion del browser guardada por localStorage
    let data=localStorage.getItem("infoTarjeta");//traigo el JSON que guardamos en el localStorage o un null si es que no se guardo nada.
    if(data === null){
        setMetodo("post")
    }else{
        setMetodo("put")
        data=JSON.parse(data)
        setFormData(data)

       console.log(data) 
    }
    

},[])//apenas se renderize el componente del formulario
return(
   <form onSubmit={(event)=>cargarPelicula(event)}>
        <label className="form-label mt-3" htmlFor="titulo">Titulo de la pelicula</label>
        <input type="text" className="form-control" id="titulo" name="titulo" value={formData.titulo} onChange={(event)=>cambioValor(event)}/>

        <label className="form-label mt-3" htmlFor="genero">Genero del a pelicula</label>
        <select className="form-select" id="genero" name="genero" value={formData.genero} onChange={(event)=>cambioValor(event)}>
            <option value="Documental">Documental</option>
            <option value="Aventura"> Aventura</option>
            <option value="Accion">Accion</option>
            <option value="Drama">Drama</option>
            <option value="Comedia">Comedia</option>
            <option value="Animacion">Animacion</option>
        </select>

        <label className="form-label mt-3" htmlFor="duracion">Duracion de la pelicula</label>
        <input type="text" className="form-control" id="duracion" name="duracion" value={formData.duracion} onChange={(event)=>cambioValor(event)}/>

        <label className="form-label mt-3" htmlFor="tickets" >Cantidad de tickets disponibles</label>
        <input type="text" className="form-control" id="tickets" name="tickets" value={formData.tickets} onChange={(event)=>cambioValor(event)}/>
        
        <label className="form-label mt-3" htmlFor="poster">Poster de la pelicula</label>
        <input className="ms-2" type="file" id="poster" name="imagen" />

        <input className="btn btn-success d-block" type="submit"  value={"Cargar"}/>

   </form>
)

}