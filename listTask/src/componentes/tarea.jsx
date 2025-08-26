import React from "react";
import "./CSS/tarea.css"

export function Tarea ( {estaCompleta, texto, id, eliminar, completar} ) {
    return (
        <div className={estaCompleta ? "tarea tarea-completa" : "tarea tarea-incompleta"}>
            <div 
                 onClick={()=>completar(id)} >
                {texto}
            </div>
            <button className="eliminar" onClick={()=>eliminar(id)}>
                X
            </button>
        </div>
    )
}