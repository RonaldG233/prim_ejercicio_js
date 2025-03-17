export async function filtrarPostsYComentarios(titulo) {
    const resPosts = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await resPosts.json();

    const filtrados = posts.filter(p =>
        p.title.toLowerCase().includes(titulo.toLowerCase())
    );

    for (const post of filtrados) {
        const resComentarios = await fetch("https://jsonplaceholder.typicode.com/comments?postId=${post.id}");
        post.comentarios = await resComentarios.json();
    }

    console.log("Posts filtrados con comentarios:", filtrados);
}
