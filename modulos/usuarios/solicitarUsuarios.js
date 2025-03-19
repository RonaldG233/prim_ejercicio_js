// Esta funcion obtiene una lista de usuarios y la muestra por consola

// Se define una funcion asincrona llamada solicitarUsuarios
export async function solicitarUsuarios() {
    // Realiza una solicitud HTTP para obtener todos los usuarios desde la API
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    // Convierte la respuesta en un array de objetos JSON que contiene los datos de los usuarios
    const usuarios = await res.json();

    // Crea un nuevo array llamado resultado, que contiene solo el nombre y teléfono de cada usuario
    const resultado = usuarios.map(u => ({
        nombre: u.name, //toma el nombre del usuario
        telefono: u.phone //toma el telefono del usuario
    }));
    // Muestra por consola la lista de usuarios con solo nombre y teléfono
    console.log("Usuarios (nombre y teléfono):", resultado);
}
