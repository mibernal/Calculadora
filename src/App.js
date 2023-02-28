import './App.css';
import ImagenCalculadora from '../src/imagenes/imagen-calculadora.avif';
import  Boton from './componentes/Boton.js';
import Pantalla from './componentes/Pantalla.js';
import BotonClear from './componentes/Boton.js';
import { useState } from 'react';

function App() {

  const [input, setInput] = useState (' ');

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
          <Pantalla input={input}/>
          <div className='fila'>
            <Boton>1</Boton>
            <Boton>2</Boton>
            <Boton>3</Boton>
            <Boton>+</Boton>
          </div> 
          <div className='fila'>
            <Boton>4</Boton>
            <Boton>5</Boton>
            <Boton>6</Boton>
            <Boton>-</Boton>
          </div>
          <div className='fila'>
            <Boton>7</Boton>
            <Boton>8</Boton>
            <Boton>9</Boton>
            <Boton>*</Boton>
          </div>  
          <div className='fila'>
            <Boton>=</Boton>
            <Boton>0</Boton>
            <Boton>.</Boton>
            <Boton>/</Boton>
          </div>
          <div className='fila'>
          <BotonClear>Clear</BotonClear>
          </div>
          <div className='fila'>

          </div>
        </div>
      </div>
  );
}

export default App;
