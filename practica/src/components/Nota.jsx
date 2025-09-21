export const Nota = ({id, title, body, borrar}) => {
    return (
        <li>
            <h2>{title} </h2>
            <p>{body} </p>
            <button onClick={()=>borrar(id)} >Eliminar Nota</button>
        </li>
    )
}