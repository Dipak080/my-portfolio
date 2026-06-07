document.addEventListener('DOMContentLoaded', () => {
    const DATA = window.TUTORIALS || [];

    const grid = document.getElementById('tutGrid');
    const empty = document.getElementById('tutEmpty');
    const catMenu = document.getElementById('catMenu');
    const searchInput = document.getElementById('searchInput');
    const searchClear = document.getElementById('searchClear');
    const resultCount = document.getElementById('resultCount');
    const totalCount = document.getElementById('totalCount');
    const heroCount = document.getElementById('heroCount');

    let activeCat = 'All';
    let query = '';

    /* ---------- Build category list ---------- */
    const categories = ['All', ...Array.from(new Set(DATA.map((t) => t.cat)))];
    const countFor = (cat) => (cat === 'All' ? DATA.length : DATA.filter((t) => t.cat === cat).length);

    totalCount.textContent = `${DATA.length} tutorials · ${categories.length - 1} topics`;
    heroCount.textContent = `${DATA.length}`;

    categories.forEach((cat) => {
        const a = document.createElement('button');
        a.className = 'cat-btn' + (cat === 'All' ? ' active' : '');
        a.dataset.cat = cat;
        a.innerHTML = `<span>${cat}</span><span class="cat-count">${countFor(cat)}</span>`;
        a.addEventListener('click', () => {
            activeCat = cat;
            document.querySelectorAll('.cat-btn').forEach((b) => b.classList.toggle('active', b === a));
            render();
            closeSidebar();
        });
        catMenu.appendChild(a);
    });

    /* ---------- Escape helper (we set code via textContent, but titles via innerHTML for highlight) ---------- */
    const esc = (s) => s.replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
    const highlight = (text, q) => {
        const safe = esc(text);
        if (!q) return safe;
        const re = new RegExp('(' + q.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + ')', 'ig');
        return safe.replace(re, '<mark>$1</mark>');
    };

    /* ---------- Render cards ---------- */
    function render() {
        const q = query.trim().toLowerCase();
        const list = DATA.filter((t) => {
            const matchCat = activeCat === 'All' || t.cat === activeCat;
            const matchQ = !q ||
                t.title.toLowerCase().includes(q) ||
                t.desc.toLowerCase().includes(q) ||
                t.cat.toLowerCase().includes(q) ||
                t.code.toLowerCase().includes(q);
            return matchCat && matchQ;
        });

        grid.innerHTML = '';
        empty.hidden = list.length > 0;
        resultCount.textContent = `${list.length} ${list.length === 1 ? 'result' : 'results'}` +
            (activeCat !== 'All' ? ` in ${activeCat}` : '') + (q ? ` for “${query.trim()}”` : '');

        list.forEach((t) => {
            const card = document.createElement('article');
            card.className = 'tut-card';

            const head = document.createElement('div');
            head.className = 'tut-card-head';
            head.innerHTML =
                `<span class="tut-tag">${esc(t.cat)} · ${esc(t.lang)}</span>` +
                `<button class="copy-btn" type="button">Copy</button>`;

            const h3 = document.createElement('h3');
            h3.innerHTML = highlight(t.title, query.trim());

            const desc = document.createElement('p');
            desc.className = 'tut-card-desc';
            desc.innerHTML = highlight(t.desc, query.trim());

            const pre = document.createElement('pre');
            const code = document.createElement('code');
            code.textContent = t.code;          // safe: literal code, no HTML parsing
            pre.appendChild(code);

            // Copy handler
            head.querySelector('.copy-btn').addEventListener('click', (e) => copy(e.currentTarget, t.code));

            card.append(head, h3, desc, pre);
            grid.appendChild(card);
        });
    }

    /* ---------- Copy to clipboard ---------- */
    async function copy(btn, text) {
        try {
            await navigator.clipboard.writeText(text);
        } catch {
            const ta = document.createElement('textarea');
            ta.value = text;
            ta.style.position = 'fixed';
            ta.style.opacity = '0';
            document.body.appendChild(ta);
            ta.select();
            document.execCommand('copy');
            document.body.removeChild(ta);
        }
        btn.textContent = '✓ Copied';
        btn.classList.add('copied');
        setTimeout(() => {
            btn.textContent = 'Copy';
            btn.classList.remove('copied');
        }, 1500);
    }

    /* ---------- Search ---------- */
    let debounce;
    searchInput.addEventListener('input', (e) => {
        query = e.target.value;
        searchClear.hidden = query.length === 0;
        clearTimeout(debounce);
        debounce = setTimeout(render, 120);
    });
    searchClear.addEventListener('click', () => {
        query = '';
        searchInput.value = '';
        searchClear.hidden = true;
        searchInput.focus();
        render();
    });

    /* ---------- Scroll progress + back to top ---------- */
    const progress = document.getElementById('scrollProgress');
    const backToTop = document.getElementById('backToTop');
    const onScroll = () => {
        const scrolled = window.scrollY;
        const height = document.documentElement.scrollHeight - window.innerHeight;
        if (progress) progress.style.width = height > 0 ? `${(scrolled / height) * 100}%` : '0%';
        if (backToTop) backToTop.classList.toggle('show', scrolled > 400);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

    /* ---------- Mobile sidebar ---------- */
    const sidebar = document.getElementById('tutSidebar');
    const toggle = document.getElementById('sidebarToggle');
    const backdrop = document.getElementById('tutBackdrop');
    function closeSidebar() {
        sidebar.classList.remove('open');
        toggle.classList.remove('open');
        backdrop.classList.remove('show');
    }
    toggle.addEventListener('click', () => {
        const open = sidebar.classList.toggle('open');
        toggle.classList.toggle('open', open);
        backdrop.classList.toggle('show', open);
    });
    backdrop.addEventListener('click', closeSidebar);

    /* ---------- Initial paint ---------- */
    render();
    onScroll();
});
