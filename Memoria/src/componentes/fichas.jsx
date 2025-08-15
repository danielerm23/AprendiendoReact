import React from "react";
import { useState } from "react";
import "./CSS/fichas.css"

export function Fichas ({id, voltear, imagen, manejarClic}){
    return (
        <div className={voltear ? "voltear card" : "card"}
            onClick={()=>manejarClic(id)}>
            <div className="fichas">
                <img 
                    src={`../../public/img/${imagen}.jpg`}
                    alt={`foto de ${imagen} `} />
            </div>
            <div className ="cara-oculta">
                <h3>escondida</h3>
            </div>
        </div>
    )
}