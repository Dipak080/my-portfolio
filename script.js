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
