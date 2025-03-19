// Esta funcion filtra posts y sus comentarios 

// Se define una funcion asincrona llamada filtrarPostsYComentarios
export async function filtrarPostsYComentarios(titulo) {
     // Se obtiene la lista de posts desde una API externa
    const resPosts = await fetch("https://jsonplaceholder.typicode.com/posts");
    // Convierte la respuesta a formato JSON para poder trabajar con los datos como un array de objetos
    const posts = await resPosts.json();
     // Filtra los posts que contengan el texto del título (sin importar mayúsculas o minúsculas)
    const filtrados = posts.filter(p =>
        p.title.toLowerCase().includes(titulo.toLowerCase())
    );
    // Recorre cada post filtrado para obtener sus comentarios
    for (const post of filtrados) {
         // Solicita los comentarios del post actual usando su ID 
        const resComentarios = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${post.id}`);
        // Guarda los comentarios obtenidos como una nueva propiedad "comentarios" dentro del post
        post.comentarios = await resComentarios.json();
    }
    // Muestra por consola todos los posts filtrados junto con sus respectivos comentarios
    console.log("Posts filtrados con comentarios:", filtrados);
}
