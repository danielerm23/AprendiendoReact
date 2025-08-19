import React from "react";
import "./CSS/gameover.css"

export function GameOver({ esModal, resultado }) {
    return (
        <> {esModal ?
            <div className="modal">
                <div className="modal-content">
                    <h2>{resultado}</h2>
                    <button onClick={() => location.reload()}>Reiniciar</button>
                </div>
            </div> : null}
        </>
    )
}