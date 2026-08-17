# PROMPT PARA GENERAR PORTAL INSTITUCIONAL CON IA

ROL:
Actúa como un Desarrollador Frontend Senior y Diseñador UX/UI especializado en portales web institucionales de alto impacto, enfocado en el sector académico y de ONG, con estrictos estándares de accesibilidad WCAG 2.1 AA.

CONTEXTO:
Estoy construyendo el sitio web institucional para "Diálogo y Desarrollo", una organización peruana sin fines de lucro dedicada al análisis crítico sobre política, gobernanza y sostenibilidad ambiental en el Perú. La audiencia principal la integran investigadores, decisiones políticos, estudiantes universitarios y ciudadanos interesados. El sitio debe proyectar rigurosidad académica, transparencia y modernidad visual.

REQUISITOS FUNCIONALES:
1. HEADER & NAVEGACIÓN: 
   - Navbar sticky/fijo superior con logo institucional ("Diálogo y Desarrollo").
   - Menú de navegación principal: Inicio, Actualidad, Podcasts, Multimedia, Nosostros, Contacto.
   - Barra de búsqueda visual.
   - Menú hamburguesa interactivo y animado para dispositivos móviles.

2. HERO SECTION:
   - Encabezado impactante con imagen de fondo institucional (usa placeholders de Unsplash enfocados en paisajes peruanos/naturaleza).
   - Titular: "Análisis para la Gobernanza y el Desarrollo Sostenible".
   - Subtítulo: "Investigaciones, artículos de opinión y espacios de diálogo sobre el futuro político y ambiental del Perú".
   - Botón de llamada a la acción (CTA): "Explorar publicaciones" que haga scroll suave a la sección correspondiente.

3. SECCIÓN "ÚLTIMAS PUBLICACIONES":
   - Grid de tarjetas responsive (3 columnas en desktop, 1 en móvil).
   - Mínimo 6 artículos de prueba con datos y temáticas realistas del Perú (ejemplo: "Impacto del cambio climático en la agricultura andina", "Retos de la reforma política peruana", "Desalinización y gestión del agua en la costa peruana").
   - Cada tarjeta debe contener: Imagen destacada, badge de categoría (Política, Medio Ambiente, Economía, etc.), título, extracto de 2 líneas, nombre del autor, fecha y tiempo estimado de lectura.

4. SECCIÓN "PODCAST & AUDIO":
   - Módulo de reproductor interactivo en JS Vanilla para escuchar episodios.
   - Mínimo 3 episodios de muestra con títulos enfocados en la realidad peruana.
   - Cada elemento incluye: número de episodio, título, descripción breve, duración y un botón interactivo "Reproducir" que simule la reproducción mediante cambios en el DOM o estados de UI.

5. SECCIÓN "REPORTAJES Y MULTIMEDIA":
   - Galería de medios en grid masonry o grid regular adaptable.
   - Mínimo 4 ítems con imágenes/videos simulados, títulos overlays y efecto hover que muestre detalles del reportaje fotográfico.

6. FOOTER INSTITUCIONAL:
   - Estructura de 4 columnas en desktop:
     a) Logo + breve declaración de misión.
     b) Enlaces rápidos de navegación.
     c) Categorías de investigación.
     d) Redes sociales oficiales (iconos de SVG) + formulario de suscripción a boletín (input + botón).
   - Línea de copyright: "© 2026 Diálogo y Desarrollo. Todos los derechos reservados."

REQUISITOS TÉCNICOS:
- Arquitectura: Genera TODO el código en un ÚNICO archivo ejecutable `index.html` (el CSS y JS dentro del mismo archivo para pruebas rápidas).
- Stack: HTML5 totalmente semántico + Tailwind CSS (cargado exclusivamente vía CDN) + JavaScript Vanilla.
- Queda PROHIBIDO el uso de frameworks JS (React, Vue) o librerías adicionales de CSS/JS (sin jQuery, sin Swiper).
- Paleta de Colores:
  * Primario: Verde Bosque (`#1a472a`)
  * Secundario: Azul Marino (`#0f3460`)
  * Fondo/Base: Blanco Hueso (`#faf9f6`)
  * Texto Principal: Gris Oscuro (`#2d2d2d`)
  * Acento: Terracota / Arcilla (`#c75b39`)
- Tipografía: Importa desde Google Fonts la combinación: 'Playfair Display' (para títulos/serif) e 'Inter' (para cuerpo/sans-serif).
- Adaptabilidad (Responsive): Mobile-first estricto probando breakpoints sm, md, lg, xl.
- Accesibilidad (WCAG 2.1 AA): Alto contraste de texto sobre fondos, etiquetas ARIA en navegación y botones, atributo `alt` descriptivo en todas las imágenes, indicadores de enfoque (`focus:ring`) bien visibles.
- SEO Básico: Incluye `<meta description>`, etiquetas Open Graph (`og:title`, `og:image`, etc.), atributo `lang="es"`.

FORMATO DE SALIDA DESEADO:
Entrega únicamente la estructura completa y funcional en un bloque de código HTML (`index.html`). Al final del código, incluye una breve lista explicativa de las decisiones de diseño tomadas.
