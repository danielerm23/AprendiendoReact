import { useState, useEffect } from "react"
import { InputIngresos } from  "./inputIngresos.jsx"
import { ListIngresos } from "./listIngresos.jsx";
import { v4 as uuidv4 } from "uuid"
import "./CSS/finanzas.css"

export function Finanzas({ esMostrar }) {

    
    const [balance, setBalance]=useState(0)
    const [ingresos, setIngresos]=useState([])
    const [gastos, setGastos]=useState([])
    

    const agregarIngresos = (ingreso) =>{
        const nuevoIngreso = {
            valor : Number(ingreso),
            id :  uuidv4(),
            tipo : "ingreso"
        }
    
        setIngresos([nuevoIngreso, ...ingresos])
    }

    const agregarGastos = (gasto) =>{
        const nuevoGasto = {
            valor : Number(gasto),
            id :  uuidv4(),
            tipo : "gasto"
        }
    
        setGastos([nuevoGasto, ...gastos])
    }

    const eliminar = (id, tipo) => {
        if (tipo === "ingreso"){
            const ingresosActualizados = ingresos.filter((ingreso) => ingreso.id != id)
            setIngresos(ingresosActualizados)
        } else {
            const gastosActualizados = gastos.filter((gasto) => gasto.id != id)
            setGastos(gastosActualizados)
        }
        
    }

    useEffect (()=>{

        const ingresoBalance = ingresos.reduce((acumulador, ingreso) => {
            return acumulador + ingreso.valor
        }, 0)

        const gastoBalance = gastos.reduce((acumulador, gasto) => {
            return acumulador + gasto.valor
        }, 0)

        setBalance((ingresoBalance-gastoBalance).toFixed(2))

        console.log(ingresos, gastos + "useEffect")

    }, [ingresos, gastos])


    return (
        <div className={ esMostrar ? 'datos-finanzas' : 'ocultar' }>
            <div className='ingresos'>
                <div className="input-ingresos">
                    <InputIngresos 
                        esIngreso={true}
                        agregarIngresos={agregarIngresos} />
                </div>
                <div className="lista-ingresos">
                    {ingresos.map((ingreso, i) =>
                        <ListIngresos
                            key={i}
                            valor={ingreso.valor}
                            tipo={ingreso.tipo}
                            id={ingreso.id}
                            eliminar={eliminar} />
                    )}
                </div>
            </div>
                
            <div className='Gastos'>
                <div className="input-gastos">
                    <InputIngresos
                        esIngreso={false}
                        agregarGastos={agregarGastos} />
                </div>
                <div className="lista-gastos">
                    {gastos.map((gasto, i) =>
                        <ListIngresos
                            key={i}
                            valor={gasto.valor}
                            tipo={gasto.tipo}
                            id={gasto.id}
                            eliminar={eliminar} />
                    )}
                </div>
            </div>
            <div className='balance'>
                {balance} €
            </div>
        </div>
    )
}