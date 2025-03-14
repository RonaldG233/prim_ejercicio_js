// import {fetch} from "./app.js";
const URL = "https://jsonplaceholder.typicode.com";

let nombreUsuario=prompt("Ingre el nombre de usuario");
export const usuarioBusqueda = async (nombreUsuario) => {
  try {
    const response = await fetch(`${URL}/users`);
    const usuarios = await response.json();
    const usuario = usuarios.find(user => user.username=== nombreUsuario);
    
    if (!usuario) {
      console.log("no se ha encontrado usuario");
      return;
    }
    
    const albumsPhotos= await fetch(`${URL}/albums?userId=${usuario.id}`);
    const albums = await albumsPhotos.json();
    
    for (const album of albums) {
      const fotosResponse = await fetch(`${URL}/photos?albumId=${album.id}`);
      album.photos = await fotosResponse.json();
    }
    
    console.log("datos del usuario: ", usuario);
    console.log("sus respectivos albumes y fotos: ", albums);
  } catch (error) {
    console.error("error al buscar el usuario :", error);
  }
};
console.log(usuarioBusqueda(nombreUsuario));

