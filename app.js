import {listarTareasPendientes,solicitarUsuarios,solicitarUsuariosUsername,filtrarPostsYComentarios,usuariosTodo} from "./modulos/index.js";

async function main() {
    const opcion = prompt("Seleccione el número del ejercicio: \n1. Listar tareas pendientes por usuario \n2. Buscar usuario por username + álbumes + fotos\n3. Filtrar posts por nombre y agregar comentarios\n4. Listar nombre y teléfono de usuarios\n5. Consultar usuarios con posts + comentarios + álbumes + fotos");

    switch (opcion) {
        case "1":
            await listarTareasPendientes();
            break;
        case "2":
            const username = prompt("Ingrese el username del usuario:");
            await solicitarUsuariosUsername(username);
            break;
        case "3":
            const titulo = prompt("Ingrese el título o parte del título del post:");
            await filtrarPostsYComentarios(titulo);
            break;
        case "4":
            await solicitarUsuarios();
            break;
        case "5":
            await usuariosTodo();
            break;
        default:
            console.log("Opcion no valida");
    }
}

main();

