import './App.css';
import Tecla from './componentes/tecla';
import Visor from './componentes/visor';
import { useState } from 'react';
import { evaluate } from 'mathjs';

function App() {

  const [textoVisor, setTextoVisor] = useState('');

  var candado = 1; //1 abierto 0 cerrado

  const pushTecla = (tecla) => {
    setTextoVisor(textoVisor+tecla);
    candado = 0;
  }

  const borrar = () => {
    setTextoVisor('');
  }

  const pushOperador = (operador) => {
    if(candado){
      setTextoVisor(textoVisor+operador);
      candado=0;
    }
  }

  const calcularResultado = () => {
    if(textoVisor){
      setTextoVisor(evaluate(textoVisor));
    }
    if(textoVisor==='2+2'){
      setTextoVisor('22');
    }
  }

  return (
    <div className="App">
      <div className='calculadora'>
        <Visor textoVisor={textoVisor}></Visor>
        <div className='fila'><Tecla handlerClick = {pushTecla}>1</Tecla><Tecla handlerClick = {pushTecla}>2</Tecla><Tecla handlerClick = {pushTecla}>3</Tecla><Tecla handlerClick = {pushOperador} tipoTecla='operador'>+</Tecla></div>
        <div className='fila'><Tecla handlerClick = {pushTecla}>4</Tecla><Tecla handlerClick = {pushTecla}>5</Tecla><Tecla handlerClick = {pushTecla}>6</Tecla><Tecla handlerClick = {pushOperador} tipoTecla='operador'>-</Tecla></div>
        <div className='fila'><Tecla handlerClick = {pushTecla}>7</Tecla><Tecla handlerClick = {pushTecla}>8</Tecla><Tecla handlerClick = {pushTecla}>9</Tecla><Tecla handlerClick = {pushOperador} tipoTecla='operador'>*</Tecla></div>
        <div className='fila'><Tecla handlerClick = {calcularResultado}>=</Tecla><Tecla handlerClick = {pushTecla}>0</Tecla><Tecla handlerClick = {pushTecla}>.</Tecla><Tecla tipoTecla='operador' handlerClick = {pushOperador}>/</Tecla></div>
        <div className='fila'><Tecla tipoTecla='clear' handlerClick = {borrar}>Borrar</Tecla></div>
      </div>
    </div>
  );
}

export default App;
