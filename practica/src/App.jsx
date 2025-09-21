import { useEffect, useState } from "react";
import { Nota } from "./components/Nota.jsx"
import {Input} from "./components/Input.jsx"
import { getAllNotes, createNote, deleteNote } from "./services/notes.js";

export function App () {
 
    const [notas, setNotas]=useState([])
    const [loading, setLoading] = useState (true)
    
    useEffect(()=>{
        setTimeout (()=>{   

            getAllNotes().then((data)=>{
                setNotas(data)
                setLoading(false)
            })


            /*
            fetch ("https://jsonplaceholder.typicode.com/posts")
                .then(response=>response.json())
                .then((json)=> setNotas(json))
            
            setLoading(false)   
            */ 
        }, 2000)
        
    }, []) 

    const newNote=(note)=>{
        const noteToAdd = {
            title: note,
            body: note,
            important: Math.floor()<0.5
        }           
        createNote(noteToAdd).then((data)=>{
            console.log(data)
            setNotas(data)
        })

    }

    const handleDelete = (id) =>{
        console.log(id)
        deleteNote(id).then((data)=>{
            console.log(data)
            setNotas(data)
        })
    }

    return (            
        <>
            <h2>{loading ? "Cargando..." : ""}</h2>
            <ol>
                {notas.map((nota) =>
                    <Nota
                        key={nota.id}
                        id={nota.id}
                        title={nota.title}
                        body={nota.body}
                        borrar={handleDelete} />
                )}
            </ol>
            <Input newNote={newNote}/>
        </>
    )
}
