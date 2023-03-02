import axios from "axios";

//Metodos consumo CRUD
export const obtenerProductosCategoria = (categoria) =>  {
    axios.get(`http://localhost:8081/API/Sonweb/V1/clientes/productos/${categoria}`).then(r=>r.data)
}
	
export const obtenerProductos = () =>  {
    axios.get(`http://localhost:8081/API/Sonweb/V1/clientes/productos`).then(r=>r.data)
}	

export const obtenerProductoId = (id) =>  {
    axios.get(`http://localhost:8081/API/Sonweb/V1/clientes/productos/porId/${id}`).then(r=>r.data)
}

export const obtenerProductoCodigo = (codigo) =>  {
    axios.get(`http://localhost:8081/API/Sonweb/V1/clientes/productos/porCodigo/${id}`).then(r=>r.data)
}

export const obtenerProductoNombre = (nombre) =>  {
    axios.get(`http://localhost:8081/API/Sonweb/V1/clientes/productos/porNombre/${nombre}`).then(r=>r.data)
}
	
// insertar crud producto

export const ingresarProducto = (id) =>  {
    axios.post(`http://localhost:8081/API/Sonweb/V1/clientes`).then(r=>r.data)
}

export const actualizarProducto = (id, body) =>  {
    axios.put(`http://localhost:8081/API/Sonweb/V1/clientes/${id}`, body).then(r=>r.data)
}
	
export const borrarProducto = (id) =>  {
    axios.delete(`http://localhost:8081/API/Sonweb/V1/clientes/${id}`).then(r=>r.data)
}


//export default insertarFachada
 