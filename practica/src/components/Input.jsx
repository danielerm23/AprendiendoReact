import { useState } from "react"

export function Input ({newNote}){
    const [input, setInput]=useState("")

    const handleChange = (e) => {
        setInput(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!input) return
        newNote(input)
        setInput("")
    }

    return (
        <form onSubmit={handleSubmit} >
            <input type="text" value={input} onChange={handleChange} placeholder="escribir nota"/>
            <button>Agregar Nota</button>
        </form>
    )
}