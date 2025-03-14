// Funcion generica para hacer solicitudes a la API
const solicitud = async (url) => {
    const peticion = await fetch(url); // Realizar la peticion HTTP a la URL
    const data = await peticion.json(); // Convertir la respuesta a formato JSON
    return data; // Retornar los datos obtenidos
};

export default solicitud; // Exportar la funcion para su uso en otros archivos

