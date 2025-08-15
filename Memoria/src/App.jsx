import React from 'react'
import { useState } from 'react'
import './App.css'
import { v4 as uuidv4 } from "uuid"
import { Fichas } from "./componentes/fichas"

function App() {
  const [datos, setDatos] = useState({
    contador : 0,
    nombre: [""]

  })

  const [fichas, setFichas] = useState([{
    id:uuidv4(),
    voltear : false,
    imagen: "300ds",
    resuelto : false
  },
  {
    id:uuidv4(),
    voltear : false,
    imagen: "625dsx",
    resuelto : false
  },
  {
    id:uuidv4(),
    voltear : false,
    imagen: "790",
    resuelto : false
  },
  {
    id:uuidv4(),
    voltear : false,
    imagen: "1250gs",
    resuelto : false
  },
  {
    id:uuidv4(),
    voltear : false,
    imagen: "cb500",
    resuelto : false
  },
  {
    id:uuidv4(),
    voltear : false,
    imagen: "duke",
    resuelto : false
  },
  {
    id:uuidv4(),
    voltear : false,
    imagen: "g310gs",
    resuelto : false
  },
  {
    id:uuidv4(),
    voltear : false,
    imagen: "monster",
    resuelto : false
  },
  {
    id:uuidv4(),
    voltear : false,
    imagen: "mt09",
    resuelto : false
  },
  {
    id:uuidv4(),
    voltear : false,
    imagen: "ninja",
    resuelto : false
  },
  {
    id:uuidv4(),
    voltear : false,
    imagen: "r1",
    resuelto : false
  },
  {
    id:uuidv4(),
    voltear : false,
    imagen: "tracer900",
    resuelto : false
  },
  {
    id:uuidv4(),
    voltear : false,
    imagen: "versys",
    resuelto : false
  },
  {
    id:uuidv4(),
    voltear : false,
    imagen: "xadv",
    resuelto : false
  },
  {
    id:uuidv4(),
    voltear : false,
    imagen: "300ds",
    resuelto : false
  },
  {
    id:uuidv4(),
    voltear : false,
    imagen: "625dsx",
    resuelto : false
  },
  {
    id:uuidv4(),
    voltear : false,
    imagen: "790",
    resuelto : false
  },
  {
    id:uuidv4(),
    voltear : false,
    imagen: "1250gs",
    resuelto : false
  },
  {
    id:uuidv4(),
    voltear : false,
    imagen: "cb500",
    resuelto : false
  },
  {
    id:uuidv4(),
    voltear : false,
    imagen: "duke",
    resuelto : false
  },
  {
    id:uuidv4(),
    voltear : false,
    imagen: "g310gs",
    resuelto : false
  },
  {
    id:uuidv4(),
    voltear : false,
    imagen: "monster",
    resuelto : false
  },
  {
    id:uuidv4(),
    voltear : false,
    imagen: "mt09",
    resuelto : false
  },
  {
    id:uuidv4(),
    voltear : false,
    imagen: "ninja",
    resuelto : false
  },
  {
    id:uuidv4(),
    voltear : false,
    imagen: "r1",
    resuelto : false
  },
  {
    id:uuidv4(),
    voltear : false,
    imagen: "tracer900",
    resuelto : false
  },
  {
    id:uuidv4(),
    voltear : false,
    imagen: "versys",
    resuelto : false
  },
  {
    id:uuidv4(),
    voltear : false,
    imagen: "xadv",
    resuelto : false
  }])

  const manejarClic = id => {

    fichas.forEach( ficha => {
      if (ficha.id === id && ficha.resuelto == false){
        ficha.voltear = !ficha.voltear
      }
      if (ficha.voltear===true && datos.contador<2){
        datos.nombre.push(ficha.imagen)
        datos.contador = contador++
      }
    });
    if (datos.contador == 2){
      if (datos.nombre[0]==datos.nombre[1]){
        const fichasActualizadas = fichas.map((ficha) => {
          if (ficha.imagen == datos.nombre[0]){
            ficha.resuelto ===true
            setDatos({
              contador : 0,
              nombre : [""]
            })
          }
        })
        setFichas([...fichasActualizadas])
      }
    }

    setFichas([...fichas])
  }
  return (
    <>
      <div className='componente-principal'>
        {fichas.map((ficha) => (
          <Fichas 
            key={ficha.id}
            id={ficha.id}
            voltear={ficha.voltear}
            imagen={ficha.imagen}
            resuelto={ficha.resuelto}
            manejarClic={manejarClic} />
          ))
        }
      </div>
    </>
  )
}
export default App
