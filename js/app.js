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

// ==== Manejador del Carrito de Compras (Avanzado) ====
// ==== Manejador del Carrito de Compras (Avanzado con Total) ====
(function () {
  // 1. Almacén de datos
  // Ahora guarda cantidad Y precio
  // Ej: { "BUZOS": { quantity: 2, price: 89.99 } }
  let cartItems = {};

  // 2. Seleccionar elementos del DOM
  const allBuyButtons = document.querySelectorAll(".btn-card");
  const cartBadge = document.getElementById("cartCountBadge");
  const cartModalBody = document.getElementById("cartModalBody");
  const cartItemList = document.getElementById("cartItemList");
  const cartEmptyMessage = document.getElementById("cartEmptyMessage");

  // Nuevos elementos para el Total
  const cartTotalContainer = document.getElementById("cartTotalContainer");
  const cartTotalAmount = document.querySelector(".cart-total-amount");

  // Si faltan elementos clave, no continuar
  if (
    !cartBadge ||
    !cartItemList ||
    !cartEmptyMessage ||
    !cartTotalContainer ||
    !cartTotalAmount
  ) {
    console.warn("Faltan elementos del DOM para el carrito.");
    return;
  }

  // 3. Función principal para renderizar (actualizar) el carrito
  function updateCart() {
    // Limpiar el contenido actual
    cartItemList.innerHTML = "";

    let totalCount = 0;
    let totalAmount = 0.0;
    const itemNames = Object.keys(cartItems);

    if (itemNames.length === 0) {
      // Mostrar mensaje de carrito vacío
      cartEmptyMessage.style.display = "block";
      cartItemList.style.display = "none";
      cartTotalContainer.style.display = "none"; // Ocultar total
    } else {
      // Ocultar mensaje de carrito vacío
      cartEmptyMessage.style.display = "none";
      cartItemList.style.display = "block";
      cartTotalContainer.style.display = "block"; // Mostrar total

      // Construir y añadir cada item al modal
      itemNames.forEach((productName) => {
        const item = cartItems[productName];
        const quantity = item.quantity;
        const price = item.price;

        totalCount += quantity;
        totalAmount += quantity * price;

        // Plantilla HTML para cada item en el carrito
        const itemHTML = `
          <div class="cart-item">
            <span class="cart-item-name">${productName}</span>
            <div class="cart-item-controls">
              <button 
                class="btn-cart-adjust btn-cart-remove" 
                data-product-name="${productName}" 
                aria-label="Quitar uno"
              >
                &ndash;
              </button>
              <span class="cart-item-quantity">${quantity}</span>
              <button 
                class="btn-cart-adjust btn-cart-add" 
                data-product-name="${productName}" 
                aria-label="Añadir uno"
              >
                +
              </button>
            </div>
          </div>
        `;
        cartItemList.insertAdjacentHTML("beforeend", itemHTML);
      });
    }

    // Actualizar el "globo" (badge) del carrito
    cartBadge.innerText = totalCount;
    cartBadge.classList.toggle("show", totalCount > 0);

    // Actualizar el monto Total en el footer del modal
    // .toFixed(2) asegura que siempre muestre dos decimales (ej. $15.50)
    cartTotalAmount.innerText = `$${totalAmount.toFixed(2)}`;
  }

  // 4. Función para manejar el clic en "COMPRAR"
  function handleAddToCart(event) {
    event.preventDefault();
    const button = event.target;
    const productName = button.dataset.productName;
    const productPrice = parseFloat(button.dataset.price); // Convertir a número

    if (!productName || isNaN(productPrice)) return;

    // Si el producto no está en el carrito, añadirlo
    if (!cartItems[productName]) {
      cartItems[productName] = {
        quantity: 0,
        price: productPrice,
      };
    }

    // Incrementar la cantidad
    cartItems[productName].quantity++;

    // Actualizar la vista
    updateCart();
  }

  // 5. Función para manejar los botones + y - DENTRO del modal
  function handleCartAdjust(event) {
    const clickedButton = event.target.closest(".btn-cart-adjust");
    if (!clickedButton) return; // Salir si no se hizo clic en un botón

    const productName = clickedButton.dataset.productName;
    if (!cartItems[productName]) return; // Seguridad

    if (clickedButton.classList.contains("btn-cart-add")) {
      // Botón +
      cartItems[productName].quantity++;
    } else if (clickedButton.classList.contains("btn-cart-remove")) {
      // Botón -
      cartItems[productName].quantity--;
      // Si la cantidad llega a 0, eliminar el producto del carrito
      if (cartItems[productName].quantity <= 0) {
        delete cartItems[productName];
      }
    }

    // Actualizar la vista
    updateCart();
  }

  // 6. Asignar los "oyentes" de eventos

  // A los botones "COMPRAR" de la página
  allBuyButtons.forEach((button) => {
    button.addEventListener("click", handleAddToCart);
  });

  // Al cuerpo del modal (usando delegación de eventos para los botones + y -)
  cartItemList.addEventListener("click", handleCartAdjust);

  // 7. Inicializar el carrito al cargar la página
  updateCart();
})();
