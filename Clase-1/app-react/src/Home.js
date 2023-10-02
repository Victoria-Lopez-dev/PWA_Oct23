import Nav from './components/Nav'
import './App.css';

function Home() {
  const saludo=()=>{
    alert("HOLA!!!")
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1> Ejemplo Componentes</h1>
        <button onClick={saludo}>Saludo</button>
      </header>
      <Nav/>
    </div>
  );
}

export default Home;
//class -> className
//eventos -> onclick | onClick  onmouseover | onMouseover
