import { Fragment ,useState} from 'react';
import './App.css';
import SeccionTarjetas from './SeccionTarjetas/SeccionTarjetas';
import SeccionFormulario from './SeccionFormulario/SeccionFormulario';

function App() {

  const[mostrarForm,setMostrarForm]=useState(false)
  const[mostrarPelis,setMostrarPelis]=useState(false)


  return (
    <Fragment >
     <h1 className='text-center mt-5'>Sitio Peliculas</h1>
      <nav className='d-flex flex-column w-100 align-items-center gap-2'>
          <button 
            className='btn btn-warning w-50' 
            onClick={()=>{setMostrarPelis(true);setMostrarForm(false)}}>
              Mostrar Peliculas
          </button>
          <button 
            className='btn btn-success w-50' 
            onClick={()=>{setMostrarForm(true);setMostrarPelis(false)}}>
            Cargar Nueva Pelicula
          </button>     
      </nav>

    {mostrarPelis? 
      <section className='container d-flex flex-column align-items-center'>
        <button className='btn btn-info row align-self-end' onClick={()=>setMostrarPelis(false)}>X</button>
          <SeccionTarjetas setMostrarForm={setMostrarForm} setMostrarPelis={setMostrarPelis}/>
      </section>
    :''}

     {mostrarForm? 
      <section className='container d-flex flex-column align-items-center'>
        <button className='btn btn-info row align-self-end' onClick={()=>setMostrarForm(false)}>X</button>
        <SeccionFormulario/>
      </section>
      :''}
    </Fragment>
  );
}

export default App;
