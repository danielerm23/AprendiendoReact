import { useEffect, useState } from 'react'
import './App.css'
import { Ficha } from "./componentes/ficha.jsx"
import { FICHAS } from './contants.js'
import {Tiempo} from "./componentes/tiempo.jsx"
import { GameOver } from "./componentes/GameOver.jsx"

function App() {

  const flip=new Audio("../public/img/flip.mp3")

  const [formatoTiempo, setFormatoTiempo] = useState ()
  const [segundos, setSegundos] = useState(180)
  const [fichas, setFichas] = useState(FICHAS)
  const [contador, setContador] = useState(0)
  const [victorias, setVictorias]=useState(0)
  const [modal, setModal]=useState({
    resultado:"",
    valor:false
  })

  
  useEffect (() =>{
    if (modal.valor) return;

    const intervalo= setInterval(() => {
      setSegundos (prev =>{
        if (prev > 0) {
          return prev-1
        } else {
          setModal({
            resultado:"Perdiste, Juego Terminado",
            valor:true
          })
          return 0
        }
      })
    }, 1000)
    return () => clearInterval(intervalo)
  }, [modal.valor])
  


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
  },[segundos])



  useEffect(()=>{
    if (victorias === 28){
      setModal({
        resultado:"Ganaste",
        valor:true
      })
    }
  },[victorias])



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
    flip.play()
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

      flip.play()
      setFichas(fichasNuevas)
      resetHandleContador()
    }, 2000)
  }


  const validacion = () => {

    const fichasVolteada = fichas.filter ((ficha) => ficha.voltear === true && ficha.resuelto ===false)
    const [ficha1, ficha2] = fichasVolteada
    if (ficha1.nombre === ficha2.nombre){

      if (ficha1.nombre === "muerte"){
        setModal({
          resultado:"Perdiste, Juego Terminado",
          valor:true
        })
        return ficha1
      }

      const fichasNuevas = fichas.map((ficha) => {
        if (ficha.nombre === ficha1.nombre){
          ficha.resuelto = true
          setVictorias(prev=>prev+1)
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
      <div className="game-over">
        <GameOver 
          esModal={modal.valor}
          resultado={modal.resultado} />
      </div>
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
