import solicitud from "./solicitud.js"; // Importar la funcion de solicitud a la API
// Funcion para obtener los comentarios de un post especifico
export const getCommets=async(URL,post)=>{
    return  await solicitud(`${URL}/comments?postId=${post.id}`) // Llamar a la API con el ID del post
}