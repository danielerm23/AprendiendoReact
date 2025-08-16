import { useEffect, useState } from 'react'
import './App.css'
import { Ficha } from "./componentes/ficha.jsx"
import { FICHAS } from './contants.js'

function App() {

  const [fichas, setFichas] = useState(FICHAS)
  const [contador, setContador] = useState(0)


  useEffect(() => {
    if (contador === 2) {
      validacion()
    }

  }, [contador])

  const handleContador = () => {
    setContador(prev => prev + 1)
  }

  const resetHandleContador = () => {
    setContador(0)
  }


  const voltearHaciaArriba = (id) => {

    /*si el contador es 2, se bloquean todas las fichas */
    if (contador === 2) {
      return;
    }




    const fichasNuevas = fichas.map((ficha) => {
      if (ficha.id === id && ficha.resuelto === false && ficha.voltear === false) {
        ficha.voltear = true
        handleContador();


      }
      return ficha
    })
    console.log({ contador })
    setFichas(fichasNuevas)


  }

  const voltearHaciaAbajo = () => {
    setTimeout(() => {
      const fichasNuevas = fichas.map((ficha) => {
        if (ficha.resuelto === false) {
          ficha.voltear = false
        }
        return ficha
      })

      setFichas(fichasNuevas)
      resetHandleContador()
    }, 2000)
  }

  const validacion = () => {

    const fichasVolteadas = fichas.filter((ficha) => (ficha.voltear === true && ficha.resuelto === false))

    if (fichasVolteadas.length === 2) {

      const [ficha1, ficha2] = fichasVolteadas

      if (ficha1.nombre === ficha2.nombre) {

        const nombre = ficha1.nombre


        const fichasNuevas = fichas.map((ficha) => {
          if (ficha.nombre === nombre) {
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
