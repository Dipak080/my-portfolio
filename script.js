document.addEventListener('DOMContentLoaded', () => {
    /* ---------- Current year ---------- */
    const yearEl = document.getElementById('year');
    if (yearEl) yearEl.textContent = new Date().getFullYear();

    /* ---------- Navbar scroll state + progress bar ---------- */
    const navbar = document.getElementById('navbar');
    const progress = document.getElementById('scrollProgress');
    const onScroll = () => {
        const scrolled = window.scrollY;
        navbar.classList.toggle('scrolled', scrolled > 30);
        const height = document.documentElement.scrollHeight - window.innerHeight;
        progress.style.width = height > 0 ? `${(scrolled / height) * 100}%` : '0%';
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    /* ---------- Mobile nav toggle ---------- */
    const navToggle = document.getElementById('navToggle');
    const navLinks = document.getElementById('navLinks');
    navToggle.addEventListener('click', () => {
        navToggle.classList.toggle('open');
        navLinks.classList.toggle('open');
    });
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navToggle.classList.remove('open');
            navLinks.classList.remove('open');
        });
    });

    /* ---------- Typing effect ---------- */
    const typedEl = document.getElementById('typed');
    if (typedEl) {
        const roles = [
            'Full-Stack Developer',
            'PHP & CodeIgniter Dev',
            'React & React Native Dev',
            'REST API Builder',
        ];
        let roleIndex = 0, charIndex = 0, deleting = false;
        const type = () => {
            const current = roles[roleIndex];
            typedEl.textContent = current.slice(0, charIndex);
            if (!deleting && charIndex < current.length) {
                charIndex++;
                setTimeout(type, 80);
            } else if (deleting && charIndex > 0) {
                charIndex--;
                setTimeout(type, 40);
            } else if (!deleting && charIndex === current.length) {
                deleting = true;
                setTimeout(type, 1600);
            } else {
                deleting = false;
                roleIndex = (roleIndex + 1) % roles.length;
                setTimeout(type, 300);
            }
        };
        type();
    }

    /* ---------- Scroll reveal ---------- */
    const reveals = document.querySelectorAll('.reveal');
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, i) => {
            if (entry.isIntersecting) {
                setTimeout(() => entry.target.classList.add('visible'), i * 60);
                revealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12 });
    reveals.forEach(el => revealObserver.observe(el));

    /* ---------- Animated stat counters ---------- */
    const counters = document.querySelectorAll('.stat-num');
    const countObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            const el = entry.target;
            const target = parseInt(el.dataset.count, 10);
            let value = 0;
            const step = Math.max(1, Math.ceil(target / 40));
            const tick = () => {
                value = Math.min(value + step, target);
                el.textContent = value;
                if (value < target) requestAnimationFrame(tick);
            };
            tick();
            countObserver.unobserve(el);
        });
    }, { threshold: 0.5 });
    counters.forEach(el => countObserver.observe(el));

    /* ---------- Guided menu tutorial ---------- */
    const tour = {
        overlay: document.getElementById('tourOverlay'),
        spotlight: document.getElementById('tourSpotlight'),
        tooltip: document.getElementById('tourTooltip'),
        count: document.getElementById('tourStepCount'),
        title: document.getElementById('tourTitle'),
        text: document.getElementById('tourText'),
        prev: document.getElementById('tourPrev'),
        next: document.getElementById('tourNext'),
        skip: document.getElementById('tourSkip'),
        fab: document.getElementById('tourFab'),
        index: 0,
    };

    const tourSteps = [
        { sel: '.logo', title: 'Welcome! 👋', text: "Quick 30-second tour of this portfolio. This is the home button — click the logo anytime to jump back to the top." },
        { sel: 'a[href="#about"]', title: 'About Me', text: 'Learn who I am, my approach to building software, and my current tech stack.' },
        { sel: 'a[href="#skills"]', title: 'Skills', text: 'Browse the tools I build with — backend, frontend, databases and practices.' },
        { sel: 'a[href="#projects"]', title: 'Projects', text: 'See my featured work, including TaskOps — a multi-tenant SaaS platform I built.' },
        { sel: 'a[href="#contact"]', title: 'Contact', text: "Reach out through the contact form or email — I'm open to new opportunities." },
        { sel: '.nav-cta', title: 'Hire Me 🚀', text: "Like what you see? This button opens an email straight to me. That's the tour — enjoy!" },
    ];

    const isMobile = () => window.matchMedia('(max-width: 880px)').matches;

    const positionTour = () => {
        const step = tourSteps[tour.index];
        const target = document.querySelector(step.sel);
        if (!target) return;
        const r = target.getBoundingClientRect();
        const pad = 8;
        tour.spotlight.style.width = `${r.width + pad * 2}px`;
        tour.spotlight.style.height = `${r.height + pad * 2}px`;
        tour.spotlight.style.top = `${r.top - pad}px`;
        tour.spotlight.style.left = `${r.left - pad}px`;

        // Place tooltip below the target, clamped to viewport
        const tipW = Math.min(320, window.innerWidth - 32);
        let top = r.bottom + 16;
        let left = r.left + r.width / 2 - tipW / 2;
        left = Math.max(16, Math.min(left, window.innerWidth - tipW - 16));
        if (top + 220 > window.innerHeight) top = Math.max(16, r.top - 200);
        tour.tooltip.style.top = `${top}px`;
        tour.tooltip.style.left = `${left}px`;
    };

    const renderTour = () => {
        const step = tourSteps[tour.index];
        tour.count.textContent = `STEP ${tour.index + 1} OF ${tourSteps.length}`;
        tour.title.textContent = step.title;
        tour.text.textContent = step.text;
        tour.prev.disabled = tour.index === 0;
        tour.next.textContent = tour.index === tourSteps.length - 1 ? 'Done' : 'Next';
        positionTour();
    };

    const openMobileNavForTour = () => {
        // On mobile the nav links are hidden behind the hamburger — open it so highlights are visible
        if (isMobile()) {
            navToggle.classList.add('open');
            navLinks.classList.add('open');
        }
    };

    const startTour = () => {
        tour.index = 0;
        openMobileNavForTour();
        tour.overlay.classList.add('active');
        tour.overlay.setAttribute('aria-hidden', 'false');
        renderTour();
    };

    const endTour = () => {
        tour.overlay.classList.remove('active');
        tour.overlay.setAttribute('aria-hidden', 'true');
        if (isMobile()) {
            navToggle.classList.remove('open');
            navLinks.classList.remove('open');
        }
        localStorage.setItem('tourSeen', '1');
    };

    if (tour.overlay) {
        tour.next.addEventListener('click', () => {
            if (tour.index < tourSteps.length - 1) { tour.index++; renderTour(); }
            else endTour();
        });
        tour.prev.addEventListener('click', () => {
            if (tour.index > 0) { tour.index--; renderTour(); }
        });
        tour.skip.addEventListener('click', endTour);
        tour.fab.addEventListener('click', startTour);
        tour.overlay.addEventListener('click', (e) => { if (e.target === tour.overlay) endTour(); });
        document.addEventListener('keydown', (e) => {
            if (!tour.overlay.classList.contains('active')) return;
            if (e.key === 'Escape') endTour();
            if (e.key === 'ArrowRight') tour.next.click();
            if (e.key === 'ArrowLeft') tour.prev.click();
        });
        window.addEventListener('resize', () => {
            if (tour.overlay.classList.contains('active')) positionTour();
        });

        // Auto-launch on a visitor's first visit (slight delay so the page settles)
        if (!localStorage.getItem('tourSeen')) {
            setTimeout(startTour, 1400);
        }
    }

    /* ---------- Contact form (mailto fallback) ---------- */
    const form = document.getElementById('contactForm');
    const note = document.getElementById('formNote');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = encodeURIComponent(form.name.value.trim());
            const email = encodeURIComponent(form.email.value.trim());
            const message = encodeURIComponent(form.message.value.trim());
            const subject = `Portfolio contact from ${form.name.value.trim()}`;
            const body = `Name: ${decodeURIComponent(name)}%0D%0AEmail: ${decodeURIComponent(email)}%0D%0A%0D%0A${decodeURIComponent(message)}`;
            window.location.href = `mailto:dipakbarman080@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`;
            note.textContent = 'Opening your email app… thanks for reaching out! 🚀';
            form.reset();
        });
    }
});
