import "./CSS/listIngresos.css"

export function ListIngresos ({valor, tipo, id, eliminar}){
    return(
        <div className="historial-ingresos">
            <div className="ingreso">
                {valor}
            </div>
            <button 
                className="eliminar"
                onClick={ () => eliminar(id, tipo)}>
                    X
            </button>
        </div>
    )
}