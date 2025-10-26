// ==== Manejador del formulario del Newsletter ====
(function () {
  // Busca el formulario y el modal en el DOM
  const form = document.getElementById("miFormulario");
  const modalEl = document.getElementById("popupEnviado");

  // Si no existen, no hace nada
  if (!form || !modalEl) return;

  // Inicializa el modal de Bootstrap
  const miModal = new bootstrap.Modal(modalEl);

  // Añade el listener para el evento 'submit'
  form.addEventListener("submit", (event) => {
    // Previene que la página se recargue
    event.preventDefault();

    // Muestra el modal
    miModal.show();

    // Resetea el formulario
    form.reset();
  });
})();

// ==== Toggle de tema con iconos ====
document.addEventListener("DOMContentLoaded", () => {
  const root = document.documentElement;
  const toggleBtn = document.getElementById("themeToggle");
  const icon = document.getElementById("themeIcon");
  const savedTheme = localStorage.getItem("theme") || "dark";

  function setTheme(theme) {
    root.setAttribute("data-bs-theme", theme);
    icon.className = theme === "dark" ? "bi bi-moon" : "bi bi-sun";
    localStorage.setItem("theme", theme);
  }

  // Inicializar
  setTheme(savedTheme);

  // Cambiar al hacer click
  toggleBtn.addEventListener("click", () => {
    const newTheme =
      root.getAttribute("data-bs-theme") === "dark" ? "light" : "dark";
    setTheme(newTheme);
  });
});

// ==== Manejador del Carrito de Compras ====
(function () {
  // 1. Seleccionar todos los botones de "Comprar"
  const allBuyButtons = document.querySelectorAll(".btn-buy, .btn-card");

  // 2. Seleccionar el badge del carrito
  const cartBadge = document.getElementById("cartCountBadge");

  // 3. Inicializar el contador
  let cartCount = 0;

  // Si no hay botones o badge, no hacer nada
  if (allBuyButtons.length === 0 || !cartBadge) {
    return;
  }

  // 4. Función para actualizar el carrito
  function addToCart(event) {
    // Prevenir que el link (href="#") recargue o mueva la página
    event.preventDefault();

    // Incrementar el contador
    cartCount++;

    // Actualizar el texto del badge
    cartBadge.innerText = cartCount;

    // Mostrar el badge (añadiendo la clase .show)
    cartBadge.classList.add("show");
  }

  // 5. Asignar la función a cada botón
  allBuyButtons.forEach((button) => {
    button.addEventListener("click", addToCart);
  });
})();
