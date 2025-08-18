import React, { use } from 'react'
import { useState, useEffect } from 'react'
import './App.css'
import { Ficha } from "./componentes/ficha.jsx"
import { FICHAS } from './contants.js'
import {Tiempo} from "./componentes/tiempo.jsx"

function App() {

  const tiempo = () => {
    if (segundos > 0) {
      setSegundos(prev => prev -1)
    } else{
      location.reload()
    }
  }
  const [formatoTiempo, setFormatoTiempo] = useState ()
  const [segundos, setSegundos] = useState(250)
  const [fichas, setFichas] = useState(FICHAS)
  const [contador, setContador] = useState(0)

  useEffect (() =>{
    const intervalo= setInterval(() => {
      tiempo()
    }, 1000)
    return () => clearInterval(intervalo)
  }, [])

  useEffect (() =>{
    if(contador ===2){
      validacion()
    }
  }, [contador])

  useEffect (()=>{

    const minuto = Math.floor(segundos / 60);
    const segundo = segundos % 60;

    const segFormateados = segundo.toString().padStart(2, "0");

    setFormatoTiempo(`${minuto}:${segFormateados}`)
    console.log(formatoTiempo)
  },[segundos])

  const handleContador = () => {
    setContador(prev => prev + 1)
  }

  const resetHandleContador = () => {
    setContador (0)
  }


  const voltearHaciaArriba = (id) => {

    if (contador === 2){
      return
    }

    const fichasNuevas = fichas.map((ficha) => {
      if(ficha.id===id && ficha.resuelto === false && ficha.voltear === false){
        ficha.voltear=true
        handleContador()
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
        return ficha
      })
      setFichas(fichasNuevas)
      resetHandleContador ()
    }, 2000)
  }

  const validacion = () => {

    const fichasVolteada = fichas.filter ((ficha) => ficha.voltear === true && ficha.resuelto ===false)
    const [ficha1, ficha2] = fichasVolteada

    if (ficha1.nombre === ficha2.nombre){

      if (ficha1.nombre === "muerte"){
        location.reload()
      }

      const fichasNuevas = fichas.map((ficha) => {
        if (ficha.nombre === ficha1.nombre){
          ficha.resuelto = true
        }
        return ficha
      })

      setFichas(fichasNuevas)
      resetHandleContador()

    } else {

      voltearHaciaAbajo()

    }
  }
    
  
  return (
    <>
      <div className='tiempo'>
        <Tiempo 
          formatoTiempo={formatoTiempo} />  
      </div>  
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
