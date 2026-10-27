/* ===== MENU MOBILE SUHOX_ ===== */
(function () {
    function initMobileMenu() {
        const navbar = document.querySelector('.navbar');
        if (!navbar) return;

        if (document.querySelector('.mobile-menu-button')) return;

        const button = document.createElement('button');
        button.className = 'mobile-menu-button';
        button.type = 'button';
        button.setAttribute('aria-label', 'Ouvrir le menu');
        button.setAttribute('aria-expanded', 'false');
        button.textContent = '☰';

        document.body.appendChild(button);

        function closeMenu() {
            navbar.classList.remove('mobile-menu-open');
            button.textContent = '☰';
            button.setAttribute('aria-label', 'Ouvrir le menu');
            button.setAttribute('aria-expanded', 'false');
        }

        function toggleMenu() {
            const open = navbar.classList.toggle('mobile-menu-open');
            button.textContent = open ? '✕' : '☰';
            button.setAttribute('aria-label', open ? 'Fermer le menu' : 'Ouvrir le menu');
            button.setAttribute('aria-expanded', String(open));
        }

        button.addEventListener('click', toggleMenu);

        navbar.querySelectorAll('a').forEach(function (link) {
            link.addEventListener('click', closeMenu);
        });

        document.addEventListener('keydown', function (event) {
            if (event.key === 'Escape') closeMenu();
        });

        document.addEventListener('click', function (event) {
            if (!navbar.contains(event.target) && !button.contains(event.target)) {
                closeMenu();
            }
        });

        window.addEventListener('resize', function () {
            if (window.innerWidth > 768) closeMenu();
        });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initMobileMenu);
    } else {
        initMobileMenu();
    }
})();
