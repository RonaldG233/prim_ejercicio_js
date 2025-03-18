// Se importan funciones desde el archivo index.js que esta dentro de la carpeta modulos
// Estas funciones realizan diferentes acciones relacionadas con tareas, usuarios y posts.
import {listarTareasPendientes,solicitarUsuarios,solicitarUsuariosUsername,filtrarPostsYComentarios,usuariosTodo} from "./modulos/index.js";
// Se define una funcion asincrona llamada main, que es la funcion principal del programa
async function main() {
    // Se muestra un cuadro de texto al usuario para que elija una opcion
    // prompt permite que el usuario escriba un numero para seleccionar un ejercicio
    const opcion = prompt("Seleccione el número del ejercicio: \n1. Listar tareas pendientes por usuario \n2. Buscar usuario por username + álbumes + fotos\n3. Filtrar posts por nombre y agregar comentarios\n4. Listar nombre y teléfono de usuarios\n5. Consultar usuarios con posts + comentarios + álbumes + fotos");
    // Se evalua la opcion que el usuario escribio utilizando switch
    switch (opcion) {
        // Si el usuario escribio "1", se llama a la funcion para listar tareas pendientes
        case "1":
            await listarTareasPendientes();// Se espera a que la funcion termine
            break;// Se termina esta opcion
        // Si escribio "2", se pide que escriba un username y se llama la funcion relacionada
        case "2":
            const username = prompt("Ingrese el username del usuario:");// Se solicita username
            await solicitarUsuariosUsername(username);// Se busca informacion del usuario con ese username
            break;// Se termina esta opcion
        // Si escribio "3", se pide un titulo de post y se llama la funcion para filtrar    
        case "3":
            const titulo = prompt("Ingrese el título o parte del título del post:");// Se solicita titulo para filtrar posts y comentarios
            await filtrarPostsYComentarios(titulo);// Se filtran los posts segun el titulo
            break;// Se termina esta opcion
        // Si escribio "4", se llama la funcion para mostrar nombres y telefonos de usuarios    
        case "4":
            await solicitarUsuarios(); // Se lista informacion basica de usuarios
            break;// Se termina esta opcion
       // Si escribio "5", se llama la funcion que consulta toda la informacion de usuarios     
        case "5":
            await usuariosTodo(); // Incluye posts, comentarios, albumes y fotos
            break;// Se termina esta opcion
        // Si escribio otra cosa, se muestra un mensaje de error
        default:
            console.log("Opcion no valida");// Mensaje de opcion invalida
    }
}
// Se llama a la funcion main para que el programa inicie su ejecucion
main();

