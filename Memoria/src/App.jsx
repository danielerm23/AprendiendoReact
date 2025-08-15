import React from 'react'
import { useState } from 'react'
import './App.css'
import { Fichas } from "./componentes/fichas"
import { FICHAS } from './contants'

function App() {
  const [datos, setDatos] = useState({
    contador: 0,
    nombre: [""]

  })

  const [fichas, setFichas] = useState(FICHAS)

  const manejarClic = id => {

    fichas.forEach(ficha => {
      if (ficha.id === id && ficha.resuelto == false) {
        ficha.voltear = !ficha.voltear
      }
      if (ficha.voltear === true && datos.contador < 2) {
        datos.nombre.push(ficha.imagen)
        datos.contador = datos.contador++
      }
    });
    if (datos.contador == 2) {
      if (datos.nombre[0] == datos.nombre[1]) {
        const fichasActualizadas = fichas.map((ficha) => {
          if (ficha.imagen == datos.nombre[0]) {
            ficha.resuelto === true
            setDatos({
              contador: 0,
              nombre: [""]
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
