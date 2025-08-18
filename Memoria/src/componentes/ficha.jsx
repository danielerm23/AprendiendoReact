import React from "react";
import { useState } from "react";
import "./CSS/fichas.css"

export function Ficha ({id, voltear, nombre, manejarClic}){
    return (
        <div className={voltear ? "voltear card" : "card"}
            onClick={()=>manejarClic(id, nombre)}>
            <div className="fichas">
                <img 
                    src={`../../public/img/${nombre}.jpg`}
                    alt={`foto de ${nombre} `} />
            </div>
            <div className ="cara-oculta">
                <img 
                    src={"../../public/img/silueta.png"}
                    alt="foto-presentacion" />
            </div>
        </div>
    )
}