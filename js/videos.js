// Espera a que el contenido de la página (HTML) esté cargado
document.addEventListener("DOMContentLoaded", function () {
  // en este array vamos a poner los videos
  // ojo con que las rutas sean las correctas.
  // (Ej. 'videos/corriendo.mp4', 'img/seleccioens/hero/video.mp4', etc.)
  const listaDeVideos = [
    "videos/corriendo.mp4",
    "videos/jump.mp4",
    "videos/stand.mp4",
    "img/seleccioens/hero/video.mp4",
  ];
  // podes agregar todos los que quieras

  // Obtener los elementos del DOM
  const videoElement = document.getElementById("hero-video");
  const sourceElement = document.getElementById("video-source");

  //  Calcular un índice aleatorio
  // Math.random() da un número entre 0 y 0.99...
  // Lo multiplicamos por la longitud de la lista y redondeamos hacia abajo.
  const indiceAleatorio = Math.floor(Math.random() * listaDeVideos.length);

  // Seleccionar el video aleatorio de la lista
  const videoAleatorio = listaDeVideos[indiceAleatorio];

  // Asignar el video aleatorio al <source>
  sourceElement.src = videoAleatorio;

  //  Cargar el nuevo video
  // Es importante llamar a .load() en el elemento <video>
  // después de cambiar su <source>
  videoElement.load();
});
