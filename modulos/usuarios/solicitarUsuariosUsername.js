// Exporta una función asíncrona llamada solicitarUsuariosUsername que recibe como parámetro un username (nombre de usuario)
export async function solicitarUsuariosUsername(username) {
    // Realiza una solicitud HTTP para obtener todos los usuarios desde la API
    const resUsuarios = await fetch("https://jsonplaceholder.typicode.com/users");
    // Convierte la respuesta a formato JSON para tener la lista de usuarios como un array de objetos
    const usuarios = await resUsuarios.json();
     // Busca un usuario cuyo username coincida (ignorando mayusculas o minusculas)
    const usuario = usuarios.find(u => u.username.toLowerCase() === username.toLowerCase());
    // Si no se encuentra el usuario, muestra un mensaje y termina la función
    if (!usuario) {
        console.log("Usuario no ha sido encontrado");
        return;// Sale de la funcion sin continuar
    }
    // Si se encontro el usuario, muestra sus datos completos en consola
    console.log("Datos del usuario:", usuario);
    // Realiza una solicitud HTTP para obtener los álbumes del usuario según su ID
    const resAlbumes = await fetch(`https://jsonplaceholder.typicode.com/albums?userId=${usuario.id}`);
    // Convierte la respuesta a JSON para tener la lista de álbumes
    const albumes = await resAlbumes.json();

    // Recorre cada álbum para obtener sus fotos correspondientes
    for (const album of albumes) {
        // Solicita las fotos de este álbum usando el ID del álbum
        const resFotos = await fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${album.id}`);
        // Guarda las fotos obtenidas como una propiedad llamada "fotos" dentro del álbum
        album.fotos = await resFotos.json();
    }
    // Muestra los álbumes del usuario, ya con sus fotos incluidas
    console.log("albumes con fotos:", albumes);
}
