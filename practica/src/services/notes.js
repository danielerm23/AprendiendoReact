import axios from "axios"

export const getAllNotes = () => {
    return axios.get("http://localhost:3001/notas")
        .then(response=>{
            const {data}=response
            return data
        })
}

export const createNote =({title, body, important})=> {
    return axios.post("http://localhost:3001/notas/post", {title, body, important})
        .then(response=>{
            const {data}=response   
            return data
        })
}

export const deleteNote = (id) =>{
    return axios.post("http://localhost:3001/notas/delete", {id})
        .then(response =>{
            const {data}=response
            return data
        })
}