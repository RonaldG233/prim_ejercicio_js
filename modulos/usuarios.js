import solicitud from "./solicitud.js"; // Importar la funcion de solicitud a la API

// Funcion para obtener usuarios, si se pasa un ID, obtiene un usuario especifico
export  const getUsuarios=async(URL,id)=>{
    let ruta="";
    if(id){
     ruta=`${URL}/users?id=${id}`;
    }else{
        ruta=`${URL}/users`;// Definir la ruta segun haya o no ID
    }
  
    const usuarios = await solicitud(ruta);// Hacer la solicitud a la API
    return usuarios;// Retornar los usuarios obtenidos

}
