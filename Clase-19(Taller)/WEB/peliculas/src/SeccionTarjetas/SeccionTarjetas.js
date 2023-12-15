import { useState } from 'react';

import Tarjeta from '../Tarjeta/Tarjeta';
import peliculasInfo from './peliculas'// traemos la lista de peliculas desde un archivo externo; en breve la llamamos desde la API y la DB

export default function SeccionTarjetas() {
    const [peliculas,setPeliculas]=useState(peliculasInfo);//esto lo cargariamos con un fetch()

    //console.log(peliculas) -> vemos el estado peliculas

    return(
        <div className="row gap-3">
           {peliculas.map((peli)=>{
            return  <Tarjeta key={peli.id} data={peli}/>})
        }
            
        </div>
        
    )

}