import './Tarjeta.css'

export default function Tarjeta({data}) {
    //data tiene el objeto con toda la info de la pelicula
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
                    <button className='btn btn-danger border-0'>Eliminar pelicula</button>
                    <button className='btn btn-info border-0'>Editar pelicula</button>                
                </div>

            </div>
        </div>
    )
}