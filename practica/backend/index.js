const express = require("express")
const cors = require("cors")

const app = express()

app.use(cors())
app.use(express.json())

let notas = [
    {
        id:1,
        title: "DISCIPLINA",
        body: "estudiar todos los dias",
        important: true
    },
    {
        id:2,
        title: "REPETIR LO ESTUDIADO",
        body: "lo que no se practica, se olvida",
        important: true
    }
]

app.get("/", (req, res) =>{
    res.send("HOLA WORLD").end()
})

app.get("/notas", (req, res) =>{
    res.json(notas).end()
})

app.post("/notas/post", (req, res) =>{

    let newNote = req.body
    const ids = notas.map((nota) => nota.id)
    const maxId = Math.max(...ids)+1

    newNote = {
        id:maxId,
        title: newNote.title,
        body:newNote.body,
        important: Math.random<0.5
    }

    notas=[...notas, newNote]
    res.json(notas)

})

app.post("/notas/delete", (req, res)=>{
    const {id}=req.body
    notas=notas.filter((nota)=> nota.id !== id )
    console.log(notas)
    res.json(notas)
})

const PORT=3001
app.listen(PORT, () =>{
    console.log(`servidor funcionando en el puerto ${PORT}`)
})