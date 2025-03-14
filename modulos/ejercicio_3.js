import fetch from "./app.js";
const URL = "https://jsonplaceholder.typicode.com";

export const filtrarPostsPorTitulo = async (titulo) => {
  try {
    const response = await fetch(`${URL}/posts`);
    const posts = await response.json();
    const postFiltrado = posts.find(post => post.title.toLowerCase().includes(titulo.toLowerCase()));
    
    if (!postFiltrado) {
      console.log("No se encontraron posts con ese título.");
      return;
    }
    
    const comentariosResponse = await fetch(`${URL}/comments?postId=${postFiltrado.id}`);
    postFiltrado.comentarios = await comentariosResponse.json();
    
    console.log("Post encontrado:", postFiltrado);
  } catch (error) {
    console.error("Error al filtrar posts:", error);
  }
};