import './Tarjeta.css'

export default function Tarjeta({data,setPeliEliminada,setPeliEliminadaID,setMostrarPelis,setMostrarForm}) {
    //data tiene el objeto con toda la info de la pelicula

    //console.log(data)// vemos que la data esta en este componenete como un objeto

    const elimiarPelicula= async()=>{
        let id=data.id //obtengo el id de la tarjeta
        //sin el segundo parametro del fetch, hace la peticion GET por defecto
        
      let respuesta= await fetch(`http://localhost:4300/eliminarPelicula`,{
            method:'delete',
            headers:{
                'Content-Type':"application/json"
            },
            body:JSON.stringify({id:id})// armamos el objeto del body donde pasamos el id y lo pasamos como un JSON
        })
        .then((data)=>{return data.json()})
        .then(()=>{
            setPeliEliminada(true); 
            setPeliEliminadaID(id)
            setTimeout(()=>{setPeliEliminada(false)},2000)//agergamos de que cambie este estado en 2segundos(para que muestre el mensaje de borrado solo ese tiempo en el componente padre : SeccionTarjetas)
        })
        .catch((err)=>console.log(err));

        // si no queremos usar la promesa con el then|catch
        // if(respuesta.ok){
         //   (data)=>console.log(data)
        // }else{
            //(err)=>console.log(err);
        // }
       return respuesta
    }

    const editarPelicula=()=>{
        //web storage para guardar la info de la peli en el browser y obtenerla desde el componente del formulario

        localStorage.setItem("infoTarjeta",JSON.stringify(data))//metodo para guardar en el browser info
        //metodo setItem("nombreKey","data") -> solo guarda string entonces como data es un objeto lo transformo a JSON 


        //para ocultar la seccion de  peliculas y muestra la seccion del formulario
        setMostrarPelis(false)
        setMostrarForm(true)
    }
    return(
        <div className='bg-secondary card col-sm-4'>
            <div className="card-body text-light d-flex flex-column gap-3">
                <img className='img-tarjeta' src={data.imagen} alt=''/>
                <h2 className="card-title fs-5 text-center">{data.titulo}</h2>
                <ul className="list-group list-group-flush ">
                    <li className="list-group-item bg-secondary">
                        Duracion:<strong>{data.duracion + " minutos"} </strong>
                    </li>
                    <li className="list-group-item bg-secondary">
                        Genero:<strong>{data.genero}</strong>
                    </li>
                    <li className="list-group-item bg-secondary">
                        Tickets disponibles<strong>{data.tickets}</strong>
                    </li>

                </ul>
                <div className='d-flex  gap-2'>
                    <button className='btn btn-danger border-0' onClick={elimiarPelicula}>Eliminar pelicula</button>
                    <button className='btn btn-info border-0' onClick={editarPelicula}>Editar pelicula</button>                
                </div>

            </div>
        </div>
    )
}