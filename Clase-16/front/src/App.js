import{ useState , useEffect} from'react';
//import axios from 'axios';
import Form from './Form.js'

import './App.css';

function App() {
  const[alumnos,setAlumnos]=useState([])
//pedirle a la API la info de los alumnos y settearla en la variable alumnos
//cuando? -> renderice el componente -> hook useEffect

const traerInfo=async()=>{

  //fetch -> por defecto peticiones GET
  await fetch("http://localhost:4000/")//pedimos la informacion a la API
    .then((res)=>{ return res.json()}) //parseamos la info recibida, y la devolvimos 
    .then((data)=>  setAlumnos(data))//para que luego la sette a alumnos
    .catch((err)=>{console.log(err)})
  //fetch().then().catch() -> get 

  //alterativa con axios
  // axios.get("http://localhost:4000/")
  // .then((res)=>{ return res.json()})
  // .then((data)=>  setAlumnos(data))
  // .catch((err)=>{console.log(err)})

}


useEffect(()=>{
 traerInfo()
  
},[]);

  return (
    <div className="App">
        <h1>Vinculando API con DB y llamando desde el front</h1>
      <ul>
        {alumnos.map((alumno)=>{
          return <li key={alumno.id}>{alumno.nombre} ,{alumno.apellido}</li>
        })}
  
      </ul>
      <h2>Cargando un alumno nuevo</h2>
      <Form/>
    </div>
  );
}

export default App;
