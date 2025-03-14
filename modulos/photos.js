import solicitud from "./solicitud.js"; // Importar la funcion de solicitud a la API

// Funcion para obtener las fotos de un album especifico
export const getPhotos = async (URL, album) => {
    return await solicitud(`${URL}/photos?albumId=${album.id}`); // Llamar a la API con el ID del album
};

