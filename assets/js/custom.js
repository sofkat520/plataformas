/* ===================================================
   INTERACTIVIDAD JS CUSTOM - SOFIA ROJAS
   1. Cambio de Tema (Modo Claro / Modo Oscuro)
   2. Renderizado y Ordenamiento Dinámico de Proyectos
   =================================================== */

document.addEventListener('DOMContentLoaded', () => {

    // ----------------------------------------------------
    // 1. FUNCIONALIDAD: MODO CLARO / MODO OSCURO
    // ----------------------------------------------------
    const themeBtn = document.getElementById('theme-toggle');
    let isLightMode = localStorage.getItem('theme') === 'light';

    const applyTheme = (light) => {
        if (light) {
            document.body.classList.add('light-mode');
            themeBtn.textContent = '🌙 Modo Oscuro';
        } else {
            document.body.classList.remove('light-mode');
            themeBtn.textContent = '☀️ Modo Claro';
        }
    };

    applyTheme(isLightMode);

    if (themeBtn) {
        themeBtn.addEventListener('click', () => {
            isLightMode = !isLightMode;
            localStorage.setItem('theme', isLightMode ? 'light' : 'dark');
            applyTheme(isLightMode);
        });
    }

    // ----------------------------------------------------
    // 2. FUNCIONALIDAD: PROYECTOS DINÁMICOS Y ORDENAMIENTO
    // ----------------------------------------------------
    const projectsContainer = document.getElementById('projects-container');
    const sortNewestBtn = document.getElementById('sort-newest');
    const sortOldestBtn = document.getElementById('sort-oldest');

    // Lista de proyectos con sus URLs de GitHub
    const projects = [
        {
            id: 1,
            title: "Sistema de Gestión Académica 🎓",
            description: "Aplicación para el registro de matriculados, notas y asistencias utilizando Java y MySQL.",
            image: "images/ges.jpg",
            date: "2024-06-15",
            year: "2024",
            githubUrl: "https://github.com/sofkat520/plataformas"
        },
        {
            id: 2,
            title: "E-Commerce Web Cute 🛍️",
            description: "Plataforma de ventas en línea responsive construida con HTML, CSS y manipulación dinámica con JS.",
            image: "images/tar.jpg",
            date: "2024-11-20",
            year: "2024",
            githubUrl: "https://github.com/sofkat520/plataformas"
        },
        {
            id: 3,
            title: "App Móvil de Tareas 📱",
            description: "Aplicación interactiva para organización personal y seguimiento de actividades pendientes.",
            image: "images/uni.jpg",
            date: "2025-04-10",
            year: "2025",
            githubUrl: "https://github.com/sofkat520/plataformas"
        },
        {
            id: 4,
            title: "Red de Datos Universitaria 🌐",
            description: "Diseño y simulación de la infraestructura de red para un campus en Cisco Packet Tracer.",
            image: "images/web.jpg",
            date: "2025-10-05",
            year: "2025",
            githubUrl: "https://github.com/sofkat520/plataformas"
        }
    ];

    // Renderizar proyectos (Imagen normal + Enlace únicamente en 'Ver más')
    const renderProjects = (items) => {
        if (!projectsContainer) return;
        
        projectsContainer.innerHTML = items.map(proj => `
            <article>
                <span class="image"><img src="${proj.image}" alt="${proj.title}" /></span>
                <h3 class="major">${proj.title}</h3>
                <p><small style="color: #ff85b3; font-weight: bold;">📅 Año: ${proj.year}</small></p>
                <p>${proj.description}</p>
                <a href="${proj.githubUrl}" target="_blank" rel="noopener noreferrer" class="special">Ver más</a>
            </article>
        `).join('');
    };

    // Ordenar de más nuevo a más antiguo
    const sortNewest = () => {
        const sorted = [...projects].sort((a, b) => new Date(b.date) - new Date(a.date));
        renderProjects(sorted);
        if (sortNewestBtn && sortOldestBtn) {
            sortNewestBtn.classList.add('primary');
            sortOldestBtn.classList.remove('primary');
        }
    };

    // Ordenar de más antiguo a más nuevo
    const sortOldest = () => {
        const sorted = [...projects].sort((a, b) => new Date(a.date) - new Date(b.date));
        renderProjects(sorted);
        if (sortNewestBtn && sortOldestBtn) {
            sortOldestBtn.classList.add('primary');
            sortNewestBtn.classList.remove('primary');
        }
    };

    // Eventos de los botones de ordenamiento
    if (sortNewestBtn && sortOldestBtn) {
        sortNewestBtn.addEventListener('click', sortNewest);
        sortOldestBtn.addEventListener('click', sortOldest);
    }

    // Carga inicial
    sortNewest();
});