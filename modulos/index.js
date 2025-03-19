// Este archivo realizar la funcion de exportar funciones desde otras carpetas para que se puedan usar desde otros archivos tal cual del posts tareas y usuarios.

// se reexporta todos los archivos que venga del archivo index.js q se encuentra en la carpeta tareas
export * from "./tareas/index.js";
// se reexporta todos los archivos que venga del archivo index.js q se encuentra en la carpeta usuarios
export * from "./usuarios/index.js";
// se reexporta todos los archivos que venga del archivo index.js q se encuentra en la carpeta posts
export * from "./posts/index.js";
