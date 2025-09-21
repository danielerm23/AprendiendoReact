const express=require("express")
const cors=require("cors")

const app=express()

app.use(express.json())
app.use(cors())

app.get("/", (req, res) =>{
    res.json("HOLA MAMAGUEVO, si cambió")
})

PORT=3001
app.listen(PORT, () =>{
    console.log(`server corriendo activooo ${PORT}`)
})