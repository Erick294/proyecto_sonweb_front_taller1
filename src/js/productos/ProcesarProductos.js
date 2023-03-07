import axios from "axios";
//Fachada
export const obtenerProductosCategoriaFachada = async (categoria) =>{
   return await obtenerProductosCategoria(categoria)
}

export const obtenerProductosFachada = async () =>{
   return await obtenerProductos()
}

export const obtenerProductosIdFachada = async (id) =>{
   return await obtenerProductoId(id)
}

export const ingresarProductoFachada = async (body) =>{
   await ingresarProducto(body)
}

//Metodos consumo CRUD
const obtenerProductosCategoria = (categoria) =>  {
    axios.get(`http://localhost:8081/API/Sonweb/V1/clientes/productos/${categoria}`).then(r=>r.data)
}
	
const obtenerProductos = () =>  {
    axios.get(`http://localhost:8081/API/Sonweb/V1/clientes/productos`).then(r=>r.data)
}	

const obtenerProductoId = (id) =>  {
    axios.get(`http://localhost:8081/API/Sonweb/V1/clientes/productos/porId/${id}`).then(r=>r.data)
}

const obtenerProductoCodigo = (codigo) =>  {
    axios.get(`http://localhost:8081/API/Sonweb/V1/clientes/productos/porCodigo/${id}`).then(r=>r.data)
}

const obtenerProductoNombre = (nombre) =>  {
    const data = axios.get(`http://localhost:8081/API/Sonweb/V1/clientes/productos/porNombre/${nombre}`).then(r=>r.data)
    return data;
}
	
// insertar crud producto

const ingresarProducto = (body) =>  {
    axios.post(`http://localhost:8081/API/Sonweb/V1/clientes`, body).then(r=>r.data)
}

const actualizarProducto = (id, body) =>  {
    axios.put(`http://localhost:8081/API/Sonweb/V1/clientes/${id}`, body).then(r=>r.data)
}
	
const borrarProducto = (id) =>  {
    axios.delete(`http://localhost:8081/API/Sonweb/V1/clientes/${id}`).then(r=>r.data)
}


//export default insertarFachada
 