import { getUsuarios, getPost, getCommets, getAlbums, getPhotos } from "./modulos/index.js";

const URL = "https://jsonplaceholder.typicode.com";

// Funcion para obtener datos de usuarios, sus posts, comentarios, albumes y fotos
const manejardatos = async () => {
    const usuarios = await getUsuarios(URL);// Obtener todos los usuarios
    return await Promise.all(usuarios.map(async (usuario) => {
        const posts = await getPost(URL, usuario);// Obtener los posts del usuario
        const albums = await getAlbums(URL, usuario);// Obtener los albumes del usuario

        // Agregar comentarios a cada post  
        const comentPost = await Promise.all(posts.map(async (post) => {
            const coments = await getCommets(URL, post);
            return { ...post, coments };// Retornar el post con sus comentarios
        }));
        
        // Agregar fotos a cada album
        const albumsWithPhotos = await Promise.all(albums.map(async (album) => {
            const photos = await getPhotos(URL, album);
            return { ...album, photos }; // Retornar el album con sus fotos
        }));

        return { ...usuario, comentPost, albums: albumsWithPhotos }; // Retornar usuario con toda la info
    }));
};

// Ejecutar la funcion y mostrar el primer usuario en consola
manejardatos().then((data) => {
    console.log(data[0]); // Amuestra usuarios con posts, comentarios, albumes y fotos
});

