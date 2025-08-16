import React from 'react'
import { useState } from 'react'
import './App.css'
import { Ficha } from "./componentes/ficha.jsx"
import { FICHAS } from './contants.js'

function App() {

  const [fichas, setFichas] = useState(FICHAS)
  const [contador, setContador] = useState(0)

  const handleContador = (id, nombre) => {
    setContador(prev => prev + 1)
    const valor = contador+1
    if (valor==2){      
      validacion(id, nombre)
    }
  }

  const resetHandleContador = () => {
    setContador (0)
  }

  const isMatched = (id, nombre) => {
    return fichas.some((ficha) => 
      (ficha.id !== id && nombre === ficha.nombre && ficha.voltear === true)
    )
  }

  const voltearHaciaArriba = (id) => {
    const fichasNuevas = fichas.map((ficha) => {
      if(ficha.id===id && ficha.resuelto === false && ficha.voltear === false){
        ficha.voltear=true
        handleContador(ficha.id, ficha.nombre)
      }
      return ficha
    })
    setFichas(fichasNuevas)
  }

  const voltearHaciaAbajo = () => {
    setTimeout (() =>{
      const fichasNuevas=fichas.map((ficha) =>{
        if (ficha.resuelto === false){
          ficha.voltear=false
        }
      })
      setFichas(fichasNuevas)
      resetHandleContador ()
    }, 2000)
  }

  const validacion = (id, nombre) => {
    const validar = isMatched(id, nombre)
    if (validar){
      const fichasNuevas=fichas.map((ficha) =>{
        if (ficha.nombre === nombre){
          ficha.resuelto = true
        }
      })
      setFichas(fichasNuevas)
      resetHandleContador()
    } else {
      voltearHaciaAbajo()
    }
  }

  return (
    <>
      <div className='componente-principal'>
        {fichas.map((ficha, index) => (
          <Ficha
            key={index}
            id={ficha.id}
            voltear={ficha.voltear}
            nombre={ficha.nombre}
            resuelto={ficha.resuelto}
            manejarClic={voltearHaciaArriba} />
        ))
        }
      </div>
    </>
  )
}
export default App
