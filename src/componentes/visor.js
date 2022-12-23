import React from "react";
import '../css/estilos.css'

function Visor({textoVisor})
{
    return(
        <div className="visor"><p className="textoVisor">{textoVisor}</p></div>
    );
}

export default Visor;