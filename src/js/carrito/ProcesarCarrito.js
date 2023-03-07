import axios from "axios";

//Fachadas
export const insertarCarritoFachada = async (body) =>  {
    await ingresarProducto(body);
}

export const obtenerCarritoFachada = async () =>  {
    return await obtenerProductos();
}

export const borrarCarritoFachada = async (id) =>  {
    await borrarProducto(id);
}

//Metodos consumo CRUD	
const obtenerProductos = () =>  {
    const data = axios.get(`http://localhost:8081/API/Sonweb/V1/carritos`).then(r=>r.data)
    return data
}	
	
// insertar crud producto

const ingresarProducto = (body) =>  {
    axios.post(`http://localhost:8081/API/Sonweb/V1/carritos`, body).then(r=>r.data)
}

const actualizarProducto = (id, body) =>  {
    axios.put(`http://localhost:8081/API/Sonweb/V1/carritos/${id}`, body).then(r=>r.data)
}
	
const borrarProducto = (id) =>  {
    axios.delete(`http://localhost:8081/API/Sonweb/V1/carritos/${id}`).then(r=>r.data)
}


//export default insertarFachada
 