import { useState ,useEffect, Fragment} from 'react';

import Tarjeta from '../Tarjeta/Tarjeta';


export default function SeccionTarjetas() {
    const [peliculas,setPeliculas]=useState([{id:"A"}]);
    const[peliEliminada,setPeliEliminada]=useState(false)

    //console.log(peliculas) -> vemos el estado peliculas
    const traerInfo=async()=>{
        let info=  await fetch("http://localhost:4300/todasLasPeliculas")
            .then((data)=>{return data.json()})
            .then((resp)=>{setPeliculas(resp)})//setteamos la info de la DB en la variable peliculas
            .catch((error)=>{console.log(error)})
        
        return info
    }

    useEffect(()=>{
        traerInfo()
    },[]);

    return(
        <Fragment>
            {peliEliminada === false? 
                <div className="row gap-3">
                    {peliculas.map((peli)=>{
                        return  <Tarjeta key={peli.id} data={peli} setPeliEliminada={setPeliEliminada}/>})
                    }
                </div>:
                <p className='alert-success text-white text-center'> PELICULA ELIMINADA!!</p>//mensaje que aparece por 2segundos cuando se elimina la imagen
            }
        </Fragment>
   
        
    )

}