// Exporta una funcion asíncrona llamada usuariosTodo que no recibe parametros
export async function usuariosTodo() {
    // Solicita la lista completa de usuarios desde la API
    const resUsuarios = await fetch('https://jsonplaceholder.typicode.com/users');
    // Convierte la respuesta en un array de objetos (usuarios en formato JSON)
    const usuarios = await resUsuarios.json();
    // Recorre cada usuario de la lista
    for (const usuario of usuarios) {
         // Solicita todos los posts que ha creado este usuario (filtrados por su ID)
        const resPosts = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${usuario.id}`);
        // Convierte la respuesta en un array de posts
        const posts = await resPosts.json();
        // Recorre cada post de este usuario
        for (const post of posts) {
            // Solicita los comentarios que pertenecen a este post (filtrados por ID del post)
            const resComentarios = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${post.id}`);
            // Guarda los comentarios como una propiedad nueva dentro del post
            post.comentarios = await resComentarios.json();
        }
        // Despues de agregar los comentarios, guarda todos los posts en el objeto del usuario
        usuario.posts = posts;
        // Solicita todos los albumes que tiene este usuario
        const resAlbumes = await fetch(`https://jsonplaceholder.typicode.com/albums?userId=${usuario.id}`);
        // Convierte la respuesta en un array de albumes
        const albumes = await resAlbumes.json();

        // Recorre cada album del usuario
        for (const album of albumes) {
            // Solicita todas las fotos que pertenecen a este album (filtradas por ID del album)
            const resFotos = await fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${album.id}`);
            // Guarda las fotos como una nueva propiedad dentro del álbum
            album.fotos = await resFotos.json();
        }

        // Después de agregar las fotos, guarda todos los álbumes en el objeto del usuario
        usuario.albumes = albumes;
    }
    // Muestra en consola toda la informacion completa de cada usuario: sus posts (con comentarios) y sus albumes (con fotos)
    console.log("Usuarios con todo:", usuarios);
}
