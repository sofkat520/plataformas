# Registro de Refinamiento Manual (REFINAMIENTO.md)

En este documento se detallan los ajustes manuales realizados al código generado inicialmente por la IA para optimizar la accesibilidad, el diseño, la adaptabilidad y la estructura general del portal web institucional "Diálogo y Desarrollo".

---

### Cambio 1: Optimización de Accesibilidad en el Menú Hamburguesa
* **Código original (IA):** El botón del menú móvil consistía en un elemento `<div>` básico con un evento `onclick` simple en JavaScript.
* **Cambio realizado:** Se reemplazó por un elemento `<button>` nativo de HTML5, agregando las etiquetas ARIA `aria-label="Abrir menú de navegación"` y `aria-expanded="false"`. Además, se vinculó la lógica en JS Vanilla para alternar dinámicamente el estado del atributo `aria-expanded`.
* **Justificación técnica:** Garantiza que los usuarios que emplean lectores de pantalla (screen readers) entiendan la función y el estado (abierto/cerrado) del menú, cumpliendo con la pauta WCAG 2.1 AA.

---

### Cambio 2: Corrección de Contraste y Ajuste de Paleta Institucional
* **Código original (IA):** Los badges de categoría usaban texto en tono terracota (`#c75b39`) sobre un fondo gris claro genérico (`#f3f4f6`).
* **Cambio realizado:** Se ajustaron las clases de Tailwind CSS para aplicar un fondo con tono terracota suave al 15% de opacidad y texto en color verde bosque oscuro (`#1a472a`).
* **Justificación técnica:** El contraste original no alcanzaba la relación mínima de 4.5:1 exigida para texto normal en el nivel WCAG AA. La corrección mejora la legibilidad y unifica la paleta cromática definida para la ONG.

---

### Cambio 3: Reemplazo de Contenido Generico por Temáticas Nacionales de Perú
* **Código original (IA):** La sección de publicaciones incluía tarjetas con títulos genéricos ("Artículo de prueba 1") y párrafos en *Lorem Ipsum*.
* **Cambio realizado:** Se redactaron 6 artículos realistas con titulares centrados en la coyuntura política y ambiental peruana (ej. *"Gestión hídrica en la costa peruana"*, *"Desafíos de la reforma política"*, *"Desalinización y recursos hídricos"*), agregando nombres de autores y fechas contextualizadas en 2026.
* **Justificación técnica:** Dota de realismo y valor situacional al portal institucional, asegurando que el prototipo refleje fielmente las necesidades planteadas en el caso de estudio.

---

### Cambio 4: Implementación de Carga Diferida (Lazy Loading) en Imágenes
* **Código original (IA):** Las etiquetas `<img>` generadas para las tarjetas de publicaciones y el grid multimedia no contaban con atributos de optimización de carga.
* **Cambio realizado:** Se añadió el atributo `loading="lazy"` a todas las imágenes secundarias del cuerpo de la página y del footer.
* **Justificación técnica:** Pospone la descarga de imágenes que se encuentran fuera de la vista inicial del usuario (viewport), reduciendo el tiempo de carga inicial y optimizando la métrica LCP (Largest Contentful Paint).

---

### Cambio 5: Corrección de Desbordamiento Responsive (Mobile Overflow)
* **Código original (IA):** En pantallas con anchos inferiores a 360px, el contenedor principal provocaba un desplazamiento horizontal (scroll x) debido a un padding fijo en píxeles.
* **Cambio realizado:** Se cambiaron los anchos fijos por utilidades fluidas de Tailwind CSS (`w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`).
* **Justificación técnica:** Garantiza que la maquetación sea mobile-first y 100% adaptable en dispositivos móviles pequeños, evitando la deformación de la interfaz.