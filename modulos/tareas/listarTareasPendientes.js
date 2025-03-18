

// Esta funcion es asincrona, lo que se dice que puede esperar (await) por tareas que toman tiempo como llamadas a internet
export async function listarTareasPendientes() {

    // Se hace una solicitud para obtener los usuarios desde la URL indicada
    const usuariosRest = await fetch("https://jsonplaceholder.typicode.com/users");

    // Se hace otra solicitud para obtener las tareas desde otra URL
    const tareasRest = await fetch("https://jsonplaceholder.typicode.com/todos");

    // Se convierten las respuestas a formato JSON para poder usarlas como objetos y arreglos en JavaScript
    const usuarios = await usuariosRest.json();
    const tareas = await tareasRest.json();

    // Se recorre el arreglo de usuarios usando un bucle for clasico
    for (let i = 0; i < usuarios.length; i++) {
        const usuario = usuarios[i]; // Se toma el usuario actual

        // Se filtran las tareas que pertenecen a este usuario y que no estan completadas
        const pendientes = [];
        for (let j = 0; j < tareas.length; j++) {
            const t = tareas[j]; // Se toma la tarea actual
            if (t.userId === usuario.id && !t.completed) {
                pendientes.push(t); // Si cumple la condicion, se agrega a la lista de pendientes
            }
        }

        // Se imprime el nombre del usuario en consola
        console.log(`\nUsuario: ${usuario.name}`);

        // Se recorre la lista de tareas pendientes de este usuario e imprime cada titulo
        for (let k = 0; k < pendientes.length; k++) {
            console.log(`  - ${pendientes[k].title}`);
        }
    }
}

