# Pagina web responsiva

Este proyecto fue realizado para la cátedra de Tecnología de Diseño Multimedial II.

## Alumno
* Marcos Duarte

## Cátedra
* **Materia:** Tecnología de Diseño Multimedial II
* **Carrera:** Diseño Multimedial
* **Institución:** Universidad Nacional de Moreno (UNM)

## Docentes
* Natalia Monserrat
* Paula Liliana Coton

# 🛍️ Scratch & Bars - Landing Page E-commerce

Este repositorio contiene el código fuente del landing page para "Scratch & Bars", un sitio web de e-commerce de una sola página (SPA) enfocado en la venta de streetwear y moda de diseñador.

El proyecto está construido desde cero con **HTML5, CSS3 y JavaScript moderno**, utilizando **Bootstrap 5** como framework principal.

**[Puedes ver una demo en vivo aquí](https://jworkss.github.io/S-B/#)**

---

## ✨ Características Principales

Este proyecto incluye una amplia gama de características modernas para una experiencia de usuario completa:

* **Diseño 100% Responsivo:** Se adapta perfectamente a dispositivos móviles, tablets y escritorio.
* **Tema Claro y Oscuro:** Un interruptor funcional que guarda la preferencia del usuario en `localStorage`.
* **Carrito de Compras Funcional:** Lógica completa del lado del cliente escrita en JavaScript para:
    * Añadir productos al carrito.
    * Ajustar cantidades (sumar/restar).
    * Eliminar productos si la cantidad llega a cero.
    * Mostrar el total de la compra en tiempo real.
    * Actualizar el *badge* del ícono del carrito.
* **Sección de Productos Adaptativa:**
    * En **escritorio** (`lg` y superior), se muestra un *grid* de 4 columnas.
    * En **tablets y móviles** (`md` e inferior), se transforma en un **carrusel de Bootstrap** funcional con deslizamiento táctil.
* **Modales Interactivos:**
    * Modal de **Iniciar Sesión** (`#loginModal`).
    * Modal de **Carrito de Compras** (`#cartModal`).
    * Modal de confirmación para el formulario de Newsletter.
* **Animaciones Modernas:**
    * Efectos "Fade In" al cargar la página.
    * Animaciones de aparición (`IntersectionObserver`) cuando el usuario hace scroll por las secciones.
    * Efecto de transformación en "X" para el menú de hamburguesa móvil.
* **Navegación Fluida:**
    * Barra de navegación fija (`fixed-top`).
    * Implementación de **ScrollSpy** de Bootstrap para resaltar el enlace activo según la sección de la página.
* **Integración de Terceros:**
    * Widget flotante de chat de **WhatsApp** (Elfsight).
    * Iconografía completa de **Bootstrap Icons**.

---

## 🔧 Tecnologías Utilizadas

* **HTML5:** Para la estructura semántica del sitio.
* **CSS3:**
    * Variables CSS (`:root`) para una paleta de colores fácil de mantener (Modo Claro/Oscuro).
    * Animaciones (`@keyframes`).
    * Flexbox y Grid para el layout.
* **JavaScript (ES6+):**
    * Manipulación del DOM (sin jQuery).
    * Manejo de eventos.
    * `localStorage` para el tema.
    * `IntersectionObserver` API para animaciones on-scroll.
* **Bootstrap 5.3:**
    * Sistema de Grid (`row`, `col-`).
    * Componentes (Navbar, Modal, Carousel, Botones).
    * Utilidades (Display, Spacing, etc.).
* **Bootstrap Icons:** Para toda la iconografía del sitio.

---

## 🚀 Cómo Empezar

Este es un proyecto web estático. No requiere un *build process* ni dependencias complejas.

1.  **Clona el repositorio:**
    ```bash
    git clone(https://github.com/jworkss/S-B.git)
    ```

2.  **Abre el proyecto:**
    Navega a la carpeta del proyecto y simplemente abre el archivo `index.html` en tu navegador web preferido.

---
