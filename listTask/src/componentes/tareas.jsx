import { Tarea } from "./tarea.jsx"
import { InputTarea } from "./inputtarea.jsx"
import { useState } from "react"
import {v4 as uuidv4 } from "uuid"
import "./CSS/tareas.css"   

export function Tareas({esMostrar}){

    const [tareas, setTareas]=useState([])

    const agregarTarea = (value) => {
        const nuevaTarea = {
            id : uuidv4(),
            texto : value,
            completa : false
        }
        setTareas([nuevaTarea, ...tareas])
    }

    const eliminarTarea = (id) => {

        const tareasActualizadas = tareas.filter ((tarea) => tarea.id !== id)
        setTareas(tareasActualizadas)

    }

    const completarTarea = (id) => {
        const tareasActualizadas = tareas.map((tarea)=>{
            if (tarea.id === id){
                tarea.completa=!tarea.completa
            }
            return tarea
        })
        setTareas(tareasActualizadas)
    }
    return (
        <div className={esMostrar ? 'contenedor-tareas' : 'ocultar'} >
            <h1>Tareas</h1>

            <InputTarea
                agregarTarea={agregarTarea} />

            <div className='tareas'>
                {tareas.map((tarea)=>
                    <Tarea
                        key={tarea.id}
                        id={tarea.id}
                        estaCompleta={tarea.completa}
                        texto={tarea.texto} 
                        eliminar={eliminarTarea}
                        completar={completarTarea} />
                )}
            </div>
        </div>
    )
}