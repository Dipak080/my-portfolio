document.addEventListener('DOMContentLoaded', () => {
    /* ---------- Copy buttons ---------- */
    document.querySelectorAll('.copy-btn').forEach((btn) => {
        btn.addEventListener('click', async () => {
            const code = btn.closest('.code-block').querySelector('pre code');
            const text = code.innerText;
            try {
                await navigator.clipboard.writeText(text);
            } catch {
                // Fallback for non-secure contexts (e.g. opening via file://)
                const ta = document.createElement('textarea');
                ta.value = text;
                ta.style.position = 'fixed';
                ta.style.opacity = '0';
                document.body.appendChild(ta);
                ta.select();
                document.execCommand('copy');
                document.body.removeChild(ta);
            }
            const original = btn.textContent;
            btn.textContent = '✓ Copied';
            btn.classList.add('copied');
            setTimeout(() => {
                btn.textContent = original;
                btn.classList.remove('copied');
            }, 1600);
        });
    });

    /* ---------- Scroll progress ---------- */
    const progress = document.getElementById('scrollProgress');
    const backToTop = document.getElementById('backToTop');
    const onScroll = () => {
        const scrolled = window.scrollY;
        const height = document.documentElement.scrollHeight - window.innerHeight;
        if (progress) progress.style.width = height > 0 ? `${(scrolled / height) * 100}%` : '0%';
        if (backToTop) backToTop.classList.toggle('show', scrolled > 400);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    if (backToTop) {
        backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
    }

    /* ---------- Active menu item on scroll ---------- */
    const menuLinks = Array.from(document.querySelectorAll('#tutMenu a'));
    const sections = menuLinks
        .map((a) => document.querySelector(a.getAttribute('href')))
        .filter(Boolean);

    const spy = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            const id = entry.target.id;
            menuLinks.forEach((a) =>
                a.classList.toggle('active', a.getAttribute('href') === `#${id}`)
            );
        });
    }, { rootMargin: '-30% 0px -65% 0px' });
    sections.forEach((s) => spy.observe(s));

    /* ---------- Mobile sidebar ---------- */
    const sidebar = document.getElementById('tutSidebar');
    const toggle = document.getElementById('sidebarToggle');
    const backdrop = document.getElementById('tutBackdrop');

    const closeSidebar = () => {
        sidebar.classList.remove('open');
        toggle.classList.remove('open');
        backdrop.classList.remove('show');
    };

    if (toggle) {
        toggle.addEventListener('click', () => {
            const isOpen = sidebar.classList.toggle('open');
            toggle.classList.toggle('open', isOpen);
            backdrop.classList.toggle('show', isOpen);
        });
    }
    if (backdrop) backdrop.addEventListener('click', closeSidebar);
    menuLinks.forEach((a) => a.addEventListener('click', closeSidebar));
});
