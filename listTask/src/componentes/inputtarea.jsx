import { useState } from "react"
import "./CSS/input.css"

export function InputTarea ({ agregarTarea }){

    const [tarea, setTarea] = useState("")

    const handleChange = e =>{
        setTarea(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!tarea.trim()) return
        agregarTarea(tarea.trim())
        setTarea("")
    }

    return (
        <form 
            className="componente-agregar"
            onSubmit={handleSubmit} >
            <input 
                type="text" 
                value={tarea}
                className="input-agregar" 
                placeholder="escribir tarea"
                onChange={handleChange} />
            <button className="boton-agregar">Agregar</button>
        </form>
    )
}