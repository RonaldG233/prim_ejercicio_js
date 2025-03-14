import solicitud from "./solicitud.js"; // Importar la funcion de solicitud a la API

// Funcion para obtener los posts de un usuario especifico
export const getPost= async(URL,usuario)=>{
    return  await    solicitud(`${URL}/posts?userId=${usuario.id}`)  // Llamar a la API con el ID del usuario
    
}