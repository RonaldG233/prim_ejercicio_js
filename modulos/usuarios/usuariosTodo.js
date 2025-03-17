export async function usuariosTodo() {
    const resUsuarios = await fetch('https://jsonplaceholder.typicode.com/users');
    const usuarios = await resUsuarios.json();

    for (const usuario of usuarios) {
        const resPosts = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${usuario.id}`);
        const posts = await resPosts.json();

        for (const post of posts) {
            const resComentarios = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${post.id}`);
            post.comentarios = await resComentarios.json();
        }

        usuario.posts = posts;

        const resAlbumes = await fetch(`https://jsonplaceholder.typicode.com/albums?userId=${usuario.id}`);
        const albumes = await resAlbumes.json();

        for (const album of albumes) {
            const resFotos = await fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${album.id}`);
            album.fotos = await resFotos.json();
        }

        usuario.albumes = albumes;
    }

    console.log("Usuarios con todo:", usuarios);
}
