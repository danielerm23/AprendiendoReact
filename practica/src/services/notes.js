import axios from "axios"

export const getAllNotes = () => {
    return axios.get("https://lit-retreat-21888-962271e18695.herokuapp.com/notas")
        .then(response=>{
            const {data}=response
            return data
        })
}

export const createNote =({title, body, important})=> {
    return axios.post("https://lit-retreat-21888-962271e18695.herokuapp.com/notas/post", {title, body, important})
        .then(response=>{
            const {data}=response   
            return data
        })
}

export const deleteNote = (id) =>{
    return axios.post("https://lit-retreat-21888-962271e18695.herokuapp.com/notas/delete", {id})
        .then(response =>{
            const {data}=response
            return data
        })
}