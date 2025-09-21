import {v4 as uuidv4} from "uuid"

export const NOTAS = [
    {
        id:uuidv4(),
        content:'debo estudiar y practicar a diario',
        important:true
    },
    {
        id:uuidv4(),
        content:'si no estudio a diario se me olvidan las sintaxis del lenguaje',
        important: true
    },
    {
        id:uuidv4(),
        content:'tengo que bañarme y desayunar',
        important:false
    }
]