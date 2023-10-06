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
        <h2>Otro titulo</h2>
        <button onClick={saludo}>Saludo</button>
      </header>
              <ul>
                <li>item</li>
                <li>item</li>
            </ul>
      <Nav/>
    </div>
  );
}

export default Home;
//class -> className
//eventos -> onclick | onClick  onmouseover | onMouseover

//jsx (lenguaje yugar entre HTML y JS)
