import React from "react";
import '../css/estilos.css'

function Tecla(props)
{
    return(
        <button 
            className={`tecla ${props.tipoTecla}`}
            onClick={() => props.handlerClick(props.children)}
        >{props.children}</button>
    );
}

export default Tecla;