import { useEffect, useState } from "react";
import "./CSS/inputIngresos.css"

export function InputIngresos ({agregarIngresos, agregarGastos, esIngreso}) {

    const [ingreso, setIngreso] = useState()

    const handleChange = (e) =>{
        
        setIngreso(e.target.value.trim())

    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        if (!ingreso.trim() || Number(ingreso)<=0) return
        if (esIngreso){
            agregarIngresos(ingreso)
        } else {
            agregarGastos(ingreso)
        }
        setIngreso("")
    }

    return (
        <form
            className="input-ingreso"
            onSubmit={handleSubmit}>
            <input  
                type="number" 
                step= "0.01"
                value={ingreso}
                onChange={handleChange} 
                placeholder={esIngreso ? "ingrese ingreso" : "ingrese gasto"}    />
            <button className="boton-ingresos">Agregar</button>
        </form>
    )
}