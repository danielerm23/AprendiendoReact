import { v4 as uuidv4 } from "uuid";

const CARTAS = [
  {
    id: uuidv4(),
    voltear: false,
    nombre: "300ds",
    resuelto: false,
  },
  {
    id: uuidv4(),
    voltear: false,
    nombre: "625dsx",
    resuelto: false,
  },
  {
    id: uuidv4(),
    voltear: false,
    nombre: "790",
    resuelto: false,
  },
  {
    id: uuidv4(),
    voltear: false,
    nombre: "1250gs",
    resuelto: false,
  },
  {
    id: uuidv4(),
    voltear: false,
    nombre: "cb500",
    resuelto: false,
  },
  {
    id: uuidv4(),
    voltear: false,
    nombre: "duke",
    resuelto: false,
  },
  {
    id: uuidv4(),
    voltear: false,
    nombre: "g310gs",
    resuelto: false
  },
  {
    id: uuidv4(),
    voltear:false,
    nombre: "muerte",
    resuelto:false
  },
  {
    id: uuidv4(),
    voltear: false,
    nombre: "monster",
    resuelto: false
  },
  {
    id: uuidv4(),
    voltear: false,
    nombre: "mt09",
    resuelto: false,
  },
  {
    id: uuidv4(),
    voltear: false,
    nombre: "ninja",
    resuelto: false,
  },
  {
    id: uuidv4(),
    voltear: false,
    nombre: "r1",
    resuelto: false,
  },
  {
    id: uuidv4(),
    voltear: false,
    nombre: "tracer900",
    resuelto: false,
  },
  {
    id: uuidv4(),
    voltear: false,
    nombre: "versys",
    resuelto: false,
  },
  {
    id: uuidv4(),
    voltear: false,
    nombre: "xadv",
    resuelto: false,
  },
  {
    id: uuidv4(),
    voltear: false,
    nombre: "300ds",
    resuelto: false,
  },
  {
    id: uuidv4(),
    voltear: false,
    nombre: "625dsx",
    resuelto: false,
  },
  {
    id: uuidv4(),
    voltear: false,
    nombre: "790",
    resuelto: false,
  },
  {
    id: uuidv4(),
    voltear:false,
    nombre: "muerte",
    resuelto:false
  },
  {
    id: uuidv4(),
    voltear: false,
    nombre: "1250gs",
    resuelto: false,
  },
  {
    id: uuidv4(),
    voltear: false,
    nombre: "cb500",
    resuelto: false,
  },
  {
    id: uuidv4(),
    voltear: false,
    nombre: "duke",
    resuelto: false,
  },
  {
    id: uuidv4(),
    voltear: false,
    nombre: "g310gs",
    resuelto: false,
  },
  {
    id: uuidv4(),
    voltear: false,
    nombre: "monster",
    resuelto: false,
  },
  {
    id: uuidv4(),
    voltear: false,
    nombre: "mt09",
    resuelto: false,
  },
  {
    id: uuidv4(),
    voltear: false,
    nombre: "ninja",
    resuelto: false,
  },
  {
    id: uuidv4(),
    voltear: false,
    nombre: "r1",
    resuelto: false,
  },
  {
    id: uuidv4(),
    voltear: false,
    nombre: "tracer900",
    resuelto: false,
  },
  {
    id: uuidv4(),
    voltear: false,
    nombre: "versys",
    resuelto: false,
  },
  {
    id: uuidv4(),
    voltear: false,
    nombre: "xadv",
    resuelto: false,
  },
];

function shuffleArray(arr) {
  
  let array = [...arr]; // copiamos el array para no mutar el original
  for (let i = array.length - 1; i > 0; i--) {
    // índice aleatorio entre 0 e i
    const j = Math.floor(Math.random() * (i + 1));
    // intercambio
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

export const FICHAS = shuffleArray(CARTAS);
