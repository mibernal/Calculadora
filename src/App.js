import './App.css';
import ImagenCalculadora from '../src/imagenes/imagen-calculadora.avif';
import  Boton from './componentes/Boton';

function App() {
  return (
    <div className='App'>
      <div className='logo-contenedor'>
        <img
          src={ImagenCalculadora}
          className='logo-contenedor'
          alt='Logo Principal'
        />  
      </div>
      <div className='contenedor-calculadora'>
        <div className='fila'>
          <Boton>1</Boton>
          <Boton>+</Boton>
        </div> 
        <div className='fila'>
        </div>
        <div className='fila'>
        </div>  
        <div className='fila'>
        </div>
        <div className='fila'>
        </div>

      </div>
    </div>
  );
}

export default App;
