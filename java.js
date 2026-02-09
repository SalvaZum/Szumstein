export function cargarNavbar() {
    fetch("barraNavegacion.html")
      .then(response => response.text())
      .then(data => {
        document.getElementById("navbar").innerHTML = data;

        // Todo el JS que depende del navbar va acá
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
            
        const body = document.body;

        // Scroll suave
        document.querySelectorAll('a[href^="#"]').forEach(link => {
            link.addEventListener('click', e => {
                e.preventDefault();
                const targetId = link.getAttribute('href').substring(1);
                const targetElem = document.getElementById(targetId);
                if (targetElem) {
                    const offset = 60;
                    const topPos = targetElem.getBoundingClientRect().top + window.scrollY - offset;
                    window.scrollTo({ top: topPos, behavior: 'smooth' });

                    if (overlay.classList.contains('show')) {
                        overlay.classList.remove('show');
                    }
                }
            });
        });
    });
}

//Animacion fade-in
const faders = document.querySelectorAll(".fade-in");

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        obs.unobserve(entry.target); // opcional: solo animar una vez
      }
    });
  }, {
    threshold: 0.1 // dispara cuando el 20% del elemento es visible
  });

  faders.forEach(el => observer.observe(el));
  