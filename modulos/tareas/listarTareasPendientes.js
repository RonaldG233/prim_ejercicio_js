export async function listarTareasPendientes() {
    const usuariosRes = await fetch("https://jsonplaceholder.typicode.com/users");
    const tareasRes = await fetch("https://jsonplaceholder.typicode.com/todos");

    const usuarios = await usuariosRes.json();
    const tareas = await tareasRes.json();

    usuarios.forEach(usuario => {
        const pendientes = tareas.filter(t => t.userId === usuario.id && !t.completed);
        console.log(`\nUsuario: ${usuario.name}`);
        pendientes.forEach(t => console.log(`  - ${t.title}`));
    });
}
