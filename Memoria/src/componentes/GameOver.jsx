import React from "react";
import "./CSS/gameover.css"

export function GameOver ({esModal}) {
    return (

        <div id="modal" className={esModal ? "modal modal-on" : "modal modal-off"}>
            <div className="modal-content">
                <h2>¡Juego Terminado!</h2>
                <button id="reiniciar" onClick ={ () => location.reload() }>Reiniciar</button>
            </div>
        </div>
    )
}