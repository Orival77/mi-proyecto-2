document.getElementById("imagenes").addEventListener('mouseover', changeImage);
document.getElementById("imagenes").addEventListener('mouseout', resetImage);

function changeImage() {
  var image = document.getElementById("imagenes");
  image.src = "img/1.jpg"; // Reemplaza con la ruta de la nueva imagen
}

function resetImage() {
  var image = document.getElementById("imagenes");
  image.src = "img/2.jpg"; // Reemplaza con la ruta de la imagen original
}

function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle("dark-mode");
  }
  
  // Obtener el botón por su id
  const modoOscuroBoton = document.getElementById("modoOscuroBoton");
  
  // Agregar el evento de clic al botón para alternar el modo
  modoOscuroBoton.addEventListener("click", toggleDarkMode);