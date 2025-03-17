export async function solicitarUsuarios() {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const usuarios = await res.json();

    const resultado = usuarios.map(u => ({
        nombre: u.name,
        telefono: u.phone
    }));

    console.log("Usuarios (nombre y teléfono):", resultado);
}
