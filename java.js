 function cambiarModo() {
            const themeToggle = document.getElementById('cambio');
            const body = document.body;

            // Verificar si hay una preferencia guardada
            const savedTheme = localStorage.getItem('theme');
            if (savedTheme === 'claro') {
                body.classList.add('tema-claro');
                themeToggle.checked = true;
            }
            
            // Escuchar cambios en el interruptor
            themeToggle.addEventListener('change', function() {
                if (this.checked) {
                    body.classList.add('tema-claro');
                    localStorage.setItem('theme', 'claro');
                } else {
                    body.classList.remove('tema-claro');
                    localStorage.setItem('theme', 'oscuro');
                }
            });
        }

        // Llamar a la función cuando el DOM esté cargado
        document.addEventListener('DOMContentLoaded', function() {
            cambiarModo();
        });

        // Función de ejemplo para probar que JavaScript funciona
        function mostrarMensaje() {
            alert('¡JavaScript está funcionando correctamente!');
        }


        const hamburger = document.getElementById('hamburger');
        const overlay = document.getElementById('mobileMenu');
        const closeBtn = document.getElementById('closeBtn');

        hamburger.addEventListener('click', () => {
            overlay.classList.add('show');
        });

        closeBtn.addEventListener('click', () => {
            overlay.classList.remove('show');
        });

        overlay.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                overlay.classList.remove('show');
            });
        }); 
        // Selecciona todos los enlaces internos del menú
        document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault(); // Evita el salto automático

            const targetId = link.getAttribute('href').substring(1); // Quita el #
            const targetElem = document.getElementById(targetId);

            if (targetElem) {
                // Scroll suave hasta la posición menos 60px
                const offset = 60;
                const topPos = targetElem.getBoundingClientRect().top + window.scrollY - offset;

                window.scrollTo({
                    top: topPos,
                    behavior: 'smooth'
                });

            // Cierra overlay si está abierto (para móvil)
            if (overlay.classList.contains('show')) {
                overlay.classList.remove('show');
            }
            }
        });
    });
    const elements = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.1 
});

elements.forEach(el => observer.observe(el));
