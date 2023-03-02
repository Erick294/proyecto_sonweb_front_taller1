import axios from "axios";

//Metodos fachada
//Export en cada fachada permite exponerlas

export const insertarFachada = async (body) => {
    await insertar(body);
}

//Metodos consumo CRUD

const insertar = (body) => {
    axios.post(`http://localhost:8081/API/Sonweb/V1/clientes`, body).then(r=>r.data)
}


//export default insertarFachada
 