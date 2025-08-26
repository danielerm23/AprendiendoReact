import { Tareas } from "./componentes/tareas.jsx"
import { Finanzas } from "./componentes/finanzas.jsx"
import "./App.css"
import { useState } from "react"

function App() {

  const [tareas, setTareas]=useState(false)
  const [finanzas, setFinanzas]=useState(false)

  const botonBack = () =>{
    if (tareas) {
      setTareas(false)
    } else 
      setFinanzas(false)
  }

  return (
    <div className='contenedor-principal'>
      <div className="interfaz">

        <button className={ (tareas || finanzas) ? "back" : 'ocultar' }
                onClick={()=> botonBack()} >⬅️</button>
      
        <div className="opciones">
          <button className={ (tareas || finanzas) ? 'ocultar' : "boton-opcion" } 
                  onClick={()=> setTareas(!tareas)}>
                    ListTask
          </button>
          <button className= { (tareas || finanzas) ? 'ocultar' : "boton-opcion" } 
                  onClick={()=> setFinanzas(!finanzas)}>
                    Finanzas
          </button>
        </div>

      </div>

      <Tareas esMostrar={tareas} />
      <Finanzas esMostrar={finanzas} />
    </div>
  )
}

export default App
