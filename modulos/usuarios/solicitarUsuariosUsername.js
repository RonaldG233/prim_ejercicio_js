export async function solicitarUsuariosUsername(username) {
    const resUsuarios = await fetch("https://jsonplaceholder.typicode.com/users");
    const usuarios = await resUsuarios.json();

    const usuario = usuarios.find(u => u.username.toLowerCase() === username.toLowerCase());
    if (!usuario) {
        console.log("Usuario no ha sido encontrado");
        return;
    }

    console.log("Datos del usuario:", usuario);

    const resAlbumes = await fetch(`https://jsonplaceholder.typicode.com/albums?userId=${usuario.id}`);
    const albumes = await resAlbumes.json();

    for (const album of albumes) {
        const resFotos = await fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${album.id}`);
        album.fotos = await resFotos.json();
    }

    console.log("albumes con fotos:", albumes);
}
