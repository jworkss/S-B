//  formulario del Newsletter
(function () {
  const form = document.getElementById("miFormulario");
  const modalEl = document.getElementById("popupEnviado");

  if (!form || !modalEl) return;

  const miModal = new bootstrap.Modal(modalEl);

  // Añade el listener para el evento 'submit'
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    miModal.show();

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

//  Carrito de Compras
(function () {
  let cartItems = {};

  const allBuyButtons = document.querySelectorAll(".btn-card");
  const cartBadge = document.getElementById("cartCountBadge");
  const cartModalBody = document.getElementById("cartModalBody");
  const cartItemList = document.getElementById("cartItemList");
  const cartEmptyMessage = document.getElementById("cartEmptyMessage");

  // Nuevos elementos para el Total
  const cartTotalContainer = document.getElementById("cartTotalContainer");
  const cartTotalAmount = document.querySelector(".cart-total-amount");

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

  function updateCart() {
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
      cartEmptyMessage.style.display = "none";
      cartItemList.style.display = "block";
      cartTotalContainer.style.display = "block";

      itemNames.forEach((productName) => {
        const item = cartItems[productName];
        const quantity = item.quantity;
        const price = item.price;

        totalCount += quantity;
        totalAmount += quantity * price;

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

    // Actualizar  (badge) del carrito
    cartBadge.innerText = totalCount;
    cartBadge.classList.toggle("show", totalCount > 0);

    cartTotalAmount.innerText = `$${totalAmount.toFixed(2)}`;
  }

  //  manejar el clic en "COMPRAR"
  function handleAddToCart(event) {
    event.preventDefault();
    const button = event.target;
    const productName = button.dataset.productName;
    const productPrice = parseFloat(button.dataset.price);

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

  //  manejar los botones + y -
  function handleCartAdjust(event) {
    const clickedButton = event.target.closest(".btn-cart-adjust");
    if (!clickedButton) return;

    const productName = clickedButton.dataset.productName;
    if (!cartItems[productName]) return;

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

  allBuyButtons.forEach((button) => {
    button.addEventListener("click", handleAddToCart);
  });

  cartItemList.addEventListener("click", handleCartAdjust);

  updateCart();
})();

// --- INICIO: Animación On-Scroll ---
document.addEventListener("DOMContentLoaded", () => {
  // Configuración del observador
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.1, // La animación se dispara al ver el 10% del elemento
    }
  );

  const targets = document.querySelectorAll(
    ".productos-title, .product-card, " +
      ".colecciones-title, .colec-card, " +
      ".moda-title, .moda-text, .moda-subtext, .btn-moda, .moda-img, " +
      ".why-title, .why-card, " +
      ".reviews-title, .review-card"
  );

  targets.forEach((target) => {
    target.classList.add("animate-on-scroll");
    observer.observe(target);
  });
});
// --- FIN: Animación On-Scroll ---
