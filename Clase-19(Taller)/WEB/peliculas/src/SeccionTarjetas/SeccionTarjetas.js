import { useState ,useEffect, Fragment} from 'react';

import Tarjeta from '../Tarjeta/Tarjeta';


export default function SeccionTarjetas({setMostrarPelis,setMostrarForm}) {
    const [peliculas,setPeliculas]=useState([]);
    const[peliEliminada,setPeliEliminada]=useState(false);
    const[peliEliminadaID,setPeliEliminadaID]=useState('');

    //console.log(peliculas) -> vemos el estado peliculas
    const traerInfo=async()=>{
        let info=  await fetch("http://localhost:4300/todasLasPeliculas")
            .then((data)=>{return data.json()})
            .then((resp)=>{setPeliculas(resp)})//setteamos la info de la DB en la variable peliculas
            .catch((error)=>{console.log(error)})
        
        return info
    }


//Alternativa si no queremos traer nuevamente las peliculas desde la API
    const filtrarPelis=(peliId)=>{
        let nuevaListaPelis=peliculas.filter((peli)=>{return peli.id !== peliId});
        setPeliculas(nuevaListaPelis)
    }//filtra entre las peliculas que tiene el estado "peliculas" las que no tienen el id de la eliminada y la colocamos a esta nueva lista como el nuevo estado de "peliculas"

    useEffect(()=>{
        filtrarPelis(peliEliminadaID)
    },[peliEliminadaID])//ejecuta la funcion solo cuando cambia peliElimandaID

    //traigo de nuevo las peliculas de la API para actualizar la que eliminamos
    // useEffect(()=>{
    //    if(peliEliminada == true){
    //         traerInfo()
    //    }
    // },[peliEliminada]);//agregamos un useEffect que se ejecute cuando cambie el estado de peliEliminada para que vuelva a traer actualizada la informacion desde la API (alternativa; lograr traer desde el componente de Tarjeta su id, para hacer un filtro y sacar dicha pelicula del estado pelicula)
 useEffect(()=>{
        traerInfo();
    },[]);

    return(
        <Fragment>
            {peliEliminada === false? 
                <div className="row gap-3">
                    {peliculas.map((peli)=>{
                        return  <Tarjeta key={peli.id} data={peli} setPeliEliminada={setPeliEliminada} setPeliEliminadaID={setPeliEliminadaID} setMostrarPelis={setMostrarPelis} setMostrarForm={setMostrarForm}/>})
                    }
                </div>:
                <p className='alert-success text-white text-center'> PELICULA ELIMINADA!!</p>//mensaje que aparece por 2segundos cuando se elimina la imagen
            }
        </Fragment>
   
        
    )

}