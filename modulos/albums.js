import solicitud from "./solicitud.js"; // Importar la funcion de solicitud a la API

// Funcion para obtener los albumes de un usuario especifico
export const getAlbums = async (URL, usuario) => {
    return await solicitud(`${URL}/albums?userId=${usuario.id}`); // Llamar a la API con el ID del usuario
};
